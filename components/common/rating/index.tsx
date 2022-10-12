
interface propsI{
    rating:number;
    className?:string;
}

const Rating = ({rating,className}:propsI)=>{
   return(
    <>
    {new Array(5).fill(undefined).map((_,idx)=>(
        <span key={idx} className={`fa fa-star  ${rating >= idx+1 ? `text-secondary` : `text-fourth`  } ` + `${className}`}></span>  
    ))}
    </>  
   )
}

export default Rating;