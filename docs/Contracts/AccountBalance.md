
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




### modifyTakerBalance
```solidity
  function modifyTakerBalance(
  ) external returns (int256, int256)
```




### modifyOwedRealizedPnl
```solidity
  function modifyOwedRealizedPnl(
  ) external
```




### settleQuoteToOwedRealizedPnl
```solidity
  function settleQuoteToOwedRealizedPnl(
  ) external
```




### settleOwedRealizedPnl
```solidity
  function settleOwedRealizedPnl(
  ) external returns (int256)
```




### settleBalanceAndDeregister
```solidity
  function settleBalanceAndDeregister(
  ) external
```




### registerBaseToken
```solidity
  function registerBaseToken(
  ) external
```




### deregisterBaseToken
```solidity
  function deregisterBaseToken(
  ) external
```




### updateTwPremiumGrowthGlobal
```solidity
  function updateTwPremiumGrowthGlobal(
  ) external
```




### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```
Get `ClearingHouseConfig` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouseConfig` | address | The address of ClearingHouseConfig
### getOrderBook
```solidity
  function getOrderBook(
  ) external returns (address)
```
Get `OrderBook` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`orderBook` | address | The address of OrderBook
### getVault
```solidity
  function getVault(
  ) external returns (address)
```
Get `Vault` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault` | address | The address of Vault
### getBaseTokens
```solidity
  function getBaseTokens(
    address trader
  ) external returns (address[])
```
Get trader registered baseTokens


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseTokens` | address[] | The array of baseToken address
### getAccountInfo
```solidity
  function getAccountInfo(
    address trader,
    address baseToken
  ) external returns (struct AccountMarket.Info)
```
Get trader account info


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`traderAccountInfo` | struct AccountMarket.Info | The baseToken account info of trader
### getTakerOpenNotional
```solidity
  function getTakerOpenNotional(
  ) external returns (int256)
```




### getTotalOpenNotional
```solidity
  function getTotalOpenNotional(
  ) external returns (int256)
```




### getTotalDebtValue
```solidity
  function getTotalDebtValue(
    address trader
  ) external returns (uint256)
```
Get total debt value of trader

Total debt value will relate to `Vault.getFreeCollateral()`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalDebtValue` | uint256 | The debt value of trader
### getMarginRequirementForLiquidation
```solidity
  function getMarginRequirementForLiquidation(
    address trader
  ) external returns (int256)
```
Get margin requirement to check whether trader will be able to liquidate

This is different from `Vault._getTotalMarginRequirement()`, which is for freeCollateral calculation

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`marginRequirementForLiquidation` | int256 | It is compared with `ClearingHouse.getAccountValue` which is also an int
### getPnlAndPendingFee
```solidity
  function getPnlAndPendingFee(
    address trader
  ) external returns (int256, int256, uint256)
```
Get owedRealizedPnl, realizedPnl and pending fee


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`owedRealizedPnl` | int256 | the pnl realized already but stored temporarily in AccountBalance
|`unrealizedPnl` | int256 | the pnl not yet realized
|`pendingFee` | uint256 | the pending fee of maker earned
### hasOrder
```solidity
  function hasOrder(
    address trader
  ) external returns (bool)
```
Check trader has open order or not


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`hasOrderOrNot` | bool | True of false
### getBase
```solidity
  function getBase(
    address trader,
    address baseToken
  ) public returns (int256)
```
Get trader base amount

`base amount = takerPositionSize - orderBaseDebt`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseAmount` | int256 | The base amount of trader's baseToken market
### getQuote
```solidity
  function getQuote(
    address trader,
    address baseToken
  ) public returns (int256)
```
Get trader quote amount

`quote amount = takerOpenNotional - orderQuoteDebt`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`quoteAmount` | int256 | The quote amount of trader's baseToken market
### getTakerPositionSize
```solidity
  function getTakerPositionSize(
    address trader,
    address baseToken
  ) public returns (int256)
```
Get taker position size of trader's baseToken market

This will only has taker position, can get maker impermanent position through `getTotalPositionSize`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`takerPositionSize` | int256 | The taker position size of trader's baseToken market
### getTotalPositionSize
```solidity
  function getTotalPositionSize(
    address trader,
    address baseToken
  ) public returns (int256)
```
Get total position size of trader's baseToken market

`total position size = taker position size + maker impermanent position size`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalPositionSize` | int256 | The total position size of trader's baseToken market
### getTotalPositionValue
```solidity
  function getTotalPositionValue(
    address trader,
    address baseToken
  ) public returns (int256)
```
Get total position value of trader's baseToken market

A negative returned value is only be used when calculating pnl,
we use `15 mins` twap to calc position value

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalPositionValue` | int256 | Total position value of trader's baseToken market
### getTotalAbsPositionValue
```solidity
  function getTotalAbsPositionValue(
    address trader
  ) public returns (uint256)
```
Get all market position abs value of trader


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalAbsPositionValue` | uint256 | Sum up positions value of every market

