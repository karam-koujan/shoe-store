import * as React from "react";
import { NextPage } from "next";
import  Category  from "../../components/category";
import { Men } from "../../components/common";



const Index:NextPage = ()=>{
   
   return(
   <Category categoryName="men" CategoryComponent={Men}/>
   )
}

export default Index;