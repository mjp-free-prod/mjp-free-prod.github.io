import{r as g,am as O,an as k,ao as S,m as v,ae as A,ap as B,q as R,aq as T,ar as j,ag as m,as as L,at as q,au as I,aj as F}from"./entry.9b45c852.js";import{u as C,h as D}from"./preview.2cc55f2e.js";const M=()=>null;function V(...t){const n=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(n);let[r,i,a={}]=t;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??M,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const s=B(),e=()=>s.isHydrating?s.payload.data[r]:s.static.data[r],c=()=>e()!==void 0;s._asyncData[r]||(s._asyncData[r]={data:g(e()??a.default()),pending:g(!c()),error:O(s.payload._errors,r),status:g("idle")});const o={...s._asyncData[r]};o.refresh=o.execute=(f={})=>{if(s._asyncDataPromises[r]){if(f.dedupe===!1)return s._asyncDataPromises[r];s._asyncDataPromises[r].cancelled=!0}if((f._initial||s.isHydrating&&f._initial!==!1)&&c())return e();o.pending.value=!0,o.status.value="pending";const h=new Promise((u,d)=>{try{u(i(s))}catch(E){d(E)}}).then(u=>{if(h.cancelled)return s._asyncDataPromises[r];let d=u;a.transform&&(d=a.transform(u)),a.pick&&(d=Q(d,a.pick)),o.data.value=d,o.error.value=null,o.status.value="success"}).catch(u=>{if(h.cancelled)return s._asyncDataPromises[r];o.error.value=u,o.data.value=R(a.default()),o.status.value="error"}).finally(()=>{h.cancelled||(o.pending.value=!1,s.payload.data[r]=o.data.value,o.error.value&&(s.payload._errors[r]=T(o.error.value)),delete s._asyncDataPromises[r])});return s._asyncDataPromises[r]=h,s._asyncDataPromises[r]};const p=()=>o.refresh({_initial:!0}),_=a.server!==!1&&s.payload.serverRendered;{const f=k();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const u=f._nuxtOnBeforeMountCbs;f&&(S(()=>{u.forEach(d=>{d()}),u.splice(0,u.length)}),v(()=>u.splice(0,u.length)))}_&&s.isHydrating&&c()?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(s.payload.serverRendered&&s.isHydrating||a.lazy)&&a.immediate?f._nuxtOnBeforeMountCbs.push(p):a.immediate&&p(),a.watch&&A(a.watch,()=>o.refresh());const h=s.hook("app:data:refresh",u=>{if(!u||u.includes(r))return o.refresh()});f&&v(h)}const y=Promise.resolve(s._asyncDataPromises[r]).then(()=>o);return Object.assign(y,o),y}function Q(t,n){const r={};for(const i of n)r[i]=t[i];return r}const P=(t,n)=>n.split(".").reduce((r,i)=>r&&r[i],t),w=(t,n)=>Object.keys(t).filter(n).reduce((r,i)=>Object.assign(r,{[i]:t[i]}),{}),X=t=>n=>t&&t.length?w(n,r=>!t.includes(r)):n,Y=t=>n=>Array.isArray(n)?n.map(r=>t(r)):t(n),x=t=>{const n=[],r=[];for(const i of t)["$","_"].includes(i)?n.push(i):r.push(i);return{prefixes:n,properties:r}},Z=(t=[])=>n=>{if(t.length===0||!n)return n;const{prefixes:r,properties:i}=x(t);return w(n,a=>!i.includes(a)&&!r.includes(a[0]))},ee=(t=[])=>n=>{if(t.length===0||!n)return n;const{prefixes:r,properties:i}=x(t);return w(n,a=>i.includes(a)||r.includes(a[0]))},te=(t,n)=>{const r=new Intl.Collator(n.$locale,{numeric:n.$numeric,caseFirst:n.$caseFirst,sensitivity:n.$sensitivity}),i=Object.keys(n).filter(a=>!a.startsWith("$"));for(const a of i)t=t.sort((s,e)=>{const c=[P(s,a),P(e,a)].map(o=>{if(o!==null)return o instanceof Date?o.toISOString():o});return n[a]===-1&&c.reverse(),r.compare(c[0],c[1])});return t},re=(t,n="Expected an array")=>{if(!Array.isArray(t))throw new TypeError(n)},l=t=>Array.isArray(t)?t:[void 0,null].includes(t)?[]:[t],H=["sort","where","only","without"];function U(t,n={}){const r={};for(const e of Object.keys(n.initialParams||{}))r[e]=H.includes(e)?l(n.initialParams[e]):n.initialParams[e];const i=(e,c=o=>o)=>(...o)=>(r[e]=c(...o),s),a=e=>{var c;return n.legacy?e!=null&&e.surround?e.surround:e&&(e!=null&&e.dirConfig&&(e.result={_path:(c=e.dirConfig)==null?void 0:c._path,...e.result,_dir:e.dirConfig}),e!=null&&e._path||Array.isArray(e)||!Object.prototype.hasOwnProperty.call(e,"result")?e:e==null?void 0:e.result):e},s={params:()=>({...r,...r.where?{where:[...l(r.where)]}:{},...r.sort?{sort:[...l(r.sort)]}:{}}),only:i("only",l),without:i("without",l),where:i("where",e=>[...l(r.where),...l(e)]),sort:i("sort",e=>[...l(r.sort),...l(e)]),limit:i("limit",e=>parseInt(String(e),10)),skip:i("skip",e=>parseInt(String(e),10)),find:()=>t(s).then(a),findOne:()=>t(i("first")(!0)).then(a),count:()=>t(i("count")(!0)).then(a),locale:e=>s.where({_locale:e}),withSurround:i("surround",(e,c)=>({query:e,...c})),withDirConfig:()=>i("dirConfig")(!0)};return n.legacy&&(s.findSurround=(e,c)=>s.withSurround(e,c).find().then(a)),s}function $(t){return JSON.stringify(t,z)}function z(t,n){return n instanceof RegExp?`--REGEX ${n.toString()}`:n}const K=t=>{let n=$(t);return n=typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n),n=n.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(n.match(/.{1,100}/g)||[]).join("/")},b=t=>j(t,m().public.content.api.baseURL),ne=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},N=()=>{const{experimental:t}=m().public.content;return t.clientDB?!0:C().isEnabled()},G=()=>async t=>{const{content:n}=m().public,r=t.params(),i=n.experimental.stripQueryParameters?b(`/query/${`${D(r)}.${n.integrity}`}/${K(r)}.json`):b(`/query/${D(r)}.${n.integrity}.json`);if(N())return(await F(()=>import("./client-db.656e19ea.js"),["./client-db.656e19ea.js","./entry.9b45c852.js","./entry.9224fc85.css","./index.288f722b.js","./preview.2cc55f2e.js"],import.meta.url).then(e=>e.useContentDatabase())).fetch(t);const a=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:$(r),previewToken:C().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};function ae(t,...n){const{content:r}=m().public,i=U(G(),{initialParams:typeof t!="string"?t:{},legacy:!0});let a;typeof t=="string"&&(a=L(q(t,...n)));const s=i.params;return i.params=()=>{var c,o,p;const e=s();return a&&(e.where=e.where||[],e.first&&(e.where||[]).length===0?e.where.push({_path:I(a)}):e.where.push({_path:new RegExp(`^${a.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=e.sort)!=null&&c.length||(e.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((p=(o=e.where)==null?void 0:o.find(y=>y._locale))!=null&&p._locale||(e.where=e.where||[],e.where.push({_locale:r.defaultLocale}))),e},i}export{V as a,re as b,l as c,te as d,K as e,Y as f,P as g,Z as h,ee as i,$ as j,U as k,X as o,ae as q,N as s,ne as u,b as w};
