import{s as l,L as C,u as I,r as i,a as P,b as w,c as E,al as A,aw as N,j as e,d as s,H as F,w as y,F as a,B as H,ak as B}from"./index-70eed0c8.js";import{M as k}from"./Message-f04ec13c.js";import{L as G}from"./layout-3bfd8576.js";import{F as j}from"./FormContainer-2c856e84.js";const D=l.h1`
color: #fff;
`,M=l(C)`
background-color: #1a1a1a;
color: #fff;
border-radius:18px;
&:hover{
 color: #fff;

}`,R=l(H)`
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
 
`,J=()=>{const{userId:t}=I();console.log(t);const[d,c]=i.useState(""),[u,m]=i.useState(""),[f,p]=i.useState(!1),n=P(),h=w(),x=E(r=>r.userProfile),{error:g,loading:S,user:o}=x,U=E(r=>r.userUpdateProfile),{error:b,loading:L,success:v}=U;return i.useEffect(()=>{v?(n({type:A}),h("/admin/userlist")):!o||!o.name||o.id!==Number(t)?n(N(t)):(c(o.name),m(o.email),p(o.isAdmin))},[n,h,t,o,v]),e("div",{className:"wrapper-login",children:s(G,{children:[e(F,{}),s(M,{to:"/admin/users",className:"btn btn-light my-3",children:[e("i",{class:"fa fa-arrow-left","aria-hidden":"true"}),"Go Back"]}),s(j,{children:[e(D,{children:"Edit User"}),L&&e(y,{}),b&&e(k,{variant:"danger",children:b}),S?e(y,{}):g?e(k,{variant:"danger",children:g}):s(a,{onSubmit:r=>{r.preventDefault(),n(B({id:o.id,name:d,email:u,isAdmin:f}))},children:[s(a.Group,{controlId:"name",children:[e(a.Label,{children:"Name"}),e(a.Control,{type:"name",placeholder:"Enter name",value:d,onChange:r=>c(r.target.value)})]}),s(a.Group,{controlId:"email",children:[e(a.Label,{children:"Email Address"}),e(a.Control,{type:"email",placeholder:"Enter Email",value:u,onChange:r=>m(r.target.value)})]}),e(a.Group,{controlId:"isadmin",children:e(a.Check,{type:"checkbox",label:"Is Admin",checked:f,onChange:r=>p(r.target.checked)})}),e(R,{type:"submit",variant:"primary",children:"Update"})]})]})]})})};export{J as default};
