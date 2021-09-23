


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


### _cancelExcessOrders
```solidity
  function _cancelExcessOrders(
  ) internal
```




### _afterRemoveLiquidity
```solidity
  function _afterRemoveLiquidity(
  ) internal
```




### _swapAndCalculateOpenNotional
```solidity
  function _swapAndCalculateOpenNotional(
  ) internal returns (struct ClearingHouse.SwapResponse)
```




### _realizePnl
```solidity
  function _realizePnl(
  ) internal
```

caller of this function must ensure there's enough available and debt of quote


### _swap
```solidity
  function _swap(
  ) internal returns (struct ClearingHouse.SwapResponse)
```




### _removeLiquidity
```solidity
  function _removeLiquidity(
  ) internal returns (struct ClearingHouse.RemoveLiquidityResponse)
```




### _openPosition
```solidity
  function _openPosition(
  ) internal returns (struct ClearingHouse.SwapResponse)
```

explainer diagram for the relationship between exchangedPositionNotional, fee and openNotional:
     https://www.figma.com/file/xuue5qGH4RalX7uAbbzgP3/swap-accounting-and-events


### _closePosition
```solidity
  function _closePosition(
  ) internal returns (struct ClearingHouse.SwapResponse)
```




### _isOverPriceLimit
```solidity
  function _isOverPriceLimit(
  ) internal returns (bool)
```




### _getSqrtPriceLimit
```solidity
  function _getSqrtPriceLimit(
  ) internal returns (uint160)
```




### _getTotalCollateralValue
```solidity
  function _getTotalCollateralValue(
  ) internal returns (int256)
```

the return value is in settlement token decimals


### _isIncreasePosition
```solidity
  function _isIncreasePosition(
  ) internal returns (bool)
```




### _msgSender
```solidity
  function _msgSender(
  ) internal returns (address payable)
```
return the sender of this call.
if the call came through our trusted forwarder, return the original sender.
otherwise, return `msg.sender`.
should be used in the contract anywhere instead of msg.sender



### _msgData
```solidity
  function _msgData(
  ) internal returns (bytes)
```
return the msg.data of this call.
if the call came through our trusted forwarder, then the real sender was appended as the last 20 bytes
of the msg.data - so this method will strip those 20 bytes off.
otherwise, return `msg.data`
should be used in the contract instead of msg.data, where the difference matters (e.g. when explicitly
signing or hashing the



### _requireHasBaseToken
```solidity
  function _requireHasBaseToken(
  ) internal
```




### _getFreeCollateralByRatio
```solidity
  function _getFreeCollateralByRatio(
  ) internal returns (int256)
```




### _requireEnoughFreeCollateral
```solidity
  function _requireEnoughFreeCollateral(
  ) internal
```




### _checkSlippage
```solidity
  function _checkSlippage(
  ) internal
```




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



