import * as React from "react";
import Image from "next/image";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { Close } from "../common";


const ProductsCart = ()=>{
    consta {shoppingCart} = useShoppingCart();
    React.useEffect(()=>{
     console.log("soppingCart",shoppingCart)
    },[])
    return (
     <>
        <table className="  border-fourth border-[.5px] w-[680px] md:hidden">
        <thead className="bg-lightGrey border-fourth border-[.5px]">
            <tr>
                <th className="py-[1rem] text-fourth text-[1.1rem] capitalize" scope="col">
                    product
                </th>
                <th className="py-[1rem] text-fourth text-[1.1rem] capitalize">
                    price
                </th>
                <th className="py-[1rem] text-fourth text-[1.1rem] capitalize" scope="col">
                    quantity
                </th>
                <th className="py-[1rem] text-fourth text-[1.1rem] capitalize" scope="col">
                    subtotal
                </th>
            </tr>
        </thead>
        <tbody>
         <tr>
            <td className="p-[1rem]">
                <div className="flex gap-[2.2rem] items-center md:items-center md:gap-[1.2rem] flex-wrap">
                    <Image src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-768x768.jpg" alt="product image"  width={70} height={70}/>
                  <p className=" text-primary text-capitalize text-[1.2rem] md:items-center md:text-[1rem]">
                  Men's Classic Blue
                  </p>
                </div>
            </td>
            <td className="p-[1rem]">
                <p className="text-fourth text-[1.1rem] text-center font-poppins">$69.00</p>
            </td>
            <td className="p-[1rem] ">
            <div className="mx-auto border-[1px]  flex justify-between w-[120px] self-start sm:self-center ">
                <button className="w-full text-primary border-r-[1px]  py-[.3rem]" >-</button>
                <input type="number" name="empty"  className="w-full focus:outline-0 text-center text-primary" value={0}/>
                <button className="w-full text-primary border-l-[1px]">+</button>
            </div>
            </td>
            <td className="p-[1rem]">
                <div className="flex justify-between gap-[.5rem]">
                <p className="text-fourth text-[1.1rem] text-center font-poppins">
                    $69.00
                </p>
                <button className="self-center border-fourth border-[1px] w-[23px] h-[23px] rounded-full flex flex-col justify-center items-center">
          <Close color="#979a9b" size="17px" />
                </button>
                </div>
            </td>
         </tr>
         </tbody>
      </table>
      <div className="w-full border-fourth border-[.5px] font-poppins hidden md:flex">
          
          <div className="w-full">
          <div className="py-[1rem] px-[1.5rem] flex justify-end">
          <button className="self-center border-fourth border-[1px] w-[23px] h-[23px] rounded-full flex flex-col justify-center items-center">
         <Close color="#979a9b" size="17px" />
           </button>
          </div>
          <div className="flex justify-between px-[1.5rem] pb-[1rem] items-center xsm:flex-col xsm:gap-[.5rem]">
           <p className=" text-fourth text-[1.1rem] capitalize">
              product :  
           </p>
           <p className=" text-fourth text-[1.1rem] capitalize">
           Men's Classic Blue
           </p>
          </div>
          <div className="flex justify-between px-[1.5rem] pb-[1rem] items-center xsm:flex-col xsm:gap-[.5rem]">
           <p className=" text-fourth text-[1.1rem] capitalize">
              price :  
           </p>
           <p className=" text-fourth text-[1.1rem] capitalize">
           $69.00
           </p>
          </div>
          <div className="flex justify-between px-[1.5rem] pb-[1rem] items-center xsm:flex-col xsm:gap-[.5rem]">
           <p className=" text-fourth text-[1.1rem] capitalize">
              quantity :  
           </p>
           <div className="border-[1px]  flex justify-between w-[120px] self-start sm:self-center ">
               <button className="w-full text-primary border-r-[1px]  py-[.3rem]" >-</button>
               <input type="number" name="empty"  className="w-full focus:outline-0 text-center text-primary" value={0}/>
               <button className="w-full text-primary border-l-[1px]">+</button>
           </div>
          </div>
           <div className="flex justify-between px-[1.5rem] pb-[1rem] items-center xsm:flex-col xsm:gap-[.5rem]">
           <p className=" text-fourth text-[1.1rem] capitalize">
              subtotal :  
           </p>
           <p className=" text-fourth text-[1.1rem] capitalize">
           $69.00
           </p>
          </div>
          </div>
     </div>
 </>
    )
}
export default ProductsCart;