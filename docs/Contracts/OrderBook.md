


## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### setExchange
```solidity
  function setExchange(
  ) external
```




### addLiquidity
```solidity
  function addLiquidity(
  ) external returns (struct OrderBook.AddLiquidityResponse)
```




### removeLiquidity
```solidity
  function removeLiquidity(
  ) external returns (struct OrderBook.RemoveLiquidityResponse)
```




### removeLiquidityByIds
```solidity
  function removeLiquidityByIds(
  ) external returns (struct OrderBook.RemoveLiquidityResponse)
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

### replaySwap
```solidity
  function replaySwap(
  ) external returns (struct OrderBook.ReplaySwapResponse)
```




### getOpenOrderIds
```solidity
  function getOpenOrderIds(
  ) external returns (bytes32[])
```




### getOpenOrderById
```solidity
  function getOpenOrderById(
  ) external returns (struct OrderBook.OpenOrder)
```




### getOpenOrder
```solidity
  function getOpenOrder(
  ) external returns (struct OrderBook.OpenOrder)
```




### hasOrder
```solidity
  function hasOrder(
  ) external returns (bool)
```




### getTotalQuoteAmountInPools
```solidity
  function getTotalQuoteAmountInPools(
  ) external returns (uint256)
```

note the return value includes maker fee.
     For more details please refer to _getTotalTokenAmountInPool() docstring


### getTotalTokenAmountInPool
```solidity
  function getTotalTokenAmountInPool(
  ) external returns (uint256 tokenAmount)
```

the returned quote amount does not include funding payment because
     the latter is counted directly toward realizedPnl.
     please refer to _getTotalTokenAmountInPool() docstring for specs


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
### getFeeGrowthGlobal
```solidity
  function getFeeGrowthGlobal(
  ) external returns (uint256)
```




### _removeLiquidity
```solidity
  function _removeLiquidity(
  ) internal returns (struct OrderBook.RemoveLiquidityResponse)
```




### _removeLiquidityFromOrder
```solidity
  function _removeLiquidityFromOrder(
  ) internal returns (uint256)
```




### _removeOrder
```solidity
  function _removeOrder(
  ) internal
```




### _addLiquidityToOrder
```solidity
  function _addLiquidityToOrder(
  ) internal returns (uint256)
```




### _getTotalTokenAmountInPool
```solidity
  function _getTotalTokenAmountInPool(
  ) internal returns (uint256 tokenAmount)
```

Get total amount of the specified tokens in the specified pool.
     Note:
       1. when querying quote amount, it includes Exchange fees, i.e.:
          quote amount = quote liquidity + fees
          base amount = base liquidity
       2. quote/base liquidity does NOT include Uniswap pool fees since
          they do not have any impact to our margin system


### _getLiquidityCoefficientInFundingPaymentByOrder
```solidity
  function _getLiquidityCoefficientInFundingPaymentByOrder(
  ) internal returns (int256)
```

the funding payment of an order/liquidity is composed of
     1. funding accrued inside the range 2. funding accrued below the range
     there is no funding when the price goes above the range, as liquidity is all swapped into quoteToken


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidityCoefficientInFundingPayment`| struct OrderBook.OpenOrder | the funding payment of an order/liquidity
### _calcOwedFee
```solidity
  function _calcOwedFee(
  ) internal returns (uint256)
```

CANNOT use safeMath for feeGrowthInside calculation, as it can be extremely large and overflow
the difference between two feeGrowthInside, however, is correct and won't be affected by overflow or not


## Events
### LiquidityChanged
```solidity
  event LiquidityChanged(
  )
```



