import{s as g}from"./button.esm.7240d471.js";import{A as i}from"./AppCardGroup.55235d9e.js";import F from"./product-form.e7909787.js";import{j as v,c as p,b as o,w as n,a as d,k as m,n as c,q as B,F as y,o as r,z as C,G as b}from"./entry.95e2e56d.js";import x from"./order-form.8e4f0752.js";import{W as N}from"./WideButton.0ab170a2.js";import"./index.esm.1b29d4bc.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./AppCard.c8033879.js";const q={__name:"new-order-form",props:["msgSource","readonly","orderName"],emits:["add","delete","submit"],setup(f,{emit:l}){const e=f;return(w,t)=>{const u=v("FormKit"),_=g;return r(),p(y,null,[o(i,null,{default:n(()=>[o(x,{"order-name":e.orderName,readonly:e.readonly,"msg-source":e.msgSource},null,8,["order-name","readonly","msg-source"])]),_:1}),o(u,{type:"list",name:"products",dynamic:""},{default:n(({items:a})=>[(r(!0),p(y,null,C(a,(k,s)=>(r(),m(u,{key:k,index:s,type:"group"},{default:n(()=>[o(i,null,{default:n(()=>[o(F,{readonly:e.readonly,index:s,onDelete:()=>l("delete",s)},null,8,["readonly","index","onDelete"])]),_:2},1024)]),_:2},1032,["index"]))),128))]),_:1}),d("div",null,[e.readonly?c("",!0):(r(),m(N,{key:0,icon:"pi pi-plus",label:"Добавить товар",onClick:t[0]||(t[0]=a=>l("add"))}))]),d("div",null,[o(B(b),{node:e.msgSource},null,8,["node"])]),d("div",null,[e.readonly?c("",!0):(r(),m(_,{key:0,label:"Отправить",onClick:t[1]||(t[1]=a=>l("submit"))}))])],64)}}};export{q as default};