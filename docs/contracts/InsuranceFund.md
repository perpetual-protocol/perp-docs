
## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### setVault
```solidity
  function setVault(
  ) external
```




### setDistributionThreshold
```solidity
  function setDistributionThreshold(
  ) external
```




### setSurplusBeneficiary
```solidity
  function setSurplusBeneficiary(
  ) external
```




### repay
```solidity
  function repay(
  ) external
```
If insurance has negative accountValue of vault, will deposit amount to vault



### distributeFee
```solidity
  function distributeFee(
  ) external returns (uint256)
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
  ) external returns (address)
```
Get settlement token address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | The address of settlement token
### getBorrower
```solidity
  function getBorrower(
  ) external returns (address)
```
(Deprecated function, will be removed in the next release), Get borrower(`Vault`) address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault` | address | The address of `Vault`
### getVault
```solidity
  function getVault(
  ) external returns (address)
```
Get `Vault` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault` | address | The address of `Vault`
### getDistributionThreshold
```solidity
  function getDistributionThreshold(
  ) external returns (uint256)
```
Get insurance distributution threshold, this value is for fee distribution



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`distributionThreshold` | uint256 | The distribution threshold number
### getSurplusBeneficiary
```solidity
  function getSurplusBeneficiary(
  ) external returns (address)
```
Get SurplusBeneficiary



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`surplusBeneficiary` | address | The address of `SurplusBeneficiary`
### getInsuranceFundCapacity
```solidity
  function getInsuranceFundCapacity(
  ) public returns (int256)
```
Get `InsuranceFund` capacity



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`capacityX10_S` | int256 | The capacity value (settlementTokenValue + walletBalance) in settlement token's decimals

