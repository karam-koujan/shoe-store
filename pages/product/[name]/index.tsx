import * as React   from "react";
import {useRouter} from "next/router";
import type { NextPage } from 'next';
import {RelatedProducts} from "../../../components/common/products";
import { Description, Reviews, ProductInfo } from "../../../components/product";
import ProductI from "../../../types/product";
import { fakeProducts as bestSellerProduct } from "../../../content/fakeProducts";
import { menFakeProducts } from "../../../content/menFakeProducts";
import { womenFakeProducts } from "../../../content/womenFakeProducts";
const qs = require('qs');

interface serverResI{
 attributes : ProductI 
}
interface  paramsI{
   name : string
}
interface contextI{
  params : paramsI
}
const Index:NextPage = ({}:any)=>{
    const router = useRouter()
    const {name} = router.query;
    const fakeProducts = bestSellerProduct.concat(menFakeProducts,womenFakeProducts)
    const fakeProduct = fakeProducts.filter(({attributes})=>attributes.name===name)
     const product = fakeProduct[0].attributes 
    const [sectionType,setSectionType] = React.useState("description")
    
    const handleChangeSection = (sectionType:string)=>{
        return ()=>{
            setSectionType(sectionType)
        }
    }
   
    return(
         <section className="container container-primary-px bg-lightGrey py-[3rem] mb-[3rem]" tabIndex={-1}>
            <div className="container container-primary-px bg-fifth pt-[3rem] pb-[10rem]">
            <ProductInfo product={product}/>
             <article>
                <hr className="before:"/>
                <ul className="flex gap-[1.4rem]  ">
                    <li className={"capitalize text-third text-[1.1rem] font-bold py-[.7rem] cursor-pointer border-t-[3px] " + `${sectionType==="description"?"  border-primary ":"border-transparent"}`} onClick={handleChangeSection("description")}>
                    description 
                    </li>
                    <li className={"capitalize text-third text-[1.1rem] font-bold py-[.7rem]  cursor-pointer border-t-[3px] " + `${sectionType==="reviews" ? "  border-primary" : "border-transparent"}`} onClick={handleChangeSection("reviews")}>
                    reviews (1)
                    </li>
                </ul>
                {
                    sectionType === "description" ? (
                      <Description  />
                    ):
                    (
                    <Reviews/>
                    )
                }
               
             </article>
            <RelatedProducts/>
            </div>
         </section>
    )
}



export default Index;