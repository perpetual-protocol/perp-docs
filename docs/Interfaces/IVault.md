
## Functions
### deposit
```solidity
  function deposit(
    address token,
    uint256 amountX10_D
  ) external
```
Deposit collateral into vault

once multi-collateral is implemented, the token is not limited to settlementToken

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | The address of the token to deposit
|`amountX10_D` | uint256 | The amount of the token to deposit in decimals D (D = _decimals)

### depositFor
```solidity
  function depositFor(
    address to,
    address token,
    uint256 amountX10_D
  ) external
```
Deposit the collateral token for other account


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`to` | address | The address of the account to deposit to
|`token` | address | The address of collateral token
|`amountX10_D` | uint256 | The amount of the token to deposit in decimals D (D = _decimals)

### withdraw
```solidity
  function withdraw(
    address token,
    uint256 amountX10_D
  ) external
```
Withdraw collateral from vault

once multi-collateral is implemented, the token is not limited to settlementToken

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | The address of the token sender is going to withdraw
|`amountX10_D` | uint256 | The amount of the token to withdraw in decimals D (D = _decimals)

### getBalance
```solidity
  function getBalance(
  ) external returns (int256 balance)
```
Get the balance in vault of specified account



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance` | int256 | The balance amount
### getFreeCollateral
```solidity
  function getFreeCollateral(
    address trader
  ) external returns (uint256 freeCollateral)
```
Get free collateral amount of specified trader


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`freeCollateral` | uint256 | Max(0, amount of collateral available for withdraw or opening new positions or orders)
### getFreeCollateralByRatio
```solidity
  function getFreeCollateralByRatio(
    address trader,
    uint24 ratio
  ) external returns (int256 freeCollateralByRatio)
```
Get free collateral amount of specified trader and collateral ratio

There are three configurations for different insolvency risk tolerances: **conservative, moderate,
aggressive**, we will start with the **conservative** one and gradually move to aggressive to
increase capital efficiency

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`ratio` | uint24 | The margin requirement ratio, imRatio or mmRatio

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`freeCollateralByRatio` | int256 | freeCollateral, by using the input margin requirement ratio; can be negative
### getSettlementToken
```solidity
  function getSettlementToken(
  ) external returns (address settlementToken)
```
Get settlement token address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`settlementToken` | address | The address of settlement token
### decimals
```solidity
  function decimals(
  ) external returns (uint8 decimals)
```
Get settlement token decimals

cached the settlement token's decimal for gas optimization


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`decimals` | uint8 | The decimals of settlement token
### getTotalDebt
```solidity
  function getTotalDebt(
  ) external returns (uint256 debtAmount)
```
Get the debt amount in vault



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`debtAmount` | uint256 | The debt amount
### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address clearingHouseConfig)
```
Get `ClearingHouseConfig` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouseConfig` | address | The address of `ClearingHouseConfig` contract
### getAccountBalance
```solidity
  function getAccountBalance(
  ) external returns (address accountBalance)
```
Get `AccountBalance` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`accountBalance` | address | The address of `AccountBalance` contract
### getInsuranceFund
```solidity
  function getInsuranceFund(
  ) external returns (address)
```
Get `InsuranceFund` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`insuranceFund` | address | The address of `InsuranceFund` contract
### getExchange
```solidity
  function getExchange(
  ) external returns (address)
```
Get `Exchange` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`exchange` | address | The address of `Exchange` contract
### getClearingHouse
```solidity
  function getClearingHouse(
  ) external returns (address)
```
Get `ClearingHouse` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouse` | address | The address of `ClearingHouse` contract

## Events
### Deposited
```solidity
  event Deposited(
    address collateralToken,
    address trader,
    uint256 amount
  )
```
Emitted when trader deposit collateral into vault


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateralToken`| address | The address of token that was deposited
|`trader`| address | The address of trader
|`amount`| uint256 | The amount of token that was deposited
### Withdrawn
```solidity
  event Withdrawn(
    address collateralToken,
    address trader,
    uint256 amount
  )
```
Emitted when trader withdraw collateral from vault


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateralToken`| address | The address of token that was withdrawn
|`trader`| address | The address of trader
|`amount`| uint256 | The amount of token that was withdrawn
