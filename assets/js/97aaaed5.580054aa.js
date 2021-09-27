"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[627],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3977:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},u=void 0,l={unversionedId:"Contracts/InsuranceFund",id:"Contracts/InsuranceFund",isDocsHomePage:!1,title:"InsuranceFund",description:"Functions",source:"@site/docs/Contracts/InsuranceFund.md",sourceDirName:"Contracts",slug:"/Contracts/InsuranceFund",permalink:"/lushan-docs/docs/Contracts/InsuranceFund",editUrl:"https://github.com/perpetual-protocol/lushan-docs/main/docs/Contracts/InsuranceFund.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exchange",permalink:"/lushan-docs/docs/Contracts/Exchange"},next:{title:"MarketRegistry",permalink:"/lushan-docs/docs/Contracts/MarketRegistry"}},s=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"setBorrower",id:"setborrower",children:[]},{value:"borrow",id:"borrow",children:[]}]},{value:"Events",id:"events",children:[{value:"Borrowed",id:"borrowed",children:[]}]}],d={toc:s};function p(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"initialize"},"initialize"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,a.kt)("h3",{id:"setborrower"},"setBorrower"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setBorrower(\n  ) external\n")),(0,a.kt)("h3",{id:"borrow"},"borrow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function borrow(\n  ) external\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"borrowed"},"Borrowed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Borrowed(\n  )\n")))}p.isMDXComponent=!0}}]);