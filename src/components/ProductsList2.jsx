import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSolidPencil, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import InvoiceModal from "../components/InvoiceModal";
import { useNavigate } from "react-router-dom";
import { useInvoiceListData } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { deleteInvoice } from "../redux/invoicesSlice";
import ProductRow from "../pages/ProductRow";

const ProductsList2 = () => {
    return (
        <Row>
            <Col md={8} lg={9}>
                <Card className="p-4 p-xl-5 my-3 my-xl-4">
                    <h3 className="fw-bold pb-2 pb-md-4">Products List</h3>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Rate</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProductRow />
                            <ProductRow />
                            <ProductRow />
                        </tbody>
                        <tbody></tbody>
                    </Table>
                </Card>
            </Col>
        </Row>
    );
};

export default ProductsList2;
