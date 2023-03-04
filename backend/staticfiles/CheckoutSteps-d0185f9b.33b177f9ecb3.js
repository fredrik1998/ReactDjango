import{s as t,Z as n,d as a,j as e,_ as i}from"./index-f56b113d.js";const d=t(n)`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  .nav-item {
    flex: 1;
    text-align: center;
    .nav-link {
      color: hsl(178, 50%, 51%);

      @media (max-width: 768px) { /* change font-size on smaller screens */
      font-size: 0.8rem;
    }
      &:hover {
        color: #fff;
      }
      &.disabled {
        color: rgba(255, 255, 255, 0.5);
        pointer-events: none;
      }
    }
  }
`;t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &.active {
    background-color: hsl(228, 100%, 84%);
    color: #000;
  }
`;const h=({step1:s,step2:r,step3:o,step4:l})=>a(d,{className:"mb-4",children:[e(n.Item,{children:r?e(i.LinkContainer,{to:"/login/shipping",children:e(n.Link,{children:"Shipping"})}):e(n.Link,{disabled:!0,children:"Shipping"})}),e(n.Item,{children:o?e(i.LinkContainer,{to:"/payment",children:e(n.Link,{children:"Payment"})}):e(n.Link,{disabled:!0,children:"Payment"})}),e(n.Item,{children:l?e(i.LinkContainer,{to:"/placeorder",children:e(n.Link,{children:"Order"})}):e(n.Link,{disabled:!0,children:"Order"})})]});export{h as C};
