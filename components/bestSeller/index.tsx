import Link from "next/link";
import Image from "next/image";

const  products = 
[ 
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

const BestSeller = ()=>{
  return(
     <section className="container container-primary-px"> 
        <div>
            <div>
                <h2>
                   our best seller
                </h2>
                <Link href="#">
                <a>
               view all best sellers
                </a>
                </Link>
            </div>
            <div>
                {
                    products.map((product,idx)=>(
                        <div key={idx}>
                            <div>
                                <Image src={product.image} alt={product.name} height={400} width={400}/>
                             <div>
                             <p>
                                quick view
                             </p>
                             </div>
                             <div>
                                <p>
                                    {product.name}
                                </p>
                                <div>
                                <span>
                                    {product.price}
                                </span>
                                {product.sale?<span>
                                    {product.sale}
                                </span>:null}
                                </div>
                             </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
     </section>
  ) 
}

export default BestSeller;

