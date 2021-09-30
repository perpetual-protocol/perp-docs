



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





## Events
### MetaTransactionExecuted
```solidity
  event MetaTransactionExecuted(
  )
```




