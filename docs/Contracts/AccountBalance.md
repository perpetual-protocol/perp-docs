
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
  ) external returns (int256, int256, uint256)
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
  ) public returns (int256)
```




### getQuote
```solidity
  function getQuote(
  ) public returns (int256)
```




### getTakerPositionSize
```solidity
  function getTakerPositionSize(
  ) public returns (int256)
```




### getTotalPositionSize
```solidity
  function getTotalPositionSize(
  ) public returns (int256)
```




### getTotalPositionValue
```solidity
  function getTotalPositionValue(
  ) public returns (int256)
```

a negative returned value is only be used when calculating pnl
we use 15 mins twap to calc position value


### getTotalAbsPositionValue
```solidity
  function getTotalAbsPositionValue(
  ) public returns (uint256)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`sum` | uint256 | up positions value of every market, it calls `getTotalPositionValue` internally

