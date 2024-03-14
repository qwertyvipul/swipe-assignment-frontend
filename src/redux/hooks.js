import { useSelector } from "react-redux";
import { selectInvoiceList } from "./invoicesSlice";
import { selectProductList } from "./productsSlice";

export const useInvoiceListData = () => {
  const invoiceList = useSelector(selectInvoiceList);
  const productsList = useSelector(selectProductList);

  const getOneInvoice = (receivedId) => {
    const invoice =
      invoiceList.find(
        (invoice) => invoice.id.toString() === receivedId.toString()
      ) || null;

    const productsInInvoice = [];
    const idQuantity = {}; // For O(1) data access

    invoice.items.forEach((item) => {
      idQuantity[item.id] = item.quantity;
    });

    // Populate item ids with corresponding products
    productsList.forEach((product) => {
      if (idQuantity.hasOwnProperty(product.id)) {
        productsInInvoice.push({
          ...product,
          quantity: idQuantity[product.id],
        });
      }
    });
    return { ...invoice, items: productsInInvoice };
  };

  const listSize = invoiceList.length;

  return {
    invoiceList,
    getOneInvoice,
    listSize,
  };
};

export const useProductsListData = () => {
  const productsList = useSelector(selectProductList);

  return {
    productsList,
  };
};
