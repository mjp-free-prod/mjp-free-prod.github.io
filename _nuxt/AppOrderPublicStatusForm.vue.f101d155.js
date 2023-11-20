import{s as F}from"./button.esm.8f27275e.js";import{f as k,r as s,g as N,i as I,j as b,o as c,k as f,w as v,q as l,s as h,b as D,n as T,L as C}from"./entry.b4d40b90.js";import{A as V}from"./AppCard.bd1ac3c4.js";function y(i){if(Number.isFinite(i))return i}const K=k({__name:"AppOrderPublicStatusForm",props:{id:{},readonly:{type:Boolean},data:{}},emits:["update"],setup(i,{emit:_}){const e=i,m=s(null),u=s(null),t=s(null),S=N(C);I(async()=>{u.value=await S.getEnabledOrderStatusTypes(),t.value={orderStatusTypeId:e.data.orderStatusTypeId,shippingPriceToPay:y(e.data.shippingPriceToPay),productsPriceToPay:y(e.data.productsPriceToPay),totalPriceToPay:y(e.data.totalPriceToPay)},m.value=[{$formkit:"primeDropdown",name:"orderStatusTypeId",label:"Статус",validation:"required",_disabled:e.readonly,options:u.value},{$formkit:"primeInputNumber",name:"shippingPriceToPay",label:"К оплате за доставку",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"min:0|max:1000000000",_disabled:e.readonly},{$formkit:"primeInputNumber",name:"productsPriceToPay",label:"К оплате за товары",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"min:0.01|max:1000000000",_disabled:!0},{$formkit:"primeInputNumber",name:"totalPriceToPay",label:"Итого к оплате",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"min:0.01|max:1000000000",_disabled:!0}]});const P=s(null);function g(){var a;(a=P.value)==null||a.node.submit()}function x(){var r,n;if(!t.value)return;const{orderStatusTypeId:a,shippingPriceToPay:o}=t.value,d=((n=(r=u.value)==null?void 0:r.find(p=>p.value===a))==null?void 0:n.label)??"Неизвестный статус";_("update",{orderStatusTypeId:a,shippingPriceToPay:o,orderStatusTypeName:d})}return(a,o)=>{const d=b("FormKitSchema"),r=F,n=b("FormKit");return c(),f(V,{grow:"1",basis:"500px",title:"Статус заказа #"+e.id},{default:v(()=>[l(m)&&l(t)?(c(),f(n,{key:0,modelValue:l(t),"onUpdate:modelValue":o[1]||(o[1]=p=>h(t)?t.value=p:null),ref_key:"form",ref:P,type:"form",actions:!1,onSubmit:x},{default:v(()=>[D(d,{schema:l(m)},null,8,["schema"]),e.readonly?T("",!0):(c(),f(r,{key:0,label:"Обновить",onClick:o[0]||(o[0]=()=>g())}))]),_:1},8,["modelValue"])):T("",!0)]),_:1},8,["title"])}}});export{K as _};
