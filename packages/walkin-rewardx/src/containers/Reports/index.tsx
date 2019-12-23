import * as React from "react";
import { RouteChildrenProps, withRouter } from "react-router";
import { Card, DatePicker, Button } from "antd";
import "./style.css";
import Box from "./Box";

const data = [
  {
    id: 1,
    name: "Dialy settlement Report",
    description: "some description about this report",
    status: "ACTIVE"
  },
  {
    id: 2,
    name: "Loyalty Points Summary Report",
    description: "some description about this report",
    status: "ACTIVE"
  },
  {
    id: 3,
    name: "Transaction Level Earning Report",
    description: "some description about this report",
    status: "ACTIVE"
  }
];

interface ReportsProps extends RouteChildrenProps {}

interface ReportsState {
  reports?: any;
}

class Reports extends React.Component<ReportsProps, ReportsState> {
  constructor(props: ReportsProps) {
    super(props);
    this.state = {};
  }

  getDownloadLink = () => {
    let url =
      "http://spatialkeydocs.s3.amazonaws.com/FL_insurance_sample.csv.zip";
    this.onDownloadFileFromLink(url);
  };

  onDownloadFileFromLink = url => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "myreport";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <div className="gx-main-content-wrapper">
        <div className="reports-flex-row reports-justify-content-space-between margin-bottom-30">
          <div className="reports-title">Reports</div>
          <Button className="no-button-bottom-margin reports-auto-schedule-button">
            AUTO SCHEDULE
          </Button>
        </div>
        <div className={"reports-list-wrapper"}>
          {data.map((item, index) => (
            <Box width={"90%"} border={"1px solid #707070"}>
              <Box
                width="45%"
                border="0px solid"
                display="block"
                padding={0}
                margin={"0"}
              >
                <p className="reports-name">{item.name}</p>
                <p className="reports-description">{item.description}</p>
              </Box>
              <Box
                width="35%"
                border="0px solid"
                padding={0}
                margin={"0"}
                minWidth={270}
                maxWidth={280}
              >
                <span className="reports-description">Select date</span>
                <DatePicker onChange={() => {}} />
              </Box>
              <Button
                className="no-button-bottom-margin"
                onClick={() => {
                  this.getDownloadLink();
                }}
                type="primary"
              >
                DOWNLOAD
              </Button>
            </Box>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Reports);
