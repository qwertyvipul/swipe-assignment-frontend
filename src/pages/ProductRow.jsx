import React from "react";

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
