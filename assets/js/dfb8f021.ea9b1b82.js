"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[290],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(n),g=r,y=p["".concat(c,".").concat(g)]||p[g]||u[g]||l;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(8168),r=(n(6540),n(5680));const l={},i=void 0,s={unversionedId:"interfaces/IBaseToken",id:"interfaces/IBaseToken",title:"IBaseToken",description:"Functions",source:"@site/docs/interfaces/IBaseToken.md",sourceDirName:"interfaces",slug:"/interfaces/IBaseToken",permalink:"/docs/interfaces/IBaseToken",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/interfaces/IBaseToken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IAccountBalance",permalink:"/docs/interfaces/IAccountBalance"},next:{title:"IClearingHouse",permalink:"/docs/interfaces/IClearingHouse"}},c={},o=[{value:"Functions",id:"functions",level:2},{value:"close",id:"close",level:3},{value:"cacheTwap",id:"cachetwap",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"getPriceFeed",id:"getpricefeed",level:3},{value:"Return Values:",id:"return-values",level:4},{value:"getPausedTimestamp",id:"getpausedtimestamp",level:3},{value:"getPausedIndexPrice",id:"getpausedindexprice",level:3},{value:"getClosedPrice",id:"getclosedprice",level:3},{value:"isOpen",id:"isopen",level:3},{value:"isPaused",id:"ispaused",level:3},{value:"isClosed",id:"isclosed",level:3},{value:"Events",id:"events",level:2},{value:"PriceFeedChanged",id:"pricefeedchanged",level:3},{value:"StatusUpdated",id:"statusupdated",level:3}],d={toc:o},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"close"},"close"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function close(\n  ) external\n")),(0,r.yg)("h3",{id:"cachetwap"},"cacheTwap"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function cacheTwap(\n    uint256 interval\n  ) external\n")),(0,r.yg)("p",null,"Update the cached index price of the token."),(0,r.yg)("h4",{id:"parameters"},"Parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"interval")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The twap interval in seconds.")))),(0,r.yg)("h3",{id:"getpricefeed"},"getPriceFeed"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getPriceFeed(\n  ) external returns (address priceFeed)\n")),(0,r.yg)("p",null,"Get the price feed address"),(0,r.yg)("p",null,"priceFeed is now priceFeedDispatcher, which dispatches either Chainlink or UniswapV3 price"),(0,r.yg)("h4",{id:"return-values"},"Return Values:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"priceFeed")),(0,r.yg)("td",{parentName:"tr",align:"left"},"address"),(0,r.yg)("td",{parentName:"tr",align:"left"},"the current price feed")))),(0,r.yg)("h3",{id:"getpausedtimestamp"},"getPausedTimestamp"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getPausedTimestamp(\n  ) external returns (uint256)\n")),(0,r.yg)("h3",{id:"getpausedindexprice"},"getPausedIndexPrice"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getPausedIndexPrice(\n  ) external returns (uint256)\n")),(0,r.yg)("h3",{id:"getclosedprice"},"getClosedPrice"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getClosedPrice(\n  ) external returns (uint256)\n")),(0,r.yg)("h3",{id:"isopen"},"isOpen"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function isOpen(\n  ) external returns (bool)\n")),(0,r.yg)("h3",{id:"ispaused"},"isPaused"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function isPaused(\n  ) external returns (bool)\n")),(0,r.yg)("h3",{id:"isclosed"},"isClosed"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function isClosed(\n  ) external returns (bool)\n")),(0,r.yg)("h2",{id:"events"},"Events"),(0,r.yg)("h3",{id:"pricefeedchanged"},"PriceFeedChanged"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  event PriceFeedChanged(\n  )\n")),(0,r.yg)("h3",{id:"statusupdated"},"StatusUpdated"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  event StatusUpdated(\n  )\n")))}u.isMDXComponent=!0}}]);