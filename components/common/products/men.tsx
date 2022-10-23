import * as  React from "react";
import * as qs from "qs";
import { useFetchQuery } from "../../../hooks";
import Product from "./product";
import { menFakeProducts } from "../../../content/menFakeProducts";

interface propsI{
  data:any;
  generateFilter:any;
}
const Men = ({filter,products}:any)=>{

  const {data,isLoading} = useFetchQuery("bestSellers",`${process.env.NEXT_PUBLIC_API_URL}/api/products?${filter}&populate=*`)

    return(
    <Product fakeProducts={products}/>

  )
}

export default Men; 