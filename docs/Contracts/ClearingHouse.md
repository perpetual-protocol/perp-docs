


## Structs
### InternalOpenPositionParams
```solidity
  struct InternalOpenPositionParams(
    address trader
    address baseToken
    bool isBaseToQuote
    bool isExactInput
    bool isClose
    uint256 amount
    uint160 sqrtPriceLimitX96
  )
```



### InternalClosePositionParams
```solidity
  struct InternalClosePositionParams(
    address trader
    address baseToken
    uint160 sqrtPriceLimitX96
  )
```



### InternalCheckSlippageParams
```solidity
  struct InternalCheckSlippageParams(
    bool isBaseToQuote
    bool isExactInput
    uint256 base
    uint256 quote
    uint256 oppositeAmountBound
  )
```




## Functions
### initialize
```solidity
  function initialize(
  ) public
```

this function is public for testing


### setTrustedForwarder
```solidity
  function setTrustedForwarder(
  ) external
```




### addLiquidity
```solidity
  function addLiquidity(
  ) external returns (struct IClearingHouse.AddLiquidityResponse)
```

tx will fail if adding base == 0 && quote == 0 / liquidity == 0


### removeLiquidity
```solidity
  function removeLiquidity(
  ) external returns (struct IClearingHouse.RemoveLiquidityResponse)
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




### uniswapV3MintCallback
```solidity
  function uniswapV3MintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes data
  ) external
```
Called to `msg.sender` after minting liquidity to a position from IUniswapV3Pool#mint.

namings here follow Uniswap's convention
#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount0Owed` | uint256 | The amount of token0 due to the pool for the minted liquidity
|`amount1Owed` | uint256 | The amount of token1 due to the pool for the minted liquidity
|`data` | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#mint call

### uniswapV3SwapCallback
```solidity
  function uniswapV3SwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes data
  ) external
```
Called to `msg.sender` after executing a swap via IUniswapV3Pool#swap.

namings here follow Uniswap's convention
#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount0Delta` | int256 | The amount of token0 that was sent (negative) or must be received (positive) by the pool by
the end of the swap. If positive, the callback must send that amount of token0 to the pool.
|`amount1Delta` | int256 | The amount of token1 that was sent (negative) or must be received (positive) by the pool by
the end of the swap. If positive, the callback must send that amount of token1 to the pool.
|`data` | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#swap call

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




### getAccountValue
```solidity
  function getAccountValue(
  ) public returns (int256)
```

accountValue = totalCollateralValue + totalUnrealizedPnl, in 18 decimals



