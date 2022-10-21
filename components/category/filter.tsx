import * as React from "react";
import {Close,Rating,MultiRangeSlider} from "../common/"; 

interface propsI{
    handleDeleteCollection : (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>)=>any
    showCollection : boolean;
}

const Filter = ({categoryName,handleDeleteCollection,showCollection,handleSelectAverageRating,handleSelectCategory,handleSelectPrice}:propsI)=>{
React.useEffect(()=>{
 console.log("categoryName",categoryName)
},[])   

  // console.log("filter",data)
   return (
        <div className={"absolute left-[0] top-[0] bottom-[0]  min-h-[100vh] bg-[rgba(0,0,0,0.4)] w-full right-[0]  " + `${showCollection? "opacity-1 z-10 " :" opacity-0 -z-40"}`} >
        <div className={"bg-white overflow-y-auto  h-[100vh] transition-all duration-[.5s]  right-0 w-full max-w-[325px] px-[1.3rem] py-[1.5rem]"+ `${showCollection? " " :" p-0 w-0"}`} >
           <div className="flex justify-end">
              <Close color="#979a9b" size="24" className="cursor-pointer" onClick={handleDeleteCollection}/>
           </div>
           <h3 className="text-fourth font-semibold text-[1.3rem] tracking-wide">
              <span className="capitalize">filtred price</span>
           </h3>
   
         <div className="mt-[1.5rem]">
           <MultiRangeSlider max={1000.00} min={40.00} step={0.01} onChange={handleSelectPrice}/>            
          </div>
          {categoryName==="men"?(
          <ul className="text-primary font-poppins mt-[2rem] text-[1.1rem] capitalize">
          <li className="mb-[1rem]">men <span className="text-fourth">(5)</span></li>
          <ul className="pl-[1.5rem]">
           <li className="mb-[.3rem]" onClick={handleSelectCategory(["men","running"])}>running <span className="text-fourth">(1)</span></li>
           <li className="mb-[.3rem]" onClick={handleSelectCategory(["men","sneaker"])}>sneakers <span className="text-fourth">(3)</span></li>
           <li className="mb-[.3rem]" onClick={handleSelectCategory(["men","training"])}>training <span className="text-fourth">(1)</span></li>
          </ul>
          </ul>):null}   
          {categoryName==="women"?(
          <ul className="text-primary font-poppins mt-[2rem]  text-[1.1rem] capitalize">
          <li className="mb-[1rem]">women <span className="text-fourth">(5)</span></li>
          <ul className="pl-[1.5rem]">
           <li className="mb-[.3rem]" onClick={handleSelectCategory(["women","running"])}>running <span className="text-fourth">(1)</span></li>
           <li className="mb-[.3rem]" onClick={handleSelectCategory(["women","sneaker"])}>sneakers <span className="text-fourth">(3)</span></li>
           <li className="mb-[.3rem]" onClick={handleSelectCategory(["women","training"])}>training <span className="text-fourth">(1)</span></li>
          </ul>
          </ul>):null}   
          <h3 className="text-fourth py-[1.5rem] font-semibold text-[1.3rem] tracking-wide">
              <span className="capitalize">average rating</span>
           </h3>
           <div className="flex flex-col gap-[.5rem] pl-[1.5rem]">
              <div className="flex gap-[.2rem] items-center" onClick={handleSelectAverageRating(5)}>
              <Rating rating={5} className="text-[1.3rem]"/>
              <span className="text-fourth text-[1rem] font-poppins">(5)</span>
              </div>
              <div className="flex gap-[.2rem] items-center" onClick={handleSelectAverageRating(3)}>
              <Rating rating={3} className="text-[1.3rem]"/>
              <span className="text-fourth text-[1rem] font-poppins">(5)</span>
              </div>
              <div className="flex gap-[.2rem] items-center" onClick={handleSelectAverageRating(2)}>
              <Rating rating={2} className="text-[1.3rem]"/>
              <span className="text-fourth text-[1rem] font-poppins">(5)</span>
              </div>

           </div>
        </div>
     </div>
    )
}

export default Filter;