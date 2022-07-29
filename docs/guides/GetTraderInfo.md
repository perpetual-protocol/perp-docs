---
id: how-to-get-trader-info
---
# How to get  every trader’s sub component by taker / maker by market

## PendingFundingPayment

```jsx
// the following is the workaround unless we expose Exchange._getFundingGrowthGlobalAndTwaps()
const lastTraderWhoEmitFundingUpdated
const fundingGrowthGlobal.fundingGrowthGlobal = AccountBalance.getAccountinfo(lastTraderWhoEmitFundingUpdatedFromThatMarket, baseToken).lastTwPremiumGrowthGlobalX96

// now we're fetching the info from the trader we want to calculate the pnl
const traderLastTwPremiumGrowthGlobalX96 = AccountBalance.getAccountinfo(trader, baseToken).lastTwPremiumGrowthGlobalX96
const tradersTakerPosSize = AccountBalance.getTakerPositionSize(trader, baseToken)

// repeat the math of Funding.calcPendingFundingPaymentWithLiquidityCoefficient
const takerPendingFundingPaymentByMarket = tradersTakerPosSize * ((fundingGrowthGlobal.twPremiumX96 - traderLastTwPremiumGrowthGlobalX96) / 2^96 ) / 15mins
const makerFundingPayment = Exchange.getPendingFundingPayment(trader, baseToken) - takerPendingFundingPaymentByMarket
```

- `Exchange.getPendingFundingPayment(trader, baseToken)` is negative if receiving funding payment

## UnrealizedPnl from Taker / Maker by Market

```jsx
const takerPositionSize = AccountBalance.getTakerPositionSize(trader, baseToken)
const makerImpermanentPositionSize = AccountBalance.getTotalPositionSize(trader, baseToken) - takerPositionSize
																	 = OrderBook.getTotalTokenAmountInPoolAndPendingFee(trader, baseToken, fetchBaseIsTrue).tokenAmount - OrderBook.getTotalOrderDebt(trader, baseToken, fetchBaseIsTrue)

const takerOpenNotional = AccountBalance.getTakerOpenNotional(trader, baseToken) 
const makerOpenNotional = AccountBalance.getTotalOpenNotional(trader, baseToken) - takerOpenNotional
												= OrderBook.getTotalTokenAmountInPoolAndPendingFee(trader, baseToken, fetchBaseIsFalse).tokenAmount - OrderBook.getTotalOrderDebt(trader, baseToken, fetchBaseIsFalse)

const takerUnrealizedPnl = takerPositionSize * indexPrice + takerOpenNotional
const makerUnrealizedPnl = makerImpermanentPositionSize * indexPrice + makerOpenNotional
```

## Realized PnL

1. by event
    1. observe `PnlRealized` event from `AccountBalance` (less preferred, harder to get market)
        - it will be emitted anytime when addLiquidity, removeLiquidity, openPosition, closePosition, liquidate, cancelExcessOrder and settleAllFunding. It could emit multiple event in 1 action
        - ex. when liquidating a position, it can
            - emit PnlRealized first for the funding
            - emit another one for IF (taking 10% fee as IF’s profit)
            - realized the position pnl
            - emit PnlRealized for trader’s liquidation fee (loss)
            - also emit enother one for the liquidator (profit)
    2. PositionChanged + `FundingPaymentSettled` + PositionLiquidated + RealizedMakerFee
        1. PositionChanged.realizedPnl + `FundingPaymentSettled`.fundingPayment + PositionLiquidated.liquidationFee
2. by return value from contract caller
    1. every time a contract call (ex. `openPosition` ), store `owedRealizedPnl` before and after the openPosition by calling `AccountBalance.getPnlAndPendingFee`
