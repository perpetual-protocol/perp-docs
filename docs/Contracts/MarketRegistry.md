


## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### addPool
```solidity
  function addPool(
  ) external returns (address)
```




### setClearingHouse
```solidity
  function setClearingHouse(
  ) external
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
  ) external returns (struct MarketRegistry.MarketInfo)
```




## Events
### PoolAdded
```solidity
  event PoolAdded(
  )
```



### ClearingHouseChanged
```solidity
  event ClearingHouseChanged(
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



