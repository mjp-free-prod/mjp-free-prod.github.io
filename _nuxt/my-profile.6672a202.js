import{f as g,g as V,r as l,l as N,i as q,m as x,h as U,j as _,o as c,k as f,w as t,b as r,n as b,A as F}from"./entry.56806956.js";import{A as h}from"./AppCard.623d15a2.js";import{A as P}from"./AppCardGroup.d2fb4903.js";import{A as I}from"./AppCardLayout.4021b3f7.js";import"./_plugin-vue_export-helper.c27b6911.js";const M=g({__name:"my-profile",setup(K){const s=V(F),v=l(y(!!i())),e=l(null),m=l({newPassword:""}),n=l(i()),w=N(),A=w.afterEach(()=>{n.value=i(),v.value=y(!!n.value)});q(async()=>{e.value=await s.getProfile()}),x(A);function y(u){return[...u?[{$el:"p",children:"Заполните профиль, чтобы продолжить работу"}]:[],{$formkit:"primeInputText",name:"fullName",label:"Полное имя",validation:"required"},{$formkit:"primeInputText",type:"tel",name:"phoneNumber",label:"Телефон",validation:""}]}function i(){const o=U().query.redirectTo;return(Array.isArray(o)?o[0]:o)??""}async function S(){if(!e.value)return;const{fullName:u,phoneNumber:a}=e.value;await s.setProfile(u,a),n.value&&w.push(n.value)}const k=[{$formkit:"primePassword",name:"newPassword",label:"Новый парооль",validation:"required",toggleMask:!0}];async function C(){await s.setPassword(m.value.newPassword)}return(u,a)=>{const o=_("FormKitSchema"),d=_("FormKit");return c(),f(I,null,{default:t(()=>[r(P,null,{default:t(()=>[r(h,{title:"Личная информация"},{default:t(()=>[e.value?(c(),f(d,{key:0,modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=p=>e.value=p),type:"form","submit-attrs":{inputClass:"p-button p-component"},onSubmit:S},{default:t(()=>[r(o,{schema:v.value,data:e.value},null,8,["schema","data"])]),_:1},8,["modelValue"])):b("",!0)]),_:1})]),_:1}),r(P,null,{default:t(()=>[r(h,{title:"Изменить пароль"},{default:t(()=>[e.value?(c(),f(d,{key:0,modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=p=>m.value=p),type:"form","submit-attrs":{inputClass:"p-button p-component"},onSubmit:C},{default:t(()=>[r(o,{schema:k,data:e.value},null,8,["data"])]),_:1},8,["modelValue"])):b("",!0)]),_:1})]),_:1})]),_:1})}}});export{M as default};