import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Dropdown } from "react-bootstrap";

const ItemRow = (props) => {
    const onDelEvent = () => {
        props.onDelEvent(props.item);
    };
    return (
        <tr>
            <td style={{ width: "100%" }}>
                <Form.Select
                    aria-label="Default select example"
                    className="bg-light fw-bold border-0 text-secondary px-2"
                >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <EditableField
                    onItemizedItemEdit={(evt) =>
                        props.onItemizedItemEdit(evt, props.item.itemId)
                    }
                    cellData={{
                        type: "text",
                        name: "itemName",
                        placeholder: "Item name",
                        value: props.item.itemName,
                        id: props.item.itemId,
                    }}
                />
                <EditableField
                    onItemizedItemEdit={(evt) =>
                        props.onItemizedItemEdit(evt, props.item.itemId)
                    }
                    cellData={{
                        type: "text",
                        name: "itemDescription",
                        placeholder: "Item description",
                        value: props.item.itemDescription,
                        id: props.item.itemId,
                    }}
                />
            </td>
            <td style={{ minWidth: "70px" }}>
                <EditableField
                    onItemizedItemEdit={(evt) =>
                        props.onItemizedItemEdit(evt, props.item.itemId)
                    }
                    cellData={{
                        type: "number",
                        name: "itemQuantity",
                        min: 1,
                        step: "1",
                        value: props.item.itemQuantity,
                        id: props.item.itemId,
                    }}
                />
            </td>
            <td style={{ minWidth: "130px" }}>
                <EditableField
                    onItemizedItemEdit={(evt) =>
                        props.onItemizedItemEdit(evt, props.item.itemId)
                    }
                    cellData={{
                        leading: props.currency,
                        type: "number",
                        name: "itemPrice",
                        min: 1,
                        step: "0.01",
                        presicion: 2,
                        textAlign: "text-end",
                        value: props.item.itemPrice,
                        id: props.item.itemId,
                    }}
                />
            </td>
            <td className="text-center" style={{ minWidth: "50px" }}>
                <BiTrash
                    onClick={onDelEvent}
                    style={{ height: "33px", width: "33px", padding: "7.5px" }}
                    className="text-white mt-1 btn btn-danger"
                />
            </td>
        </tr>
    );
};

export default ItemRow;
