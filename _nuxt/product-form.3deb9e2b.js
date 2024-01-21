import{s as p}from"./button.esm.eb92d5ba.js";import{A as v}from"./AppCard.b8eca417.js";import{f as _,j as f,o as a,k as o,w as i,a as b,b as x,n as y}from"./entry.6d0ae791.js";import{_ as N}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.esm.da4892cb.js";const h={class:"ProductForm__FormKit"},k=_({__name:"product-form",props:{index:{},readonly:{type:Boolean}},emits:["delete"],setup(n,{emit:s}){const r=n,l=[{$formkit:"primeInputText",name:"url",label:"Ссылка на товар",help:r.readonly?"":"Пример: https://example.com/product?id=42",validation:"required | url",_disabled:r.readonly},{$formkit:"primeInputText",name:"count",label:"Количество товара",validation:"required|positiveInteger",validationRules:{positiveInteger:u},validationMessages:{positiveInteger:"Введите целое число от 1 до 1000000000"},_disabled:r.readonly},{$formkit:"primeInputText",name:"userPriceForOne",label:"Цена за единицу на сайте",validation:"positiveDecimal2",validationRules:{positiveDecimal2:m},validationMessages:{positiveDecimal2:"Введите число от 0.01 до 1000000000"},_disabled:r.readonly},{$formkit:"primeTextarea",name:"comment",label:"Комментарий",rows:"5",_disabled:r.readonly}];function u(t){if(t.value===""||t.value===null||t.value===void 0)return!0;const e=Number(t.value);return Number.isNaN(e)?!1:Math.floor(e)-e===0&&1<=e&&e<=1e9}function m(t){if(t.value===""||t.value===null||t.value===void 0)return!0;const e=Number(t.value);return Number.isNaN(e)?!1:e>.01&&e<1e9}return(t,e)=>{const c=f("FormKitSchema"),d=p;return a(),o(v,{grow:"1",basis:"350px",title:"Toвар #"+(r.index+1)},{default:i(()=>[b("div",h,[x(c,{schema:l})])]),actions:i(()=>[r.readonly?y("",!0):(a(),o(d,{key:0,severity:"danger",icon:"pi pi-trash",onClick:e[0]||(e[0]=g=>s("delete"))}))]),_:1},8,["title"])}}});const $=N(k,[["__scopeId","data-v-cea2d597"]]);export{$ as default};