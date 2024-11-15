import{ae as t,af as o}from"./index-DBlk10Gq.js";import{useMDXComponents as i}from"./index-BSj771as.js";import"./iframe-tt8TuU0O.js";import"../sb-preview/runtime.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";function s(e){const n={a:"a",h1:"h1",h2:"h2",p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"hey-there-",children:"Hey there! 👋"}),`
`,t.jsxs(n.p,{children:["This is a sample web component library, built with ",t.jsx(n.a,{href:"https://lit.dev/",rel:"nofollow",children:"Lit"}),"."]}),`
`,t.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,t.jsx(n.p,{children:"To get started, install the component bundle:"}),`
`,t.jsx(o,{dark:!0,code:`
npm install @xsu1010/components
`}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(n.p,{children:"This library provides two simple components: a button and an input field."}),`
`,t.jsx(n.p,{children:"Its theming is based on a CSS variable approach, which allows for a multi-brand setup by simply swapping the CSS file to obtain the desired look and feel."}),`
`,t.jsx(n.p,{children:"To import the components, first you need to import the tokens according to which brand you want to use."}),`
`,t.jsx(n.p,{children:"For example, here's how to import them into a CSS file"}),`
`,t.jsx(o,{dark:!0,language:"css",code:`
/* styles.css */

/* Main brand */
@import "@xsu1010/components/dist/src/tokens/main.css";
/* Secondary brand */
@import "@xsu1010/components/dist/src/tokens/sub.css";
`}),`
`,t.jsx(n.p,{children:"Now, you can start importing the components into the project!"}),`
`,t.jsx(o,{language:"html",dark:!0,code:`
<script>
  import TestButton from "@xsu1010/components/button";
  import TestInput from "@xsu1010/components/input";
<\/script>

<!-- If you imported the main brand -->
<div class="main-brand">
  <test-button>Button label</test-button>
  <test-input label="Label"></test-input>
</div>

<!-- If you imported the secondary brand -->
<div class="sub-brand">
  <test-button>Button label</test-button>
  <test-input label="Label"></test-input>
</div>
  `}),`
`,t.jsx(n.p,{children:"Check the sidebar for further documentation on the components. You can also change the brand theming on the top bar."}),`
`,t.jsx(n.p,{children:"Thank you so much for checking this out!"})]})}function u(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s(e)}export{u as default};
