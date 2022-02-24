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
  ) external
```




### setMaxTickCrossedWithinBlock
```solidity
  function setMaxTickCrossedWithinBlock(
  ) external
```




### uniswapV3SwapCallback
```solidity
  function uniswapV3SwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes data
  ) external
```
Called to `msg.sender` after executing a swap via IUniswapV3Pool#swap.

In the implementation you must pay the pool tokens owed for the swap.
The caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory.
amount0Delta and amount1Delta can both be 0 if no tokens were swapped.

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
  ) external returns (struct IExchange.SwapResponse)
```




### settleFunding
```solidity
  function settleFunding(
  ) external returns (int256 fundingPayment, struct Funding.Growth fundingGrowthGlobal)
```

this function should be called at the beginning of every high-level function, such as openPosition()
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




### getAccountBalance
```solidity
  function getAccountBalance(
  ) external returns (address)
```




### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```




### getMaxTickCrossedWithinBlock
```solidity
  function getMaxTickCrossedWithinBlock(
  ) external returns (uint24)
```




### getPnlToBeRealized
```solidity
  function getPnlToBeRealized(
  ) external returns (int256)
```




### getAllPendingFundingPayment
```solidity
  function getAllPendingFundingPayment(
  ) external returns (int256 pendingFundingPayment)
```




### getPendingFundingPayment
```solidity
  function getPendingFundingPayment(
  ) public returns (int256)
```

this is the view version of _updateFundingGrowth()


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the` | int256 | pending funding payment of a trader in one market, including liquidity & balance coefficients
### getSqrtMarkTwapX96
```solidity
  function getSqrtMarkTwapX96(
  ) public returns (uint160)
```





