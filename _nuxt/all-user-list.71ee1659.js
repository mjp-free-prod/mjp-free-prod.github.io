import{f as v,r as y,g as _,o as P,k as g,q as C,S as b}from"./entry.10c2110a.js";import{s,c as w,a as N,_ as B}from"./app-grid.vue.9c455346.js";import"./inputnumber.esm.e22f5635.js";import"./button.esm.f5dc2763.js";import"./index.esm.2dd0d688.js";import"./inputtext.esm.7b30eafa.js";import"./dropdown.esm.67fc7922.js";import"./index.esm.16428f89.js";import"./overlayeventbus.esm.f786a7d2.js";import"./virtualscroller.esm.b5b417e7.js";import"./tristatecheckbox.esm.82bce6d1.js";import"./checkbox.esm.c4cc7eaf.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.f120780e.js";import"./index.esm.baa818ec.js";import"./AppCard.c61e841c.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./index.88c16502.js";const K=v({__name:"all-user-list",setup(L){const t=y(null),n=_(b);async function o(){return(await n.getMany(async e=>e.from("userPublicProfile").select("*, userPrivateProfile(*), userBalance(*), userClaim!userClaim_id_fkey(*)").order("displayId",{ascending:!1}))).map(e=>{const{id:i,fullName:r,displayId:l}=e,{plnBalance:u}=e.userBalance[0]??e.userBalance,{email:p,phoneNumber:d}=e.userPrivateProfile[0]??e.userPrivateProfile,{accessLevel:f}=(e.userClaim?e.userClaim[0]:null)??e.userClaim??{accessLevel:1};return{id:i,fullName:r,displayId:l,plnBalance:u,email:p,phoneNumber:d,accessLevel:f}})}async function c(a){var r;const{id:e,accessLevel:i}=a;await n.set(async l=>l.rpc("updateUserClaim",{userId:e,newAccessLevel:i})),await((r=t.value)==null?void 0:r.refresh())}const m={title:"Все пользователи",getData:o,allowEdit:!0,emits:{"row-edit-save":a=>c(a.newData)},labels:{id:"",displayId:"#",fullName:"Имя",email:"Email",phoneNumber:"Телефон",plnBalance:"Баланс (PLN)",accessLevel:"Доступ"},columns:{id:!1,displayId:s,fullName:s,email:s,phoneNumber:s,plnBalance:w,accessLevel:N([{value:1,label:"Пользователь",severity:"info"},{value:2,label:"Модератор",severity:"warning"},{value:3,label:"Администратор",severity:"danger"}])}};return(a,e)=>(P(),g(C(B),{ref_key:"grid",ref:t,config:m},null,512))}});export{K as default};
