import * as React   from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import type { NextPage } from 'next';
import visa from "../../../asset/images/svg/visa.svg"
import masterCard from "../../../asset/images/svg/mastercard.svg";
import americanExpress from "../../../asset/images/svg/americanexpress.svg";
import discover from   "../../../asset/images/svg/discover.svg";
import { ImageMagnifier } from "../../../components/common";

const reviews = [
    {
        name: "alex",
        image : "https://secure.gravatar.com/avatar/5a061861a1d9cd5bf192296831033b83?s=60&d=mm&r=g",
        rating : 5,
        description : "Best shoes ever. So comfortable and cool looking. And very good quality materials. Totally recommend!"
    },
    {
        name: "alex",
        image : "https://secure.gravatar.com/avatar/5a061861a1d9cd5bf192296831033b83?s=60&d=mm&r=g",
        rating : 5,
        description : "Best shoes ever. So comfortable and cool looking. And very good quality materials. Totally recommend!"
    },
    {
        name: "alex",
        image : "https://secure.gravatar.com/avatar/5a061861a1d9cd5bf192296831033b83?s=60&d=mm&r=g",
        rating : 5,
        description : "Best shoes ever. So comfortable and cool looking. And very good quality materials. Totally recommend!"
    }
 ]

const Index:NextPage = ()=>{
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
            <div className="container container-primary-px bg-fifth ">
             <article className="py-[3rem] flex justify-between  gap-[3rem] lg:gap-[2rem] md:flex-col">
                <ImageMagnifier imgUrl="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016.jpg">
                <div className="bg-primary w-[60px] h-[60px] rounded-full flex justify-center items-center absolute top-[-2%] left-[-4%] md:w-[50px] md:h-[50px] md:left-[-3%] xsm:w-[40px] xsm:h-[40px] xsm:top-[-6%]">
                 <span className="text-fifth text-[1.2rem] capitalize md:text-[1.1rem] xsm:text-[.9rem]">
                  sale!
                 </span>
                 </div>
                </ImageMagnifier>
        
                <div  className="w-full">
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
                        <span className="text-[1.8rem] font-inter mr-[.3rem] line-through opacity-40">
                          $99.00
                        </span>
                            <span className="text-[1.8rem] font-semibold font-inter mr-[.3rem]">
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
                            <input type="number" name={`number of ${name}`}  className="w-full focus:outline-0 text-center text-primary" value={0}/>
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
                        <p className="text-fourth text-[1.2rem] leading-8 pt-[1.1rem]">
                        Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
        
        Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
        
        Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.
                        </p>
                    ):
                    (
                      <React.Fragment>
                       <div className="pt-[1.5rem] flex flex-col gap-[1.6rem]">
                          {
                            reviews.map((review,idx)=>(
                                <div key={idx} >
                                    <div className="flex gap-[1rem]">
                                        <div className="rounded-full overflow-hidden " >
                                            <Image src={review.image}  alt={`${review.name} profile image`} layout="fixed" objectFit="cover" className="rounded-full" width={60} height={60}/>
                                        </div>
                                    <div >
                                        <div>
                                            <p className="capitalize text-fourth text-[1.5rem] font-inter mb-[.5rem]">{review.name}</p>
                                              
                                            {new Array(5).fill(undefined).map((_,idx)=>(
                                                <span key={idx} className={`fa fa-star text-[1.3rem] ${review.rating >= idx+1 ? `text-secondary` : `text-fourth`  } `}></span>  
                                              ) )}   
                                        </div>
                                    <p className="text-fourth text-[1.2rem] leading-8 pt-[.9rem]">
                                        {review.description}
                                    </p>
                                    </div>
                                </div>
                                </div>
                            ))
                          }
                       </div>
                       <article className="my-[3rem] py-[2rem] px-[2rem] border-[1px]   rounded-[3px]">
                         <h2 className="text-fourth text-[1.5rem]"><span className="capitalize">add</span> a review</h2>
                         <p className="text-fourth text-[1.1rem] pt-[.5rem]">
                         Your email address will not be published. Required fields are marked *
                         </p>
                         <div className="flex  items-center">
                         <span className="text-fourth text-[1.5rem] mr-[.8rem]"><span className="capitalize">your</span> rating *</span>
                          <div className="flex gap-[.3rem]">
                          {new Array(5).fill(undefined).map((_,idx)=>(
                               
                                                <span key={idx} className={`fa fa-star text-[1.5rem] text-fourth `}></span>  
                        ))}
                         </div>
                        </div>
                        <form action="">
                          <label>
                          Your review *
                          </label>
                          <textarea className="border-[1px] rounded-[3px] px-[.7rem] py-[.6rem] "/>
                          <div>
                          <label>
                          name *
                          </label>
                          <input type="text" className="border-[1px] rounded-[3px] px-[.7rem] py-[.6rem]"/>
                          <label>
                          name *
                          </label>
                          <input  type="email" className="border-[1px] rounded-[3px] px-[.7rem] py-[.6rem]"/>
                          </div>
                          <input type="checkbox"/>
                          <span> Save my name, email, and website in this browser for the next time I comment.</span>
                         <button>
                            submit
                         </button>
                        </form>   
                       </article>
                       </React.Fragment>
                    )
                }
               
             </article>
            </div>
         </section>
    )
}
export default Index;