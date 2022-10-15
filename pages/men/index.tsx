import * as React from "react";
import { NextPage } from "next";
import { Close, Hamburger } from "../../components/common";
import {Men} from "../../components/common/products";
import MultiRangeSlider from "../../components/common/multiRangeSlider";
import Rating from "../../components/common/rating";




const Index:NextPage = ()=>{
   const [showCollection,setShowCollection] = React.useState(false)
   const handleShowCollection = ()=>{
      setShowCollection(true)
     window.document.body.style.overflowY = "hidden"
   }
   const handleDeleteCollection = ()=>{
      setShowCollection(false)
      window.document.body.style.overflowY = "auto"

   }
   
   return(
      <section className="container container-primary-px bg-lightGrey py-[3rem] mb-[3rem]" tabIndex={-1}>
      <div className="container px-[3rem] bg-fifth pt-[3rem] pb-[10rem]">
         <h1 className="font-poppins font-medium text-[1.9rem] text-primary pb-[1.8rem]">
            Men
         </h1>
      <div className="flex justify-between mb-[3.5rem]">
         <div className="flex gap-[1.3rem] items-center">
            <button className="bg-primary py-[.5em] px-[1.2em] flex items-center gap-[.4rem] text-center uppercase font-bold text-[1rem] text-fifth tracking-[.1rem] transition-all duration-[.3s] ease-in-out hover:bg-third focus:bg-third" onClick={handleShowCollection}>
             {!showCollection?<Hamburger size="19" color="#ffffff"/>:<Close color="#ffffff" size="19"/>}
               <span>filter shoes</span>
            </button>
            <p className="text-fourth text-[1.1rem] font-inter">
               <span className="capitalize">showing</span> all 8 results
            </p>
         </div>
            <select className="text-primary text-[1.1rem] w-[180px] bg-transparent focus:outline-none" aria-label="shop order">
               <option value="sort by popularity">Sort by popularity</option>
               <option value="sort by popularity">sort by popularity</option>
               <option value="sort by popularity">sort by popularity</option>
               <option value="sort by popularity">sort by popularity</option>
               <option value="sort by popularity">sort by popularity</option>
               <option value="sort by popularity">sort by popularity</option>
            </select>
          
         </div>
         <Men/>
         <div className={"absolute left-[0] top-[0] bottom-[0]  min-h-[100vh] bg-[rgba(0,0,0,0.4)] w-full right-[0]  " + `${showCollection? "opacity-1" :" opacity-0 -z-20"}`} >
            <div className={"bg-white overflow-y-auto  h-[100vh] transition-all duration-[.5s]  right-0 w-full max-w-[325px] px-[1.3rem] py-[1.5rem]"+ `${showCollection? " " :" p-0 w-0"}`} >
               <div className="flex justify-end">
                  <Close color="#979a9b" size="24" className="cursor-pointer" onClick={handleDeleteCollection}/>
               </div>
               <h3 className="text-fourth font-semibold text-[1.3rem] tracking-wide">
                  <span className="capitalize">filtred price</span>
               </h3>
       
             <div className="mt-[1.5rem]">
               <MultiRangeSlider max={1000.00} min={40.00}/>            
              </div>
              <ul className="text-primary font-poppins mt-[2rem] text-[1.1rem] capitalize">
              <li className="mb-[1rem]">men <span className="text-fourth">(5)</span></li>
              <ul className="pl-[1.5rem]">
               <li className="mb-[.3rem]">running <span className="text-fourth">(1)</span></li>
               <li className="mb-[.3rem]">sneakers <span className="text-fourth">(3)</span></li>
               <li className="mb-[.3rem]">training <span className="text-fourth">(1)</span></li>
              </ul>
              </ul>   
              <ul className="text-primary font-poppins mt-[2rem]  text-[1.1rem] capitalize">
              <li className="mb-[1rem]">women <span className="text-fourth">(5)</span></li>
              <ul className="pl-[1.5rem]">
               <li className="mb-[.3rem]">running <span className="text-fourth">(1)</span></li>
               <li className="mb-[.3rem]">sneakers <span className="text-fourth">(3)</span></li>
               <li className="mb-[.3rem]">training <span className="text-fourth">(1)</span></li>
              </ul>
              </ul>   
              <h3 className="text-fourth py-[1.5rem] font-semibold text-[1.3rem] tracking-wide">
                  <span className="capitalize">average rating</span>
               </h3>
               <div className="flex flex-col gap-[.5rem] pl-[1.5rem]">
                  <div className="flex gap-[.2rem] items-center">
                  <Rating rating={5} className="text-[1.3rem]"/>
                  <span className="text-fourth text-[1rem] font-poppins">(5)</span>
                  </div>
                  <div className="flex gap-[.2rem] items-center">
                  <Rating rating={3} className="text-[1.3rem]"/>
                  <span className="text-fourth text-[1rem] font-poppins">(5)</span>
                  </div>
                  <div className="flex gap-[.2rem] items-center">
                  <Rating rating={2} className="text-[1.3rem]"/>
                  <span className="text-fourth text-[1rem] font-poppins">(5)</span>
                  </div>

               </div>
            </div>
         </div>)
         </div>
         </section>
   )
}

export default Index;