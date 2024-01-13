import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import LineChart from "../../components/LineChart/LineChart";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
  marketShareData?: any;
  saleTrendData?: any;
}

const Category: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
  marketShareData,
  saleTrendData,
}) => {
  return (
    <>
      <Row>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Categories</Form.Label>
            <Select
              className="react-select react-select-container"
              classNamePrefix="react-select"
              options={categoryOptions}
              id="product-category"
              defaultValue={categoryOptions[0]}
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Sub Category</Form.Label>
            <Select
              className="react-select react-select-container"
              classNamePrefix="react-select"
              options={subCategoryOptions}
              id="product-sub-category"
              defaultValue={subCategoryOptions[0]}
            />
          </Form.Group>
        </Col>
        {marketShareData && (
          <Col md={6}>
            <LineChart {...marketShareData} />
          </Col>
        )}
        {saleTrendData && (
          <Col md={6}>
            <LineChart {...saleTrendData} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Category;