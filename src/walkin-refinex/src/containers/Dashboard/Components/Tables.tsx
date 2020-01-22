import * as React from "react";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "Survey",
    dataIndex: "survey",
    key: "survey"
  },
  {
    title: "Created Date",
    dataIndex: "created_date",
    key: "created_date"
  },
  {
    title: "Questions",
    dataIndex: "questions",
    key: "questions"
  },
  ,
  {
    title: "Respondents",
    dataIndex: "respondents",
    key: "respondents"
  },
  {
    title: "Completion Rate",
    key: "c_rate",
    dataIndex: "c_rate",
    render: c_rate => (
      <span>
        {c_rate >= 80 ? (
          <span style={{ color: "#46CB92" }}>{c_rate}%</span>
        ) : c_rate > 30 && c_rate < 80 ? (
          <span style={{ color: "#FCAD78" }}>{c_rate}%</span>
        ) : (
          <span style={{ color: "#E96B81" }}>{c_rate}%</span>
        )}
      </span>
    )
  },
  {
    title: "Avg. Time taken to complete",
    dataIndex: "time_taken",
    key: "time_taken"
  }
];

const data = [
  {
    key: "1",
    survey: "Customer Feedback Survey",
    created_date: "03 Nov, 19",
    questions: "10",
    respondents: "01",
    c_rate: 100,
    time_taken: "3.45"
  },
  {
    key: "2",
    survey: "Customer Demographic Survey",
    created_date: "15 Oct, 19",
    questions: "10",
    respondents: "05",
    c_rate: 100,
    time_taken: "5.83"
  },
  {
    key: "3",
    survey: "Customer Satisfaction Survey",
    created_date: "1 Oct, 19",
    questions: "14",
    respondents: "100",
    c_rate: 76,
    time_taken: "5.32"
  },
  {
    key: "4",
    survey: "Employee Engagement Survey",
    created_date: "31 Sep, 19",
    questions: "42",
    respondents: "10",
    c_rate: 30,
    time_taken: "4.00"
  },
  {
    key: "5",
    survey: "Product Quality Survey",
    created_date: "18 Oct, 19",
    questions: "10",
    respondents: "15",
    c_rate: 89,
    time_taken: "2.58"
  },
  {
    key: "6",
    survey: "Product Satisfaction Survey",
    created_date: "10 Oct, 19",
    questions: "10",
    respondents: "13",
    c_rate: 70,
    time_taken: "3.68"
  }
];

const Tables = () => (
  <div style={{ width: "100%", backgroundColor: "#FFF" }}>
    <Table columns={columns} dataSource={data} pagination={false} />
  </div>
);

export default Tables;
