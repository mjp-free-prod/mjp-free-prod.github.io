import{f as p,r as u,g as l,o as f,k as d,q as y,S as v}from"./entry.95e2e56d.js";import{s as w,b as a,a as _,_ as g}from"./app-grid.vue.74de73f6.js";import"./inputnumber.esm.fe3a78c6.js";import"./button.esm.7240d471.js";import"./index.esm.1b29d4bc.js";import"./inputtext.esm.230b918e.js";import"./dropdown.esm.334ce89b.js";import"./index.esm.fa5c14c8.js";import"./overlayeventbus.esm.7f70d6d8.js";import"./virtualscroller.esm.de289c7c.js";import"./tristatecheckbox.esm.311fe72b.js";import"./checkbox.esm.d181182c.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.64d05652.js";import"./index.esm.6108e97c.js";import"./AppCard.c8033879.js";import"./_plugin-vue_export-helper.c27b6911.js";const z=p({__name:"order-status-types",setup(b){const t=u(null),s=l(v);async function o(){return await s.getMany(async e=>e.from("orderStatusType").select())}async function i(e){var r;await s.set(async m=>m.from("orderStatusType").upsert(e)),await((r=t==null?void 0:t.value)==null?void 0:r.refresh())}async function n(){var e;await s.set(async r=>r.from("orderStatusType").upsert({name:"",description:"",severity:"info"})),await((e=t==null?void 0:t.value)==null?void 0:e.refresh())}const c={title:"Типы статусов заказов",getData:o,allowAdd:()=>n(),allowEdit:!0,emits:{"row-edit-save":e=>i(e.newData)},labels:{id:"#",name:"Имя",description:"Описание",severity:"Важность"},columns:{id:w,name:a,description:a,severity:_([{value:"info",label:"info",severity:"info"},{value:"warning",label:"warning",severity:"warning"},{value:"danger",label:"danger",severity:"danger"},{value:"success",label:"success",severity:"success"}])}};return(e,r)=>(f(),d(y(g),{ref_key:"grid",ref:t,config:c},null,512))}});export{z as default};