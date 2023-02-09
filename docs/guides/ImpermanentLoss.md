---
id: impermanent-loss
title: Impermanent Loss Calculation
---

**Impermanent Loss** is used to described unrealized loss of liquidity due to price fluctuation on AMMs, such as Uniswap and Perp V2.
As the current price of the pool diverges from the price when the liquidity was first added, the amounts of two tokens in a liquidity range becomes different from the previous states.

For example, let's assume a user Alice adds `1 ETH + 0 USDC` to a range.
Later, the price changes and Alice's `1 ETH + 0 USDC` becomes `0 ETH + 90 USDC`.
If the current price of ETH is `100 USDC`, this means she has `10` loss, since `-1 * 100 (loss from ETH) + 90 (USDC) = -10`.

However, if the current price returns to the original price, the amounts of two tokens will become identical to the original states.
This is the reason for the **impermanent** aspect of the loss, as it is not realized until the liquidity is removed.

We have written a post for explaining it in more details, see: [What is Impermanent Loss?](https://blog.perp.fi/what-is-impermanent-loss-a9b1359d56f3)

### Impermanent Position

On Perp V2, all users, both makers and takers, operate on their positions. 
Thus, we refer to makers' positions as **Impermanent Position** due to their constantly changing size (by contrast, takers' position sizes won't change unless takers manually increase, reduce or close their positions.)

The total notional value of an impermanent positions is **Impermanent Loss**; in other words, Impermanent Loss is induced from Impermanent Positions on Perp V2.

## How to calculate Impermanent Loss on Perp V2?

Since only makers have Impermanent Loss, we can focus on the contract `OrderBook`, which is responsible for liquidity, or makers' positions, or **order** as we call in our smart contracts.

### Get Order

- `address trader`: the address of the maker to query
- `address baseToken`: the address of the vToken of the market, e.g. vETH or ETH market
- `int24 lowerTick`: the tick of the lower range of an order
- `int24 upperTick`: the tick of the upper range of an order

If we don't know the range (`lowerTick` & `upperTick`) of an order: 
1. get IDs of all orders of a maker: `OrderBook.getOpenOrderIds(trader, baseToken)`
2. and get the info of a specific order using its ID: `OrderBook.getOpenOrderById(bytes32 orderId)`

Else, if we already know the range of an order: `OrderBook.getOpenOrder(trader, baseToken, lowerTick, upperTick)`

Through the two approaches above, we can get the structure of an order as `OpenOrder.Info`:

```solidity
struct Info {
    uint128 liquidity;
    int24 lowerTick;
    int24 upperTick;
    uint256 lastFeeGrowthInsideX128;
    int256 lastTwPremiumGrowthInsideX96;
    int256 lastTwPremiumGrowthBelowX96;
    int256 lastTwPremiumDivBySqrtPriceGrowthInsideX96;
    uint256 baseDebt;
    uint256 quoteDebt;
}
```

### Get Current Amounts of Two Tokens

As Perp V2 is built on Uniswap V3, when querying the amounts of two tokens in an order, we'll be using Uniswap's contract `LiquidityAmounts.sol` and `TickMath.sol`.

First, translate ticks into square root price (`sqrtPrice`) with function `TickMath.getSqrtRatioAtTick(tick)`:
- `uint160 sqrtPriceAtLowerTick = TickMath.getSqrtRatioAtTick(lowerTick)`
- `uint160 sqrtPriceAtUpperTick = TickMath.getSqrtRatioAtTick(upperTick)`

Then inputting the two values for `sqrtPrice` and `liquidity` above, we get from `OpenOrder.Info` into `LiquidityAmounts.getAmount{0,1}ForLiquidity(sqrtPriceAtLowerTick, sqrtPriceAtUpperTick, liquidity)`
- `baseToken`: `LiquidityAmounts.getAmount0ForLiquidity()`
- `quoteToken`: `LiquidityAmounts.getAmount1ForLiquidity()`

as `baseToken` is always `token0` and `quoteToken` `token1` on Perp V2.

However, when the current price of a pool is between `sqrtPriceAtLowerTick` and `sqrtPriceAtUpperTick`, we have to modify the code above by taking the current price `sqrtMarkPriceX96` into consideration:
- `baseToken`
```
LiquidityAmounts.getAmount0ForLiquidity(
    sqrtMarkPriceX96 > sqrtPriceAtLowerTick ? sqrtMarkPriceX96 : sqrtPriceAtLowerTick,
    sqrtPriceAtUpperTick,
    liquidity
)
```
- `quoteToken`
```
LiquidityAmounts.getAmount1ForLiquidity(
    sqrtPriceAtLowerTick
    sqrtMarkPriceX96 < sqrtPriceAtUpperTick ? sqrtMarkPriceX96 : sqrtPriceAtUpperTick,
    liquidity
)
```
The reason for different parameters in the two scenarios is that `baseToken` gets depleted when the price goes up; thus, the first parameter as the lower range has to move accordingly.
Similarly, `quoteToken` gets depleted when the price goes down and thus the second parameter as the upper price is dependent on the current price.

The suffix `X96` in `sqrtMarkPriceX96` means the value is scaled by `2^96` as designed by Uniswap V3. It can be fetched by the first return value of `UniswapV3Pool.slot0()`.

### Token Debt

Notice that in the structure `OpenOrder.Info`, there are `baseDebt` and `quoteDebt`.

The idea of debt is simple: the amount of token a user owes to the exchange.

Thus, `baseDebt` is the amount of `baseToken` and `quoteDebt`, the amount of `quoteToken` a user has to pay back when removing liquidity.

This value is registered when an order is initiated by `ClearingHouse.addLiquidity()`, e.g. if 1 ETH and 100 USDC are added, `baseDebt` will be `1 * 10^18` and `quoteDebt` `100 * 10^6`, (ETH's decimals are 18 and USDC's decimals are 6).

### Impermanent Loss Calculation

Now that we have 
1. the current amounts of two tokens
2. the debt amounts of two tokens

by simply subtracting them, **the difference** is the **Impermanent Position size**.

Using the same Alice's example above, let's see what are the balance changes when her `1 ETH + 0 USDC` becomes `0 ETH + 90 USDC`:

#### Originally 
- `quoteToken debt`: `0 vUSD`
- `baseToken debt`: `1 vETH`
- `current quoteToken amount`: `0 vUSD`
- `current baseToken amount`: `1 vETH`

Alice's net token amounts:
- `baseToken`: `1 - 1 = 0`
- `quoteToken`: `0 - 10 = 0`

#### Later when ETH price changes
- `quoteToken debt`: `0 vUSD`
- `baseToken debt`: `1 vETH`
- `current quoteToken amount`: `90 vUSD`
- `current baseToken amount`: `0 vETH`

Alice's net token amounts:
- `baseToken`: `0 - 1 = -1`
- `quoteToken`: `90 - 0 = 90`

So we can see that Alice's Impermanent Loss in this scenario is `-1 * 100 (loss from ETH) + 90 (USD) = -10`, or `-1 * 100 + 90 * 1 = -10`.

The reason is that `vUSD` is the **settlement token**, meaning that `vUSD` is always the `quoteToken` in any market on Perp V2.

Thus, all `baseToken` prices are denominated in `vUSD`, as `vETH` in this case is `100`, since `1 vETH = 100 vUSD`.

The price of `vUSD`, denominated in itself, is of course, `1`.
