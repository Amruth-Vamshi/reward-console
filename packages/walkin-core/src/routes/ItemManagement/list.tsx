import * as React from "react";
import { Row, Col, Cascader, Button, Input, Icon, Table } from "antd";
import "./style.css";
import VariantDetailsForm from "./variantDetailsForm";

interface iProps {}

interface iState {}

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
            code: 752100
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
            code: 453400
          }
        ]
      }
    ]
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    size: 32,
    crust: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    size: 42,
    crust: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    size: 32,
    crust: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    size: 32,
    crust: "London No. 2 Lake Park"
  },
  {
    key: "5",
    name: "John Brown",
    size: 32,
    crust: "New York No. 1 Lake Park"
  },
  {
    key: "6",
    name: "Jim Green",
    size: 42,
    crust: "London No. 1 Lake Park"
  },
  {
    key: "7",
    name: "Joe Black",
    size: 32,
    crust: "Sidney No. 1 Lake Park"
  },
  {
    key: "8",
    name: "Jim Red",
    size: 32,
    crust: "London No. 2 Lake Park"
  }
];

class ListHome extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {};
  }

  handleAreaClick = (e, label, option) => {
    e.stopPropagation();
    console.log("clicked", label, option);
  };

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  displayRender = (labels, selectedOptions) =>
    labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
          <span key={option.value}>
            {label} (
            <a onClick={e => this.handleAreaClick(e, label, option)}>
              {option.code}
            </a>
            )
          </span>
        );
      }
      return <span key={option.value}>{label} / </span>;
    });

  render() {
    const columns: any = [
      {
        title: "Name",
        dataIndex: "name",
        width: "30%"
      },
      {
        title: "Size",
        dataIndex: "size",
        width: "30%",
        filters: [
          {
            text: "London",
            value: "London"
          },
          {
            text: "New York",
            value: "New York"
          }
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0
      },
      {
        title: "Crust",
        dataIndex: "crust",
        width: "30%",
        filters: [
          {
            text: "London",
            value: "London"
          },
          {
            text: "New York",
            value: "New York"
          }
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0
      },
      {
        title: "",
        dataIndex: "arrowIcon",
        width: "10%",
        render: (text, record) => <Icon type="right" />
      }
    ];
    return (
      <div className="itemsManagementContainer">
        <Col>
          <h1>List Management</h1>
          <div>Search for an item name, SKU or explore through Categories</div>
        </Col>
        <Col className="itemManagementBodyWrapper">
          <Row>
            <Col span={12}>
              <Cascader
                size="large"
                options={options}
                defaultValue={["zhejiang", "hangzhou", "xihu"]}
                displayRender={this.displayRender}
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={10}>
              <Input
                size="large"
                placeholder="Search for a category like Pizza"
                prefix={
                  <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            </Col>
            <Col span={2}>
              <Button
                disabled={false}
                //   className="button"
                type="primary"
                size="large"
                onClick={() => {
                  // this.props.history.push("/core/stores/create");
                }}
                loading={false}
              >
                Search
              </Button>
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={data}
            onChange={this.onChange}
            pagination={false}
            scroll={{ y: 300 }}
          />
          <Row></Row>
        </Col>
        <VariantDetailsForm />
      </div>
    );
  }
}

export default ListHome;
