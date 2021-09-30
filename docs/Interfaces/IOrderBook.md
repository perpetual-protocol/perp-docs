



## Functions
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




### removeLiquidityByIds
```solidity
  function removeLiquidityByIds(
  ) external returns (struct IOrderBook.RemoveLiquidityResponse)
```




### updateFundingGrowthAndLiquidityCoefficientInFundingPayment
```solidity
  function updateFundingGrowthAndLiquidityCoefficientInFundingPayment(
  ) external returns (int256 liquidityCoefficientInFundingPayment)
```




### replaySwap
```solidity
  function replaySwap(
  ) external returns (struct IOrderBook.ReplaySwapResponse)
```




### getOpenOrderIds
```solidity
  function getOpenOrderIds(
  ) external returns (bytes32[])
```




### getOpenOrderById
```solidity
  function getOpenOrderById(
  ) external returns (struct IOrderBook.OpenOrder)
```




### getOpenOrder
```solidity
  function getOpenOrder(
  ) external returns (struct IOrderBook.OpenOrder)
```




### hasOrder
```solidity
  function hasOrder(
  ) external returns (bool)
```




### getTotalQuoteAmountInPools
```solidity
  function getTotalQuoteAmountInPools(
  ) external returns (uint256)
```




### getTotalTokenAmountInPool
```solidity
  function getTotalTokenAmountInPool(
  ) external returns (uint256 tokenAmount)
```




### getLiquidityCoefficientInFundingPayment
```solidity
  function getLiquidityCoefficientInFundingPayment(
  ) external returns (int256 liquidityCoefficientInFundingPayment)
```




### getFeeGrowthGlobal
```solidity
  function getFeeGrowthGlobal(
  ) external returns (uint256)
```





## Events
### LiquidityChanged
```solidity
  event LiquidityChanged(
  )
```




