import * as React from "react";
import { NextPage } from "next";
import  Category  from "../../components/category";
import { Men } from "../../components/common";
import parseMdFileToObj from "../../lib/parseMdFileToObj";
import ProductI from "../../types/product";

interface propsI{
   products:ProductI[]
}
const Index = ({products}:propsI)=>{
   
   return(
   <Category key="men" categoryName="men" CategoryComponent={Men}/>
   )
}

export async function getStaticProps(){
  
   const {data} = await parseMdFileToObj("menFakeProducts.md")
  
    return {props:{products:data}}
 }
 
 

export default Index;