import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import type { NextPage } from 'next';
import visa from "../../../asset/images/svg/visa.svg"
import masterCard from "../../../asset/images/svg/mastercard.svg";
import americanExpress from "../../../asset/images/svg/americanexpress.svg";
import discover from   "../../../asset/images/svg/discover.svg";


const Index:NextPage = ()=>{
    const router = useRouter()
    const {name} = router.query;
    return(
         <section className="container container-primary-px bg-lightGrey py-[3rem] mb-[3rem]" tabIndex={-1}>
            <div className="container container-primary-px bg-fifth ">
             <article className="py-[3rem] flex justify-between  gap-[3rem] lg:gap-[2rem] md:flex-col">
                <div >
                    <Image src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016.jpg" alt="product image" width={1900} height={1900}/>
                </div>
                <div >
                    <span className="text-primary text-[1.1rem] capitalize font-medium font-poppins ">
                     women
                    </span>
                    <span className="text-primary mr-[.5rem] text-[1.1rem] ml-[.1rem]">
                        ,
                    </span>
                    <span className="text-primary text-[1.1rem] capitalize font-medium font-poppins">
                        running
                    </span>
                    <h2 className="capitalize text-[1.8rem] text-third font-medium font-poppins my-[.8rem]">
                    womens pink suede
                    </h2>
                    <div className="mb-[.8rem] ]">
                    {new Array(5).fill(undefined).map((_,idx)=>(
                             <span key={idx} className={`fa fa-star text-[1.2rem]  ${5 >= idx+1 ? `text-secondary` : `text-fourth`  } `}></span>  
                         ))}   
                      <span className="text-primary ml-[.7rem] text-[1.1rem]">( 1 costumer review )</span>
                    </div>
                    <div className="text-fourth">
                            <span className="text-[1.9rem] font-bold mr-[.2rem]">
                            $59.00 
                            </span>
                            <span className="capitalize  text-[1.1rem]">
                            & free shipping
                            </span>
                    </div>
                    <p className="text-fourth text-[1.1rem] mt-[.8rem] leading-8">
                    Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
                    </p>
                    <div className="flex  py-[.8rem] gap-[1.5rem] sm:flex-col">
                        <div className="border-[1px]  flex justify-between w-[120px] self-start sm:self-center ">
                            <button className="w-full text-primary border-r-[1px]  py-[.3rem]">-</button>
                            <input type="number" name={`number of ${name}`}  className="w-full focus:outline-0 text-center text-primary"/>
                            <button className="w-full text-primary border-l-[1px]">+</button>
                        </div>
                        <button className="bg-primary py-[.5em] px-[1.2em] text-center uppercase font-bold text-[1.1rem] text-fifth tracking-[.1rem] transition-all duration-[.3s] ease-in-out hover:bg-third focus:bg-third">
                            add to cart
                        </button>
                    </div>
                    <hr />
                    <div className="text-fourth capitalize text-[1.1rem] pt-[.5rem]">
                        <span className="mr-[.3rem]">
                        categories : 
                        </span>
                          <Link href="#">
                          <a className="text-primary mr-[.3rem] text-[1rem]">
                            sneaker,
                          </a>
                          </Link>
                          <Link href="#">
                            <a className="text-primary capitalize text-[1rem]">
                             women
                            </a>
                          </Link>
                    </div>
                    <div className="border-[1px]  rounded relative mw-[500px] w-full py-[1.5rem] mt-[3rem]">
                        <h3 className="absolute capitalize font-bold text-[1.1rem] text-center z-10 bg-fifth text-fourth left-[50%] translate-x-[-50%] top-0 translate-y-[-50%] px-[1rem] sm:w-[90%] ">
                        Guaranteed Safe Checkout
                        </h3>
                        <div className="w-full flex  justify-center gap-[1rem]">
                        <Image src={visa} alt="visa icon" height={45} width={45}/>
                        <Image src={masterCard} alt="master icon" height={45} width={45}/>
                        <Image src={americanExpress} alt="american express icon" height={45} width={45}/>
                        <Image src={discover} alt="american express icon" height={45} width={45}/>

                        </div>
                    </div>
                </div>
             </article>
            </div>
         </section>
    )
}
export default Index;