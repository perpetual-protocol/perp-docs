
## Functions
### modifyTakerBalance
```solidity
  function modifyTakerBalance(
    address trader,
    address baseToken,
    int256 base,
    int256 quote
  ) external returns (int256 takerPositionSize, int256 takerOpenNotional)
```
Modify trader account balance

Only used by `ClearingHouse` contract

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`baseToken` | address | The address of the baseToken
|`base` | int256 | Modified amount of base
|`quote` | int256 | Modified amount of quote

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`takerPositionSize` | int256 | Taker position size after modified
|`takerOpenNotional` | int256 | Taker open notional after modified
### modifyOwedRealizedPnl
```solidity
  function modifyOwedRealizedPnl(
    address trader,
    int256 amount
  ) external
```
Modify trader owedRealizedPnl

Only used by `ClearingHouse` contract

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`amount` | int256 | Modified amount of owedRealizedPnl

### settleOwedRealizedPnl
```solidity
  function settleOwedRealizedPnl(
    address trader
  ) external returns (int256 pnl)
```
Settle owedRealizedPnl

Only used by `Vault.withdraw()`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pnl` | int256 | Settled owedRealizedPnl
### settleQuoteToOwedRealizedPnl
```solidity
  function settleQuoteToOwedRealizedPnl(
    address trader,
    address baseToken,
    int256 amount
  ) external
```
Modify trader owedRealizedPnl

Only used by `ClearingHouse` contract

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`baseToken` | address | The address of the baseToken
|`amount` | int256 | Settled quote amount

### settleBalanceAndDeregister
```solidity
  function settleBalanceAndDeregister(
    address maker,
    address baseToken,
    int256 realizedPnl,
    int256 fee
  ) external
```
Settle account balance and deregister base token

Only used by `ClearingHouse` contract

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maker` | address | The address of the maker
|`baseToken` | address | The address of the baseToken
|`realizedPnl` | int256 | Amount of pnl realized
|`fee` | int256 | Amount of fee collected from pool

### registerBaseToken
```solidity
  function registerBaseToken(
    address trader,
    address baseToken
  ) external
```
Every time a trader's position value is checked, the base token list of this trader will be traversed;
thus, this list should be kept as short as possible

Only used by `ClearingHouse` contract

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`baseToken` | address | The address of the trader's base token

### deregisterBaseToken
```solidity
  function deregisterBaseToken(
    address trader,
    address baseToken
  ) external
```
Deregister baseToken from trader accountInfo

Only used by `ClearingHouse` contract, this function is expensive, due to for loop

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`baseToken` | address | The address of the trader's base token

### updateTwPremiumGrowthGlobal
```solidity
  function updateTwPremiumGrowthGlobal(
    address trader,
    address baseToken,
    int256 lastTwPremiumGrowthGlobalX96
  ) external
```
Update trader Twap premium info

Only used by `ClearingHouse` contract

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken
|`lastTwPremiumGrowthGlobalX96` | int256 | The last Twap Premium

### settlePositionInClosedMarket
```solidity
  function settlePositionInClosedMarket(
    address trader,
    address baseToken
  ) external returns (int256 positionNotional, int256 openNotional, int256 realizedPnl, uint256 closedPrice)
```
Settle trader's PnL in closed market

Only used by `ClearingHouse`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`baseToken` | address | The address of the trader's base token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionNotional` | int256 | Taker's position notional settled with closed price
|`openNotional` | int256 | Taker's open notional
|`realizedPnl` | int256 | Settled realized pnl
|`closedPrice` | uint256 | The closed price of the closed market
### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address clearingHouseConfig)
```
Get `ClearingHouseConfig` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`clearingHouseConfig` | address | The address of ClearingHouseConfig
### getOrderBook
```solidity
  function getOrderBook(
  ) external returns (address orderBook)
```
Get `OrderBook` address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`orderBook` | address | The address of OrderBook
### getVault
```solidity
  function getVault(
  ) external returns (address vault)
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
  ) external returns (address[] baseTokens)
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
  ) external returns (struct AccountMarket.Info traderAccountInfo)
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
    address trader,
    address baseToken
  ) external returns (int256 openNotional)
```
Get taker cost of trader's baseToken


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`openNotional` | int256 | The taker cost of trader's baseToken
### getTotalOpenNotional
```solidity
  function getTotalOpenNotional(
    address trader,
    address baseToken
  ) external returns (int256 totalOpenNotional)
```
Get total cost of trader's baseToken


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalOpenNotional` | int256 | the amount of quote token paid for a position when opening
### getTotalDebtValue
```solidity
  function getTotalDebtValue(
    address trader
  ) external returns (uint256 totalDebtValue)
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
  ) external returns (int256 marginRequirementForLiquidation)
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
  ) external returns (int256 owedRealizedPnl, int256 unrealizedPnl, uint256 pendingFee)
```
Get owedRealizedPnl, unrealizedPnl and pending fee


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
  ) external returns (bool hasOrder)
```
Check trader has open order in open/closed market.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`hasOrder` | bool | True of false
### getBase
```solidity
  function getBase(
    address trader,
    address baseToken
  ) external returns (int256 baseAmount)
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
  ) external returns (int256 quoteAmount)
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
  ) external returns (int256 takerPositionSize)
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
  ) external returns (int256 totalPositionSize)
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
  ) external returns (int256 totalPositionValue)
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
  ) external returns (uint256 totalAbsPositionValue)
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

## Events
### VaultChanged
```solidity
  event VaultChanged(
    address vault
  )
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault`| address | The address of the vault contract
### PnlRealized
```solidity
  event PnlRealized(
    address trader,
    int256 amount
  )
```

Emit whenever a trader's `owedRealizedPnl` is updated

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader`| address | The address of the trader
|`amount`| int256 | The amount changed
