


const useLocalhost = (key:string)=>{
   
   const data = localStorage.getItem(key);  
   const setLocalhost = (value:any)=>localStorage.setItem(key,value)
    
   return [data,setLocalhost]
}
export default useLocalhost ;