"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[707],{1971:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(8168),n=(a(6540),a(5680));const l={},g=void 0,i={unversionedId:"interfaces/IMarketRegistry",id:"interfaces/IMarketRegistry",title:"IMarketRegistry",description:"MarketInfo",source:"@site/docs/interfaces/IMarketRegistry.md",sourceDirName:"interfaces",slug:"/interfaces/IMarketRegistry",permalink:"/docs/interfaces/IMarketRegistry",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/interfaces/IMarketRegistry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IInsuranceFund",permalink:"/docs/interfaces/IInsuranceFund"},next:{title:"IOrderBook",permalink:"/docs/interfaces/IOrderBook"}},d={},p=[{value:"MarketInfo",id:"marketinfo",level:3},{value:"Functions",id:"functions",level:2},{value:"getPool",id:"getpool",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"getFeeRatio",id:"getfeeratio",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"getInsuranceFundFeeRatio",id:"getinsurancefundfeeratio",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"getMarketInfo",id:"getmarketinfo",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values-3",level:4},{value:"getMarketInfoByTrader",id:"getmarketinfobytrader",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Values:",id:"return-values-4",level:4},{value:"getQuoteToken",id:"getquotetoken",level:3},{value:"Return Values:",id:"return-values-5",level:4},{value:"getUniswapV3Factory",id:"getuniswapv3factory",level:3},{value:"Return Values:",id:"return-values-6",level:4},{value:"getMaxOrdersPerMarket",id:"getmaxorderspermarket",level:3},{value:"Return Values:",id:"return-values-7",level:4},{value:"hasPool",id:"haspool",level:3},{value:"Return Values:",id:"return-values-8",level:4},{value:"getMarketMaxPriceSpreadRatio",id:"getmarketmaxpricespreadratio",level:3},{value:"Return Values:",id:"return-values-9",level:4},{value:"Events",id:"events",level:2},{value:"PoolAdded",id:"pooladded",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"FeeRatioChanged",id:"feeratiochanged",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"InsuranceFundFeeRatioChanged",id:"insurancefundfeeratiochanged",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"MaxOrdersPerMarketChanged",id:"maxorderspermarketchanged",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"MarketMaxPriceSpreadRatioChanged",id:"marketmaxpricespreadratiochanged",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"FeeDiscountRatioChanged",id:"feediscountratiochanged",level:3},{value:"Parameters:",id:"parameters-10",level:4}],y={toc:p},o="wrapper";function s(e){let{components:t,...a}=e;return(0,n.yg)(o,(0,r.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"marketinfo"},"MarketInfo"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  struct MarketInfo(\n    address pool\n    uint24 exchangeFeeRatio\n    uint24 uniswapFeeRatio\n    uint24 insuranceFundFeeRatio\n    uint24 maxPriceSpreadRatio\n  )\n")),(0,n.yg)("h2",{id:"functions"},"Functions"),(0,n.yg)("h3",{id:"getpool"},"getPool"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getPool(\n    address baseToken\n  ) external returns (address pool)\n")),(0,n.yg)("p",null,"Get the pool address (UNIv3 pool) by given base token address"),(0,n.yg)("h4",{id:"parameters"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baseToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,n.yg)("h4",{id:"return-values"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"pool")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the pool")))),(0,n.yg)("h3",{id:"getfeeratio"},"getFeeRatio"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getFeeRatio(\n    address baseToken\n  ) external returns (uint24 feeRatio)\n")),(0,n.yg)("p",null,"Get the fee ratio of a given market"),(0,n.yg)("p",null,"The ratio is in ",(0,n.yg)("inlineCode",{parentName:"p"},"1e6")," format, that means ",(0,n.yg)("inlineCode",{parentName:"p"},"1% = 1e4")),(0,n.yg)("h4",{id:"parameters-1"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baseToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,n.yg)("h4",{id:"return-values-1"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"feeRatio")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The fee ratio of the market, it is a decimal in ",(0,n.yg)("inlineCode",{parentName:"td"},"1e6"))))),(0,n.yg)("h3",{id:"getinsurancefundfeeratio"},"getInsuranceFundFeeRatio"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getInsuranceFundFeeRatio(\n    address baseToken\n  ) external returns (uint24 feeRatio)\n")),(0,n.yg)("p",null,"Get the insurance fund fee ratio of a given market"),(0,n.yg)("p",null,"The ratio is in ",(0,n.yg)("inlineCode",{parentName:"p"},"1e6")," format, that means ",(0,n.yg)("inlineCode",{parentName:"p"},"1% = 1e4")),(0,n.yg)("h4",{id:"parameters-2"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baseToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,n.yg)("h4",{id:"return-values-2"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"feeRatio")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The fee ratio of the market, it is a decimal in ",(0,n.yg)("inlineCode",{parentName:"td"},"1e6"))))),(0,n.yg)("h3",{id:"getmarketinfo"},"getMarketInfo"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getMarketInfo(\n    address baseToken\n  ) external returns (struct IMarketRegistry.MarketInfo info)\n")),(0,n.yg)("p",null,"Get the market info by given base token address"),(0,n.yg)("h4",{id:"parameters-3"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baseToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,n.yg)("h4",{id:"return-values-3"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"info")),(0,n.yg)("td",{parentName:"tr",align:"left"},"struct IMarketRegistry.MarketInfo"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The market info encoded as ",(0,n.yg)("inlineCode",{parentName:"td"},"MarketInfo"))))),(0,n.yg)("h3",{id:"getmarketinfobytrader"},"getMarketInfoByTrader"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getMarketInfoByTrader(\n    address trader,\n    address baseToken\n  ) external returns (struct IMarketRegistry.MarketInfo info)\n")),(0,n.yg)("p",null,"Get the market info by given trader address and base token address"),(0,n.yg)("h4",{id:"parameters-4"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"trader")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the trader")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baseToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the base token")))),(0,n.yg)("h4",{id:"return-values-4"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"info")),(0,n.yg)("td",{parentName:"tr",align:"left"},"struct IMarketRegistry.MarketInfo"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The market info encoded as ",(0,n.yg)("inlineCode",{parentName:"td"},"MarketInfo"))))),(0,n.yg)("h3",{id:"getquotetoken"},"getQuoteToken"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getQuoteToken(\n  ) external returns (address quoteToken)\n")),(0,n.yg)("p",null,"Get the quote token address"),(0,n.yg)("h4",{id:"return-values-5"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"quoteToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the quote token")))),(0,n.yg)("h3",{id:"getuniswapv3factory"},"getUniswapV3Factory"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getUniswapV3Factory(\n  ) external returns (address factory)\n")),(0,n.yg)("p",null,"Get Uniswap factory address"),(0,n.yg)("h4",{id:"return-values-6"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"factory")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the Uniswap factory")))),(0,n.yg)("h3",{id:"getmaxorderspermarket"},"getMaxOrdersPerMarket"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxOrdersPerMarket(\n  ) external returns (uint8 maxOrdersPerMarket)\n")),(0,n.yg)("p",null,"Get max allowed orders per market"),(0,n.yg)("h4",{id:"return-values-7"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"maxOrdersPerMarket")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint8"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The max allowed orders per market")))),(0,n.yg)("h3",{id:"haspool"},"hasPool"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function hasPool(\n  ) external returns (bool hasPool)\n")),(0,n.yg)("p",null,"Check if a pool exist by given base token address"),(0,n.yg)("h4",{id:"return-values-8"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"hasPool")),(0,n.yg)("td",{parentName:"tr",align:"left"},"bool"),(0,n.yg)("td",{parentName:"tr",align:"left"},"True if the pool exist, false otherwise")))),(0,n.yg)("h3",{id:"getmarketmaxpricespreadratio"},"getMarketMaxPriceSpreadRatio"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  function getMarketMaxPriceSpreadRatio(\n  ) external returns (uint24 marketMaxPriceSpreadRatio)\n")),(0,n.yg)("h4",{id:"return-values-9"},"Return Values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"marketMaxPriceSpreadRatio")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Max price spread ratio of the market")))),(0,n.yg)("h2",{id:"events"},"Events"),(0,n.yg)("h3",{id:"pooladded"},"PoolAdded"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  event PoolAdded(\n    address baseToken,\n    uint24 feeRatio,\n    address pool\n  )\n")),(0,n.yg)("p",null,"Emitted when a new market is created."),(0,n.yg)("h4",{id:"parameters-5"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baseToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the base token")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"feeRatio")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Fee ratio of the market")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"pool")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the pool")))),(0,n.yg)("h3",{id:"feeratiochanged"},"FeeRatioChanged"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  event FeeRatioChanged(\n    address baseToken,\n    uint24 feeRatio\n  )\n")),(0,n.yg)("p",null,"Emitted when the fee ratio of a market is updated."),(0,n.yg)("h4",{id:"parameters-6"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baseToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the base token")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"feeRatio")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Fee ratio of the market")))),(0,n.yg)("h3",{id:"insurancefundfeeratiochanged"},"InsuranceFundFeeRatioChanged"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  event InsuranceFundFeeRatioChanged(\n    address baseToken,\n    uint24 feeRatio\n  )\n")),(0,n.yg)("p",null,"Emitted when the insurance fund fee ratio is updated."),(0,n.yg)("h4",{id:"parameters-7"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baseToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the base token")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"feeRatio")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Insurance fund fee ratio")))),(0,n.yg)("h3",{id:"maxorderspermarketchanged"},"MaxOrdersPerMarketChanged"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  event MaxOrdersPerMarketChanged(\n    uint8 maxOrdersPerMarket\n  )\n")),(0,n.yg)("p",null,"Emitted when the max orders per market is updated."),(0,n.yg)("h4",{id:"parameters-8"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"maxOrdersPerMarket")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint8"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Max orders per market")))),(0,n.yg)("h3",{id:"marketmaxpricespreadratiochanged"},"MarketMaxPriceSpreadRatioChanged"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  event MarketMaxPriceSpreadRatioChanged(\n    address baseToken,\n    uint24 spreadRatio\n  )\n")),(0,n.yg)("p",null,"Emitted when the max market price spread ratio is updated."),(0,n.yg)("h4",{id:"parameters-9"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baseToken")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the base token")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"spreadRatio")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Max market price spread ratio")))),(0,n.yg)("h3",{id:"feediscountratiochanged"},"FeeDiscountRatioChanged"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-solidity"},"  event FeeDiscountRatioChanged(\n    address trader,\n    uint24 discountRatio\n  )\n")),(0,n.yg)("p",null,"Emitted when the trader's fee discount ratio gets updated."),(0,n.yg)("h4",{id:"parameters-10"},"Parameters:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"trader")),(0,n.yg)("td",{parentName:"tr",align:"left"},"address"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The address of the trader")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"discountRatio")),(0,n.yg)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Fee discount ratio (percent-off)")))))}s.isMDXComponent=!0},5680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>u});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},y=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},o="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),o=p(a),m=n,u=o["".concat(d,".").concat(m)]||o[m]||s[m]||l;return a?r.createElement(u,g(g({ref:t},y),{},{components:a})):r.createElement(u,g({ref:t},y))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,g=new Array(l);g[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[o]="string"==typeof e?e:n,g[1]=i;for(var p=2;p<l;p++)g[p]=a[p];return r.createElement.apply(null,g)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);