import{f as a,g as t,o as m,k as p,q as r,M as n,y as c}from"./entry.81dbe312.js";import{_ as f}from"./app-grid.vue.43d58a4d.js";import{p as g}from"./common.89e7c513.js";import{m as d}from"./message-grid-config.40b733bc.js";import"./inputnumber.esm.c609d9e7.js";import"./button.esm.02a2937e.js";import"./index.esm.7206af9e.js";import"./inputtext.esm.1179f772.js";import"./dropdown.esm.8b66bbfb.js";import"./index.esm.e8af880c.js";import"./overlayeventbus.esm.07ca8cc2.js";import"./virtualscroller.esm.50b476a1.js";import"./tristatecheckbox.esm.5205c258.js";import"./checkbox.esm.e5c0df55.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.cd2c5bd6.js";import"./index.esm.88ed854a.js";import"./AppCard.7b4f50c2.js";import"./_plugin-vue_export-helper.c27b6911.js";const $=a({__name:"my-messages",setup(_){const o=t(n),i=t(c),s=g(d,["orderId","displayName","displayText","createdAt"],{title:"Мои сообщения",getData:async()=>{const e=await o.getMyMessages();return await i.resetUnreadCount(),e}});return(e,u)=>(m(),p(r(f),{config:r(s)},null,8,["config"]))}});export{$ as default};