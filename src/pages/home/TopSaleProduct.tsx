import { Card, Image } from "react-bootstrap";
import CustomDatePicker from "../../components/Date/CustomDatePicker";
import ExportButton from "../../components/Button/ExportButton";
import DateFilterDropDown from "../../components/DateFilterDropdown/DateFilterDropDown";
import { topSaleProductList } from "./data";
import { useState } from "react";

interface TopSaleProductProps {
  topSaleProductList: {
    id: number;
    product: string;
    brand: string;
    ecommerceSite: string;
    image?: string;
    saleUsd?: string;
    priceUsd?: string;
  }[];
  showYearPicker?: boolean;
  showExport?: boolean;
  selectedDate?: Date;
  onDateChange?: (date: any) => void;
}

const TopSaleProduct = ({}) => {
  const [selectedFilterType, setSelectedFilterType] = useState(1);
  const [selectedFilterYear, setSelectedFilterYear] = useState<Date>(
    new Date()
  );
  const [selectedFilterMonth, setSelectedFilterMonth] = useState<number>(1);
  const [selectedFilterStartDate, setSelectedFilterStartDate] = useState<Date>(
    new Date()
  );
  const [selectedFilterEndDate, setSelectedFilterEndDate] = useState<Date>(
    new Date()
  );

  const handleSelectedFilterTypeChange = (value: number) => {
    setSelectedFilterType(value);
  };

  const handleSelectedYearChange = (date: Date) => {
    if (date) {
      setSelectedFilterYear(date);
    }
  };

  const handleStartDateChange = (date: Date) => {
    if (date) {
      setSelectedFilterStartDate(date);
    }
  };

  const handleEndDateChange = (date: Date) => {
    if (date) {
      setSelectedFilterEndDate(date);
    }
  };

  const handleSelectedMonthChange = (value: number) => {
    if (value) {
      setSelectedFilterMonth(value);
    }
  };

  return (
    <>
      <Card className="dashboard-card h-100">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between w-100 flex-wrap">
            <h4 className="header-title fw-600">Top Sales By Product</h4>
            <div className="d-flex gap-2 align-items-center">
              <DateFilterDropDown
                handleFilterTypeChange={handleSelectedFilterTypeChange}
                selectedFilterType={selectedFilterType}
                selectedFilterYear={selectedFilterYear}
                handleFilterYearChange={handleSelectedYearChange}
                selectedStartDate={selectedFilterStartDate}
                handleStartDateChange={handleStartDateChange}
                selectedEndDate={selectedFilterEndDate}
                handleEndDateChange={handleEndDateChange}
                handleMonthChange={handleSelectedMonthChange}
                selectedMonth={selectedFilterMonth}
              />
              <ExportButton />
            </div>
          </div>
          <div className="table-responsive mt-4 table-vertical-scroll">
            <table className="table table-borderless table-hover table-nowrap table-centered m-0 ">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Brand</th>
                  <th>E-Commerce Site</th>
                  <th>Image</th>
                  <th>Sale(USD)</th>
                  <th>Price(USD)</th>
                </tr>
              </thead>
              <tbody>
                {(topSaleProductList || []).map((item, i) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.product}</td>
                      <td>
                        {item.brand}
                        <br />
                        <span className="badge bg-soft-success text-success">
                          Customer
                        </span>
                      </td>
                      <td>{item.brand}</td>
                      <td>
                        {item.image ? (
                          <Image src={item.image} className="rounded" />
                        ) : null}
                      </td>
                      <td>{item.brand}</td>
                      <td>{item.brand}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TopSaleProduct;
