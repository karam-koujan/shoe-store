import * as React from "react";
import { NextPage } from "next";
import  Category  from "../../components/category";
import { Men } from "../../components/common";
import parseMdFileToObj from "../../lib/parseMdFileToObj";
import ProductI from "../../types/product";
import SEO from "../../components/common/SEO";

interface propsI{
   products:ProductI[]
}
const Index = ({products}:propsI)=>{
   
   return(
      <React.Fragment>
         <SEO  title="men category" name="men category" image="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg" description="" url=""/>
         <Category key="men" categoryName="men" CategoryComponent={Men} products={products}/>
      </React.Fragment>
   )
}

export async function getStaticProps(){
  
   const {data} = await parseMdFileToObj("menFakeProducts.md")
  
    return {props:{products:data}}
 }
 
 

export default Index;