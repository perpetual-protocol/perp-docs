"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[297],{1702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(8168),r=(t(6540),t(5680));const i={id:"how-to-get-trader-info",title:"Query Trader Info"},o=void 0,l={unversionedId:"guides/how-to-get-trader-info",id:"guides/how-to-get-trader-info",title:"Query Trader Info",description:"PendingFundingPayment",source:"@site/docs/guides/GetTraderInfo.md",sourceDirName:"guides",slug:"/guides/how-to-get-trader-info",permalink:"/docs/guides/how-to-get-trader-info",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/guides/GetTraderInfo.md",tags:[],version:"current",frontMatter:{id:"how-to-get-trader-info",title:"Query Trader Info"},sidebar:"tutorialSidebar",previous:{title:"Data Source",permalink:"/docs/guides/data-source"},next:{title:"Impermanent Loss Calculation",permalink:"/docs/guides/impermanent-loss"}},d={},c=[{value:"PendingFundingPayment",id:"pendingfundingpayment",level:2},{value:"Taker or Maker&#39;s UnrealizedPnl by Market",id:"taker-or-makers-unrealizedpnl-by-market",level:2},{value:"Realized PnL",id:"realized-pnl",level:2},{value:"Margin Ratio",id:"margin-ratio",level:2}],p={toc:c},s="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"pendingfundingpayment"},"PendingFundingPayment"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"// the following is the workaround unless we expose Exchange._getFundingGrowthGlobalAndTwaps()\nconst lastTraderWhoEmitFundingUpdated\nconst fundingGrowthGlobal.fundingGrowthGlobal = AccountBalance.getAccountinfo(lastTraderWhoEmitFundingUpdatedFromThatMarket, baseToken).lastTwPremiumGrowthGlobalX96\n\n// now we're fetching the info from the trader we want to calculate the pnl\nconst traderLastTwPremiumGrowthGlobalX96 = AccountBalance.getAccountinfo(trader, baseToken).lastTwPremiumGrowthGlobalX96\nconst tradersTakerPosSize = AccountBalance.getTakerPositionSize(trader, baseToken)\n\n// repeat the math of Funding.calcPendingFundingPaymentWithLiquidityCoefficient\nconst takerPendingFundingPaymentByMarket = tradersTakerPosSize * ((fundingGrowthGlobal.twPremiumX96 - traderLastTwPremiumGrowthGlobalX96) / 2^96 ) / 15mins\nconst makerFundingPayment = Exchange.getPendingFundingPayment(trader, baseToken) - takerPendingFundingPaymentByMarket\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Exchange.getPendingFundingPayment(trader, baseToken)")," is negative if receiving funding payment")),(0,r.yg)("h2",{id:"taker-or-makers-unrealizedpnl-by-market"},"Taker or Maker's UnrealizedPnl by Market"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const takerPositionSize = AccountBalance.getTakerPositionSize(trader, baseToken)\nconst makerImpermanentPositionSize = AccountBalance.getTotalPositionSize(trader, baseToken) - takerPositionSize\n\nconst takerOpenNotional = AccountBalance.getTakerOpenNotional(trader, baseToken) \nconst makerOpenNotional = AccountBalance.getTotalOpenNotional(trader, baseToken) - takerOpenNotional\n\nconst takerUnrealizedPnl = takerPositionSize * indexPrice + takerOpenNotional\nconst makerUnrealizedPnl = makerImpermanentPositionSize * indexPrice + makerOpenNotional\n")),(0,r.yg)("h2",{id:"realized-pnl"},"Realized PnL"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"by event",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"observe ",(0,r.yg)("inlineCode",{parentName:"li"},"PnlRealized")," event from ",(0,r.yg)("inlineCode",{parentName:"li"},"AccountBalance")," (less preferred, harder to get market)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"it will be emitted anytime when addLiquidity, removeLiquidity, openPosition, closePosition, liquidate, cancelExcessOrder and settleAllFunding. It could emit multiple event in 1 action"),(0,r.yg)("li",{parentName:"ul"},"ex. when liquidating a position, it can",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"emit PnlRealized first for the funding"),(0,r.yg)("li",{parentName:"ul"},"emit another one for IF (taking 10% fee as IF\u2019s profit)"),(0,r.yg)("li",{parentName:"ul"},"realized the position pnl"),(0,r.yg)("li",{parentName:"ul"},"emit PnlRealized for trader\u2019s liquidation fee (loss)"),(0,r.yg)("li",{parentName:"ul"},"also emit enother one for the liquidator (profit)"))))),(0,r.yg)("li",{parentName:"ol"},"PositionChanged + ",(0,r.yg)("inlineCode",{parentName:"li"},"FundingPaymentSettled")," + PositionLiquidated + RealizedMakerFee",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"PositionChanged.realizedPnl + ",(0,r.yg)("inlineCode",{parentName:"li"},"FundingPaymentSettled"),".fundingPayment + PositionLiquidated.liquidationFee"))))),(0,r.yg)("li",{parentName:"ol"},"by contract",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"every time a contract call (ex. ",(0,r.yg)("inlineCode",{parentName:"li"},"openPosition")," ), store ",(0,r.yg)("inlineCode",{parentName:"li"},"owedRealizedPnl")," before and after the openPosition by calling ",(0,r.yg)("inlineCode",{parentName:"li"},"AccountBalance.getPnlAndPendingFee"))))),(0,r.yg)("h2",{id:"margin-ratio"},"Margin Ratio"),(0,r.yg)("p",null,"There are 2 ways to do it:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use our npm package ",(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@perp/sdk-curie"},(0,r.yg)("inlineCode",{parentName:"a"},"@perp/sdk-curie"))," and call Positions' ",(0,r.yg)("inlineCode",{parentName:"p"},"getAccountMarginRatio")," function. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/perpetual-protocol/sdk-curie/blob/d3ca551d2801324840f31d4d2472c80f230f5e07/src/core/position/Positions.ts#L219-L230"},"Check code snippet"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Get data from contracts and calculate them. The formula will be the same as in our ",(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@perp/sdk-curie"},(0,r.yg)("inlineCode",{parentName:"a"},"@perp/sdk-curie")),"."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const accountValue = await Vault.getAccountValue(trader)\nconst totalAbsPositionValue = await AccountBalance.getTotalAbsPositionValue(trader)\nconst marginRatio = accountValue / totalAbsPositionValue\n")))}u.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),g=r,m=s["".concat(d,".").concat(g)]||s[g]||u[g]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);