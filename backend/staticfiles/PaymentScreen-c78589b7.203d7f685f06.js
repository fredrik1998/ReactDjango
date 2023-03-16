import{s as p,a as l,b as h,r as u,c as m,j as e,d as t,H as b,F as a,C as f,B as g}from"./index-5a45e034.js";import{s as C}from"./cartActions-47f99953.js";import{L as v}from"./layout-e83c3e44.js";import{F as y}from"./FormContainer-c8b4eebb.js";import{C as x}from"./CheckoutSteps-c25e2a28.js";const k=p(g)`
width: 100%;
background: none;
background-color:#45c1bc;
border-radius: 18px;
color: #121212;
font-weight: 700;
text-transform: uppercase;
cursor: pointer;
font-size: 13px;
position: relative;
margin-top: 40px;
&:hover:before {
  left: 80%;
}
&:hover:after {
  right: 80%;
}
&:hover {
  background-color:#45c1bc;
  color: #121212;
}`,w=()=>{const s=l(),o=h(),[n,c]=u.useState("Credit Card"),i=m(r=>r.cart),{shippingAddress:d}=i;return d.address||o("/shipping"),e("div",{className:"wrapper-login",children:t(v,{children:[e(b,{}),t(y,{children:[e(x,{step1:!0,step2:!0,step3:!0}),t(a,{onSubmit:r=>{r.preventDefault(),s(C(n)),o("/placeorder")},children:[t(a.Group,{children:[e(a.Label,{as:"legend",children:"Select Method"}),e(f,{children:e(a.Check,{type:"radio",label:"Credit Card",id:"creditCard",name:"paymentMethod",checked:!0,onChange:r=>c(r.target.value)})})]}),e(k,{type:"submit",variant:"primary",children:"Proceed"})]})]})]})})};export{w as default};
