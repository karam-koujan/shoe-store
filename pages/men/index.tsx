import * as React from "react";
import { NextPage } from "next";
import  Category  from "../../components/category";
import { Men } from "../../components/common";



const Index:NextPage = ()=>{
   
   return(
   <Category key="men" categoryName="men" CategoryComponent={Men}/>
   )
}

export default Index;