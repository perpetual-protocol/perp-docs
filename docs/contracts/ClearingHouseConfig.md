
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



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxMarketsPerAccount` | uint8 | Max value of total markets per account
### getImRatio
```solidity
  function getImRatio(
  ) external returns (uint24)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`imRatio` | uint24 | Initial margin ratio
### getMmRatio
```solidity
  function getMmRatio(
  ) external returns (uint24)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`mmRatio` | uint24 | Maintenance margin requirement ratio
### getLiquidationPenaltyRatio
```solidity
  function getLiquidationPenaltyRatio(
  ) external returns (uint24)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidationPenaltyRatio` | uint24 | Liquidation penalty ratio
### getPartialCloseRatio
```solidity
  function getPartialCloseRatio(
  ) external returns (uint24)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`partialCloseRatio` | uint24 | Partial close ratio
### getTwapInterval
```solidity
  function getTwapInterval(
  ) external returns (uint32)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`twapInterval` | uint32 | TwapInterval for funding and prices (mark & index) calculations
### getSettlementTokenBalanceCap
```solidity
  function getSettlementTokenBalanceCap(
  ) external returns (uint256)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`settlementTokenBalanceCap` | uint256 | Max value of settlement token balance
### getMaxFundingRate
```solidity
  function getMaxFundingRate(
  ) external returns (uint24)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxFundingRate` | uint24 | Max value of funding rate
### isBackstopLiquidityProvider
```solidity
  function isBackstopLiquidityProvider(
  ) external returns (bool)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`isBackstopLiquidityProvider` | bool | is backstop liquidity provider

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



