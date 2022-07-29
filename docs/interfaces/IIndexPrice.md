
## Functions
### getIndexPrice
```solidity
  function getIndexPrice(
    uint256 interval
  ) external returns (uint256 indexPrice)
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

