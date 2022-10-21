import * as  React from "react";
import * as qs from "qs";
import { useFetchQuery } from "../../../hooks";
import Product from "./product";
import { womenFakeProducts } from "../../../content/womenFakeProducts";

interface propsI{
  data:any;
  generateFilter:any;
}
const Women = ({filter}:any)=>{

  const {data,isLoading} = useFetchQuery("bestSellers",`${process.env.NEXT_PUBLIC_API_URL}/api/products?${filter}&populate=*`)

    return(
    <Product fakeProducts={womenFakeProducts}/>

  )
}
export default Women