import{i as x,r as _,x as S}from"./lit-element-CDYnUiXx.js";import{n as w,t as L,w as T}from"./decorator-BKU5TxNz.js";const O=x`
  button {
    all: unset;
    padding: var(--test-button-padding, 8px 16px);
    border-radius: var(--test-button-border-radius, 4px);
    font-family: var(--test-button-font-family, sans-serif);
    font-weight: var(--test-button-font-weight, bold);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-transform: var(--test-button-text-transform, none);
    cursor: pointer;
  }

  .primary {
    background-color: var(--bg-test-button-primary, blue);
    color: var(--fg-test-button-primary, white);
  }

  .secondary {
    background-color: var(--bg-test-button-secondary, white);
    color: var(--fg-test-button-secondary, black);
  }
`;var C=Object.defineProperty,j=Object.getOwnPropertyDescriptor,h=(a,n,i,s)=>{for(var t=s>1?void 0:s?j(n,i):n,u=a.length-1,c;u>=0;u--)(c=a[u])&&(t=(s?c(n,i,t):c(t))||t);return s&&t&&C(n,i,t),t};let l=class extends _{constructor(){super(...arguments),this.variant="primary"}render(){return S`<button class="${this.variant.toLowerCase()}"><slot></button>`}};l.styles=[O];h([w({type:String})],l.prototype,"variant",2);l=h([L("test-button")],l);const B={title:"Test Components/Button",component:"test-button",args:{variant:"Primary",label:"Label"},parameters:{actions:{handles:["click"]},docs:{controls:{sort:"alpha"}}},decorators:[T],argTypes:{variant:{name:"Button variant",defaultValue:"Primary",description:`The button variant.       
<br>

| HTML Attribute | Component Property |
| :---: | :---: |
| \`variant\` | \`variant\` |
<br>            
`,table:{type:{summary:"string"},defaultValue:{summary:"Primary"}},control:"select",options:["Primary","Secondary"]},label:{name:"Label",defaultValue:"",description:"The button label.",table:{type:{summary:"string"},defaultValue:{summary:"Primary"}},control:"text"}},render:a=>S`<test-button variant="${a.variant}">${a.label}</test-button>`},r={args:{variant:"Primary",label:"Label"}},e={args:{variant:"Secondary",label:"Label"}},o={args:{...r.args}};var b,m,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "Primary",
    label: "Label"
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,y,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "Secondary",
    label: "Label"
  }
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,f,P;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  }
}`,...(P=(f=o.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const V=["Primary","Secondary","Playground"],D=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,Primary:r,Secondary:e,__namedExportsOrder:V,default:B},Symbol.toStringTag,{value:"Module"}));export{D as C,r as P,e as S,o as a};
