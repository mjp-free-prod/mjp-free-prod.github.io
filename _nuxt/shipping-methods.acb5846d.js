import{f as c,r as l,g as d,o as u,k as f,q as g,S as _}from"./entry.56806956.js";import{_ as h,s as w,b as a,d as b}from"./app-grid.vue.c2796c41.js";import"./inputnumber.esm.e79f418c.js";import"./button.esm.218e6f5d.js";import"./index.esm.0ed4fdca.js";import"./inputtext.esm.9b75b843.js";import"./dropdown.esm.58f8d527.js";import"./index.esm.130d29e3.js";import"./overlayeventbus.esm.e6a3b592.js";import"./virtualscroller.esm.21341c08.js";import"./tristatecheckbox.esm.84151512.js";import"./checkbox.esm.af556a48.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.284f6cad.js";import"./index.esm.a6907b11.js";import"./AppCard.623d15a2.js";import"./_plugin-vue_export-helper.c27b6911.js";const F=c({__name:"shipping-methods",setup(y){const o=l(null),i=d(_);async function r(){return await i.getMany(async e=>e.from("shippingMethod").select())}async function s(e){var t;await i.set(async m=>m.from("shippingMethod").upsert(e)),await((t=o.value)==null?void 0:t.refresh())}async function n(){var e;await i.set(async t=>t.from("shippingMethod").upsert({name:"",description:"",enabled:!1})),await((e=o.value)==null?void 0:e.refresh())}const p={getData:r,title:"Способы получения",allowAdd:()=>n(),allowEdit:!0,emits:{"row-edit-save":e=>s(e.newData)},labels:{id:"#",name:"Имя",description:"Описание",enabled:"Активность"},columns:{id:w,name:a,description:a,enabled:b}};return(e,t)=>(u(),f(g(h),{ref_key:"grid",ref:o,config:p},null,512))}});export{F as default};