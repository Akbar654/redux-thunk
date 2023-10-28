const initialState: any = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }: { type: string, payload: [] }) => {
    switch(type) {
        case "SET_PRODUCTS":
            return { products: [ ...payload ] };
        case "SELECTED_PRODUCT":
            return state;
        default:
            return state;
    }
}