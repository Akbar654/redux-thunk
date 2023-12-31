import { ActionTypes } from "../constant/action-types";

const initialState: any = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }: { type: string, payload: [] }) => {
    
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return { products: [ ...payload ] };
        case ActionTypes.FETCH_PRODUCTS:
            return { products: [ ...payload ]}
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }: {type: string, payload: {} }) => {
    
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state; 
    }
}