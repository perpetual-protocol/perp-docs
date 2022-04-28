
## Functions
### getVault
```solidity
  function getVault(
  ) external returns (address)
```
e Get the address of vault



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault` | address | address of vault
    funct
### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```
e Get the address of clearing house config



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouseConfig` | address | address of clearing house config
    funct
### getCollateralConfig
```solidity
  function getCollateralConfig(
    address token
  ) external returns (struct Collateral.Config)
```
e Get collateral config by token address


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | address of token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateral` | struct Collateral.Config | config
    funct
### getPriceFeedDecimals
```solidity
  function getPriceFeedDecimals(
    address token
  ) external returns (uint8)
```
e Get price feed decimals of the collateral token


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | address of token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`decimals` | uint8 | of the price feed
    funct
### getPrice
```solidity
  function getPrice(
    address token
  ) external returns (uint256)
```
e Get the price of the collateral token


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | address of token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`price` | uint256 | of the certain period
    funct
### getMaxCollateralTokensPerAccount
```solidity
  function getMaxCollateralTokensPerAccount(
  ) external returns (uint8)
```
e Get the max number of collateral tokens per account



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`max` | uint8 | number of collateral tokens per account
    funct
### getMmRatioBuffer
```solidity
  function getMmRatioBuffer(
  ) external returns (uint24)
```
e Get the minimum `margin ratio - mmRatio` before the account's collateral is liquidatable

6 decimals, same decimals as _mmRatio



### getDebtNonSettlementTokenValueRatio
```solidity
  function getDebtNonSettlementTokenValueRatio(
  ) external returns (uint24)
```
e Get the maximum `debt / nonSettlementTokenValue` before the account's collaterals are liquidated

6 decimals



### getLiquidationRatio
```solidity
  function getLiquidationRatio(
  ) external returns (uint24)
```
e Get the maximum ratio of debt can be repaid in one transaction

6 decimals. For example, `liquidationRatio` = 50% means
     the liquidator can repay as much as half of the trader’s debt in one liquidation


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidation` | uint24 | ratio
    functio
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
    functio
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
    function
### getCollateralValueDust
```solidity
  function getCollateralValueDust(
  ) external returns (uint256)
```
t the threshold of the minium repaid.
 		If a trader’s collateral value (denominated in settlement token) falls below the threshold,
        the liquidator can convert it with 100% `liquidationRatio` so there is no dust left

6 decimals


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Dust` | uint256 | collateral value
    function ge
### isCollateral
```solidity
  function isCollateral(
    address token
  ) external returns (bool)
```
k if the given token is one of collateral tokens


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | address of token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`true` | bool | if the token is one of collateral tokens
    function is
### requireValidCollateralMmRatio
```solidity
  function requireValidCollateralMmRatio(
    uint24 mmRatioBuffer
  ) external returns (uint24)
```
ire and get the the valid collateral maintenance margin ratio by mmRatioBuffer


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`mmRatioBuffer` | uint24 | safe margin ratio buffer; 6 decimals, same decimals as _mmRatio

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateralMmRatio` | uint24 | the collateral maintenance margin ratio
    function re

## Events
### CollateralAdded
```solidity
  event CollateralAdded(
    address token,
    address priceFeed,
    uint24 collateralRatio,
    uint24 discountRatio,
    uint256 depositCap
  )
```
Emitted when owner add collateral


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token`| address | address of token
|`priceFeed`| address | address of price feed
|`collateralRatio`| uint24 | collateral ratio
|`discountRatio`| uint24 | discount ratio for the collateral liquidation
|`depositCap`| uint256 | max amount of collateral that can be deposited
### ClearingHouseConfigChanged
```solidity
  event ClearingHouseConfigChanged(
    address clearingHouseConfig
  )
```
Emitted when owner update the address of clearing house config


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouseConfig`| address | address of clearing house config
### VaultChanged
```solidity
  event VaultChanged(
    address vault
  )
```
Emitted when owner update the address of vault


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault`| address | address of vault
### PriceFeedChanged
```solidity
  event PriceFeedChanged(
    address token,
    address priceFeed
  )
```
Emitted when owner update the price feed address of a collateral token


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token`| address | address of token
|`priceFeed`| address | address of price feed
### CollateralRatioChanged
```solidity
  event CollateralRatioChanged(
    address token,
    uint24 collateralRatio
  )
```
Emitted when owner update the collateral ratio of a collateral token


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token`| address | address of token
|`collateralRatio`| uint24 | collateral ratio
### DiscountRatioChanged
```solidity
  event DiscountRatioChanged(
    address token,
    uint24 discountRatio
  )
```
Emitted when owner change the discount ratio


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token`| address | address of token
|`discountRatio`| uint24 | discount ratio for the collateral liquidation
### DepositCapChanged
```solidity
  event DepositCapChanged(
    address token,
    uint256 depositCap
  )
```
Emitted when owner update the deposit cap of a collateral token


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token`| address | address of token
|`depositCap`| uint256 | max amount of the collateral that can be deposited
### MaxCollateralTokensPerAccountChanged
```solidity
  event MaxCollateralTokensPerAccountChanged(
    uint8 maxCollateralTokensPerAccount
  )
```
Emitted when owner init or update the max collateral tokens that per account can have,
		this is can prevent high gas cost.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxCollateralTokensPerAccount`| uint8 | max amount of collateral tokens that per account can have
### MmRatioBufferChanged
```solidity
  event MmRatioBufferChanged(
    uint24 mmRatioBuffer
  )
```
Emitted when owner init or update the maintenance margin ratio buffer,
        the value provides a safe range between the mmRatio & the collateralMMRatio.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`mmRatioBuffer`| uint24 | safe buffer number (bps)
### DebtNonSettlementTokenValueRatioChanged
```solidity
  event DebtNonSettlementTokenValueRatioChanged(
    uint24 debtNonSettlementTokenValueRatio
  )
```
Emitted when owner init or update the debt non-settlement token value ratio,
        maximum `debt / nonSettlementTokenValue` before the account's is liquidatable


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`debtNonSettlementTokenValueRatio`| uint24 | debt non-settlement token value ratio, ≤ 1
### LiquidationRatioChanged
```solidity
  event LiquidationRatioChanged(
    uint24 liquidationRatio
  )
```
/ @notice Emitted when owner init or update the liquidation ratio,
        the value presents the max repaid ratio of the collateral liquidation.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidationRatio`| uint24 | liquidation ratio, ≤ 1
### CLInsuranceFundFeeRatioChanged
```solidity
  event CLInsuranceFundFeeRatioChanged(
    uint24 clInsuranceFundFeeRatio
  )
```
Emitted when owner init or update the clearing house insurance fund fee ratio,
        charge fee for clearing house insurance fund.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clInsuranceFundFeeRatio`| uint24 | clearing house insurance fund fee ratio, ≤ 1
    e
### DebtThresholdChanged
```solidity
  event DebtThresholdChanged(
    uint256 debtThreshold
  )
```
otice Emitted when owner init or update the debt threshold,
	 	maximum debt allowed before an account’s collateral is liquidatable.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`debtThreshold`| uint256 | debt threshold
    eve
### CollateralValueDustChanged
```solidity
  event CollateralValueDustChanged(
    uint256 collateralValueDust
  )
```
ice Emitted when owner init or update the collateral value dust,
		if a trader’s debt value falls below this dust threshold,
		the liquidator will ignore the liquidationRatio.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateralValueDust`| uint256 | collateral value dust
    event
