


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




### addBalance
```solidity
  function addBalance(
  ) external
```




### settleQuoteToPnl
```solidity
  function settleQuoteToPnl(
  ) external
```




### addOwedRealizedPnl
```solidity
  function addOwedRealizedPnl(
  ) external
```




### settleFundingAndUpdateFundingGrowth
```solidity
  function settleFundingAndUpdateFundingGrowth(
  ) external returns (struct Funding.Growth fundingGrowthGlobal)
```




### deregisterBaseToken
```solidity
  function deregisterBaseToken(
  ) external
```

this function is expensive


### registerBaseToken
```solidity
  function registerBaseToken(
  ) external
```




### settle
```solidity
  function settle(
  ) external returns (int256 pnl)
```

this function is now only called by Vault.withdraw()


### getOwedRealizedPnl
```solidity
  function getOwedRealizedPnl(
  ) external returns (int256)
```




### hasOrder
```solidity
  function hasOrder(
  ) external returns (bool)
```




### getOwedRealizedPnlWithPendingFundingPayment
```solidity
  function getOwedRealizedPnlWithPendingFundingPayment(
  ) external returns (int256 owedRealizedPnl)
```




### getTotalAbsPositionValue
```solidity
  function getTotalAbsPositionValue(
  ) external returns (uint256)
```




### getTotalDebtValue
```solidity
  function getTotalDebtValue(
  ) external returns (uint256)
```




### getTotalUnrealizedPnl
```solidity
  function getTotalUnrealizedPnl(
  ) external returns (int256)
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




### getNetQuoteBalance
```solidity
  function getNetQuoteBalance(
  ) public returns (int256)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`netQuoteBalance`| address | = quote.balance + totalQuoteInPools
### getPositionSize
```solidity
  function getPositionSize(
  ) public returns (int256)
```




### getPositionValue
```solidity
  function getPositionValue(
  ) public returns (int256)
```

a negative returned value is only be used when calculating pnl
we use 15 mins twap to calc position value


### getPendingFundingPayment
```solidity
  function getPendingFundingPayment(
  ) public returns (int256)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| address | pending funding payment of a trader in one market
### _settleFundingAndUpdateFundingGrowth
```solidity
  function _settleFundingAndUpdateFundingGrowth(
  ) internal returns (struct Funding.Growth)
```

this function should be called at the beginning of every high-level function, such as openPosition()


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`fundingGrowthGlobal`| address | the up-to-date globalFundingGrowth, usually used for later calculations
### _getPendingFundingPayment
```solidity
  function _getPendingFundingPayment(
  ) internal returns (int256)
```




### _getIndexPrice
```solidity
  function _getIndexPrice(
  ) internal returns (uint256)
```




### _getTwapInterval
```solidity
  function _getTwapInterval(
  ) internal returns (uint32)
```




### _getAllPendingFundingPayment
```solidity
  function _getAllPendingFundingPayment(
  ) internal returns (int256 pendingFundingPayment)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pendingFundingPayment`| address | the pending funding payment of a trader in all markets
