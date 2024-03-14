import { createSlice } from "@reduxjs/toolkit";
import { autoIncrement } from "../utils/generateAutoIncrementId";

export const nextInvoiceId = autoIncrement();

const invoicesSlice = createSlice({
    name: "invoices",
    initialState: [],
    reducers: {
        addInvoice: (state, action) => {
            const itemsAndQuantity = action.payload.items
                .filter((item) => item.id !== 0)
                .map((item) => ({
                    id: item.id,
                    quantity: item.quantity,
                }));
            console.log(itemsAndQuantity);
            const invoice = {
                ...action.payload,
                items: itemsAndQuantity,
            };
            console.log(invoice);
            state.push(invoice);
        },
        deleteInvoice: (state, action) => {
            return state.filter((invoice) => invoice.id !== action.payload);
        },
        updateInvoice: (state, action) => {
            const index = state.findIndex(
                (invoice) => invoice.id === action.payload.id
            );
            if (index !== -1) {
                state[index] = action.payload.updatedInvoice;
            }
        },
    },
});

export const { addInvoice, deleteInvoice, updateInvoice } =
    invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
