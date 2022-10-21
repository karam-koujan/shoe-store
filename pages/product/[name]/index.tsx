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
const Index:NextPage = ({product}:any)=>{
    const router = useRouter()
    const {name} = router.query;
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
                      <Description description={product.description}/>
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


export async function getStaticPaths(){
  const fakeProducts = bestSellerProduct.concat(menFakeProducts,womenFakeProducts)
  /*
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
          paths: [],
          fallback: 'blocking',
        }
      }
     */ 
    //  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
      //const products = await res.json()
  /*
      const paths = products.data.map(({attributes}:serverResI)=>({
          params : {name:attributes.name}
}))
*/

   const paths = fakeProducts.map(({attributes})=>({params : { name : attributes.name}}))
   console.log(paths)
   return {paths,fallback:'blocking'}
}

export async function getStaticProps({params}:contextI) {
  
  const fakeProducts = bestSellerProduct.concat(menFakeProducts,womenFakeProducts)
  const query = qs.stringify({
    filters: {
      name: {
        $eqi:params.name
      },
    },
  }, {
    encodeValuesOnly: true
  });
  
   // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?${query}&populate=*`);
    //const product = await res.json()
    const fakeProduct = fakeProducts.filter(({attributes})=>attributes.name===params.name)
    console.log("fale",fakeProduct,"params",params.name)
    return {
      // Passed to the page component as props
      props: { product:fakeProduct[0].attributes , key:fakeProduct[0].id},
    }
  }
export default Index;