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
    address baseToken,
    uint24 feeRatio
  ) external returns (address pool)
```

Add a new pool to the registry.

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | The token that the pool is for.
|`feeRatio` | uint24 | The fee ratio for the pool.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pool` | address | The address of the pool.
### setFeeRatio
```solidity
  function setFeeRatio(
    address baseToken,
    uint24 feeRatio
  ) external
```

Set the fee ratio for a pool

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | The token address of the pool.
|`feeRatio` | uint24 | The fee ratio for the pool.

### setInsuranceFundFeeRatio
```solidity
  function setInsuranceFundFeeRatio(
    address baseToken,
    uint24 insuranceFundFeeRatioArg
  ) external
```

Set insurance fund fee ratio for a pool

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | The token address of the pool.
|`insuranceFundFeeRatioArg` | uint24 | The fee ratio for the pool.

### setMaxOrdersPerMarket
```solidity
  function setMaxOrdersPerMarket(
    uint8 maxOrdersPerMarketArg
  ) external
```

Set max allowed orders per market

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxOrdersPerMarketArg` | uint8 | The max allowed orders per market

### getPool
```solidity
  function getPool(
    address baseToken
  ) external returns (address pool)
```
Get the pool address (UNIv3 pool) by given base token address


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | The address of the base token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pool` | address | The address of the pool
### getFeeRatio
```solidity
  function getFeeRatio(
    address baseToken
  ) external returns (uint24 feeRatio)
```
Get the fee ratio of a given market

The ratio is in `1e6` format, that means `1% = 1e4`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | The address of the base token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`feeRatio` | uint24 | The fee ratio of the market, it is a decimal in `1e6`
### getInsuranceFundFeeRatio
```solidity
  function getInsuranceFundFeeRatio(
    address baseToken
  ) external returns (uint24 feeRatio)
```
Get the insurance fund fee ratio of a given market

The ratio is in `1e6` format, that means `1% = 1e4`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | The address of the base token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`feeRatio` | uint24 | The fee ratio of the market, it is a decimal in `1e6`
### getMarketInfo
```solidity
  function getMarketInfo(
    address baseToken
  ) external returns (struct IMarketRegistry.MarketInfo info)
```
Get the market info by given base token address


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken` | address | The address of the base token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`info` | struct IMarketRegistry.MarketInfo | The market info encoded as `MarketInfo`
### getQuoteToken
```solidity
  function getQuoteToken(
  ) external returns (address quoteToken)
```
Get the quote token address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`quoteToken` | address | The address of the quote token
### getUniswapV3Factory
```solidity
  function getUniswapV3Factory(
  ) external returns (address factory)
```
Get Uniswap factory address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`factory` | address | The address of the Uniswap factory
### getMaxOrdersPerMarket
```solidity
  function getMaxOrdersPerMarket(
  ) external returns (uint8 maxOrdersPerMarket)
```
Get max allowed orders per market



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxOrdersPerMarket` | uint8 | The max allowed orders per market
### hasPool
```solidity
  function hasPool(
  ) external returns (bool hasPool)
```
Check if a pool exist by given base token address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`hasPool` | bool | True if the pool exist, false otherwise

## Events
### PoolAdded
```solidity
  event PoolAdded(
    address baseToken,
    uint24 feeRatio,
    address pool
  )
```
Emitted when a new market is created.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken`| address | The address of the base token
|`feeRatio`| uint24 | Fee ratio of the market
|`pool`| address | The address of the pool
### FeeRatioChanged
```solidity
  event FeeRatioChanged(
    address baseToken,
    uint24 feeRatio
  )
```
Emitted when the fee ratio of a market is updated.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`baseToken`| address | The address of the base token
|`feeRatio`| uint24 | Fee ratio of the market
### InsuranceFundFeeRatioChanged
```solidity
  event InsuranceFundFeeRatioChanged(
    uint24 feeRatio
  )
```
Emitted when the insurance fund fee ratio is updated.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`feeRatio`| uint24 | Insurance fund fee ratio
### MaxOrdersPerMarketChanged
```solidity
  event MaxOrdersPerMarketChanged(
    uint8 maxOrdersPerMarket
  )
```
Emitted when the max orders per market is updated.


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxOrdersPerMarket`| uint8 | Max orders per market
