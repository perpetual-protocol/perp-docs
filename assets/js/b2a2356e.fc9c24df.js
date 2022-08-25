"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[9],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"how-to-get-trader-info",title:"Query Trader Info"},i=void 0,l={unversionedId:"guides/how-to-get-trader-info",id:"guides/how-to-get-trader-info",title:"Query Trader Info",description:"PendingFundingPayment",source:"@site/docs/guides/GetTraderInfo.md",sourceDirName:"guides",slug:"/guides/how-to-get-trader-info",permalink:"/docs/guides/how-to-get-trader-info",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/guides/GetTraderInfo.md",tags:[],version:"current",frontMatter:{id:"how-to-get-trader-info",title:"Query Trader Info"},sidebar:"tutorialSidebar",previous:{title:"Data Source",permalink:"/docs/guides/data-source"}},d={},c=[{value:"PendingFundingPayment",id:"pendingfundingpayment",level:2},{value:"Taker or Maker&#39;s UnrealizedPnl by Market",id:"taker-or-makers-unrealizedpnl-by-market",level:2},{value:"Realized PnL",id:"realized-pnl",level:2},{value:"Margin Ratio",id:"margin-ratio",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pendingfundingpayment"},"PendingFundingPayment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// the following is the workaround unless we expose Exchange._getFundingGrowthGlobalAndTwaps()\nconst lastTraderWhoEmitFundingUpdated\nconst fundingGrowthGlobal.fundingGrowthGlobal = AccountBalance.getAccountinfo(lastTraderWhoEmitFundingUpdatedFromThatMarket, baseToken).lastTwPremiumGrowthGlobalX96\n\n// now we're fetching the info from the trader we want to calculate the pnl\nconst traderLastTwPremiumGrowthGlobalX96 = AccountBalance.getAccountinfo(trader, baseToken).lastTwPremiumGrowthGlobalX96\nconst tradersTakerPosSize = AccountBalance.getTakerPositionSize(trader, baseToken)\n\n// repeat the math of Funding.calcPendingFundingPaymentWithLiquidityCoefficient\nconst takerPendingFundingPaymentByMarket = tradersTakerPosSize * ((fundingGrowthGlobal.twPremiumX96 - traderLastTwPremiumGrowthGlobalX96) / 2^96 ) / 15mins\nconst makerFundingPayment = Exchange.getPendingFundingPayment(trader, baseToken) - takerPendingFundingPaymentByMarket\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Exchange.getPendingFundingPayment(trader, baseToken)")," is negative if receiving funding payment")),(0,r.kt)("h2",{id:"taker-or-makers-unrealizedpnl-by-market"},"Taker or Maker's UnrealizedPnl by Market"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const takerPositionSize = AccountBalance.getTakerPositionSize(trader, baseToken)\nconst makerImpermanentPositionSize = AccountBalance.getTotalPositionSize(trader, baseToken) - takerPositionSize\n                                                                     = OrderBook.getTotalTokenAmountInPoolAndPendingFee(trader, baseToken, fetchBaseIsTrue).tokenAmount - OrderBook.getTotalOrderDebt(trader, baseToken, fetchBaseIsTrue)\n\nconst takerOpenNotional = AccountBalance.getTakerOpenNotional(trader, baseToken) \nconst makerOpenNotional = AccountBalance.getTotalOpenNotional(trader, baseToken) - takerOpenNotional\n                                                = OrderBook.getTotalTokenAmountInPoolAndPendingFee(trader, baseToken, fetchBaseIsFalse).tokenAmount - OrderBook.getTotalOrderDebt(trader, baseToken, fetchBaseIsFalse)\n\nconst takerUnrealizedPnl = takerPositionSize * indexPrice + takerOpenNotional\nconst makerUnrealizedPnl = makerImpermanentPositionSize * indexPrice + makerOpenNotional\n")),(0,r.kt)("h2",{id:"realized-pnl"},"Realized PnL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"by event",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"observe ",(0,r.kt)("inlineCode",{parentName:"li"},"PnlRealized")," event from ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountBalance")," (less preferred, harder to get market)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it will be emitted anytime when addLiquidity, removeLiquidity, openPosition, closePosition, liquidate, cancelExcessOrder and settleAllFunding. It could emit multiple event in 1 action"),(0,r.kt)("li",{parentName:"ul"},"ex. when liquidating a position, it can",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"emit PnlRealized first for the funding"),(0,r.kt)("li",{parentName:"ul"},"emit another one for IF (taking 10% fee as IF\u2019s profit)"),(0,r.kt)("li",{parentName:"ul"},"realized the position pnl"),(0,r.kt)("li",{parentName:"ul"},"emit PnlRealized for trader\u2019s liquidation fee (loss)"),(0,r.kt)("li",{parentName:"ul"},"also emit enother one for the liquidator (profit)"))))),(0,r.kt)("li",{parentName:"ol"},"PositionChanged + ",(0,r.kt)("inlineCode",{parentName:"li"},"FundingPaymentSettled")," + PositionLiquidated + RealizedMakerFee",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"PositionChanged.realizedPnl + ",(0,r.kt)("inlineCode",{parentName:"li"},"FundingPaymentSettled"),".fundingPayment + PositionLiquidated.liquidationFee"))))),(0,r.kt)("li",{parentName:"ol"},"by contract",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"every time a contract call (ex. ",(0,r.kt)("inlineCode",{parentName:"li"},"openPosition")," ), store ",(0,r.kt)("inlineCode",{parentName:"li"},"owedRealizedPnl")," before and after the openPosition by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountBalance.getPnlAndPendingFee"))))),(0,r.kt)("h2",{id:"margin-ratio"},"Margin Ratio"),(0,r.kt)("p",null,"There are 2 ways to do it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use our npm package ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@perp/sdk-curie"},(0,r.kt)("inlineCode",{parentName:"a"},"@perp/sdk-curie"))," and call Positions' ",(0,r.kt)("inlineCode",{parentName:"p"},"getAccountMarginRatio")," function. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/perpetual-protocol/sdk-curie/blob/d3ca551d2801324840f31d4d2472c80f230f5e07/src/core/position/Positions.ts#L219-L230"},"Check code snippet"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get data from contracts and calculate them. The formula will be the same as in our ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@perp/sdk-curie"},(0,r.kt)("inlineCode",{parentName:"a"},"@perp/sdk-curie")),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accountValue = await Vault.getAccountValue(trader)\nconst totalAbsPositionValue = await AccountBalance.getTotalAbsPositionValue(trader)\nconst marginRatio = accountValue / totalAbsPositionValue\n")))}p.isMDXComponent=!0}}]);