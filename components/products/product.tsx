import Image from "next/image";

interface productsI{
    name: string;
    rating:number;
    sale : undefined | number;
    price : number;
    image:string;
}
const  products : productsI[] = 
[ 
    {
        name : "women pink suede",
        rating : 5 ,
        sale : undefined,
        price : 67, 
        image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-400x400.jpg"
    },
    {
        name : "women pink suede",
        rating : 3 ,
        sale : 59.90,
        price : 67, 
        image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-400x400.jpg"
    },
    {
        name : "women pink suede",
        rating : 5 ,
        sale : 59.90,
        price : 67, 
        image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-400x400.jpg"
    },
    {
        name : "women pink suede",
        rating : 5 ,
        sale : 59.90,
        price : 67, 
        image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-400x400.jpg"
    },
    {
        name : "women pink suede",
        rating : 5 ,
        sale : 59.90,
        price : 67, 
        image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-400x400.jpg"
    },
    {
        name : "women pink suede",
        rating : 5 ,
        sale : 59.90,
        price : 67, 
        image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-400x400.jpg"
    }
]

const Product = ()=>{
     return(
        <div  className="grid grid-cols-auto-fit pt-[2.5rem] gap-[1.5rem] gap-y-[3rem] sm:gap-y-[1.5rem]">
        {
            products.map((product,idx)=>(
                <div key={idx}>
                    <div>
                        <div tabIndex={0} className="w-full cursor-pointer before:content-['quick\00a0view'] relative  before:absolute before:bg-third before:text-fifth before:capitalize before:text-[1.1rem] before:text-center before:left-[0] before:right-[0] before:bottom-[.1%] before:py-[.5rem] z-1 before:z-20 before:opacity-0  before:transition-all before:duration-[.3s] before:ease-out hover:before:opacity-100 focus:before:opacity-100 after:content-['Sale!'] after:absolute after:bg-primary after:text-fifth after:rounded-[50%]  after:top-[-2%] after:right-[-2%] after:w-[40px] after:h-[40px] after:flex after:justify-center after:items-center after:text-[0.9rem]">
                        <Image src={product.image} alt={product.name} height={400} width={400} layout="responsive"/>
                        </div>

                     <div className="flex flex-col items-center py-[2rem]">
                        <p className="capitalize text-third text-[1.1rem] font-inter font-semibold">
                            {product.name}
                        </p>
                        <div>
                        {product.sale?<span className="text-fourth line-through font-inter font-semibold pr-[.2rem] opacity-[0.5]">
                            <span>$</span>{product.sale}
                        </span>:null}
                        <span className="text-fourth  font-inter font-semibold">
                        <span>$</span>{product.price}
                        </span>
                        </div>
                        <div>
                         {new Array(5).fill(undefined).map((_,idx)=>(
                             <span key={idx} className={`fa fa-star  ${product.rating >= idx+1 ? `text-secondary` : `text-fourth`  } `}></span>  
                         ))}   
                    
                        </div>
                     </div>
                    </div>
                </div>
            ))
        }
        </div>
     )
}


export default Product;