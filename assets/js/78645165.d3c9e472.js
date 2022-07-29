"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[901],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(a),k=r,m=s["".concat(d,".").concat(k)]||s[k]||c[k]||i;return a?n.createElement(m,l(l({ref:e},u),{},{components:a})):n.createElement(m,l({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},461:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l=void 0,o={unversionedId:"contracts/ClearingHouseConfig",id:"contracts/ClearingHouseConfig",isDocsHomePage:!1,title:"ClearingHouseConfig",description:"Functions",source:"@site/docs/contracts/ClearingHouseConfig.md",sourceDirName:"contracts",slug:"/contracts/ClearingHouseConfig",permalink:"/lushan-docs/docs/contracts/ClearingHouseConfig",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/contracts/ClearingHouseConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClearingHouse",permalink:"/lushan-docs/docs/contracts/ClearingHouse"},next:{title:"CollateralManager",permalink:"/lushan-docs/docs/contracts/CollateralManager"}},d=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"setLiquidationPenaltyRatio",id:"setliquidationpenaltyratio",children:[]},{value:"setPartialCloseRatio",id:"setpartialcloseratio",children:[]},{value:"setTwapInterval",id:"settwapinterval",children:[]},{value:"setMaxMarketsPerAccount",id:"setmaxmarketsperaccount",children:[]},{value:"setSettlementTokenBalanceCap",id:"setsettlementtokenbalancecap",children:[]},{value:"setMaxFundingRate",id:"setmaxfundingrate",children:[]},{value:"setBackstopLiquidityProvider",id:"setbackstopliquidityprovider",children:[]},{value:"getMaxMarketsPerAccount",id:"getmaxmarketsperaccount",children:[]},{value:"getImRatio",id:"getimratio",children:[]},{value:"getMmRatio",id:"getmmratio",children:[]},{value:"getLiquidationPenaltyRatio",id:"getliquidationpenaltyratio",children:[]},{value:"getPartialCloseRatio",id:"getpartialcloseratio",children:[]},{value:"getTwapInterval",id:"gettwapinterval",children:[]},{value:"getSettlementTokenBalanceCap",id:"getsettlementtokenbalancecap",children:[]},{value:"getMaxFundingRate",id:"getmaxfundingrate",children:[]},{value:"isBackstopLiquidityProvider",id:"isbackstopliquidityprovider",children:[]}]},{value:"Events",id:"events",children:[{value:"TwapIntervalChanged",id:"twapintervalchanged",children:[]},{value:"LiquidationPenaltyRatioChanged",id:"liquidationpenaltyratiochanged",children:[]},{value:"PartialCloseRatioChanged",id:"partialcloseratiochanged",children:[]},{value:"MaxMarketsPerAccountChanged",id:"maxmarketsperaccountchanged",children:[]},{value:"SettlementTokenBalanceCapChanged",id:"settlementtokenbalancecapchanged",children:[]},{value:"MaxFundingRateChanged",id:"maxfundingratechanged",children:[]},{value:"BackstopLiquidityProviderChanged",id:"backstopliquidityproviderchanged",children:[]}]}],p={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,r.kt)("h3",{id:"setliquidationpenaltyratio"},"setLiquidationPenaltyRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setLiquidationPenaltyRatio(\n  ) external\n")),(0,r.kt)("h3",{id:"setpartialcloseratio"},"setPartialCloseRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setPartialCloseRatio(\n  ) external\n")),(0,r.kt)("h3",{id:"settwapinterval"},"setTwapInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setTwapInterval(\n  ) external\n")),(0,r.kt)("h3",{id:"setmaxmarketsperaccount"},"setMaxMarketsPerAccount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxMarketsPerAccount(\n  ) external\n")),(0,r.kt)("h3",{id:"setsettlementtokenbalancecap"},"setSettlementTokenBalanceCap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setSettlementTokenBalanceCap(\n  ) external\n")),(0,r.kt)("h3",{id:"setmaxfundingrate"},"setMaxFundingRate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxFundingRate(\n  ) external\n")),(0,r.kt)("h3",{id:"setbackstopliquidityprovider"},"setBackstopLiquidityProvider"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setBackstopLiquidityProvider(\n  ) external\n")),(0,r.kt)("h3",{id:"getmaxmarketsperaccount"},"getMaxMarketsPerAccount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxMarketsPerAccount(\n  ) external returns (uint8)\n")),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxMarketsPerAccount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max value of total markets per account")))),(0,r.kt)("h3",{id:"getimratio"},"getImRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getImRatio(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"imRatio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial margin ratio")))),(0,r.kt)("h3",{id:"getmmratio"},"getMmRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMmRatio(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mmRatio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maintenance margin requirement ratio")))),(0,r.kt)("h3",{id:"getliquidationpenaltyratio"},"getLiquidationPenaltyRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidationPenaltyRatio(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidationPenaltyRatio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Liquidation penalty ratio")))),(0,r.kt)("h3",{id:"getpartialcloseratio"},"getPartialCloseRatio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPartialCloseRatio(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partialCloseRatio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Partial close ratio")))),(0,r.kt)("h3",{id:"gettwapinterval"},"getTwapInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTwapInterval(\n  ) external returns (uint32)\n")),(0,r.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"twapInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TwapInterval for funding and prices (mark & index) calculations")))),(0,r.kt)("h3",{id:"getsettlementtokenbalancecap"},"getSettlementTokenBalanceCap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getSettlementTokenBalanceCap(\n  ) external returns (uint256)\n")),(0,r.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"settlementTokenBalanceCap")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max value of settlement token balance")))),(0,r.kt)("h3",{id:"getmaxfundingrate"},"getMaxFundingRate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxFundingRate(\n  ) external returns (uint24)\n")),(0,r.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxFundingRate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max value of funding rate")))),(0,r.kt)("h3",{id:"isbackstopliquidityprovider"},"isBackstopLiquidityProvider"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isBackstopLiquidityProvider(\n  ) external returns (bool)\n")),(0,r.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isBackstopLiquidityProvider")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"is backstop liquidity provider")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"twapintervalchanged"},"TwapIntervalChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event TwapIntervalChanged(\n  )\n")),(0,r.kt)("h3",{id:"liquidationpenaltyratiochanged"},"LiquidationPenaltyRatioChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event LiquidationPenaltyRatioChanged(\n  )\n")),(0,r.kt)("h3",{id:"partialcloseratiochanged"},"PartialCloseRatioChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event PartialCloseRatioChanged(\n  )\n")),(0,r.kt)("h3",{id:"maxmarketsperaccountchanged"},"MaxMarketsPerAccountChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event MaxMarketsPerAccountChanged(\n  )\n")),(0,r.kt)("h3",{id:"settlementtokenbalancecapchanged"},"SettlementTokenBalanceCapChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event SettlementTokenBalanceCapChanged(\n  )\n")),(0,r.kt)("h3",{id:"maxfundingratechanged"},"MaxFundingRateChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event MaxFundingRateChanged(\n  )\n")),(0,r.kt)("h3",{id:"backstopliquidityproviderchanged"},"BackstopLiquidityProviderChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event BackstopLiquidityProviderChanged(\n  )\n")))}u.isMDXComponent=!0}}]);