import * as React from "react";
import * as qs from "qs";
import {Close,Hamburger,Men} from "../common/"; 
import Filter from "./filter";
import { useFetchQuery } from "../../hooks";
import {useQueryClient,QueryClient} from "react-query";
const Category = ()=>{
   const queryClient = useQueryClient();

   const [showCollection,setShowCollection] = React.useState(false)
    const [categories,setCategories] = React.useState<string[]>([]);
    const [averageRating,setAverageRating] = React.useState<number>();
    const price = React.useRef({max:1000,min:40}) 
    const handleSelectPrice = ({max,min}:{max:number,min:number})=>{
        price.current = {min,max}
        const filter = qs.stringify({
         filters:{
            $and : [ {
               price : {
                  $gte : price.current.min          
               }          
            }, 
            {
               price : {
                     $lte : price.current.max
                 }
            }]          
         }
        }) 
        setFilter(filter)
    }
    const handleSelectAverageRating = (rating:number)=> ()=>{
      setAverageRating(rating)
      const filter = qs.stringify({
         filters : {
            rating:averageRating
         }
      })
      setFilter(filter)
   }
    const handleSelectCategory = (category:string[])=> ()=>{
      setCategories(category)
      console.log(categories)
     const filter = (prev:any)=>{
        return {...prev,
         $and:[
            {
               categories : {
                  name : categories[0]
               }
            },
            {
               categories : {
                  name : categories[1]
               }
            }
         ]
     }
   }
   queryClient.invalidateQueries(["bestSellers"])
      setFilter(filter)

   }
    const handleShowCollection = ()=>{
       setShowCollection(true)
      window.document.body.style.overflowY = "hidden"
    }
    const handleDeleteCollection = ()=>{
       setShowCollection(false)
       window.document.body.style.overflowY = "auto"
 
    }
    
    const generateFilter = ()=>{
      const filter = {

         $and : [ {
            price : {
               $gte : price.current.min          
            }          
         }, 
         {
            price : {
                  $lte : price.current.max
              }
         }]
      }
      if(averageRating){
         filter.$and.push({rating:averageRating})
      } 
      if(categories.length>0){
         filter.$and.push({
            categories :  {
               $and : [{
                  name : categories[0]
               },
              {
               name : categories[1]
              } 
             ]
            } 
         })
      
      }
      return qs.stringify({filters:filter})
  }

   const initalFilter =  {
       filters:{
         categories:{
            name : "men"
         }
       }
   }
   const [filter,setFilter] = React.useState(initalFilter)
    /*
   const generateFilter = (data:any)=>{
      const filteredData:any = []; 
     data.forEach(({attributes}:any)=>{
           let filteredPrice = true ;
           let filteredCategory = true;
           let filteredRating = true ;
           if(price.current!==undefined){
              filteredPrice = attributes.price>= price.current.min && attributes.price <= price.current.max ;
           }
           if(category.length>0){
              filteredCategory = attributes.categories.data.filter(({attributes}:any)=>category.indexOf(attributes.name) !== -1 ).length === 2 ;
           }
           console.log(averageRating,attributes.rating)
           console.log(category,attributes.categories.data.filter(({attributes}:any)=>category.indexOf(attributes.name) !== -1 ))
           
           if(averageRating){
              filteredRating = attributes.rating === averageRating ;
           }
           console.log("filter",filteredPrice,filteredCategory,filteredRating)
           if(filteredPrice&&filteredCategory&&filteredRating){
              filteredData.push(attributes)
           }

     })
     return filteredData ;
  }
  */
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
             <p className="text-fourth text-[1.1rem] font-inter" >
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
         <Men  filter={qs.stringify(filter)}/>

       <Filter handleDeleteCollection={handleDeleteCollection} showCollection={showCollection} handleSelectAverageRating={handleSelectAverageRating} handleSelectCategory={handleSelectCategory} handleSelectPrice={handleSelectPrice}/>
          </div>
          </section>
    )
}

export default Category;