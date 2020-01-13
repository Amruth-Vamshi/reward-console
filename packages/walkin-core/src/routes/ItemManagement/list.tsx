import * as React from "react";
import { Row, Col, Cascader, Button, Input, Icon, Table } from "antd";
import * as jwt from "jsonwebtoken";
import { Query, withApollo, ApolloProviderProps } from "react-apollo";

import "./style.css";
import VariantDetailsForm from "./variantDetailsForm";
import {
  GET_PH_CATEGORIES,
  GET_PRODUCT_CATEGORIES_BY_CATEGORY_ID
} from "./../../PlatformQueries";

interface iProps extends ApolloProviderProps<any> {}

interface iState {
  processedCategoryList: any;
  rawData: any;
}

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
    this.state = { processedCategoryList: [], rawData: [] };
  }

  UNSAFE_componentWillMount() {
    this.getCategories();
  }

  getCategories = () => {
    const jwtToken = localStorage.getItem("jwt");
    const { org_id }: any = jwt.decode(jwtToken);

    if (org_id) {
      this.props.client
        .query({
          query: GET_PH_CATEGORIES,
          variables: { catalogId: "2", categoryCode: "PO_SQUARE" },
          fetchPolicy: "network-only"
        })
        .then(res => {
          console.log("Category Data Recieved", res);
          let categoryId = res.data.categoriesWithChildren.id;
          //   if (categoryId) this.getCategoryProducts(categoryId);
          //   console.log("Processed Data : ", res.data.categoriesWithChildren);
          var final = this.processData(res.data.categoriesWithChildren);
          console.log("Final : ", final);
          this.setState({
            processedCategoryList: final,
            rawData: res.data.categoriesWithChildren
          });
        })
        .catch(err => {
          //   message.error("ERROR");
          console.log("Failed to get Category Details" + err);
        });
    } else {
      console.log("Error getting JwtData");
    }
  };

  //   getCategoryProducts = (categoryId: string) => {
  //     this.props.client
  //       .query({
  //         query: GET_PRODUCT_CATEGORIES_BY_CATEGORY_ID,
  //         variables: { categoryId },
  //         fetchPolicy: "network-only"
  //       })
  //       .then(res => {
  //         console.log("Category product", res);
  //         //   console.log("Processed Data : ", res.data.categoriesWithChildren);
  //         var final = this.processData(res.data.categoriesWithChildren);
  //         console.log("Final : ", final);
  //         this.setState({
  //           processedCategoryList: final,
  //           rawData: res.data.categoriesWithChildren
  //         });
  //       })
  //       .catch(err => {
  //         //   message.error("ERROR");
  //         console.log("Failed to get Category Details" + err);
  //       });
  //   };

  processData(data) {
    var arr = [];
    var el = data.children;
    el.forEach(element => {
      var individual = {
        id: element.id,
        name: element.name,
        value: element.name,
        label: element.name,
        description: element.description,
        status: element.status,
        children: []
      };
      if (element.children !== undefined) {
        individual.children =
          element.children.length > 0 ? this.processData(element) : [];
      }
      arr.push(individual);
    });
    return arr;
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
        console.log(labels, selectedOptions);
        return <span key={option.value}>{label}</span>;
      }
      return <span key={option.value}>All / {label} / </span>;
    });

  render() {
    let { processedCategoryList } = this.state;
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
                options={processedCategoryList}
                // defaultValue={["ALL"]}
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

export default withApollo(ListHome);
