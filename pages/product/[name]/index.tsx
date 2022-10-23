import * as React   from "react";
import {useRouter} from "next/router";
import type { NextPage } from 'next';
import {RelatedProducts} from "../../../components/common/products";
import { Description, Reviews, ProductInfo } from "../../../components/product";
import ProductI from "../../../types/product";

const qs = require('qs');

interface serverResI{
 attributes : ProductI 
}
interface  paramsI{
   name : string
}
interface contextI{
  params : paramsI
}
const Index:NextPage = ({}:any)=>{
  const bestSellerProduct = [
    {   
    
       id:1,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"training"
             }
            
           },
           {
            attributes:{
              name:"women"
            }
           }
          ]
       },
           name : "women's green training",
           price:49.00,
           sale:64.00,
           rating:5,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-400x400.jpg"
                   }
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001.jpg"
                }
            }
        }
       }
    },
    {
       id:2,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"running"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },   
        name : "men’s red running",
           price:69.00,
           sale:79.00,
           rating:4,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg"
                   }
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006.jpg"
                }
            }
        }
       }
    },
    {  
       id:3,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"classic"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },
           name : "men's classic mint",
           price:79.00,
           sale:null,
           rating:3,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg"
                   }
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020.jpg"
                }
            }
        }
       }
    },
    {  
       id:4,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"training"
             }
            
           },
           {
            attributes:{
              name:"women"
            }
           }
          ]
       },
           name : "women's pink training",
           price:54.80,
           sale:64.90,
           rating:4,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-400x400.jpg"
                   }
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-400x400.jpg"
                }
            }
        }
       }
    },
    {  
       id:5,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"running"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },
           name : "men's navy running",
           price:104.80,
           sale:null,
           rating:3,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg"
                   }
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url :"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008.jpg"
                }
            }
        }
       }
    },
    {   
       id:6,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"running"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },
           name : "men's green running",
           price:89.80,
           sale:104,
           rating:5,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg"
                   }
               }
           }
       }
    }
   
   ]

   const menFakeProducts = [
    {   
    
       id:1,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"running"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },
           name : "men's black running",
           price:79.00,
           sale:null,
           rating:5,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-400x400.jpg" 
                   }
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005.jpg"
                }
            }
        }
       }
    },
    {
       id:2,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"running"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },   
        name : "men’s red running",
           price:69.00,
           sale:79.00,
           rating:4,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg"
                   }
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006.jpg"
                }
            }
        }
       }
    },
    {  
       id:3,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"classic"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },
           name : "men's classic mint",
           price:79.00,
           sale:null,
           rating:3,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg"
                   }
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020.jpg"
                }
            }
        }
       }
    },
    {  
       id:4,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"classic"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },
           name : "men's classic blue",
           price:75.80,
           sale:89.90,
           rating:3,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-400x400.jpg"
                   }   
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url :"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019.jpg"
                }    
            }
        }
       }
    },
    {  
       id:5,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"running"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },
           name : "men's navy running",
           price:104.80,
           sale:null,
           rating:3,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg"
                   }
               }
           },
           imageMagnifier:{
            data: {
                attributes : {
                    url :"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008.jpg"
                }
            }
        }
       }
    },
    {   
       id:6,
       attributes: {
        categories : {
          data : [
           {
             attributes : {
               name :"running"
             }
            
           },
           {
            attributes:{
              name:"men"
            }
           }
          ]
       },
           name : "men's green running",
           price:89.80,
           sale:104,
           rating:5,
           image:{
               data: {
                   attributes : {
                       url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg"
                   }
               }
           }
       }
    }
   
   ]

const womenFakeProducts = [
  {   
  
     id:1,
     attributes: {
      categories : {
        data : [
         {
           attributes : {
             name :"training"
           }
          
         },
         {
          attributes:{
            name:"women"
          }
         }
        ]
     },
         name : "women's green training",
         price:49.00,
         sale:64.00,
         rating:5,
         image:{
             data: {
                 attributes : {
                     url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-400x400.jpg"
                 }
             }
         },
         imageMagnifier:{
          data: {
              attributes : {
                  url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001.jpg"
              }
          }
      }
     }
  },
  {
     id:2,
     attributes: {
      categories : {
        data : [
         {
           attributes : {
             name :"training"
           }
          
         },
         {
          attributes:{
            name:"women"
          }
         }
        ]
     },   
      name : "women’s blue training",
         price:69.00,
         sale:79.00,
         rating:4,
         image:{
             data: {
                 attributes : {
                     url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg"
                 }
             }
         },
         imageMagnifier:{
          data: {
              attributes : {
                  url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003.jpg"
              }
          }
      }
     }
  },
  {  
     id:3,
     attributes: {
      categories : {
        data : [
         {
           attributes : {
             name :"sneaker"
           }
          
         },
         {
          attributes:{
            name:"women"
          }
         }
        ]
     },
         name : "women's candy city run",
         price:79.00,
         sale:null,
         rating:3,
         image:{
             data: {
                 attributes : {
                     url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-400x400.jpg"
                 }
             }
         },
         imageMagnifier:{
          data: {
              attributes : {
                  url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014.jpg"
              }
          }
      }
     }
  },
  {  
     id:4,
     attributes: {
      categories : {
        data : [
         {
           attributes : {
             name :"training"
           }
          
         },
         {
          attributes:{
            name:"women"
          }
         }
        ]
     },
         name : "women's pink training",
         price:54.80,
         sale:64.90,
         rating:4,
         image:{
             data: {
                 attributes : {
                     url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-400x400.jpg"
                 }
             }
         },
         imageMagnifier:{
          data: {
              attributes : {
                  url : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-400x400.jpg"
              }
          }
      }
     }
  },
 
 
 ]

    const router = useRouter()
    const {name} = router.query;
    const fakeProducts = bestSellerProduct.concat(menFakeProducts,womenFakeProducts)
    const fakeProduct = fakeProducts.filter(({attributes})=>attributes.name===name)
     const product = fakeProduct[0].attributes 
    const [sectionType,setSectionType] = React.useState("description")
    
    const handleChangeSection = (sectionType:string)=>{
        return ()=>{
            setSectionType(sectionType)
        }
    }
   
    return(
         <section className="container container-primary-px bg-lightGrey py-[3rem] mb-[3rem]" tabIndex={-1}>
            <div className="container container-primary-px bg-fifth pt-[3rem] pb-[10rem]">
            <ProductInfo product={product}/>
             <article>
                <hr className="before:"/>
                <ul className="flex gap-[1.4rem]  ">
                    <li className={"capitalize text-third text-[1.1rem] font-bold py-[.7rem] cursor-pointer border-t-[3px] " + `${sectionType==="description"?"  border-primary ":"border-transparent"}`} onClick={handleChangeSection("description")}>
                    description 
                    </li>
                    <li className={"capitalize text-third text-[1.1rem] font-bold py-[.7rem]  cursor-pointer border-t-[3px] " + `${sectionType==="reviews" ? "  border-primary" : "border-transparent"}`} onClick={handleChangeSection("reviews")}>
                    reviews (1)
                    </li>
                </ul>
                {
                    sectionType === "description" ? (
                      <Description  />
                    ):
                    (
                    <Reviews/>
                    )
                }
               
             </article>
            <RelatedProducts/>
            </div>
         </section>
    )
}



export default Index;