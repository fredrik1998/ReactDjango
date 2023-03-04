import{s as u,a as k,b as F,c as I,r as a,j as t,d as n,H as E,F as e,B as L}from"./index-3f1fbcba.js";import{b as P}from"./cartActions-66f2fd8c.js";import{L as j}from"./layout-3b969bc0.js";import{F as w}from"./FormContainer-4ffde715.js";import{C as A}from"./CheckoutSteps-a2918ae4.js";const q=u.h1`
color: #fff;
`,D=u(L)`
width: 100%;
background: none;
background-color: #45c1bc;
color: #121212;
border-radius: 18px;
font-weight: 700;
text-transform: uppercase;
cursor: pointer;
font-size: 13px;
margin-top: 40px;
&:hover:before {
  left: 80%;
}
&:hover:after {
  right: 80%;
}
&:hover {
  background: #45c1bc;
  color: #fafafa;
  scale: 1.02;
 
}`;u(e)`
width: 100%;
.form-control{
    background-color: #1a1a1a;
    width: 100px; 
}
`;const J=()=>{const h=k(),y=F(),C=I(o=>o.cart),{shippingAddress:r}=C,[c,f]=a.useState(r&&r.address?r.address:""),[i,b]=a.useState(r&&r.city?r.city:""),[l,v]=a.useState(r&&r.postalCode?r.postalCode:""),[p,g]=a.useState(r&&r.country?r.country:""),[s,m]=a.useState({}),[G,S]=a.useState(!0),x=o=>{o.preventDefault();const d={};c||(d.address="Address is required"),i||(d.city="City is required"),l||(d.postalCode="Postal code is required"),p||(d.country="Country is required"),m(d),Object.keys(d).length===0&&(h(P({address:c,city:i,postalCode:l,country:p})),y("/payment"))};return a.useEffect(()=>{S(Object.keys(s).length>0)},[s]),t("div",{className:"wrapper-login",children:n(j,{children:[t(E,{}),n(w,{children:[t(A,{step1:!0,step2:!0}),t(q,{children:"Shipping"}),n(e,{onSubmit:x,children:[n(e.Group,{controlId:"address",children:[t(e.Label,{children:"Address"}),t(e.Control,{type:"address",placeholder:"Enter address",value:c||"",onChange:o=>f(o.target.value),isInvalid:!!s.address}),t(e.Control.Feedback,{type:"invalid",children:s.address})]}),n(e.Group,{controlId:"city",children:[t(e.Label,{children:"City"}),t(e.Control,{type:"text",placeholder:"Enter city",value:i||"",onChange:o=>b(o.target.value),isInvalid:!!s.city}),t(e.Control.Feedback,{type:"invalid",children:s.city})]}),n(e.Group,{controlId:"postalCode",children:[t(e.Label,{children:"Postal code"}),t(e.Control,{type:"text",placeholder:"Enter Postalcode",value:l||"",onChange:o=>v(o.target.value),isInvalid:!!s.postalCode}),t(e.Control.Feedback,{type:"invalid",children:s.postalCode})]}),n(e.Group,{controlId:"country",children:[t(e.Label,{children:"Country"}),t(e.Control,{type:"text",placeholder:"Enter Country",value:p||"",onChange:o=>g(o.target.value),isInvalid:!!s.country}),t(e.Control.Feedback,{type:"invalid",children:s.country})]}),t(D,{type:"submit",variant:"primary",children:"Proceed"})]})]})]})})};export{J as default};
