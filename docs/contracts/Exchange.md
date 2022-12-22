### InternalReplaySwapParams
```solidity
  struct InternalReplaySwapParams(
    address baseToken
    bool isBaseToQuote
    bool isExactInput
    uint256 amount
    uint160 sqrtPriceLimitX96
  )
```



### InternalSwapResponse
```solidity
  struct InternalSwapResponse(
    int256 base
    int256 quote
    int256 exchangedPositionSize
    int256 exchangedPositionNotional
    uint256 fee
    uint256 insuranceFundFee
    int24 tick
  )
```



### InternalRealizePnlParams
```solidity
  struct InternalRealizePnlParams(
    address trader
    address baseToken
    int256 takerPositionSize
    int256 takerOpenNotional
    int256 base
    int256 quote
  )
```




## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### setAccountBalance
```solidity
  function setAccountBalance(
    address AccountBalance
  ) external
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`AccountBalance` | address | contract address

### setMaxTickCrossedWithinBlock
```solidity
  function setMaxTickCrossedWithinBlock(
    address baseToken,
    uint24 maxTickCrossedWithinBlock
  ) external
```

Restrict the price impact by setting the ticks can be crossed within a block when
trader reducing liquidity. It is used to prevent the malicious behavior of the malicious traders.
The restriction is applied in _isOverPriceLimitWithTick()

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | The base token address
|`maxTickCrossedWithinBlock` | uint24 | The maximum ticks can be crossed within a block

### uniswapV3SwapCallback
```solidity
  function uniswapV3SwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes data
  ) external
```
Called to `msg.sender` after executing a swap via IUniswapV3Pool#swap.

This callback is forwarded to ClearingHouse.uniswapV3SwapCallback() because all the tokens
are stored in there.
#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount0Delta` | int256 | The amount of token0 that was sent (negative) or must be received (positive) by the pool by
the end of the swap. If positive, the callback must send that amount of token0 to the pool.
|`amount1Delta` | int256 | The amount of token1 that was sent (negative) or must be received (positive) by the pool by
the end of the swap. If positive, the callback must send that amount of token1 to the pool.
|`data` | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#swap call

### swap
```solidity
  function swap(
    struct IExchange.SwapParams params
  ) external returns (struct IExchange.SwapResponse)
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
|`The` | struct IExchange.SwapResponse | result of the swap

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
### getOrderBook
```solidity
  function getOrderBook(
  ) external returns (address)
```
Get `OrderBook` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`orderBook` | address | `OrderBook` contract address
### getAccountBalance
```solidity
  function getAccountBalance(
  ) external returns (address)
```
Get `AccountBalance` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`accountBalance` | address | `AccountBalance` contract address
### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```
Get `ClearingHouseConfig` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouse` | address | `ClearingHouseConfig` contract address
### getMaxTickCrossedWithinBlock
```solidity
  function getMaxTickCrossedWithinBlock(
    address baseToken
  ) external returns (uint24)
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
### getPnlToBeRealized
```solidity
  function getPnlToBeRealized(
    struct IExchange.RealizePnlParams params
  ) external returns (int256)
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
### isOverPriceSpread
```solidity
  function isOverPriceSpread(
    address baseToken
  ) external returns (bool)
```
Check if current price spread between market price and index twap is over maximum price spread.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | Address of the base token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`true` | bool | if over the maximum price spread
### getPendingFundingPayment
```solidity
  function getPendingFundingPayment(
  ) public returns (int256)
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
  ) public returns (uint160)
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

