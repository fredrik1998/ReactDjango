import{s as v,L as x,r as o,b as R,a as N,c as j,j as e,d as t,H as q,M as g,w as D,F as r,R as G,C as B,B as H,am as M}from"./index-70eed0c8.js";import{L as A}from"./layout-3bfd8576.js";import{F as O}from"./FormContainer-2c856e84.js";const z=v(x)`
color: #fff;`,$=v(H)`
width: 100%;
color: #121212;
border-radius: 18px;
border: 4px solid;
background-color: hsl(178, 50%, 51%);
font-weight: 700;
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
}`,U=()=>{const[d,w]=o.useState(""),[c,b]=o.useState(""),[i,y]=o.useState(""),[p,C]=o.useState(""),[m,S]=o.useState(),[s,F]=o.useState({}),[J,P]=o.useState(!0),h=R(),k=N(),E=a=>{a.preventDefault();const n={};d||(n.name="Name is required"),c||(n.email="Email is required"),i||(n.password="Password is required"),p||(n.confirmPassword="Password is Required"),F(n),i!=p?S("Password do not match"):Object.keys(n).length===0&&k(M(d,c,i))},l=location.search?location.search.split("=")[1]:"/",I=j(a=>a.userRegister),{error:u,loading:L,userInfo:f}=I;return o.useEffect(()=>{P(Object.keys(s)>0),f&&h(l)},[h,f,l,s]),e("div",{className:"wrapper-login",children:t(A,{children:[e(q,{}),t(O,{children:[e("h1",{style:{color:"#FFF"},children:"Register"}),m&&e(g,{variant:"danger",children:m}),u&&e(g,{variant:"danger",children:u}),L&&e(D,{}),t(r,{onSubmit:E,children:[t(r.Group,{controlId:"name",children:[e(r.Label,{children:"Name"}),e(r.Control,{type:"name",placeholder:"Enter name",value:d,onChange:a=>w(a.target.value),isInvalid:!!s.name}),e(r.Control.Feedback,{type:"invalid",children:s.name})]}),t(r.Group,{controlId:"email",children:[e(r.Label,{children:"Email Adress"}),e(r.Control,{type:"email",placeholder:"Enter email",value:c,isInvalid:!!s.email,onChange:a=>b(a.target.value)}),e(r.Control.Feedback,{type:"invalid",children:s.email})]}),t(r.Group,{controlId:"password",children:[e(r.Label,{children:"Password"}),e(r.Control,{type:"password",placeholder:"Enter password",isInvalid:!!s.password,value:i,onChange:a=>y(a.target.value)}),e(r.Control.Feedback,{type:"invalid",children:s.password})]}),t(r.Group,{controlId:"passwordConfirm",children:[e(r.Label,{children:"Confirm Password"}),e(r.Control,{type:"password",placeholder:"Confirm password",isInvalid:!!s.confirmPassword,value:p,onChange:a=>C(a.target.value)}),e(r.Control.Feedback,{type:"invalid",children:s.confirmPassword})]}),e($,{type:"submit",variant:"primary",children:"Sign up"}),e(G,{className:"py-3",children:t(B,{children:["Already have an account? ",e(z,{to:l?`/login?redirect=${l}`:"/login",children:"Sign in"})]})})]})]})]})})};export{U as default};
