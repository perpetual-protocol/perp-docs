


## Structs
### AddLiquidityParams
```solidity
  struct AddLiquidityParams(
    address baseToken
    uint256 base
    uint256 quote
    int24 lowerTick
    int24 upperTick
    uint256 minBase
    uint256 minQuote
    bool useTakerBalance
    uint256 deadline
  )
```



### RemoveLiquidityParams
```solidity
  struct RemoveLiquidityParams(
    address baseToken
    int24 lowerTick
    int24 upperTick
    uint128 liquidity
    uint256 minBase
    uint256 minQuote
    uint256 deadline
  )
```



### AddLiquidityResponse
```solidity
  struct AddLiquidityResponse(
    uint256 base
    uint256 quote
    uint256 fee
    uint256 liquidity
  )
```



### RemoveLiquidityResponse
```solidity
  struct RemoveLiquidityResponse(
    uint256 base
    uint256 quote
    uint256 fee
  )
```



### OpenPositionParams
```solidity
  struct OpenPositionParams(
    address baseToken
    bool isBaseToQuote
    bool isExactInput
    uint256 amount
    uint256 oppositeAmountBound
    uint256 deadline
    uint160 sqrtPriceLimitX96
    bytes32 referralCode
  )
```



### ClosePositionParams
```solidity
  struct ClosePositionParams(
    address baseToken
    uint160 sqrtPriceLimitX96
    uint256 oppositeAmountBound
    uint256 deadline
    bytes32 referralCode
  )
```



### CollectPendingFeeParams
```solidity
  struct CollectPendingFeeParams(
    address trader
    address baseToken
    int24 lowerTick
    int24 upperTick
  )
```




## Functions
### addLiquidity
```solidity
  function addLiquidity(
  ) external returns (struct IClearingHouse.AddLiquidityResponse)
```

tx will fail if adding base == 0 && quote == 0 / liquidity == 0


### removeLiquidity
```solidity
  function removeLiquidity(
  ) external returns (struct IClearingHouse.RemoveLiquidityResponse response)
```




### settleAllFunding
```solidity
  function settleAllFunding(
  ) external
```




### openPosition
```solidity
  function openPosition(
  ) external returns (uint256 base, uint256 quote)
```




### closePosition
```solidity
  function closePosition(
  ) external returns (uint256 base, uint256 quote)
```




### liquidate
```solidity
  function liquidate(
  ) external
```




### cancelExcessOrders
```solidity
  function cancelExcessOrders(
  ) external
```




### cancelAllExcessOrders
```solidity
  function cancelAllExcessOrders(
  ) external
```




### getAccountValue
```solidity
  function getAccountValue(
  ) external returns (int256)
```

accountValue = totalCollateralValue + totalUnrealizedPnl, in 18 decimals


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




### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```




### getVault
```solidity
  function getVault(
  ) external returns (address)
```




### getExchange
```solidity
  function getExchange(
  ) external returns (address)
```




### getOrderBook
```solidity
  function getOrderBook(
  ) external returns (address)
```




### getAccountBalance
```solidity
  function getAccountBalance(
  ) external returns (address)
```




### getInsuranceFund
```solidity
  function getInsuranceFund(
  ) external returns (address)
```





## Events
### ReferredPositionChanged
```solidity
  event ReferredPositionChanged(
  )
```



### PositionLiquidated
```solidity
  event PositionLiquidated(
  )
```



### LiquidityChanged
```solidity
  event LiquidityChanged(
    address base,
    address quote,
    address liquidity,
    int24 quoteFee
  )
```


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`base`| address | the amount of base token added (> 0) / removed (< 0) as liquidity; fees not included
|`quote`| address | the amount of quote token added ... (same as the above)
|`liquidity`| address | the amount of liquidity unit added (> 0) / removed (< 0)
|`quoteFee`| int24 | the amount of quote token the maker received as fees
### PositionChanged
```solidity
  event PositionChanged(
  )
```



### FundingPaymentSettled
```solidity
  event FundingPaymentSettled(
    address fundingPayment
  )
```


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`fundingPayment`| address | > 0: payment, < 0 : receipt
### TrustedForwarderChanged
```solidity
  event TrustedForwarderChanged(
  )
```



