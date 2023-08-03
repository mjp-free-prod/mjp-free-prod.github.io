import{O as g}from"./overlayeventbus.esm.1b90bb54.js";import{s as k}from"./portal.esm.679bfeaa.js";import{v as y,Z as p,E as d,H,B as L,o as h,c as f,s as a,C as m,b as v,w as b,T as M,a as c}from"./entry.0bcdaafc.js";import{s as S}from"./basecomponent.esm.6659a568.js";var C=`
.p-colorpicker-panel .p-colorpicker-color {
    background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)
}

.p-colorpicker-panel .p-colorpicker-hue {
    background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)
}
`,x={root:function(e){var n=e.props;return["p-colorpicker p-component",{"p-colorpicker-overlay":!n.inline}]},input:function(e){var n=e.props;return["p-colorpicker-preview p-inputtext",{"p-disabled":n.disabled}]},panel:function(e){var n=e.instance,o=e.props;return["p-colorpicker-panel",{"p-colorpicker-overlay-panel":!o.inline,"p-disabled":o.disabled,"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1}]},content:"p-colorpicker-content",selector:"p-colorpicker-color-selector",color:"p-colorpicker-color",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},B=y(C,{name:"colorpicker",manual:!0}),D=B.load,w={name:"BaseColorPicker",extends:S,props:{modelValue:{type:null,default:null},defaultColor:{type:null,default:"ff0000"},inline:{type:Boolean,default:!1},format:{type:String,default:"hex"},disabled:{type:Boolean,default:!1},tabindex:{type:String,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:String,default:"body"},panelClass:null},css:{classes:x,loadStyle:D},provide:function(){return{$parentInstance:this}}},V={name:"ColorPicker",extends:w,emits:["update:modelValue","change","show","hide"],props:{modelValue:{type:null,default:null},defaultColor:{type:null,default:"ff0000"},inline:{type:Boolean,default:!1},format:{type:String,default:"hex"},disabled:{type:Boolean,default:!1},tabindex:{type:String,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:String,default:"body"},panelClass:null},data:function(){return{overlayVisible:!1}},hsbValue:null,outsideClickListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,scrollHandler:null,resizeListener:null,hueDragging:null,colorDragging:null,selfUpdate:null,picker:null,colorSelector:null,colorHandle:null,hueView:null,hueHandle:null,watch:{modelValue:{immediate:!0,handler:function(e){this.hsbValue=this.toHSB(e),this.selfUpdate?this.selfUpdate=!1:this.updateUI()}}},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindDragListeners(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.picker&&this.autoZIndex&&p.clear(this.picker),this.clearRefs()},mounted:function(){this.updateUI()},methods:{pickColor:function(e){var n=this.colorSelector.getBoundingClientRect(),o=n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),r=n.left+document.body.scrollLeft,i=Math.floor(100*Math.max(0,Math.min(150,(e.pageX||e.changedTouches[0].pageX)-r))/150),s=Math.floor(100*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-o)))/150);this.hsbValue=this.validateHSB({h:this.hsbValue.h,s:i,b:s}),this.selfUpdate=!0,this.updateColorHandle(),this.updateInput(),this.updateModel(),this.$emit("change",{event:e,value:this.modelValue})},pickHue:function(e){var n=this.hueView.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);this.hsbValue=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-n)))/150),s:100,b:100}),this.selfUpdate=!0,this.updateColorSelector(),this.updateHue(),this.updateModel(),this.updateInput(),this.$emit("change",{event:e,value:this.modelValue})},updateModel:function(){switch(this.format){case"hex":this.$emit("update:modelValue",this.HSBtoHEX(this.hsbValue));break;case"rgb":this.$emit("update:modelValue",this.HSBtoRGB(this.hsbValue));break;case"hsb":this.$emit("update:modelValue",this.hsbValue);break}},updateColorSelector:function(){if(this.colorSelector){var e=this.validateHSB({h:this.hsbValue.h,s:100,b:100});this.colorSelector.style.backgroundColor="#"+this.HSBtoHEX(e)}},updateColorHandle:function(){this.colorHandle&&(this.colorHandle.style.left=Math.floor(150*this.hsbValue.s/100)+"px",this.colorHandle.style.top=Math.floor(150*(100-this.hsbValue.b)/100)+"px")},updateHue:function(){this.hueHandle&&(this.hueHandle.style.top=Math.floor(150-150*this.hsbValue.h/360)+"px")},updateInput:function(){this.$refs.input&&(this.$refs.input.style.backgroundColor="#"+this.HSBtoHEX(this.hsbValue))},updateUI:function(){this.updateHue(),this.updateColorHandle(),this.updateInput(),this.updateColorSelector()},validateHSB:function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},validateRGB:function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},validateHEX:function(e){var n=6-e.length;if(n>0){for(var o=[],r=0;r<n;r++)o.push("0");o.push(e),e=o.join("")}return e},HEXtoRGB:function(e){var n=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:n>>16,g:(n&65280)>>8,b:n&255}},HEXtoHSB:function(e){return this.RGBtoHSB(this.HEXtoRGB(e))},RGBtoHSB:function(e){var n={h:0,s:0,b:0},o=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),i=r-o;return n.b=r,n.s=r!==0?255*i/r:0,n.s!==0?e.r===r?n.h=(e.g-e.b)/i:e.g===r?n.h=2+(e.b-e.r)/i:n.h=4+(e.r-e.g)/i:n.h=-1,n.h*=60,n.h<0&&(n.h+=360),n.s*=100/255,n.b*=100/255,n},HSBtoRGB:function(e){var n={r:null,g:null,b:null},o=Math.round(e.h),r=Math.round(e.s*255/100),i=Math.round(e.b*255/100);if(r===0)n={r:i,g:i,b:i};else{var s=i,l=(255-r)*i/255,u=(s-l)*(o%60)/60;o===360&&(o=0),o<60?(n.r=s,n.b=l,n.g=l+u):o<120?(n.g=s,n.b=l,n.r=s-u):o<180?(n.g=s,n.r=l,n.b=l+u):o<240?(n.b=s,n.r=l,n.g=s-u):o<300?(n.b=s,n.g=l,n.r=l+u):o<360?(n.r=s,n.g=l,n.b=s-u):(n.r=0,n.g=0,n.b=0)}return{r:Math.round(n.r),g:Math.round(n.g),b:Math.round(n.b)}},RGBtoHEX:function(e){var n=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var o in n)n[o].length===1&&(n[o]="0"+n[o]);return n.join("")},HSBtoHEX:function(e){return this.RGBtoHEX(this.HSBtoRGB(e))},toHSB:function(e){var n;if(e)switch(this.format){case"hex":n=this.HEXtoHSB(e);break;case"rgb":n=this.RGBtoHSB(e);break;case"hsb":n=e;break}else n=this.HEXtoHSB(this.defaultColor);return n},onOverlayEnter:function(e){this.updateUI(),this.alignOverlay(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&p.set("overlay",e,this.$primevue.config.zIndex.overlay),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.clearRefs(),this.$emit("hide")},onOverlayAfterLeave:function(e){this.autoZIndex&&p.clear(e)},alignOverlay:function(){this.appendTo==="self"?d.relativePosition(this.picker,this.$refs.input):d.absolutePosition(this.picker,this.$refs.input)},onInputClick:function(){this.disabled||(this.overlayVisible=!this.overlayVisible)},onInputKeydown:function(e){switch(e.code){case"Space":this.overlayVisible=!this.overlayVisible,e.preventDefault();break;case"Escape":case"Tab":this.overlayVisible=!1;break}},onColorMousedown:function(e){this.disabled||(this.bindDragListeners(),this.onColorDragStart(e))},onColorDragStart:function(e){this.disabled||(this.colorDragging=!0,this.pickColor(e),this.$el.setAttribute("p-colorpicker-dragging","true"),!this.isUnstyled&&d.addClass(this.$el,"p-colorpicker-dragging"),e.preventDefault())},onDrag:function(e){this.colorDragging&&(this.pickColor(e),e.preventDefault()),this.hueDragging&&(this.pickHue(e),e.preventDefault())},onDragEnd:function(){this.colorDragging=!1,this.hueDragging=!1,this.$el.setAttribute("p-colorpicker-dragging","false"),!this.isUnstyled&&d.removeClass(this.$el,"p-colorpicker-dragging"),this.unbindDragListeners()},onHueMousedown:function(e){this.disabled||(this.bindDragListeners(),this.onHueDragStart(e))},onHueDragStart:function(e){this.disabled||(this.hueDragging=!0,this.pickHue(e),!this.isUnstyled&&d.addClass(this.$el,"p-colorpicker-dragging"))},isInputClicked:function(e){return this.$refs.input&&this.$refs.input.isSameNode(e.target)},bindDragListeners:function(){this.bindDocumentMouseMoveListener(),this.bindDocumentMouseUpListener()},unbindDragListeners:function(){this.unbindDocumentMouseMoveListener(),this.unbindDocumentMouseUpListener()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.picker&&!e.picker.contains(n.target)&&!e.isInputClicked(n)&&(e.overlayVisible=!1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new H(this.$refs.container,function(){e.overlayVisible&&(e.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!d.isTouchDevice()&&(e.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentMouseMoveListener:function(){this.documentMouseMoveListener||(this.documentMouseMoveListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.documentMouseMoveListener))},unbindDocumentMouseMoveListener:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null)},bindDocumentMouseUpListener:function(){this.documentMouseUpListener||(this.documentMouseUpListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseUpListener:function(){this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},pickerRef:function(e){this.picker=e},colorSelectorRef:function(e){this.colorSelector=e},colorHandleRef:function(e){this.colorHandle=e},hueViewRef:function(e){this.hueView=e},hueHandleRef:function(e){this.hueHandle=e},clearRefs:function(){this.picker=null,this.colorSelector=null,this.colorHandle=null,this.hueView=null,this.hueHandle=null},onOverlayClick:function(e){g.emit("overlay-click",{originalEvent:e,target:this.$el})}},components:{Portal:k}},E=["tabindex","disabled"];function R(t,e,n,o,r,i){var s=L("Portal");return h(),f("div",a({ref:"container",class:t.cx("root")},t.ptm("root")),[n.inline?m("",!0):(h(),f("input",a({key:0,ref:"input",type:"text",class:t.cx("input"),readonly:"readonly",tabindex:n.tabindex,disabled:n.disabled,onClick:e[0]||(e[0]=function(){return i.onInputClick&&i.onInputClick.apply(i,arguments)}),onKeydown:e[1]||(e[1]=function(){return i.onInputKeydown&&i.onInputKeydown.apply(i,arguments)})},t.ptm("input")),null,16,E)),v(s,{appendTo:n.appendTo,disabled:n.inline},{default:b(function(){return[v(M,{name:"p-connected-overlay",onEnter:i.onOverlayEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},{default:b(function(){return[n.inline||r.overlayVisible?(h(),f("div",a({key:0,ref:i.pickerRef,class:[t.cx("panel"),n.panelClass],onClick:e[10]||(e[10]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},t.ptm("panel")),[c("div",a({class:t.cx("panel")},t.ptm("content")),[c("div",a({ref:i.colorSelectorRef,class:t.cx("selector"),onMousedown:e[2]||(e[2]=function(l){return i.onColorMousedown(l)}),onTouchstart:e[3]||(e[3]=function(l){return i.onColorDragStart(l)}),onTouchmove:e[4]||(e[4]=function(l){return i.onDrag(l)}),onTouchend:e[5]||(e[5]=function(l){return i.onDragEnd()})},t.ptm("selector")),[c("div",a({class:t.cx("color")},t.ptm("color")),[c("div",a({ref:i.colorHandleRef,class:t.cx("colorHandle")},t.ptm("colorHandle")),null,16)],16)],16),c("div",a({ref:i.hueViewRef,class:t.cx("hue"),onMousedown:e[6]||(e[6]=function(l){return i.onHueMousedown(l)}),onTouchstart:e[7]||(e[7]=function(l){return i.onHueDragStart(l)}),onTouchmove:e[8]||(e[8]=function(l){return i.onDrag(l)}),onTouchend:e[9]||(e[9]=function(l){return i.onDragEnd()})},t.ptm("hue")),[c("div",a({ref:i.hueHandleRef,class:t.cx("hueHandle")},t.ptm("hueHandle")),null,16)],16)],16)],16)):m("",!0)]}),_:1},8,["onEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo","disabled"])],16)}function I(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var O=`
.p-colorpicker {
    display: inline-block;
}
.p-colorpicker-dragging {
    cursor: pointer;
}
.p-colorpicker-overlay {
    position: relative;
}
.p-colorpicker-panel {
    position: relative;
    width: 193px;
    height: 166px;
}
.p-colorpicker-overlay-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-colorpicker-preview {
    cursor: pointer;
}
.p-colorpicker-panel .p-colorpicker-content {
    position: relative;
}
.p-colorpicker-panel .p-colorpicker-color-selector {
    width: 150px;
    height: 150px;
    top: 8px;
    left: 8px;
    position: absolute;
}
.p-colorpicker-panel .p-colorpicker-color {
    width: 150px;
    height: 150px;
}
.p-colorpicker-panel .p-colorpicker-color-handle {
    position: absolute;
    top: 0px;
    left: 150px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    border-width: 1px;
    border-style: solid;
    margin: -5px 0 0 -5px;
    cursor: pointer;
    opacity: 0.85;
}
.p-colorpicker-panel .p-colorpicker-hue {
    width: 17px;
    height: 150px;
    top: 8px;
    left: 167px;
    position: absolute;
    opacity: 0.85;
}
.p-colorpicker-panel .p-colorpicker-hue-handle {
    position: absolute;
    top: 150px;
    left: 0px;
    width: 21px;
    margin-left: -2px;
    margin-top: -5px;
    height: 10px;
    border-width: 2px;
    border-style: solid;
    opacity: 0.85;
    cursor: pointer;
}
`;I(O);V.render=R;export{V as default};
