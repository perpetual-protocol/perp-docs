Uniswap's v3 pool: token0 & token1
-> token0's price = token1 / token0; tick index = log(1.0001, token0's price)
Our system: base & quote
-> base's price = quote / base; tick index = log(1.0001, base price)
Thus, we require that (base, quote) = (token0, token1) is always true for convenience


## Functions
### addLiquidity
```solidity
  function addLiquidity(
  ) internal returns (struct UniswapV3Broker.AddLiquidityResponse)
```




### removeLiquidity
```solidity
  function removeLiquidity(
  ) internal returns (struct UniswapV3Broker.RemoveLiquidityResponse response)
```




### swap
```solidity
  function swap(
  ) internal returns (struct UniswapV3Broker.SwapResponse response)
```




### getPool
```solidity
  function getPool(
  ) internal returns (address)
```




### getTickSpacing
```solidity
  function getTickSpacing(
  ) internal returns (int24 tickSpacing)
```




### getLiquidity
```solidity
  function getLiquidity(
  ) internal returns (uint128 liquidity)
```




### getSqrtMarkPriceX96
```solidity
  function getSqrtMarkPriceX96(
  ) internal returns (uint160 sqrtMarkPrice)
```




### getTick
```solidity
  function getTick(
  ) internal returns (int24 tick)
```




### getIsTickInitialized
```solidity
  function getIsTickInitialized(
  ) internal returns (bool initialized)
```




### getTickLiquidityNet
```solidity
  function getTickLiquidityNet(
  ) internal returns (int128 liquidityNet)
```




### getSqrtMarkTwapX96
```solidity
  function getSqrtMarkTwapX96(
  ) internal returns (uint160)
```

if twapInterval < 10 (should be less than 1 block), return mark price without twap directly,
     as twapInterval is too short and makes getting twap over such a short period meaningless


### getTickBitmap
```solidity
  function getTickBitmap(
  ) internal returns (uint256 tickBitmap)
```




### getNextInitializedTickWithinOneWord
```solidity
  function getNextInitializedTickWithinOneWord(
    address isBaseToQuote
  ) internal returns (int24 next, bool initialized)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`isBaseToQuote` | address | originally lte, meaning that the next tick < the current tick

### getSwapState
```solidity
  function getSwapState(
  ) internal returns (struct UniswapV3Broker.SwapState)
```




