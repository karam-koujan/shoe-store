import * as React from "react";


const useLocalStorage = <T>(key:string):[(T|string|null),any]=>{
   const data = typeof window !== "undefined" ?  localStorage.getItem(key) : null;  
   const setLocalStorage = typeof window !== "undefined" ?  (value:any)=>localStorage.setItem(key,value) : null;
    
   return [data,setLocalStorage]
}
export default useLocalStorage ;