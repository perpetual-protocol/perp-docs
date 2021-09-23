


## Functions
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




### deposit
```solidity
  function deposit(
  ) external
```




### withdraw
```solidity
  function withdraw(
  ) external
```




### getFreeCollateral
```solidity
  function getFreeCollateral(
  ) public returns (uint256)
```




### balanceOf
```solidity
  function balanceOf(
  ) public returns (int256)
```

this function is expensive


### getFreeCollateralByRatio
```solidity
  function getFreeCollateralByRatio(
  ) public returns (int256)
```




### _addCollateralToken
```solidity
  function _addCollateralToken(
  ) internal
```




### _modifyBalance
```solidity
  function _modifyBalance(
  ) internal
```




### _getTotalCollateralValue
```solidity
  function _getTotalCollateralValue(
  ) internal returns (int256)
```




### _getTotalMarginRequirement
```solidity
  function _getTotalMarginRequirement(
  ) internal returns (uint256)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalMarginRequirement`| address | with decimals == 18
### _getBalance
```solidity
  function _getBalance(
  ) internal returns (int256)
```




### _getImRatio
```solidity
  function _getImRatio(
  ) internal returns (uint24)
```




### _msgSender
```solidity
  function _msgSender(
  ) internal returns (address payable)
```
return the sender of this call.
if the call came through our trusted forwarder, return the original sender.
otherwise, return `msg.sender`.
should be used in the contract anywhere instead of msg.sender



### _msgData
```solidity
  function _msgData(
  ) internal returns (bytes)
```
return the msg.data of this call.
if the call came through our trusted forwarder, then the real sender was appended as the last 20 bytes
of the msg.data - so this method will strip those 20 bytes off.
otherwise, return `msg.data`
should be used in the contract instead of msg.data, where the difference matters (e.g. when explicitly
signing or hashing the



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



