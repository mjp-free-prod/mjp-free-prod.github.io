import{_ as I}from"./AppProductsGrid.vue.ceeb7faa.js";import{f as b,r as e,v as x,g as N,i as O,o as n,k as l,w as o,b as r,n as v,q as y,O as S}from"./entry.e7bb3c46.js";import{p as T}from"./app-grid.vue.837374ac.js";import{A as t}from"./AppCardGroup.e42054dd.js";import{_ as $}from"./AppOrderPublicStatusForm.vue.285322e5.js";import{A as R}from"./AppCardLayout.22b5a63b.js";import V from"./order-discussion.b7112bcd.js";import{_ as B}from"./order-form-ro.vue.7c948ff8.js";import"./button.esm.3c6ebd50.js";import"./index.esm.3d20b6db.js";import"./AppCard.21217234.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./inputtext.esm.4620d3df.js";import"./inputnumber.esm.1f5a2a01.js";import"./dropdown.esm.3140a904.js";import"./index.esm.930595ae.js";import"./overlayeventbus.esm.e0259049.js";import"./virtualscroller.esm.8754c17f.js";import"./tristatecheckbox.esm.97a4dd96.js";import"./checkbox.esm.5811c026.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.53f3473f.js";import"./index.esm.1626820c.js";import"./order-discussion-message.49809880.js";const nr=b({__name:"my-order-info",setup(G){const p=e(null),c=x(),h=N(S),a=c.query.orderId,s=Number(Array.isArray(a)?a[0]:a),i=e(void 0),f=e(void 0),u=e(void 0);return O(async()=>{var _;const m=(await h.getUserOrders(s))[0];i.value=m;const{id:d,vatDocumentRequired:P,shippingMethodName:A,comment:D,orderStatusTypeId:k,productsPriceToPay:g,totalPriceToPay:q,shippingPriceToPay:C}=m;f.value={id:d,vatDocumentRequired:P,shippingMethodName:A,comment:D},u.value={orderStatusTypeId:k,productsPriceToPay:g,totalPriceToPay:q,shippingPriceToPay:C},await T(300),c.hash==="#discussion"&&((_=p.value)==null||_.$el.scrollIntoView({behavior:"smooth"}))}),(w,m)=>{const d=I;return n(),l(R,null,{default:o(()=>[r(t,null,{default:o(()=>[i.value?(n(),l(d,{key:0,style:{"flex-grow":"1",width:"100%"},items:i.value.products,mode:"user-ro"},null,8,["items"])):v("",!0)]),_:1}),r(t,null,{default:o(()=>[r(B,{data:f.value},null,8,["data"])]),_:1}),r(t,null,{default:o(()=>[u.value?(n(),l($,{key:0,id:y(s),data:u.value,readonly:!0},null,8,["id","data"])):v("",!0)]),_:1}),r(t,null,{default:o(()=>[r(V,{"order-id":y(s),mode:"customer",ref_key:"discussion",ref:p},null,8,["order-id"])]),_:1})]),_:1})}}});export{nr as default};