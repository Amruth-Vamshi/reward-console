import * as React from "react";
import { Row, Col, Cascader, Button, Input, Icon, Table, Spin } from "antd";
import * as jwt from "jsonwebtoken";
import { Query, withApollo, ApolloProviderProps } from "react-apollo";

import "./style.css";
import VariantDetailsForm from "./variantDetailsForm";
import {
  GET_PH_CATEGORIES,
  GET_PRODUCT_CATEGORIES_BY_CATEGORY_ID,
  PRODUCT_SEARCH,
  UPDATE_PRODUCT
} from "./../../PlatformQueries";

interface iProps extends ApolloProviderProps<any> {}

interface iState {
  processedCategoryList: any;
  categoryRawData: any;
  productsRawData: any;
  productsFinalData: any;
  selectedProductRowIndex: any;
  isFetching: boolean;
  isCategorySelected: boolean;
  searchInput: any;
  organizationId: string;
}

class ListHome extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      processedCategoryList: [],
      categoryRawData: [],
      productsRawData: [],
      productsFinalData: [],
      selectedProductRowIndex: null,
      isFetching: true,
      isCategorySelected: false,
      searchInput: null,
      organizationId: ""
    };
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
          var final = this.processData(res.data.categoriesWithChildren);
          console.log("Final : ", final);
          this.setState({
            processedCategoryList: final,
            categoryRawData: res.data.categoriesWithChildren,
            isFetching: false,
            organizationId: org_id
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

  getCategoryProducts = (productId: string) => {
    this.setState(
      {
        isCategorySelected: true,
        isFetching: true,
        selectedProductRowIndex: null,
        productsRawData: [],
        productsFinalData: []
      },
      () => {
        this.props.client
          .query({
            query: GET_PRODUCT_CATEGORIES_BY_CATEGORY_ID,
            variables: { categoryId: productId },
            fetchPolicy: "network-only"
          })
          .then(res => {
            console.log("Category product", res);

            let productsFinalData = [];
            res.data.productCategoriesByCategoryId.map((product, index) => {
              productsFinalData.push({
                key: `${index}-parent`,
                id: product.product.id,
                name: product.product.name,
                size: "(parent)",
                crust: "(Parent)",
                parentIndex: index,
                variantIndex: null
              });
              if (product.product.variants.length > 0) {
                product.product.variants.map((variant, variantIndex) => {
                  productsFinalData.push({
                    key: `${variantIndex}-variant`,
                    id: variant.product.id,
                    name: variant.product.name,
                    size: variant.optionValues.map(
                      (optionValue, optionValueIndex) => {
                        if (optionValue.option.name === "Size")
                          return optionValue.value;
                      }
                    ),
                    crust: variant.optionValues.map(
                      (optionValue, optionValueIndex) => {
                        if (optionValue.option.name === "Base")
                          return optionValue.value;
                      }
                    ),
                    parentIndex: index,
                    variantIndex: variantIndex
                  });
                });
              }
            });
            console.log(productsFinalData);
            this.setState({
              productsRawData: res.data.productCategoriesByCategoryId,
              productsFinalData,
              isFetching: false
            });
          })
          .catch(err => {
            //   message.error("ERROR");
            console.log("Failed to get Category Details" + err);
          });
      }
    );
  };

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

  onChangeCascader = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    if (value.length === 0 && selectedOptions.length === 0) {
      this.setState({
        isCategorySelected: false,
        selectedProductRowIndex: null,
        productsRawData: [],
        productsFinalData: []
      });
    }
    if (selectedOptions[selectedOptions.length - 1].children.length === 0) {
      let productId = selectedOptions[selectedOptions.length - 1].id;
      this.getCategoryProducts(productId);
    }
  };

  onChangeTable = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  onChange = (type, value) => {
    this.setState((prevState: Readonly<iState>, props: Readonly<iProps>) => {
      return {
        ...prevState,
        [type]: value
      };
    });
  };

  onSearchProduct = () => {
    this.props.client
      .query({
        query: PRODUCT_SEARCH,
        variables: {
          input: {
            name: "s",
            description: "",
            organizationId: this.state.organizationId
          }
        },
        fetchPolicy: "network-only"
      })
      .then(products => {
        console.log("search Data Recieved", products);
      })
      .catch(err => {
        console.log("Failed to get Category Details" + err);
      });
  };

  displayRender = (labels, selectedOptions) => {
    if (labels.length === 1) {
      return <span key={selectedOptions[0].value}>All / {labels[0]} </span>;
    } else {
      return labels.map((label, i) => {
        const option = selectedOptions[i];
        if (i === labels.length - 1) {
          return <span key={option.value}>{label}</span>;
        }
        return <span key={option.value}>All / {label} / </span>;
      });
    }
  };

  onSaveParentDetails = input => {
    console.log(input);

    let parentDetails = input;
    parentDetails.organizationId = this.state.organizationId;
    delete parentDetails["variants"];
    delete parentDetails["__typename"];

    this.props.client
      .mutate({
        mutation: UPDATE_PRODUCT,
        variables: { input: parentDetails }
      })
      .then(res => {
        console.log("Category Data Recieved", res);
      });
  };

  showProductDetailsForm = () => {
    let selectedFinalProductData = this.state.productsFinalData[
      this.state.selectedProductRowIndex
    ];
    let productVariantDetails = null,
      productParentDetails = null;

    productParentDetails = this.state.productsRawData[
      selectedFinalProductData.parentIndex
    ];

    if (selectedFinalProductData.variantIndex !== null) {
      productVariantDetails = this.state.productsRawData[
        selectedFinalProductData.parentIndex
      ].product.variants[selectedFinalProductData.variantIndex];
    }

    return (
      <VariantDetailsForm
        productVariantDetails={productVariantDetails}
        productParentDetails={productParentDetails}
        onSaveParentDetails={this.onSaveParentDetails}
      />
    );
  };

  render() {
    let {
      processedCategoryList,
      isFetching,
      isCategorySelected,
      selectedProductRowIndex,
      productsFinalData
    } = this.state;
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
        {isFetching && processedCategoryList.length === 0 ? (
          <Col className="itemManagementBodyWrapper alignCenter">
            <Spin size="large" />
          </Col>
        ) : (
          <Col className="itemManagementBodyWrapper">
            <Row className="marginBottom20px">
              <Col span={10}>
                <Cascader
                  size="large"
                  options={processedCategoryList}
                  onChange={(val, selectedOptions) => {
                    this.onChangeCascader(val, selectedOptions);
                  }}
                  displayRender={this.displayRender}
                  style={{ width: "100%" }}
                  changeOnSelect
                />
              </Col>
              <Col span={10}>
                <Input
                  size="large"
                  placeholder="Search for a category like Pizza"
                  onChange={e => {
                    this.onChange("searchInput", e.target.value);
                  }}
                  prefix={
                    <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              </Col>
              <Col span={2}>
                <Button
                  disabled={false}
                  className="margin0 blackButton"
                  size="large"
                  onClick={() => {
                    this.onSearchProduct();
                    // this.props.history.push("/core/stores/create");
                  }}
                  loading={false}
                >
                  Search
                </Button>
              </Col>
            </Row>
            {isCategorySelected && (
              <div>
                <Row className="marginBottom20px">
                  <Col className="alignSelfCenter" span={7}>
                    <div>Choose an item variant to view or edit</div>
                  </Col>
                </Row>
                <Row>
                  <Col span={19}>
                    <Table
                      loading={isFetching}
                      className={"nohoverTableWrapper"}
                      columns={columns}
                      rowClassName={(record, index) =>
                        index === this.state.selectedProductRowIndex
                          ? "selectedTableRowRed "
                          : "table-row-dark"
                      }
                      dataSource={this.state.productsFinalData}
                      onChange={this.onChangeTable}
                      pagination={false}
                      onRow={(record: any, rowIndex: number) => {
                        return {
                          onClick: (event: any) => {
                            this.setState({
                              selectedProductRowIndex: rowIndex
                            });
                          }
                        };
                      }}
                      scroll={{ y: 300 }}
                    />
                  </Col>
                </Row>
              </div>
            )}
          </Col>
        )}
        {selectedProductRowIndex !== null && this.showProductDetailsForm()}
      </div>
    );
  }
}

export default withApollo(ListHome);
