import{s as f}from"./dialog.esm.ced8a6fe.js";import{f as u,r as s,g as _,o as g,c as v,b as e,q as t,w,s as b,F as y,x as I}from"./entry.9b45c852.js";import{_ as k,r as A}from"./app-grid.vue.50bfba8d.js";import{_ as B}from"./transaction-form.vue.5ff8403e.js";import{t as x}from"./transaction-config.c0bd0b59.js";import{p as C}from"./common.89e7c513.js";import"./inputnumber.esm.960b1be9.js";import"./button.esm.6176fc8e.js";import"./index.esm.36162d56.js";import"./inputtext.esm.c279c8a9.js";import"./dropdown.esm.d4ef765f.js";import"./index.esm.e8e4ef32.js";import"./overlayeventbus.esm.e7eace53.js";import"./virtualscroller.esm.6c99f57e.js";import"./tristatecheckbox.esm.9d69e4f9.js";import"./checkbox.esm.fee42926.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.449a756f.js";import"./index.esm.bdabf1ee.js";import"./AppCard.73bfc289.js";import"./_plugin-vue_export-helper.c27b6911.js";const Q=u({__name:"all-transactions",setup(D){const a=s(null),o=s(!1),i=_(I);function m(){o.value=!0}async function l(n){var r;await i.addTransactionInPln(n),o.value=!1,(r=a.value)==null||r.refresh()}const c=C(x,["id","orderId","userIdDisplayName","amount","currency","oldBalance","newBalance","comment","createdByDisplayName","createdAt"],{getData:()=>i.getAllTransactions(),title:"Все транзакции",allowAdd:()=>m(),columns:{orderId:A("/moder/all-order-info?orderId=")}});return(n,r)=>{const d=f;return g(),v(y,null,[e(t(k),{ref_key:"grid",ref:a,config:t(c)},null,8,["config"]),e(d,{visible:t(o),"onUpdate:visible":r[0]||(r[0]=p=>b(o)?o.value=p:null),modal:"",header:"Добавить"},{default:w(()=>[e(B,{onSubmit:l})]),_:1},8,["visible"])],64)}}});export{Q as default};
