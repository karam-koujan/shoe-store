import * as  React from "react";
import Product from "./product";

interface propsI{
  data:any;
  generateFilter:any;
}
const Women = ({filter,products}:any)=>{


    return(
    <Product fakeProducts={products}/>

  )
}
export default Women