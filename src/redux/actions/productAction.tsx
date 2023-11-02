import axios from "axios"
import { ActionTypes } from "../constant/action-types"
import { fakeStore } from "../../api/fakeStore"

export const setProducts = (products: any) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product: any) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
}

export const fetchProducts = () => async (dispatch: any) => {
    const response = await fakeStore.get("/products")
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
}