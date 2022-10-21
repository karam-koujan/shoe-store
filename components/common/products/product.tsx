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

const fakeProducts = [
 {
    attributes: {
        name : "women's green training",
        price:49.00,
        sale:64.00,
        rating:5,
        image:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-400x400.jpg"
                }
            }
        }
    }
 },
 {
    attributes: {
        name : "men’s red running",
        price:69.00,
        sale:79.00,
        rating:4,
        image:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg"
                }
            }
        }
    }
 },
 {
    attributes: {
        name : "men's classic min",
        price:79.00,
        sale:null,
        rating:3,
        image:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg"
                }
            }
        }
    }
 },
 {
    attributes: {
        name : "women's pink training",
        price:54.80,
        sale:64.90,
        rating:4,
        image:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-400x400.jpg"
                }
            }
        }
    }
 },
 {
    attributes: {
        name : "men's navy running",
        price:104.80,
        sale:null,
        rating:3,
        image:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg"
                }
            }
        }
    }
 },
 {
    attributes: {
        name : "men's green running",
        price:89.80,
        sale:104,
        rating:5,
        image:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg"
                }
            }
        }
    }
 }

]

const Product = ({products}:productsI)=>{
     
    
    return(

        <div  className="grid grid-cols-auto-fit gap-[1.5rem] gap-y-[3rem] sm:gap-y-[1.5rem]">
        {
            fakeProducts.map((product:any)=>(

                <div key={product.id}>
                    <Link href={`/product/${product.attributes.name}`} >
                    <a>
                    <div>
                        <div tabIndex={0} className="w-full cursor-pointer before:content-['quick\00a0view'] relative  before:absolute before:bg-third before:text-fifth before:capitalize before:text-[1.1rem] before:text-center before:left-[0] before:right-[0] before:bottom-[.1%] before:py-[.5rem] z-1 before:z-20 before:opacity-0  before:transition-all before:duration-[.3s] before:ease-out hover:before:opacity-100 focus:before:opacity-100  after:content-['Sale!'] after:absolute after:bg-primary after:text-fifth after:rounded-[50%]  after:top-[-2%] after:right-[-2%] after:w-[40px] after:h-[40px] after:flex after:justify-center after:items-center after:text-[0.9rem]">
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