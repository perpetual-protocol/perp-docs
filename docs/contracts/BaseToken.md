
## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### pause
```solidity
  function pause(
  ) external
```




### close
```solidity
  function close(
  ) external
```




### close
```solidity
  function close(
  ) external
```




### setPriceFeed
```solidity
  function setPriceFeed(
  ) external
```




### cacheTwap
```solidity
  function cacheTwap(
  ) external
```




### getPriceFeed
```solidity
  function getPriceFeed(
  ) external returns (address)
```
Get the price feed address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`priceFeed` | address | the current price feed
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




### getIndexPrice
```solidity
  function getIndexPrice(
    uint256 interval
  ) public returns (uint256)
```
Returns the index price of the token.

we overwrite the index price in BaseToken depending on the status
     1. Open: the price is from the price feed
     2. Paused or Closed: the price is twap when the token was paused
#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`interval` | uint256 | The interval represents twap interval.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`indexPrice` | uint256 | Twap price with interval

