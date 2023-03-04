import{s as e,r,j as t,d as i,ai as d,H as m}from"./index-3f1fbcba.js";import{L as u}from"./layout-3b969bc0.js";const f="/assets/iconstar-3e70bfda.svg",b="/assets/thankyou-a52834b7.svg",w=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vh;
  border-radius: 18px;
  background-color: #202020;
  margin: auto;
  margin-top: 100px;
  @media only screen and (min-width: 360px) and (max-width: 768px) {
	margin-top: 20px;
}
`,y=e.div`
  display: flex;
  height: 200px;
  width: 50vh;
  justify-content: space-around;
  align-items: center;
  @media only screen and (min-width: 360px) and (max-width: 768px) {
	height: 100px;
}
`;e.label`
  font-size: 3em;
`;e.input`
  border-radius: 40px;
  width: 50px;
  height: 50px;
  background: transparent;
`;const v=e.h2`
  color: hsl(0, 0%, 100%);
  text-transform: none;
  margin-top: 40px;
`,k=e.h2`
 color: hsl(0, 0%, 100%);
 text-transform: none;
 margin-top: 20px;
`,s=e.p`
  font-size: 16px;
  margin-left: 20px;
  color: hsl(216, 12%, 54%);¨
  text-align: center;
  max-width: 600px;
  padding: 40px;
  @media only screen and (min-width: 360px) and (max-width: 400px){
    padding: 10px;
  }
`,S=e.p`
  font-size: 16px;
  margin-left: 20px;
  color: hsl(178, 50%, 51%);
  background-color: hsl(213, 19%, 18%);
  border-radius: 18px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
`,j=e.button`
  width: 90%;
  background-color:hsl(178, 50%, 51%);
  border: 4px solid;
  border-radius: 18px;
  color: #121212;
  font-weight: 700;
  height: 55px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  margin-bottom: 30px;
  &:hover:before {
    left: 80%;
  }
  &:hover:after {
    right: 80%;
  }
  &:hover {
    background-color:hsl(178, 50%, 51%);
  }
  @media screen and (max-width: 600px){
    width: 75%;
    
  }
`,z=e.button`
  border-radius: 50%;
  width: 60px;
  padding-top: 10px;
  border: none;
  padding-bottom: 10px;
  background-color: ${({active:n})=>n?"	hsl(178, 50%, 51%)":"	hsl(0, 0%, 10%)"};
  font-size: 1.4em;
  color: ${({active:n})=>n?"	hsl(0, 0%, 7%)":"	hsl(0, 0%, 98%)"};
  cursor: pointer;
  @media only screen and (max-width: 375px){
    padding-top: 0px;
    padding-bottom: 0px;
    width: 40px;
  }
`,p=e.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`,C=e.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: hsl(213, 19%, 18%);
  border-radius: 18px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`,H=e.img`
  width: 150px;
  height: 150px;
  margin-right: 10px;
  margin-top: 20px;
`,R=e.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`,F=()=>{const[n,c]=r.useState(0),[a,l]=r.useState(0);r.useState(!1);const h=o=>{l(o)},x=()=>{switch(n){case 0:return i(d,{children:[t(p,{children:t(C,{src:f})}),t(v,{children:"How did we do?"}),t(s,{children:"Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"}),t(y,{children:t(R,{children:[1,2,3,4,5].map(o=>t(z,{active:o===a,onClick:()=>h(o),children:o},o))})}),t(j,{onClick:g,children:"Next"})]});case 1:return i(d,{children:[t(p,{children:t(H,{src:b})}),i(S,{children:["You selected ",a," out of 5."]}),t(k,{children:"Thank you!"}),t(s,{children:"We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"})]});default:return null}},g=()=>{c(n+1)};return t(w,{children:x()})},I=e.div`
background-color:#1a1a1a;
`,D=()=>i(I,{children:[t(m,{}),i(u,{children:[t("h1",{style:{color:"#FFF",textAlign:"center"},children:"Thanks for the order!"}),t(F,{})]})]});export{D as default};
