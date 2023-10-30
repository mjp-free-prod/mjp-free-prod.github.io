import{_ as Q}from"./AppProductsGrid.vue.24cfbe66.js";import{f as M,r as y,i as O,j as T,o as c,k as p,w as n,q as s,s as L,b as m,n as w,v as W,g as U,S as X,O as Y}from"./entry.81dbe312.js";import{A as k}from"./AppCardGroup.8ccf6f19.js";import{A as Z}from"./AppCardLayout.22160458.js";import tt from"./order-discussion.28149e9d.js";import{_ as et}from"./order-form-ro.vue.85f31a20.js";import{_ as at}from"./AppOrderPublicStatusForm.vue.f9c4a4cd.js";import{A as R}from"./AppCard.7b4f50c2.js";import{s as rt}from"./button.esm.02a2937e.js";import{D as C}from"./datetime.f31b9a37.js";import"./app-grid.vue.43d58a4d.js";import"./inputnumber.esm.c609d9e7.js";import"./inputtext.esm.1179f772.js";import"./dropdown.esm.8b66bbfb.js";import"./index.esm.e8af880c.js";import"./index.esm.7206af9e.js";import"./overlayeventbus.esm.07ca8cc2.js";import"./virtualscroller.esm.50b476a1.js";import"./tristatecheckbox.esm.5205c258.js";import"./checkbox.esm.e5c0df55.js";import"./overlaypanel.esm.cd2c5bd6.js";import"./index.esm.88ed854a.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./order-discussion-message.7308130d.js";const ot=M({__name:"AppOrderCustomerForm",props:{data:{}},setup(e){const a=e,r=y(null),o=y(null);return O(()=>{o.value={displayId:a.data.createdByProfile.displayId,fullName:a.data.createdByProfile.fullName,email:a.data.createdByProfile.userPrivateProfile.email,phoneNumber:a.data.createdByProfile.userPrivateProfile.phoneNumber},r.value=[{$formkit:"primeInputText",name:"displayId",label:"Номер в системе",_disabled:!0},{$formkit:"primeInputText",name:"fullName",label:"Фамилия Имя",_disabled:!0},{$formkit:"primeInputText",name:"email",label:"Email",_disabled:!0},{$formkit:"primeInputText",name:"phoneNumber",label:"Номер телефона",_disabled:!0}]}),(i,t)=>{const S=T("FormKitSchema"),v=T("FormKit");return c(),p(R,{basis:"500px",title:"Заказчик"},{default:n(()=>[s(r)&&s(o)?(c(),p(v,{key:0,ref:"form",modelValue:s(o),"onUpdate:modelValue":t[0]||(t[0]=u=>L(o)?o.value=u:null),type:"form",actions:!1},{default:n(()=>[m(S,{schema:s(r)},null,8,["schema"])]),_:1},8,["modelValue"])):w("",!0)]),_:1})}}});function K(e){if(Number.isFinite(e))return e}function G(e){if(typeof e!="string")return;const a=C.fromFormat(e,"yyyy-MM-dd");if(a.isValid)return a.toJSDate()}function q(e){if(typeof e=="object"&&e instanceof Date){const a=C.fromJSDate(e);if(a.isValid)return a.toFormat("yyyy-MM-dd")}if(typeof e=="string"){const a=C.fromFormat("yyyy-MM-dd",e);if(a.isValid)return a.toFormat("yyyy-MM-dd")}}const it=M({__name:"AppOrderPrivateStatusForm",props:{id:{},readonly:{type:Boolean},data:{}},emits:["update"],setup(e,{emit:a}){const r=e,o=y(null),i=y(null);O(()=>{i.value={deliveryDate:G(r.data.deliveryDate),shippingDate:G(r.data.shippingDate),notes:r.data.notes,totalPriceNet:K(r.data.totalPriceNet),totalPriceGross:K(r.data.totalPriceGross)},o.value=[{$formkit:"primeInputNumber",name:"totalPriceNet",label:"Итого цена нетто",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"min:0.01|max:1000000000",_disabled:!0},{$formkit:"primeInputNumber",name:"totalPriceGross",label:"Итого цена брутто",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"min:0.01|max:1000000000",_disabled:!0},{$formkit:"primeCalendar",name:"deliveryDate",label:"Дата доставки",dateFormat:"yy-mm-dd",showButtonBar:!0,_disabled:r.readonly},{$formkit:"primeCalendar",name:"shippingDate",label:"Дата выдачи",dateFormat:"yy-mm-dd",showButtonBar:!0,_disabled:r.readonly},{$formkit:"primeTextarea",name:"notes",label:"Заметки",rows:"5",_disabled:r.readonly}]});const t=y(null);function S(){var u;(u=t.value)==null||u.node.submit()}function v(){if(!i.value)return;const{deliveryDate:u,shippingDate:l,notes:N}=i.value;a("update",{deliveryDate:q(u),shippingDate:q(l),notes:N})}return(u,l)=>{const N=T("FormKitSchema"),h=rt,I=T("FormKit");return c(),p(R,{basis:"500px",title:"Учёт заказа #"+r.id},{default:n(()=>[s(o)&&s(i)?(c(),p(I,{key:0,ref_key:"form",ref:t,modelValue:s(i),"onUpdate:modelValue":l[1]||(l[1]=g=>L(i)?i.value=g:null),type:"form",actions:!1,onSubmit:v},{default:n(()=>[m(N,{schema:s(o)},null,8,["schema"]),r.readonly?w("",!0):(c(),p(h,{key:0,label:"Обновить",onClick:l[0]||(l[0]=()=>S())}))]),_:1},8,["modelValue"])):w("",!0)]),_:1},8,["title"])}}}),gt=M({__name:"all-order-info",setup(e){const o=W().query.orderId,i=Number(Array.isArray(o)?o[0]:o),t=y(null),S=y(void 0),v=y(null),u=y(null),l=U(X),N=U(Y);async function h(){t.value=null,S.value=void 0,v.value=null,u.value=null}async function I(){h();const f=(await N.getAllOrders(i))[0];t.value=f;const{id:d,vatDocumentRequired:P,shippingMethodName:D,comment:_,orderStatusTypeId:F,productsPriceToPay:x,totalPriceToPay:$,shippingPriceToPay:A,deliveryDate:B,shippingDate:V,notes:E,totalPriceNet:z,totalPriceGross:H}=f;S.value={id:d,vatDocumentRequired:P,shippingMethodName:D,comment:_},v.value={orderStatusTypeId:F,productsPriceToPay:x,totalPriceToPay:$,shippingPriceToPay:A},u.value={deliveryDate:B,shippingDate:V,notes:E,totalPriceNet:z,totalPriceGross:H}}O(I);async function g(b){if(!t.value)return;const{id:f,orderPrivateStatus:d,orderPublicStatus:P}=t.value,{orderStatusTypeId:D,shippingPriceToPay:_}=b;h(),await l.set(async F=>F.rpc("updateOrderStatus",{orderId:f,newTypeId:D,newPublicStatus:{shippingPriceToPay:_},newProductsPublicStatus:P.productsPublicStatus,newPrivateStatus:d.privateStatus,newProductsPrivateStatus:d.productsPrivateStatus})),await I()}async function j(b){if(!t.value)return;const{id:f,orderPrivateStatus:d,orderPublicStatus:P,orderStatusTypeId:D}=t.value;h(),await l.set(async _=>_.rpc("updateOrderStatus",{orderId:f,newTypeId:D,newPublicStatus:P.publicStatus,newProductsPublicStatus:P.productsPublicStatus,newPrivateStatus:b,newProductsPrivateStatus:d.productsPrivateStatus})),await I()}async function J(b){if(!t.value)return;const{id:f,orderPrivateStatus:d,orderPublicStatus:P,orderStatusTypeId:D}=t.value,_=[],F=[];for(const x of b){const{priceToPay:$,priceGross:A,priceMarkup:B,priceNet:V}=x;_.push({priceToPay:$}),F.push({priceGross:A,priceMarkup:B,priceNet:V})}h(),await l.set(async x=>x.rpc("updateOrderStatus",{orderId:f,newTypeId:D,newPublicStatus:P.publicStatus,newProductsPublicStatus:_,newPrivateStatus:d.privateStatus,newProductsPrivateStatus:F})),await I()}return(b,f)=>{const d=Q;return c(),p(Z,null,{default:n(()=>[m(k,null,{default:n(()=>[t.value?(c(),p(d,{key:0,items:t.value.products,mode:"moder",onUpdated:J},null,8,["items"])):w("",!0)]),_:1}),m(k,null,{default:n(()=>[m(et,{data:S.value},null,8,["data"])]),_:1}),m(k,null,{default:n(()=>[v.value?(c(),p(at,{key:0,id:s(i),data:v.value,readonly:!1,onUpdate:g},null,8,["id","data"])):w("",!0)]),_:1}),m(k,null,{default:n(()=>[u.value?(c(),p(it,{key:0,id:s(i),data:u.value,readonly:!1,onUpdate:j},null,8,["id","data"])):w("",!0)]),_:1}),m(k,null,{default:n(()=>[t.value?(c(),p(ot,{key:0,data:t.value},null,8,["data"])):w("",!0)]),_:1}),m(k,null,{default:n(()=>[m(tt,{"order-id":s(i),mode:"moder"},null,8,["order-id"])]),_:1})]),_:1})}}});export{gt as default};