import{s as t,L as v,u as C,a as w,b as S,c as q,r as I,j as a,d as o,H as L,R as g,C as e,M as N,I as F,e as B,B as h}from"./index-c06f9d58.js";import{a as l,r as H}from"./cartActions-bc99cabf.js";import{L as j}from"./layout-6d8b4614.js";import{L as d}from"./ListGroup-d95d6587.js";const D=t(g)`
background-color: #1a1a1a;

`,P=t.div`
background-color: #1a1a1a;
`,f=t(v)`
background-color: #1a1a1a;
color: #fff;
border-radius:18px;
&:hover{
 color: #fff;

}`,R=t(B)`
border: none;`,T=t.h2`
color: #FFF;
@media only screen and (max-width: 767px){
border: none;
}`,u=t(d)`
  .list-group-item {
    background-color: #1a1a1a;
    color: #fff;
  }
`,$=t(h)`
  width: 100%;
  max-width: 350px;
  background: none;
  border: 4px solid;
  background-color: #45c1bc;
  transition: all: 0.3s;
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
    background-color: #45c1bc;
    scale: 1.02;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 5px;
  }
`,m=t(h)`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
  background: none;
  color: #fff;
  font-weight: 700;
  &.disabled {
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
    background: transparent;
  }
  @media (max-width: 767px) {
    width: 10%;
  }
`,E=t(h)`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  width: 50%;
  color: #fff;
  background: none;
  margin-bottom: 20px;
  background-color: #fff
  @media (max-width: 767px) {
    width: 10px;
  }
`,G=t.p`
margin-bottom: 30px;`;function J(){const{id:s}=C(),p=location.search?Number(location.search.split("=")[1]):1,c=w(),b=S(),x=q(r=>r.cart),{cartItems:n}=x;console.log("cartItems",n),I.useEffect(()=>{s&&c(l(s,p))},[c,s,p]);const y=r=>{c(H(r))},k=()=>{b("/login?redirect=shipping")};return a(P,{children:o(j,{children:[a(L,{}),o(f,{to:"/",className:"btn btn-light my-3",children:[a("i",{class:"fa fa-arrow-left","aria-hidden":"true"}),"Continue Shopping"]}),o(g,{children:[o(e,{md:8,children:[a("h1",{children:"Shopping Cart"}),n.length===0?a("div",{children:a(N,{variant:"info",children:"Your cart is empty"})}):a(u,{variant:"flush",children:n.map(r=>a(d.Item,{children:o(D,{children:[a(e,{md:2,children:a(F,{src:r.image,alt:r.name,fluid:!0,rounded:!0})}),a(e,{md:3,children:a(f,{to:`/product/${r.product}`,children:r.name})}),o(e,{md:2,children:["$",r.price]}),a(e,{md:3,children:o("div",{className:"d-flex align-items-center",children:[a(m,{variant:"light",onClick:()=>r.quantity>1&&c(l(r.product,r.quantity-1)),disabled:r.quantity<=1,children:a("i",{class:"fa-solid fa-minus"})}),a(G,{className:"text-center mx-3",style:{marginTop:"12px"},children:r.quantity}),a(m,{variant:"light",onClick:()=>r.quantity<r.countInStock&&c(l(r.product,r.quantity+1)),disabled:r.quantity>=r.countInStock,children:a("i",{class:"fa-solid fa-plus"})}),a(E,{type:"button",variant:"light",onClick:()=>y(r.product),children:a("i",{className:"fas fa-trash"})})]})})]})},r.product))})]}),a(e,{md:4,children:o(R,{children:[a(u,{variant:"flush",children:o(d.Item,{children:[o(T,{children:["Subtotal(",n.reduce((r,i)=>r+i.quantity,0),") items"]}),o("h3",{children:["$(",n.reduce((r,i)=>r+i.quantity*i.price,0).toFixed(2),") "]})]})}),a(u,{children:a(d.Item,{children:o($,{type:"button",className:"btn-block",disabled:n.length==0,onClick:k,children:[a("i",{class:"fa-solid fa-truck-fast"}),"Proceed To Checkout"]})})})]})})]})]})})}export{J as default};
