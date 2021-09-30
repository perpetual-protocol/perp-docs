



## Functions
### initialize
```solidity
  function initialize(
  ) public
```

this function is public for testing


### setMaxTickCrossedWithinBlock
```solidity
  function setMaxTickCrossedWithinBlock(
  ) external
```




### setTrustedForwarder
```solidity
  function setTrustedForwarder(
  ) external
```




### addLiquidity
```solidity
  function addLiquidity(
  ) external returns (struct ClearingHouse.AddLiquidityResponse)
```




### removeLiquidity
```solidity
  function removeLiquidity(
  ) external returns (struct ClearingHouse.RemoveLiquidityResponse response)
```




### openPosition
```solidity
  function openPosition(
  ) external returns (uint256 deltaBase, uint256 deltaQuote)
```




### closePosition
```solidity
  function closePosition(
  ) external returns (uint256 deltaBase, uint256 deltaQuote)
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

In the implementation you must pay the pool tokens owed for the minted liquidity.
The caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory.

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

In the implementation you must pay the pool tokens owed for the swap.
The caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory.
amount0Delta and amount1Delta can both be 0 if no tokens were swapped.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount0Delta` | int256 | The amount of token0 that was sent (negative) or must be received (positive) by the pool by
the end of the swap. If positive, the callback must send that amount of token0 to the pool.
|`amount1Delta` | int256 | The amount of token1 that was sent (negative) or must be received (positive) by the pool by
the end of the swap. If positive, the callback must send that amount of token1 to the pool.
|`data` | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#swap call

### getMaxTickCrossedWithinBlock
```solidity
  function getMaxTickCrossedWithinBlock(
  ) external returns (uint24)
```




### getAccountValue
```solidity
  function getAccountValue(
  ) public returns (int256)
```

accountValue = totalCollateralValue + totalUnrealizedPnl, in the settlement token's decimals


### getOpenNotional
```solidity
  function getOpenNotional(
  ) public returns (int256)
```

the amount of quote token paid for a position when opening



## Events
### PositionChanged
```solidity
  event PositionChanged(
  )
```



### PositionLiquidated
```solidity
  event PositionLiquidated(
  )
```



### ReferredPositionChanged
```solidity
  event ReferredPositionChanged(
  )
```




