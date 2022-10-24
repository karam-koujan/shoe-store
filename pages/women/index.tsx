import * as React from "react";
import { NextPage } from "next";
import  Category  from "../../components/category";
import {Women} from "../../components/common/";
import parseMdFileToObj from "../../lib/parseMdFileToObj";
import ProductI from "../../types/product";
import SEO from "../../components/common/SEO";

interface propsI{
   products:ProductI[]
}

const Index = ({products}:propsI)=>{
   
   return(
      <React.Fragment>
         <SEO title="women category" name="women category" image="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg" description="" url=""/>
         <Category key="women" categoryName="women" products={products} CategoryComponent={Women}/>
      </React.Fragment>
   )
}
export async function getStaticProps(){
  
   const {data} = await parseMdFileToObj("womenFakeProducts.md")
  
    return {props:{products:data}}
 }
 
export default Index;