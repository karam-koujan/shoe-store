import  Image from "next/image";
import Link  from "next/link";

const Header = ()=>{
   return (
    <header className="w-full max-w-8xl m-auto px-[2.4rem] py-[2.4rem] sm:px-[0rem] md:px-[2rem] md:py-[1rem] ">
     <nav className="flex items-center justify-between ">
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="#979a9b"
  xmlns="http://www.w3.org/2000/svg"
   >
  <path
    d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
    fill="currentColor"
  />
  <path
    d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
    fill="currentColor"
  />
  <path
    d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
    fill="currentColor"
  />
</svg>
<div className="hidden md:block">
     <Image  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg" width={129} height={24} />
</div>

      <div className="flex gap-[3.5rem] items-center md:hidden">
      <Image src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg" width={139} height={24} />
      <ul className="flex items-center gap-[1.8rem] ">
       <li className="text-fourth uppercase font-inter text-[0.88rem] font-semibold transition-all duration-[.5s] hover:text-third">
         <Link href="">
         <a>
          women
         </a>
         </Link>
       </li>
       <li className="text-fourth uppercase font-inter text-[0.88rem] font-semibold transition-all duration-[.5s] hover:text-third"> 
       <Link href="">
         <a>
          men
         </a>
         </Link>
       </li>
       <li className="text-fourth uppercase font-inter text-[0.88rem] font-semibold transition-all duration-[.5s] hover:text-third">
       <Link href="">
         <a>
          collection
         </a>
         </Link>
        </li>    
        <li className="text-fourth uppercase font-inter text-[0.88rem] font-semibold transition-all duration-[.5s] hover:text-third">
       <Link href="">
         <a>lookbook</a>
         </Link>
        </li>    
        <li className="text-fourth uppercase font-inter text-[0.88rem] font-semibold transition-all duration-[.5s] hover:text-third">
       <Link href=""> 
         <a>sale</a>
         </Link>
        </li>    
      </ul>
      </div>
      <div className="flex justify-between items-center gap-[2rem] ">
      <ul className="flex items-center gap-[1.8rem] md:hidden">
      <li className="text-fourth uppercase font-inter text-[0.88rem] font-semibold transition-all duration-[.5s] hover:text-third">
       <Link href="">
         <a>our story</a>
         </Link>
        </li>    
        <li className="text-fourth uppercase font-inter text-[0.88rem] font-semibold transition-all duration-[.5s] hover:text-third">
       <Link href="">
         <a>contact</a>
         </Link>
        </li>    
      </ul>
<div className="relative  before:content-['0'] before:absolute before:text-[1rem] before:font-semibold  before:top-[25%] before:left-[36%] before:text-primary">     
<svg height="35px" viewBox="-35 0 512 512.00102" width="35px" fill="#6e7051" ><path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"></path></svg>    
</div>
</div>
     </nav>
    </header>
   )
}

export default Header ; 

