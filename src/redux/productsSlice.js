import { createSlice } from "@reduxjs/toolkit";

const autoIncrement = () => {
    let id = 0;
    return () => ++id;
};

const idGenerator = autoIncrement();

const productsSlice = createSlice({
    name: "products",
    initialState: [
        ...[1, 2, 3].map((_) => {
            const id = idGenerator();
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
            state.push({ ...action.payload, id: idGenerator() });
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
