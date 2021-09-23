


## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### addToWhitelists
```solidity
  function addToWhitelists(
    address addr
  ) external
```
add an address to the whitelist. Only contracts in the whitelist can be executed by this gateway.
        This prevents the gateway from being abused to execute arbitrary meta txs

only owner can call

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`addr` | address | an address

### removeFromWhitelists
```solidity
  function removeFromWhitelists(
  ) external
```




### executeMetaTransaction
```solidity
  function executeMetaTransaction(
  ) external returns (bytes)
```




### getNonce
```solidity
  function getNonce(
  ) external returns (uint256 nonce)
```




### isInWhitelists
```solidity
  function isInWhitelists(
  ) public returns (bool)
```




### _getChainID
```solidity
  function _getChainID(
  ) internal returns (uint256 id)
```




### _toTypedMessageHash
```solidity
  function _toTypedMessageHash(
  ) internal returns (bytes32)
```
Accept message hash and returns hash message in EIP712 compatible form
So that it can be used to recover signer from signature signed using EIP712 formatted data
https://eips.ethereum.org/EIPS/eip-712
"\\x19" makes the encoding deterministic
"\\x01" is the version byte to make it compatible to EIP-191



### _hashMetaTransaction
```solidity
  function _hashMetaTransaction(
  ) internal returns (bytes32)
```




### _verify
```solidity
  function _verify(
  ) internal returns (bool)
```




## Events
### MetaTransactionExecuted
```solidity
  event MetaTransactionExecuted(
  )
```



