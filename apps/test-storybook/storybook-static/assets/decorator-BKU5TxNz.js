import{f as b,u as R}from"./lit-element-CDYnUiXx.js";import{v as w}from"./v4-CQkTLCs1.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=e=>(n,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(e,n)}):customElements.define(e,n)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:b},A=(e=P,n,t)=>{const{kind:r,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(t.name,e),r==="accessor"){const{name:s}=t;return{set(a){const c=n.get.call(this);n.set.call(this,a),this.requestUpdate(s,c,e)},init(a){return a!==void 0&&this.P(s,void 0,e),a}}}if(r==="setter"){const{name:s}=t;return function(a){const c=this[s];n.call(this,a),this.requestUpdate(s,c,e)}}throw Error("Unsupported decorator location: "+r)};function G(e){return(n,t)=>typeof t=="object"?A(e,n,t):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,n,t)}const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:I}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:u}=__STORYBOOK_MODULE_GLOBAL__;var D="actions",j="storybook/actions",M=`${j}/action-event`,p={depth:10,clearOnStoryChange:!0,limit:50},g=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:g(t,n)},T=e=>!!(typeof e=="object"&&e&&g(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),B=e=>{if(T(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(r.constructor.prototype)}),n}return e},L=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?w():Date.now().toString(36)+Math.random().toString(36).substring(2);function U(e,n={}){let t={...p,...n},r=function(...i){var d,O;if(n.implicit){let h=(d="__STORYBOOK_PREVIEW__"in u?u.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(l=>l.phase==="playing"||l.phase==="rendering");if(h){let l=!((O=window==null?void 0:window.FEATURES)!=null&&O.disallowImplicitActionsInRenderV8),_=new I({phase:h.phase,name:e,deprecated:l});if(l)console.warn(_);else throw _}}let o=S.getChannel(),s=L(),a=5,c=i.map(B),y=i.length>1?c:c[0],v={id:s,count:0,data:{name:e,args:y},options:{...t,maxDepth:a+(t.depth||3),allowFunction:t.allowFunction||!1}};o.emit(M,v)};return r.isAction=!0,r.implicit=n.implicit,r}var V=(...e)=>{let n=p,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(n={...p,...t.pop()});let r=t[0];(t.length!==1||typeof r=="string")&&(r={},t.forEach(o=>{r[o]=o}));let i={};return Object.keys(r).forEach(o=>{i[o]=U(r[o],n)}),i};const{makeDecorator:K,useEffect:Y}=__STORYBOOK_MODULE_PREVIEW_API__,{global:N}=__STORYBOOK_MODULE_GLOBAL__;var{document:E,Element:f}=N,W=/^(\S+)\s*(.*)$/,k=f!=null&&!f.prototype.matches,z=k?"msMatchesSelector":"matches",m=(e,n)=>{if(e[z](n))return!0;let t=e.parentElement;return t?m(t,n):!1},C=(e,...n)=>{let t=e(...n);return Object.entries(t).map(([r,i])=>{let[o,s,a]=r.match(W)||[];return{eventName:s,handler:c=>{(!a||m(c.target,a))&&i(c)}}})},$=(e,...n)=>{let t=E&&E.getElementById("storybook-root");Y(()=>{if(t!=null){let r=C(e,...n);return r.forEach(({eventName:i,handler:o})=>t.addEventListener(i,o)),()=>r.forEach(({eventName:i,handler:o})=>t.removeEventListener(i,o))}},[t,e,n])},H=K({name:"withActions",parameterName:D,skipIfNoParametersOrOptions:!0,wrapper:(e,n,{parameters:t})=>(t!=null&&t.handles&&$(V,...t.handles),e(n))});export{G as n,F as t,H as w};