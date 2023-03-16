import{s,a as H,b as R,c,r as T,ap as j,aq as g,j as e,d as r,H as S,R as w,C as p,w as d,M as n,_ as F,B as o,ar as _,as as $}from"./index-5a45e034.js";import{L as A}from"./layout-e83c3e44.js";import{T as I}from"./Table-7d83436d.js";const M=s.div`
background-color:#1a1a1a;
`,U=s.h1`
display: flex;
justify-content: center;
text-align: center;
color: #FFF;`,q=s(o)`
border-radius: 18px;

`,N=s(o)`
border-radius: 18px;
color: #fff;

`,z=s(o)`
 border: 4px solid;
 color: #121212;
 background-color: hsl(178, 50%, 51%);
 border-radius: 18px;
 font-size: 13px;
 font-weight: 700;
 &:hover{
  background-color: hsl(178, 50%, 51%);
  color: #fafafa;
 }

`,Q=()=>{const t=H(),l=R(),C=c(a=>a.productList),{loading:x,error:i,products:v}=C,P=c(a=>a.productDelete),{loading:y,error:h,success:D}=P,k=c(a=>a.productCreate),{loading:L,error:u,success:m,product:B}=k,E=c(a=>a.userLogin),{userInfo:b}=E;T.useEffect(()=>{t({type:j}),b.isAdmin||l("/login"),m?(t(g()),l(`/admin/products/${B.id}/edit`)):t(g())},[t,l,b,D,m]);const f=a=>{t(_(a))};return e(M,{children:r(A,{children:[e(S,{}),r(w,{className:"align-items-center",children:[e(p,{children:e(U,{children:"Products"})}),e(p,{className:"text-right",children:r(z,{onClick:()=>{t($())},children:[e("i",{className:"fas fa-plus"}),"Create Product"]})})]}),y&&e(d,{}),h&&e(n,{variant:"danger",children:h}),L&&e(d,{}),u&&e(n,{variant:"danger",children:u}),x?e(d,{}):i?e(n,{variant:"danger",children:i}):r(I,{striped:!0,responsive:!0,bordered:!0,hover:!0,className:"table-sm",children:[e("thead",{children:r("tr",{children:[e("th",{className:"tablecell",children:"ID"}),e("th",{className:"tablecell",children:"Name"}),e("th",{className:"tablecell",children:"Price"}),e("th",{className:"tablecell",children:"Category"}),e("th",{className:"tablecell",children:"Brand"}),e("th",{})]})}),e("tbody",{children:v.map(a=>r("tr",{children:[e("td",{className:"tablecell",children:a.id}),e("td",{className:"tablecell",children:a.name}),r("td",{className:"tablecell",children:["$",a.price]}),e("td",{className:"tablecell",children:a.category}),e("td",{className:"tablecell",children:a.brand}),e("td",{children:r("div",{className:"d-flex align-items-center",children:[e(F.LinkContainer,{to:`/admin/products/${a.id}/edit`,children:e(q,{className:"btn",children:e("i",{className:"fas fa-edit"})})}),e(N,{onClick:()=>f(a.id),className:"btn ml-2 d-none d-md-block",children:e("i",{className:"fas fa-trash"})}),e(N,{onClick:()=>f(a.id),variant:"danger",className:"btn d-block d-md-none",children:"Delete"})]})})]},a.id))})]})]})})};export{Q as default};
