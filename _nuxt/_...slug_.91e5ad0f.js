import l from"./ContentRenderer.e009cbca.js";import u from"./ContentDoc.965002b1.js";import{f as c,j as i,o as m,c as h,b as s,w as r,a as t,t as n,h as a}from"./entry.0bcdaafc.js";import"./ContentRendererMarkdown.a9ed9526.js";import"./index.a6ef77ff.js";import"./preview.3f1ba7d4.js";import"./index.cd32510b.js";import"./ContentQuery.4bdae936.js";import"./asyncData.6a41a8db.js";import"./query.3150fd61.js";import"./utils.442390bc.js";const d={class:"markdown"},f={class:"font-bold"},x=t("hr",null,null,-1),g={class:"text-2xl"},P=c({__name:"[...slug]",setup(C){const e=i().params.slug.toString();return(v,w)=>{const _=l,p=u;return m(),h("div",d,[s(p,{path:a(e)},{default:r(({doc:o})=>[t("h1",null,n(o.title),1),t("p",null,n(o.description),1),t("p",f," Author: "+n(o.author),1),x,s(_,{value:o},null,8,["value"])]),"not-found":r(()=>[t("h1",g," Content Page ("+n(a(e))+") not found ",1)]),_:1},8,["path"])])}}});export{P as default};