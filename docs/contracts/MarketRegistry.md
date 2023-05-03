
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




### setMarketMaxPriceSpreadRatio
```solidity
  function setMarketMaxPriceSpreadRatio(
  ) external
```




### getQuoteToken
```solidity
  function getQuoteToken(
  ) external returns (address)
```
Get the quote token address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`quoteToken` | address | The address of the quote token
### getUniswapV3Factory
```solidity
  function getUniswapV3Factory(
  ) external returns (address)
```
Get Uniswap factory address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`factory` | address | The address of the Uniswap factory
### getMaxOrdersPerMarket
```solidity
  function getMaxOrdersPerMarket(
  ) external returns (uint8)
```
Get max allowed orders per market



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxOrdersPerMarket` | uint8 | The max allowed orders per market
### getPool
```solidity
  function getPool(
    address baseToken
  ) external returns (address)
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
  ) external returns (uint24)
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
  ) external returns (uint24)
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
### getMarketMaxPriceSpreadRatio
```solidity
  function getMarketMaxPriceSpreadRatio(
  ) external returns (uint24)
```

if we didn't set the max spread ratio for the market, we will use the default value

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`marketMaxPriceSpreadRatio` | uint24 | Max price spread ratio of the market
### getMarketInfo
```solidity
  function getMarketInfo(
    address baseToken
  ) external returns (struct IMarketRegistry.MarketInfo)
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
### hasPool
```solidity
  function hasPool(
  ) external returns (bool)
```
Check if a pool exist by given base token address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`hasPool` | bool | True if the pool exist, false otherwise

