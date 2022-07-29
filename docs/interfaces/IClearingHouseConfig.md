
## Functions
### getMaxMarketsPerAccount
```solidity
  function getMaxMarketsPerAccount(
  ) external returns (uint8 maxMarketsPerAccount)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxMarketsPerAccount` | uint8 | Max value of total markets per account
### getImRatio
```solidity
  function getImRatio(
  ) external returns (uint24 imRatio)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`imRatio` | uint24 | Initial margin ratio
### getMmRatio
```solidity
  function getMmRatio(
  ) external returns (uint24 mmRatio)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`mmRatio` | uint24 | Maintenance margin requirement ratio
### getLiquidationPenaltyRatio
```solidity
  function getLiquidationPenaltyRatio(
  ) external returns (uint24 liquidationPenaltyRatio)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidationPenaltyRatio` | uint24 | Liquidation penalty ratio
### getPartialCloseRatio
```solidity
  function getPartialCloseRatio(
  ) external returns (uint24 partialCloseRatio)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`partialCloseRatio` | uint24 | Partial close ratio
### getTwapInterval
```solidity
  function getTwapInterval(
  ) external returns (uint32 twapInterval)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`twapInterval` | uint32 | TwapInterval for funding and prices (mark & index) calculations
### getSettlementTokenBalanceCap
```solidity
  function getSettlementTokenBalanceCap(
  ) external returns (uint256 settlementTokenBalanceCap)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`settlementTokenBalanceCap` | uint256 | Max value of settlement token balance
### getMaxFundingRate
```solidity
  function getMaxFundingRate(
  ) external returns (uint24 maxFundingRate)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxFundingRate` | uint24 | Max value of funding rate
### isBackstopLiquidityProvider
```solidity
  function isBackstopLiquidityProvider(
  ) external returns (bool isBackstopLiquidityProvider)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`isBackstopLiquidityProvider` | bool | is backstop liquidity provider

