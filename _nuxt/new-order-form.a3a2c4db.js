import{A as e}from"./AppCardGroup.e42054dd.js";import{_ as n}from"./order-form.vue.6ec159bc.js";import{_ as l}from"./AppProductsGrid.vue.ceeb7faa.js";import{j as u,c as d,b as o,w as m,F as c,o as _}from"./entry.e7bb3c46.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./button.esm.3c6ebd50.js";import"./index.esm.3d20b6db.js";import"./AppCard.21217234.js";import"./app-grid.vue.837374ac.js";import"./inputnumber.esm.1f5a2a01.js";import"./inputtext.esm.4620d3df.js";import"./dropdown.esm.3140a904.js";import"./index.esm.930595ae.js";import"./overlayeventbus.esm.e0259049.js";import"./virtualscroller.esm.8754c17f.js";import"./tristatecheckbox.esm.97a4dd96.js";import"./checkbox.esm.5811c026.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.53f3473f.js";import"./index.esm.1626820c.js";const q={__name:"new-order-form",props:["msgSource","readonly","orderName"],emits:["submit"],setup(i,{emit:p}){const r=i;return(f,t)=>{const s=u("FormKit");return _(),d(c,null,[o(e,null,{default:m(()=>[o(s,{type:"list",name:"products",dynamic:""},{default:m(({node:a})=>[o(l,{items:a.value,mode:"new"},null,8,["items"])]),_:1})]),_:1}),o(e,null,{default:m(()=>[o(n,{"order-name":r.orderName,readonly:r.readonly,"msg-source":r.msgSource,onSubmit:t[0]||(t[0]=()=>p("submit"))},null,8,["order-name","readonly","msg-source"])]),_:1})],64)}}};export{q as default};