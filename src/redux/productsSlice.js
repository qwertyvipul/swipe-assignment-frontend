import { createSlice } from "@reduxjs/toolkit";
import { autoIncrement } from "../utils/generateAutoIncrementId";

const nextProductId = autoIncrement();

// Populated with 3 initial products
/**
 * Single source of truth for product data
 */
const productsSlice = createSlice({
  name: "products",
  initialState: [
    ...[1, 2, 3].map((_) => {
      const id = nextProductId();
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
      state.push({ ...action.payload, id: nextProductId() });
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
