"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[901],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"contracts/ClearingHouseConfig",id:"contracts/ClearingHouseConfig",title:"ClearingHouseConfig",description:"Functions",source:"@site/docs/contracts/ClearingHouseConfig.md",sourceDirName:"contracts",slug:"/contracts/ClearingHouseConfig",permalink:"/docs/contracts/ClearingHouseConfig",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/contracts/ClearingHouseConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClearingHouse",permalink:"/docs/contracts/ClearingHouse"},next:{title:"CollateralManager",permalink:"/docs/contracts/CollateralManager"}},u={},p=[{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"setLiquidationPenaltyRatio",id:"setliquidationpenaltyratio",level:3},{value:"setPartialCloseRatio",id:"setpartialcloseratio",level:3},{value:"setTwapInterval",id:"settwapinterval",level:3},{value:"setMaxMarketsPerAccount",id:"setmaxmarketsperaccount",level:3},{value:"setSettlementTokenBalanceCap",id:"setsettlementtokenbalancecap",level:3},{value:"setMaxFundingRate",id:"setmaxfundingrate",level:3},{value:"setMarkPriceMarketTwapInterval",id:"setmarkpricemarkettwapinterval",level:3},{value:"setMarkPricePremiumInterval",id:"setmarkpricepremiuminterval",level:3},{value:"getMaxMarketsPerAccount",id:"getmaxmarketsperaccount",level:3},{value:"Return Values:",id:"return-values",level:4},{value:"getImRatio",id:"getimratio",level:3},{value:"Return Values:",id:"return-values-1",level:4},{value:"getMmRatio",id:"getmmratio",level:3},{value:"Return Values:",id:"return-values-2",level:4},{value:"getLiquidationPenaltyRatio",id:"getliquidationpenaltyratio",level:3},{value:"Return Values:",id:"return-values-3",level:4},{value:"getPartialCloseRatio",id:"getpartialcloseratio",level:3},{value:"Return Values:",id:"return-values-4",level:4},{value:"getTwapInterval",id:"gettwapinterval",level:3},{value:"Return Values:",id:"return-values-5",level:4},{value:"getSettlementTokenBalanceCap",id:"getsettlementtokenbalancecap",level:3},{value:"Return Values:",id:"return-values-6",level:4},{value:"getMaxFundingRate",id:"getmaxfundingrate",level:3},{value:"Return Values:",id:"return-values-7",level:4},{value:"getMarkPriceConfig",id:"getmarkpriceconfig",level:3},{value:"Return Values:",id:"return-values-8",level:4}],s={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,r.kt)("h3",{id:"setliquidationpenaltyratio"},"setLiquidationPenaltyRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setLiquidationPenaltyRatio(\n  ) external\n")),(0,r.kt)("h3",{id:"setpartialcloseratio"},"setPartialCloseRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setPartialCloseRatio(\n  ) external\n")),(0,r.kt)("h3",{id:"settwapinterval"},"setTwapInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setTwapInterval(\n  ) external\n")),(0,r.kt)("h3",{id:"setmaxmarketsperaccount"},"setMaxMarketsPerAccount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxMarketsPerAccount(\n  ) external\n")),(0,r.kt)("h3",{id:"setsettlementtokenbalancecap"},"setSettlementTokenBalanceCap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setSettlementTokenBalanceCap(\n  ) external\n")),(0,r.kt)("h3",{id:"setmaxfundingrate"},"setMaxFundingRate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxFundingRate(\n  ) external\n")),(0,r.kt)("h3",{id:"setmarkpricemarkettwapinterval"},"setMarkPriceMarketTwapInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMarkPriceMarketTwapInterval(\n  ) external\n")),(0,r.kt)("h3",{id:"setmarkpricepremiuminterval"},"setMarkPricePremiumInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMarkPricePremiumInterval(\n  ) external\n")),(0,r.kt)("h3",{id:"getmaxmarketsperaccount"},"getMaxMarketsPerAccount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxMarketsPerAccount(\n  ) external returns (uint8)\n")),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxMarketsPerAccount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max value of total markets per account")))),(0,r.kt)("h3",{id:"getimratio"},"getImRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getImRatio(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"imRatio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial margin ratio")))),(0,r.kt)("h3",{id:"getmmratio"},"getMmRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMmRatio(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mmRatio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maintenance margin requirement ratio")))),(0,r.kt)("h3",{id:"getliquidationpenaltyratio"},"getLiquidationPenaltyRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidationPenaltyRatio(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidationPenaltyRatio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Liquidation penalty ratio")))),(0,r.kt)("h3",{id:"getpartialcloseratio"},"getPartialCloseRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPartialCloseRatio(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialCloseRatio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Partial close ratio")))),(0,r.kt)("h3",{id:"gettwapinterval"},"getTwapInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTwapInterval(\n  ) external returns (uint32)\n")),(0,r.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"twapInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TwapInterval for funding and prices (market & index) calculations")))),(0,r.kt)("h3",{id:"getsettlementtokenbalancecap"},"getSettlementTokenBalanceCap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getSettlementTokenBalanceCap(\n  ) external returns (uint256)\n")),(0,r.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"settlementTokenBalanceCap")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max value of settlement token balance")))),(0,r.kt)("h3",{id:"getmaxfundingrate"},"getMaxFundingRate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxFundingRate(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxFundingRate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max value of funding rate")))),(0,r.kt)("h3",{id:"getmarkpriceconfig"},"getMarkPriceConfig"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMarkPriceConfig(\n  ) external returns (uint32, uint32)\n")),(0,r.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"marketTwapInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MarketTwapInterval is the interval of market twap used for mark price calculations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"premiumInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PremiumInterval is the interval of premium used for mark price calculations")))))}m.isMDXComponent=!0}}]);