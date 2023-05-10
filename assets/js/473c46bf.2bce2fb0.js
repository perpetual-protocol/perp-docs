"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[261],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,c=u["".concat(d,".").concat(m)]||u[m]||k[m]||l;return a?r.createElement(c,i(i({ref:t},p),{},{components:a})):r.createElement(c,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"contracts/MarketRegistry",id:"contracts/MarketRegistry",title:"MarketRegistry",description:"Functions",source:"@site/docs/contracts/MarketRegistry.md",sourceDirName:"contracts",slug:"/contracts/MarketRegistry",permalink:"/docs/contracts/MarketRegistry",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/contracts/MarketRegistry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InsuranceFund",permalink:"/docs/contracts/InsuranceFund"},next:{title:"OrderBook",permalink:"/docs/contracts/OrderBook"}},d={},s=[{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"addPool",id:"addpool",level:3},{value:"setFeeRatio",id:"setfeeratio",level:3},{value:"setInsuranceFundFeeRatio",id:"setinsurancefundfeeratio",level:3},{value:"setMaxOrdersPerMarket",id:"setmaxorderspermarket",level:3},{value:"setMarketMaxPriceSpreadRatio",id:"setmarketmaxpricespreadratio",level:3},{value:"setFeeDiscountRatio",id:"setfeediscountratio",level:3},{value:"getQuoteToken",id:"getquotetoken",level:3},{value:"Return Values:",id:"return-values",level:4},{value:"getUniswapV3Factory",id:"getuniswapv3factory",level:3},{value:"Return Values:",id:"return-values-1",level:4},{value:"getMaxOrdersPerMarket",id:"getmaxorderspermarket",level:3},{value:"Return Values:",id:"return-values-2",level:4},{value:"getPool",id:"getpool",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values-3",level:4},{value:"getFeeRatio",id:"getfeeratio",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-4",level:4},{value:"getInsuranceFundFeeRatio",id:"getinsurancefundfeeratio",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-5",level:4},{value:"getMarketMaxPriceSpreadRatio",id:"getmarketmaxpricespreadratio",level:3},{value:"Return Values:",id:"return-values-6",level:4},{value:"getMarketInfo",id:"getmarketinfo",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values-7",level:4},{value:"getMarketInfoByTrader",id:"getmarketinfobytrader",level:3},{value:"hasPool",id:"haspool",level:3},{value:"Return Values:",id:"return-values-8",level:4}],p={toc:s};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"initialize"},"initialize"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,n.kt)("h3",{id:"addpool"},"addPool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addPool(\n  ) external returns (address)\n")),(0,n.kt)("h3",{id:"setfeeratio"},"setFeeRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setFeeRatio(\n  ) external\n")),(0,n.kt)("h3",{id:"setinsurancefundfeeratio"},"setInsuranceFundFeeRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setInsuranceFundFeeRatio(\n  ) external\n")),(0,n.kt)("h3",{id:"setmaxorderspermarket"},"setMaxOrdersPerMarket"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxOrdersPerMarket(\n  ) external\n")),(0,n.kt)("h3",{id:"setmarketmaxpricespreadratio"},"setMarketMaxPriceSpreadRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMarketMaxPriceSpreadRatio(\n  ) external\n")),(0,n.kt)("h3",{id:"setfeediscountratio"},"setFeeDiscountRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setFeeDiscountRatio(\n  ) external\n")),(0,n.kt)("h3",{id:"getquotetoken"},"getQuoteToken"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getQuoteToken(\n  ) external returns (address)\n")),(0,n.kt)("p",null,"Get the quote token address"),(0,n.kt)("h4",{id:"return-values"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"quoteToken")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of the quote token")))),(0,n.kt)("h3",{id:"getuniswapv3factory"},"getUniswapV3Factory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getUniswapV3Factory(\n  ) external returns (address)\n")),(0,n.kt)("p",null,"Get Uniswap factory address"),(0,n.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"factory")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of the Uniswap factory")))),(0,n.kt)("h3",{id:"getmaxorderspermarket"},"getMaxOrdersPerMarket"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxOrdersPerMarket(\n  ) external returns (uint8)\n")),(0,n.kt)("p",null,"Get max allowed orders per market"),(0,n.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"maxOrdersPerMarket")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The max allowed orders per market")))),(0,n.kt)("h3",{id:"getpool"},"getPool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPool(\n    address baseToken\n  ) external returns (address)\n")),(0,n.kt)("p",null,"Get the pool address (UNIv3 pool) by given base token address"),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,n.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"pool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of the pool")))),(0,n.kt)("h3",{id:"getfeeratio"},"getFeeRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getFeeRatio(\n    address baseToken\n  ) external returns (uint24)\n")),(0,n.kt)("p",null,"Get the fee ratio of a given market"),(0,n.kt)("p",null,"The ratio is in ",(0,n.kt)("inlineCode",{parentName:"p"},"1e6")," format, that means ",(0,n.kt)("inlineCode",{parentName:"p"},"1% = 1e4")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,n.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"feeRatio")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fee ratio of the market, it is a decimal in ",(0,n.kt)("inlineCode",{parentName:"td"},"1e6"))))),(0,n.kt)("h3",{id:"getinsurancefundfeeratio"},"getInsuranceFundFeeRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getInsuranceFundFeeRatio(\n    address baseToken\n  ) external returns (uint24)\n")),(0,n.kt)("p",null,"Get the insurance fund fee ratio of a given market"),(0,n.kt)("p",null,"The ratio is in ",(0,n.kt)("inlineCode",{parentName:"p"},"1e6")," format, that means ",(0,n.kt)("inlineCode",{parentName:"p"},"1% = 1e4")),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,n.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"feeRatio")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fee ratio of the market, it is a decimal in ",(0,n.kt)("inlineCode",{parentName:"td"},"1e6"))))),(0,n.kt)("h3",{id:"getmarketmaxpricespreadratio"},"getMarketMaxPriceSpreadRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMarketMaxPriceSpreadRatio(\n  ) external returns (uint24)\n")),(0,n.kt)("p",null,"if we didn't set the max spread ratio for the market, we will use the default value"),(0,n.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"marketMaxPriceSpreadRatio")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Max price spread ratio of the market")))),(0,n.kt)("h3",{id:"getmarketinfo"},"getMarketInfo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMarketInfo(\n    address baseToken\n  ) external returns (struct IMarketRegistry.MarketInfo)\n")),(0,n.kt)("p",null,"Get the market info by given base token address"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,n.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"info")),(0,n.kt)("td",{parentName:"tr",align:"left"},"struct IMarketRegistry.MarketInfo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The market info encoded as ",(0,n.kt)("inlineCode",{parentName:"td"},"MarketInfo"))))),(0,n.kt)("h3",{id:"getmarketinfobytrader"},"getMarketInfoByTrader"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMarketInfoByTrader(\n  ) external returns (struct IMarketRegistry.MarketInfo)\n")),(0,n.kt)("h3",{id:"haspool"},"hasPool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hasPool(\n  ) external returns (bool)\n")),(0,n.kt)("p",null,"Check if a pool exist by given base token address"),(0,n.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"hasPool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True if the pool exist, false otherwise")))))}k.isMDXComponent=!0}}]);