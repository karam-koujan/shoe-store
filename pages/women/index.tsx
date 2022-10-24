import * as React from "react";
import { NextPage } from "next";
import  Category  from "../../components/category";
import {Women} from "../../components/common/";
import parseMdFileToObj from "../../lib/parseMdFileToObj";
import ProductI from "../../types/product";

interface propsI{
   products:ProductI[]
}

const Index = ({products}:propsI)=>{
   
   return(
   <Category key="women" categoryName="women" products={products} CategoryComponent={Women}/>
   )
}
export async function getStaticProps(){
  
   const {data} = await parseMdFileToObj("womenFakeProducts.md")
  
    return {props:{products:data}}
 }
 
export default Index;