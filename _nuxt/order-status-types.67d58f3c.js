import{f as p,r as l,g as u,o as f,k as d,q as y,S as v}from"./entry.10c2110a.js";import{s as w,b as a,a as g,_}from"./app-grid.vue.9c455346.js";import"./inputnumber.esm.e22f5635.js";import"./button.esm.f5dc2763.js";import"./index.esm.2dd0d688.js";import"./inputtext.esm.7b30eafa.js";import"./dropdown.esm.67fc7922.js";import"./index.esm.16428f89.js";import"./overlayeventbus.esm.f786a7d2.js";import"./virtualscroller.esm.b5b417e7.js";import"./tristatecheckbox.esm.82bce6d1.js";import"./checkbox.esm.c4cc7eaf.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.f120780e.js";import"./index.esm.baa818ec.js";import"./AppCard.c61e841c.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./index.88c16502.js";const F=p({__name:"order-status-types",setup(b){const t=l(null),s=u(v);async function i(){return await s.getMany(async e=>e.from("orderStatusType").select().order("id",{ascending:!1}))}async function o(e){var r;await s.set(async m=>m.from("orderStatusType").upsert(e)),await((r=t==null?void 0:t.value)==null?void 0:r.refresh())}async function n(){var e;await s.set(async r=>r.from("orderStatusType").upsert({name:"",description:"",severity:"info"})),await((e=t==null?void 0:t.value)==null?void 0:e.refresh())}const c={title:"Типы статусов заказов",getData:i,allowAdd:()=>n(),allowEdit:!0,emits:{"row-edit-save":e=>o(e.newData)},labels:{id:"#",name:"Имя",description:"Описание",severity:"Важность"},columns:{id:w,name:a,description:a,severity:g([{value:"info",label:"info",severity:"info"},{value:"warning",label:"warning",severity:"warning"},{value:"danger",label:"danger",severity:"danger"},{value:"success",label:"success",severity:"success"}])}};return(e,r)=>(f(),d(y(_),{ref_key:"grid",ref:t,config:c},null,512))}});export{F as default};
