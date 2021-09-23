


## Functions
### addLiquidity
```solidity
  function addLiquidity(
  ) external returns (struct IClearingHouse.AddLiquidityResponse)
```




### removeLiquidity
```solidity
  function removeLiquidity(
  ) external returns (struct IClearingHouse.RemoveLiquidityResponse response)
```




### openPosition
```solidity
  function openPosition(
  ) external returns (uint256 deltaBase, uint256 deltaQuote)
```




### closePosition
```solidity
  function closePosition(
  ) external returns (uint256 deltaBase, uint256 deltaQuote)
```




### liquidate
```solidity
  function liquidate(
  ) external
```




### cancelExcessOrders
```solidity
  function cancelExcessOrders(
  ) external
```




### cancelAllExcessOrders
```solidity
  function cancelAllExcessOrders(
  ) external
```




### getMaxTickCrossedWithinBlock
```solidity
  function getMaxTickCrossedWithinBlock(
  ) external returns (uint24)
```




### getAccountValue
```solidity
  function getAccountValue(
  ) external returns (int256)
```




### getPositionSize
```solidity
  function getPositionSize(
  ) external returns (int256)
```




### getPositionValue
```solidity
  function getPositionValue(
  ) external returns (int256)
```




### getOpenNotional
```solidity
  function getOpenNotional(
  ) external returns (int256)
```




### getOwedRealizedPnl
```solidity
  function getOwedRealizedPnl(
  ) external returns (int256)
```




### getTotalInitialMarginRequirement
```solidity
  function getTotalInitialMarginRequirement(
  ) external returns (uint256)
```




### getNetQuoteBalance
```solidity
  function getNetQuoteBalance(
  ) external returns (int256)
```




### getAllPendingFundingPayment
```solidity
  function getAllPendingFundingPayment(
  ) external returns (int256)
```




### getPendingFundingPayment
```solidity
  function getPendingFundingPayment(
  ) external returns (int256)
```




### getTotalUnrealizedPnl
```solidity
  function getTotalUnrealizedPnl(
  ) external returns (int256)
```




## Events
### ReferredPositionChanged
```solidity
  event ReferredPositionChanged(
  )
```



### PositionLiquidated
```solidity
  event PositionLiquidated(
  )
```



### FundingUpdated
```solidity
  event FundingUpdated(
  )
```



