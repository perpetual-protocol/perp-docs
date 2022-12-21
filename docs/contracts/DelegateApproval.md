
## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### approve
```solidity
  function approve(
    address delegate,
    uint8 actions
  ) external
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`delegate` | address | The address of delegate
|`actions` | uint8 | The actions to be approved

### revoke
```solidity
  function revoke(
    address delegate,
    uint8 actions
  ) external
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`delegate` | address | The address of delegate
|`actions` | uint8 | The actions to be revoked

### getClearingHouseOpenPositionAction
```solidity
  function getClearingHouseOpenPositionAction(
  ) external returns (uint8)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`action` | uint8 | The value of action `_CLEARINGHOUSE_OPENPOSITION`
### getClearingHouseAddLiquidityAction
```solidity
  function getClearingHouseAddLiquidityAction(
  ) external returns (uint8)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`action` | uint8 | The value of action `_CLEARINGHOUSE_ADDLIQUIDITY`
### getClearingHouseRemoveLiquidityAction
```solidity
  function getClearingHouseRemoveLiquidityAction(
  ) external returns (uint8)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`action` | uint8 | The value of action `_CLEARINGHOUSE_REMOVELIQUIDITY`
### getApprovedActions
```solidity
  function getApprovedActions(
    address trader,
    address delegate
  ) external returns (uint8)
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`delegate` | address | The address of delegate

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`actions` | uint8 | The approved actions
### hasApprovalFor
```solidity
  function hasApprovalFor(
    address trader,
    address delegate,
    uint8 actions
  ) external returns (bool)
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`delegate` | address | The address of delegate
|`actions` | uint8 | The actions to be checked

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`true` | bool | if delegate is allowed to perform **each** actions for trader, otherwise false
### canOpenPositionFor
```solidity
  function canOpenPositionFor(
    address trader,
    address delegate
  ) external returns (bool)
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`delegate` | address | The address of delegate

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`true` | bool | if delegate can open position for trader, otherwise false
### canAddLiquidityFor
```solidity
  function canAddLiquidityFor(
    address trader,
    address delegate
  ) external returns (bool)
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`delegate` | address | The address of delegate

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`true` | bool | if delegate can add liquidity for trader, otherwise false
### canRemoveLiquidityFor
```solidity
  function canRemoveLiquidityFor(
    address trader,
    address delegate
  ) external returns (bool)
```


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`delegate` | address | The address of delegate

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`true` | bool | if delegate can remove liquidity for trader, otherwise false

