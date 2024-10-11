import{r as i}from"./index.DhYZZe0J.js";var x={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=i,j=Symbol.for("react.element"),g=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,y=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function f(t,s,o){var r,n={},d=null,a=null;o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),s.ref!==void 0&&(a=s.ref);for(r in s)v.call(s,r)&&!S.hasOwnProperty(r)&&(n[r]=s[r]);if(t&&t.defaultProps)for(r in s=t.defaultProps,s)n[r]===void 0&&(n[r]=s[r]);return{$$typeof:j,type:t,key:d,ref:a,props:n,_owner:y.current}}p.Fragment=g;p.jsx=f;p.jsxs=f;x.exports=p;var e=x.exports;const _=({articles:t,onFilter:s})=>{const[o,r]=i.useState(""),[n,d]=i.useState(!1),[a,u]=i.useState("");return i.useEffect(()=>{const c=t.filter(l=>l.title.toLowerCase().includes(o.toLowerCase())&&(!n||l.stock>0)&&(a===""||l.serial.includes(a)));s(c)},[o,n,a]),e.jsxs("div",{className:"filters",children:[e.jsxs("label",{className:"checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:c=>d(c.target.checked),className:"form-checkbox h-5 w-5 text-blue-600"}),e.jsx("span",{className:"checkbox-text",children:"Con Stock"})]}),e.jsx("input",{type:"text",placeholder:"Buscar por título",value:o,onChange:c=>r(c.target.value),className:"filter-input"}),e.jsx("input",{type:"text",placeholder:"Buscar por serial",value:a,onChange:c=>u(c.target.value),className:"filter-input"})]})},k=({article:t})=>e.jsxs("div",{className:"article-card",children:[e.jsx("h2",{className:"article-title",children:t.title}),e.jsx("p",{children:t.description}),e.jsxs("p",{children:["Price: $",t.price]}),e.jsxs("p",{children:["Stock: ",t.stock]}),e.jsxs("p",{children:["Category: ",t.category]}),e.jsxs("p",{children:["Serial: ",t.serial]}),e.jsxs("p",{children:["Brand: ",t.brand]}),e.jsxs("p",{children:["Discount: ",t.discount,"%"]}),e.jsxs("p",{children:["Rating: ",t.rating]})]}),N=()=>{const[t,s]=i.useState([]),[o,r]=i.useState([]),[n,d]=i.useState(1),a=6;i.useEffect(()=>{(async()=>{const h=await(await fetch("https://raw.githubusercontent.com/HERDACHI/frontend-system/main/src/data/articles.json")).json();s(h),r(h)})()},[]);const u=o.slice((n-1)*a,n*a);return e.jsxs("div",{children:[e.jsx(_,{articles:t,onFilter:r}),e.jsx("div",{className:"articles-list",children:u.map(c=>e.jsx(k,{article:c},c.id))}),e.jsx("div",{className:"pagination",children:Array.from({length:Math.ceil(o.length/a)}).map((c,l)=>e.jsx("button",{onClick:()=>d(l+1),className:`pagination-button ${n===l+1?"active":""}`,children:l+1},l+1))})]})};export{N as default};
