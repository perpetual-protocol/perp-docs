


## Functions
### __VirtualToken_init
```solidity
  function __VirtualToken_init(
  ) internal
```




### mintMaximumTo
```solidity
  function mintMaximumTo(
  ) external
```




### addWhitelist
```solidity
  function addWhitelist(
  ) external
```




### removeWhitelist
```solidity
  function removeWhitelist(
  ) external
```




### isInWhitelist
```solidity
  function isInWhitelist(
  ) external returns (bool)
```




### _beforeTokenTransfer
```solidity
  function _beforeTokenTransfer(
  ) internal
```

Hook that is called before any transfer of tokens. This includes
minting and burning.
Calling conditions:
- when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
will be to transferred to `to`.
- when `from` is zero, `amount` tokens will be minted for `to`.
- when `to` is zero, `amount` of ``from``'s tokens will be burned.
- `from` and `to` are never both zero.
To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].


## Events
### WhitelistAdded
```solidity
  event WhitelistAdded(
  )
```



### WhitelistRemoved
```solidity
  event WhitelistRemoved(
  )
```



