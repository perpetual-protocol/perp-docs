
## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### setLiquidationPenaltyRatio
```solidity
  function setLiquidationPenaltyRatio(
  ) external
```




### setPartialCloseRatio
```solidity
  function setPartialCloseRatio(
  ) external
```




### setTwapInterval
```solidity
  function setTwapInterval(
  ) external
```




### setMaxMarketsPerAccount
```solidity
  function setMaxMarketsPerAccount(
  ) external
```




### setSettlementTokenBalanceCap
```solidity
  function setSettlementTokenBalanceCap(
  ) external
```




### setMaxFundingRate
```solidity
  function setMaxFundingRate(
  ) external
```




### setBackstopLiquidityProvider
```solidity
  function setBackstopLiquidityProvider(
  ) external
```




### getMaxMarketsPerAccount
```solidity
  function getMaxMarketsPerAccount(
  ) external returns (uint8)
```




### getImRatio
```solidity
  function getImRatio(
  ) external returns (uint24)
```




### getMmRatio
```solidity
  function getMmRatio(
  ) external returns (uint24)
```




### getLiquidationPenaltyRatio
```solidity
  function getLiquidationPenaltyRatio(
  ) external returns (uint24)
```




### getPartialCloseRatio
```solidity
  function getPartialCloseRatio(
  ) external returns (uint24)
```




### getTwapInterval
```solidity
  function getTwapInterval(
  ) external returns (uint32)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`twapInterval` | uint32 | for funding and prices (mark & index) calculations
### getSettlementTokenBalanceCap
```solidity
  function getSettlementTokenBalanceCap(
  ) external returns (uint256)
```




### getMaxFundingRate
```solidity
  function getMaxFundingRate(
  ) external returns (uint24)
```




### isBackstopLiquidityProvider
```solidity
  function isBackstopLiquidityProvider(
  ) external returns (bool)
```





## Events
### TwapIntervalChanged
```solidity
  event TwapIntervalChanged(
  )
```



### LiquidationPenaltyRatioChanged
```solidity
  event LiquidationPenaltyRatioChanged(
  )
```



### PartialCloseRatioChanged
```solidity
  event PartialCloseRatioChanged(
  )
```



### MaxMarketsPerAccountChanged
```solidity
  event MaxMarketsPerAccountChanged(
  )
```



### SettlementTokenBalanceCapChanged
```solidity
  event SettlementTokenBalanceCapChanged(
  )
```



### MaxFundingRateChanged
```solidity
  event MaxFundingRateChanged(
  )
```



### BackstopLiquidityProviderChanged
```solidity
  event BackstopLiquidityProviderChanged(
  )
```



