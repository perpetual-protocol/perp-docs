### InternalAddLiquidityToOrderParams
```solidity
  struct InternalAddLiquidityToOrderParams(
    address maker
    address baseToken
    address pool
    int24 lowerTick
    int24 upperTick
    uint256 feeGrowthGlobalX128
    uint128 liquidity
    uint256 base
    uint256 quote
    struct Funding.Growth globalFundingGrowth
  )
```



### InternalRemoveLiquidityParams
```solidity
  struct InternalRemoveLiquidityParams(
    address maker
    address baseToken
    address pool
    bytes32 orderId
    int24 lowerTick
    int24 upperTick
    uint128 liquidity
  )
```



### InternalSwapStep
```solidity
  struct InternalSwapStep(
    uint160 initialSqrtPriceX96
    int24 nextTick
    bool isNextTickInitialized
    uint160 nextSqrtPriceX96
    uint256 amountIn
    uint256 amountOut
    uint256 fee
  )
```




## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### setExchange
```solidity
  function setExchange(
  ) external
```




### addLiquidity
```solidity
  function addLiquidity(
  ) external returns (struct IOrderBook.AddLiquidityResponse)
```




### removeLiquidity
```solidity
  function removeLiquidity(
  ) external returns (struct IOrderBook.RemoveLiquidityResponse)
```




### updateFundingGrowthAndLiquidityCoefficientInFundingPayment
```solidity
  function updateFundingGrowthAndLiquidityCoefficientInFundingPayment(
  ) external returns (int256 liquidityCoefficientInFundingPayment)
```

this is the non-view version of getLiquidityCoefficientInFundingPayment()


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidityCoefficientInFundingPayment` | int256 | the funding payment of all orders/liquidity of a maker
### updateOrderDebt
```solidity
  function updateOrderDebt(
  ) external
```




### uniswapV3MintCallback
```solidity
  function uniswapV3MintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes data
  ) external
```
Called to `msg.sender` after minting liquidity to a position from IUniswapV3Pool#mint.

In the implementation you must pay the pool tokens owed for the minted liquidity.
The caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory.

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount0Owed` | uint256 | The amount of token0 due to the pool for the minted liquidity
|`amount1Owed` | uint256 | The amount of token1 due to the pool for the minted liquidity
|`data` | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#mint call

### replaySwap
```solidity
  function replaySwap(
  ) external returns (struct IOrderBook.ReplaySwapResponse)
```




### getExchange
```solidity
  function getExchange(
  ) external returns (address)
```




### getOpenOrderIds
```solidity
  function getOpenOrderIds(
  ) external returns (bytes32[])
```




### getOpenOrderById
```solidity
  function getOpenOrderById(
  ) external returns (struct OpenOrder.Info)
```




### getOpenOrder
```solidity
  function getOpenOrder(
  ) external returns (struct OpenOrder.Info)
```




### hasOrder
```solidity
  function hasOrder(
  ) external returns (bool)
```




### getTotalQuoteBalanceAndPendingFee
```solidity
  function getTotalQuoteBalanceAndPendingFee(
  ) external returns (int256 totalQuoteAmountInPools, uint256 totalPendingFee)
```




### getTotalTokenAmountInPoolAndPendingFee
```solidity
  function getTotalTokenAmountInPoolAndPendingFee(
  ) external returns (uint256 tokenAmount, uint256 pendingFee)
```

the returned quote amount does not include funding payment because
     the latter is counted directly toward realizedPnl.
     the return value includes maker fee.
     please refer to _getTotalTokenAmountInPool() docstring for specs


### getLiquidityCoefficientInFundingPayment
```solidity
  function getLiquidityCoefficientInFundingPayment(
  ) external returns (int256 liquidityCoefficientInFundingPayment)
```

this is the view version of updateFundingGrowthAndLiquidityCoefficientInFundingPayment()


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidityCoefficientInFundingPayment` | int256 | the funding payment of all orders/liquidity of a maker
### getPendingFee
```solidity
  function getPendingFee(
  ) external returns (uint256)
```




### getTotalOrderDebt
```solidity
  function getTotalOrderDebt(
  ) public returns (uint256)
```





