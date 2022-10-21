import * as  React from "react";
import * as qs from "qs";
import { useFetchQuery } from "../../../hooks";
import Product from "./product";

interface propsI{
  data:any;
  generateFilter:any;
}
const Men = ({filter}:any)=>{
  React.useEffect(()=>{
    console.log("F")
  },[filter])
  const {data,isLoading} = useFetchQuery("bestSellers",`${process.env.NEXT_PUBLIC_API_URL}/api/products?${filter}&populate=*`)

  if (isLoading) return null 
    return(
    <Product products={data.data}/>

  )
}

export default Men; 