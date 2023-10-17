const initialState: any = {
    products: [
        {
            id: 1,
            title: "Products List",
            category: "Electronics"
        }
    ]
}

export const productReducer = (state = initialState, { type }: { type: string }) => {
    switch(type) {
        case "SET_PRODUCTS":
            return state;
        case "SELECTED_PRODUCT":
            return state;
        default:
            return state;
    }
}