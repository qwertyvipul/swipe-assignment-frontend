import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import Form from "react-bootstrap/Form";

const ItemRow = ({ products, onOptionSelect, item, onDelete, ...props }) => {
  const handleSelect = (selected) => {
    onOptionSelect(item.id, selected);
  };

  return (
    <tr>
      <td style={{ width: "100%" }}>
        <Form.Select
          aria-label="Default select example"
          className="bg-light fw-bold border-0 text-secondary px-2"
          onChange={(e) => handleSelect(Number(e.target.value))}
          value={"Current Item"}
        >
          <option>{item.id === 0 ? "Select product to add" : item.name}</option>
          {products.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name || "Select a product"}
            </option>
          ))}
        </Form.Select>
        <EditableField
          onItemizedItemEdit={(e) => props.onItemizedItemEdit(e, item.id)}
          cellData={{
            type: "text",
            name: "name",
            placeholder: "Item name",
            value: item.name,
            id: item.id,
          }}
        />
        <EditableField
          onItemizedItemEdit={(e) => props.onItemizedItemEdit(e, item.id)}
          cellData={{
            type: "text",
            name: "description",
            placeholder: "Item description",
            value: item.description,
            id: item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "70px" }}>
        <EditableField
          onItemizedItemEdit={(e) => props.onItemizedItemEdit(e, item.id)}
          cellData={{
            type: "number",
            name: "quantity",
            min: 0,
            step: "1",
            value: item.quantity,
            id: item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "130px" }}>
        <EditableField
          onItemizedItemEdit={(e) => props.onItemizedItemEdit(e, item.id)}
          cellData={{
            leading: props.currency,
            type: "number",
            name: "rate",
            min: 0,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: item.rate,
            id: item.id,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <BiTrash
          onClick={() => onDelete(item.id)}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

export default ItemRow;
