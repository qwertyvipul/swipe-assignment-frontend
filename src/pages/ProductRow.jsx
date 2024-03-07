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

const ProductRow = ({ product }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td className="fw-normal">{product.name}</td>
            <td className="fw-normal">{product.description}</td>
            <td className="fw-normal">{product.rate}</td>
        </tr>
    );
};

export default ProductRow;
