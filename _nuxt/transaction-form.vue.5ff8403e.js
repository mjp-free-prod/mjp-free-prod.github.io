import{s as d}from"./button.esm.6176fc8e.js";import{f,r as a,j as r,o as i,k as s,w as _,q as o,n as b,b as I,s as k}from"./entry.9b45c852.js";const v=f({__name:"transaction-form",emits:["submit"],setup(x,{emit:l}){const e=a({userDisplayId:null,amount:null,comment:"",orderId:null}),m=a([{$formkit:"primeInputNumber",name:"userDisplayId",label:"ID пользователя",validation:"required"},{$formkit:"primeInputNumber",name:"amount",label:"Изменение баланса",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"required|min:-1000000000|max:1000000000"},{$formkit:"primeInputNumber",name:"orderId",label:"ID заказа"},{$formkit:"primeInputText",name:"comment",label:"Коментарий"}]);return(D,t)=>{const u=r("FormKitSchema"),p=d,c=r("FormKit");return i(),s(c,{modelValue:o(e),"onUpdate:modelValue":t[1]||(t[1]=n=>k(e)?e.value=n:null),type:"form",actions:!1},{default:_(()=>[o(m)?(i(),s(u,{key:0,schema:o(m)},null,8,["schema"])):b("",!0),I(p,{label:"Добавить",onClick:t[0]||(t[0]=n=>l("submit",o(e)))})]),_:1},8,["modelValue"])}}});export{v as _};
