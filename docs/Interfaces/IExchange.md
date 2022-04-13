### SwapParams
```solidity
  struct SwapParams(
    address trader
    address baseToken
    bool isBaseToQuote
    bool isExactInput
    bool isClose
    uint256 amount
    uint160 sqrtPriceLimitX96
  )
```



### SwapResponse
```solidity
  struct SwapResponse(
    uint256 base
    uint256 quote
    int256 exchangedPositionSize
    int256 exchangedPositionNotional
    uint256 fee
    uint256 insuranceFundFee
    int256 pnlToBeRealized
    uint256 sqrtPriceAfterX96
    int24 tick
    bool isPartialClose
  )
```



### SwapCallbackData
```solidity
  struct SwapCallbackData(
    address trader
    address baseToken
    address pool
    uint24 uniswapFeeRatio
    uint256 fee
  )
```



### RealizePnlParams
```solidity
  struct RealizePnlParams(
    address trader
    address baseToken
    int256 base
    int256 quote
  )
```




## Functions
### swap
```solidity
  function swap(
    struct IExchange.SwapParams params
  ) external returns (struct IExchange.SwapResponse swapResponse)
```
The actual swap function

can only be called from ClearingHouse

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`params` | struct IExchange.SwapParams | The parameters of the swap

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`swapResponse` | struct IExchange.SwapResponse | The result of the swap
### settleFunding
```solidity
  function settleFunding(
  ) external returns (int256 fundingPayment, struct Funding.Growth fundingGrowthGlobal)
```
Settle the funding payment for the time interval since the last settlement

This function should be called at the beginning of every high-level function, such as `openPosition()`
     while it doesn't matter who calls this function
     this function 1. settles personal funding payment 2. updates global funding growth
     personal funding payment is settled whenever there is pending funding payment
     the global funding growth update only happens once per unique timestamp (not blockNumber, due to Arbitrum)


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`fundingPayment` | int256 | the funding payment of a trader in one market should be settled into owned realized Pnl
|`fundingGrowthGlobal` | struct Funding.Growth | the up-to-date globalFundingGrowth, usually used for later calculations
### getMaxTickCrossedWithinBlock
```solidity
  function getMaxTickCrossedWithinBlock(
    address baseToken
  ) external returns (uint24 maxTickCrossedWithinBlock)
```
Get the max ticks allowed to be crossed within a block when reducing position


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | Address of the base token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxTickCrossedWithinBlock` | uint24 | The max ticks allowed to be crossed within a block when reducing position
### getAllPendingFundingPayment
```solidity
  function getAllPendingFundingPayment(
  ) external returns (int256 pendingFundingPayment)
```
Get all the pending funding payment for a trader



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pendingFundingPayment` | int256 | The pending funding payment of the trader.
Positive value means the trader pays funding, negative value means the trader receives funding.
### getPendingFundingPayment
```solidity
  function getPendingFundingPayment(
  ) external returns (int256 pendingFundingPayment)
```
Get the pending funding payment for a trader in a given market

this is the view version of _updateFundingGrowth()


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pendingFundingPayment` | int256 | The pending funding payment of a trader in one market,
including liquidity & balance coefficients. Positive value means the trader pays funding,
negative value means the trader receives funding.
### getSqrtMarkTwapX96
```solidity
  function getSqrtMarkTwapX96(
    address baseToken,
    uint32 twapInterval
  ) external returns (uint160 sqrtMarkTwapX96)
```
Get the square root of the market twap price with the given time interval

The return value is a X96 number

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | Address of the base token
|`twapInterval` | uint32 | The time interval in seconds

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`sqrtMarkTwapX96` | uint160 | The square root of the market twap price
### getPnlToBeRealized
```solidity
  function getPnlToBeRealized(
    struct IExchange.RealizePnlParams params
  ) external returns (int256 pnlToBeRealized)
```
Get the pnl that can be realized if trader reduce position

This function normally won't be needed by traders, but it might be useful for 3rd party

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`params` | struct IExchange.RealizePnlParams | The params needed to do the query, encoded as `RealizePnlParams` in calldata

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pnlToBeRealized` | int256 | The pnl that can be realized if trader reduce position
### getOrderBook
```solidity
  function getOrderBook(
  ) external returns (address orderBook)
```
Get `OrderBook` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`orderBook` | address | `OrderBook` contract address
### getAccountBalance
```solidity
  function getAccountBalance(
  ) external returns (address accountBalance)
```
Get `AccountBalance` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`accountBalance` | address | `AccountBalance` contract address
### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address clearingHouse)
```
Get `ClearingHouseConfig` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouse` | address | `ClearingHouseConfig` contract address

## Events
### FundingUpdated
```solidity
  event FundingUpdated(
    address baseToken,
    uint256 markTwap,
    uint256 indexTwap
  )
```
Emitted when the global funding growth is updated


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken`| address | Address of the base token
|`markTwap`| uint256 | The market twap price when the funding growth is updated
|`indexTwap`| uint256 | The index twap price when the funding growth is updated
### MaxTickCrossedWithinBlockChanged
```solidity
  event MaxTickCrossedWithinBlockChanged(
    address baseToken,
    uint24 maxTickCrossedWithinBlock
  )
```
Emitted when maxTickCrossedWithinBlock is updated


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken`| address | Address of the base token
|`maxTickCrossedWithinBlock`| uint24 | Max tick allowed to be crossed within block when reducing position
### AccountBalanceChanged
```solidity
  event AccountBalanceChanged(
    address accountBalance
  )
```
Emitted when accountBalance is updated


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`accountBalance`| address | The address of accountBalance contract
