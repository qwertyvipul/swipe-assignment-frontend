import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import ProductRow from "./ProductRow";

const ProductsTable = ({ products }) => {
  return (
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
            {products.map((product) => (
              <ProductRow product={product} key={product.id} />
            ))}
          </tbody>
          <tbody></tbody>
        </Table>
      </Card>
    </Col>
  );
};

export default React.memo(ProductsTable);
