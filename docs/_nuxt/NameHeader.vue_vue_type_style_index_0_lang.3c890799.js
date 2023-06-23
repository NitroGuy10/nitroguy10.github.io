import{u as d}from"./composables.a6106744.js";import{a as o,o as S,b as u,e as p,t as m,j as c,u as f}from"./entry.3d1df297.js";const h=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),s=(t,e)=>(n,r)=>(d(()=>t({...h(n),...r.attrs},r)),()=>{var i,a;return e?(a=(i=r.slots).default)==null?void 0:a.call(i):null}),l={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String};o({name:"NoScript",inheritAttrs:!1,props:{...l,title:String,body:Boolean,renderPriority:[String,Number]},setup:s((t,{slots:e})=>{var i;const n={...t},r=(((i=e.default)==null?void 0:i.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return r&&(n.children=r),{noscript:[n]}})});o({name:"Link",inheritAttrs:!1,props:{...l,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:s(t=>({link:[t]}))});o({name:"Base",inheritAttrs:!1,props:{...l,href:String,target:String},setup:s(t=>({base:t}))});o({name:"Title",inheritAttrs:!1,setup:s((t,{slots:e})=>{var r,i,a;return{title:((a=(i=(r=e.default)==null?void 0:r.call(e))==null?void 0:i[0])==null?void 0:a.children)||null}})});o({name:"Meta",inheritAttrs:!1,props:{...l,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:s(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})});o({name:"Style",inheritAttrs:!1,props:{...l,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:s((t,{slots:e})=>{var i,a,g;const n={...t},r=(g=(a=(i=e.default)==null?void 0:i.call(e))==null?void 0:a[0])==null?void 0:g.children;return r&&(n.children=r),{style:[n]}})});o({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,r;return(r=(n=e.slots).default)==null?void 0:r.call(n)}});o({name:"Html",inheritAttrs:!1,props:{...l,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:s(t=>({htmlAttrs:t}),!0)});const v=o({name:"Body",inheritAttrs:!1,props:{...l,renderPriority:[String,Number]},setup:s(t=>({bodyAttrs:t}),!0)}),y={id:"NameHeader"},b=["href"],N=o({__name:"NameHeader",props:{name:null,href:null},setup(t){const e=t;let n="nitroguy-mobile";return e.name==="The Sass"?n="the-sass-mobile":e.name==="NitroGuy / The Sass"&&(n="nitroguy-the-sass-mobile"),(r,i)=>(S(),u("div",y,[p("h1",{class:c(f(n)+" text-9xl font-bold text-center mb-5")},[p("a",{href:e.href,class:"no-underline"},m(e.name),9,b)],2)]))}});export{v as B,N as _};