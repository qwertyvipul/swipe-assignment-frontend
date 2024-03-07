import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import ItemRow from "./ItemRow";

const InvoiceItem = (props) => {
    const { onItemizedItemEdit, currency, onRowDel, items, onRowAdd } = props;

    const itemTable = items.map((item) => (
        <ItemRow
            key={item.id}
            item={item}
            onDelEvent={onRowDel}
            onItemizedItemEdit={onItemizedItemEdit}
            currency={currency}
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
            <Button className="fw-bold" onClick={onRowAdd}>
                Add Item
            </Button>
        </div>
    );
};

export default InvoiceItem;
