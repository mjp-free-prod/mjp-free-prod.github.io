import{l as m,b as u,f as P,r as f,i as y,g as n,q as a,o as g,k as h,n as v,S,O as T}from"./entry.a6487435.js";import{r as p,b as e,d as _,c as r,a as b,_ as D}from"./app-grid.vue.3acadad1.js";import"./button.esm.12771107.js";import"./AppCard.92ec6dc2.js";import"./inputtext.esm.10aba614.js";import{_ as M}from"./AppProductsGrid.vue.2c9ce426.js";import{p as N}from"./common.89e7c513.js";import"./inputnumber.esm.e1d39318.js";import"./dropdown.esm.05923d01.js";import"./index.esm.687d455f.js";import"./index.esm.4a91adc5.js";import"./overlayeventbus.esm.9e87f988.js";import"./virtualscroller.esm.ffb87d02.js";import"./tristatecheckbox.esm.c6b487fa.js";import"./checkbox.esm.5e1925c2.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.04a192ae.js";import"./index.esm.e2795e18.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./link-preset.202c3ee4.js";function B(s,t){return{allowExpand:!0,allowAdd:()=>m().push("/user/new-order-cards"),slots:{expansion:o=>[u(M,{data:o.data.products,mode:t},null)]},labels:{products:"",createdAt:"",createdBy:"",createdByPublicProfile:"",createdByPrivateProfile:"",orderPublicStatus:"",orderPrivateStatus:"",shippingMethod:"",shippingMethodId:"",id:"#",shippingMethodName:"Получение",vatDocumentRequired:"VAT",positions:"Позиций",items:"Единиц",productsPriceToPay:"К оплате за товары",shippingPriceToPay:"К оплате за доставку",orderStatusTypeId:"Статус",totalPriceToPay:"Всего к оплате",totalPriceNet:"Всего цена нетто",totalPriceGross:"Всего цена брутто",deliveryDate:"Дата доставки",shippingDate:"Дата выдачи",comment:"Коментрарий пользователя",notes:"Заментки для модератора"},columns:{products:!1,createdAt:!1,createdBy:!1,createdByPublicProfile:!1,createdByPrivateProfile:!1,orderPublicStatus:!1,orderPrivateStatus:!1,shippingMethod:!1,shippingMethodId:!1,id:p("/user/my-order-info?orderId="),shippingMethodName:e,vatDocumentRequired:_,positions:e,items:e,productsPriceToPay:r,shippingPriceToPay:r,totalPriceToPay:r,orderStatusTypeId:b(s),totalPriceNet:r,totalPriceGross:r,deliveryDate:e,shippingDate:e,comment:e,notes:e}}}const Q=P({__name:"all-order-list",setup(s){const t=f(null);return y(async()=>{const d=(await n(S).getMany(async i=>i.from("orderStatusType").select())).map(({id:i,name:c,severity:l})=>({value:i,label:c,severity:l}));t.value=N(B(d,"moder-ro"),["id","shippingMethodName","vatDocumentRequired","productsPriceToPay","shippingPriceToPay","totalPriceToPay","orderStatusTypeId","totalPriceNet","totalPriceGross","deliveryDate","shippingDate","comment","notes"],{title:"Все заказы",getData:()=>n(T).getAllOrders(),columns:{id:p("/moder/all-order-info?orderId=")}})}),(o,d)=>a(t)?(g(),h(a(D),{key:0,config:a(t)},null,8,["config"])):v("",!0)}});export{Q as default};
