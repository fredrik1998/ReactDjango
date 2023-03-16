import{s as n,L as q,r as t,b as z,a as $,c as h,j as e,d as a,H as J,R as N,C as g,M as f,w as I,F as s,_ as K,B as D,ak as Q,al as V}from"./index-6b5cb7d4.js";import{L as W}from"./layout-dda72518.js";import{l as k}from"./orderActions-da7c0030.js";import{T as X}from"./Table-66d94441.js";const Y=n.div`
background-color: #1a1a1a;
color: #FFF;
`,F=n.h2`
color: #fff;
margin-top: 20px;
@media only screen and (max-width: 767px) {
  margin-left: 20px;
}
`;n(q)`
color: #fff;`;n(g)`
margin-top: 0px
`;const Z=n(D)`
width: 100%;
color: #121212;
border-radius: 18px;
background-color: hsl(178, 50%, 51%);
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
  background-color: hsl(178, 50%, 51%);
  color: #fafafa;
}`,ee=n(D)`
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
`,re=n(s)`
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      width: 100%;
    }
  }
`,ie=()=>{const[l,m]=t.useState(""),[u,b]=t.useState(""),[p,U]=t.useState(""),[v,M]=t.useState(""),[d,O]=t.useState({}),[y,w]=t.useState(""),[se,x]=t.useState(""),S=z(),i=$(),R=h(r=>r.userProfile),{error:C,loading:j,user:o}=R,B=h(r=>r.userLogin),{userInfo:P}=B,H=h(r=>r.userUpdateProfile),{success:E}=H,T=h(r=>r.orderList),{loading:A,error:L,orders:G}=T;return t.useEffect(()=>{o?!o||o.name||E?i(k()):(m(o.name),b(o.email)):(x("User updated successfully!"),S("/login"))},[o,E,S,i,P]),e(Y,{children:a(W,{children:[e(J,{}),a(N,{children:[a(g,{md:{span:6,offset:2},children:[e(F,{children:"User Profile"}),y&&e(f,{variant:"success",children:y}),C&&e(f,{variant:"danger",children:C}),j&&e(I,{}),a(re,{onSubmit:r=>{r.preventDefault();const c={};if(l||(c.name="Name is required"),u||(c.email="Email is required"),O(c),p!==v)w("Password do not match");else if(Object.keys(c).length===0){i(Q({id:o.id,name:l,email:u,password:p})),x("User updated successfully!"),i({type:V});const _={...P,name:l};localStorage.setItem("userInfo",JSON.stringify(_)),m(l),w(""),i(k())}},children:[a(s.Group,{controlId:"name",children:[e(s.Label,{children:"Name"}),e(s.Control,{type:"name",placeholder:"Enter name",value:l,onChange:r=>m(r.target.value),isInvalid:!!d.name}),e(s.Control.Feedback,{type:"invalid",children:d.name})]}),a(s.Group,{controlId:"email",children:[e(s.Label,{children:"Email Address"}),e(s.Control,{type:"email",placeholder:"Enter email",value:u,onChange:r=>b(r.target.value),isInvalid:!!d.email}),e(s.Control.Feedback,{type:"invalid",children:d.email})]}),a(s.Group,{controlId:"password",children:[e(s.Label,{children:"Password"}),e(s.Control,{type:"password",placeholder:"Enter password",value:p,onChange:r=>U(r.target.value)})]}),a(s.Group,{controlId:"passwordConfirm",children:[e(s.Label,{children:"Confirm Password"}),e(s.Control,{type:"password",placeholder:"Confirm password",value:v,onChange:r=>M(r.target.value)}),e(Z,{type:"submit",variant:"primary",children:"Update"})]}),e(N,{className:"py-3"})]})]}),a(g,{md:{span:6,offset:2},children:[e(F,{children:"My Orders"}),A?e(I,{}):L?e(f,{variant:"danger",children:L}):e("div",{className:"table-responsive",children:a(X,{striped:!0,className:"table-sm",children:[e("thead",{children:a("tr",{children:[e("th",{children:"ID"}),e("th",{children:"Date"}),e("th",{children:"Total"}),e("th",{children:"Paid"}),e("th",{children:"Delivered"}),e("th",{})]})}),e("tbody",{children:G.map(r=>a("tr",{children:[e("td",{className:"tablecell",children:r.id}),e("td",{className:"tablecell",children:r.createdAt.substring(0,10)}),a("td",{className:"tablecell",children:["$",r.totalPrice]}),e("td",{children:r.isPaid?r.paidAt.substring(0,10):e("i",{className:"fas fa-x",style:{color:"red"}})}),e("td",{children:e(K.LinkContainer,{to:`/order/${r.id}`,children:e(ee,{className:"btn-sm",children:"Details"})})})]},r.id))})]})})]})]})]})})};export{ie as default};
