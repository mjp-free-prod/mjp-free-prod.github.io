import{f as m,r as p,g as u,o as f,k as d,q as y,S as v}from"./entry.2ab89345.js";import{s as w,b as a,a as g,_}from"./app-grid.vue.35f1bcf4.js";import"./inputnumber.esm.1f5c2caa.js";import"./button.esm.195ffd53.js";import"./index.esm.ebac0be4.js";import"./inputtext.esm.72d31888.js";import"./dropdown.esm.31fa150f.js";import"./index.esm.5680e3a8.js";import"./overlayeventbus.esm.3779e7bc.js";import"./virtualscroller.esm.414dad89.js";import"./tristatecheckbox.esm.7ab4d7b5.js";import"./checkbox.esm.9ced2097.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.f6a16eec.js";import"./index.esm.9b61a595.js";import"./AppCard.8c2588fd.js";import"./_plugin-vue_export-helper.c27b6911.js";const z=m({__name:"order-status-types",setup(b){const t=p(null),s=u(v);async function i(){return await s.getMany(async e=>e.from("orderStatusType").select().order("id",{ascending:!1}))}async function o(e){var r;await s.set(async l=>l.from("orderStatusType").upsert(e)),await((r=t==null?void 0:t.value)==null?void 0:r.refresh())}async function n(){var e;await s.set(async r=>r.from("orderStatusType").upsert({name:"",description:"",severity:"info"})),await((e=t==null?void 0:t.value)==null?void 0:e.refresh())}const c={title:"Типы статусов заказов",getData:i,allowAdd:()=>n(),allowEdit:!0,emits:{"row-edit-save":e=>o(e.newData)},labels:{id:"#",name:"Имя",description:"Описание",severity:"Важность"},columns:{id:w,name:a,description:a,severity:g([{value:"info",label:"info",severity:"info"},{value:"warning",label:"warning",severity:"warning"},{value:"danger",label:"danger",severity:"danger"},{value:"success",label:"success",severity:"success"}])}};return(e,r)=>(f(),d(y(_),{ref_key:"grid",ref:t,config:c},null,512))}});export{z as default};
