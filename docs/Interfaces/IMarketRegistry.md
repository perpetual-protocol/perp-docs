### MarketInfo
```solidity
  struct MarketInfo(
    address pool
    uint24 exchangeFeeRatio
    uint24 uniswapFeeRatio
    uint24 insuranceFundFeeRatio
  )
```




## Functions
### addPool
```solidity
  function addPool(
  ) external returns (address)
```




### setFeeRatio
```solidity
  function setFeeRatio(
  ) external
```




### setInsuranceFundFeeRatio
```solidity
  function setInsuranceFundFeeRatio(
  ) external
```




### setMaxOrdersPerMarket
```solidity
  function setMaxOrdersPerMarket(
  ) external
```




### getPool
```solidity
  function getPool(
  ) external returns (address)
```




### getFeeRatio
```solidity
  function getFeeRatio(
  ) external returns (uint24)
```




### getInsuranceFundFeeRatio
```solidity
  function getInsuranceFundFeeRatio(
  ) external returns (uint24)
```




### getMarketInfo
```solidity
  function getMarketInfo(
  ) external returns (struct IMarketRegistry.MarketInfo)
```




### getQuoteToken
```solidity
  function getQuoteToken(
  ) external returns (address)
```




### getUniswapV3Factory
```solidity
  function getUniswapV3Factory(
  ) external returns (address)
```




### getMaxOrdersPerMarket
```solidity
  function getMaxOrdersPerMarket(
  ) external returns (uint8)
```




### hasPool
```solidity
  function hasPool(
  ) external returns (bool)
```





## Events
### PoolAdded
```solidity
  event PoolAdded(
  )
```



### FeeRatioChanged
```solidity
  event FeeRatioChanged(
  )
```



### InsuranceFundFeeRatioChanged
```solidity
  event InsuranceFundFeeRatioChanged(
  )
```



### MaxOrdersPerMarketChanged
```solidity
  event MaxOrdersPerMarketChanged(
  )
```



