var t=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,n,a)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,r=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&l(t,n,e[n]);if(a)for(var n of a(e))s.call(e,n)&&l(t,n,e[n]);return t},i=(t,a)=>e(t,n(a)),c=(t,e,n)=>new Promise(((a,o)=>{var s=t=>{try{r(n.next(t))}catch(e){o(e)}},l=t=>{try{r(n.throw(t))}catch(e){o(e)}},r=t=>t.done?a(t.value):Promise.resolve(t.value).then(s,l);r((n=n.apply(t,e)).next())}));import{c as d,o as u,h as p,p as v,a as m,r as g,b as f,F as h,d as b,e as C,f as w,w as y,t as S,n as A,g as k,u as x,i as _,j as L,k as T,l as I,m as E,q as P,s as $,v as D,x as O,y as F,z as M,A as j,B as U}from"./vendor.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const V={},z={class:"cbi-section"};V.render=function(t,e,n,a,o,s){return u(),d("fieldset",z)};const R={all:"全部",sys:"系统",tool:"工具",net:"网络"};var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasePage:()=>window.vue_base,formatDate:t=>{if(t)return p(t).format("YYYY-MM-DD hh:mm:ss")},UnixDate:()=>(new Date).getTime(),numberToSize:t=>{const e=1024;if(t<e)return t+"KB";let n=e,a=0;for(let o=t/e;o>=e;o/=e)n*=e,a++;return(t/100/(n/100)).toFixed(2)+["M","G","T","P","E"][a]},numberToSum:t=>{if(null==t)return 0;if(t<1e4)return t;return`${parseInt(t/1e4)}万${t%1e4}`},getToken:()=>window.token||"",getDeviceId:()=>{var t;return(null==(t=null==window?void 0:window.device_id)?void 0:t.uid)||""},getVersion:()=>{var t;return(null==(t=null==window?void 0:window.device_id)?void 0:t.version)||""},modelArch:()=>{var t;return(null==(t=null==window?void 0:window.device_id)?void 0:t.arch)||""},getIframeURL:()=>"https://www.kooldns.cn/bind",getTagValue:t=>R[t]?R[t]:t}),B=r({},Z);const K={setup:()=>({menus:g([{to:"/installed",name:"已安装"},{to:"/store",name:"全部软件"},{to:"/upload",name:"手动安装"},{to:"/logs",name:"运行日志"},{to:"/webapps",name:"远程应用"}])})};v("data-v-1c7e3500");const G={class:"tabs menus"},q=["href","onClick"],N=C("div",{class:"auto"},null,-1);m(),K.render=function(t,e,n,a,o,s){const l=f("router-link");return u(),d("ul",G,[(u(!0),d(h,null,b(a.menus,(t=>(u(),w(l,{to:t.to,custom:"",key:t.to},{default:y((({href:e,navigate:n,isActive:a})=>[C("li",{class:A(a&&"active")},[C("a",{href:e,onClick:n},S(t.name),9,q)],2)])),_:2},1032,["to"])))),128)),N])},K.__scopeId="data-v-1c7e3500";const Y=k.create({});Y.interceptors.request.use((t=>(null==t.params&&(t.params={}),t.params=i(r({},t.params),{token:B.getToken(),_t:B.UnixDate()}),t)),(t=>t)),Y.interceptors.response.use((t=>t),(t=>t));const H=k.create({baseURL:"https://istore.linkease.com"});H.interceptors.request.use((t=>(null==t.params&&(t.params={}),t.params=i(r({},t.params),{modelArch:B.modelArch(),deviceId:B.getDeviceId(),_t:B.UnixDate()}),t)),(t=>t)),H.interceptors.response.use((t=>t));var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",getInstalledApp:()=>new Promise(((t,e)=>c(this,null,(function*(){try{const n=yield Y({method:"GET",url:"/cgi-bin/luci/admin/store/installed"});return 200==n.status?void t(n.data):void e(n.status)}catch(n){return void e(n)}})))),installApp:t=>new Promise(((e,n)=>c(this,null,(function*(){try{const a=yield Y({method:"POST",url:"/cgi-bin/luci/admin/store/install",params:{package:t}});return 200==a.status?void e(a.data):void n(a.status)}catch(a){return void n(a)}})))),upgradeApp:t=>new Promise(((e,n)=>c(this,null,(function*(){try{const a=yield Y({method:"POST",url:"/cgi-bin/luci/admin/store/upgrade",params:{package:t}});return 200==a.status?void e(a.data):void n(a.status)}catch(a){return void n(a)}})))),removeApp:t=>new Promise(((e,n)=>c(this,null,(function*(){try{const a=yield Y({method:"POST",url:"/cgi-bin/luci/admin/store/remove",params:{package:t}});return 200==a.status?void e(a.data):void n(a.status)}catch(a){return void n(a)}})))),updateAppStore:()=>new Promise(((t,e)=>c(this,null,(function*(){try{const n=yield Y({method:"POST",url:"/cgi-bin/luci/admin/store/update"});return 200==n.status?void t(n.data):void e(n.status)}catch(n){return void e(n)}})))),getAppStatus:t=>new Promise(((e,n)=>c(this,null,(function*(){try{const a=yield Y({method:"GET",url:"/cgi-bin/luci/admin/store/status",params:{package:t}});return 200==a.status?void e(a.data):void n(a.status)}catch(a){return void n(a)}})))),getLog:()=>new Promise(((t,e)=>c(this,null,(function*(){try{const n=yield Y({method:"GET",url:"/cgi-bin/luci/admin/store/log"});return 200==n.status?void t(n.data):void e(n.status)}catch(n){return void e(n)}})))),uploadAppIPK:t=>new Promise(((e,n)=>c(this,null,(function*(){try{const n=yield Y({method:"POST",url:"/cgi-bin/luci/admin/store/upload",headers:{"Content-Type":"multipart/form-data"},data:t});if(n.data)return void e(n.data)}catch(a){return void n(a)}n("not found soft")}))))});var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",getStoreAppList:t=>new Promise(((e,n)=>c(this,null,(function*(){var a,o,s,l;try{const r=yield H({method:"GET",url:"/api/store/list",params:t});if(0===(null==(a=null==r?void 0:r.data)?void 0:a.success))return void e(null==(o=null==r?void 0:r.data)?void 0:o.result);if(null==(s=null==r?void 0:r.data)?void 0:s.message)return void n(null==(l=null==r?void 0:r.data)?void 0:l.message);n("error")}catch(r){return console.log(r),void n(r)}})))),getStoreAppIcon:t=>`https://istore.linkease.com${t}`,getStoreTags:()=>new Promise(((t,e)=>c(this,null,(function*(){var n,a,o,s;try{const l=yield H({method:"GET",url:"/api/store/tags"});if(0===(null==(n=null==l?void 0:l.data)?void 0:n.success))return void t(null==(a=null==l?void 0:l.data)?void 0:a.result);if(null==(o=null==l?void 0:l.data)?void 0:o.message)return void e(null==(s=null==l?void 0:l.data)?void 0:s.message);e("error")}catch(l){return void e(l)}})))),getAppExpandData:t=>new Promise(((e,n)=>{H({method:"POST",url:"/api/store/expand",data:{appsId:t||[],deviceId:B.getDeviceId()}}).then((t=>{var a,o,s;0==(null==(a=t.data)?void 0:a.success)&&(null==(o=t.data)?void 0:o.result)?e(null==(s=t.data)?void 0:s.result):n("not found expand")})).catch((t=>{n(t)}))})),increasingDownloadCount:t=>{H({method:"POST",url:"/api/store/download",data:{appId:t,deviceId:B.getDeviceId()}}).then((t=>{var e;null==(e=t.data)||e.success}))},postStarApp:t=>new Promise(((e,n)=>{H({method:"POST",url:"/api/store/star",data:{appId:t,deviceId:B.getDeviceId()}}).then((t=>{var a;0!=(null==(a=t.data)?void 0:a.success)?n("not found expand"):e(t.data)})).catch((t=>{n(t)}))}))}),Q=r(r({},J),W);const X={setup(){const t=x(),e=_((()=>t.state.log.action)),n=_((()=>t.state.log.content)),a=_((()=>t.state.log.end)),o=_((()=>t.state.log.exitCode)),s=g(!1),l=g(null);let r="",i=g(""),c=g("."),d="",u="";switch(e.value){case"install":r="正在安装插件",d="安装完成,请关闭当前窗口",u="安装失败,错误码";break;case"uninstall":r="正在卸载插件",d="卸载成功,请关闭当前窗口",u="卸载失败,错误码";break;case"upgrade":r="正在更新插件",d="更新成功,请关闭当前窗口",u="更新失败,错误码";break;case"upload":r="正在上传插件",d="离线安装成功,请关闭当前窗口",u="离线安装失败,错误码"}L((()=>{document.body.setAttribute("lock-scroll",!0),p()})),T((()=>{document.body.removeAttribute("lock-scroll")}));const p=()=>{setTimeout((()=>{a.value?v():Q.getLog().then((t=>{if(a.value)return void v();null==t||t.code;const e=null==t?void 0:t.stdout,n=null==t?void 0:t.stderr;var o;(e||n)&&(i.value=`${e}${n}`),c.value=`${c.value}.`,(null==(o=l.value)?void 0:o.scrollHeight)&&(l.value.scrollTop=l.value.scrollHeight),p()})).catch((t=>{i.value=`${t}`,p()}))}),500)},v=()=>{s.value=!0};return{logText:_((()=>s.value?void 0!==o.value&&0!==o.value?`${r}\n${n.value}\n${u} ${o.value}\n`:`${r}\n${n.value}\n${d}\n`:`${r}\n${c.value}\n${i.value}\n${n.value}\n`)),Close:()=>{location.reload()},disabled:s,textDom:l}},mounted(){this.$nextTick((()=>{const t=document.querySelector("body");t.append?t.append(this.$el):t.appendChild(this.$el)}))}};v("data-v-735db9cc");const tt={class:"software-log_shade"},et=C("div",{class:"software-log_shade__bg"},null,-1),nt={class:"software-log_shade__pannel"},at=C("div",{class:"software-log_shade__pannel-title"}," 软件中心 - 日志记录 ",-1),ot=C("div",{class:"software-log_shade__pannel-now"},[C("i",null,"    插件安装/卸载过程中请勿刷新此页面！")],-1),st={class:"software-log_shade__pannel-content"},lt=["value"],rt={key:0,class:"software-log_shade__pannel-btn"};m(),X.render=function(t,e,n,a,o,s){return u(),d("div",tt,[et,C("div",nt,[at,ot,C("div",st,[C("textarea",{ref:"textDom",cols:"63",rows:"26",wrap:"on",readonly:"readonly",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",value:a.logText},null,8,lt)]),a.disabled?(u(),d("div",rt,[C("button",{class:"close",onClick:e[0]||(e[0]=t=>a.Close())}," 关闭 ")])):I("",!0)])])},X.__scopeId="data-v-735db9cc";const it={components:{AnnouncementComponent:V,TabsComponent:K,LogComponent:X},setup(){const t=x();t.dispatch("getData");return{logStatus:_((()=>t.state.log.status))}}};it.render=function(t,e,n,a,o,s){const l=f("TabsComponent"),r=f("router-view"),i=f("LogComponent");return u(),d(h,null,[E(l),E(r),a.logStatus?(u(),w(i,{key:0})):I("",!0)],64)};const ct={props:{content:String,type:String,Close:Function},setup(t){const e=g(t.content);return setTimeout((()=>{t.Close()}),2e3),{msg:e}}};v("data-v-c6cc38e4");const dt={class:"loading"},ut={class:"msg"};m(),ct.render=function(t,e,n,a,o,s){return u(),d("div",dt,[C("div",ut,S(a.msg),1)])},ct.__scopeId="data-v-c6cc38e4";const pt={props:{content:String,Close:Function},setup:t=>({message:t.content})};v("data-v-368ec85a");const vt={class:"loading"},mt=C("div",{class:"icon"},null,-1),gt={class:"msg"};m(),pt.render=function(t,e,n,a,o,s){return u(),d("div",vt,[mt,C("div",gt,S(a.message),1)])},pt.__scopeId="data-v-368ec85a";var ft={props:{content:"",Close:()=>{}},Start(t){this.props={content:t||"加载中...",Close:()=>{e.unmount(n),document.body.removeChild(n)}};let e=P(pt,this.props),n=document.createElement("div");document.body.append(n),e.mount(n),$((()=>{this.props.Close()}))},Stop(){this.props.Close()}},ht=D({state:{},mutations:{},modules:{apps:{namespaced:!0,state:{Load:!1,LocalApps:[],StoreApps:[],Expand:{},Cur:{tag:"default",sort:"default",search:"",limit:30,offset:0},LocalAppsMap:{}},mutations:{setExpand(t,e){t.Expand=e},setLocalApps(t,e){t.LocalApps=e||[],e.forEach((e=>{t.LocalAppsMap[e.name]=e}))},setStoreApps(t,e){t.StoreApps=e||[]},setCur(t,e){for(const n in e)Object.hasOwnProperty.call(e,n)&&(t.Cur[n]=e[n])}},getters:{Cur:t=>t.Cur,LocalApps(t){let e=[...t.LocalApps],n=t.Expand;for(let a=0;a<e.length;a++){let t=e[a].name;n[t]&&(e[a].expand=n[t])}return e},StoreApps(t){var e,n,a,o,s,l,r,i;let c=[...t.StoreApps],d=t.Expand;for(let m=0;m<c.length;m++){let e=c[m].name;d[e]&&(c[m].expand=d[e]),t.LocalAppsMap[e]&&(c[m].installed=!0,c[m].lastVersion=c[m].version,c[m].lastRelease=c[m].release,c[m].curVersion=t.LocalAppsMap[e].version,c[m].curRelease=t.LocalAppsMap[e].release)}let u=t.Cur.tag;if("default"!=u){let t=[];c.forEach((e=>{e.tags&&e.tags.forEach((n=>{n==u&&t.push(e)}))})),c=t}let p=t.Cur.search;if(p){let t=[];c.forEach((e=>{let n=JSON.stringify(e);new RegExp(p,"i").test(n)&&t.push(e)})),c=t}let v=c.length;switch(t.Cur.sort){case"download":for(let t=0;t<v-1;t++)for(let s=0;s<v-1-t;s++){if(((null==(n=null==(e=c[s])?void 0:e.expand)?void 0:n.downloadCount)||0)<((null==(o=null==(a=c[s+1])?void 0:a.expand)?void 0:o.downloadCount)||0)){let t=c[s];c[s]=c[s+1],c[s+1]=t}}break;case"star":for(let t=0;t<v-1;t++)for(let e=0;e<v-1-t;e++){if(((null==(l=null==(s=c[e])?void 0:s.expand)?void 0:l.starCount)||0)<((null==(i=null==(r=c[e+1])?void 0:r.expand)?void 0:i.starCount)||0)){let t=c[e];c[e]=c[e+1],c[e+1]=t}}}return c}},actions:{incrAppDownload(t,e){const{state:n}=t;n.Expand[null==e?void 0:e.name]&&n.Expand[null==e?void 0:e.name].downloadCount++},incrAppStar(t,e){const{state:n}=t;(null==n?void 0:n.Expand[null==e?void 0:e.name])&&(n.Expand[null==e?void 0:e.name].starCount++,n.Expand[null==e?void 0:e.name].isStar=!0)},filterCurApps(t,e){const{commit:n,dispatch:a}=t;n("setCur",e)},getApps(t){const{state:e,dispatch:n}=t;n("getLocalApps"),n("getStoreApps",e.Cur)},getLocalApps(t){const{commit:e}=t;Q.getInstalledApp().then((t=>{t.forEach((t=>{t.installed=!0})),e("setLocalApps",t)}))},getStoreApps(t,e){const{state:n,commit:a,dispatch:o}=t;let s=[];Q.getStoreAppList(e).then((t=>{t.apps&&(t.apps.forEach((t=>{s.push(t.name)})),o("getStoreAppsExpand",s),a("setStoreApps",t.apps)),n.Load=!0})).catch((t=>{console.log(t)}))},getStoreAppsExpand(t,e){const{commit:n}=t;Q.getAppExpandData(e).then((t=>{t&&n("setExpand",t)}))}}},tags:{namespaced:!0,state:{Tags:[],Total:0},mutations:{},getters:{Tags:t=>t.Tags,Total:t=>t.Total},actions:{getTags(t){const{state:e,commit:n}=t;Q.getStoreTags().then((t=>{e.Tags=(null==t?void 0:t.tags)||[],e.Total=(null==t?void 0:t.total)||0}))}}},log:{namespaced:!0,state:{status:!1,action:"install",content:"",end:!1,exitCode:void 0},mutations:{setStatus(t,e){t.status=e.status,t.action=(null==e?void 0:e.action)||"install",t.content=(null==e?void 0:e.content)||"",t.end=(null==e?void 0:e.end)||!1,t.exitCode=void 0},setContent(t,e){t.content=e},setEnd(t,e){t.end=!0,t.exitCode=e}},getters:{},actions:{}}},actions:{getData(t){const{dispatch:e}=t;e("tags/getTags"),e("apps/getApps")}}}),bt={Start(t,e){ht.commit("log/setStatus",{status:!0,action:t,content:""})},Stop(){ht.commit("log/setStatus",{status:!1,action:"install",content:""})},Add(t){ht.commit("log/setContent",t)},End(t){ht.commit("log/setEnd",t)}};const Ct={props:{col:{type:Object,default:()=>({description:"",tags:[],entry:"",author:"",depends:[],installed:!1,hasupdate:!1,title:"",time:"",release:1,website:"",name:"",version:""})}},setup(t,e){const n=_((()=>t.col)),a=x(),o=B.formatDate,s=B.numberToSum,l=t=>{t.then((t=>{let e=t.stdout,n=t.stderr;bt.Add(`${e}\n${n}`),bt.End(t.code)})).catch((t=>{bt.Add(t),bt.End(500)}))},r=B.getTagValue;return{col:n,formatDate:o,numberToSum:s,upgrade:t=>{bt.Start("upgrade"),l(Q.upgradeApp(t))},install:t=>{bt.Start("install"),Q.increasingDownloadCount(t),a.dispatch("apps/incrAppDownload",{name:t}),l(Q.installApp(t))},getAppIcon:t=>n.value.installed?`/luci-static/resources/app-icons/${t}.png`:n.value.icon?Q.getStoreAppIcon(n.value.icon):`/luci-static/resources/app-icons/${t}.png`,uninstall:t=>{confirm(`确定要卸载 ${t} 吗?`)&&(bt.Start("uninstall"),l(Q.removeApp(t)))},StarApp:t=>c(this,null,(function*(){ft.Start();try{(yield Q.postStarApp(t))&&a.dispatch("apps/incrAppStar",{name:t})}catch(e){}ft.Stop()})),StarApped:()=>{(t=>{let e={content:"",type:"",Close:()=>{a.unmount(n),document.body.removeChild(n)}};null!=t&&("object"==typeof t?(e.content=(null==t?void 0:t.content)||"",e.type=(null==t?void 0:t.type)||""):e.content=t);let n=document.createElement("div"),a=P(ct,e);document.body.append(n),a.mount(n),$((()=>{a.unmount(n),document.body.removeChild(n)}))})("您已经点赞过啦～")},getTagValue:r}}};v("data-v-c8e71562");const wt={class:"app-container"},yt={class:"app-info"},St={class:"app-f"},At={class:"app-icon"},kt=["src"],xt={class:"app-tags"},_t={class:"tag"},Lt=C("span",{class:"block"},"｜",-1),Tt={class:"app-r"},It=["title"],Et={class:"app-name"},Pt={class:"app-version"},$t={class:"app-as"},Dt=C("span",{style:{margin:"0 10px"}},"|",-1),Ot=["title"],Ft={class:"app-author"},Mt={class:"app-date"},jt={class:"app-btns"},Ut=["href"],Vt=C("div",{class:"auto"},null,-1),zt=["href"],Rt=C("div",{class:"app-margin-left"},null,-1);m(),Ct.render=function(t,e,n,a,o,s){var l,r,i,c,p,v,m,g,w,y,A;const k=f("svg-star-off"),x=f("svg-star-on");return u(),d("div",wt,[C("div",yt,[C("div",St,[C("div",At,[C("img",{alt:"图标出走啦",src:a.getAppIcon(a.col.name)},null,8,kt)]),C("div",xt,[(u(!0),d(h,null,b(a.col.tags,(t=>(u(),d(h,{key:t},[C("div",_t,[C("span",null,S(a.getTagValue(t)),1)]),Lt],64)))),128))])]),C("div",Tt,[C("div",{class:"app-title",title:a.col.name},[C("span",Et,S(a.col.title),1),C("span",Pt,"v"+S(a.col.version),1)],8,It),C("div",$t,[C("span",null,S(a.numberToSum(null==(r=null==(l=a.col)?void 0:l.expand)?void 0:r.downloadCount))+" 次下载",1),Dt,C("span",null,S(a.numberToSum(null==(c=null==(i=a.col)?void 0:i.expand)?void 0:c.starCount))+" 次点赞",1),null!=(null==(p=a.col)?void 0:p.expand)?(u(),d(h,{key:0},[(null==(m=null==(v=a.col)?void 0:v.expand)?void 0:m.isStar)?(u(),d("button",{key:0,class:"star",title:"已点赞",onClick:e[0]||(e[0]=t=>a.StarApped())},[E(k)])):(u(),d("button",{key:1,class:"star",title:"点赞",onClick:e[1]||(e[1]=t=>a.StarApp(a.col.name))},[E(x)]))],64)):I("",!0)]),C("div",{class:"app-description cbi-value-description",title:a.col.description},[C("span",null,S(a.col.description||"暂无描述"),1)],8,Ot),C("div",Ft,[C("span",null,"作者:"+S(a.col.author||"暂无"),1)]),C("div",Mt,[C("span",null,"更新日期:"+S(a.formatDate(1e3*a.col.time)||"暂无"),1)])])]),C("div",jt,[a.col.website?(u(),d("a",{key:0,class:"app-btn cbi-button cbi-button-apply",target:"_blank",href:a.col.website},"官网",8,Ut)):I("",!0),Vt,a.col.installed?(u(),d(h,{key:1},[(null==(g=a.col)?void 0:g.curVersion)!=(null==(w=a.col)?void 0:w.lastVersion)||(null==(y=a.col)?void 0:y.curRelease)!=(null==(A=a.col)?void 0:A.lastRelease)?(u(),d("a",{key:0,class:"app-btn cbi-button cbi-button-reload",onClick:e[2]||(e[2]=t=>a.upgrade(a.col.name))},"更新")):I("",!0),a.col.entry?(u(),d("a",{key:1,class:"app-btn cbi-button cbi-button-apply",href:a.col.entry},"打开",8,zt)):I("",!0),Rt,C("a",{class:"app-btn cbi-button cbi-button-remove",onClick:e[3]||(e[3]=t=>a.uninstall(a.col.name))},"卸载")],64)):(u(),d("a",{key:2,class:"app-btn cbi-button cbi-button-add",onClick:e[4]||(e[4]=t=>a.install(a.col.name))},"安装"))])])},Ct.__scopeId="data-v-c8e71562";const Zt={components:{AppComponent:Ct},setup(){const t=x();return{apps:_((()=>t.getters["apps/LocalApps"]))}}};v("data-v-708cb351");const Bt={class:"cbi-section"},Kt={class:"containers"};m(),Zt.render=function(t,e,n,a,o,s){const l=f("AppComponent");return u(),d("fieldset",Bt,[C("div",Kt,[(u(!0),d(h,null,b(a.apps,(t=>(u(),w(l,{key:t.name,col:t},null,8,["col"])))),128))])])},Zt.__scopeId="data-v-708cb351";const Gt={setup(){const t=g("default"),e=x(),n=g([{key:"默认",value:"default"},{key:"按下载数",value:"download"},{key:"按评分",value:"star"}]);return{selectSort:n=>{t.value=n,e.dispatch("apps/filterCurApps",{sort:n})},curSort:t,sorts:n}}};v("data-v-e8823026");const qt={class:"sort-container"},Nt=C("div",{class:"sort-title"},"排序:",-1),Yt={class:"sort-value"},Ht=["value","onClick"];m(),Gt.render=function(t,e,n,a,o,s){return u(),d("div",qt,[Nt,C("div",Yt,[(u(!0),d(h,null,b(a.sorts,(t=>(u(),d("input",{key:t.value,class:A(["cbi-button",{"cbi-button-apply":a.curSort==t.value}]),type:"button",value:t.key,onClick:e=>a.selectSort(t.value)},null,10,Ht)))),128))])])},Gt.__scopeId="data-v-e8823026";const Jt={setup(){const t=g("default"),e=x(),n=_((()=>e.getters["tags/Tags"])),a=B.getTagValue;return{tags:n,curTag:t,selectTag:n=>{t.value=n,e.dispatch("apps/filterCurApps",{tag:n})},getTagValue:a}}};v("data-v-5b43124a");const Wt={class:"tags-container"},Qt=C("div",{class:"tags-title"}," 标签: ",-1),Xt={class:"tags-value"},te=["value","onClick"];m(),Jt.render=function(t,e,n,a,o,s){return u(),d("div",Wt,[Qt,C("div",Xt,[C("input",{class:A(["cbi-button",{"cbi-button-apply":"default"==a.curTag}]),type:"button",value:"默认",onClick:e[0]||(e[0]=t=>a.selectTag("default"))},null,2),(u(!0),d(h,null,b(a.tags,(t=>(u(),d("input",{key:t,class:A(["cbi-button",{"cbi-button-apply":a.curTag==t}]),type:"button",value:a.getTagValue(t),onClick:e=>a.selectTag(t)},null,10,te)))),128))])])},Jt.__scopeId="data-v-5b43124a";const ee={setup(){const t=g(""),e=x();return{searchKey:t,submitSearch:()=>{e.dispatch("apps/filterCurApps",{search:t.value})}}}};ee.render=function(t,e,n,a,o,s){const l=f("svg-search");return u(),d("form",{class:"search",onSubmit:e[1]||(e[1]=M(((...t)=>a.submitSearch&&a.submitSearch(...t)),["prevent"]))},[C("button",null,[E(l)]),O(C("input",{type:"text",placeholder:"请输入搜索关键词","onUpdate:modelValue":e[0]||(e[0]=t=>a.searchKey=t)},null,512),[[F,a.searchKey,void 0,{trim:!0}]])],32)},ee.__scopeId="data-v-29470523";const ne={components:{AppComponent:Ct},setup(t){const e=x();return{apps:_((()=>e.getters["apps/StoreApps"])),load:_((()=>e.state.apps.Load))}}};v("data-v-7dcdd37e");const ae={class:"containers"},oe={key:1,style:{margin:"10px 0","text-align":"center",width:"100%"}};m(),ne.render=function(t,e,n,a,o,s){const l=f("AppComponent");return u(),d("div",ae,[a.load?(u(!0),d(h,{key:0},b(a.apps,(t=>(u(),w(l,{key:t.name,col:t},null,8,["col"])))),128)):(u(),d("span",oe,"正在努力的获取数据..."))])},ne.__scopeId="data-v-7dcdd37e";const se={name:"Store",components:{SortComponent:Gt,TagComponent:Jt,SearchComponent:ee,AppsComponent:ne},setup(){}};v("data-v-603a8f16");const le={class:"cbi-section"};m(),se.render=function(t,e,n,a,o,s){const l=f("SearchComponent"),r=f("TagComponent"),i=f("SortComponent"),c=f("AppsComponent");return u(),d("fieldset",le,[E(l),E(r),E(i),E(c)])},se.__scopeId="data-v-603a8f16";const re={setup(){const t=g(null),e=t=>{let e=new FormData;e.append(t.name,t),bt.Start("upload"),Q.uploadAppIPK(e).then((t=>{let e=t.stdout,n=t.stderr;bt.Add(`${e}\n${n}`),bt.End(t.code)})).catch((t=>{bt.Add(t),bt.End(500)}))};return{file:t,uploadFile:t=>{const n=t.target.files;if(n&&n.length>0){const t=n[0];e(t)}else;},sumbitUpload:e}}};v("data-v-483c9a1e");const ie={class:"cbi-section"},ce=C("div",{class:"container_msg cbi-map-descr"},[C("span",null,"离线安装"),C("span",null," · 通过本页，你可以上传插件包来安装插件；"),C("span",null," · 离线安装可用的 ipk 插件")],-1),de={class:"flex"},ue={class:"upload-file"},pe=C("div",{class:"button"},"选择文件",-1),ve=C("div",{class:"auto"},null,-1);m(),re.render=function(t,e,n,a,o,s){var l;return u(),d("fieldset",ie,[ce,C("form",{onSubmit:e[1]||(e[1]=M(((...t)=>a.sumbitUpload&&a.sumbitUpload(...t)),["prevent"]))},[C("div",de,[C("label",ue,[C("span",null,S((null==(l=a.file)?void 0:l.name)||"未选择任何文件"),1),C("input",{type:"file",name:"file",accept:".ipk,.run",hidden:"",onChange:e[0]||(e[0]=(...t)=>a.uploadFile&&a.uploadFile(...t))},null,32),pe]),ve])],32)])},re.__scopeId="data-v-483c9a1e";const me={setup(){x();const t=_((()=>"")),e=_((()=>"")),n=_((()=>`${B.getIframeURL()}/#/apps?token=${e.value}&deviceId=${t.value}`));return{token:e,deviceId:t,iframeUrl:n}}};v("data-v-19ff0ff6");const ge={class:"cbi-section"},fe={class:"webapp-container"},he=["src"];m(),me.render=function(t,e,n,a,o,s){return u(),d("fieldset",ge,[C("div",fe,[C("iframe",{src:a.iframeUrl,sandbox:"allow-scripts allow-same-origin allow-popups",seamless:""},null,8,he)])])},me.__scopeId="data-v-19ff0ff6";const be={setup(){const t=g(""),e=()=>{Q.getLog().then((n=>{if(0==n.code)switch(""==n.stdout&&""==n.stderr?t.value="暂无日志":t.value=`${t.value}\n${n.stdout}\n${n.stderr}`,n.code){case 0:break;case 206:e()}}))};return e(),{logContent:t}}};v("data-v-6bb75899");const Ce={class:"cbi-section"},we={class:"log-containers"},ye=["value"];m(),be.render=function(t,e,n,a,o,s){return u(),d("fieldset",Ce,[C("div",we,[C("textarea",{id:"syslog",cols:"63",rows:"32",wrap:"on",readonly:"readonly",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",value:a.logContent},null,8,ye)])])},be.__scopeId="data-v-6bb75899";const Se=j({history:U(B.BasePage()),routes:[{path:"/",redirect:"/installed"},{path:"/installed",name:"Installed",component:Zt},{path:"/store",name:"Store",component:se},{path:"/upload",name:"Upload",component:re},{path:"/webapps",name:"Webapps",component:me},{path:"/logs",name:"Logs",component:be},{path:"/:pathMatch(.*)*",name:"notfound",redirect:"/"}]}),Ae={},ke={width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},xe=[C("path",{d:"M14.9234958,14.5525054 L10.84453,10.4679606 C11.8849284,9.46327833 12.5294813,8.07823887 12.5294813,6.55073066 C12.5294813,3.48989918 9.94358337,1 6.76474066,1 C3.58589795,1 1,3.48989918 1,6.55073066 C1,9.61156213 3.58589795,12.1014613 6.76474066,12.1014613 C8.16008242,12.1014613 9.44067838,11.621191 10.438802,10.8242646 L14.5276502,14.9188536 C14.5814545,14.9730393 14.6533765,15 14.725573,15 C14.7942009,15 14.8625542,14.9754182 14.9158095,14.9262546 C15.025065,14.8250198 15.0283592,14.6577049 14.9234958,14.5525054 Z M6.76474066,11.5728203 C3.8886841,11.5728203 1.54902292,9.32001661 1.54902292,6.55073066 C1.54902292,3.7814447 3.8886841,1.52864101 6.76474066,1.52864101 C9.64079723,1.52864101 11.9804584,3.7814447 11.9804584,6.55073066 C11.9804584,9.32001661 9.64052272,11.5728203 6.76474066,11.5728203 Z",id:"Shape",stroke:"#FFFFFF","stroke-width":"1.3"},null,-1)];Ae.render=function(t,e,n,a,o,s){return u(),d("svg",ke,xe)};const _e={},Le={width:"12px",height:"12px",viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Te=[C("path",{d:"M10.171916,3.81818329 C10.6519813,3.81274681 11.1102149,4.01840688 11.4252438,4.38069009 C11.7402726,4.74297329 11.8803105,5.2253253 11.8081406,5.70080197 L11.0555552,10.608963 C10.9332063,11.4157454 10.2351606,12.0090843 9.42537185,12 L3.27269856,12 C2.97145497,12 2.7272488,11.7556885 2.7272488,11.454445 L2.7272488,5.4544976 C2.7272488,5.37817917 2.74326442,5.30271013 2.77426027,5.23296947 L4.95605931,0.323921631 C5.04360472,0.126944443 5.23894201,0 5.4544976,0 C6.65947193,0 7.63629663,0.976824702 7.63629663,2.18179904 L7.63629663,3.81815451 L10.171916,3.81818329 Z M3.81814832,10.9090654 L9.43153778,10.9090654 C9.70352269,10.9121048 9.93620458,10.7143252 9.97712277,10.4445109 L10.7297188,5.53628009 C10.7537339,5.3780602 10.7070546,5.2172762 10.602045,5.09651513 C10.4970353,4.97575406 10.3442908,4.9072007 10.1780925,4.90904784 L7.09084687,4.90904784 C6.78960329,4.90904784 6.54539711,4.66484166 6.54539711,4.36359808 L6.54539711,2.18179904 C6.54539711,1.69494967 6.22647822,1.2825878 5.78615711,1.14223013 L3.81814832,5.57024992 L3.81814832,10.9090654 Z M2.7272488,5.99994736 L1.63634928,5.99994736 C1.33510569,5.99994736 1.09089952,6.24415353 1.09089952,6.54539711 L1.09089952,10.3635454 C1.09089952,10.664789 1.33510569,10.9089952 1.63634928,10.9089952 L2.7272488,10.9089952 L2.7272488,5.99994736 Z M3.27269856,11.9998947 L1.63634928,11.9998947 C0.732618527,11.9998947 -1.03028697e-13,11.2672762 -1.03028697e-13,10.3635454 L-1.03028697e-13,6.54539711 C-1.03028697e-13,5.64166636 0.732618527,4.90904784 1.63634928,4.90904784 L3.27269856,4.90904784 C3.57394214,4.90904784 3.81814832,5.15325401 3.81814832,5.4544976 L3.81814832,11.454445 C3.81814832,11.7556885 3.57394214,11.9998947 3.27269856,11.9998947 Z",id:"Shape",fill:"#FFFFFF","fill-rule":"nonzero"},null,-1)];_e.render=function(t,e,n,a,o,s){return u(),d("svg",Le,Te)};const Ie={},Ee={width:"12px",height:"12px",viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Pe=[C("path",{d:"M10.171916,3.81818329 C10.6519813,3.81274681 11.1102149,4.01840688 11.4252438,4.38069009 C11.7402726,4.74297329 11.8803105,5.2253253 11.8081406,5.70080197 L11.0555552,10.608963 C10.9332063,11.4157454 10.2351606,12.0090843 9.42537185,12 L3.27269856,12 C2.97145497,12 2.7272488,11.7556885 2.7272488,11.454445 L2.7272488,5.4544976 C2.7272488,5.37817917 2.74326442,5.30271013 2.77426027,5.23296947 L4.95605931,0.323921631 C5.04360472,0.126944443 5.23894201,0 5.4544976,0 C6.65947193,0 7.63629663,0.976824702 7.63629663,2.18179904 L7.63629663,3.81815451 L10.171916,3.81818329 Z M3.27269856,11.9998947 L1.63634928,11.9998947 C0.732618527,11.9998947 0,11.2672762 0,10.3635454 L0,6.54539711 C0,5.64166636 0.732618527,4.90904784 1.63634928,4.90904784 L3.27269856,4.90904784 C3.57394214,4.90904784 3.81814832,5.15325401 3.81814832,5.4544976 L3.81814832,11.454445 C3.81814832,11.7556885 3.57394214,11.9998947 3.27269856,11.9998947 Z",id:"Shape",fill:"#FFE45A","fill-rule":"nonzero"},null,-1)];Ie.render=function(t,e,n,a,o,s){return u(),d("svg",Ee,Pe)};const $e=P(it);$e.component("svg-search",Ae),$e.component("svg-star-on",_e),$e.component("svg-star-off",Ie),$e.use(Se).use(ht),$e.mount("#app");
