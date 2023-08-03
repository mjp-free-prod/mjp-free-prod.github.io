import{O as r}from"./entry.0bcdaafc.js";var p={name:"BaseIcon",props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},methods:{pti:function(){var e=r.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e}}}};function s(i,e){e===void 0&&(e={});var a=e.insertAt;if(!(!i||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",a==="top"&&t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=i:n.appendChild(document.createTextNode(i))}}var o=`
.p-icon {
    display: inline-block;
}
.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}
@-webkit-keyframes p-icon-spin {
0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
}
100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
}
}
@keyframes p-icon-spin {
0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
}
100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
}
}
`;s(o);export{p as s};
