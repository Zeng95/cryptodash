(this["webpackJsonpreact-cryptodash"]=this["webpackJsonpreact-cryptodash"]||[]).push([[0],{31:function(e,t,n){e.exports=n(48)},36:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),c=n.n(o),i=(n(36),n(3)),u=n(4),l=n(6),s=n(5),f=n(2),p=n(9),b=n(8),d=n.n(b),v=n(11),m=n(7),h=n(10),O=n.n(h),C=n(18),j=n.n(C);function y(e){return 0===Object.keys(e).length}function g(e){return Number(e.toString().slice(0,7))}var E=function(e){var t=Object(r.useState)(e||"dashboard"),n=Object(m.a)(t,2),a=n[0],o=n[1],c=Object(r.useState)(!1),i=Object(m.a)(c,2),u=i[0],l=i[1],s=Object(r.useState)([]),f=Object(m.a)(s,2),p=f[0],b=f[1],h=Object(r.useState)([]),C=Object(m.a)(h,2),g=C[0],E=C[1];function x(){return(x=Object(v.a)(d.a.mark((function e(t){var n,r,a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=0;case 2:if(!(r<t.length)){e.next=16;break}return e.prev=3,e.next=6,O.a.priceFull(t[r],"USD");case 6:a=e.sent,n.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Fetch price error: ".concat(e.t0));case 13:r++,e.next=2;break;case 16:o=n.filter((function(e){return!y(e)})),b(o);case 18:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function k(e){return S.apply(this,arguments)}function S(){return(S=Object(v.a)(d.a.mark((function e(t){var n,r,a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E([]),n=[],r=10;case 3:if(!(r>=1)){e.next=17;break}return e.prev=4,e.next=7,O.a.priceHistorical(t,"USD",j()().subtract(r,"months").toDate());case 7:a=e.sent,n.push(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Fetch price error: ".concat(e.t0));case 14:r--,e.next=3;break;case 17:o=[{name:t,data:n.map((function(e,t){return[j()().subtract(10-t,"months").valueOf(),e.USD]}))}],E(o);case 19:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function F(){l(!0),o("settings")}return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));e?u||"dashboard"!==a||(!function(e){x.apply(this,arguments)}(e.favorites),k(e.currentFavCoin)):F()}),[u,a]),{page:a,prices:p,historicalPrices:g,firstVisit:u,setPage:o,saveSettings:F,confirmFavorites:function(e){localStorage.setItem("cryptoDash",JSON.stringify({favorites:e,currentFavCoin:e[0]})),l(!1),o("dashboard")},fetchHistorical:k}},x=a.a.createContext();function k(e){var t=E(),n=x.Provider;return a.a.createElement(n,{value:Object(p.a)({},t)},e.children)}var S=x.Consumer,F=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(S,null,(function(t){var n=t.page,r=e.props,o=r.name,c=r.children;return n===o?a.a.createElement("div",{className:"content"},c):null}))}}]),n}(r.Component),A=n(1);var w="background-color: ".concat("#061a44",";"),D="background-color: ".concat("#010e2c",";"),N=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b",";")),B="box-shadow: 0px 0px 4px 2px #5fff17;";function H(){var e=Object(f.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return H=function(){return e},e}function U(){var e=Object(f.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return U=function(){return e},e}function P(){var e=Object(f.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return P=function(){return e},e}function z(){var e=Object(f.a)(["\n  padding: 10px;\n  ","\n  ","\n"]);return z=function(){return e},e}var I=A.default.div(z(),N,w),T=Object(A.default)(I)(P(),B),G=Object(A.default)(I)(U(),"box-shadow: 0px 0px 2px 2px #e41111;"),L=Object(A.default)(I)(H()),W=n(20),V=n(15),R=n.n(V);O.a.setApiKey("ab4c13e647046a6f66904bc40fc89e06f6309fbfae3299654fce359eaf895548");var J=function(){var e=Object(r.useState)(),t=Object(m.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(),c=Object(m.a)(o,2),i=c[0],u=c[1],l=Object(r.useState)(),s=Object(m.a)(l,2),f=s[0],b=s[1],h=Object(r.useState)(["BTC","ETH","XMR","DOGE"]),C=Object(m.a)(h,2),j=C[0],y=C[1],g=Object(r.useState)(j[0]),E=Object(m.a)(g,2),x=E[0],k=E[1];function S(){return(S=Object(v.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.coinList();case 3:t=e.sent,n=t.Data,r=t.BaseImageUrl,a(n),u(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Fetch coins error: ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));e&&(y(e.favorites),k(e.currentFavCoin))}(),function(){S.apply(this,arguments)}()}),[]),{coins:n,coinBaseUrl:i,favoriteCoins:j,filteredCoins:f,currentFavCoin:x,addCoin:function(e){var t=Object(W.a)(j);j.length<10&&(t.push(e),y(t))},removeCoin:function(e){var t=Object(W.a)(j);y(R.a.pull(t,e))},setFilteredCoins:b,isInFavoriteCoins:function(e){return j.includes(e)},setCurrentFavorite:function(e){k(e);var t=JSON.parse(localStorage.getItem("cryptoDash"));localStorage.setItem("cryptoDash",JSON.stringify(Object(p.a)(Object(p.a)({},t),{},{currentFavCoin:e})))}}},M=a.a.createContext();function K(e){var t=J(),n=M.Provider;return a.a.createElement(n,{value:Object(p.a)({},t)},e.children)}function X(){var e=Object(f.a)(["\n      height: 200px;\n    "]);return X=function(){return e},e}function $(){var e=Object(f.a)(["\n  height: 50px;\n\n  ","\n"]);return $=function(){return e},e}var q=A.default.img($(),(function(e){return e.spotlight&&Object(A.css)(X())})),Q=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=M.Consumer;return a.a.createElement(t,null,(function(t){var n=t.coinBaseUrl,r=e.props,o=r.coin,c=r.spotlight,i=o.ImageUrl,u=o.Symbol;return a.a.createElement(q,{src:"".concat(n).concat(i),alt:u,spotlight:c})}))}}]),n}(r.Component);function Y(){var e=Object(f.a)([""]);return Y=function(){return e},e}function Z(){var e=Object(f.a)(["\n  text-align: center;\n"]);return Z=function(){return e},e}var _=M.Consumer,ee=Object(A.default)(I)(Z()),te=A.default.h2(Y()),ne=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(_,null,(function(e){var t=e.coins,n=e.currentFavCoin;return a.a.createElement(ee,null,a.a.createElement(te,null,t[n].CoinName),a.a.createElement(Q,{coin:t[n],spotlight:!0}))}))}}]),n}(r.Component),re=n(16),ae=n.n(re),oe=n(27),ce=n.n(oe),ie=function(e){return{title:{text:"Data Visualization"},yAxis:{title:{text:"Prices"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}};ae.a.setOptions({colors:["#61d936"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#061a44",plotBorderColor:"#cccccc",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"},title:{style:{color:"#C0C0C0"}}},credits:{style:{color:"#666"}},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}});var ue=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=x.Consumer;return a.a.createElement(e,null,(function(e){var t=e.historicalPrices;return a.a.createElement(I,null,0===t.length?a.a.createElement("div",null,"Loading Historical Data"):a.a.createElement(ce.a,{highcharts:ae.a,options:ie(t)}))}))}}]),n}(r.Component),le=n(28);function se(){var e=Object(f.a)(["\n  display: none;\n  justify-self: right;\n\n  ",":hover & {\n    display: block;\n    color: red;\n  }\n"]);return se=function(){return e},e}function fe(){var e=Object(f.a)(["\n  font-style: italic;\n"]);return fe=function(){return e},e}function pe(){var e=Object(f.a)(["\n  justify-self: right;\n"]);return pe=function(){return e},e}function be(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return be=function(){return e},e}var de=A.default.div(be()),ve=A.default.span(pe()),me=A.default.span(fe()),he=A.default.div(se(),G),Oe=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.coin,n=e.topSection;return a.a.createElement(de,null,a.a.createElement(me,null,t.CoinName),n?a.a.createElement(he,null,a.a.createElement(le.a,{size:"16",title:"Delete coin"})):a.a.createElement(ve,null,t.Symbol))}}]),n}(r.Component);function Ce(){var e=Object(f.a)(["\n  ","\n"]);return Ce=function(){return e},e}function je(){var e=Object(f.a)(["\n      color: red;\n    "]);return je=function(){return e},e}function ye(){var e=Object(f.a)(["\n  color: green;\n\n  ","\n"]);return ye=function(){return e},e}function ge(){var e=Object(f.a)(["\n  justify-self: left;\n"]);return ge=function(){return e},e}function Ee(){var e=Object(f.a)(["\n      pointer-events: none;\n      ","\n    "]);return Ee=function(){return e},e}function xe(){var e=Object(f.a)(["\n      display: grid;\n      gap: 6px;\n      justify-items: right;\n      grid-template-columns: repeat(3, 1fr);\n      ","\n    "]);return xe=function(){return e},e}function ke(){var e=Object(f.a)(["\n  ","\n\n  ","\n"]);return ke=function(){return e},e}var Se=Object(A.default)(T)(ke(),(function(e){return e.compact&&Object(A.css)(xe(),"font-size: .75em;")}),(function(e){return e.currentFavCoin&&Object(A.css)(Ee(),B)})),Fe=A.default.span(ge()),Ae=Object(A.default)(ve)(ye(),(function(e){return e.red&&Object(A.css)(je())})),we=A.default.div(Ce(),"font-size: 2em;"),De=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.symbol,n=e.data,r=e.currentFavCoin,o=e.setCurrentFavorite,c=e.fetchHistorical;return a.a.createElement(Se,{currentFavCoin:r,onClick:function(){o(t),c(t)}},a.a.createElement(de,null,a.a.createElement("span",null,t),a.a.createElement(Ae,{red:n.CHANGEPCT24HOUR<0},g(n.CHANGEPCT24HOUR),"%")),a.a.createElement(we,null,g(n.PRICE)))}}]),n}(r.Component),Ne=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.symbol,n=e.data,r=e.currentFavCoin,o=e.setCurrentFavorite,c=e.fetchHistorical;return a.a.createElement(Se,{compact:!0,currentFavCoin:r,onClick:function(){o(t),c(t)}},a.a.createElement(Fe,null,t),a.a.createElement(Ae,{red:n.CHANGEPCT24HOUR<0},g(n.CHANGEPCT24HOUR),"%"),a.a.createElement("div",null,g(n.PRICE)))}}]),n}(r.Component),Be=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=x.Consumer,n=M.Consumer;return a.a.createElement(t,null,(function(t){var r=t.fetchHistorical;return a.a.createElement(n,null,(function(t){var n=t.currentFavCoin,o=t.setCurrentFavorite,c=e.props,i=c.price,u=c.index,l=Object.keys(i)[0],s=i[l].USD;return u>=5?a.a.createElement(Ne,{data:s,symbol:l,currentFavCoin:n===l,setCurrentFavorite:o,fetchHistorical:r}):a.a.createElement(De,{data:s,symbol:l,currentFavCoin:n===l,setCurrentFavorite:o,fetchHistorical:r})}))}))}}]),n}(r.Component);function He(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  margin-top: 40px;\n"]);return He=function(){return e},e}var Ue=x.Consumer,Pe=A.default.div(He()),ze=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(Ue,null,(function(e){var t=e.prices;return a.a.createElement(Pe,null,t.map((function(e,t){return a.a.createElement(Be,{key:Object.keys(e)[0],price:e,index:t})})))}))}}]),n}(r.Component);function Ie(){var e=Object(f.a)(["\n  display: grid;\n  gap: 16px;\n  grid-template-columns: 1fr 3fr;\n  margin-top: 30px;\n"]);return Ie=function(){return e},e}var Te=A.default.div(Ie()),Ge=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(F,{name:"dashboard"},a.a.createElement(ze,null),a.a.createElement(Te,null,a.a.createElement(ne,null),a.a.createElement(ue,null)))}}]),n}(r.Component),Le=M.Consumer,We=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(t,n){var r=e.props,a=r.coin;r.topSection?n(a.Name):t(a.Name)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(Le,null,(function(t){var n,r=t.addCoin,o=t.removeCoin,c=t.isInFavoriteCoins,i=e.props,u=i.coin,l=i.topSection;return n=l?G:c(u.Name)?L:T,a.a.createElement(n,{onClick:function(){return e.handleClick(r,o)}},a.a.createElement(Oe,{coin:u,topSection:l}),a.a.createElement(Q,{coin:u}))}))}}]),n}(r.Component);function Ve(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return Ve=function(){return e},e}var Re=M.Consumer,Je=A.default.div(Ve()),Me=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"getLowerSectionCoins",value:function(e,t){return t&&Object.keys(t)?Object.keys(t):Object.keys(e).slice(0,300)}},{key:"render",value:function(){var e=this;return a.a.createElement(Re,null,(function(t){var n=t.coins,r=t.favoriteCoins,o=t.filteredCoins,c=e.props.topSection,i=c?r:e.getLowerSectionCoins(n,o);return a.a.createElement(Je,null,i.map((function(e){return a.a.createElement(We,{key:e,coin:n[e],topSection:c})})))}))}}]),n}(r.Component);function Ke(){var e=Object(f.a)(["\n  margin: 20px;\n  border: none;\n  padding: 5px;\n  color: ",";\n  background-color: transparent;\n  cursor: pointer;\n  ","\n\n  &:hover {\n    ","\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return Ke=function(){return e},e}function Xe(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Xe=function(){return e},e}var $e=A.default.div(Xe()),qe=A.default.button(Ke(),"#42ff3a","font-size: 1.5em;",B),Qe=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=x.Consumer,t=M.Consumer;return a.a.createElement(e,null,(function(e){return a.a.createElement(t,null,(function(t){var n=t.favoriteCoins,r=e.confirmFavorites;return a.a.createElement($e,null,a.a.createElement(qe,{onClick:function(){return r(n)}},"Confirm Favorites"))}))}))}}]),n}(r.Component),Ye=n(30),Ze=n.n(Ye);function _e(){var e=Object(f.a)(["\n  ","\n  ","\n  color: #1163c9;\n  border: 1px solid;\n  height: 25px;\n  place-self: center left;\n"]);return _e=function(){return e},e}function et(){var e=Object(f.a)(["\n  margin: 0;\n"]);return et=function(){return e},e}function tt(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n"]);return tt=function(){return e},e}var nt=M.Consumer,rt=A.default.div(tt()),at=A.default.h2(et()),ot=A.default.input(_e(),D,"font-size: 1.0em;"),ct=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleFilterCoins=R.a.debounce((function(e,t,n){var r=Object.keys(t),a=r.map((function(e){return t[e].CoinName})),o=r.concat(a),c=Ze.a.filter(e,o,{}).map((function(e){return e.string})),i={};Object.entries(t).forEach((function(e){var t=e[0],n=e[1],r=n.CoinName;(c.includes(t)||c.includes(r))&&(i[t]=n)})),n(i)}),1e3),e}return Object(u.a)(n,[{key:"handleKeyUp",value:function(e,t,n){var r=e.target.value;if(!r)return n(null),!1;this.handleFilterCoins(r,t,n)}},{key:"render",value:function(){var e=this;return a.a.createElement(nt,null,(function(t){var n=t.coins,r=t.setFilteredCoins;return a.a.createElement(rt,null,a.a.createElement(at,null,"Search all coins"),a.a.createElement(ot,{onKeyUp:function(t){return e.handleKeyUp(t,n,r)}}))}))}}]),n}(r.Component);function it(){var e=Object(f.a)(["\n  margin: 0;\n  font-weight: normal;\n  font-size: 16px;\n"]);return it=function(){return e},e}var ut=A.default.h1(it()),lt=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=x.Consumer;return a.a.createElement(e,null,(function(e){return e.firstVisit?a.a.createElement(ut,null,"Welcome to CryptoDash, please select your favorite coins to begin."):null}))}}]),n}(r.Component),st=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(F,{name:"settings"},a.a.createElement(lt,null),a.a.createElement(Me,{topSection:!0}),a.a.createElement(Qe,null),a.a.createElement(ct,null),a.a.createElement(Me,{topSection:!1}))}}]),n}(r.Component),ft=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(x.Consumer,null,(function(t){var n=t.prices,r=t.firstVisit;return a.a.createElement(M.Consumer,null,(function(t){return t.coins?r||0!==n.length?e.props.children:a.a.createElement("div",null,"Loading Prices..."):a.a.createElement("div",null,"Loading Coins...")}))}))}}]),n}(r.Component);function pt(){var e=Object(f.a)(["\n  padding: 40px;\n"]);return pt=function(){return e},e}var bt=A.default.div(pt());function dt(){var e=Object(f.a)([""]);return dt=function(){return e},e}function vt(){var e=Object(f.a)(["\n      text-shadow: 0px 0px 20px #03ff03;\n    "]);return vt=function(){return e},e}function mt(){var e=Object(f.a)(["\n  cursor: pointer;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  color: white;\n\n  ","\n\n  &:focus {\n    outline: none;\n  }\n"]);return mt=function(){return e},e}function ht(){var e=Object(f.a)(["\n  margin: 0;\n  font-size: 1.5em;\n"]);return ht=function(){return e},e}function Ot(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 180px auto 100px 100px 100px;\n  margin-bottom: 40px;\n"]);return Ot=function(){return e},e}var Ct=A.default.header(Ot()),jt=A.default.h1(ht()),yt=A.default.button(mt(),(function(e){return e.active&&Object(A.css)(vt())})),gt=Object(A.default)(yt)(dt()),Et=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}},{key:"handleClick",value:function(e,t,n,r){"dashboard"===e&&r(n),t(e)}},{key:"render",value:function(){var e=this;return a.a.createElement(x.Consumer,null,(function(t){var n=t.page,r=t.setPage,o=t.confirmFavorites;return a.a.createElement(M.Consumer,null,(function(t){var c=t.favoriteCoins,i=e.props.name;return a.a.createElement(yt,{active:n===i,onClick:function(){e.handleClick(i,r,c,o)}},e.capitalize(i))}))}))}}]),n}(r.Component),xt=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(Ct,null,a.a.createElement(jt,null,"CryptoDash"),a.a.createElement("div",{className:"text-transparent"},"Space Remaining"),a.a.createElement(Et,{name:"dashboard",active:!0}),a.a.createElement(Et,{name:"settings"}),a.a.createElement(gt,null,"Chinese"))}}]),n}(r.Component),kt=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(bt,null,a.a.createElement(k,null,a.a.createElement(K,null,a.a.createElement(xt,null),a.a.createElement(ft,null,a.a.createElement(st,null),a.a.createElement(Ge,null)))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(kt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.ef6ad4e3.chunk.js.map