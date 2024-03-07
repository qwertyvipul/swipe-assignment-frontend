import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Table } from "react-bootstrap";
import ProductRow from "../pages/ProductRow";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
            <Col md={4} lg={3}>
                <div className="sticky-top pt-md-3 pt-xl-4">
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Currency:</Form.Label>
                        <Form.Select
                            className="btn btn-light my-1"
                            aria-label="Change Currency"
                        >
                            <option value="$">
                                USD (United States Dollar)
                            </option>
                            <option value="£">
                                GBP (British Pound Sterling)
                            </option>
                            <option value="¥">JPY (Japanese Yen)</option>
                            <option value="$">CAD (Canadian Dollar)</option>
                            <option value="$">AUD (Australian Dollar)</option>
                            <option value="$">SGD (Singapore Dollar)</option>
                            <option value="¥">CNY (Chinese Renminbi)</option>
                            <option value="₿">BTC (Bitcoin)</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label className="fw-bold">Tax rate:</Form.Label>
                        <InputGroup className="my-1 flex-nowrap">
                            <Form.Control
                                name="taxRate"
                                type="number"
                                value="Hello"
                                className="bg-white border"
                                placeholder="0.0"
                                min="0.00"
                                step="0.01"
                                max="100.00"
                            />
                            <InputGroup.Text className="bg-light fw-bold text-secondary small">
                                %
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label className="fw-bold">
                            Discount rate:
                        </Form.Label>
                        <InputGroup className="my-1 flex-nowrap">
                            <Form.Control
                                name="discountRate"
                                type="number"
                                value="Value 2"
                                className="bg-white border"
                                placeholder="0.0"
                                min="0.00"
                                step="0.01"
                                max="100.00"
                            />
                            <InputGroup.Text className="bg-light fw-bold text-secondary small">
                                %
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                    <Form.Control
                        placeholder="Enter Invoice ID"
                        name="copyId"
                        value="Value 3"
                        type="text"
                        className="my-2 bg-white border"
                    />
                    <Button variant="primary" className="d-block">
                        Copy Old Invoice
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default ProductsList2;
