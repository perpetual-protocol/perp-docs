
## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### setPriceFeed
```solidity
  function setPriceFeed(
  ) external
```

This function is only used for emergency shutdown, to set priceFeed to an emergencyPriceFeed


### getIndexPrice
```solidity
  function getIndexPrice(
    uint256 interval
  ) external returns (uint256)
```
Returns the index price of the token.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`interval` | uint256 | The interval represents twap interval.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`indexPrice` | uint256 | Twap price with interval
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

