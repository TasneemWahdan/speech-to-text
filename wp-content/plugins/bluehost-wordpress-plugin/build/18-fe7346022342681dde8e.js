(window.webpackJsonp_bluehost_wordpress_plugin=window.webpackJsonp_bluehost_wordpress_plugin||[]).push([[18],{134:function(e,t){function n(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,c,"next",e)}function c(e){n(i,o,a,s,c,"throw",e)}s(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return _})),n.d(t,"g",(function(){return P}));var r=n(38),o=n.n(r),a=n(4),i=n.n(a),s=n(1),c=n(5);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(s.useState)(e),n=i()(t,2),r=n[0],a=n[1];function u(e){a([].concat(o()(r),[e]))}function l(e){return r.includes(e)}function h(e){a(Object(c.without)(r,e))}function p(e){l(e)?h(e):u(e)}return[{favorites:r},{addFavorite:u,hasFavorite:l,removeFavorite:h,setFavorites:a,toggleFavorite:p}]}var l=n(134),h=n.n(l),p=n(18),f=n.n(p),d=n(16),v=n.n(d);function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"themes",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(s.useState)(!1),r=i()(n,2),o=r[0],a=r[1],c=Object(s.useState)(!1),u=i()(c,2),l=u[0],p=u[1],d=Object(s.useState)(!1),g=i()(d,2),b=g[0],m=g[1],y=Object(s.useState)(e),O=i()(y,2),j=O[0],_=O[1],w=Object(s.useState)(t),k=i()(w,2),S=k[0],P=k[1],x=Object(s.useState)({}),E=i()(x,2),M=E[0],L=E[1];return Object(s.useEffect)((function(){!function(){var e=h()(f.a.mark((function e(){var t,n,r,o,s,c,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a(!1),p(!1),m(!0),e.prev=3,t=new URLSearchParams(""),n=0,r=Object.entries(S);n<r.length;n++)o=i()(r[n],2),s=o[0],c=o[1],t.append(s,c);return e.next=8,v()({path:"/mojo/v1/"+j+"?"+t.toString()});case 8:u=e.sent,L(u),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),p(!0),L(e.t0);case 16:m(!1),a(!0);case 18:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}()()}),[j,S]),[{done:o,isError:l,isLoading:b,params:S,payload:M},{setType:_,setParams:P}]}function b(e){return[function(t,n){switch(n){case"favorites":return function(t){return Object(c.filter)(t,(function(t){return e.includes(t.id)}))}(t);default:return t}}]}var m=n(139),y=n.n(m);function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(s.useState)(e),n=i()(t,2),r=n[0],o=n[1];function a(e){return r?new y.a(e,{threshold:.1,keys:["name","short_description","features","tags"]}).search(r):e}return[{query:r},{search:a,setQuery:o}]}function j(){function e(e){return e.sort((function(e,t){return e.created_timestamp>t.created_timestamp?1:e.created_timestamp<t.created_timestamp?-1:e.name<t.name?1:-1}))}function t(t){return Object(c.reverse)(e(t))}function n(e){return Object(c.sortBy)(e,(function(e){return parseInt(e.prices.single_domain_license,10)}))}function r(e){return Object(c.reverse)(n(e))}function o(e){return e.sort((function(e,t){return e.sales_count>t.sales_count?1:e.sales_count<t.sales_count?-1:e.name<t.name?1:-1}))}function a(e){return Object(c.reverse)(o(e))}return[function(i){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sales",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desc";switch(i=Object.values(i),s){case"date":return"desc"===c?t(i):e(i);case"price":return"desc"===c?r(i):n(i);default:return"desc"===c?a(i):o(i)}}]}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=Object(s.useState)(e),o=i()(r,2),a=o[0],u=o[1],l=Object(s.useState)([]),h=i()(l,2),p=h[0],f=h[1],d=Object(s.useState)(t),v=i()(d,2),g=v[0],b=v[1],m=Object(s.useState)([]),y=i()(m,2),O=y[0],j=y[1],_=Object(s.useState)(1),w=i()(_,2),k=w[0],S=w[1],P=Object(s.useState)(n),x=i()(P,2),E=x[0],M=x[1];return Object(s.useEffect)((function(){var e=Object(c.chunk)(a,g);j(e),S(e.length)}),[a]),Object(s.useEffect)((function(){f(O[E-1])}),[O,E]),[{items:p,itemsPerPage:g,pageCount:k,pageNumber:E},{setCollection:u,setItemsPerPage:b,setPageNumber:M}]}var w=n(19),k=n.n(w),S=n(2);function P(){var e=Object(s.useState)(null),t=i()(e,2),n=t[0],r=t[1],o=Object(s.useState)(null),a=i()(o,2),c=a[0],u=a[1],l=Object(s.useState)(null),p=i()(l,2),d=p[0],g=p[1],b=Object(s.useState)(null),m=i()(b,2),y=m[0],O=m[1],j=Object(s.useState)(!1),_=i()(j,2),w=_[0],P=_[1],x=Object(s.useState)(!1),E=i()(x,2),M=E[0],L=E[1],T=Object(s.useState)(!1),C=i()(T,2),N=C[0],A=C[1],F=Object(s.useState)(null),I=i()(F,2),D=I[0],U=I[1],z=Object(s.useState)(null),W=i()(z,2),q=W[0],B=W[1],J=Object(s.useState)(null),V=i()(J,2),K=V[0],R=V[1],H=Object(s.useState)(null),Q=i()(H,2),$=Q[0],Y=Q[1],G=Object(s.useState)(null),X=i()(G,2),Z=X[0],ee=X[1],te=Object(s.useState)(null),ne=i()(te,2),re=ne[0],oe=ne[1],ae=Object(s.useState)(""),ie=i()(ae,2),se=ie[0],ce=ie[1],ue=Object(S.__)("An unknown error has occurred.","bluehost-wordpress-plugin"),le=function(){var e=h()(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!1),A(!0),g(null),e.prev=3,e.next=6,v()(t);case 6:if(!(n=e.sent).hasOwnProperty("status")||"error"!==n.status){e.next=9;break}throw new Error(n.message);case 9:return A(!1),e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(3),A(!1),L(!0),g(("object"===k()(e.t0)?e.t0.message:e.t0)||ue),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(_x){return e.apply(this,arguments)}}(),he=function(e){e.hasOwnProperty("stagingExists")&&O(e.stagingExists),e.hasOwnProperty("currentEnvironment")&&u("production"===e.currentEnvironment),e.hasOwnProperty("productionDir")&&U(e.productionDir),e.hasOwnProperty("productionThumbnailUrl")&&B(e.productionThumbnailUrl),e.hasOwnProperty("productionUrl")&&R(e.productionUrl),e.hasOwnProperty("stagingDir")&&Y(e.stagingDir),e.hasOwnProperty("stagingThumbnailUrl")&&ee(e.stagingThumbnailUrl),e.hasOwnProperty("stagingUrl")&&oe(e.stagingUrl),e.hasOwnProperty("creationDate")&&r(e.creationDate)};function pe(){return(pe=h()(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,le({path:"/bluehost/v1/staging",method:"POST"});case 3:(t=e.sent)&&(he(t),g(t.message),L("error"===t.status)),P(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=h()(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le({path:"/bluehost/v1/staging",method:"DELETE"});case 2:e.sent&&(O(!1),g(Object(S.__)("Staging website destroyed.","bluehost-wordpress-plugin")));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=h()(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ce(t),e.next=3,le({path:"/bluehost/v1/staging/switch-to?env=".concat(t)});case 3:(n=e.sent)&&n.hasOwnProperty("load_page")&&(window.location.href=n.load_page);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(){return(ve=h()(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le({path:"/bluehost/v1/staging/clone",method:"POST"});case 2:e.sent&&g(Object(S.__)("Website cloned successfully.","bluehost-wordpress-plugin"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return(ge=h()(f.a.mark((function e(){var t,n=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"all",e.next=3,le({path:"/bluehost/v1/staging/deploy?type=".concat(t),method:"POST"});case 3:e.sent&&g(Object(S.__)("Changes deployed successfully.","bluehost-wordpress-plugin"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){le({path:"/bluehost/v1/staging"}).then(he)}),[]),[{creationDate:n,hasStaging:y,isCreatingStaging:w,isError:M,isProduction:c,isLoading:N,notice:d,productionDir:D,productionThumbnailUrl:q,productionUrl:K,stagingDir:$,stagingThumbnailUrl:Z,stagingUrl:re,switchingTo:se},{cloneEnv:function(){return ve.apply(this,arguments)},createEnv:function(){return pe.apply(this,arguments)},deleteEnv:function(){return fe.apply(this,arguments)},deployChanges:function(){return ge.apply(this,arguments)},setNotice:g,switchToEnv:function(e){return de.apply(this,arguments)}}]}},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return T}));var r=n(14),o=n.n(r),a=n(1),i=n(8),s=n(26),c=n(2),u=n(3),l=n.n(u),h=n(5),p=n(133),f=n(9),d=n(12),v=function(e){var t=e.type,n=void 0===t?"base":t,r=e.descriptivePageTitle,u=void 0!==r&&r,v=o()(e,["type","descriptivePageTitle"]),g=document.querySelector(".bwa-route-contents"),b=Object(f.useLocation)(),m=Object(d.useSelect)((function(e){return e("bluehost/plugin").getTopLevelPages()}),[]);if(null==m)return!1;var y=function(){var e=Object(c.__)("Bluehost WordPress Plugin","bluehost-wordpress-plugin"),t=document.querySelector("h2");return!1!==u?u:null!==t?t.innerText:e};return Object(a.useEffect)((function(){var e,t,n,r,o;Object(i.e)(m),Object(i.d)((e=!1,t=b.pathname,(n=Object(h.keyBy)(m,"path"))[t]?e=n[t].slug:m.forEach((function(n){t.includes(n.path)&&(e=n.slug)})),e)),g.focus({preventScroll:!0}),r=b,o=y(),void 0!==r.state&&void 0!==r.state.redirect&&"unspecified-or-root"===r.state.redirect||Object(p.speak)(o,"assertive"),Object(i.h)(b,y())}),[b.pathname]),Object(a.createElement)("section",{className:l()(["component-template-"+n,"base-template","animated","fadeIn","page-fade-speed",v.className?v.className:null])},Object(a.createElement)(s.l,null),v.children)},g=n(11),b=n.n(g),m=(n(136),function(e){var t=e.type,n=void 0===t?"common":t,r=e.children,i=o()(e,["type","children"]);return Object(a.createElement)(v,b()({type:n},i),r)}),y=n(10),O=n.n(y),j=n(38),_=n.n(j),w=n(4),k=n.n(w),S=(n(137),n(6)),P=n(135),x=n(7);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=[{label:Object(c.__)("Popular","bluehost-wordpress-plugin"),value:"sort-sales-desc"},{label:Object(c.__)("Price (High to Low)","bluehost-wordpress-plugin"),value:"sort-price-desc"},{label:Object(c.__)("Price (Low to High)","bluehost-wordpress-plugin"),value:"sort-price-asc"},{label:Object(c.__)("Date Added","bluehost-wordpress-plugin"),value:"sort-date-desc"}],T=function(e){var t=e.type,n=void 0===t?"marketplace":t,r=e.className,i=void 0===r?"":r,u=e.isLoading,h=e.payload,p=e.render,f=e.marketplaceType,d=void 0===f?"themes":f,v=o()(e,["type","className","isLoading","payload","render","marketplaceType"]),g=Object(P.a)(),y=k()(g,2),O=y[0].favorites,j=y[1],w=j.hasFavorite,E=j.toggleFavorite,T=Object(P.c)(O),C=k()(T,1)[0],N=Object(P.f)(),A=k()(N,2),F=A[0],I=F.items,D=F.itemsPerPage,U=F.pageCount,z=F.pageNumber,W=A[1],q=W.setCollection,B=W.setPageNumber,J=Object(a.useState)("sort-sales-desc"),V=k()(J,2),K=V[0],R=V[1],H=Object(P.e)(),Q=k()(H,1)[0],$=Object(P.d)(),Y=k()($,2),G=Y[0].query,X=Y[1],Z=X.search,ee=X.setQuery;return i=l()("bluehost-marketplace",i),Object(a.useEffect)((function(){var e=h.items||[],t=K.split("-"),n=k()(t,3),r=n[0],o=n[1],a=n[2];e="filter"===r?C(Q(e,"sales"),o):Q(e,o,a),e=Z(e,G),q(e),B(1)}),[h,K,G]),Object(a.useEffect)((function(){window.scrollTo(0,0)}),[z]),Object(a.createElement)(m,b()({type:n,className:i,marketplaceType:d},v),Object(a.createElement)("section",{className:"".concat(i,"__header")},Object(a.createElement)("div",{className:"".concat(i,"__header-primary")},Object(a.createElement)(S.d,{level:"h2",size:1,className:"marketplace-page-title"},function(e){switch(e){case"plugins":return Object(c.__)("Premium Plugins","bluehost-wordpress-plugin");case"services":return Object(c.__)("Premium Services","bluehost-wordpress-plugin");default:return Object(c.__)("Premium Themes","bluehost-wordpress-plugin")}}(d)),Object(a.createElement)("div",{className:"".concat(i,"__pagination-container")},Object(a.createElement)(S.g,{callback:B,currentPage:z,pageCount:U}))),Object(a.createElement)("div",{className:"".concat(i,"__header-secondary")},Object(a.createElement)(s.q,{value:G,onChange:ee}),Object(a.createElement)(S.c,{id:"sort-filter",label:Object(c.__)("Sort By","bluehost-wordpress-plugin"),onChange:function(e){return R(e)},options:L,value:K,width:178}))),Object(a.createElement)("div",{className:"".concat(i,"__content")},u?Object(a.createElement)(s.p,null,_()(Array(D).keys()).map((function(e){return Object(a.createElement)(s.o,{key:e})}))):I&&I.length?Object(a.createElement)(s.p,null,I.map((function(e){return p({item:M(M({},e),{},{marketplaceType:d}),hasFavorite:w,toggleFavorite:E})}))):"filter-favorites"===K?Object(a.createElement)("div",{className:"bluehost-no-results"},Object(a.createElement)(x.v,null),Object(a.createElement)("h2",null,Object(c.__)("You don't have any favorites yet.","bluehost-wordpress-plugin")),Object(a.createElement)("p",null,Object(c.__)("Add favorites by starring items you like.","bluehost-wordpress-plugin")),Object(a.createElement)("a",{href:"#",onClick:function(e){e.preventDefault(),R("sort-sales-desc")}},function(){switch(d){case"plugins":return Object(c.__)("View Plugins","bluehost-wordpress-plugin");case"services":return Object(c.__)("View Services","bluehost-wordpress-plugin");default:return Object(c.__)("View Themes","bluehost-wordpress-plugin")}}())):Object(a.createElement)(s.i,null)),Object(a.createElement)("footer",{className:"".concat(i,"__footer")},Object(a.createElement)("div",{className:"".concat(i,"__ad")}),Object(a.createElement)(S.g,{callback:B,currentPage:z,pageCount:U})))}},139:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(1),a=n(7),i=a.get,s=(a.deepValue,a.isArray),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,a=n.distance,s=void 0===a?100:a,c=n.threshold,u=void 0===c?.6:c,l=n.maxPatternLength,h=void 0===l?32:l,p=n.caseSensitive,f=void 0!==p&&p,d=n.tokenSeparator,v=void 0===d?/ +/g:d,g=n.findAllMatches,b=void 0!==g&&g,m=n.minMatchCharLength,y=void 0===m?1:m,O=n.id,j=void 0===O?null:O,_=n.keys,w=void 0===_?[]:_,k=n.shouldSort,S=void 0===k||k,P=n.getFn,x=void 0===P?i:P,E=n.sortFn,M=void 0===E?function(e,t){return e.score-t.score}:E,L=n.tokenize,T=void 0!==L&&L,C=n.matchAllTokens,N=void 0!==C&&C,A=n.includeMatches,F=void 0!==A&&A,I=n.includeScore,D=void 0!==I&&I,U=n.verbose,z=void 0!==U&&U;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:u,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:b,minMatchCharLength:y,id:j,keys:w,includeMatches:F,includeScore:D,shouldSort:S,getFn:x,sortFn:M,verbose:z,tokenize:T,matchAllTokens:N},this.setCollection(t),this._processKeys(w)}var t;return(t=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var r=e[t];this._keyWeights[r]=1,this._keyNames.push(r)}else{for(var o=null,a=null,i=0,s=0,c=e.length;s<c;s+=1){var u=e[s];if(!u.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=u.name;if(this._keyNames.push(l),!u.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var h=u.weight;if(h<0||h>1)throw new Error('"weight" property in key must bein the range of [0, 1)');a=null==a?h:Math.max(a,h),o=null==o?h:Math.min(o,h),this._keyWeights[l]=h,i+=h}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,a=this._search(r,o);return this._computeScore(a),this.options.shouldSort&&this._sort(a),t.limit&&"number"==typeof t.limit&&(a=a.slice(0,t.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,a=n.length;r<a;r+=1)t.push(new o(n[r],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var a=0,i=n.length;a<i;a+=1)this._analyze({key:"",value:n[a],record:a,index:a},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return o}for(var s=0,c=n.length;s<c;s+=1)for(var u=n[s],l=0,h=this._keyNames.length;l<h;l+=1){var p=this._keyNames[l];this._analyze({key:p,value:this.options.getFn(u,p),record:u,index:s},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return o}},{key:"_analyze",value:function(e,t){var n=this,r=e.key,o=e.arrayIndex,a=void 0===o?-1:o,i=e.value,c=e.record,u=e.index,l=t.tokenSearchers,h=void 0===l?[]:l,p=t.fullSearcher,f=t.resultMap,d=void 0===f?{}:f,v=t.results,g=void 0===v?[]:v;!function e(t,o,a,i){if(null!=o)if("string"==typeof o){var c=!1,u=-1,l=0;n._log("\nKey: ".concat(""===r?"--":r));var f=p.search(o);if(n._log('Full text: "'.concat(o,'", score: ').concat(f.score)),n.options.tokenize){for(var v=o.split(n.options.tokenSeparator),b=v.length,m=[],y=0,O=h.length;y<O;y+=1){var j=h[y];n._log('\nPattern: "'.concat(j.pattern,'"'));for(var _=!1,w=0;w<b;w+=1){var k=v[w],S=j.search(k),P={};S.isMatch?(P[k]=S.score,c=!0,_=!0,m.push(S.score)):(P[k]=1,n.options.matchAllTokens||m.push(1)),n._log('Token: "'.concat(k,'", score: ').concat(P[k]))}_&&(l+=1)}u=m[0];for(var x=m.length,E=1;E<x;E+=1)u+=m[E];u/=x,n._log("Token score average:",u)}var M=f.score;u>-1&&(M=(M+u)/2),n._log("Score average:",M);var L=!n.options.tokenize||!n.options.matchAllTokens||l>=h.length;if(n._log("\nCheck Matches: ".concat(L)),(c||f.isMatch)&&L){var T={key:r,arrayIndex:t,value:o,score:M};n.options.includeMatches&&(T.matchedIndices=f.matchedIndices);var C=d[i];C?C.output.push(T):(d[i]={item:a,output:[T]},g.push(d[i]))}}else if(s(o))for(var N=0,A=o.length;N<A;N+=1)e(N,o[N],a,i)}(a,i,c,u)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,r=0,o=e.length;r<o;r+=1){for(var a=e[r],i=a.output,s=i.length,c=1,u=0;u<s;u+=1){var l=i[u],h=l.key,p=n?t[h]:1,f=0===l.score&&t&&t[h]>0?Number.EPSILON:l.score;c*=Math.pow(f,p)}a.score=c,this._log(a)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var o=[];this.options.includeMatches&&o.push((function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var a=n[r];if(0!==a.matchedIndices.length){var i={indices:a.matchedIndices,value:a.value};a.key&&(i.key=a.key),a.hasOwnProperty("arrayIndex")&&a.arrayIndex>-1&&(i.arrayIndex=a.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&o.push((function(e,t){t.score=e.score}));for(var a=0,i=e.length;a<i;a+=1){var s=e[a];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},u=0,l=o.length;u<l;u+=1)o[u](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();e.exports=c},function(e,t,n){var r=n(2),o=n(3),a=n(6),i=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,u=void 0===c?.6:c,l=n.maxPatternLength,h=void 0===l?32:l,p=n.isCaseSensitive,f=void 0!==p&&p,d=n.tokenSeparator,v=void 0===d?/ +/g:d,g=n.findAllMatches,b=void 0!==g&&g,m=n.minMatchCharLength,y=void 0===m?1:m,O=n.includeMatches,j=void 0!==O&&O;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:u,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:b,includeMatches:j,minMatchCharLength:y},this.pattern=f?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=a(this.pattern))}var t;return(t=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,a=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return a&&(i.matchedIndices=[[0,e.length-1]]),i}var s=this.options,c=s.maxPatternLength,u=s.tokenSeparator;if(this.pattern.length>c)return r(e,this.pattern,u);var l=this.options,h=l.location,p=l.distance,f=l.threshold,d=l.findAllMatches,v=l.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:h,distance:p,threshold:f,findAllMatches:d,minMatchCharLength:v,includeMatches:a})}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();e.exports=i},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),a=e.match(o),i=!!a,s=[];if(i)for(var c=0,u=a.length;c<u;c+=1){var l=a[c];s.push([e.indexOf(l),l.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:s}}},function(e,t,n){var r=n(4),o=n(5);e.exports=function(e,t,n,a){for(var i=a.location,s=void 0===i?0:i,c=a.distance,u=void 0===c?100:c,l=a.threshold,h=void 0===l?.6:l,p=a.findAllMatches,f=void 0!==p&&p,d=a.minMatchCharLength,v=void 0===d?1:d,g=a.includeMatches,b=void 0!==g&&g,m=s,y=e.length,O=h,j=e.indexOf(t,m),_=t.length,w=[],k=0;k<y;k+=1)w[k]=0;if(-1!==j){var S=r(t,{errors:0,currentLocation:j,expectedLocation:m,distance:u});if(O=Math.min(S,O),-1!==(j=e.lastIndexOf(t,m+_))){var P=r(t,{errors:0,currentLocation:j,expectedLocation:m,distance:u});O=Math.min(P,O)}}j=-1;for(var x=[],E=1,M=_+y,L=1<<(_<=31?_-1:30),T=0;T<_;T+=1){for(var C=0,N=M;C<N;)r(t,{errors:T,currentLocation:m+N,expectedLocation:m,distance:u})<=O?C=N:M=N,N=Math.floor((M-C)/2+C);M=N;var A=Math.max(1,m-N+1),F=f?y:Math.min(m+N,y)+_,I=Array(F+2);I[F+1]=(1<<T)-1;for(var D=F;D>=A;D-=1){var U=D-1,z=n[e.charAt(U)];if(z&&(w[U]=1),I[D]=(I[D+1]<<1|1)&z,0!==T&&(I[D]|=(x[D+1]|x[D])<<1|1|x[D+1]),I[D]&L&&(E=r(t,{errors:T,currentLocation:U,expectedLocation:m,distance:u}))<=O){if(O=E,(j=U)<=m)break;A=Math.max(1,2*m-j)}}if(r(t,{errors:T+1,currentLocation:m,expectedLocation:m,distance:u})>O)break;x=I}var W={isMatch:j>=0,score:0===E?.001:E};return b&&(W.matchedIndices=o(w,v)),W}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,a=void 0===o?0:o,i=t.expectedLocation,s=void 0===i?0:i,c=t.distance,u=void 0===c?100:c,l=r/e.length,h=Math.abs(s-a);return u?l+h/u:h?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,a=0,i=e.length;a<i;a+=1){var s=e[a];s&&-1===r?r=a:s||-1===r||((o=a-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[a-1]&&a-r>=t&&n.push([r,a-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},r=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},o=function(e){return"string"==typeof e},a=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,s){if(s){var c=s.indexOf("."),u=s,l=null;-1!==c&&(u=s.slice(0,c),l=s.slice(c+1));var h=t[u];if(null!=h)if(l||!o(h)&&!a(h))if(n(h))for(var p=0,f=h.length;p<f;p+=1)e(h[p],l);else l&&e(h,l);else i.push(r(h))}else i.push(t)}(e,t),i},isArray:n,isString:o,isNum:a,toString:r}}])},246:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),a=n(1),i=n(138),s=n(26),c=n(135),u=n(9);t.default=Object(u.withRouter)((function(e){var t=e.history,n=Object(c.b)("plugins",{count:1e3}),r=o()(n,1)[0],u=r.done,l=r.isError,h=r.isLoading,p=r.payload;if(l)throw new Error("API Error. Payload: "+JSON.stringify(p));return Object(a.createElement)(i.c,{isLoading:!u||h,payload:p,render:function(e){var n=e.item,r=e.hasFavorite,o=e.toggleFavorite;return Object(a.createElement)(s.n,{buttonPrimary:{href:n.buy_url},buttonSecondary:{onClick:function(){t.push("/marketplace/plugins/".concat(n.id))}},id:n.id,type:n.marketplaceType,imageUrl:n.images.preview_url,isFavorite:r(n.id),key:n.id,price:n.prices.single_domain_license,title:n.name,toggleFavorite:function(){return o(n.id)}})},marketplaceType:"plugins",type:"marketplace"})}))}}]);