"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[537],{4877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(8168),r=(a(6540),a(5680));const l={},i=void 0,d={unversionedId:"interfaces/IInsuranceFund",id:"interfaces/IInsuranceFund",title:"IInsuranceFund",description:"Functions",source:"@site/docs/interfaces/IInsuranceFund.md",sourceDirName:"interfaces",slug:"/interfaces/IInsuranceFund",permalink:"/docs/interfaces/IInsuranceFund",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/interfaces/IInsuranceFund.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IIndexPrice",permalink:"/docs/interfaces/IIndexPrice"},next:{title:"IMarketRegistry",permalink:"/docs/interfaces/IMarketRegistry"}},g={},u=[{value:"Functions",id:"functions",level:2},{value:"repay",id:"repay",level:3},{value:"distributeFee",id:"distributefee",level:3},{value:"Return Values:",id:"return-values",level:4},{value:"getToken",id:"gettoken",level:3},{value:"Return Values:",id:"return-values-1",level:4},{value:"getBorrower",id:"getborrower",level:3},{value:"Return Values:",id:"return-values-2",level:4},{value:"getVault",id:"getvault",level:3},{value:"Return Values:",id:"return-values-3",level:4},{value:"getInsuranceFundCapacity",id:"getinsurancefundcapacity",level:3},{value:"Return Values:",id:"return-values-4",level:4},{value:"getDistributionThreshold",id:"getdistributionthreshold",level:3},{value:"Return Values:",id:"return-values-5",level:4},{value:"getSurplusBeneficiary",id:"getsurplusbeneficiary",level:3},{value:"Return Values:",id:"return-values-6",level:4},{value:"Events",id:"events",level:2},{value:"BorrowerChanged",id:"borrowerchanged",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"VaultChanged",id:"vaultchanged",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Repaid",id:"repaid",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"DistributionThresholdChanged",id:"distributionthresholdchanged",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"SurplusBeneficiaryChanged",id:"surplusbeneficiarychanged",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"FeeDistributed",id:"feedistributed",level:3},{value:"Parameters:",id:"parameters-5",level:4}],p={toc:u},s="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"repay"},"repay"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function repay(\n  ) external\n")),(0,r.yg)("p",null,"If insurance has negative accountValue of vault, will deposit amount to vault"),(0,r.yg)("h3",{id:"distributefee"},"distributeFee"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function distributeFee(\n  ) external returns (uint256 surplus)\n")),(0,r.yg)("p",null,"If balance of ",(0,r.yg)("inlineCode",{parentName:"p"},"InsuranceFund")," is over ",(0,r.yg)("inlineCode",{parentName:"p"},"distributionThreshold"),", transfer diff to ",(0,r.yg)("inlineCode",{parentName:"p"},"SurplusBeneficiary")),(0,r.yg)("p",null,"Insurance Fund should only distribute revenues surplus earned on the platform.\nIn other words, funds directly held in the Insurance Fund contract (",(0,r.yg)("inlineCode",{parentName:"p"},"insuranceFundWalletBalance"),")\ncontributes to ",(0,r.yg)("inlineCode",{parentName:"p"},"insuranceFundTotalBalance")," but not necessarily to ",(0,r.yg)("inlineCode",{parentName:"p"},"surplus"),". Anyone can send funds to\nInsurance Fund and help it reach ",(0,r.yg)("inlineCode",{parentName:"p"},"distributionThreshold")," sooner, but once ",(0,r.yg)("inlineCode",{parentName:"p"},"surplus")," exceeds\nthe revenues earned on the platform (",(0,r.yg)("inlineCode",{parentName:"p"},"insuranceFundFreeCollateral"),"), sending more funds\nwon\u2019t increase ",(0,r.yg)("inlineCode",{parentName:"p"},"surplus")," further"),(0,r.yg)("h4",{id:"return-values"},"Return Values:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"surplus")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The surplus of distribution")))),(0,r.yg)("h3",{id:"gettoken"},"getToken"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getToken(\n  ) external returns (address token)\n")),(0,r.yg)("p",null,"Get settlement token address"),(0,r.yg)("h4",{id:"return-values-1"},"Return Values:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"token")),(0,r.yg)("td",{parentName:"tr",align:"left"},"address"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The address of settlement token")))),(0,r.yg)("h3",{id:"getborrower"},"getBorrower"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getBorrower(\n  ) external returns (address vault)\n")),(0,r.yg)("p",null,"(Deprecated function, will be removed in the next release), Get borrower(",(0,r.yg)("inlineCode",{parentName:"p"},"Vault"),") address"),(0,r.yg)("h4",{id:"return-values-2"},"Return Values:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"vault")),(0,r.yg)("td",{parentName:"tr",align:"left"},"address"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The address of ",(0,r.yg)("inlineCode",{parentName:"td"},"Vault"))))),(0,r.yg)("h3",{id:"getvault"},"getVault"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getVault(\n  ) external returns (address vault)\n")),(0,r.yg)("p",null,"Get ",(0,r.yg)("inlineCode",{parentName:"p"},"Vault")," address"),(0,r.yg)("h4",{id:"return-values-3"},"Return Values:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"vault")),(0,r.yg)("td",{parentName:"tr",align:"left"},"address"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The address of ",(0,r.yg)("inlineCode",{parentName:"td"},"Vault"))))),(0,r.yg)("h3",{id:"getinsurancefundcapacity"},"getInsuranceFundCapacity"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getInsuranceFundCapacity(\n  ) external returns (int256 capacityX10_S)\n")),(0,r.yg)("p",null,"Get ",(0,r.yg)("inlineCode",{parentName:"p"},"InsuranceFund")," capacity"),(0,r.yg)("h4",{id:"return-values-4"},"Return Values:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"capacityX10_S")),(0,r.yg)("td",{parentName:"tr",align:"left"},"int256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The capacity value (settlementTokenValue + walletBalance) in settlement token's decimals")))),(0,r.yg)("h3",{id:"getdistributionthreshold"},"getDistributionThreshold"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getDistributionThreshold(\n  ) external returns (uint256 distributionThreshold)\n")),(0,r.yg)("p",null,"Get insurance distributution threshold, this value is for fee distribution"),(0,r.yg)("h4",{id:"return-values-5"},"Return Values:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"distributionThreshold")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The distribution threshold number")))),(0,r.yg)("h3",{id:"getsurplusbeneficiary"},"getSurplusBeneficiary"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getSurplusBeneficiary(\n  ) external returns (address surplusBeneficiary)\n")),(0,r.yg)("p",null,"Get SurplusBeneficiary"),(0,r.yg)("h4",{id:"return-values-6"},"Return Values:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"surplusBeneficiary")),(0,r.yg)("td",{parentName:"tr",align:"left"},"address"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The address of ",(0,r.yg)("inlineCode",{parentName:"td"},"SurplusBeneficiary"))))),(0,r.yg)("h2",{id:"events"},"Events"),(0,r.yg)("h3",{id:"borrowerchanged"},"BorrowerChanged"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  event BorrowerChanged(\n    address borrower\n  )\n")),(0,r.yg)("p",null,"(Deprecated function, will be removed in the next release), In the previous version ",(0,r.yg)("inlineCode",{parentName:"p"},"Vault"),'\nused to "borrow" from IF by calling ',(0,r.yg)("inlineCode",{parentName:"p"},"IF.borrow()"),'. We have since removed the behavior but\nkept the variable name "borrower" for backward-compatibility'),(0,r.yg)("h4",{id:"parameters"},"Parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"borrower")),(0,r.yg)("td",{parentName:"tr",align:"left"},"address"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The address of the borrower (actually is ",(0,r.yg)("inlineCode",{parentName:"td"},"Vault")," address)")))),(0,r.yg)("h3",{id:"vaultchanged"},"VaultChanged"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  event VaultChanged(\n    address vault\n  )\n")),(0,r.yg)("h4",{id:"parameters-1"},"Parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"vault")),(0,r.yg)("td",{parentName:"tr",align:"left"},"address"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The address of the vault")))),(0,r.yg)("h3",{id:"repaid"},"Repaid"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  event Repaid(\n    uint256 repaidAmount,\n    uint256 tokenBalanceAfterRepaid\n  )\n")),(0,r.yg)("h4",{id:"parameters-2"},"Parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"repaidAmount")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Repaid amount of the token")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"tokenBalanceAfterRepaid")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"InsuranceFund's token balance after repay")))),(0,r.yg)("h3",{id:"distributionthresholdchanged"},"DistributionThresholdChanged"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  event DistributionThresholdChanged(\n    uint256 distributionThreshold\n  )\n")),(0,r.yg)("p",null,"We will transfer fee to ",(0,r.yg)("inlineCode",{parentName:"p"},"SurplusBeneficiary")," if ",(0,r.yg)("inlineCode",{parentName:"p"},"InsuranceFund")," free collateral\nis over distribution threshold"),(0,r.yg)("h4",{id:"parameters-3"},"Parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"distributionThreshold")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Distribution threshold amount")))),(0,r.yg)("h3",{id:"surplusbeneficiarychanged"},"SurplusBeneficiaryChanged"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  event SurplusBeneficiaryChanged(\n    address surplusBeneficiary\n  )\n")),(0,r.yg)("h4",{id:"parameters-4"},"Parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"surplusBeneficiary")),(0,r.yg)("td",{parentName:"tr",align:"left"},"address"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The address of ",(0,r.yg)("inlineCode",{parentName:"td"},"SurplusBeneficiary"))))),(0,r.yg)("h3",{id:"feedistributed"},"FeeDistributed"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"  event FeeDistributed(\n    uint256 surplus,\n    uint256 insuranceFundCapacity,\n    uint256 insuranceFundFreeCollateral,\n    uint256 distributionThreshold\n  )\n")),(0,r.yg)("h4",{id:"parameters-5"},"Parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"surplus")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The amount of distribution")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"insuranceFundCapacity")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The capacity of ",(0,r.yg)("inlineCode",{parentName:"td"},"insuranceFund")," contract")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"insuranceFundFreeCollateral")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The free collateral(usdc) of ",(0,r.yg)("inlineCode",{parentName:"td"},"insuranceFund")," contract in vault")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"distributionThreshold")),(0,r.yg)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The distribution threshold amount")))))}y.isMDXComponent=!0},5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),u=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(g.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=u(a),o=r,m=s["".concat(g,".").concat(o)]||s[o]||y[o]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=o;var d={};for(var g in t)hasOwnProperty.call(t,g)&&(d[g]=t[g]);d.originalType=e,d[s]="string"==typeof e?e:r,i[1]=d;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);