
## Functions
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




### settleOwedRealizedPnl
```solidity
  function settleOwedRealizedPnl(
  ) external returns (int256 pnl)
```

this function is now only called by Vault.withdraw()


### settleQuoteToOwedRealizedPnl
```solidity
  function settleQuoteToOwedRealizedPnl(
  ) external
```




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

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maker` | address | The address of the maker
|`baseToken` | address | The address of the market's base token
|`realizedPnl` | int256 | Amount of pnl realized
|`fee` | int256 | Amount of fee collected from pool

### registerBaseToken
```solidity
  function registerBaseToken(
    address trader,
    address baseToken
  ) external
```

every time a trader's position value is checked, the base token list of this trader will be traversed;
     thus, this list should be kept as short as possible

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

this function is expensive

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of the trader
|`baseToken` | address | The address of the trader's base token

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




### getOrderBook
```solidity
  function getOrderBook(
  ) external returns (address)
```




### getVault
```solidity
  function getVault(
  ) external returns (address)
```




### getBaseTokens
```solidity
  function getBaseTokens(
  ) external returns (address[])
```




### getAccountInfo
```solidity
  function getAccountInfo(
  ) external returns (struct AccountMarket.Info)
```




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



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalOpenNotional` | int256 | the amount of quote token paid for a position when opening
### getTotalDebtValue
```solidity
  function getTotalDebtValue(
  ) external returns (uint256)
```




### getMarginRequirementForLiquidation
```solidity
  function getMarginRequirementForLiquidation(
  ) external returns (int256)
```

this is different from Vault._getTotalMarginRequirement(), which is for freeCollateral calculation


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`int` | int256 | instead of uint, as it is compared with ClearingHouse.getAccountValue(), which is also an int
### getPnlAndPendingFee
```solidity
  function getPnlAndPendingFee(
  ) external returns (int256 owedRealizedPnl, int256 unrealizedPnl, uint256 pendingFee)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`owedRealizedPnl` | int256 | the pnl realized already but stored temporarily in AccountBalance
|`unrealizedPnl` | int256 | the pnl not yet realized
|`pendingFee` | uint256 | the pending fee of maker earned
### hasOrder
```solidity
  function hasOrder(
  ) external returns (bool)
```




### getBase
```solidity
  function getBase(
  ) external returns (int256)
```




### getQuote
```solidity
  function getQuote(
  ) external returns (int256)
```




### getTakerPositionSize
```solidity
  function getTakerPositionSize(
  ) external returns (int256)
```




### getTotalPositionSize
```solidity
  function getTotalPositionSize(
  ) external returns (int256)
```




### getTotalPositionValue
```solidity
  function getTotalPositionValue(
  ) external returns (int256)
```

a negative returned value is only be used when calculating pnl
we use 15 mins twap to calc position value


### getTotalAbsPositionValue
```solidity
  function getTotalAbsPositionValue(
  ) external returns (uint256)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`sum` | uint256 | up positions value of every market, it calls `getTotalPositionValue` internally

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
