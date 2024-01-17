import { Row, Col } from "react-bootstrap";
import { topSaleProductList } from "./data";

import { useState } from "react";
import TopSaleProduct from "./TopSaleProduct";
import MarketShareData from "./MarketShareData";
import TopSaleBrandData from "./TopSaleBrandData";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [brandChartDate, setBrandChartDate] = useState<Date>(new Date());

  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      console.log(date);
      setSelectedDate(date);
    }
  };

  const brandChartDateChange = (date: Date) => {
    if (date) {
      setBrandChartDate(date);
    }
  };

  const emptyLabels = Array(1).fill("");

  // chart data
  const barChartData = {
    selectedDate: brandChartDate,
    onDateChange: brandChartDateChange,
    showYearPicker: true,
    chartTitle: "Top Sale By Brand",
    subTitle: "",
    labels: emptyLabels,
    datasets: [
      {
        label: "Item 1",
        backgroundColor: "#5B8FF9",
        borderColor: "#5B8FF9",
        data: [22000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 2",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 3",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 4",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 5",
        backgroundColor: "#6DC8EC",
        borderColor: "#6DC8EC",
        data: [12000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 6",
        backgroundColor: "#5D7092",
        borderColor: "#5D7092",
        data: [10000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 7",
        backgroundColor: "#D235CC",
        borderColor: "#D235CC",
        data: [8000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 8",
        backgroundColor: "#FF2E2E",
        borderColor: "#FF2E2E",
        data: [8000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 9",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [6000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 10",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [6000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    ],
  };

  return (
    <>
      <Row className="mt-4">
        <Col lg={12} className="mb-3">
          <MarketShareData />
        </Col>
      </Row>

      <Row>
        <Col xl={6} className="mb-3">
          <TopSaleBrandData />
        </Col>
        <Col xl={6} className="mb-3">
          <TopSaleProduct />
        </Col>
      </Row>
    </>
  );
};

export default Home;
