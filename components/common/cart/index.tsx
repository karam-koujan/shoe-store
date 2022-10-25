import * as React from "react";
import Image from "next/image";
import { Close,ProductAmount} from "../";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import { useShoppingCartLogic} from "../../../hooks";
import Link from "next/link";
import StripeCheckout from "react-stripe-checkout";

interface propsI{
    showCart:boolean;
    handleHideCart: ()=>any;
}
const Cart = ({showCart,handleHideCart}:propsI)=>{
  const {shoppingCart,setShoppingCart} = useShoppingCart();
  const totalPrice = shoppingCart.reduce((acc:number,{price,productAmount}:{price:number,productAmount:number})=>acc+(price*productAmount),0);
  const {handleAddProduct,handleRemoveProduct,handleDeleteProduct} = useShoppingCartLogic({shoppingCart,setShoppingCart});
  const onToken = ()=>{
    setShoppingCart([])
  }
    return(
        <React.Fragment>
        {showCart?<div className="bg-fourth opacity-75 fixed h-[100vh] w-[100%] left-0 top-0 z-10 transition-all duration-[.1s]"></div>:null}
        <div className={` ${showCart?"sm:w-full w-[450px] right-0   ":"  right-[-100%] w-0"}      bg-white fixed  top-[0]  z-20  transform-all duration-[.4s] ease-out `} tabIndex={-1}>
         <div className="flex flex-col justify-between overflow-y-auto h-[100vh]">
         <div>
         <div  className="flex justify-between border-b-lightGrey border-b-[1px] py-[1rem] px-[1.3rem] ">
           <h2 className="text-third capitalize text-[1.1rem] font-poppins  self-center">shopping cart</h2>
             <Close color="#262b2c" onClick={handleHideCart}  className="border-[2px] border-primary py-[.4rem] px-[.8rem] cursor-pointer transition-all duration-[.1s] ease-in-out hover:border-fourth focus:border-fourth"/>
           </div>
           {shoppingCart.length>0?
           (
           <div className="px-[1.3rem] py-[2.5rem] flex flex-col gap-[2.5rem] ">
             {shoppingCart.map(({name,productAmount,image,price}:any,idx:number)=>(
             <div className="flex justify-between" key={idx}>
                <div className="flex gap-[1.3rem]">
                 <Image src={`${image.data.attributes.url}`} alt={`${name} image`} width={70} height={70}/>
                 <div>
                   <p className="text-third text-[1.1rem] capitalize mb-[.5rem]">{name}</p>
                    <ProductAmount add={handleAddProduct(name,productAmount,price)} remove={handleRemoveProduct(name,productAmount,price)} productAmount={productAmount}/>
                  
                 </div>
                </div>
                <div className="flex flex-col gap-[1.3rem]" >
                <button onClick={handleDeleteProduct(name)} className="self-end border-fourth border-[1px] w-[23px] h-[23px] rounded-full flex flex-col justify-center items-center">
               <Close color="#979a9b" size="17px" />
                     </button>
                 <p className="text-fourth text-[1.1rem] font-poppins">
                   ${(price*productAmount).toFixed(2)}
                 </p>
                </div>
             </div>
                 ))}
           </div>):(
           <div className="flex justify-center items-center py-[30%]">
             <p className="text-primary text-[1.1rem] font-poppins">
               <span className="capitalize">No</span> product in the cart
             </p>
           </div>

           )}
           </div>
           {shoppingCart.length>0?
           (<div>
             <div className="flex justify-between px-[1.3rem] py-[1rem] border-t-[1px] border-b-[1px] border-lightGrey">
               <p className="font-poppins text-[1.1rem] text-third capitalize">subtotal:</p>
               <p className="font-poppins text-fourth text-[1.1rem]">${totalPrice.toFixed(2)}</p>
             </div>
             <div className="py-[1.2rem] px-[1.3rem] flex flex-col gap-[.8rem]">
            <Link href="/cart" >
            <a>
             <button onClick={handleHideCart} className="uppercase font-poppins tracking-widest bg-fifth text-primary border-[1px] border-primary text-center w-full py-[.9rem] font-semibold text-[1.12rem] transition-all duration-[.2s] ease-in-out hover:text-third hover:border-third  focus:text-third focus:border-third">
               view cart
             </button>
            </a>
            </Link>
             <StripeCheckout  stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233" token={onToken} name="Famms" description="Buy  shoe"  amount={totalPrice*100}  billingAddress shippingAddress>
             <button className="uppercase font-poppins tracking-widest bg-primary text-fifth text-center w-full py-[1rem] font-semibold text-[1.12rem] transition-all duration-[.2s] ease-in-out hover:bg-third focus:bg-third">
               checkout
             </button>
            </StripeCheckout>
             </div>
           </div>):
           (
            <div className="px-[1.3rem] py-[1rem]"> 
           <button onClick={handleHideCart} className="block  uppercase font-poppins tracking-widest bg-fifth text-primary border-[1px] border-primary text-center w-full py-[.9rem] font-semibold text-[1.12rem] transition-all duration-[.2s] ease-in-out hover:text-third hover:border-third  focus:text-third focus:border-third">
               continue shopping
             </button>

            </div>
             )}
        </div>     
       </div>
       </React.Fragment>
    )
}
export default Cart;