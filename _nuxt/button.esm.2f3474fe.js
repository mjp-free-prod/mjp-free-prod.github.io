import{I as m,a1 as c,o as l,c as p,N as u,d as P,t as v,J as i,H as h,W as k,j as b,X as w,Y as z,B as g,k as f,n as y,a as C}from"./entry.1d37459d.js";import{s as N}from"./index.esm.827275bc.js";var O=`
@layer primevue {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }

    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }

    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,T={root:function(t){var n=t.props,o=t.instance;return["p-badge p-component",{"p-badge-no-gutter":c.isNotEmpty(n.value)&&String(n.value).length===1,"p-badge-dot":c.isEmpty(n.value)&&!o.$slots.default,"p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warning":n.severity==="warning","p-badge-danger":n.severity==="danger"}]}},E=m.extend({name:"badge",css:O,classes:T}),A={name:"BaseBadge",extends:h,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:E,provide:function(){return{$parentInstance:this}}},$={name:"Badge",extends:A};function D(e,t,n,o,a,d){return l(),p("span",i({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"badge"}),[u(e.$slots,"default",{},function(){return[P(v(e.value),1)]})],16)}$.render=D;function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function r(e,t,n){return t=L(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){var t=V(e,"string");return s(t)==="symbol"?t:String(t)}function V(e,t){if(s(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(s(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var j={root:function(t){var n,o=t.instance,a=t.props;return["p-button p-component",(n={"p-button-icon-only":o.hasIcon&&!a.label&&!a.badge,"p-button-vertical":(a.iconPos==="top"||a.iconPos==="bottom")&&a.label,"p-disabled":o.$attrs.disabled||o.$attrs.disabled===""||a.loading,"p-button-loading":a.loading,"p-button-loading-label-only":a.loading&&!o.hasIcon&&a.label,"p-button-link":a.link},r(n,"p-button-".concat(a.severity),a.severity),r(n,"p-button-raised",a.raised),r(n,"p-button-rounded",a.rounded),r(n,"p-button-text",a.text),r(n,"p-button-outlined",a.outlined),r(n,"p-button-sm",a.size==="small"),r(n,"p-button-lg",a.size==="large"),r(n,"p-button-plain",a.plain),n)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(t){var n=t.props;return["p-button-icon",{"p-button-icon-left":n.iconPos==="left"&&n.label,"p-button-icon-right":n.iconPos==="right"&&n.label,"p-button-icon-top":n.iconPos==="top"&&n.label,"p-button-icon-bottom":n.iconPos==="bottom"&&n.label}]},label:"p-button-label"},H=m.extend({name:"button",classes:j}),J={name:"BaseButton",extends:h,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:H,provide:function(){return{$parentInstance:this}}},K={name:"Button",extends:J,methods:{getPTOptions:function(t){var n,o;return this.ptm(t,{parent:{props:(n=this.$parent)===null||n===void 0?void 0:n.$props,state:(o=this.$parent)===null||o===void 0?void 0:o.$data},context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:N,Badge:$},directives:{ripple:k}},R=["aria-label","disabled","data-pc-severity"];function U(e,t,n,o,a,d){var S=b("SpinnerIcon"),B=b("Badge"),I=w("ripple");return z((l(),p("button",i({class:e.cx("root"),type:"button","aria-label":d.defaultAriaLabel,disabled:d.disabled},d.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":e.severity}),[u(e.$slots,"default",{},function(){return[e.loading?u(e.$slots,"loadingicon",{key:0,class:g([e.cx("loadingIcon"),e.cx("icon")])},function(){return[e.loadingIcon?(l(),p("span",i({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(l(),f(S,i({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):u(e.$slots,"icon",{key:1,class:g([e.cx("icon")])},function(){return[e.icon?(l(),p("span",i({key:0,class:[e.cx("icon"),e.icon,e.iconClass]},e.ptm("icon")),null,16)):y("",!0)]}),C("span",i({class:e.cx("label")},e.ptm("label")),v(e.label||" "),17),e.badge?(l(),f(B,i({key:2,value:e.badge,class:e.badgeClass,unstyled:e.unstyled},e.ptm("badge")),null,16,["value","class","unstyled"])):y("",!0)]})],16,R)),[[I]])}K.render=U;export{K as s};
