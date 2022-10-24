import Head from 'next/head';
import {BestSellers,NewArrivals} from '../components/common/products';
import SEO from '../components/common/SEO';
import {About,Hero,Sponsors,Feedback,Category} from "../components/landing";
import parseMdFileToObj from '../lib/parseMdFileToObj';
import ProductI from '../types/product';
interface propsI{
  products: ProductI[]
}
const Home = ({products}:propsI) => {
 
  return (
    <>
    <SEO title="shoe store" description='shoe store website' name="shoe store" image="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg" url=""/>
<Head>
      <title>Home - Shoe store</title>
    </Head>
    <Hero/>
    <Sponsors/>
    <About/>
    <BestSellers products={products}/>
    <Category/>
    <NewArrivals products={products}/>
    <Feedback/>
    </>
  )
}
export async function getStaticProps(){
  
  const {data} = await parseMdFileToObj("fakeProducts.md")
 
   return {props:{products:data}}
}


export default Home
