import x from"./inputtext.esm.a6e07e4e.js";import{s as M}from"./button.esm.8f27275e.js";import{f as w,g as d,r as n,i as I,o as t,k as c,w as b,a as l,c as y,z as E,q as u,F as h,b as m,s as k,M as B,E as C}from"./entry.b4d40b90.js";import{A as S}from"./AppCard.bd1ac3c4.js";import V from"./order-discussion-message.96f081ad.js";import{_ as O}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.esm.28815afd.js";import"./datetime.f31b9a37.js";const A={class:"chat-container"},D={class:"user-message"},N=w({__name:"order-discussion",props:{orderId:{},mode:{},customerEmail:{}},setup(p){const e=p,o=d(B),_=d(C),a=n([]),s=n("");I(async()=>{a.value=await o.getOrderMessages(e.orderId)});async function f(){s.value&&(e.mode==="customer"?await o.addCustomerMessage(e.orderId,s.value):(await o.addModerMessage(e.orderId,s.value),e.customerEmail&&await _.sendMessageEmail(e.customerEmail,e.orderId,s.value)),s.value="",a.value=await o.getOrderMessages(e.orderId))}return(F,i)=>{const v=x,g=M;return t(),c(S,{grow:"1",style:{"flex-grow":"1",width:"100%"},id:"order-discussion-"+e.orderId,basis:"700px",title:"Обсуждение заказа #"+e.orderId},{default:b(()=>[l("div",A,[(t(!0),y(h,null,E(u(a),r=>(t(),c(V,{time:r.createdAt,source:r.source,sender:r.displayName,text:r.displayText},null,8,["time","source","sender","text"]))),256))]),l("div",D,[m(v,{modelValue:u(s),"onUpdate:modelValue":i[0]||(i[0]=r=>k(s)?s.value=r:null),class:"messagebox",placeholder:"Введите сообщение"},null,8,["modelValue"]),m(g,{label:"Отправить",onClick:f})])]),_:1},8,["id","title"])}}});const G=O(N,[["__scopeId","data-v-9a2119b0"]]);export{G as default};
