import * as React from "react";
import Image from "next/image";
import { Close } from "../icons";
import { useShoppingCart } from "../../../context/shoppingCartContext";



interface propsI{
    showCart:boolean;
    handleHideCart: ()=>any;
}
const Cart = ({showCart,handleHideCart}:propsI)=>{
  const {shoppingCart,_} = useShoppingCart()
  React.useEffect(()=>{
    console.log(shoppingCart)
  },[])
    return(
        <React.Fragment>
        {showCart?<div className="bg-fourth opacity-75 absolute h-[100vh] w-[100%] left-0 top-0 z-10 transition-all duration-[.2s]"></div>:null}
        <div className={` ${showCart?"w-full max-w-[450px] right-0 ":"right-[-100%] w-0]"} overflow-y-auto flex flex-col justify-between  md:block   bg-white absolute  top-0 h-[100vh] z-20  transform-all duration-[.4s] ease-out`} tabIndex={-1}>
         <div>
         <div  className="flex justify-between border-b-lightGrey border-b-[1px] py-[1rem] px-[1.3rem] ">
           <h2 className="text-third capitalize text-[1.1rem] font-poppins  self-center">shopping cart</h2>
             <Close color="#262b2c" onClick={handleHideCart}  className="border-[2px] border-primary py-[.4rem] px-[.8rem] cursor-pointer transition-all duration-[.1s] ease-in-out hover:border-fourth focus:border-fourth"/>
           </div>
           {true&&<div className="px-[1.3rem] py-[2.5rem] flex flex-col gap-[2.5rem] ">
             <div className="flex justify-between">
                <div className="flex gap-[1.3rem]">
                 <Image src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg" alt="product image" width={70} height={70}/>
                 <div>
                   <p className="text-third text-[1.1rem] capitalize mb-[.5rem]">{shoppingCart.name}</p>
                   <div className="border-[1px]  flex justify-between w-[120px] ">
                    <button className="w-full text-primary border-r-[1px]  py-[.3rem]" >-</button>
                    <input type="number" name="empty"  className="w-full focus:outline-0 text-center text-primary" value={0}/>
                    <button className="w-full text-primary border-l-[1px]">+</button>
                </div>
                 </div>
                </div>
                <div className="flex flex-col gap-[1.3rem]" >
                <button className="self-end border-fourth border-[1px] w-[23px] h-[23px] rounded-full flex flex-col justify-center items-center">
               <Close color="#979a9b" size="17px" />
                     </button>
                 <p className="text-fourth text-[1.1rem] font-poppins">
                   $89.00
                 </p>
                </div>
             </div>
           </div>}
           {false&&<div className="flex justify-center items-center py-[30%]">
             <p className="text-primary text-[1.1rem] font-poppins">
               <span className="capitalize">No</span> product in the cart
             </p>
           </div>}
           </div>
           {true&&<div>
             <div className="flex justify-between px-[1.3rem] py-[1rem] border-t-[1px] border-b-[1px] border-lightGrey">
               <p className="font-poppins text-[1.1rem] text-third capitalize">subtotal:</p>
               <p className="font-poppins text-fourth text-[1.1rem]">$89.00</p>
             </div>
             <div className="py-[1.2rem] px-[1.3rem] flex flex-col gap-[.8rem]">
             <button className="uppercase font-poppins tracking-widest bg-fifth text-primary border-[1px] border-primary text-center w-full py-[.9rem] font-semibold text-[1.12rem] transition-all duration-[.2s] ease-in-out hover:text-third hover:border-third  focus:text-third focus:border-third">
               view cart
             </button>
             <button className="uppercase font-poppins tracking-widest bg-primary text-fifth text-center w-full py-[1rem] font-semibold text-[1.12rem] transition-all duration-[.2s] ease-in-out hover:bg-third focus:bg-third">
               checkout
             </button>
             </div>
           </div>}
           {false&&<button className="bocl px-[1.3rem] py-[1rem] uppercase font-poppins tracking-widest bg-fifth text-primary border-[1px] border-primary text-center w-full py-[.9rem] font-semibold text-[1.12rem] transition-all duration-[.2s] ease-in-out hover:text-third hover:border-third  focus:text-third focus:border-third">
               continue shopping
             </button>}
       </div>
       </React.Fragment>
    )
}
export default Cart;