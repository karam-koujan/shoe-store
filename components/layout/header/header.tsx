import * as React from "react";
import Link  from "next/link";
import {Hamburger,ShoppingCartIcon,Logo} from "../../common";
import MobileNavLinks from "./mobileNavLinks";

const navItem = ["men","women","categories","lookbook","sale","our story","contact"];
const Header = ()=>{
  const [showNavBar,setShowNavBar] = React.useState(false) ;
  const handleShowNavBar = ()=>setShowNavBar(!showNavBar)
   return (
    <header className="container px-[2.4rem] py-[2.4rem] xsm:px-[1rem] md:px-[2rem] md:py-[1rem] items-center ">
     {showNavBar?<div className="hidden md:block bg-fourth opacity-75 absolute h-[100vh] w-[100%] left-0 top-0 z-0 transition-all duration-[.2s]"></div>:null}
     <nav className="flex items-center  justify-between ">
     <Hamburger className="hidden md:block" color="#6e7051" onClick={()=>setShowNavBar(true)}/>
     <MobileNavLinks show={showNavBar} setShowNavBar={handleShowNavBar} />
     <Logo className="hidden md:block translate-y-[13%]" width={126} height={30}/>
      <div className="flex items-center gap-[3.5rem] md:hidden">
      <Logo className="md:hidden" width={139} height={24} />
      <ul className="flex  gap-[1.8rem] ">
       {navItem.slice(0,navItem.length-2).map((item,idx)=>(
       <li key={idx} className="text-fourth uppercase font-inter text-[0.88rem] font-semibold transition-all duration-[.5s]">
         <Link href="">
         <a className=" text-fourth transition-all duration-[.5s] hover:text-third focus:text-third">
          {item}
         </a>
         </Link>
       </li>
       ))}
       </ul>
      </div>
      <div className="flex justify-between items-center gap-[2rem] ">
      <ul className="flex items-center gap-[1.8rem] md:hidden">
      {navItem.slice(navItem.length-2).map((item,idx)=>(
       <li key={idx} className=" uppercase font-inter text-[0.88rem] font-semibold" >
         <Link href="">
         <a className=" text-fourth transition-all duration-[.5s] hover:text-third focus:text-third">
          {item}
         </a>
         </Link>
       </li>
       ))}
      </ul>
      <ShoppingCartIcon width="35px" height="35px" color="#6e7051" className={`relative  before:content-['0'] before:absolute before:text-[1rem] before:font-semibold  before:top-[25%] before:left-[36%] before:text-primary`} />
    </div>
     </nav>
    </header>
   )
}

export default Header ; 

