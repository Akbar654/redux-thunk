import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct, removeSelectedProduct, fetchProduct } from "../redux/actions/productAction";
import { useSelector } from "react-redux";

const Product = (props: any) => {
    
    const dispatch = useDispatch();
    const product = useSelector( ( state: any ) => state.product )
      
    const { productId } = useParams();
    // const fetchProduct = async () => {
    //     try{
    //         const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    //         dispatch(selectedProduct(response.data));
    //     } catch(error) {
    //         console.error("error", error)
    //     }
    // }

    useEffect( () => {
        if( productId && productId !== "" ) dispatch<any>(fetchProduct(productId))

        return () => {
            dispatch(removeSelectedProduct())
        }

    }, []);
    
    const { title, description, image } = product || {};

    return(
        <div style={{ display: "flex", justifyContent: "space-around", width: "60%", border: "2px solid black", margin: "1rem" }}>
            <div style={{ width: "50%" }}>
                <img src={image} alt={title} width={"100%"} height={"100%"} />
            </div>
            <div style={{ width: "50%"}}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
    
}

export default Product;