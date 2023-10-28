import { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

const Products = () => {
    const dispatch = useDispatch();
    
    const fetchProduct =async () => {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        dispatch(setProducts(response.data))
    }
    
    useEffect( () => {
        fetchProduct();
    }, []);
    
    return(
        <div className="product-container">
            <ProductComponent />
        </div>
    );
}

export default Products;