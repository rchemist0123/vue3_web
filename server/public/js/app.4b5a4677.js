(function(){"use strict";var t={6868:function(t,e,n){var o=n(9242),r=n(3396);const i=(0,r.Uk)("Home"),u=(0,r.Uk)(" | "),a=(0,r.Uk)("About"),s=(0,r.Uk)(" | "),f=(0,r.Uk)("Test"),c=(0,r.Uk)(" | "),l=(0,r.Uk)("Login");function d(t,e){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[i])),_:1}),u,(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[a])),_:1}),s,(0,r.Wm)(n,{to:"/test"},{default:(0,r.w5)((()=>[f])),_:1}),c,(0,r.Wm)(n,{to:"/login"},{default:(0,r.w5)((()=>[l])),_:1})])}var m=n(89);const h={},p=(0,m.Z)(h,[["render",d]]);var b=p,g=(n(9773),n(4402)),v=(0,g.Rd)();async function y(){const t=await n.e(461).then(n.t.bind(n,3657,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var w=n(65),_=(0,w.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),k=n(678);const j={class:"home"};function x(t,e,n,o,i,u){const a=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",j,[(0,r.Wm)(a,{msg:"Welcome to Your Vue.js App"})])}var O=n(7139),W=n(3369),D=n(6824),C=n(8521),E=n(2718);const A=(0,r._)("h1",{class:"display-2 font-weight-bold mb-3"}," Welcome to the Vuetify 3 Beta ",-1),P=(0,r._)("p",{class:"subheading font-weight-regular"},[(0,r.Uk)(" For help and collaboration with other Vuetify developers, "),(0,r._)("br"),(0,r.Uk)("please join our online "),(0,r._)("a",{href:"https://community.vuetifyjs.com",target:"_blank"},"Discord Community")],-1),T=(0,r._)("h2",{class:"headline font-weight-bold mb-5"}," What's next? ",-1),N=["href"],U=(0,r._)("h2",{class:"headline font-weight-bold mb-5"}," Important Links ",-1),H=["href"],L=(0,r._)("h2",{class:"headline font-weight-bold mb-5"}," Ecosystem ",-1),S=["href"];function F(t,e,o,i,u,a){return(0,r.wg)(),(0,r.j4)(W.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D.o,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(C.D,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(E.f,{src:n(9574),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,r.Wm)(C.D,{class:"mb-4"},{default:(0,r.w5)((()=>[A,P])),_:1}),(0,r.Wm)(C.D,{class:"mb-5",cols:"12"},{default:(0,r.w5)((()=>[T,(0,r.Wm)(D.o,{justify:"center"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.whatsNext,((t,e)=>((0,r.wg)(),(0,r.iD)("a",{key:e,href:t.href,class:"subheading mx-3",target:"_blank"},(0,O.zw)(t.text),9,N)))),128))])),_:1})])),_:1}),(0,r.Wm)(C.D,{class:"mb-5",cols:"12"},{default:(0,r.w5)((()=>[U,(0,r.Wm)(D.o,{justify:"center"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.importantLinks,((t,e)=>((0,r.wg)(),(0,r.iD)("a",{key:e,href:t.href,class:"subheading mx-3",target:"_blank"},(0,O.zw)(t.text),9,H)))),128))])),_:1})])),_:1}),(0,r.Wm)(C.D,{class:"mb-5",cols:"12"},{default:(0,r.w5)((()=>[L,(0,r.Wm)(D.o,{justify:"center"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.ecosystem,((t,e)=>((0,r.wg)(),(0,r.iD)("a",{key:e,href:t.href,class:"subheading mx-3",target:"_blank"},(0,O.zw)(t.text),9,S)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}var M={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com"},{text:"Roadmap",href:"https://vuetifyjs.com/introduction/roadmap/"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})};const q=(0,m.Z)(M,[["render",F]]);var K=q,V={name:"HomeView",components:{HelloWorld:K}};const B=(0,m.Z)(V,[["render",x]]);var Y=B;const z=[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7574))},{path:"/test",name:"test",component:()=>Promise.all([n.e(378),n.e(115)]).then(n.bind(n,873))},{path:"/login",name:"login",component:()=>Promise.all([n.e(378),n.e(287)]).then(n.bind(n,472))}],R=(0,k.p7)({history:(0,k.PO)("/"),routes:z});var Z=R;y(),(0,o.ri)(b).use(Z).use(_).use(v).mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.4d6033c9.svg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var u=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(a=!1,i<u&&(u=i));if(a){t.splice(c--,1);var f=r();void 0!==f&&(e=f)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var u={};t=t||[null,e({}),e([]),e(e)];for(var a=2&r&&o;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((function(t){u[t]=function(){return o[t]}}));return u["default"]=function(){return o},n.d(i,u),i}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+({443:"about",461:"webfontloader"}[t]||t)+"."+{115:"bf63a386",287:"5f2fed94",378:"3aeb8a1d",443:"91608cff",461:"90670f53"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{115:"f7ca5b5c",287:"b331523b"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="app:";n.l=function(o,r,i,u){if(t[o])t[o].push(r);else{var a,s;if(void 0!==i)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var l=f[c];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==e+i){a=l;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=o),t[o]=[r];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var u=n.miniCssF(o),a=n.p+u;if(e(u,a))return r();t(o,a,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={115:1,287:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(e),a=new Error,s=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,u=o[0],a=o[1],s=o[2],f=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(e&&e(o);f<u.length;f++)i=u[f],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6868)}));o=n.O(o)})();
//# sourceMappingURL=app.4b5a4677.js.map