import { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productAction";

const Products = () => {
    const dispatch = useDispatch();
    
    // const fetchProduct =async () => {
    //     const response = await axios.get(`https://fakestoreapi.com/products`);
    //     dispatch(setProducts(response.data))
    // }
    
    useEffect( () => {
        dispatch<any>(fetchProducts());
    }, []);
    
    return(
        <div className="product-container">
            <ProductComponent />
        </div>
    );
}

export default Products;