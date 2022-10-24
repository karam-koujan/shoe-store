import * as React from "react";
import Link from "next/link";
import Product from "./product";
import ProductI from "../../../types/product";

interface propsI{
   products : ProductI[]
}
const BestSellers = ({products}:propsI)=>{
  
  return(
     <section className="container container-primary-px" tabIndex={-1}> 
        <div>
            <div className="flex justify-between w-full items-center sm:flex-col sm:gap-[2rem] mb-[2.5rem]">
                <h2 className="capitalize text-third text-[1.5rem] font-poppins font-medium">
                   our best seller
                </h2>
                <Link href="#" >
                <a className="uppercase text-third text-[.87rem] font-inter font-semibold tracking-widest underline decoration-secondary underline-offset-[4.5px] decoration-[.1rem] transition-all duration-[.5s] ease-out hover:decoration-third focus:decoration-third">
               view all best sellers
                </a>
                </Link>
            </div>
          <Product fakeProducts={products}/>
        </div>
     </section>
  ) 
}

export default BestSellers;

