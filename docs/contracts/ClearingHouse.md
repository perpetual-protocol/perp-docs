### InternalOpenPositionParams
```solidity
  struct InternalOpenPositionParams(
    address trader
    address baseToken
    bool isBaseToQuote
    bool isExactInput
    bool isClose
    uint256 amount
    uint160 sqrtPriceLimitX96
  )
```



### InternalCheckSlippageParams
```solidity
  struct InternalCheckSlippageParams(
    bool isBaseToQuote
    bool isExactInput
    uint256 base
    uint256 quote
    uint256 oppositeAmountBound
  )
```




## Functions
### initialize
```solidity
  function initialize(
  ) public
```

this function is public for testing


### setDelegateApproval
```solidity
  function setDelegateApproval(
  ) external
```

remove to reduce bytecode size, might add back when we need it


### addLiquidity
```solidity
  function addLiquidity(
    struct IClearingHouse.AddLiquidityParams params
  ) external returns (struct IClearingHouse.AddLiquidityResponse)
```
Maker can call `addLiquidity` to provide liquidity on Uniswap V3 pool

Tx will fail if adding `base == 0 && quote == 0` / `liquidity == 0`
- `AddLiquidityParams.useTakerBalance` is only accept `false` now

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`params` | struct IClearingHouse.AddLiquidityParams | AddLiquidityParams struct

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`response` | struct IClearingHouse.AddLiquidityResponse | AddLiquidityResponse struct
### removeLiquidity
```solidity
  function removeLiquidity(
    struct IClearingHouse.RemoveLiquidityParams params
  ) external returns (struct IClearingHouse.RemoveLiquidityResponse)
```
Maker can call `removeLiquidity` to remove liquidity

remove liquidity will transfer maker impermanent position to taker position,
if `liquidity` of RemoveLiquidityParams struct is zero, the action will collect fee from
pool to maker

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`params` | struct IClearingHouse.RemoveLiquidityParams | RemoveLiquidityParams struct

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`response` | struct IClearingHouse.RemoveLiquidityResponse | RemoveLiquidityResponse struct
### settleAllFunding
```solidity
  function settleAllFunding(
    address trader
  ) external
```
Settle all markets fundingPayment to owedRealized Pnl


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader

### openPosition
```solidity
  function openPosition(
    struct IClearingHouse.OpenPositionParams params
  ) external returns (uint256 base, uint256 quote)
```
Trader can call `openPosition` to long/short on baseToken market

- `OpenPositionParams.oppositeAmountBound`
    - B2Q + exact input, want more output quote as possible, so we set a lower bound of output quote
    - B2Q + exact output, want less input base as possible, so we set a upper bound of input base
    - Q2B + exact input, want more output base as possible, so we set a lower bound of output base
    - Q2B + exact output, want less input quote as possible, so we set a upper bound of input quote
    > when it's set to 0, it will disable slippage protection entirely regardless of exact input or output
    > when it's over or under the bound, it will be reverted
- `OpenPositionParams.sqrtPriceLimitX96`
    - B2Q: the price cannot be less than this value after the swap
    - Q2B: the price cannot be greater than this value after the swap
    > it will fill the trade until it reaches the price limit but WON'T REVERT
    > when it's set to 0, it will disable price limit;
    > when it's 0 and exact output, the output amount is required to be identical to the param amount

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`params` | struct IClearingHouse.OpenPositionParams | OpenPositionParams struct

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`base` | uint256 | The amount of baseToken the taker got or spent
|`quote` | uint256 | The amount of quoteToken the taker got or spent
### openPositionFor
```solidity
  function openPositionFor(
    address trader,
    struct IClearingHouse.OpenPositionParams params
  ) external returns (uint256 base, uint256 quote, uint256 fee)
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`params` | struct IClearingHouse.OpenPositionParams | OpenPositionParams struct is the same as `openPosition()`

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`base` | uint256 | The amount of baseToken the taker got or spent
|`quote` | uint256 | The amount of quoteToken the taker got or spent
|`fee` | uint256 | The trading fee
### closePosition
```solidity
  function closePosition(
    struct IClearingHouse.ClosePositionParams params
  ) external returns (uint256 base, uint256 quote)
```
Close trader's position


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`params` | struct IClearingHouse.ClosePositionParams | ClosePositionParams struct

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`base` | uint256 | The amount of baseToken the taker got or spent
|`quote` | uint256 | The amount of quoteToken the taker got or spent
### liquidate
```solidity
  function liquidate(
    address trader,
    address baseToken,
    int256 positionSize
  ) external
```
If trader is underwater, any one can call `liquidate` to liquidate this trader

If trader has open orders, need to call `cancelAllExcessOrders` first
If positionSize is greater than maxLiquidatePositionSize, liquidate maxLiquidatePositionSize by default
If margin ratio >= 0.5 * mmRatio,
        maxLiquidateRatio = MIN((1, 0.5 * totalAbsPositionValue / absPositionValue)
If margin ratio < 0.5 * mmRatio, maxLiquidateRatio = 1
maxLiquidatePositionSize = positionSize * maxLiquidateRatio

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken
|`positionSize` | int256 | the position size to be liquidated by liquidator

### liquidate
```solidity
  function liquidate(
    address trader,
    address baseToken,
     positionSize
  ) external
```
If trader is underwater, any one can call `liquidate` to liquidate this trader

If trader has open orders, need to call `cancelAllExcessOrders` first
If positionSize is greater than maxLiquidatePositionSize, liquidate maxLiquidatePositionSize by default
If margin ratio >= 0.5 * mmRatio,
        maxLiquidateRatio = MIN((1, 0.5 * totalAbsPositionValue / absPositionValue)
If margin ratio < 0.5 * mmRatio, maxLiquidateRatio = 1
maxLiquidatePositionSize = positionSize * maxLiquidateRatio

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken
|`positionSize` |  | the position size to be liquidated by liquidator

### cancelExcessOrders
```solidity
  function cancelExcessOrders(
    address maker,
    address baseToken,
    bytes32[] orderIds
  ) external
```
Cancel excess order of a maker

Order id can get from `OrderBook.getOpenOrderIds`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maker` | address | The address of Maker
|`baseToken` | address | The address of baseToken
|`orderIds` | bytes32[] | The id of the order

### cancelAllExcessOrders
```solidity
  function cancelAllExcessOrders(
    address maker,
    address baseToken
  ) external
```
Cancel all excess orders of a maker if the maker is underwater

This function won't fail if the maker has no order but fails when maker is not underwater

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maker` | address | The address of maker
|`baseToken` | address | The address of baseToken

### quitMarket
```solidity
  function quitMarket(
    address trader,
    address baseToken
  ) external returns (uint256 base, uint256 quote)
```
Close all positions and remove all liquidities of a trader in the closed market


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`base` | uint256 | The amount of base token that is closed
|`quote` | uint256 | The amount of quote token that is closed
### uniswapV3MintCallback
```solidity
  function uniswapV3MintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes data
  ) external
```
Called to `msg.sender` after minting liquidity to a position from IUniswapV3Pool#mint.

namings here follow Uniswap's convention
#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount0Owed` | uint256 | The amount of token0 due to the pool for the minted liquidity
|`amount1Owed` | uint256 | The amount of token1 due to the pool for the minted liquidity
|`data` | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#mint call

### uniswapV3SwapCallback
```solidity
  function uniswapV3SwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes data
  ) external
```
Called to `msg.sender` after executing a swap via IUniswapV3Pool#swap.

namings here follow Uniswap's convention
#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount0Delta` | int256 | The amount of token0 that was sent (negative) or must be received (positive) by the pool by
the end of the swap. If positive, the callback must send that amount of token0 to the pool.
|`amount1Delta` | int256 | The amount of token1 that was sent (negative) or must be received (positive) by the pool by
the end of the swap. If positive, the callback must send that amount of token1 to the pool.
|`data` | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#swap call

### getQuoteToken
```solidity
  function getQuoteToken(
  ) external returns (address)
```
Get QuoteToken address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`quoteToken` | address | The quote token address
### getUniswapV3Factory
```solidity
  function getUniswapV3Factory(
  ) external returns (address)
```
Get UniswapV3Factory address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`factory` | address | UniswapV3Factory address
### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```
Get ClearingHouseConfig address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouseConfig` | address | ClearingHouseConfig address
### getVault
```solidity
  function getVault(
  ) external returns (address)
```
Get `Vault` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault` | address | `Vault` address
### getExchange
```solidity
  function getExchange(
  ) external returns (address)
```
Get `Exchange` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`exchange` | address | `Exchange` address
### getOrderBook
```solidity
  function getOrderBook(
  ) external returns (address)
```
Get `OrderBook` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`orderBook` | address | `OrderBook` address
### getAccountBalance
```solidity
  function getAccountBalance(
  ) external returns (address)
```
Get AccountBalance address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`accountBalance` | address | `AccountBalance` address
### getInsuranceFund
```solidity
  function getInsuranceFund(
  ) external returns (address)
```
Get `InsuranceFund` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`insuranceFund` | address | `InsuranceFund` address
### getDelegateApproval
```solidity
  function getDelegateApproval(
  ) external returns (address)
```
Get `DelegateApproval` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`delegateApproval` | address | `DelegateApproval` address
### getAccountValue
```solidity
  function getAccountValue(
    address trader
  ) public returns (int256)
```
Get account value of trader

accountValue = totalCollateralValue + totalUnrealizedPnl, in 18 decimals

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`accountValue` | int256 | The account value of trader

