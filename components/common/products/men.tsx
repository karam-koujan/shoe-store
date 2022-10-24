import * as  React from "react";
import * as qs from "qs";
import { useFetchQuery } from "../../../hooks";
import Product from "./product";

interface propsI{
  data:any;
  generateFilter:any;
}
const Men = ({filter,products}:any)=>{


    return(
    <Product fakeProducts={products}/>

  )
}

export default Men; 