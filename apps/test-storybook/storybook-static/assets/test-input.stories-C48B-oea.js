import{i as _,r as L,x}from"./lit-element-CDYnUiXx.js";import{n as S,t as T,w as O}from"./decorator-BKU5TxNz.js";const w=_`
  :host {
    display: block;
    width: 200px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-family: var(--test-input-font-family, sans-serif);
    gap: var(--test-input-label-gap, 8px);
  }

  input {
    all: unset;
    cursor: text;
    padding: var(--test-input-padding, 8px 16px);
    border: var(--test-input-border, 1px solid #ccc);
    border-radius: var(--test-input-border-radius, 4px);
    font-family: var(--test-input-font-family, sans-serif);
  }

  .primary {
    background-color: var(--bg-test-input-primary, #eee);
    color: var(--fg-test-input-primary, black);
  }

  .secondary {
    background-color: var(--bg-test-input-secondary, #ffaaaa);
    color: var(--fg-test-input-secondary, black);
  }
`;var C=Object.defineProperty,j=Object.getOwnPropertyDescriptor,u=(t,o,l,i)=>{for(var r=i>1?void 0:i?j(o,l):o,p=t.length-1,c;p>=0;p--)(c=t[p])&&(r=(i?c(o,l,r):c(r))||r);return i&&r&&C(o,l,r),r};let n=class extends L{constructor(){super(),this.variant="primary",this.label="Label",this.internals=this.attachInternals(),this.internals.role="input"}render(){return x`
      <label
        >${this.label}
        <input type="text" class="${this.variant.toLowerCase()}" />
      </label>
    `}};n.styles=[w];u([S({type:String})],n.prototype,"variant",2);u([S({type:String})],n.prototype,"label",2);n=u([T("test-input")],n);const I={title:"Test Components/Input",component:"test-input",args:{variant:"Primary",label:"Label"},parameters:{actions:{handles:["click"]},docs:{controls:{sort:"alpha"}}},decorators:[O],argTypes:{variant:{name:"Button variant",defaultValue:"Primary",description:`The input variant.       
<br>

| HTML Attribute | Component Property |
| :---: | :---: |
| \`variant\` | \`variant\` |
<br>            
`,table:{type:{summary:"string"},defaultValue:{summary:"Primary"}},control:"select",options:["Primary","Secondary"]},label:{name:"Label",defaultValue:"",description:"The input label.",table:{type:{summary:"string"},defaultValue:{summary:"Primary"}},control:"text"}},render:t=>x`<test-input
      label="${t.label}"
      variant="${t.variant}"
    ></test-input>`},a={args:{variant:"Primary",label:"Label"}},e={args:{variant:"Secondary",label:"Label"}},s={args:{...a.args}};var m,d,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "Primary",
    label: "Label"
  }
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,v,f;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "Secondary",
    label: "Label"
  }
}`,...(f=(v=e.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,P,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  }
}`,...(h=(P=s.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};const V=["Primary","Secondary","Playground"],D=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,Primary:a,Secondary:e,__namedExportsOrder:V,default:I},Symbol.toStringTag,{value:"Module"}));export{D as C,a as P,e as S,s as a};
