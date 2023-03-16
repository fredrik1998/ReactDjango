import{s as d,L as R,u as _,r as n,a as z,b as A,c as P,at as O,ag as q,j as e,d as a,H as J,w as l,F as t,B as K,au as Q,av as V}from"./index-6b5cb7d4.js";import{M as D}from"./Message-eb8a03b1.js";import{L as W}from"./layout-dda72518.js";import{F as X}from"./FormContainer-6aa9f4ea.js";const Y=d.h1`
color: #fff;
`,Z=d(R)`
background-color: #1a1a1a;
color: #fff;
border-radius:18px;
&:hover{
 color: #fff;

}`,$=d(K)`
  width: 100%;
  color: #121212;
  border: 4px solid;
  border-radius: 18px;
  background-color: hsl(178, 50%, 51%);
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  margin-top: 30px;
  &:hover:before {
    left: 80%;
  }
  &:hover:after {
    right: 80%;
  }
  &:hover {
    background-color: hsl(178, 50%, 51%);
    color: #fafafa;
  }
`,oe=()=>{const{id:c}=_(),[i,u]=n.useState(""),[p,h]=n.useState(0),[g,m]=n.useState(""),[U,G]=n.useState(""),[f,b]=n.useState(""),[v,y]=n.useState(0),[S,C]=n.useState(""),[w,I]=n.useState(!1),s=z(),x=A(),B=P(r=>r.productDetails),{loading:N,error:E,product:o}=B,F=P(r=>r.productUpdate),{loading:H,error:L,success:k}=F;n.useEffect(()=>{k?(s({type:O}),x("/admin/products")):!o.name||o.id!==Number(c)?s(q(c)):(u(o.name),h(o.price),m(o.brand),G(o.image),b(o.category),y(o.countInStock),C(o.description))},[s,x,o,c,k]);const j=r=>{r.preventDefault(),s(Q({id:c,name:i,price:p,brand:g,image:U,category:f,countInStock:v,description:S}))},M=async r=>{I(!0);const T=r.target.files[0];await s(V(T,c)),I(!1)};return e("div",{className:"wrapper-login",children:a(W,{children:[e(J,{}),a(Z,{to:"/admin/products",className:"btn btn-light my-3",children:[e("i",{class:"fa fa-arrow-left","aria-hidden":"true"}),"Go Back"]}),a(X,{children:[e(Y,{children:"Edit Product"}),H&&e(l,{}),L&&e(D,{variant:"danger",children:L}),N?e(l,{}):E?e(D,{variant:"danger",children:E}):a(t,{onSubmit:j,children:[a(t.Group,{controlId:"name",children:[e(t.Label,{children:"Name"}),e(t.Control,{type:"name",placeholder:"Enter name",value:i,onChange:r=>u(r.target.value)})]}),a(t.Group,{controlId:"price",children:[e(t.Label,{children:"Price"}),e(t.Control,{type:"number",placeholder:"Enter price",value:p,onChange:r=>h(r.target.value)})]}),a(t.Group,{controlId:"brand",children:[e(t.Label,{children:"Brand"}),e(t.Control,{type:"text",placeholder:"Enter brand",value:g,onChange:r=>m(r.target.value)})]}),a(t.Group,{controlId:"formFile",children:[e(t.Label,{children:"Image"}),e(t.Control,{type:"file",onChange:M,custom:!0}),w&&e(l,{})]}),a(t.Group,{controlId:"category",children:[e(t.Label,{children:"Category"}),e(t.Control,{type:"text",placeholder:"Enter category",value:f,onChange:r=>b(r.target.value)})]}),a(t.Group,{controlId:"countInStock",children:[e(t.Label,{children:"Stock"}),e(t.Control,{type:"number",placeholder:"Enter stock",value:v,onChange:r=>y(r.target.value)})]}),a(t.Group,{controlId:"description",children:[e(t.Label,{children:"Description"}),e(t.Control,{type:"text",placeholder:"Enter description",value:S,onChange:r=>C(r.target.value)})]}),e($,{type:"submit",variant:"primary",children:"Update"})]})]})]})})};export{oe as default};
