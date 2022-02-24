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
    bool isLiquidation
  )
```



### InternalClosePositionParams
```solidity
  struct InternalClosePositionParams(
    address trader
    address baseToken
    uint160 sqrtPriceLimitX96
    bool isLiquidation
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
    address trader,
    address baseToken,
    uint256 oppositeAmountBound
  ) external returns (uint256 base, uint256 quote, bool isPartialClose)
```
If trader is underwater, any one can call `liquidate` to liquidate this trader

If trader has open orders, need to call `cancelAllExcessOrders` first

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken
|`oppositeAmountBound` | uint256 | please check OpenPositionParams

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`base` | uint256 | The amount of baseToken the taker got or spent
|`quote` | uint256 | The amount of quoteToken the taker got or spent
|`isPartialClose` | bool | when it's over price limit return true and only liquidate 25% of the position
### liquidate
```solidity
  function liquidate(
    address trader,
    address baseToken,
     oppositeAmountBound
  ) external
```
If trader is underwater, any one can call `liquidate` to liquidate this trader

If trader has open orders, need to call `cancelAllExcessOrders` first

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The address of trader
|`baseToken` | address | The address of baseToken
|`oppositeAmountBound` |  | please check OpenPositionParams

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`base` |  | The amount of baseToken the taker got or spent
|`quote` |  | The amount of quoteToken the taker got or spent
|`isPartialClose` |  | when it's over price limit return true and only liquidate 25% of the position
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
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
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
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
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



