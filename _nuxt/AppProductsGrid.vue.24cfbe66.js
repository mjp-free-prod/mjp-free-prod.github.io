import{f as p,o as f,k as m,q as g,b as l}from"./entry.81dbe312.js";import{v as b,_ as w,f as _,p as P,s as c,i as k,g as d,c as u}from"./app-grid.vue.43d58a4d.js";import"./button.esm.02a2937e.js";import"./AppCard.7b4f50c2.js";import"./inputtext.esm.1179f772.js";const x=p({__name:"app-form-grid",props:{data:{},config:{}},setup(t){const e=t,a={title:e.config.title,basis:e.config.basis,hideSearch:e.config.hideSearch,allowUpdate:e.config.allowUpdate,allowAdd:()=>{e.data.push((e.config.newItemFunc??(()=>({})))(e.data.length))},allowDelete:n=>{var i;const r=e.data.findIndex(o=>o[e.config.dataKey]===n[e.config.dataKey]);r!==-1&&e.data.splice(r,1),(i=e.config.onDeleted)==null||i.call(void 0,n)},allowEdit:!0,props:{dataKey:e.config.dataKey,editMode:"cell",filterDisplay:void 0},emits:{"cell-edit-complete":n=>e.data[n.index][n.field]=n.newValue},getData:()=>Promise.resolve(e.data),hidePaging:!0,labels:e.config.labels,columns:{$validationOutcome:b(e.config.validationFunc),...e.config.columns}};return(n,r)=>(f(),m(g(w),{data:e.data,config:a},null,8,["data"]))}});function h(t,e){if(t.length<=e)return t;const a=t.split("?")[0],n="...",r=e-n.length,i=a.substr(-r);return n+i}function y(t){return{..._,slots:{body:({data:e,field:a})=>{const n=e[a];if(!n)return[];const r=h(n,t);return[l("a",{target:"_blank",style:"text-decoration: underline;",href:n},[r])]}}}}function v(t){const e=y(t);return{...e,slots:{...e.slots,body:({data:a,field:n})=>{const r=a[n];if(!r)return[l("span",{style:"opacity: 0.5"},["Нажмите для ввода ссылки"])];const i=h(r,t);return[l("span",null,[i]),l("a",{target:"_blank",style:"text-decoration: underline; margin-left: 5px",href:r},[l("i",{class:"pi pi-play"},null)])]},editor:P}}}function C(t){const e=[];return(!Number.isFinite(t.count)||t.count<1)&&e.push("Количество должно быть больше либо равно 1"),!t.url||!U(t.url)?e.push("Укажите ссылку на товар в формате https://site.com/some-product"):t.url.length>65536&&e.push("Максимальная длинна ссылки 65536"),e}function U(t){return/^(https?):\/\/(([^:\/?#\s]+)(?::(\d+))?)(\/[^?#\s]*)?(\?[^#\s]*)?(#\S*)?$/i.test(t)}const S=p({__name:"AppProductsGrid",props:{onUpdated:{type:Function},items:{},mode:{}},setup(t){const e=t;function a(){var o;for(let s=0;s<((o=e.items)==null?void 0:o.length);s++)e.items[s].id=s+1}const n={basis:"550px",title:"Товары от одного продавца",dataKey:"id",hideSearch:!0,allowUpdate:e.mode==="moder"?()=>e.onUpdated?e.onUpdated(e.items):Promise.resolve():void 0,allowAdd:e.mode==="new",allowEdit:e.mode==="new"||e.mode==="moder",allowDelete:e.mode==="new",onDeleted:()=>a(),newItemFunc:o=>({id:o+1,count:1}),validationFunc:C,labels:{id:"#",url:"Ссылка",count:"Количество",priceToPay:"К оплате",priceNet:"Цена нетто",priceGross:"Цена брутто",priceMarkup:"Наценка"},columns:{id:c,url:e.mode==="new"?v(50):y(50),count:e.mode==="new"?k:c,priceToPay:r(e.mode),priceNet:i(e.mode),priceGross:i(e.mode),priceMarkup:i(e.mode)}};function r(o){return o==="new"?!1:o==="moder"?d:u}function i(o){return o==="moder"?d:o==="moder-ro"?u:!1}return(o,s)=>(f(),m(g(x),{config:n,data:e.items},null,8,["data"]))}});export{S as _,C as p};
