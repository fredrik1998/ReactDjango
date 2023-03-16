import{s as d,L,r as a,b as x,a as E,c as C,j as e,d as t,H as k,M as F,w as I,F as r,R as j,C as D,B as H,x as N}from"./index-5a45e034.js";import{L as B}from"./layout-e83c3e44.js";import{F as P}from"./FormContainer-c8b4eebb.js";const R=d.h1`
color: #fff;
`,q=d(L)`
color: #fff;
&:hover{
color: #fff;
}
`,G=d(H)`
  width: 100%;
  color: #121212;
  border: 4px solid;
  border-radius: 18px;
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
  }
 
`;function $(){const[l,f]=a.useState(""),[c,m]=a.useState(""),[o,g]=a.useState({}),[M,v]=a.useState(!0),p=x(),b=E(),w=s=>{s.preventDefault();const n={};l||(n.email="Email is required"),c||(n.password="Password is required"),g(n),Object.keys(n).length===0&&b(N(l,c))},i=location.search?location.search.split("=")[1]:"/",y=C(s=>s.userLogin),{error:u,loading:S,userInfo:h}=y;return a.useEffect(()=>{h&&p(i)},[p,h,i]),a.useEffect(()=>{v(Object.keys(o).length>0)},[o]),e("div",{className:"wrapper-login",children:t(B,{children:[e(k,{}),t(P,{children:[e(R,{children:"Sign in"}),u&&e(F,{variant:"danger",children:u}),S&&e(I,{}),t(r,{onSubmit:w,children:[t(r.Group,{controlId:"email",children:[e(r.Label,{children:"Email Address"}),e(r.Control,{type:"email",placeholder:"Enter email",value:l,isInvalid:!!o.email,onChange:s=>f(s.target.value)}),e(r.Control.Feedback,{type:"invalid",children:o.email})]}),t(r.Group,{controlId:"password",children:[e(r.Label,{children:"Password"}),e(r.Control,{type:"password",placeholder:"Enter password",value:c,isInvalid:!!o.password,onChange:s=>m(s.target.value)}),e(r.Control.Feedback,{type:"invalid",children:o.password})]}),e(G,{type:"submit",variant:"primary",children:"Sign In"})]}),e(j,{className:"py-3",children:t(D,{children:["New customer? ",e(q,{to:i?`/register?redirect=${i}`:"/register",children:"Register"})]})})]})]})})}export{$ as default};
