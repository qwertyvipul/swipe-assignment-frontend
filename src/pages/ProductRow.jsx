import React, { useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSolidPencil, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import InvoiceModal from "../components/InvoiceModal";
import { useNavigate } from "react-router-dom";
import { useInvoiceListData } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { deleteInvoice } from "../redux/invoicesSlice";

const ProductRow = ({ invoice, navigate }) => {
    return (
        <tr>
            <td>1</td>
            <td className="fw-normal">Name 1</td>
            <td className="fw-normal">Description 1</td>
            <td className="fw-normal">Rate 1</td>
            <td style={{ width: "5%" }}>
                <Button variant="outline-primary">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <BiSolidPencil />
                    </div>
                </Button>
            </td>
            <td style={{ width: "5%" }}>
                <Button variant="danger">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <BiTrash />
                    </div>
                </Button>
            </td>
        </tr>
    );
};

export default ProductRow;
