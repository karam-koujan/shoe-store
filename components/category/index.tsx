import * as React from "react";
import * as qs from "qs";

import {Close,Hamburger} from "../common/"; 
import Filter from "./filter";



const Category = ({categoryName,CategoryComponent,products}:any)=>{
   
   const initialProducts =  products;
   React.useEffect(()=>{
      console.log("nothing")
   },[categoryName])
   const [fakeProducts,setProducts] = React.useState(initialProducts);
   const [showCollection,setShowCollection] = React.useState(false)
   const [averageRating,setAverageRating] = React.useState<number|null>();
   const [category,setCategory] = React.useState<string[]>([])
   const [filter,setFilter] = React.useState<string[]>([])
    const price = React.useRef({max:200,min:10}) 
 
    const handleSelectPrice = React.useCallback(({max,min}:{max:number,min:number})=>{
        price.current = {min,max}

        let filteredProducts = initialProducts.filter(product=>product.attributes.price<=price.current.max&& product.attributes.price>=price.current.min)     
        if(fakeProducts.length===0){
           filteredProducts = initialProducts.filter(product=>product.attributes.price<=price.current.max&& product.attributes.price>=price.current.min)     
        }
        setProducts(filteredProducts)
        setFilter([...filter,`min ${min} max ${max}`])
      },[])
    const handleSelectAverageRating = (rating:number)=> ()=>{
      let filteredProducts = products.filter(product=>product.attributes.rating===rating)     
      if(fakeProducts.length===0){
         filteredProducts = initialProducts.filter(product=>product.attributes.rating===rating)
      }
      setAverageRating(rating)
     setProducts(filteredProducts)
     setFilter(filter=>filter.indexOf(`average rating ${rating}`)===-1 ?[...filter,`average rating ${rating}`]:filter)
   }
    const handleSelectCategory = (category:string[])=> ()=>{

      let filteredProducts = products.filter(product=>product.attributes.categories.data.filter(({attributes})=>category.indexOf(attributes.name)!== -1).length == 2)   
      if(fakeProducts.length===0){
       filteredProducts = initialProducts.filter(product=>product.attributes.categories.data.filter(({attributes})=>category.indexOf(attributes.name)!== -1).length == 2)     

      }
      setCategory(category)
      setProducts(filteredProducts)     
      setFilter([...filter,`${category[1]}`])
   }
    const handleShowCollection = ()=>{
       setShowCollection(true)
      window.document.body.style.overflowY = "hidden"
    }
    const handleDeleteCollection = ()=>{
       setShowCollection(false)
       window.document.body.style.overflowY = "auto"
 
    }
    const handleDeleteFilter = (id:number,text:string)=>{
           
       
      return ()=>{
             const isPrice = text.split("").indexOf("max")!==-1;
            const isRating =text.split("").indexOf("average")!==-1 
             if(isPrice){
               handleSelectPrice(price.current)
              }
              if(isRating){
               handleSelectAverageRating(averageRating as number)
              }
              else{
               handleSelectCategory(category)
              }
              
         
            setFilter(filter.filter((_,idx)=>idx!==id))
            
         }     
    }
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
          <h1 className="capitalize font-poppins font-medium text-[1.9rem] text-primary pb-[1.8rem]">
              {categoryName}
          </h1>
       <div className="flex justify-between mb-[2rem] ">
          <div className="flex gap-[1.3rem] items-center">
             <button className="bg-primary py-[.5em] px-[1.2em] flex items-center gap-[.4rem] text-center uppercase font-bold text-[1rem] text-fifth tracking-[.1rem] transition-all duration-[.3s] ease-in-out hover:bg-third focus:bg-third" onClick={handleShowCollection}>
              {!showCollection?<Hamburger size="19" color="#ffffff"/>:<Close color="#ffffff" size="19"/>}
                <span>filter shoes</span>
             </button>
             <p className="text-fourth text-[1.1rem] font-inter" >
                <span className="capitalize">showing</span> all {products.length} results
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
          {filter.length>0?
          (
          <div className="flex gap-[2rem] mb-[2rem] items-center overflow-x-auto ">
             {filter.map((filterItem,idx)=>(
             <button key={idx} className="flex  items-center gap-[.3rem] bg-primary text-fifth  text-center font-poppins capitalize py-[.5rem] px-[1rem]">
               <span>{filterItem}</span>
               <Close color="#ffffff" size="19"  onClick={handleDeleteFilter(idx,filterItem)}/>
             </button>
           ))}
           </div>
        ):null}  
       <Filter categoryName={categoryName} handleDeleteCollection={handleDeleteCollection} showCollection={showCollection} handleSelectAverageRating={handleSelectAverageRating} handleSelectCategory={handleSelectCategory} handleSelectPrice={handleSelectPrice}/>
         <CategoryComponent key={categoryName} products={fakeProducts}   filter={qs.stringify(filter)}/>
           {products.length===0?<p className="text-primary mx-auto w-content-fit text-center capitalize text-[1.4rem]">no result</p>:null}
          </div>
          </section>
    )
}

export default Category;