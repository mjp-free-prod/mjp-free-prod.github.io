import{_ as C}from"./AppProductsGrid.vue.5a554516.js";import{f as g,v as I,g as N,r as d,i as O,o as n,k as p,w as o,b as r,n as l,q as _,O as S}from"./entry.9b45c852.js";import{A as e}from"./AppCardGroup.ee93b062.js";import{_ as T}from"./AppOrderPublicStatusForm.vue.5e00b046.js";import{A as b}from"./AppCardLayout.3b8704c6.js";import x from"./order-discussion.fb1ee9c1.js";import{_ as R}from"./order-form-ro.vue.f5e6e86c.js";import"./app-grid.vue.50bfba8d.js";import"./inputnumber.esm.960b1be9.js";import"./button.esm.6176fc8e.js";import"./index.esm.36162d56.js";import"./inputtext.esm.c279c8a9.js";import"./dropdown.esm.d4ef765f.js";import"./index.esm.e8e4ef32.js";import"./overlayeventbus.esm.e7eace53.js";import"./virtualscroller.esm.6c99f57e.js";import"./tristatecheckbox.esm.9d69e4f9.js";import"./checkbox.esm.fee42926.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.449a756f.js";import"./index.esm.bdabf1ee.js";import"./AppCard.73bfc289.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./order-discussion-message.37f18bf0.js";const mr=g({__name:"my-order-info",setup($){const f=I(),v=N(S),t=f.query.orderId,a=Number(Array.isArray(t)?t[0]:t),s=d(void 0),c=d(void 0),i=d(void 0);return O(async()=>{const m=(await v.getUserOrders(a))[0];s.value=m;const{id:u,vatDocumentRequired:P,shippingMethodName:A,comment:w,orderStatusTypeId:D,productsPriceToPay:h,totalPriceToPay:k,shippingPriceToPay:q}=m;c.value={id:u,vatDocumentRequired:P,shippingMethodName:A,comment:w},i.value={orderStatusTypeId:D,productsPriceToPay:h,totalPriceToPay:k,shippingPriceToPay:q}}),(y,m)=>{const u=C;return n(),p(b,null,{default:o(()=>[r(e,null,{default:o(()=>[s.value?(n(),p(u,{key:0,items:s.value.products,mode:"user-ro"},null,8,["items"])):l("",!0)]),_:1}),r(e,null,{default:o(()=>[r(R,{data:c.value},null,8,["data"])]),_:1}),r(e,null,{default:o(()=>[i.value?(n(),p(T,{key:0,id:_(a),data:i.value,readonly:!0},null,8,["id","data"])):l("",!0)]),_:1}),r(e,null,{default:o(()=>[r(x,{"order-id":_(a),mode:"customer"},null,8,["order-id"])]),_:1})]),_:1})}}});export{mr as default};