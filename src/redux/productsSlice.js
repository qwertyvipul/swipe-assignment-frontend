import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: [
        {
            id: 1,
            name: "Product 1",
            description: "Description of product 1",
            rate: 1,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description of product 2",
            rate: 2,
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description of product 3",
            rate: 3,
        },
    ],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.findIndex(
                (product) => product.id === action.payload.id
            );
            if (index !== -1) {
                state[index] = action.payload.updatedProduct;
            }
        },
    },
});

export const { addProduct, updateProduct } = productsSlice.actions;

export const selectProductList = (state) => state.products;

export default productsSlice.reducer;
