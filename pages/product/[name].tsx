import * as React   from "react";
import type { NextPage } from 'next';
import {RelatedProducts} from "../../components/common/";
import { Description, Reviews, ProductInfo } from "../../components/product";
import ProductI from "../../types/product";
import parseMdFileToObj from "../../lib/parseMdFileToObj";
import SEO from "../../components/common/SEO";



interface serverResI{
 attributes : ProductI 
}
interface  paramsI{
   name : string
}
interface contextI{
  params : paramsI
}
const Index:NextPage = ({product,products}:any)=>{
  const [sectionType,setSectionType] = React.useState("description")
  
    const handleChangeSection = (sectionType:string)=>{
        return ()=>{
            setSectionType(sectionType)
        }
    }
   

   
    return(
      <React.Fragment>
        <SEO title={product.name} name={product.name} image={product.image} url={""} description={product.name}/>
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
      <RelatedProducts products={products}/>
      </div>
   </section>
   </React.Fragment>
      )
}

export async function getStaticPaths(){
  
  const bestSellerProduct = await  parseMdFileToObj("fakeProducts.md")
  const menFakeProducts = await parseMdFileToObj("menFakeProducts.md")
  const womenFakeProducts = await parseMdFileToObj("womenFakeProducts.md")
  const fakeProducts = bestSellerProduct.data.concat(menFakeProducts.data,womenFakeProducts.data)
  console.log(fakeProducts)
  const paths = fakeProducts.map(({attributes}:serverResI)=>({
    params : {name:attributes.name}
  }))
  return {paths,fallback:false}
}
export async function getStaticProps({params}:contextI){
 console.log(params.name,"name")
  const bestSellerProduct = await  parseMdFileToObj("fakeProducts.md")
  console.log("bestSellers",bestSellerProduct)
  const menFakeProducts = await parseMdFileToObj("menFakeProducts.md")
  console.log("men",menFakeProducts)

  const womenFakeProducts = await parseMdFileToObj("womenFakeProducts.md")
  console.log("women",womenFakeProducts)

  const fakeProducts = bestSellerProduct.data.concat(menFakeProducts.data,womenFakeProducts.data)
  let fakeProduct = fakeProducts[0]
  if(params.name){
    fakeProduct = fakeProducts.filter(({attributes}:any)=>attributes.name===params.name)

  }
   
    

  return {
    // Passed to the page component as props
    props: {  product: fakeProduct[0].attributes,products:fakeProducts,name:params.name,key:fakeProduct[0].id},
  }
}

export default Index;