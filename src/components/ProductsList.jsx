import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Table } from "react-bootstrap";
import ProductRow from "../pages/ProductRow";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useProductsListData } from "../redux/hooks";
import { addProduct, updateProduct } from "../redux/productsSlice";
import { useDispatch } from "react-redux";

const ProductsList = () => {
    const dispatch = useDispatch();
    const { productsList } = useProductsListData();
    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        description: "",
        rate: "",
    });
    const [validate, setValidate] = useState(false);

    const handleEdit = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const resetFormData = () => {
        setFormData({
            id: 0,
            name: "",
            description: "",
            rate: "",
        });
    };

    const handleProductSelectChange = (value) => {
        console.log({ value });
        if (value === 0) {
            resetFormData();
        } else {
            const product = productsList.find(
                (product) => product.id === value
            );
            setFormData({ ...product });
        }
    };

    const handleFormSubmit = () => {
        let valid = true;
        for (const key in formData) {
            valid &= formData[key] !== "";
        }

        if (valid) {
            if (formData.id === 0) {
                dispatch(addProduct(formData));
                resetFormData();
            } else {
                dispatch(updateProduct(formData));
            }
        }
        setValidate(!valid);
    };

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
                            {productsList.map((product) => (
                                <ProductRow
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </tbody>
                        <tbody></tbody>
                    </Table>
                </Card>
            </Col>
            <Col md={4} lg={3}>
                <div className="sticky-top pt-md-3 pt-xl-4">
                    <Form.Group className="mb-3">
                        <Form.Select
                            className="btn btn-light my-1"
                            aria-label="Select Product"
                            onChange={(e) =>
                                handleProductSelectChange(
                                    Number(e.target.value)
                                )
                            }
                        >
                            <option value="0">Add new product</option>
                            {productsList.map((product) => (
                                <option value={product.id} key={product.id}>
                                    Update: {product.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label className="fw-bold">Name: </Form.Label>
                        <InputGroup className="my-1 flex-nowrap">
                            <Form.Control
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleEdit}
                                className="bg-white border"
                                placeholder="Enter name"
                                isInvalid={validate && formData.name === ""}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label className="fw-bold">
                            Description:
                        </Form.Label>
                        <InputGroup className="my-1 flex-nowrap">
                            <Form.Control
                                name="description"
                                type="text"
                                value={formData.description}
                                onChange={handleEdit}
                                className="bg-white border"
                                placeholder="Enter description"
                                isInvalid={
                                    validate && formData.description === ""
                                }
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label className="fw-bold">Rate:</Form.Label>
                        <InputGroup className="my-1 flex-nowrap">
                            <InputGroup.Text className="bg-light fw-bold text-secondary small">
                                $
                            </InputGroup.Text>
                            <Form.Control
                                name="rate"
                                type="number"
                                value={formData.rate}
                                onChange={handleEdit}
                                className="bg-white border"
                                placeholder="0.0"
                                min="0.00"
                                step="0.01"
                                isInvalid={validate && formData.rate === ""}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Button
                        variant="primary"
                        className="d-block"
                        onClick={handleFormSubmit}
                    >
                        {formData.id === 0 ? "Add" : "Update"}
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default ProductsList;
