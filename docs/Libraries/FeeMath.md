


## Functions
### calcAmountScaledByFeeRatio
```solidity
  function calcAmountScaledByFeeRatio(
  ) internal returns (uint256)
```




### calcAmountWithFeeRatioReplaced
```solidity
  function calcAmountWithFeeRatioReplaced(
    uint256 isReplacingUniswapFeeRatio
  ) internal returns (uint256)
```

calculate the amount when feeRatio is switched between uniswapFeeRatio and clearingHouseFeeRatio
#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`isReplacingUniswapFeeRatio` | uint256 | is to replace uniswapFeeRatio or clearingHouseFeeRatio
       let x : uniswapFeeRatio, y : clearingHouseFeeRatio
       true: replacing uniswapFeeRatio with clearingHouseFeeRatio: amount * (1 - y) / (1 - x)
       false: replacing clearingHouseFeeRatio with uniswapFeeRatio: amount * (1 - x) / (1 - y)
       multiplying a fee is applying it as the new standard and dividing a fee is removing its effect


### calcScaledAmountForUniswapV3PoolSwap
```solidity
  function calcScaledAmountForUniswapV3PoolSwap(
    bool amount
  ) internal returns (uint256 scaledAmount)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | bool | depending on isBaseToQuote & isExactInput, either input or output amount needs to be scaled

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`scaledAmount`| bool | the scaled amount for UniswapV3Pool.swap()
