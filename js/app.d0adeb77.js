(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),o=s.n(a);o.a},"1f25":function(t,e,s){"use strict";var a=s("434b"),o=s.n(a);o.a},"2dd8":function(t,e,s){},"434b":function(t,e,s){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=n,t.exports=o,o.id="4678"},"4c2b":function(t,e,s){"use strict";var a=s("2dd8"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("meta",{attrs:{name:"viewport",content:"height=device-height, \n                    width=device-width, initial-scale=1.0, \n                    minimum-scale=1.0, maximum-scale=1.0, \n                    user-scalable=no, target-densitydpi=device-dpi"}}),s("vue-headful",{attrs:{title:"Corona Stats: "+t.stats.cases.toLocaleString()+" cases",description:"WorldStatsInfo displays Corona Virus Cases Stats in real-time"}}),s("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}}),s("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet"}}),s("Navbar"),s("router-view",{staticStyle:{"padding-top":"3rem"}})],1)},n=[],i=(s("96cf"),s("1da1")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-0 p-0"},[s("nav",{staticClass:"fixed-top navbar navbar-bg shadow-sm p-sm-3 p-2 pb-3 pt-3 pb-md-2 pt-md-2",class:{"color-nav-1":"/"==t.$route.path,"color-nav-2":"/symptoms"==t.$route.path,"color-nav-3":"/precautions"==t.$route.path}},[t._m(0),s("div",{staticClass:"ml-auto d-none d-md-block"},[s("button",{staticClass:"mdl-button mr-3 mdl-js-button nav-link-button text-dark",attrs:{onclick:"window.location.href = '/';"}},[s("router-link",{staticClass:"text-decoration-none text-capitalize nav-links",attrs:{"class-active":"active",to:"/",exact:""}},[t._v("Stats")])],1),s("button",{staticClass:"mdl-button mr-3 mdl-js-button nav-link-button text-dark",attrs:{onclick:"window.location.href = '/symptoms';"}},[s("router-link",{staticClass:"text-decoration-none text-capitalize nav-links",attrs:{"class-active":"active",to:"/symptoms",exact:""}},[t._v("Symptoms")])],1),s("button",{staticClass:"mdl-button mr-3 mdl-js-button nav-link-button text-dark",attrs:{onclick:"window.location.href = '/precautions';"}},[s("router-link",{staticClass:"text-decoration-none text-capitalize nav-links",attrs:{"class-active":"active",to:"/precautions",exact:""}},[t._v("Precautions")])],1),s("a",{attrs:{href:""}})])]),s("div",{staticClass:"fixed-bottom bottom-navbar shadow-lg d-md-none"},[s("div",{staticClass:"row bg-white"},[s("button",{staticClass:"col p-1 bottom-nav-button mdl-js-button mdl-js-ripple-effect text-decoration-none text-dark",class:{"color-nav-1":"/"==t.$route.path,"color-nav-2":"/symptoms"==t.$route.path,"color-nav-3":"/precautions"==t.$route.path},attrs:{onclick:"window.location.href = '/';"}},[t._m(1),s("div",{staticClass:"row d-flex justify-content-center m-0"},[t._v("Stats")])]),s("button",{staticClass:"col p-1 bottom-nav-button mdl-js-button mdl-js-ripple-effect text-decoration-none text-dark",class:{"color-nav-1":"/"==t.$route.path,"color-nav-2":"/symptoms"==t.$route.path,"color-nav-3":"/precautions"==t.$route.path},attrs:{onclick:"window.location.href = '/symptoms';"}},[t._m(2),s("div",{staticClass:"row d-flex justify-content-center m-0"},[t._v("Symptoms")])]),s("button",{staticClass:"col p-1 bottom-nav-button mdl-js-button mdl-js-ripple-effect text-decoration-none text-dark",class:{"color-nav-1":"/"==t.$route.path,"color-nav-2":"/symptoms"==t.$route.path,"color-nav-3":"/precautions"==t.$route.path},attrs:{onclick:"window.location.href = '/precautions';"}},[t._m(3),s("div",{staticClass:"row d-flex justify-content-center m-0"},[t._v("Precautions")])])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-brand text-decoration-none text-dark",attrs:{href:"/"}},[s("span",{staticClass:"text-dark"},[t._v("World")]),s("span",{staticClass:"text-success"},[t._v("StatsInfo")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center m-0"},[s("i",{staticClass:"material-icons"},[t._v("equalizer")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center m-0"},[s("i",{staticClass:"material-icons"},[t._v("local_hospital")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center m-0"},[s("i",{staticClass:"material-icons"},[t._v("pan_tool ")])])}],l=(s("1f25"),s("2877")),d={},u=Object(l["a"])(d,r,c,!1,null,null,null),f=u.exports,m=s("bc3a"),p=s.n(m),h={name:"app",components:{Navbar:f},data:function(){return{stats:[],world:[],date:[],t_countries:[]}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:p.a.get("https://corona.lmao.ninja/all").then((function(e){return t.stats=e.data,t.date=e.data.updated}));case 1:case"end":return e.stop()}}),e)})))()}},v=h,b=(s("034f"),Object(l["a"])(v,o,n,!1,null,null,null)),g=b.exports,j=(s("4de4"),s("4160"),s("d81d"),s("d3b7"),s("3ca3"),s("159b"),s("ddb0"),s("9483"));self.addEventListener("activate",(function(t){t.waitUntil(caches.keys().then((function(t){return Promise.all(t.filter((function(t){})).map((function(t){return caches.delete(t)})))})))})),Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading."),caches.keys().then((function(t){t.forEach((function(t){caches.delete(t)}))}))},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var y=s("8c4f"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("vue-headful",{attrs:{title:"Coronavirus Live Update : "+t.stats.cases.toLocaleString()+" cases from Covid-19 virus outbeak",description:"COVID19 pandemic outbreak : Track coronavirus live updates, news and statistics of infections, deaths and recoveries registered globally .now more!, Coronavirus live update and statistics. WorldStatsInfo displays Corona Virus Cases Stats in real-time.","og:url":"https://worldstatsinfo.com/","og:type":"website","og:title":"Coronavirus Live Update","og:site_name":"World Stats Info","og:image":"https://worldstatsinfo.com/img/og-image.png",robots:"index,follow"}}),s("div",{staticClass:"row div-main d-flex justify-content-center p-3"},[s("div",{staticClass:"col-md-8 div-main-stats col-sm rounded bg-white shadow m-3 pt-4 pb-5"},[t._m(0),s("div",{staticClass:"row d-flex justify-content-center"},[s("pie-chart",{staticStyle:{height:"13rem",width:"16rem"},attrs:{colors:["rgb(81, 247, 89)","rgb(255, 90, 78)","rgb(189, 189, 189)"],data:[["Recovered",t.stats.recovered],["Deaths",t.stats.deaths],["Active",t.stats.cases-(t.stats.recovered+t.stats.deaths)]]}})],1),s("div",{staticClass:"div-stats"},[s("div",{},[s("p",{staticClass:"text-center font-weight-bold h1"},[t._v(t._s(t.stats.cases.toLocaleString()))]),s("p",{staticClass:"h5 text-center text-warning"},[t._v("Total Cases")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col d-flex justify-content-center mt-3"},[s("div",{staticClass:"card div-cards div-cards-recovered align-self-sm-start",staticStyle:{width:"20rem"}},[s("p",{staticClass:"h4 text-center font-weight-light"},[t._v(t._s(t.stats.recovered.toLocaleString()))]),s("p",{staticClass:"h5 text-center text-success"},[t._v("Total Recovered")])])]),s("div",{staticClass:"col d-flex justify-content-center mt-3"},[s("div",{staticClass:"card div-cards div-cards-deaths",staticStyle:{width:"20rem"}},[s("p",{staticClass:"h4 text-center font-weight-light"},[t._v(t._s(t.stats.deaths.toLocaleString()))]),s("p",{staticClass:"h5 text-center text-danger"},[t._v("Total Deaths")])])])])])])]),s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-md-8"},[s("p",{staticClass:"text-secondary text-center"},[s("i",{staticClass:"material-icons md-24"},[t._v("update")]),t._v(" Last Updated on: "+t._s(t.moment(t.date).fromNow()))])])]),s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-md-7 m-3"},[s("p",{staticClass:"h3 font-weight-lighter"},[t._v("Cases by Countries")]),s("p",{staticClass:"m-1"},[t._v("Covid-19 has till now affected "),s("span",{staticClass:"font-weight-bold text-dark"},[t._v(t._s(t.t_countries))]),t._v(" countries")]),s("p",{staticClass:"m-1"},[t._v("Cases by countries Covid-19 affected data includes Cases · Today Cases · Deaths · Recovered · Active · Critical")])])]),s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-md-8 col-sm d-md-flex justify-content-md-center table-responsive"},[s("table",{staticClass:"mdl-data-table mdl-js-data-table mdl-shadow--2dp"},[t._m(1),s("tbody",t._l(t.world,(function(e){return s("tr",[s("td",{staticClass:"border-right font-weight-bold text-center text-truncate",staticStyle:{width:"10px !important",overflow:"hidden"}},[t._v(t._s(e.country))]),s("td",{staticClass:"border-right font-weight-bold "},[t._v(t._s(e.cases.toLocaleString()))]),s("td",{staticClass:"border-right font-weight-bold text-danger"},[t._v("+"+t._s(e.todayCases.toLocaleString()))]),s("td",{staticClass:"border-right font-weight-bold "},[t._v(t._s(e.deaths.toLocaleString()))]),s("td",{staticClass:"border-right font-weight-bold text-danger"},[t._v("+"+t._s(e.todayDeaths.toLocaleString()))]),s("td",{staticClass:"border-right font-weight-bold text-success"},[t._v(t._s(e.recovered.toLocaleString()))]),s("td",{staticClass:"border-right font-weight-bold text-primary"},[t._v(t._s(e.active.toLocaleString()))]),s("td",{staticClass:"border-right font-weight-bold "},[t._v(t._s(e.critical.toLocaleString()))])])})),0)])])]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br")],1)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("p",{staticClass:"h1 font-weight-light text-center"},[t._v("Coronavirus Stats "),s("span",{staticClass:"h6 bg-danger text-white p-1 rounded live-text"},[t._v("LIVE")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"bg-table-head text-white"},[s("th",{staticClass:"border-right text-center mdl-data-table__cell--non-numeric"},[t._v("Country")]),s("th",{staticClass:"border-right "},[t._v("Cases")]),s("th",{staticClass:"border-right"},[t._v("Today Cases")]),s("th",{staticClass:"border-right"},[t._v("Deaths")]),s("th",{staticClass:"border-right"},[t._v("Today Deaths")]),s("th",{staticClass:"border-right"},[t._v("Recovered")]),s("th",{staticClass:"border-right"},[t._v("Active")]),s("th",{staticClass:"border-right"},[t._v("Critical")])])])}],w=(s("b64b"),s("c1df")),x=s.n(w),k={components:{},data:function(){return{stats:[],world:[],date:[],t_countries:[]}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:p.a.get("https://corona.lmao.ninja/all").then((function(e){return t.stats=e.data,t.date=e.data.updated})),p.a.get("https://corona.lmao.ninja/countries").then((function(e){return t.world=e.data,t.t_countries=Object.keys(e.data).length}));case 2:case"end":return e.stop()}}),e)})))()},methods:{moment:x.a}},S=k,z=(s("cccb"),Object(l["a"])(S,_,C,!1,null,null,null)),$=z.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"symptoms"},[s("vue-headful",{attrs:{title:"Coronavirus Precautions | Corona Virus | WorldStatsInfo",description:"Coronavirus precautions, coronavirus symptoms, coronavirus outbreak, Covid-19, coronavirus mask","og:url":"https://worldstatsinfo.com/","og:type":"website","og:title":"Coronavirus Symptoms","og:site_name":"World Stats Info","og:image":"https://worldstatsinfo.com/img/og-image.png",robots:"index,follow"}}),s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-md-10 m-3"},[s("h2",{},[t._v("Symptoms")]),s("p",{},[t._v("The COVID-19 virus affects different people by age. Covid-19 is a respiratory related disease that effects mainly on lungs. Covid-19 is more resisted to people of middle age as middle-aged people have more immune system and it is severly effected to old-aged people of age more than 60yrs.")]),s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-md-6 d-flex justify-content-center"},[s("lottie-player",{staticStyle:{width:"300px",height:"300px"},attrs:{src:"https://assets9.lottiefiles.com/private_files/lf30_hHODoj.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1)]),s("br"),t._m(1),t._m(2),s("br"),t._v(" "),s("br")])])],1)},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6"},[s("p",{staticClass:"h5"},[t._v("Common symptoms include:")]),s("ul",{staticClass:"text-secondary"},[s("li",[t._v("fever")]),s("li",[t._v("tiredness")]),s("li",[t._v("dry cough")])]),s("p",{staticClass:"h5"},[t._v("Other Common Symptoms:")]),s("ul",{staticClass:"text-secondary"},[s("li",[t._v("breathing problem")]),s("li",[t._v("aches and pains")]),s("li",[t._v("sore throat")]),s("li",[t._v("few people can report diarrhoea, nausea or a runny nose.")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("p",{staticClass:"h5 text-center"},[t._v('"People with the above symptoms should self-isolate and contact nearest Covid-19 testing center. It is better to maintain social distancing."')])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-md-6 m-3"},[s("p",{staticClass:"h2 text-center text-robo text-secondary font-weight-lighter"},[t._v("Most Importantly Don't Panic")])])])}],D={mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"),document.head.appendChild(t)}},I=D,L=(s("4c2b"),Object(l["a"])(I,O,E,!1,null,null,null)),P=L.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"precautions"},[s("vue-headful",{attrs:{title:"Coronavirus Precautions | Coronavirus | WorldStatsInfo",description:"Coronavirus precautions, coronavirus safety measures, coronavirus symptoms, coronavirus outbreak, Covid-19, coronavirus mask","og:url":"https://worldstatsinfo.com/","og:type":"website","og:title":"Coronavirus Precautions","og:site_name":"World Stats Info","og:image":"https://worldstatsinfo.com/img/og-image.png",robots:"index,follow"}}),s("div",{staticClass:"row d-flex justify-content-center m-3"},[s("div",{staticClass:"col-md-10"},[s("h2",[t._v("Precautions")]),s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-md-6 d-flex justify-content-center"},[s("lottie-player",{staticStyle:{width:"400px",height:"400px"},attrs:{src:"https://assets3.lottiefiles.com/packages/lf20_6R2HIH.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1)]),t._m(1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("lottie-player",{staticStyle:{width:"400px",height:"400px"},attrs:{src:"https://assets3.lottiefiles.com/packages/lf20_AQ3M8U.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1),t._m(2)]),t._v(" "),s("br"),t._v(" "),s("br")])])],1)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6"},[s("p",{staticClass:"h5"},[t._v("Wash your hands frequently")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons mr-1"},[t._v("pan_tool")]),t._v("Clean your hands regulary with a soap or a sanitizer to wash away germs from your hands.")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons mr-1 md-24",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Wash your hands frequently"}},[t._v("help")]),t._v(" Washing your hands keeps away germs from you and chances of infection will be low.")]),s("br"),s("p",{staticClass:"h5"},[t._v("Social distancing")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons mr-1 "},[t._v("voice_over_off")]),t._v("Maintain 1 mmetre distance from people how cough or sneeze and avoid crowded places.")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons mr-1 md-24",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Socail Distancing"}},[t._v("help")]),t._v("Maintaining social distancing will make you less vulnerable to germs tranfering from the people who cough or sneeze.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"}),s("div",{staticClass:"col-md-6"},[s("p",{staticClass:"h5"},[t._v("Donot touch your eyes, nose and mouth")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons"},[t._v("touch_app")]),t._v("Donot touch your eyes, nose and mouth unneccesarily. Touching your eyes, nose and muth may lead to infection if your hands contain the virus. If neccesary wash your hands thoroughly with soap or a sanitizer.")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons mr-1 md-24",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Donot touch your eyes, nose and mouth"}},[t._v("help")]),t._v("Avoiding touching your eyes, nose and mouth will not transfer the germs.")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6 mt-3"},[s("p",{staticClass:"h5"},[t._v("Maintain respiratory hygiene")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons mr-1"},[t._v("pan_tool")]),t._v("When you cough or sneeze make sure you are using a tissue or handkerchief covering your mouth and nose. Dispose the tissue or handkerchief immediately after using it.")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons mr-1 md-24",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Maintain respiratory hygiene"}},[t._v("help")]),t._v("Doing this may not spread the droplets you sneeze and stoping to infect others.")]),s("br"),s("p",{staticClass:"h5"},[t._v("If you have any of the symptoms contact hospital immediately.")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons mr-1 "},[t._v("local_hospital")]),t._v("It's better for a taking an advice from a medical assistant or contacing your nearest health care center.")]),s("p",{staticClass:"m-1"},[s("i",{staticClass:"material-icons mr-1 md-24",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"If you have any of the symptoms contact hospital immediately"}},[t._v("help")]),t._v("Doing this stop spread of infections.")])])}],W=s("1157"),A=s.n(W),R={mounted:function(){A()((function(){A()('[data-toggle="tooltip"]').tooltip()}));var t=document.createElement("script");t.setAttribute("src","https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"),document.head.appendChild(t)}},N=R,U=(s("5c46"),Object(l["a"])(N,T,M,!1,null,null,null)),q=U.exports;a["a"].use(y["a"]);var V=[{path:"/",name:"Home",component:$},{path:"/symptoms",name:"Symptoms",component:P},{path:"/precautions",name:"Precautions",component:q},{path:"**",redirect:"/"}],H=new y["a"]({mode:"history",base:"/",routes:V}),F=H,G=(s("ab8b"),s("9537"),s("3e48"),s("7ca7"),s("c5c5"),s("ec02")),J=s.n(G),B=s("d842"),Q=s("30ef"),K=s.n(Q);a["a"].use(B["a"].use(K.a)),a["a"].component("vue-headful",J.a),a["a"].config.productionTip=!1,new a["a"]({router:F,render:function(t){return t(g)}}).$mount("#app")},"5c46":function(t,e,s){"use strict";var a=s("954a"),o=s.n(a);o.a},"5ced":function(t,e,s){},"85ec":function(t,e,s){},"954a":function(t,e,s){},cccb:function(t,e,s){"use strict";var a=s("5ced"),o=s.n(a);o.a}});
//# sourceMappingURL=app.d0adeb77.js.map