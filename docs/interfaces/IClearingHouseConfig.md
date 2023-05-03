
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
|`twapInterval` | uint32 | TwapInterval for funding and prices (market & index) calculations
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
### getMarkPriceConfig
```solidity
  function getMarkPriceConfig(
  ) external returns (uint32 marketTwapInterval, uint32 premiumInterval)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`marketTwapInterval` | uint32 | MarketTwapInterval is the interval of market twap used for mark price calculations
|`premiumInterval` | uint32 | PremiumInterval is the interval of premium used for mark price calculations

