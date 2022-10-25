import * as React from "react";
import Link from "next/link";
import { Close } from "../../";
const navItem = ["Home","men","women","categories","lookbook","sale","our story","contact"];

interface propsI{
  show : boolean ;
  handleHideNavBar:any;
}

const MobileNavLinks = ({show,handleHideNavBar}:propsI)=>{
   return(
    <div className={` ${show?"w-full left-0 ":"left-[-100%] w-0]"} hidden md:block  overflow-y-auto  bg-white fixed bottom-0 top-0 h-[100vh] z-20 pt-[1.2rem] transform-all duration-[.4s] ease-out`} tabIndex={-1}>
    <div className="flex justify-end pr-[.8rem]">
      <Close color="#6e7051" size="18" onClick={handleHideNavBar}/>
    </div>
    <ul className="md:flex flex-col pt-[1.2rem]">
    {navItem.map((item,idx)=>(
      
    <li key={idx} onClick={handleHideNavBar} className=" capitalize font-inter text-[1.1rem] tracking-wide font-normal pl-[1.5rem] py-[1.2rem] border-t-[1px]  border-solid  ">
      <Link href={`/${idx<=2?item:"#"}`} >
      <a  className="text-primary transition-all duration-[.5s] hover:text-third focus:text-third">
       {item}
      </a>
      </Link>
    </li>
    ))}
    </ul>

    </div>
   )   
}
export default MobileNavLinks;