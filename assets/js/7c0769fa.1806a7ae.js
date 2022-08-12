"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[563],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),k=o(a),u=r,N=k["".concat(p,".").concat(u)]||k[u]||s[u]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,d={unversionedId:"interfaces/IOrderBook",id:"interfaces/IOrderBook",title:"IOrderBook",description:"AddLiquidityParams",source:"@site/docs/interfaces/IOrderBook.md",sourceDirName:"interfaces",slug:"/interfaces/IOrderBook",permalink:"/docs/interfaces/IOrderBook",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/interfaces/IOrderBook.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IMarketRegistry",permalink:"/docs/interfaces/IMarketRegistry"},next:{title:"IVault",permalink:"/docs/interfaces/IVault"}},p={},o=[{value:"AddLiquidityParams",id:"addliquidityparams",level:3},{value:"RemoveLiquidityParams",id:"removeliquidityparams",level:3},{value:"AddLiquidityResponse",id:"addliquidityresponse",level:3},{value:"RemoveLiquidityResponse",id:"removeliquidityresponse",level:3},{value:"ReplaySwapParams",id:"replayswapparams",level:3},{value:"ReplaySwapResponse",id:"replayswapresponse",level:3},{value:"MintCallbackData",id:"mintcallbackdata",level:3},{value:"Functions",id:"functions",level:2},{value:"addLiquidity",id:"addliquidity",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"removeLiquidity",id:"removeliquidity",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"updateFundingGrowthAndLiquidityCoefficientInFundingPayment",id:"updatefundinggrowthandliquiditycoefficientinfundingpayment",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"replaySwap",id:"replayswap",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values-3",level:4},{value:"updateOrderDebt",id:"updateorderdebt",level:3},{value:"getOpenOrderIds",id:"getopenorderids",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Values:",id:"return-values-4",level:4},{value:"getOpenOrderById",id:"getopenorderbyid",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Return Values:",id:"return-values-5",level:4},{value:"getOpenOrder",id:"getopenorder",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Return Values:",id:"return-values-6",level:4},{value:"hasOrder",id:"hasorder",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Return Values:",id:"return-values-7",level:4},{value:"getTotalQuoteBalanceAndPendingFee",id:"gettotalquotebalanceandpendingfee",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"Return Values:",id:"return-values-8",level:4},{value:"getTotalTokenAmountInPoolAndPendingFee",id:"gettotaltokenamountinpoolandpendingfee",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"Return Values:",id:"return-values-9",level:4},{value:"getTotalOrderDebt",id:"gettotalorderdebt",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"Return Values:",id:"return-values-10",level:4},{value:"getLiquidityCoefficientInFundingPayment",id:"getliquiditycoefficientinfundingpayment",level:3},{value:"Return Values:",id:"return-values-11",level:4},{value:"getPendingFee",id:"getpendingfee",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"Return Values:",id:"return-values-12",level:4},{value:"getExchange",id:"getexchange",level:3},{value:"Return Values:",id:"return-values-13",level:4},{value:"Events",id:"events",level:2},{value:"ExchangeChanged",id:"exchangechanged",level:3},{value:"Parameters:",id:"parameters-12",level:4}],m={toc:o};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"addliquidityparams"},"AddLiquidityParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct AddLiquidityParams(\n    address trader\n    address baseToken\n    uint256 base\n    uint256 quote\n    int24 lowerTick\n    int24 upperTick\n    struct Funding.Growth fundingGrowthGlobal\n  )\n")),(0,r.kt)("h3",{id:"removeliquidityparams"},"RemoveLiquidityParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct RemoveLiquidityParams(\n    address maker\n    address baseToken\n    int24 lowerTick\n    int24 upperTick\n    uint128 liquidity\n  )\n")),(0,r.kt)("h3",{id:"addliquidityresponse"},"AddLiquidityResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct AddLiquidityResponse(\n    uint256 base\n    uint256 quote\n    uint256 fee\n    uint128 liquidity\n  )\n")),(0,r.kt)("h3",{id:"removeliquidityresponse"},"RemoveLiquidityResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct RemoveLiquidityResponse(\n    uint256 base\n    uint256 quote\n    uint256 fee\n    int256 takerBase\n    int256 takerQuote\n  )\n")),(0,r.kt)("h3",{id:"replayswapparams"},"ReplaySwapParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct ReplaySwapParams(\n    address baseToken\n    bool isBaseToQuote\n    bool shouldUpdateState\n    int256 amount\n    uint160 sqrtPriceLimitX96\n    uint24 exchangeFeeRatio\n    uint24 uniswapFeeRatio\n    struct Funding.Growth globalFundingGrowth\n  )\n")),(0,r.kt)("h3",{id:"replayswapresponse"},"ReplaySwapResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct ReplaySwapResponse(\n    int24 tick\n    uint256 fee\n    uint256 insuranceFundFee\n  )\n")),(0,r.kt)("h3",{id:"mintcallbackdata"},"MintCallbackData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct MintCallbackData(\n    address trader\n    address pool\n  )\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"addliquidity"},"addLiquidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addLiquidity(\n    struct IOrderBook.AddLiquidityParams params\n  ) external returns (struct IOrderBook.AddLiquidityResponse response)\n")),(0,r.kt)("p",null,"Add liquidity logic"),(0,r.kt)("p",null,"Only used by ",(0,r.kt)("inlineCode",{parentName:"p"},"ClearingHouse")," contract"),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IOrderBook.AddLiquidityParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add liquidity params, detail on ",(0,r.kt)("inlineCode",{parentName:"td"},"IOrderBook.AddLiquidityParams"))))),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"response")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IOrderBook.AddLiquidityResponse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add liquidity response, detail on ",(0,r.kt)("inlineCode",{parentName:"td"},"IOrderBook.AddLiquidityResponse"))))),(0,r.kt)("h3",{id:"removeliquidity"},"removeLiquidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeLiquidity(\n    struct IOrderBook.RemoveLiquidityParams params\n  ) external returns (struct IOrderBook.RemoveLiquidityResponse response)\n")),(0,r.kt)("p",null,"Remove liquidity logic, only used by ",(0,r.kt)("inlineCode",{parentName:"p"},"ClearingHouse")," contract"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IOrderBook.RemoveLiquidityParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove liquidity params, detail on ",(0,r.kt)("inlineCode",{parentName:"td"},"IOrderBook.RemoveLiquidityParams"))))),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"response")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IOrderBook.RemoveLiquidityResponse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove liquidity response, detail on ",(0,r.kt)("inlineCode",{parentName:"td"},"IOrderBook.RemoveLiquidityResponse"))))),(0,r.kt)("h3",{id:"updatefundinggrowthandliquiditycoefficientinfundingpayment"},"updateFundingGrowthAndLiquidityCoefficientInFundingPayment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function updateFundingGrowthAndLiquidityCoefficientInFundingPayment(\n    address trader,\n    address baseToken,\n    struct Funding.Growth fundingGrowthGlobal\n  ) external returns (int256 liquidityCoefficientInFundingPayment)\n")),(0,r.kt)("p",null,"This is the non-view version of ",(0,r.kt)("inlineCode",{parentName:"p"},"getLiquidityCoefficientInFundingPayment()"),",\nonly can be called by ",(0,r.kt)("inlineCode",{parentName:"p"},"ClearingHouse")," contract"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The trader address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base token address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fundingGrowthGlobal")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct Funding.Growth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The funding growth info, detail on ",(0,r.kt)("inlineCode",{parentName:"td"},"Funding.Growth"))))),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidityCoefficientInFundingPayment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the funding payment of all orders/liquidity of a maker")))),(0,r.kt)("h3",{id:"replayswap"},"replaySwap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function replaySwap(\n    struct IOrderBook.ReplaySwapParams params\n  ) external returns (struct IOrderBook.ReplaySwapResponse response)\n")),(0,r.kt)("p",null,"Replay the swap and get the swap result (price impact and swap fee),\nonly can be called by ",(0,r.kt)("inlineCode",{parentName:"p"},"ClearingHouse")," contract;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReplaySwapResponse.insuranceFundFee = fee * insuranceFundFeeRatio")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IOrderBook.ReplaySwapParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ReplaySwap params, detail on ",(0,r.kt)("inlineCode",{parentName:"td"},"IOrderBook.ReplaySwapParams"))))),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"response")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IOrderBook.ReplaySwapResponse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The swap result encoded in ",(0,r.kt)("inlineCode",{parentName:"td"},"ReplaySwapResponse"))))),(0,r.kt)("h3",{id:"updateorderdebt"},"updateOrderDebt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function updateOrderDebt(\n  ) external\n")),(0,r.kt)("h3",{id:"getopenorderids"},"getOpenOrderIds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOpenOrderIds(\n    address trader,\n    address baseToken\n  ) external returns (bytes32[] orderIds)\n")),(0,r.kt)("p",null,"Get open order ids of a trader in the given market"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The trader address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base token address")))),(0,r.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"orderIds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The open order ids")))),(0,r.kt)("h3",{id:"getopenorderbyid"},"getOpenOrderById"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOpenOrderById(\n    bytes32 orderId\n  ) external returns (struct OpenOrder.Info info)\n")),(0,r.kt)("p",null,"Get open order info by given order id"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"orderId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The order id")))),(0,r.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"info")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct OpenOrder.Info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The open order info encoded in ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenOrder.Info"))))),(0,r.kt)("h3",{id:"getopenorder"},"getOpenOrder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOpenOrder(\n    address trader,\n    address baseToken,\n    int24 upperTick,\n    int24 lowerTick\n  ) external returns (struct OpenOrder.Info info)\n")),(0,r.kt)("p",null,"Get open order info by given base token, upper tick and lower tick"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The trader address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base token address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"upperTick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The upper tick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lowerTick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The lower tick")))),(0,r.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"info")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct OpenOrder.Info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"he open order info encoded in ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenOrder.Info"))))),(0,r.kt)("h3",{id:"hasorder"},"hasOrder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hasOrder(\n    address trader,\n    address[] tokens\n  ) external returns (bool hasOrder)\n")),(0,r.kt)("p",null,"Check if the specified trader has order in given markets"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The trader address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokens")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base token addresses")))),(0,r.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hasOrder")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True if the trader has order in given markets")))),(0,r.kt)("h3",{id:"gettotalquotebalanceandpendingfee"},"getTotalQuoteBalanceAndPendingFee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalQuoteBalanceAndPendingFee(\n    address trader,\n    address[] baseTokens\n  ) external returns (int256 totalQuoteAmountInPools, uint256 totalPendingFee)\n")),(0,r.kt)("p",null,"Get the total quote token amount and pending fees of all orders in given markets"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The trader address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseTokens")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base token addresses")))),(0,r.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"totalQuoteAmountInPools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total quote token amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"totalPendingFee")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total pending fees in the orders")))),(0,r.kt)("h3",{id:"gettotaltokenamountinpoolandpendingfee"},"getTotalTokenAmountInPoolAndPendingFee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalTokenAmountInPoolAndPendingFee(\n    address trader,\n    address baseToken,\n    bool fetchBase\n  ) external returns (uint256 tokenAmount, uint256 totalPendingFee)\n")),(0,r.kt)("p",null,"Get the total token amount (quote or base) and pending fees of all orders in the given market"),(0,r.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The trader address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base token addresses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fetchBase")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True if fetch base token amount, false if fetch quote token amount")))),(0,r.kt)("h4",{id:"return-values-9"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenAmount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total quote/base token amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"totalPendingFee")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total pending fees in the orders")))),(0,r.kt)("h3",{id:"gettotalorderdebt"},"getTotalOrderDebt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalOrderDebt(\n    address trader,\n    address baseToken,\n    bool fetchBase\n  ) external returns (uint256 debtAmount)\n")),(0,r.kt)("p",null,"Get the total debt token amount (base or quote) of all orders in the given market"),(0,r.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The trader address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base token address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fetchBase")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True if fetch base token amount, false if fetch quote token amount")))),(0,r.kt)("h4",{id:"return-values-10"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"debtAmount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total debt token amount")))),(0,r.kt)("h3",{id:"getliquiditycoefficientinfundingpayment"},"getLiquidityCoefficientInFundingPayment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidityCoefficientInFundingPayment(\n  ) external returns (int256 liquidityCoefficientInFundingPayment)\n")),(0,r.kt)("p",null,"Get the pending funding payment of all orders in the given market"),(0,r.kt)("p",null,"This is the view version of ",(0,r.kt)("inlineCode",{parentName:"p"},"updateFundingGrowthAndLiquidityCoefficientInFundingPayment()"),", so only\npart of the funding payment will be returned. Use it with caution because it does not return all the pending\nfunding payment of orders. ",(0,r.kt)("strong",{parentName:"p"},"Normally you won't need to use this function")),(0,r.kt)("h4",{id:"return-values-11"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidityCoefficientInFundingPayment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the funding payment of all orders/liquidity of a maker")))),(0,r.kt)("h3",{id:"getpendingfee"},"getPendingFee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPendingFee(\n    address trader,\n    address baseToken,\n    int24 lowerTick,\n    int24 upperTick\n  ) external returns (uint256 fee)\n")),(0,r.kt)("p",null,"Get the pending fees of a order"),(0,r.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The trader address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base token address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lowerTick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The lower tick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"upperTick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The upper tick")))),(0,r.kt)("h4",{id:"return-values-12"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fee")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pending fees")))),(0,r.kt)("h3",{id:"getexchange"},"getExchange"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getExchange(\n  ) external returns (address exchange)\n")),(0,r.kt)("p",null,"Get ",(0,r.kt)("inlineCode",{parentName:"p"},"Exchange")," contract address"),(0,r.kt)("h4",{id:"return-values-13"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"exchange")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Exchange")," contract address")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"exchangechanged"},"ExchangeChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event ExchangeChanged(\n    address exchange\n  )\n")),(0,r.kt)("p",null,"Emitted when the ",(0,r.kt)("inlineCode",{parentName:"p"},"Exchange")," contract address changed"),(0,r.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"exchange")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of exchange contract")))))}s.isMDXComponent=!0}}]);