
## Functions
### deposit
```solidity
  function deposit(
    address token,
    uint256 amountX10_D
  ) external
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | the address of the token to deposit;
       once multi-collateral is implemented, the token is not limited to settlementToken
|`amountX10_D` | uint256 | the amount of the token to deposit in decimals D (D = _decimals)

### withdraw
```solidity
  function withdraw(
    address token,
    uint256 amountX10_D
  ) external
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | the address of the token sender is going to withdraw
       once multi-collateral is implemented, the token is not limited to settlementToken
|`amountX10_D` | uint256 | the amount of the token to withdraw in decimals D (D = _decimals)

### getBalance
```solidity
  function getBalance(
  ) external returns (int256)
```




### getFreeCollateral
```solidity
  function getFreeCollateral(
    address trader
  ) external returns (uint256)
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader to query

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`freeCollateral` | uint256 | Max(0, amount of collateral available for withdraw or opening new positions or orders)
### getFreeCollateralByRatio
```solidity
  function getFreeCollateralByRatio(
    address trader,
    uint24 ratio
  ) external returns (int256)
```

there are three configurations for different insolvency risk tolerances: conservative, moderate, aggressive
     we will start with the conservative one and gradually move to aggressive to increase capital efficiency

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | the address of the trader
|`ratio` | uint24 | the margin requirement ratio, imRatio or mmRatio

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`freeCollateralByRatio` | int256 | freeCollateral, by using the input margin requirement ratio; can be negative
### getSettlementToken
```solidity
  function getSettlementToken(
  ) external returns (address)
```




### decimals
```solidity
  function decimals(
  ) external returns (uint8)
```

cached the settlement token's decimal for gas optimization


### getTotalDebt
```solidity
  function getTotalDebt(
  ) external returns (uint256)
```




### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```




### getAccountBalance
```solidity
  function getAccountBalance(
  ) external returns (address)
```




### getInsuranceFund
```solidity
  function getInsuranceFund(
  ) external returns (address)
```




### getExchange
```solidity
  function getExchange(
  ) external returns (address)
```




### getClearingHouse
```solidity
  function getClearingHouse(
  ) external returns (address)
```





## Events
### Deposited
```solidity
  event Deposited(
  )
```



### Withdrawn
```solidity
  event Withdrawn(
  )
```



