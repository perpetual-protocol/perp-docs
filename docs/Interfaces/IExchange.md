


## Structs
### SwapParams
```solidity
  struct SwapParams(
    address trader
    address baseToken
    bool isBaseToQuote
    bool isExactInput
    bool isClose
    uint256 amount
    uint160 sqrtPriceLimitX96
  )
```



### SwapResponse
```solidity
  struct SwapResponse(
    uint256 base
    uint256 quote
    int256 exchangedPositionSize
    int256 exchangedPositionNotional
    uint256 fee
    uint256 insuranceFundFee
    int256 pnlToBeRealized
    uint256 sqrtPriceAfterX96
    int24 tick
    bool isPartialClose
  )
```



### SwapCallbackData
```solidity
  struct SwapCallbackData(
    address trader
    address baseToken
    address pool
    uint24 uniswapFeeRatio
    uint256 fee
  )
```



### RealizePnlParams
```solidity
  struct RealizePnlParams(
    address trader
    address baseToken
    int256 base
    int256 quote
  )
```




## Functions
### swap
```solidity
  function swap(
  ) external returns (struct IExchange.SwapResponse)
```




### settleFunding
```solidity
  function settleFunding(
  ) external returns (int256 fundingPayment, struct Funding.Growth fundingGrowthGlobal)
```

this function should be called at the beginning of every high-level function, such as openPosition()
     while it doesn't matter who calls this function
     this function 1. settles personal funding payment 2. updates global funding growth
     personal funding payment is settled whenever there is pending funding payment
     the global funding growth update only happens once per unique timestamp (not blockNumber, due to Arbitrum)


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`fundingPayment`| address | the funding payment of a trader in one market should be settled into owned realized Pnl
|`fundingGrowthGlobal`| address | the up-to-date globalFundingGrowth, usually used for later calculations
### getMaxTickCrossedWithinBlock
```solidity
  function getMaxTickCrossedWithinBlock(
  ) external returns (uint24)
```




### getAllPendingFundingPayment
```solidity
  function getAllPendingFundingPayment(
  ) external returns (int256)
```




### getPendingFundingPayment
```solidity
  function getPendingFundingPayment(
  ) external returns (int256)
```

this is the view version of _updateFundingGrowth()


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| address | pending funding payment of a trader in one market, including liquidity & balance coefficients
### getSqrtMarkTwapX96
```solidity
  function getSqrtMarkTwapX96(
  ) external returns (uint160)
```




### getPnlToBeRealized
```solidity
  function getPnlToBeRealized(
  ) external returns (int256)
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




### getClearingHouseConfig
```solidity
  function getClearingHouseConfig(
  ) external returns (address)
```





## Events
### FundingUpdated
```solidity
  event FundingUpdated(
  )
```



### MaxTickCrossedWithinBlockChanged
```solidity
  event MaxTickCrossedWithinBlockChanged(
  )
```



### AccountBalanceChanged
```solidity
  event AccountBalanceChanged(
    address accountBalance
  )
```


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`accountBalance`| address | The address of accountBalance contract
