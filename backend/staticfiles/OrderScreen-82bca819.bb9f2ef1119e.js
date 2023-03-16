import{s as o,L as P,c as g,a as b,b as v,Y as C,r as S,j as e,d as t,H as F,R as c,C as n,M as f,I as k,e as O,B as L}from"./index-6b5cb7d4.js";import{L as M}from"./layout-dda72518.js";import{F as A}from"./FormContainer-6aa9f4ea.js";import{C as E}from"./CheckoutSteps-f5a1b724.js";import{c as $}from"./orderActions-da7c0030.js";import{L as d}from"./ListGroup-1e995356.js";const w=o(P)`
color: #FFF;
border-radius:18px;
&:hover{
 color: #fff;
}`,R=o.div`
background-color:#1a1a1a;
`,l=o(d)`

  .list-group-item {
    background-color: #1a1a1a;
    color: #fff;
    border: px solid
  }
`,H=o(k)`
@media only screen and (max-width: 767px){
  width: 200px;
}
`,j=o.h2`
margin-left: 10px;
margin-top: 3rem;
`,h=o.h2`
margin-top: 3rem;
`,q=o(n)`
margin-top: 30px;`,B=o(O)`
margin-top: 50px;
border: none;`,N=o(L)`
width: 100%;
max-width: 350px;
background: none;
border: 4px solid;
color: #121212;
border-radius: 18px;
font-weight: 700;
background-color: hsl(178, 50%, 51%);
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
  color: #121212;
}`,X=()=>{const y=g(i=>i.orderCreate),{order:x,error:p,success:m}=y,u=b(),a=v(),r=g(i=>i.cart);r.itemsPrice=r.cartItems.reduce((i,s)=>i+s.price*s.quantity,0),r.shippingPrice=r.itemsPrice>100?0:10,r.totalPrice=Number(r.itemsPrice+r.shippingPrice).toFixed(2),r.paymentMethod||(a("/payment"),u({type:C})),S.useEffect(()=>{m&&a(`/order/${x.id}`)},[m,a]);const I=()=>{u($({orderItems:r.cartItems,shippingAddress:r.shippingAddress,paymentMethod:r.paymentMethod,itemsPrice:r.itemsPrice,shippingPrice:r.shippingPrice,totalPrice:r.totalPrice}))};return e(R,{children:t(M,{children:[e(F,{}),e(A,{children:e(E,{step2:!0,step3:!0,step4:!0})}),t(c,{children:[t(n,{md:8,children:[t(l,{variant:"flush",children:[t(d.Item,{children:[e(h,{children:"Shipping"}),t("p",{children:[r.shippingAddress.address,", ",r.shippingAddress.city,", "," ",r.shippingAddress.postalCode,", ",r.shippingAddress.country]})]}),t(d.Item,{children:[e(h,{children:"Payment Method"}),t("p",{children:[e("strong",{children:"Method: "}),r.paymentMethod]})]})]}),t(d.Item,{children:[e(j,{style:{color:"#FFF"},children:"Order Items"}),r.cartItems.length===0?e(f,{variant:"info",children:"You have no items in cart"}):e(l,{variant:"flush",children:r.cartItems.map((i,s)=>e(d.Item,{children:t(c,{children:[e(n,{md:1,children:e(H,{src:i.image,alt:i.name,fluid:!0,rounded:!0})}),e(n,{md:3,children:e(w,{to:`/product/${i.product}`,children:i.name})}),t(n,{md:6,children:[i.quantity," X $",i.price," = $",(i.quantity*i.price).toFixed(2)]})]})},s))})]})]}),e(q,{md:4,children:e(B,{children:t(l,{variant:"flush",children:[e(d.Item,{children:e(h,{children:"Order Summary"})}),e(d.Item,{children:t(c,{children:[e(n,{children:"Items:"}),t(n,{children:["$",r.itemsPrice.toFixed(2)]})]})}),e(d.Item,{children:t(c,{children:[e(n,{children:"Shipping:"}),t(n,{children:["$",r.shippingPrice.toFixed(2)]})]})}),e(d.Item,{children:t(c,{children:[e(n,{children:"Total Price:"}),t(n,{children:["$",r.totalPrice]})]})}),e(d.Item,{children:p&&e(f,{variant:"danger",children:p})}),e(d.Item,{children:e(N,{type:"button",variant:"primary",className:"btn-block",disabled:r.cartItems===0,onClick:I,children:"Place Order"})})]})})})]})]})})};export{X as default};
