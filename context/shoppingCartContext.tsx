import * as React from "react";
import { useLocalStorage } from "../hooks";



interface propsI{
    children:React.ReactNode
}
interface shoppingCartI{
    name:string;
    image:any;
    price:number;
    productAmount: number;
}
interface shoppingCartContextI{
    shoppingCart: shoppingCartI[];
    setShoppingCart: React.Dispatch<React.SetStateAction<shoppingCartI[]>>

}


const ShoppingCartContext = React.createContext<shoppingCartContextI|null>(null);

const ShoppingCartProvider = ({children}:propsI)=>{
    const [shoppingCart,setShoppingCart] = React.useState<shoppingCartI[]>([])
    React.useEffect(()=>{
        const [data] = useLocalStorage<shoppingCartI[]>("shoppingCart");
        if(data!==null){
          setShoppingCart(data as shoppingCartI[])
        }
  
    },[])
    return(
        <ShoppingCartContext.Provider value={{shoppingCart,setShoppingCart}}>
         {children}
        </ShoppingCartContext.Provider>
    )
}

const useShoppingCart = ()=>{
     const context = React.useContext(ShoppingCartContext);
     if(context===undefined){
        throw new Error("the component may be not inside the context provider")
     }
     return context
}

export {useShoppingCart,ShoppingCartProvider}




