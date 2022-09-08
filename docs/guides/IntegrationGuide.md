---
id: integration-guide
title: Perp v2 Integration Guide
sidebar_position: 1
---

## Which contracts should I be interacting with?

There are three main contracts:
1. `Vault`: where all users' funds are stored, including USDC and non-USDC collaterals
2. `ClearingHouse`:
	- the main component that manages all markets of Perp v2
    - As a taker, one can open or close positions
    - As a maker, one can add or remove liquidity 
    - As a liquidator, one can liquidate someone's position that is close to or already bankrupt and get liquidation fees as the reward
3. `AccountBalance`: where most of the information of a trader can be queried, such as position size, position value, etc

---

### Install Curie npm package

```jsx
npm install @perp/curie-contract 
```

Node version: 12 (or 16 for M1 CPU)

---

## Vault

This contract is mainly used for depositing and withdrawing collaterals.

### Deposit
#### `Vault.deposit`

Deposit collateral

```tsx
function deposit(address token, uint256 amount) external;
```

Parameters:
- `token`: the address of the collateral
- `amount`: the amount to be deposited

Example:
```tsx
IVault(VAULT_ADDR).deposit(TOKEN_ADDR, AMOUNT)
```

### Withdraw

When withdrawing collaterals, one can withdraw the amount up to one's `freeCollateral`. This ensures that one's positions are always sufficiently collateralized.

#### `Vault.getFreeCollateral`

How many collaterals a trader can withdraw

```tsx
function getFreeCollateral(address trader) external view returns (uint256);
```

Parameter:
- `trader`: the address of the trader

---

#### `Vault.withdraw`

Withdraw collaterals of the specified amount

```tsx
function withdraw(address token, uint256 amount) external;
```

Parameters:
- `token`: the address of the collateral
- `amount`: the amount to be withdrawn, which should not exceed `freeCollateral`

Example:
```tsx
IVault vault = IVault(VAULT_ADDR);

uint256 freeCollateral = vault.getFreeCollateral(TRADER_ADDR);

vault.withdraw(TOKEN_ADDR, AMOUNT);
```

---

## ClearingHouse

ClearingHouse manages all markets of Perp v2.

For each market, we deploy a pair of two virtual tokens (with no real value) and initiate a new Uniswap V3 pool to provide liquidity to.
- Base token: the virtual underlying asset users are trading for, such as vETH, vBTC
- Quote token: the counter currency of base token, which is always vUSDC for any base token

### Open Position
#### `ClearingHouse.openPosition`

Open a new position or adjust the position size of an existing one

```tsx
struct OpenPositionParams {
    address baseToken;
    bool isBaseToQuote;
    bool isExactInput;
    uint256 amount;
	uint256 oppositeAmountBound;
    uint256 deadline;
    uint160 sqrtPriceLimitX96;
	bytes32 referralCode;
}

function openPosition(OpenPositionParams memory params) external returns (uint256 base, uint256 quote);
```

Parameters:

- `baseToken`: the address of the base token, which suggests the market to trade in
- `isBaseToQuote`: `true` for shorting the base token asset and `false` for longing
- `isExactInput`: for specifying `exactInput` or `exactOutput` ; similar to UniSwap V2's specs
- `amount`: the amount specified. Depending on the `isExactInput` parameter, this can be either the input amount or output amount.
- `oppositeAmountBound`: the restriction on how many token to receive/pay, depending on `isBaseToQuote` & `isExactInput`
    - `isBaseToQuote` && `isExactInput`: want more output quote as possible, so we set a lower bound of output quote
    - `isBaseToQuote` && `!isExactInput`: want less input base as possible, so we set a upper bound of input base
    - `!isBaseToQuote` && `isExactInput`: want more output base as possible, so we set a lower bound of output base
    - `!isBaseToQuote` && `!isExactInput`: want less input quote as possible, so we set a upper bound of input quote
- `deadline`: the restriction on when the tx should be executed; otherwise, tx will get reverted
- `sqrtPriceLimitX96`: the restriction on the ending price after the swap; `0` for no limit. This is the same as `sqrtPriceLimitX96` in the UniSwap V3 contract.
- `referralCode`: the referral code for partners

Return values:
- `base`: the amount of base token exchanged
- `quote`: the amount of quote token exchanged

**Example:**

- Long 1 vETH

```tsx
ClearingHouse clearingHouse = ClearingHouse(CH_ADDR);

IClearingHouse.OpenPositionParams params = IClearingHouse.OpenPositionParams({
	baseToken: VETH_ADDR,
	isBaseToQuote: false, // false for longing
	isExactInput: false, // false for specifying the output vETH amount
	amount: 1 ether,
	oppositeAmountBound: 0, // no amount limit
	sqrtPriceLimitX96: 0 // no price limit
	deadline: block.timestamp + 900, // take 15 minutes for example
	referralCode: 0x0000000000000000000000000000000000000000000000000000000000000000 // no referral code
})

// quote is the amount of quote token the taker pays
// base is the amount of base token the taker gets
(uint256 base, uint256 quote) = clearingHouse.openPosition(params)
```

### Close Position

Close an existing position

#### `ClearingHouse.closePosition`

```jsx
struct ClosePositionParams {
	address baseToken;
	uint160 sqrtPriceLimitX96;
	uint256 oppositeAmountBound;
	uint256 deadline;
	bytes32 referralCode;
}

function closePosition(ClosePositionParams calldata params) external returns (uint256 base, uint256 quote);
```
The params are pretty much the same as `openPosition`.

**Example:**

- Close the 1 vETH long position in the above example of `openPosition`

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

Provide liquidity

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

struct AddLiquidityResponse {
    uint256 base;
    uint256 quote;
    uint256 fee;
    uint256 liquidity;
}

function addLiquidity(AddLiquidityParams calldata params) external returns (AddLiquidityResponse memory)
```

Parameters:

- `baseToken`: the base token address
- `base`: the amount of base token you want to provide
- `quote`: the amount of quote token you want to provide
- `lowerTick`: lower tick of liquidity range, same as UniSwap V3
- `upperTick`: upper tick of liquidity range, same as UniSwap V3
- `minBase`: the minimum amount of base token you'd like to provide
- `minQuote`: the minimum amount of quote token you'd like to provide
- `deadline`: a time after which the transaction can no longer be executed

Return values:

- `base`: the amount of base token added to the pool
- `quote`: the amount of quote token added to the pool
- `fee`: the amount of fee collected if there is any
- `liquidity`: the amount of liquidity added to the pool, derived from `base` & `quote`

**Example:**

- Provide liquidity to vETH/vUSDC pair with 2 vETH and 100 vUSDC, in the **tick** range [50000, 51000)
	- The range for liquidity on Perp V2 and Uniswap V3 is always expressed in tick

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

struct RemoveLiquidityResponse {
    uint256 base;
    uint256 quote;
    uint256 fee;
}

function removeLiquidity(RemoveLiquidityParams calldata params) external returns (RemoveLiquidityResponse memory)
```

Parameters:

- `baseToken`: the address of base token
- `lowerTick`: lower tick of liquidity range, same as UniSwap V3
- `upperTick`: upper tick of liquidity range, same as UniSwap V3
- `liquidity`: how much liquidity you want to remove, same as UniSwap V3
- `minBase`: the minimum amount of base token you want to remove
- `minQuote`: the minimum amount of quote token you want to remove
- `deadline`: a time after which the transaction can no longer be executed

Return values:

- `base`: the amount of base token removed from pool
- `quote`: the amount of quote token removed from pool
- `fee`: the amount of fee collected if there is any

**Example:**

- Remove 12 units of liquidity from vETH/vUSDC pair, in the tick range [50000, 51000) with a minimum requirement of 1 ETH that should be successfully removed

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

- Collect maker's fees by **removing zero liquidity**

```tsx
ClearingHouse clearingHouse = ClearingHouse(CH_ADDR);

IClearingHouse.RemoveLiquidityParams params = ClearingHouse.RemoveLiquidityParams({
	baseToken: VETH_ADDR,
	lowerTick: 50000,
	upperTick: 51000,
	liquidity: 0, // removing 0 liquidity is interpreted as to collect the accumulated swapping fees since last collection
	minBase: 0,
	minQuote: 0,
	deadline: block.timestamp
})

// response.fee is the fees a maker gets
RemoveLiquidityResponse memory response = clearingHouse.addLiquidity(params)
```

### Get Account Value
#### `ClearingHouse.getAccountValue`

Get the total worth of one's positions denominated in USDC

```tsx
function getAccountValue(address trader) public view returns (int256);
```

Parameter:
- `account`: the address of the trader
