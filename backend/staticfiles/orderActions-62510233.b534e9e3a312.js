import{O as E,f as n,E as y,G as d,J as R,K as i,N as _,P as c,Q as l,S,T,U as A,V as D,W as O}from"./index-3effc105.js";const C=s=>async(t,a)=>{try{t({type:c});const{userLogin:{userInfo:e}}=a(),o={headers:{"Content-type":"application/json",Authorization:`Bearer ${e.token}`}},{data:r}=await n.post("/api/orders/add/",s,o);t({type:l,payload:r}),t({type:S,payload:r}),localStorage.removeItem("cartItems")}catch(e){t({type:T,payload:e.response&&e.response.data.detail?e.response.data.detail:e.message})}},I=s=>async(t,a)=>{try{t({type:E});const{userLogin:{userInfo:e}}=a(),o={headers:{"Content-type":"application/json",Authorization:`Bearer ${e.token}`}},{data:r}=await n.get(`/api/orders/${s}/`,o);t({type:y,payload:r})}catch(e){t({type:d,payload:e.response&&e.response.data.detail?e.response.data.detail:e.message})}},u=(s,t)=>async(a,e)=>{try{a({type:A});const{userLogin:{userInfo:o}}=e(),r={headers:{"Content-type":"application/json",Authorization:`Bearer ${o.token}`}},{data:p}=await n.put(`/api/orders/${s}/pay/`,{paidAt:t},r);a({type:D,payload:p}),a({type:ORDER_UPDATE_RESET})}catch(o){a({type:O,payload:o.response&&o.response.data.detail?o.response.data.detail:o.message})}},L=()=>async(s,t)=>{try{s({type:R});const{userLogin:{userInfo:a}}=t(),e={headers:{"Content-type":"application/json",Authorization:`Bearer ${a.token}`}},{data:o}=await n.get("/api/orders/myorders/",e);s({type:i,payload:o})}catch(a){s({type:_,payload:a.response&&a.response.data.detail?a.response.data.detail:a.message})}};export{C as c,I as g,L as l,u};
