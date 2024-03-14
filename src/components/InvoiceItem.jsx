import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import ItemRow from "./ItemRow";
import { useProductsListData } from "../redux/hooks";

const InvoiceItem = ({
  options,
  onOptionSelect,
  onRowDelete,
  disableAdd,
  ...props
}) => {
  const { onItemizedItemEdit, currency, items, onRowAdd } = props;
  const itemTable = items.map((item) => (
    <ItemRow
      key={item.id}
      item={item}
      onDelete={onRowDelete}
      onItemizedItemEdit={onItemizedItemEdit}
      currency={currency}
      products={options}
      onOptionSelect={onOptionSelect}
    />
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>{itemTable}</tbody>
      </Table>
      <Button
        className={`fw-bold ${disableAdd ? "disabled" : ""}`}
        onClick={onRowAdd}
      >
        Add Item
      </Button>
    </div>
  );
};

export default InvoiceItem;
