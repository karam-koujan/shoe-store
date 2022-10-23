

interface ProductI{
    name:string;
    sale: number | null;
    price: number;
    rating: number;
    [key:string]:any;
}

export default ProductI;