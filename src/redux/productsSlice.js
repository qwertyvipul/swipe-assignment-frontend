import { createSlice } from "@reduxjs/toolkit";
import { autoIncrement } from "../utils/generateAutoIncrementId";

const getAutoIncrementId = autoIncrement();

const productsSlice = createSlice({
    name: "products",
    initialState: [
        ...[1, 2, 3].map((_) => {
            const id = getAutoIncrementId();
            return {
                id,
                name: `Product ${id}`,
                description: `Description for product ${id}`,
                rate: id,
            };
        }),
    ],
    reducers: {
        addProduct: (state, action) => {
            state.push({ ...action.payload, id: getAutoIncrementId() });
        },
        updateProduct: (state, action) => {
            const index = state.findIndex(
                (product) => product.id === action.payload.id
            );
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addProduct, updateProduct } = productsSlice.actions;

export const selectProductList = (state) => state.products;

export default productsSlice.reducer;
