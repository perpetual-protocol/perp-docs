### AddLiquidityParams
```solidity
  struct AddLiquidityParams(
    address baseToken
    uint256 base
    uint256 quote
    int24 lowerTick
    int24 upperTick
    uint256 minBase
    uint256 minQuote
    bool useTakerBalance
    uint256 deadline
  )
```



### RemoveLiquidityParams
```solidity
  struct RemoveLiquidityParams(
    address baseToken
    int24 lowerTick
    int24 upperTick
    uint128 liquidity
    uint256 minBase
    uint256 minQuote
    uint256 deadline
  )
```



### AddLiquidityResponse
```solidity
  struct AddLiquidityResponse(
    uint256 base
    uint256 quote
    uint256 fee
    uint256 liquidity
  )
```



### RemoveLiquidityResponse
```solidity
  struct RemoveLiquidityResponse(
    uint256 base
    uint256 quote
    uint256 fee
  )
```



### OpenPositionParams
```solidity
  struct OpenPositionParams(
    address baseToken
    bool isBaseToQuote
    bool isExactInput
    uint256 amount
    uint256 oppositeAmountBound
    uint256 deadline
    uint160 sqrtPriceLimitX96
    bytes32 referralCode
  )
```



### ClosePositionParams
```solidity
  struct ClosePositionParams(
    address baseToken
    uint160 sqrtPriceLimitX96
    uint256 oppositeAmountBound
    uint256 deadline
    bytes32 referralCode
  )
```



### CollectPendingFeeParams
```solidity
  struct CollectPendingFeeParams(
    address trader
    address baseToken
    int24 lowerTick
    int24 upperTick
  )
```




## Functions
### addLiquidity
```solidity
  function addLiquidity(
    struct IClearingHouse.AddLiquidityParams params
  ) external returns (struct IClearingHouse.AddLiquidityResponse response)
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
  ) external returns (struct IClearingHouse.RemoveLiquidityResponse response)
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
    address baseToken
  ) external
```
If trader is underwater, any one can call `liquidate` to liquidate this trader

If trader has open orders, need to call `cancelAllExcessOrders` first

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

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

### getAccountValue
```solidity
  function getAccountValue(
    address trader
  ) external returns (int256 accountValue)
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
### getQuoteToken
```solidity
  function getQuoteToken(
  ) external returns (address quoteToken)
```
Get QuoteToken address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`quoteToken` | address | The quote token address
### getUniswapV3Factory
```solidity
  function getUniswapV3Factory(
  ) external returns (address factory)
```
Get UniswapV3Factory address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`factory` | address | UniswapV3Factory address
### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address clearingHouseConfig)
```
Get ClearingHouseConfig address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouseConfig` | address | ClearingHouseConfig address
### getVault
```solidity
  function getVault(
  ) external returns (address vault)
```
Get `Vault` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault` | address | `Vault` address
### getExchange
```solidity
  function getExchange(
  ) external returns (address exchange)
```
Get `Exchange` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`exchange` | address | `Exchange` address
### getOrderBook
```solidity
  function getOrderBook(
  ) external returns (address orderBook)
```
Get `OrderBook` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`orderBook` | address | `OrderBook` address
### getAccountBalance
```solidity
  function getAccountBalance(
  ) external returns (address accountBalance)
```
Get AccountBalance address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`accountBalance` | address | `AccountBalance` address
### getInsuranceFund
```solidity
  function getInsuranceFund(
  ) external returns (address insuranceFund)
```
Get `InsuranceFund` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`insuranceFund` | address | `InsuranceFund` address

## Events
### ReferredPositionChanged
```solidity
  event ReferredPositionChanged(
    bytes32 referralCode
  )
```
Emitted when open position with non-zero referral code


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`referralCode`| bytes32 | The referral code by partners
### PositionLiquidated
```solidity
  event PositionLiquidated(
    address trader,
    address baseToken,
    uint256 positionNotional,
    uint256 positionSize,
    uint256 liquidationFee,
    address liquidator
  )
```
Emitted when taker position is being liquidated


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader`| address | The trader who has been liquidated
|`baseToken`| address | Virtual base token(ETH, BTC, etc...) address
|`positionNotional`| uint256 | The cost of position
|`positionSize`| uint256 | The size of position
|`liquidationFee`| uint256 | The fee of liquidate
|`liquidator`| address | The address of liquidator
### LiquidityChanged
```solidity
  event LiquidityChanged(
    address maker,
    address baseToken,
    address quoteToken,
    int24 lowerTick,
    int24 upperTick,
    int256 base,
    int256 quote,
    int128 liquidity,
    uint256 quoteFee
  )
```
Emitted when maker's liquidity of a order changed


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maker`| address | The one who provide liquidity
|`baseToken`| address | The address of virtual base token(ETH, BTC, etc...)
|`quoteToken`| address | The address of virtual USD token
|`lowerTick`| int24 | The lower tick of the position in which to add liquidity
|`upperTick`| int24 | The upper tick of the position in which to add liquidity
|`base`| int256 | The amount of base token added (> 0) / removed (< 0) as liquidity; fees not included
|`quote`| int256 | The amount of quote token added ... (same as the above)
|`liquidity`| int128 | The amount of liquidity unit added (> 0) / removed (< 0)
|`quoteFee`| uint256 | The amount of quote token the maker received as fees
### PositionChanged
```solidity
  event PositionChanged(
    address trader,
    address baseToken,
    int256 exchangedPositionSize,
    int256 exchangedPositionNotional,
    uint256 fee,
    int256 openNotional,
    int256 realizedPnl,
    uint256 sqrtPriceAfterX96
  )
```
Emitted when taker's position is being changed


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader`| address | Trader address
|`baseToken`| address | The address of virtual base token(ETH, BTC, etc...)
|`exchangedPositionSize`| int256 | The actual amount swap to uniswapV3 pool
|`exchangedPositionNotional`| int256 | The cost of position, include fee
|`fee`| uint256 | The fee of open/close position
|`openNotional`| int256 | The cost of open/close position, < 0: long, > 0: short
|`realizedPnl`| int256 | The realized Pnl after open/close position
|`sqrtPriceAfterX96`| uint256 | The sqrt price after swap, in X96
### FundingPaymentSettled
```solidity
  event FundingPaymentSettled(
    address trader,
    address baseToken,
    int256 fundingPayment
  )
```
Emitted when settling a trader's funding payment


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader`| address | The address of trader
|`baseToken`| address | The address of virtual base token(ETH, BTC, etc...)
|`fundingPayment`| int256 | The fundingPayment of trader on baseToken market, > 0: payment, < 0 : receipt
### TrustedForwarderChanged
```solidity
  event TrustedForwarderChanged(
    address forwarder
  )
```
Emitted when trusted forwarder address changed

TrustedForward is only used for metaTx

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`forwarder`| address | The trusted forwarder address
