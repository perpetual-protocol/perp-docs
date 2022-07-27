
## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### addCollateral
```solidity
  function addCollateral(
  ) external
```




### setPriceFeed
```solidity
  function setPriceFeed(
  ) external
```




### setCollateralRatio
```solidity
  function setCollateralRatio(
  ) external
```




### setDiscountRatio
```solidity
  function setDiscountRatio(
  ) external
```




### setDepositCap
```solidity
  function setDepositCap(
  ) external
```




### setMaxCollateralTokensPerAccount
```solidity
  function setMaxCollateralTokensPerAccount(
  ) external
```




### setMmRatioBuffer
```solidity
  function setMmRatioBuffer(
  ) external
```




### setDebtNonSettlementTokenValueRatio
```solidity
  function setDebtNonSettlementTokenValueRatio(
  ) external
```




### setLiquidationRatio
```solidity
  function setLiquidationRatio(
  ) external
```




### setCLInsuranceFundFeeRatio
```solidity
  function setCLInsuranceFundFeeRatio(
  ) external
```




### setDebtThreshold
```solidity
  function setDebtThreshold(
  ) external
```




### setCollateralValueDust
```solidity
  function setCollateralValueDust(
  ) external
```

Same decimals as the settlement token


### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```
Get the address of clearing house config



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouseConfig` | address | address of clearing house config
### getVault
```solidity
  function getVault(
  ) external returns (address)
```
Get the address of vault



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault` | address | address of vault
### getCollateralConfig
```solidity
  function getCollateralConfig(
    address token
  ) external returns (struct Collateral.Config)
```
Get collateral config by token address


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | address of token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateral` | struct Collateral.Config | config
### getPriceFeedDecimals
```solidity
  function getPriceFeedDecimals(
    address token
  ) external returns (uint8)
```
Get price feed decimals of the collateral token


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | address of token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`decimals` | uint8 | of the price feed
### getPrice
```solidity
  function getPrice(
    address token
  ) external returns (uint256)
```
Get the price of the collateral token


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | address of token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`price` | uint256 | of the certain period
### getMaxCollateralTokensPerAccount
```solidity
  function getMaxCollateralTokensPerAccount(
  ) external returns (uint8)
```




### getMmRatioBuffer
```solidity
  function getMmRatioBuffer(
  ) external returns (uint24)
```
Get the minimum `margin ratio - mmRatio` before the account's collateral is liquidatable

6 decimals, same decimals as _mmRatio



### getDebtNonSettlementTokenValueRatio
```solidity
  function getDebtNonSettlementTokenValueRatio(
  ) external returns (uint24)
```
Get the maximum `debt / nonSettlementTokenValue` before the account's collaterals are liquidated

6 decimals



### getLiquidationRatio
```solidity
  function getLiquidationRatio(
  ) external returns (uint24)
```
Get the maximum ratio of debt can be repaid in one transaction

6 decimals. For example, `liquidationRatio` = 50% means
     the liquidator can repay as much as half of the trader’s debt in one liquidation


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidation` | uint24 | ratio
### getCLInsuranceFundFeeRatio
```solidity
  function getCLInsuranceFundFeeRatio(
  ) external returns (uint24)
```
Get the insurance fund fee ratio when liquidating a trader's collateral

6 decimals. For example, `clInsuranceFundFeeRatio` = 5% means
     the liquidator will pay 5% of transferred settlement token to insurance fund


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`insurance` | uint24 | fund fee ratio
### getDebtThreshold
```solidity
  function getDebtThreshold(
  ) external returns (uint256)
```
Get the maximum debt (denominated in settlement token) allowed
		before an account’s collateral is liquidatable.

6 decimals


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Debt` | uint256 | threshold
### getCollateralValueDust
```solidity
  function getCollateralValueDust(
  ) external returns (uint256)
```
Get the threshold of the minium repaid.
 		If a trader’s collateral value (denominated in settlement token) falls below the threshold,
        the liquidator can convert it with 100% `liquidationRatio` so there is no dust left

6 decimals


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Dust` | uint256 | collateral value
### isCollateral
```solidity
  function isCollateral(
    address token
  ) public returns (bool)
```
Check if the given token is one of collateral tokens


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | address of token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`true` | bool | if the token is one of collateral tokens
### requireValidCollateralMmRatio
```solidity
  function requireValidCollateralMmRatio(
    uint24 mmRatioBuffer
  ) public returns (uint24)
```
Require and get the the valid collateral maintenance margin ratio by mmRatioBuffer


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`mmRatioBuffer` | uint24 | safe margin ratio buffer; 6 decimals, same decimals as _mmRatio

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateralMmRatio` | uint24 | the collateral maintenance margin ratio

