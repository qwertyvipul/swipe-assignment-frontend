import { createSlice } from "@reduxjs/toolkit";
import { autoIncrement } from "../utils/generateAutoIncrementId";

export const nextInvoiceId = autoIncrement();

// Format invoice to just list product ids to maintain single source of truth
const formatInvoice = (invoice) => {
  const itemsAndQuantity = invoice.items
    .filter((item) => item.id !== 0)
    .map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

  const formattedInvoice = {
    ...invoice,
    items: itemsAndQuantity,
  };
  return formattedInvoice;
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(formatInvoice(action.payload));
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.findIndex((invoice) => {
        return invoice.id === Number(action.payload.id);
      });
      if (index !== -1) {
        state[index] = formatInvoice(action.payload.updatedInvoice);
      }
    },
  },
});

export const { addInvoice, deleteInvoice, updateInvoice } =
  invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
