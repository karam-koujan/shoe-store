import { useFetchQuery } from "../../../hooks";
import Product from "./product";
import { fakeProducts } from "../../../content/fakeProducts";





const RelatedProducts = ()=>{

    return(
      <article className="mt-[3rem]">
       <h2 className="text-third text-[1.8rem] font-poppins font-medium mb-[1.2rem]"><span className="capitalize">related</span> products</h2>
       <Product fakeProducts={fakeProducts} />
      </article>
    )
}
export default RelatedProducts;