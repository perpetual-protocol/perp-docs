
## Functions
### borrow
```solidity
  function borrow(
    uint256 amount
  ) external
```
If bad debt happened, `Vault` contract will borrow from `InsuranceFund` contract

Borrower must be set by owner

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount` | uint256 | Borrow amount, must be less than `InsuranceFund` balance

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
  ) external returns (address borrower)
```
Get valid borrower



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`borrower` | address | Should be equal to vault address

## Events
### BorrowerChanged
```solidity
  event BorrowerChanged(
    address borrower
  )
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`borrower`| address | The address of the borrower
