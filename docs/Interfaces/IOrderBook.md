


## Structs
### AddLiquidityParams
```solidity
  struct AddLiquidityParams(
    address trader
    address baseToken
    uint256 base
    uint256 quote
    int24 lowerTick
    int24 upperTick
    struct Funding.Growth fundingGrowthGlobal
  )
```



### RemoveLiquidityParams
```solidity
  struct RemoveLiquidityParams(
    address maker
    address baseToken
    int24 lowerTick
    int24 upperTick
    uint128 liquidity
  )
```



### AddLiquidityResponse
```solidity
  struct AddLiquidityResponse(
    uint256 base
    uint256 quote
    uint256 fee
    uint128 liquidity
  )
```



### RemoveLiquidityResponse
```solidity
  struct RemoveLiquidityResponse(
    uint256 base
    uint256 quote
    uint256 fee
    int256 takerBase
    int256 takerQuote
  )
```



### ReplaySwapParams
```solidity
  struct ReplaySwapParams(
    address baseToken
    bool isBaseToQuote
    bool shouldUpdateState
    int256 amount
    uint160 sqrtPriceLimitX96
    uint24 exchangeFeeRatio
    uint24 uniswapFeeRatio
    struct Funding.Growth globalFundingGrowth
  )
```



### ReplaySwapResponse
```solidity
  struct ReplaySwapResponse(
    int24 tick
    uint256 fee
    uint256 insuranceFundFee
  )
```



### MintCallbackData
```solidity
  struct MintCallbackData(
    address trader
    address pool
  )
```




## Functions
### addLiquidity
```solidity
  function addLiquidity(
  ) external returns (struct IOrderBook.AddLiquidityResponse)
```




### removeLiquidity
```solidity
  function removeLiquidity(
  ) external returns (struct IOrderBook.RemoveLiquidityResponse)
```




### updateFundingGrowthAndLiquidityCoefficientInFundingPayment
```solidity
  function updateFundingGrowthAndLiquidityCoefficientInFundingPayment(
  ) external returns (int256 liquidityCoefficientInFundingPayment)
```

this is the non-view version of getLiquidityCoefficientInFundingPayment()


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidityCoefficientInFundingPayment`| address | the funding payment of all orders/liquidity of a maker
### replaySwap
```solidity
  function replaySwap(
  ) external returns (struct IOrderBook.ReplaySwapResponse)
```




### updateOrderDebt
```solidity
  function updateOrderDebt(
  ) external
```




### getOpenOrderIds
```solidity
  function getOpenOrderIds(
  ) external returns (bytes32[])
```




### getOpenOrderById
```solidity
  function getOpenOrderById(
  ) external returns (struct OpenOrder.Info)
```




### getOpenOrder
```solidity
  function getOpenOrder(
  ) external returns (struct OpenOrder.Info)
```




### hasOrder
```solidity
  function hasOrder(
  ) external returns (bool)
```




### getTotalQuoteBalanceAndPendingFee
```solidity
  function getTotalQuoteBalanceAndPendingFee(
  ) external returns (int256 totalQuoteAmountInPools, uint256 totalPendingFee)
```




### getTotalTokenAmountInPoolAndPendingFee
```solidity
  function getTotalTokenAmountInPoolAndPendingFee(
  ) external returns (uint256 tokenAmount, uint256 totalPendingFee)
```

the returned quote amount does not include funding payment because
     the latter is counted directly toward realizedPnl.
     the return value includes maker fee.
     please refer to _getTotalTokenAmountInPool() docstring for specs


### getTotalOrderDebt
```solidity
  function getTotalOrderDebt(
  ) external returns (uint256)
```




### getLiquidityCoefficientInFundingPayment
```solidity
  function getLiquidityCoefficientInFundingPayment(
  ) external returns (int256 liquidityCoefficientInFundingPayment)
```

this is the view version of updateFundingGrowthAndLiquidityCoefficientInFundingPayment()


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidityCoefficientInFundingPayment`| address | the funding payment of all orders/liquidity of a maker
### getPendingFee
```solidity
  function getPendingFee(
  ) external returns (uint256)
```




### getExchange
```solidity
  function getExchange(
  ) external returns (address)
```





## Events
### ExchangeChanged
```solidity
  event ExchangeChanged(
    address exchange
  )
```


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`exchange`| address | the address of exchange contract
