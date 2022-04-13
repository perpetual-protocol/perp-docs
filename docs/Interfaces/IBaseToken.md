
## Functions
### close
```solidity
  function close(
  ) external
```




### getPriceFeed
```solidity
  function getPriceFeed(
  ) external returns (address priceFeed)
```
Get the price feed address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`priceFeed` | address | the current price feed
### getPausedTimestamp
```solidity
  function getPausedTimestamp(
  ) external returns (uint256)
```




### getPausedIndexPrice
```solidity
  function getPausedIndexPrice(
  ) external returns (uint256)
```




### getClosedPrice
```solidity
  function getClosedPrice(
  ) external returns (uint256)
```




### isOpen
```solidity
  function isOpen(
  ) external returns (bool)
```




### isPaused
```solidity
  function isPaused(
  ) external returns (bool)
```




### isClosed
```solidity
  function isClosed(
  ) external returns (bool)
```





## Events
### PriceFeedChanged
```solidity
  event PriceFeedChanged(
  )
```



### StatusUpdated
```solidity
  event StatusUpdated(
  )
```



