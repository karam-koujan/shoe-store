import * as React from "react";
import { NextPage } from "next";
import  Category  from "../../components/category";
import {Women} from "../../components/common/";




const Index:NextPage = ()=>{
   
   return(
   <Category key="women" categoryName="women" CategoryComponent={Women}/>
   )
}

export default Index;