import Image from "next/image";
import Link from "next/link";
import Rating from "../../common/rating";

interface attributesI{
    name: string;
    rating:number;
    sale : null | number;
    price : number;
    image:any;
} 
interface productsI{
    id : number;
    attributes : attributesI;
   
}
interface propsI{
    products:productsI[]
}


const Product = ({fakeProducts}:any)=>{
     
    
    return(

        <div  className={"grid gap-[1.5rem] gap-y-[3rem] sm:gap-y-[1.5rem] "+`${fakeProducts.length<3?" grid-cols-auto-fit-lg md:grid-cols-auto-fit":" grid-cols-auto-fit"} sm:flex sm:flex-col `}>
        {
            fakeProducts.map((product:any)=>(

                <div key={product.id}>
                    <Link href={`/product/${product.attributes.name}`} >
                    <a>
                    <div>
                        <div tabIndex={0} className="w-full cursor-pointer  relative   z-1    after:content-['Sale!'] after:absolute after:bg-primary after:text-fifth after:rounded-[50%]  after:top-[-2%] after:right-[-2%] after:w-[40px] after:h-[40px] after:flex after:justify-center after:items-center after:text-[0.9rem] ">
                        <Image src={`${product.attributes.image.data.attributes.url}`} alt={`${product.attributes.name} image`} height={400} width={400} layout="responsive"/>
                        </div>

                     <div className="flex flex-col items-center py-[2rem]">
                        <p className="capitalize text-third text-[1.1rem] font-inter font-semibold">
                            {product.attributes.name}
                        </p>
                        <div>
                        {product.attributes.sale?<span className="text-fourth line-through font-inter font-semibold pr-[.2rem] opacity-[0.5]">
                            <span>$</span>{product.attributes.sale}
                        </span>:null}
                        <span className="text-fourth  font-inter font-semibold">
                        <span>$</span>{product.attributes.price}
                        </span>
                        </div>
                        <div>
                      <Rating rating={product.attributes.rating} />
                    
                        </div>
                     </div>
                    </div>
                    </a>
                    </Link>
                </div>
            ))
        }
        </div>
     )
}


export default Product;