import{A as l}from"./AppCard.c8033879.js";import{f as p,j as a,o as c,k as u,w as o,b as r,n as _}from"./entry.95e2e56d.js";const h=p({__name:"order-form-ro",props:{data:{}},setup(m){const e=m,n=[{$formkit:"primeCheckbox",name:"vatDocumentRequired",label:"Требуется документ для VAT",_disabled:!0},{$formkit:"primeInputText",name:"shippingMethodName",label:"Способ получения",validation:"required",_disabled:!0},{$formkit:"primeTextarea",name:"comment",label:"Комментарий",rows:"5",_disabled:!0}];return(f,t)=>{const i=a("FormKitSchema"),s=a("FormKit");return e.data?(c(),u(l,{key:0,grow:"1",basis:"500px",title:"Информация о заказе #"+e.data.id},{default:o(()=>[r(s,{modelValue:e.data,"onUpdate:modelValue":t[0]||(t[0]=d=>e.data=d),actions:!1,type:"form"},{default:o(()=>[r(i,{schema:n})]),_:1},8,["modelValue"])]),_:1},8,["title"])):_("",!0)}}});export{h as _};
