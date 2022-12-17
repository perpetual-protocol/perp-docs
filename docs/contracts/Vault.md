
## Functions
### receive
```solidity
  function receive(
  ) external
```

only used for unwrapping weth in withdrawETH


### initialize
```solidity
  function initialize(
  ) external
```




### setTrustedForwarder
```solidity
  function setTrustedForwarder(
  ) external
```




### setClearingHouse
```solidity
  function setClearingHouse(
  ) external
```




### setCollateralManager
```solidity
  function setCollateralManager(
  ) external
```




### setWETH9
```solidity
  function setWETH9(
  ) external
```




### deposit
```solidity
  function deposit(
    address token,
    uint256 amount
  ) external
```
Deposit collateral into vault


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | The address of the token to deposit
|`amount` | uint256 | The amount of the token to deposit

### depositFor
```solidity
  function depositFor(
    address to,
    address token,
    uint256 amount
  ) external
```
Deposit the collateral token for other account


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`to` | address | The address of the account to deposit to
|`token` | address | The address of collateral token
|`amount` | uint256 | The amount of the token to deposit

### depositEther
```solidity
  function depositEther(
  ) external
```
Deposit ETH as collateral into vault



### depositEtherFor
```solidity
  function depositEtherFor(
    address to
  ) external
```
Deposit ETH as collateral for specified account


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`to` | address | The address of the account to deposit to

### withdraw
```solidity
  function withdraw(
    address token,
    uint256 amount
  ) external
```
Withdraw collateral from vault


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | The address of the token to withdraw
|`amount` | uint256 | The amount of the token to withdraw

### withdrawEther
```solidity
  function withdrawEther(
    uint256 amount
  ) external
```
Withdraw ETH from vault


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount` | uint256 | The amount of the ETH to withdraw

### liquidateCollateral
```solidity
  function liquidateCollateral(
    address trader,
    address token,
    uint256 amount,
    bool isDenominatedInSettlementToken
  ) external returns (uint256)
```
Liquidate trader's collateral by given settlement token amount or non settlement token amount


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader that will be liquidated
|`token` | address | The address of non settlement collateral token that the trader will be liquidated
|`amount` | uint256 | The amount of settlement token that the liquidator will repay for trader or
              the amount of non-settlement collateral token that the liquidator will charge from trader
|`isDenominatedInSettlementToken` | bool | Whether the amount is denominated in settlement token or not

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount` | uint256 | The amount of a non-settlement token (in its native decimals) that is liquidated
        when `isDenominatedInSettlementToken` is true or the amount of settlement token that is repaid
        when `isDenominatedInSettlementToken` is false
### getSettlementToken
```solidity
  function getSettlementToken(
  ) external returns (address)
```
Get the settlement token address

We assume the settlement token should match the denominator of the price oracle.
     i.e. if the settlement token is USDC, then the oracle should be priced in USD


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`settlementToken` | address | The address of the settlement token
### decimals
```solidity
  function decimals(
  ) external returns (uint8)
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
  ) external returns (uint256)
```
Get the borrowed settlement token amount from insurance fund



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`debtAmount` | uint256 | The debt amount (in settlement token's decimals)
### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```
Get `ClearingHouseConfig` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouseConfig` | address | The address of `ClearingHouseConfig` contract
### getAccountBalance
```solidity
  function getAccountBalance(
  ) external returns (address)
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
### getCollateralManager
```solidity
  function getCollateralManager(
  ) external returns (address)
```
Get `CollateralManager` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouse` | address | The address of `CollateralManager` contract
### getWETH9
```solidity
  function getWETH9(
  ) external returns (address)
```
Get `WETH9` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouse` | address | The address of `WETH9` contract
### getBalance
```solidity
  function getBalance(
  ) public returns (int256)
```
Get the specified trader's settlement token balance, without pending fee, funding payment
        and owed realized PnL

The function is equivalent to `getBalanceByToken(trader, settlementToken)`
     We keep this function solely for backward-compatibility with the older single-collateral system.
     In practical applications, the developer might want to use `getSettlementTokenValue()` instead
     because the latter includes pending fee, funding payment etc.
     and therefore more accurately reflects a trader's settlement (ex. USDC) balance


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance` | int256 | The balance amount (in settlement token's decimals)
### getBalanceByToken
```solidity
  function getBalanceByToken(
    address trader,
    address token
  ) public returns (int256)
```
Get the balance of Vault of the specified collateral token and trader


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`token` | address | The address of the collateral token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance` | int256 | The balance amount (in its native decimals)
### getCollateralTokens
```solidity
  function getCollateralTokens(
    address trader
  ) external returns (address[])
```
Get the array of collateral token addresses that a trader has in their account


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateralTokens` | address[] | array of collateral token addresses
### getAccountValue
```solidity
  function getAccountValue(
    address trader
  ) public returns (int256)
```
Get account value (denominated in settlement token) of the specified trader


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`accountValue` | int256 | account value (in settlement token's decimals)
### getFreeCollateral
```solidity
  function getFreeCollateral(
    address trader
  ) public returns (uint256)
```
Get the free collateral value denominated in the settlement token of the specified trader


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`freeCollateral` | uint256 | the value (in settlement token's decimals) of free collateral available
        for withdraw or opening new positions or orders)
### getFreeCollateralByRatio
```solidity
  function getFreeCollateralByRatio(
    address trader,
    uint24 ratio
  ) public returns (int256)
```
Get the free collateral amount of the specified trader and collateral ratio

There are three configurations for different insolvency risk tolerances:
     **conservative, moderate &aggressive**. We will start with the **conservative** one
     and gradually move to **aggressive** to increase capital efficiency

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`ratio` | uint24 | The margin requirement ratio, imRatio or mmRatio

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`freeCollateralByRatio` | int256 | freeCollateral (in settlement token's decimals), by using the
        input margin requirement ratio; can be negative
### getFreeCollateralByToken
```solidity
  function getFreeCollateralByToken(
    address trader,
    address token
  ) public returns (uint256)
```
Get the free collateral amount of the specified collateral token of specified trader


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`token` | address | The address of the collateral token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`freeCollateral` | uint256 | amount of that token (in the token's native decimals)
### getSettlementTokenValue
```solidity
  function getSettlementTokenValue(
    address trader
  ) public returns (int256)
```
Get the specified trader's settlement value, including pending fee, funding payment,
        owed realized PnL and unrealized PnL

Note the difference between `settlementTokenBalanceX10_S`, `getSettlementTokenValue()` and `getBalance()`:
     They are all settlement token balances but with or without
     pending fee, funding payment, owed realized PnL, unrealized PnL, respectively
     In practical applications, we use `getSettlementTokenValue()` to get the trader's debt (if < 0)

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance` | int256 | The balance amount (in settlement token's decimals)
### isLiquidatable
```solidity
  function isLiquidatable(
    address trader
  ) public returns (bool)
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`true` | bool | If the trader can be liquidated
### getMarginRequirementForCollateralLiquidation
```solidity
  function getMarginRequirementForCollateralLiquidation(
    address trader
  ) public returns (int256)
```
get the margin requirement for collateral liquidation of a trader

this value is compared with `ClearingHouse.getAccountValue()` (int)

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`margin` | int256 | requirement (in 18 decimals)
### getCollateralMmRatio
```solidity
  function getCollateralMmRatio(
  ) public returns (uint24)
```
Get the maintenance margin ratio for collateral liquidation



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateralMmRatio` | uint24 | The maintenance margin ratio for collateral liquidation
### getRepaidSettlementByCollateral
```solidity
  function getRepaidSettlementByCollateral(
    address token,
    uint256 collateral
  ) public returns (uint256 settlementX10_S)
```
Get a trader's repaid settlement amount by a given collateral amount


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | The address of the token of the trader's collateral
|`collateral` | uint256 | The amount of collateral token the liquidator wants to get

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`settlementX10_S` | uint256 | The settlement amount(in settlement token's decimals) the liquidator needs to pay
### getLiquidatableCollateralBySettlement
```solidity
  function getLiquidatableCollateralBySettlement(
    address token,
    uint256 settlementX10_S
  ) public returns (uint256 collateral)
```
Get a trader's liquidatable collateral amount by a given settlement amount


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token` | address | The address of the token of the trader's collateral
|`settlementX10_S` | uint256 | The amount of settlement token the liquidator wants to pay

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`collateral` | uint256 | The collateral amount(in its native decimals) the liquidator can get
### getMaxRepaidSettlementAndLiquidatableCollateral
```solidity
  function getMaxRepaidSettlementAndLiquidatableCollateral(
    address trader,
    address token
  ) public returns (uint256 maxRepaidSettlementX10_S, uint256 maxLiquidatableCollateral)
```
Get a trader's max repaid settlement & max liquidatable collateral by a given collateral token

formula:
maxRepaidSettlement = maxLiquidatableCollateral * indexTwap
maxLiquidatableCollateral =
    min(maxRepaidSettlement / (indexTwap * (1 - discountRatio)), getBalanceByToken(trader, token))
#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`token` | address | The address of the token of the trader's collateral

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxRepaidSettlementX10_S` | uint256 | The maximum settlement amount(in settlement token's decimals)
        the liquidator needs to pay to liquidate a trader's collateral token
|`maxLiquidatableCollateral` | uint256 | The maximum liquidatable collateral amount
        (in the collateral token's native decimals) of a trader

