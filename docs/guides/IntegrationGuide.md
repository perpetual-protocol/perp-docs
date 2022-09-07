---
id: integration-guide
title: Perp v2 Integration Guide
sidebar_position: 1
---

:::note
💡 most of the API details will be merged to NatSpec doc
:::

## Which contracts should I interact with?

There are two main contracts users might interact with:

1. `Vault`: Store all users' collateral. We will support multi-asset as collateral. But for now, only USDC is supported
2. `ClearingHouse` : Clearing house is the main component in perp v2. 
    - It manages all trading markets in perp v2.
    - For a trader, he/she can open/close positions or open/cancel open orders (range orders, a feature of Uniswap V3).
    - For a maker, he/she can add or remove liquidity to/from a market.
    - As a liquidator, he/she can close someone's position that is under-collateralized and get liquidation fees from it.
3. `AccountBalance`:  where most balances of a trader are recorded, such as margin ratio, position size, position value, etc. This contract is pretty much filled with view functions, so the comments (or Natspec, if there is) in the contract code should be sufficient.

### Install Curie npm package

```jsx
npm install @perp/curie-contract 
```

Be sure to use Node 12. (Using Node 16 if your CPU is m1)

---

## Vault

Vault contract is mainly used for depositing and withdrawing.

### Check which tokens are supported in Vault as collateral

For now, only USDC is supported.

### Deposit

When depositing, only USDC is supported as collateral for now. We are working on supporting multi-assets in the near future.

#### `Vault.deposit`

Deposit collateral

```tsx
function deposit(address token, uint256 amount) external;
```

Parameter:

- `token`: the token address of USDC(only USDC for now)
- `amount`: the amount you want to deposit

Code sample(in solidity):

```tsx
IVault(VAULT_ADDR).deposit(TOKEN_ADDR, AMOUNT)
```

### Withdraw

When withdrawing collaterals, one can withdraw the amount up to your `freeCollateral`. This makes sure that positions are always sufficiently collateralized.

#### `Vault.getFreeCollateral`

Check how much collateral a trader can withdraw

```tsx
function getFreeCollateral(address trader) external view returns (uint256);
```

Parameter:

- `trader`: the address of the trader

---

#### `Vault.withdraw`

Withdraw the collateral token with the specified amount

```tsx
function withdraw(address token, uint256 amount) external;
```

Parameter:

- `token`: the collateral token address, same as `deposit` function
- `amount`: the amount you want to withdraw, which should not exceed `freeCollateral`

Code sample:

```tsx
IVault vault = IVault(VAULT_ADDR);
uint256 freeCollateral = vault.getFreeCollateral(address(this));
vault.withdraw(freeCollateral);
```

---

## ClearingHouse

Takers, makers, and liquidators all need to interact with ClearingHouse.

- For Takers: open/close position, open/cancel open order(a special case of adding/removing liquidity).
- For makers: add/remove liquidity to/from a market
- For liquidators: close trader's positions that don't meet the margin requirement

Clearing House manages all the markets in Perp v2. All the markets in Perp v2 have virtual token pairs on Uniswap V3. These virtual tokens are created by us and can be transferred between ClearingHouse and Uniswap V3 pools only. 

Two concepts you need to know before using perp v2:

- Base token: the virtual underlying asset that you are trading with, usually this can be vETH/vBTC/vDOT, etc.
- Quote token: virtual quote token, which is vUSDC for all pairs.

### Open Position

#### `ClearingHouse.openPosition`

Opening or adjust (increase or reduce) a position. 

```tsx
struct OpenPositionParams {
    address baseToken;
    bool isBaseToQuote;
    bool isExactInput;
    uint256 amount;
		uint256 oppositeAmountBound;
    uint256 deadline;
    uint160 sqrtPriceLimitX96; // price slippage protection
		bytes32 referralCode;
}

function openPosition(OpenPositionParams memory params) external returns (uint256 deltaBase, uint256 deltaQuote);
```

Parameter:

- `baseToken`: the address of the base token; specifies which market you want to trade in
- `isBaseToQuote`: `true` for shorting the base token asset, `false` for longing the base token asset
- `isExactInput`: for specifying `exactInput` or `exactOutput` ; similar to UniSwap V2's specs
- `amount`: the amount specified. Depending on the `isExactInput` parameter, this can be either the input amount or output amount.
- `oppositeAmountBound`: the restriction on how many token to receive/pay, depending on `isBaseToQuote` & `isExactInput`
    - `isBaseToQuote` && `isExactInput`: want more output quote as possible, so we set a lower bound of output quote
    - `isBaseToQuote` && `!isExactInput`: want less input base as possible, so we set a upper bound of input base
    - `!isBaseToQuote` && `isExactInput`: want more output base as possible, so we set a lower bound of output base
    - `!isBaseToQuote` && `!isExactInput`: want less input quote as possible, so we set a upper bound of input quote
- `deadline`: the restriction on when this tx should be executed; otherwise, it fails
- `sqrtPriceLimitX96`: the restriction on the ending price after the swap. `0` for no limit. This is the same as `sqrtPriceLimitX96` in the UniSwap V3 contract.
- `referralCode`: the referral code for partners

Returns:

- `deltaBase`: the amount of base token exchanged
- `deltaQuote`: the amount of quote token exchanged

**Code sample:**

- Long 1 vETH

```tsx
ClearingHouse clearingHouse = ClearingHouse(CH_ADDR);

IClearingHouse.OpenPositionParams params = IClearingHouse.OpenPositionParams({
	baseToken: VETH_ADDR,
	isBaseToQuote: false, // false for longing
	isExactInput: false,
	amount: 1 ether,
	oppositeAmountBound: 0, // 0 for no amount limit
	sqrtPriceLimitX96: 0 // 0 for no price limit
	deadline: block.timestamp + 900, // 15 minutes for example
	referralCode: 0x0000000000000000000000000000000000000000000000000000000000000000 // zero for example
})

// quote is the amount of quote token taker pays
// base is the amount of base token taker gets
(uint256 base, uint256 quote) = clearingHouse.openPosition(params)
```

### Close Position

Close a position.

#### `ClearingHouse.closePosition`

```jsx
struct ClosePositionParams {
		address baseToken;
		uint160 sqrtPriceLimitX96;
		uint256 oppositeAmountBound;
		uint256 deadline;
		bytes32 referralCode;
}

function closePosition(ClosePositionParams calldata params) external returns (uint256 deltaBase, uint256 deltaQuote);
```

Params are pretty much the same as `openPosition`.

**Code sample:**

- Close the 1 vETH long position in the example of `openPosition`

```tsx
ClearingHouse clearingHouse = ClearingHouse(CH_ADDR);

IClearingHouse.ClosePositionParams params = IClearingHouse.ClosePositionParams({
	baseToken: VETH_ADDR,
	sqrtPriceLimitX96: 0, 
	oppositeAmountBound: 0,
	deadline: block.timestamp + 900,
	referralCode: 0x0000000000000000000000000000000000000000000000000000000000000000 
})

(uint256 base, uint256 quote) = clearingHouse.closePosition(params)
```

### Add Liquidity

#### `ClearingHouse.addLiquidity`

Provide liquidity to a market.

```tsx
struct AddLiquidityParams {
        address baseToken;
        uint256 base;
        uint256 quote;
        int24 lowerTick;
        int24 upperTick;
        uint256 minBase;
        uint256 minQuote;
        uint256 deadline;
}

function addLiquidity(AddLiquidityParams calldata params) external returns (AddLiquidityResponse memory)
```

Parameter:

- `baseToken`: the base token address
- `base`: the amount of base token you want to provide
- `quote`: the amount of quote token you want to provide
- `lowerTick`: lower tick of liquidity range, same as UniSwap V3
- `upperTick`: upper tick of liquidity range, same as UniSwap V3
- `minBase`: the minimum amount of base token you'd like to provide
- `minQuote`: the minimum amount of quote token you'd like to provide
- `deadline`: a time after which the transaction can no longer be executed

Returns:

- `base`: the amount of base token added to the pool
- `quote`: the amount of quote token added to the pool
- `fee`: the amount of fee collected, if there is any
- `liquidity`: the amount of liquidity added to the pool, derived from `base` & `quote`

**Code sample:**

- Provide liquidity to vETH/vUSDC pair with 2 vETH and 100 vUSDC, in the range [50000, 51000)

```tsx
ClearingHouse clearingHouse = ClearingHouse(CH_ADDR);

IClearingHouse.AddLiquidityParams params = ClearingHouse.AddLiquidityParams({
	baseToken: VETH_ADDR,
	base: 2 ether,
	quote: 100 ether,
	lowerTick: 50000,
	upperTick: 51000,
	minBase: 0,
	minQuote: 0,
	deadline: block.timestamp
})

IClearingHouse.AddLiquidityResponse memory response = clearingHouse.addLiquidity(params);
```

### Remove Liquidity

#### `ClearingHouse.removeLiquidity`

```tsx
struct RemoveLiquidityParams {
        address baseToken;
        int24 lowerTick;
        int24 upperTick;
        uint128 liquidity;
        uint256 minBase;
        uint256 minQuote;
        uint256 deadline;
}

function removeLiquidity(RemoveLiquidityParams calldata params) external returns (RemoveLiquidityResponse memory)
```

Parameter:

- `baseToken`: the address of base token
- `lowerTick`: lower tick of liquidity range, same as UniSwap V3
- `upperTick`: upper tick of liquidity range, same as UniSwap V3
- `liquidity`: how much liquidity you want to remove, same as UniSwap V3
- `minBase`: the minimum amount of base token you want to remove
- `minQuote`: the minimum amount of quote token you want to remove
- `deadline`: a time after which the transaction can no longer be executed

Returns:

- `base`: the amount of base token removed from pool
- `quote`: the amount of quote token removed from pool
- `fee`: the amount of fee collected, if there is any

**Code sample:**

- Decrease 12 liquidity from vETH/vUSDC pair, in the range [50000, 51000), with minimum of 1 ETH

```tsx
ClearingHouse clearingHouse = ClearingHouse(CH_ADDR);

IClearingHouse.RemoveLiquidityParams params = ClearingHouse.RemoveLiquidityParams({
	baseToken: VETH_ADDR,
	lowerTick: 50000,
	upperTick: 51000,
	liquidity: 12,
	minBase: 1 ether,
	minQuote: 0,
	deadline: block.timestamp
})

RemoveLiquidityResponse memory response = clearingHouse.removeLiquidity(params);
```

Collect maker's fees by **removing zero liquidity**

```tsx
ClearingHouse clearingHouse = ClearingHouse(CH_ADDR);

IClearingHouse.RemoveLiquidityParams params = ClearingHouse.RemoveLiquidityParams({
	baseToken: VETH_ADDR,
	lowerTick: 50000,
	upperTick: 51000,
	liquidity: 0, // zero means only collect the accumulated swap fees since last collect
	minBase: 0,
	minQuote: 0,
	deadline: block.timestamp
})

// response.fee is the fee the maker gets
RemoveLiquidityResponse memory response = clearingHouse.addLiquidity(params)
```

### Get Account Value

#### `ClearingHouse.getAccountValue`

Get how much your positions are worth. Denominated in USDC.

```tsx
function getAccountValue(address trader) public view returns (int256);
```

Parameter:

- `account`: the address of the trader
