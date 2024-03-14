import React from "react";
import InvoiceForm from "../components/InvoiceForm";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const Invoice = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <BiArrowBack size={18} />
        <div className="fw-bold mt-1 mx-2 cursor-pointer">
          <Link to="/">
            <h5>Go Back</h5>
          </Link>
        </div>
      </div>
      <Tabs
        defaultActiveKey="invoice"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="invoice" title="Invoice">
          <InvoiceForm />
        </Tab>
        <Tab eventKey="profile" title="Products">
          <ProductsList />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Invoice;
