### InternalAddLiquidityToOrderParams
```solidity
  struct InternalAddLiquidityToOrderParams(
    address maker
    address baseToken
    address pool
    int24 lowerTick
    int24 upperTick
    uint256 feeGrowthGlobalX128
    uint128 liquidity
    uint256 base
    uint256 quote
    struct Funding.Growth globalFundingGrowth
  )
```



### InternalRemoveLiquidityParams
```solidity
  struct InternalRemoveLiquidityParams(
    address maker
    address baseToken
    address pool
    bytes32 orderId
    int24 lowerTick
    int24 upperTick
    uint128 liquidity
  )
```



### InternalSwapStep
```solidity
  struct InternalSwapStep(
    uint160 initialSqrtPriceX96
    int24 nextTick
    bool isNextTickInitialized
    uint160 nextSqrtPriceX96
    uint256 amountIn
    uint256 amountOut
    uint256 fee
  )
```




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
    struct IOrderBook.AddLiquidityParams params
  ) external returns (struct IOrderBook.AddLiquidityResponse)
```
Add liquidity logic

Only used by `ClearingHouse` contract

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`params` | struct IOrderBook.AddLiquidityParams | Add liquidity params, detail on `IOrderBook.AddLiquidityParams`

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`response` | struct IOrderBook.AddLiquidityResponse | Add liquidity response, detail on `IOrderBook.AddLiquidityResponse`
### removeLiquidity
```solidity
  function removeLiquidity(
    struct IOrderBook.RemoveLiquidityParams params
  ) external returns (struct IOrderBook.RemoveLiquidityResponse)
```
Remove liquidity logic, only used by `ClearingHouse` contract


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`params` | struct IOrderBook.RemoveLiquidityParams | Remove liquidity params, detail on `IOrderBook.RemoveLiquidityParams`

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`response` | struct IOrderBook.RemoveLiquidityResponse | Remove liquidity response, detail on `IOrderBook.RemoveLiquidityResponse`
### updateFundingGrowthAndLiquidityCoefficientInFundingPayment
```solidity
  function updateFundingGrowthAndLiquidityCoefficientInFundingPayment(
    address trader,
    address baseToken,
    struct Funding.Growth fundingGrowthGlobal
  ) external returns (int256 liquidityCoefficientInFundingPayment)
```

This is the non-view version of `getLiquidityCoefficientInFundingPayment()`,
only can be called by `Exchange` contract

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The trader address
|`baseToken` | address | The base token address
|`fundingGrowthGlobal` | struct Funding.Growth | The funding growth info, detail on `Funding.Growth`

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidityCoefficientInFundingPayment` | int256 | the funding payment of all orders/liquidity of a maker
### updateOrderDebt
```solidity
  function updateOrderDebt(
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
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount0Owed` | uint256 | The amount of token0 due to the pool for the minted liquidity
|`amount1Owed` | uint256 | The amount of token1 due to the pool for the minted liquidity
|`data` | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#mint call

### replaySwap
```solidity
  function replaySwap(
    struct IOrderBook.ReplaySwapParams params
  ) external returns (struct IOrderBook.ReplaySwapResponse)
```
Replay the swap and get the swap result (price impact and swap fee),
only can be called by `Exchange` contract;

`ReplaySwapResponse.insuranceFundFee = fee * insuranceFundFeeRatio`

#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`params` | struct IOrderBook.ReplaySwapParams | ReplaySwap params, detail on `IOrderBook.ReplaySwapParams`

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`response` | struct IOrderBook.ReplaySwapResponse | The swap result encoded in `ReplaySwapResponse`
### getExchange
```solidity
  function getExchange(
  ) external returns (address)
```
Get `Exchange` contract address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`exchange` | address | The `Exchange` contract address
### getOpenOrderIds
```solidity
  function getOpenOrderIds(
    address trader,
    address baseToken
  ) external returns (bytes32[])
```
Get open order ids of a trader in the given market


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The trader address
|`baseToken` | address | The base token address

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`orderIds` | bytes32[] | The open order ids
### getOpenOrderById
```solidity
  function getOpenOrderById(
    bytes32 orderId
  ) external returns (struct OpenOrder.Info)
```
Get open order info by given order id


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`orderId` | bytes32 | The order id

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`info` | struct OpenOrder.Info | The open order info encoded in `OpenOrder.Info`
### getOpenOrder
```solidity
  function getOpenOrder(
    address trader,
    address baseToken,
    int24 upperTick,
    int24 lowerTick
  ) external returns (struct OpenOrder.Info)
```
Get open order info by given base token, upper tick and lower tick


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The trader address
|`baseToken` | address | The base token address
|`upperTick` | int24 | The upper tick
|`lowerTick` | int24 | The lower tick

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`info` | struct OpenOrder.Info | he open order info encoded in `OpenOrder.Info`
### hasOrder
```solidity
  function hasOrder(
    address trader,
    address[] tokens
  ) external returns (bool)
```
Check if the specified trader has order in given markets


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The trader address
|`tokens` | address[] | The base token addresses

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`hasOrder` | bool | True if the trader has order in given markets
### getTotalQuoteBalanceAndPendingFee
```solidity
  function getTotalQuoteBalanceAndPendingFee(
    address trader,
    address[] baseTokens
  ) external returns (int256 totalQuoteAmountInPools, uint256 totalPendingFee)
```
Get the total quote token amount and pending fees of all orders in given markets


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The trader address
|`baseTokens` | address[] | The base token addresses

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalQuoteAmountInPools` | int256 | The total quote token amount
|`totalPendingFee` | uint256 | The total pending fees in the orders
### getTotalTokenAmountInPoolAndPendingFee
```solidity
  function getTotalTokenAmountInPoolAndPendingFee(
    address trader,
    address baseToken,
    bool fetchBase
  ) external returns (uint256 tokenAmount, uint256 pendingFee)
```
Get the total token amount (quote or base) and pending fees of all orders in the given market


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The trader address
|`baseToken` | address | The base token addresses
|`fetchBase` | bool | True if fetch base token amount, false if fetch quote token amount

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenAmount` | uint256 | The total quote/base token amount
|`totalPendingFee` | uint256 | The total pending fees in the orders
### getLiquidityCoefficientInFundingPayment
```solidity
  function getLiquidityCoefficientInFundingPayment(
  ) external returns (int256 liquidityCoefficientInFundingPayment)
```
Get the pending funding payment of all orders in the given market

This is the view version of `updateFundingGrowthAndLiquidityCoefficientInFundingPayment()`, so only
part of the funding payment will be returned. Use it with caution because it does not return all the pending
funding payment of orders. **Normally you won't need to use this function**


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidityCoefficientInFundingPayment` | int256 | the funding payment of all orders/liquidity of a maker
### getPendingFee
```solidity
  function getPendingFee(
    address trader,
    address baseToken,
    int24 lowerTick,
    int24 upperTick
  ) external returns (uint256)
```
Get the pending fees of a order


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The trader address
|`baseToken` | address | The base token address
|`lowerTick` | int24 | The lower tick
|`upperTick` | int24 | The upper tick

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`fee` | uint256 | The pending fees
### getTotalOrderDebt
```solidity
  function getTotalOrderDebt(
    address trader,
    address baseToken,
    bool fetchBase
  ) public returns (uint256)
```
Get the total debt token amount (base or quote) of all orders in the given market


#### Parameters:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`trader` | address | The trader address
|`baseToken` | address | The base token address
|`fetchBase` | bool | True if fetch base token amount, false if fetch quote token amount

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`debtAmount` | uint256 | The total debt token amount

