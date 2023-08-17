import{ay as d,ab as b,P as y,l as C,_ as S}from"./entry.0bcdaafc.js";function h(o,t){return`https://cdn.jsdelivr.net/npm/primevue@3.15.0/resources/themes/${o}-${t}/theme.css`}const j=d("theme",{state:()=>({themeName:"vela",themeColor:"blue",link:"https://cdn.jsdelivr.net/npm/primevue@latest/resources/themes/vela-blue/theme.css"}),getters:{theme:o=>`${o.themeName}-${o.themeColor}`,isDarkMode:o=>o.themeName!=="saga"},actions:{setDark(){this.themeName="arya",this.link=h(this.themeName,this.themeColor)},setDim(){this.themeName="vela",this.link=h(this.themeName,this.themeColor)},setLight(){this.themeName="saga",this.link=h(this.themeName,this.themeColor)},setColor(o){this.themeColor=o,this.link=h(this.themeName,this.themeColor)}}}),a={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},v={silent:{level:-1},fatal:{level:a.fatal},error:{level:a.error},warn:{level:a.warn},log:{level:a.log},info:{level:a.info},success:{level:a.success},fail:{level:a.fail},ready:{level:a.info},start:{level:a.info},box:{level:a.info},debug:{level:a.debug},trace:{level:a.trace},verbose:{level:a.verbose}};function u(o){return o!==null&&typeof o=="object"}function g(o,t,e=".",r){if(!u(t))return g(o,{},e,r);const s=Object.assign({},t);for(const i in o){if(i==="__proto__"||i==="constructor")continue;const l=o[i];l!=null&&(r&&r(s,i,l,e)||(Array.isArray(l)&&Array.isArray(s[i])?s[i]=[...l,...s[i]]:u(l)&&u(s[i])?s[i]=g(l,s[i],(e?`${e}.`:"")+i.toString(),r):s[i]=l))}return s}function k(o){return(...t)=>t.reduce((e,r)=>g(e,r,"",o),{})}const N=k();function T(o){return Object.prototype.toString.call(o)==="[object Object]"}function F(o){return!(!T(o)||!o.message&&!o.args||o.stack)}let f=!1;const w=[];class n{constructor(t={}){const e=t.types||v;this.options=N({...t,defaults:{...t.defaults},level:m(t.level,e),reporters:[...t.reporters||[]]},{types:v,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(const r in e){const s={type:r,...this.options.defaults,...e[r]};this[r]=this._wrapLogFn(s),this[r].raw=this._wrapLogFn(s,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=m(t,this.options.types,this.options.level)}prompt(t,e){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,e)}create(t){const e=new n({...this.options,...t});return this._mockFn&&e.mockTypes(this._mockFn),e}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){const e=this.options.reporters.indexOf(t);if(e>=0)return this.options.reporters.splice(e,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(const t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(const t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,e){t&&(t.__write||(t.__write=t.write),t.write=r=>{this[e].raw(String(r).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){f=!0}resumeLogs(){f=!1;const t=w.splice(0);for(const e of t)e[0]._logFn(e[1],e[2])}mockTypes(t){const e=t||this.options.mockFn;if(this._mockFn=e,typeof e=="function")for(const r in this.options.types)this[r]=e(r,this.options.types[r])||this[r],this[r].raw=this[r]}_wrapLogFn(t,e){return(...r)=>{if(f){w.push([this,t,r,e]);return}return this._logFn(t,r,e)}}_logFn(t,e,r){if((t.level||0)>this.level)return!1;const s={date:new Date,args:[],...t,level:m(t.level,this.options.types)};!r&&e.length===1&&F(e[0])?Object.assign(s,e[0]):s.args=[...e],s.message&&(s.args.unshift(s.message),delete s.message),s.additional&&(Array.isArray(s.additional)||(s.additional=s.additional.split(`
`)),s.args.push(`
`+s.additional.join(`
`)),delete s.additional),s.type=typeof s.type=="string"?s.type.toLowerCase():"log",s.tag=typeof s.tag=="string"?s.tag:"";const i=(c=!1)=>{const p=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&p>0){const _=[...this._lastLog.object.args];p>1&&_.push(`(repeated ${p} times)`),this._log({...this._lastLog.object,args:_}),this._lastLog.count=1}c&&(this._lastLog.object=s,this._log(s))};clearTimeout(this._lastLog.timeout);const l=this._lastLog.time&&s.date?s.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=s.date,l<this.options.throttle)try{const c=JSON.stringify([s.type,s.tag,s.args]),p=this._lastLog.serialized===c;if(this._lastLog.serialized=c,p&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(i,this.options.throttle);return}}catch{}i(!0)}_log(t){for(const e of this.options.reporters)e.log(t,{options:this.options})}}function m(o,t={},e=3){return o===void 0?e:typeof o=="number"?o:t[o]&&t[o].level!==void 0?t[o].level:e}n.prototype.add=n.prototype.addReporter;n.prototype.remove=n.prototype.removeReporter;n.prototype.clear=n.prototype.removeReporter;n.prototype.withScope=n.prototype.withTag;n.prototype.mock=n.prototype.mockTypes;n.prototype.pause=n.prototype.pauseLogs;n.prototype.resume=n.prototype.resumeLogs;function A(o={}){return new n(o)}class ${constructor(t){this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){const e=this._getLogFn(t.level),r=t.type==="log"?"":t.type,s=t.tag||"",l=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,c=`%c${[s,r].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?e(`${c}%c ${t.args[0]}`,l,"",...t.args.slice(1)):e(c,l,...t.args)}}function D(o={}){return A({reporters:o.reporters||[new $({})],prompt(e,r={}){return r.type==="confirm"?Promise.resolve(confirm(e)):Promise.resolve(prompt(e))},...o})}const L=D(),M=d({id:"data",state:()=>({appVersion:b().public.APP_VERSION,products:[]}),actions:{async initData(){this.products.length===0&&(L.debug("fetching data ..."),await fetch("/api/products").then(o=>o.json()).then(o=>{this.products=o.data}).catch(o=>L.error(o)))}}}),R=d("counter",()=>{const o=y(0),t=y("sfxcode"),e=C(()=>o.value*2);function r(){o.value++}return S(t,(s,i)=>{o.value=0}),{count:o,name:t,doubleCount:e,increment:r}});export{j as a,R as b,M as u};