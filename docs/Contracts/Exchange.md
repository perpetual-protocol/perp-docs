



## Functions
### initialize
```solidity
  function initialize(
  ) external
```




### setAccountBalance
```solidity
  function setAccountBalance(
  ) external
```




### swap
```solidity
  function swap(
  ) external returns (struct Exchange.SwapResponse)
```

customized fee: https://www.notion.so/perp/Customise-fee-tier-on-B2QFee-1b7244e1db63416c8651e8fa04128cdb


### replaySwap
```solidity
  function replaySwap(
  ) external returns (int24)
```



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| struct Exchange.ReplaySwapParams | resulting tick (derived from price) after replaying the swap
### settleFundingAndUpdateFundingGrowth
```solidity
  function settleFundingAndUpdateFundingGrowth(
  ) external returns (struct Funding.Growth fundingGrowthGlobal, int256 fundingPayment)
```

this function should be called at the beginning of every high-level function, such as openPosition()
this function 1. settles personal funding payment 2. updates global funding growth
personal funding payment is settled whenever there is pending funding payment
the global funding growth update only happens once per unique timestamp (not blockNumber, due to Arbitrum)


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`fundingGrowthGlobal`| address | the up-to-date globalFundingGrowth, usually used for later calculations
|`fundingPayment`| address | the settled pending funding payment
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

### getPool
```solidity
  function getPool(
  ) external returns (address)
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
### getLastUpdatedTick
```solidity
  function getLastUpdatedTick(
  ) external returns (int24)
```




### getFundingGrowthGlobalAndTwaps
```solidity
  function getFundingGrowthGlobalAndTwaps(
  ) public returns (struct Funding.Growth fundingGrowthGlobal, uint256 markTwap, uint256 indexTwap)
```

this function calculates the up-to-date globalFundingGrowth and twaps and pass them out


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`fundingGrowthGlobal`| address | the up-to-date globalFundingGrowth
|`markTwap`|  | only for _settleFundingAndUpdateFundingGrowth()
|`indexTwap`|  | only for _settleFundingAndUpdateFundingGrowth()
### getTick
```solidity
  function getTick(
  ) public returns (int24)
```




### getSqrtMarkTwapX96
```solidity
  function getSqrtMarkTwapX96(
  ) public returns (uint160)
```





## Events
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
### FundingUpdated
```solidity
  event FundingUpdated(
  )
```




