import{f as r,g as c,h as i,i as n,k as p}from"./index-3effc105.js";const S=(t,a)=>async(s,o)=>{const{data:e}=await r.get(`/api/products/${t}`);console.log(e),s({type:c,payload:{product:e.id,name:e.name,image:e.image,price:e.price,countInStock:e.countInStock,quantity:a}}),localStorage.setItem("cartItems",JSON.stringify(o().cart.cartItems))},g=t=>(a,s)=>{a({type:i,payload:t}),localStorage.setItem("cartItems",JSON.stringify(s().cart.cartItems))},y=t=>a=>{a({type:n,payload:t}),localStorage.setItem("shippingAddress",JSON.stringify(t))},d=t=>a=>{a({type:p,payload:t}),localStorage.setItem("paymentMethod",JSON.stringify(t))};export{S as a,y as b,g as r,d as s};
