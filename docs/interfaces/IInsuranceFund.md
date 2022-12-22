
## Functions
### repay
```solidity
  function repay(
  ) external
```
If insurance has negative accountValue of vault, will deposit amount to vault



### distributeFee
```solidity
  function distributeFee(
  ) external returns (uint256 surplus)
```
If balance of `InsuranceFund` is over `distributionThreshold`, transfer diff to `SurplusBeneficiary`

Insurance Fund should only distribute revenues surplus earned on the platform.
     In other words, funds directly held in the Insurance Fund contract (`insuranceFundWalletBalance`)
     contributes to `insuranceFundTotalBalance` but not necessarily to `surplus`. Anyone can send funds to
     Insurance Fund and help it reach `distributionThreshold` sooner, but once `surplus` exceeds
     the revenues earned on the platform (`insuranceFundFreeCollateral`), sending more funds
     won’t increase `surplus` further


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`surplus` | uint256 | The surplus of distribution
### getToken
```solidity
  function getToken(
  ) external returns (address token)
```
Get settlement token address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | The address of settlement token
### getBorrower
```solidity
  function getBorrower(
  ) external returns (address vault)
```
(Deprecated function, will be removed in the next release), Get borrower(`Vault`) address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault` | address | The address of `Vault`
### getVault
```solidity
  function getVault(
  ) external returns (address vault)
```
Get `Vault` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault` | address | The address of `Vault`
### getInsuranceFundCapacity
```solidity
  function getInsuranceFundCapacity(
  ) external returns (int256 capacityX10_S)
```
Get `InsuranceFund` capacity



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`capacityX10_S` | int256 | The capacity value (settlementTokenValue + walletBalance) in settlement token's decimals
### getDistributionThreshold
```solidity
  function getDistributionThreshold(
  ) external returns (uint256 distributionThreshold)
```
Get insurance distributution threshold, this value is for fee distribution



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`distributionThreshold` | uint256 | The distribution threshold number
### getSurplusBeneficiary
```solidity
  function getSurplusBeneficiary(
  ) external returns (address surplusBeneficiary)
```
Get SurplusBeneficiary



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`surplusBeneficiary` | address | The address of `SurplusBeneficiary`

## Events
### BorrowerChanged
```solidity
  event BorrowerChanged(
    address borrower
  )
```

(Deprecated function, will be removed in the next release), In the previous version `Vault`
     used to "borrow" from IF by calling `IF.borrow()`. We have since removed the behavior but
     kept the variable name "borrower" for backward-compatibility
#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`borrower`| address | The address of the borrower (actually is `Vault` address)

### VaultChanged
```solidity
  event VaultChanged(
    address vault
  )
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault`| address | The address of the vault
### Repaid
```solidity
  event Repaid(
    uint256 repaidAmount,
    uint256 tokenBalanceAfterRepaid
  )
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`repaidAmount`| uint256 | Repaid amount of the token
|`tokenBalanceAfterRepaid`| uint256 | InsuranceFund's token balance after repay
### DistributionThresholdChanged
```solidity
  event DistributionThresholdChanged(
    uint256 distributionThreshold
  )
```

We will transfer fee to `SurplusBeneficiary` if `InsuranceFund` free collateral
     is over distribution threshold
#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`distributionThreshold`| uint256 | Distribution threshold amount

### SurplusBeneficiaryChanged
```solidity
  event SurplusBeneficiaryChanged(
    address surplusBeneficiary
  )
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`surplusBeneficiary`| address | The address of `SurplusBeneficiary`
### FeeDistributed
```solidity
  event FeeDistributed(
    uint256 surplus,
    uint256 insuranceFundCapacity,
    uint256 insuranceFundFreeCollateral,
    uint256 distributionThreshold
  )
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`surplus`| uint256 | The amount of distribution
|`insuranceFundCapacity`| uint256 | The capacity of `insuranceFund` contract
|`insuranceFundFreeCollateral`| uint256 | The free collateral(usdc) of `insuranceFund` contract in vault
|`distributionThreshold`| uint256 | The distribution threshold amount
