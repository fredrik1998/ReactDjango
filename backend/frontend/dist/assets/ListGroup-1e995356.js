import{r as d,l as f,n as k,o as G,p as b,j as $,q as v,t as x,v as y}from"./index-6b5cb7d4.js";const p=d.forwardRef(({bsPrefix:e,active:l,disabled:n,eventKey:c,className:r,variant:a,action:i,as:u,...t},s)=>{e=f(e,"list-group-item");const[o,N]=k({key:G(c,t.href),active:l,...t}),h=b(m=>{if(n){m.preventDefault(),m.stopPropagation();return}o.onClick(m)});n&&t.tabIndex===void 0&&(t.tabIndex=-1,t["aria-disabled"]=!0);const L=u||(i?t.href?"a":"button":"div");return $(L,{ref:s,...t,...o,onClick:h,className:v(r,e,N.isActive&&"active",n&&"disabled",a&&`${e}-${a}`,i&&`${e}-action`)})});p.displayName="ListGroupItem";const C=p,I=d.forwardRef((e,l)=>{const{className:n,bsPrefix:c,variant:r,horizontal:a,numbered:i,as:u="div",...t}=x(e,{activeKey:"onSelect"}),s=f(c,"list-group");let o;return a&&(o=a===!0?"horizontal":`horizontal-${a}`),$(y,{ref:l,...t,as:u,className:v(n,s,r&&`${s}-${r}`,o&&`${s}-${o}`,i&&`${s}-numbered`)})});I.displayName="ListGroup";const z=Object.assign(I,{Item:C});export{z as L};
