import{f as c,r as d,g as l,o as f,k as u,q as g,S as _}from"./entry.e7bb3c46.js";import{_ as h,s as w,b as a,d as b}from"./app-grid.vue.837374ac.js";import"./inputnumber.esm.1f5a2a01.js";import"./button.esm.3c6ebd50.js";import"./index.esm.3d20b6db.js";import"./inputtext.esm.4620d3df.js";import"./dropdown.esm.3140a904.js";import"./index.esm.930595ae.js";import"./overlayeventbus.esm.e0259049.js";import"./virtualscroller.esm.8754c17f.js";import"./tristatecheckbox.esm.97a4dd96.js";import"./checkbox.esm.5811c026.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.53f3473f.js";import"./index.esm.1626820c.js";import"./AppCard.21217234.js";import"./_plugin-vue_export-helper.c27b6911.js";const F=c({__name:"shipping-methods",setup(y){const o=d(null),i=l(_);async function r(){return await i.getMany(async e=>e.from("shippingMethod").select().order("id",{ascending:!1}))}async function s(e){var t;await i.set(async m=>m.from("shippingMethod").upsert(e)),await((t=o.value)==null?void 0:t.refresh())}async function n(){var e;await i.set(async t=>t.from("shippingMethod").upsert({name:"",description:"",enabled:!1})),await((e=o.value)==null?void 0:e.refresh())}const p={getData:r,title:"Способы получения",allowAdd:()=>n(),allowEdit:!0,emits:{"row-edit-save":e=>s(e.newData)},labels:{id:"#",name:"Имя",description:"Описание",enabled:"Активность"},columns:{id:w,name:a,description:a,enabled:b}};return(e,t)=>(f(),u(g(h),{ref_key:"grid",ref:o,config:p},null,512))}});export{F as default};