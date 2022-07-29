"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[558],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2753:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={},i=void 0,o={unversionedId:"contracts/CollateralManager",id:"contracts/CollateralManager",isDocsHomePage:!1,title:"CollateralManager",description:"Functions",source:"@site/docs/contracts/CollateralManager.md",sourceDirName:"contracts",slug:"/contracts/CollateralManager",permalink:"/lushan-docs/docs/contracts/CollateralManager",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/contracts/CollateralManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClearingHouseConfig",permalink:"/lushan-docs/docs/contracts/ClearingHouseConfig"},next:{title:"Exchange",permalink:"/lushan-docs/docs/contracts/Exchange"}},d=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"addCollateral",id:"addcollateral",children:[]},{value:"setPriceFeed",id:"setpricefeed",children:[]},{value:"setCollateralRatio",id:"setcollateralratio",children:[]},{value:"setDiscountRatio",id:"setdiscountratio",children:[]},{value:"setDepositCap",id:"setdepositcap",children:[]},{value:"setMaxCollateralTokensPerAccount",id:"setmaxcollateraltokensperaccount",children:[]},{value:"setMmRatioBuffer",id:"setmmratiobuffer",children:[]},{value:"setDebtNonSettlementTokenValueRatio",id:"setdebtnonsettlementtokenvalueratio",children:[]},{value:"setLiquidationRatio",id:"setliquidationratio",children:[]},{value:"setCLInsuranceFundFeeRatio",id:"setclinsurancefundfeeratio",children:[]},{value:"setDebtThreshold",id:"setdebtthreshold",children:[]},{value:"setCollateralValueDust",id:"setcollateralvaluedust",children:[]},{value:"getClearingHouseConfig",id:"getclearinghouseconfig",children:[]},{value:"getVault",id:"getvault",children:[]},{value:"getCollateralConfig",id:"getcollateralconfig",children:[]},{value:"getPriceFeedDecimals",id:"getpricefeeddecimals",children:[]},{value:"getPrice",id:"getprice",children:[]},{value:"getMaxCollateralTokensPerAccount",id:"getmaxcollateraltokensperaccount",children:[]},{value:"getMmRatioBuffer",id:"getmmratiobuffer",children:[]},{value:"getDebtNonSettlementTokenValueRatio",id:"getdebtnonsettlementtokenvalueratio",children:[]},{value:"getLiquidationRatio",id:"getliquidationratio",children:[]},{value:"getCLInsuranceFundFeeRatio",id:"getclinsurancefundfeeratio",children:[]},{value:"getDebtThreshold",id:"getdebtthreshold",children:[]},{value:"getCollateralValueDust",id:"getcollateralvaluedust",children:[]},{value:"isCollateral",id:"iscollateral",children:[]},{value:"requireValidCollateralMmRatio",id:"requirevalidcollateralmmratio",children:[]}]}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"initialize"},"initialize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,l.kt)("h3",{id:"addcollateral"},"addCollateral"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addCollateral(\n  ) external\n")),(0,l.kt)("h3",{id:"setpricefeed"},"setPriceFeed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setPriceFeed(\n  ) external\n")),(0,l.kt)("h3",{id:"setcollateralratio"},"setCollateralRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setCollateralRatio(\n  ) external\n")),(0,l.kt)("h3",{id:"setdiscountratio"},"setDiscountRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setDiscountRatio(\n  ) external\n")),(0,l.kt)("h3",{id:"setdepositcap"},"setDepositCap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setDepositCap(\n  ) external\n")),(0,l.kt)("h3",{id:"setmaxcollateraltokensperaccount"},"setMaxCollateralTokensPerAccount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxCollateralTokensPerAccount(\n  ) external\n")),(0,l.kt)("h3",{id:"setmmratiobuffer"},"setMmRatioBuffer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMmRatioBuffer(\n  ) external\n")),(0,l.kt)("h3",{id:"setdebtnonsettlementtokenvalueratio"},"setDebtNonSettlementTokenValueRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setDebtNonSettlementTokenValueRatio(\n  ) external\n")),(0,l.kt)("h3",{id:"setliquidationratio"},"setLiquidationRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setLiquidationRatio(\n  ) external\n")),(0,l.kt)("h3",{id:"setclinsurancefundfeeratio"},"setCLInsuranceFundFeeRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setCLInsuranceFundFeeRatio(\n  ) external\n")),(0,l.kt)("h3",{id:"setdebtthreshold"},"setDebtThreshold"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setDebtThreshold(\n  ) external\n")),(0,l.kt)("h3",{id:"setcollateralvaluedust"},"setCollateralValueDust"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setCollateralValueDust(\n  ) external\n")),(0,l.kt)("p",null,"Same decimals as the settlement token"),(0,l.kt)("h3",{id:"getclearinghouseconfig"},"getClearingHouseConfig"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getClearingHouseConfig(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get the address of clearing house config"),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"clearingHouseConfig")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of clearing house config")))),(0,l.kt)("h3",{id:"getvault"},"getVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getVault(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get the address of vault"),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"vault")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of vault")))),(0,l.kt)("h3",{id:"getcollateralconfig"},"getCollateralConfig"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getCollateralConfig(\n    address token\n  ) external returns (struct Collateral.Config)\n")),(0,l.kt)("p",null,"Get collateral config by token address"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token")))),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"collateral")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct Collateral.Config"),(0,l.kt)("td",{parentName:"tr",align:"left"},"config")))),(0,l.kt)("h3",{id:"getpricefeeddecimals"},"getPriceFeedDecimals"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPriceFeedDecimals(\n    address token\n  ) external returns (uint8)\n")),(0,l.kt)("p",null,"Get price feed decimals of the collateral token"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token")))),(0,l.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"decimals")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"of the price feed")))),(0,l.kt)("h3",{id:"getprice"},"getPrice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPrice(\n    address token\n  ) external returns (uint256)\n")),(0,l.kt)("p",null,"Get the price of the collateral token"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token")))),(0,l.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"price")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"of the certain period")))),(0,l.kt)("h3",{id:"getmaxcollateraltokensperaccount"},"getMaxCollateralTokensPerAccount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxCollateralTokensPerAccount(\n  ) external returns (uint8)\n")),(0,l.kt)("h3",{id:"getmmratiobuffer"},"getMmRatioBuffer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMmRatioBuffer(\n  ) external returns (uint24)\n")),(0,l.kt)("p",null,"Get the minimum ",(0,l.kt)("inlineCode",{parentName:"p"},"margin ratio - mmRatio")," before the account's collateral is liquidatable"),(0,l.kt)("p",null,"6 decimals, same decimals as _mmRatio"),(0,l.kt)("h3",{id:"getdebtnonsettlementtokenvalueratio"},"getDebtNonSettlementTokenValueRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getDebtNonSettlementTokenValueRatio(\n  ) external returns (uint24)\n")),(0,l.kt)("p",null,"Get the maximum ",(0,l.kt)("inlineCode",{parentName:"p"},"debt / nonSettlementTokenValue")," before the account's collaterals are liquidated"),(0,l.kt)("p",null,"6 decimals"),(0,l.kt)("h3",{id:"getliquidationratio"},"getLiquidationRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidationRatio(\n  ) external returns (uint24)\n")),(0,l.kt)("p",null,"Get the maximum ratio of debt can be repaid in one transaction"),(0,l.kt)("p",null,"6 decimals. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"liquidationRatio")," = 50% means\nthe liquidator can repay as much as half of the trader\u2019s debt in one liquidation"),(0,l.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"liquidation")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ratio")))),(0,l.kt)("h3",{id:"getclinsurancefundfeeratio"},"getCLInsuranceFundFeeRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getCLInsuranceFundFeeRatio(\n  ) external returns (uint24)\n")),(0,l.kt)("p",null,"Get the insurance fund fee ratio when liquidating a trader's collateral"),(0,l.kt)("p",null,"6 decimals. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"clInsuranceFundFeeRatio")," = 5% means\nthe liquidator will pay 5% of transferred settlement token to insurance fund"),(0,l.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"insurance")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fund fee ratio")))),(0,l.kt)("h3",{id:"getdebtthreshold"},"getDebtThreshold"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getDebtThreshold(\n  ) external returns (uint256)\n")),(0,l.kt)("p",null,"Get the maximum debt (denominated in settlement token) allowed\nbefore an account\u2019s collateral is liquidatable."),(0,l.kt)("p",null,"6 decimals"),(0,l.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Debt")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"threshold")))),(0,l.kt)("h3",{id:"getcollateralvaluedust"},"getCollateralValueDust"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getCollateralValueDust(\n  ) external returns (uint256)\n")),(0,l.kt)("p",null,"Get the threshold of the minium repaid.\nIf a trader\u2019s collateral value (denominated in settlement token) falls below the threshold,\nthe liquidator can convert it with 100% ",(0,l.kt)("inlineCode",{parentName:"p"},"liquidationRatio")," so there is no dust left"),(0,l.kt)("p",null,"6 decimals"),(0,l.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Dust")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"collateral value")))),(0,l.kt)("h3",{id:"iscollateral"},"isCollateral"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isCollateral(\n    address token\n  ) public returns (bool)\n")),(0,l.kt)("p",null,"Check if the given token is one of collateral tokens"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token")))),(0,l.kt)("h4",{id:"return-values-9"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"if the token is one of collateral tokens")))),(0,l.kt)("h3",{id:"requirevalidcollateralmmratio"},"requireValidCollateralMmRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function requireValidCollateralMmRatio(\n    uint24 mmRatioBuffer\n  ) public returns (uint24)\n")),(0,l.kt)("p",null,"Require and get the the valid collateral maintenance margin ratio by mmRatioBuffer"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"mmRatioBuffer")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"safe margin ratio buffer; 6 decimals, same decimals as _mmRatio")))),(0,l.kt)("h4",{id:"return-values-10"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"collateralMmRatio")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the collateral maintenance margin ratio")))))}u.isMDXComponent=!0}}]);