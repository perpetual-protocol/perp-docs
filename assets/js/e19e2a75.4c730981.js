"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[526],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,f=m["".concat(o,".").concat(u)]||m[u]||s[u]||l;return a?r.createElement(f,i(i({ref:t},k),{},{components:a})):r.createElement(f,i({ref:t},k))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7745:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return k},default:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],d={},o=void 0,p={unversionedId:"Interfaces/IMarketRegistry",id:"Interfaces/IMarketRegistry",isDocsHomePage:!1,title:"IMarketRegistry",description:"Structs",source:"@site/docs/Interfaces/IMarketRegistry.md",sourceDirName:"Interfaces",slug:"/Interfaces/IMarketRegistry",permalink:"/lushan-docs/docs/Interfaces/IMarketRegistry",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/Interfaces/IMarketRegistry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IInsuranceFund",permalink:"/lushan-docs/docs/Interfaces/IInsuranceFund"},next:{title:"IOrderBook",permalink:"/lushan-docs/docs/Interfaces/IOrderBook"}},k=[{value:"Structs",id:"structs",children:[{value:"MarketInfo",id:"marketinfo",children:[]}]},{value:"Functions",id:"functions",children:[{value:"addPool",id:"addpool",children:[]},{value:"setFeeRatio",id:"setfeeratio",children:[]},{value:"setInsuranceFundFeeRatio",id:"setinsurancefundfeeratio",children:[]},{value:"setMaxOrdersPerMarket",id:"setmaxorderspermarket",children:[]},{value:"getPool",id:"getpool",children:[]},{value:"getFeeRatio",id:"getfeeratio",children:[]},{value:"getInsuranceFundFeeRatio",id:"getinsurancefundfeeratio",children:[]},{value:"getMarketInfo",id:"getmarketinfo",children:[]},{value:"getQuoteToken",id:"getquotetoken",children:[]},{value:"getUniswapV3Factory",id:"getuniswapv3factory",children:[]},{value:"getMaxOrdersPerMarket",id:"getmaxorderspermarket",children:[]},{value:"hasPool",id:"haspool",children:[]}]},{value:"Events",id:"events",children:[{value:"PoolAdded",id:"pooladded",children:[]},{value:"FeeRatioChanged",id:"feeratiochanged",children:[]},{value:"InsuranceFundFeeRatioChanged",id:"insurancefundfeeratiochanged",children:[]},{value:"MaxOrdersPerMarketChanged",id:"maxorderspermarketchanged",children:[]}]}],s={toc:k};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"structs"},"Structs"),(0,l.kt)("h3",{id:"marketinfo"},"MarketInfo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct MarketInfo(\n    address pool\n    uint24 exchangeFeeRatio\n    uint24 uniswapFeeRatio\n    uint24 insuranceFundFeeRatio\n  )\n")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"addpool"},"addPool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addPool(\n    address baseToken,\n    uint24 feeRatio\n  ) external returns (address pool)\n")),(0,l.kt)("p",null,"Add a new pool to the registry."),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The token that the pool is for.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feeRatio")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The fee ratio for the pool.")))),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the pool.")))),(0,l.kt)("h3",{id:"setfeeratio"},"setFeeRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setFeeRatio(\n    address baseToken,\n    uint24 feeRatio\n  ) external\n")),(0,l.kt)("p",null,"Set the fee ratio for a pool"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The token address of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feeRatio")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The fee ratio for the pool.")))),(0,l.kt)("h3",{id:"setinsurancefundfeeratio"},"setInsuranceFundFeeRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setInsuranceFundFeeRatio(\n    address baseToken,\n    uint24 insuranceFundFeeRatioArg\n  ) external\n")),(0,l.kt)("p",null,"Set insurance fund fee ratio for a pool"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The token address of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"insuranceFundFeeRatioArg")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The fee ratio for the pool.")))),(0,l.kt)("h3",{id:"setmaxorderspermarket"},"setMaxOrdersPerMarket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxOrdersPerMarket(\n    uint8 maxOrdersPerMarketArg\n  ) external\n")),(0,l.kt)("p",null,"Set max allowed orders per market"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maxOrdersPerMarketArg")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The max allowed orders per market")))),(0,l.kt)("h3",{id:"getpool"},"getPool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPool(\n    address baseToken\n  ) external returns (address pool)\n")),(0,l.kt)("p",null,"Get the pool address(UNIv3 pool) by given base token address"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the pool")))),(0,l.kt)("h3",{id:"getfeeratio"},"getFeeRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getFeeRatio(\n    address baseToken\n  ) external returns (uint24 feeRatio)\n")),(0,l.kt)("p",null,"Get the fee ratio of a given market"),(0,l.kt)("p",null,"The ratio is in 1e6 format, that means 1% = 1e4"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feeRatio")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The fee ratio of the market, it is a decimal in 1e6")))),(0,l.kt)("h3",{id:"getinsurancefundfeeratio"},"getInsuranceFundFeeRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getInsuranceFundFeeRatio(\n    address baseToken\n  ) external returns (uint24 feeRatio)\n")),(0,l.kt)("p",null,"Get the insurance fund fee ratio of a given market"),(0,l.kt)("p",null,"The ratio is in 1e6 format, that means 1% = 1e4"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,l.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feeRatio")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The fee ratio of the market, it is a decimal in 1e6")))),(0,l.kt)("h3",{id:"getmarketinfo"},"getMarketInfo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMarketInfo(\n    address baseToken\n  ) external returns (struct IMarketRegistry.MarketInfo info)\n")),(0,l.kt)("p",null,"Get the market info by given base token address"),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,l.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"info")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The market info encoded as ",(0,l.kt)("inlineCode",{parentName:"td"},"MarketInfo"))))),(0,l.kt)("h3",{id:"getquotetoken"},"getQuoteToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getQuoteToken(\n  ) external returns (address quoteToken)\n")),(0,l.kt)("p",null,"Get the quote token address"),(0,l.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"quoteToken")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the quote token")))),(0,l.kt)("h3",{id:"getuniswapv3factory"},"getUniswapV3Factory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getUniswapV3Factory(\n  ) external returns (address factory)\n")),(0,l.kt)("p",null,"Get Uniswap factory address"),(0,l.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"factory")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the Uniswap factory")))),(0,l.kt)("h3",{id:"getmaxorderspermarket"},"getMaxOrdersPerMarket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxOrdersPerMarket(\n  ) external returns (uint8 maxOrdersPerMarket)\n")),(0,l.kt)("p",null,"Get max allowed orders per market"),(0,l.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maxOrdersPerMarket")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The max allowed orders per market")))),(0,l.kt)("h3",{id:"haspool"},"hasPool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hasPool(\n  ) external returns (bool hasPool)\n")),(0,l.kt)("p",null,"Check if a pool exist by given base token address"),(0,l.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"hasPool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True if the pool exist, false otherwise")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"pooladded"},"PoolAdded"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event PoolAdded(\n    address baseToken,\n    uint24 feeRatio,\n    address pool\n  )\n")),(0,l.kt)("p",null,"Emitted when a new market is created."),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feeRatio")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fee ratio of the market")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the pool")))),(0,l.kt)("h3",{id:"feeratiochanged"},"FeeRatioChanged"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event FeeRatioChanged(\n    address baseToken,\n    uint24 feeRatio\n  )\n")),(0,l.kt)("p",null,"Emitted when the fee ratio of a market is updated."),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feeRatio")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fee ratio of the market")))),(0,l.kt)("h3",{id:"insurancefundfeeratiochanged"},"InsuranceFundFeeRatioChanged"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event InsuranceFundFeeRatioChanged(\n    uint24 feeRatio\n  )\n")),(0,l.kt)("p",null,"Emitted when the insurance fund fee ratio is updated."),(0,l.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feeRatio")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Insurance fund fee ratio")))),(0,l.kt)("h3",{id:"maxorderspermarketchanged"},"MaxOrdersPerMarketChanged"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event MaxOrdersPerMarketChanged(\n    uint8 maxOrdersPerMarket\n  )\n")),(0,l.kt)("p",null,"Emitted when the max orders per market is updated."),(0,l.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maxOrdersPerMarket")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Max orders per market")))))}m.isMDXComponent=!0}}]);