import * as React from "react";
import { Row, Col, Button, Input, Switch, Radio, Divider, Select } from "antd";
import "./style.css";
import FileUpload from "./../Categories/Components/FileUpload";

const { Option } = Select;

interface iProps {
  productVariantDetails: any;
  productParentDetails: any;
  onSaveParentDetails: any;
}

interface iState {
  productVariantDetails?: any;
  productParentDetails?: any;
}

class VariantDetailsForm extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      nextProps.productVariantDetails,
      nextProps.productParentDetails
    );
    if (nextProps.productVariantDetails) {
      return {
        productVariantDetails: nextProps.productVariantDetails.product,
        productParentDetails: nextProps.productParentDetails.product
      };
    }
    return {
      productVariantDetails: null,
      productParentDetails: nextProps.productParentDetails.product
    };
  }

  handleChange = (type, value) => {};

  onChange = (type: string, value: any) => {
    this.setState((prevState: Readonly<iState>, props: Readonly<iProps>) => {
      return {
        ...prevState,
        [type]: value
      };
    });
  };

  handleUploadedImage = val => {
    const { productParentDetails } = this.state;
    productParentDetails.imageUrl = val[0].url;
    this.setState({ productParentDetails });
  };

  render() {
    let { productParentDetails, productVariantDetails } = this.state;
    return (
      <div className="variantDetailsFormContainer">
        <Row className=" marginBottom20px">
          <Col span={20}>
            <h1>
              Item: {productParentDetails.name}
              {productVariantDetails ? "" : " (parent)"}
            </h1>
            <div className="flexWrapper width100px alignSelfCenter">
              <Switch
                checked={productParentDetails.status === "ACTIVE"}
                onChange={(value: any) => {
                  productParentDetails.status = value ? "ACTIVE" : "INACTIVE";
                  this.onChange("productParentDetails", productParentDetails);
                }}
              />
              <div className="alignSelfCenter">
                {productParentDetails.status}
              </div>
            </div>
          </Col>
          <Col span={2} className="alignCenter">
            <Button
              disabled={false}
              className="button blackButton"
              size="large"
              onClick={() => {
                this.props.onSaveParentDetails(productParentDetails);
              }}
              loading={false}
            >
              SAVE
            </Button>
          </Col>
        </Row>
        <Divider className="marginBottom20px" />

        <div>
          <Col className="marginBottom20px">
            <h1>Variants</h1>
            <div>Manage Variant attributes like size and crust for pizzas</div>
          </Col>
          <Row className="marginBottom20px">
            <Col span={12}>
              <div className="flexWrapper alignItemsCenter width400px">
                <div>V1: Size</div>
                <Select
                  disabled
                  className="textColorRed"
                  defaultValue="small"
                  style={{ width: 250 }}
                  onChange={this.handleChange}
                >
                  {/* <Option value="small">small</Option>
                <Option value="medium">medium</Option>
                <Option value="large">large</Option> */}
                </Select>
              </div>
            </Col>
            <Col span={12}>
              <div className="flexWrapper alignItemsCenter width400px">
                <div>V2: Crust</div>
                <Select
                  disabled
                  defaultValue="pan"
                  className="textColorRed"
                  style={{ width: 250 }}
                  onChange={this.handleChange}
                >
                  {/* <Option value="pan">pan</Option>
                <Option value="cheesy">cheesy</Option>
                <Option value="handmade">handmade</Option> */}
                </Select>
              </div>
            </Col>
          </Row>
          <Divider className="marginBottom20px" />
          <Col className="marginBottom20px">
            <h1>Parent attributes</h1>
            <div>
              Some attributes may differ from parent (eg nutrituin value).
              Default is parent attributes (e.g. image)
            </div>
          </Col>
        </div>

        <Row className="marginBottom20px">
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">
                Item name<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Item name"
                value={productParentDetails.name}
                onChange={(e: any) => {
                  productParentDetails.name = e.target.value;
                  this.onChange("productParentDetails", productParentDetails);
                }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">
                Image link<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Image Link"
                value={productParentDetails.imageUrl}
                onChange={(e: any) => {
                  productParentDetails.imageUrl = e.target.value;
                  this.onChange("productParentDetails", productParentDetails);
                }}
              />
            </div>
          </Col>
        </Row>

        <Row className="marginBottom20px">
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">Description</div>
              <Input.TextArea
                rows={4}
                placeholder="Description"
                value={productParentDetails.description}
                onChange={(e: any) => {
                  productParentDetails.description = e.target.value;
                  this.onChange("productParentDetails", productParentDetails);
                }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="marginBottom20px displayFlex ">
              <div
                style={{
                  width: 100,
                  height: 100,
                  marginRight: 20
                }}
              >
                <img className="catImage" src={productParentDetails.imageUrl} />

                {/* <img className="catImage" src={require('./../Categories/Assets/add_image.png')} /> */}
              </div>

              {/* <Button size="small" className="margin0 alignSelfCenter ">
                Upload Image
              </Button> */}
              <FileUpload
                uiType={"categoryManagement"}
                availableImage={0}
                onImageUpload={this.handleUploadedImage}
                title="Upload Product Image"
              />
            </div>
          </Col>
        </Row>

        <Row className="marginBottom20px">
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">Nutrition value</div>
              <Input
                size="large"
                placeholder="Nutrition value"
                value={
                  productParentDetails.extend &&
                  productParentDetails.extend.extend_nutrition_value
                }
                onChange={(e: any) => {
                  productParentDetails.extend.extend_nutrition_value =
                    e.target.value;
                  this.onChange("productParentDetails", productParentDetails);
                }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">
                Tag1: Veg/Non-Veg
                <span className="requiredFieldRedColor">*</span>
              </div>
              <Radio.Group
                value={
                  productParentDetails.extend &&
                  productParentDetails.extend.extend_veg_non_veg
                    ? productParentDetails.extend.extend_veg_non_veg
                    : null
                }
                onChange={e => {
                  if (!productParentDetails.extend) {
                    productParentDetails.extend = {};
                    productParentDetails.extend.extend_veg_non_veg =
                      e.target.value;
                  }
                  productParentDetails.extend.extend_veg_non_veg =
                    e.target.value;

                  this.onChange("productParentDetails", productParentDetails);
                }}
                buttonStyle="solid"
              >
                <Radio.Button value="veg">Veg</Radio.Button>
                <Radio.Button value="nonVeg">Non-veg</Radio.Button>
              </Radio.Group>
            </div>
          </Col>
        </Row>

        <Row className="marginBottom20px">
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">
                Items prepararion time (minutes)
              </div>
              <Input
                size="large"
                placeholder="Items prepararion time"
                value={
                  productParentDetails.extend &&
                  productParentDetails.extend.extend_item_preparation_time
                }
                onChange={(e: any) => {
                  productParentDetails.extend.extend_item_preparation_time =
                    e.target.value;
                  this.onChange("productParentDetails", productParentDetails);
                }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">
                Tag2: Hot/Cold<span className="requiredFieldRedColor">*</span>
              </div>
              <Radio.Group
                value={
                  productParentDetails.extend &&
                  productParentDetails.extend.extend_hot_cold
                    ? productParentDetails.extend.extend_hot_cold
                    : null
                }
                onChange={e => {
                  if (!productParentDetails.extend) {
                    productParentDetails.extend = {};
                    productParentDetails.extend.extend_hot_cold =
                      e.target.value;
                  }
                  productParentDetails.extend.extend_hot_cold = e.target.value;
                  this.onChange("productParentDetails", productParentDetails);
                }}
                buttonStyle="solid"
              >
                <Radio.Button value="hot">Hot</Radio.Button>
                <Radio.Button value="cold">Cold</Radio.Button>
              </Radio.Group>
            </div>
          </Col>
        </Row>

        <Row className="marginBottom20px">
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">
                Ordering Mode<span className="requiredFieldRedColor">*</span>
              </div>
              <Button
                type={
                  productParentDetails.extend &&
                  productParentDetails.extend.extend_ordering_mode &&
                  productParentDetails.extend.extend_ordering_mode.takeAway
                    ? "primary"
                    : "default"
                }
                onClick={() => {
                  if (!productParentDetails.extend) {
                    productParentDetails.extend = {};
                    productParentDetails.extend.extend_ordering_mode = {};
                  } else if (
                    !productParentDetails.extend.extend_ordering_mode
                  ) {
                    productParentDetails.extend.extend_ordering_mode = {};
                  }
                  productParentDetails.extend.extend_ordering_mode.takeAway = !(
                    productParentDetails.extend.extend_ordering_mode &&
                    productParentDetails.extend.extend_ordering_mode.takeAway
                  );
                  this.onChange("productParentDetails", productParentDetails);
                }}
              >
                TakeAway
              </Button>
              <Button
                type={
                  productParentDetails.extend &&
                  productParentDetails.extend.extend_ordering_mode &&
                  productParentDetails.extend.extend_ordering_mode.haveInStore
                    ? "primary"
                    : "default"
                }
                onClick={() => {
                  if (!productParentDetails.extend) {
                    productParentDetails.extend = {};
                    productParentDetails.extend.extend_ordering_mode = {};
                  } else if (
                    !productParentDetails.extend.extend_ordering_mode
                  ) {
                    productParentDetails.extend.extend_ordering_mode = {};
                  }
                  productParentDetails.extend.extend_ordering_mode.haveInStore = !(
                    productParentDetails.extend.extend_ordering_mode &&
                    productParentDetails.extend.extend_ordering_mode.haveInStore
                  );
                  this.onChange("productParentDetails", productParentDetails);
                }}
              >
                Have in store
              </Button>
              <Button
                type={
                  productParentDetails.extend &&
                  productParentDetails.extend.extend_ordering_mode &&
                  productParentDetails.extend.extend_ordering_mode.delivery
                    ? "primary"
                    : "default"
                }
                onClick={() => {
                  if (!productParentDetails.extend) {
                    productParentDetails.extend = {};
                    productParentDetails.extend.extend_ordering_mode = {};
                  } else if (
                    !productParentDetails.extend.extend_ordering_mode
                  ) {
                    productParentDetails.extend.extend_ordering_mode = {};
                  }
                  productParentDetails.extend.extend_ordering_mode.delivery = !(
                    productParentDetails.extend.extend_ordering_mode &&
                    productParentDetails.extend.extend_ordering_mode.delivery
                  );
                  this.onChange("productParentDetails", productParentDetails);
                }}
              >
                Delivery
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">Rating</div>
              <Input
                size="large"
                placeholder="Rating"
                value={
                  productParentDetails.extend &&
                  productParentDetails.extend.extend_rating
                }
                onChange={(e: any) => {
                  productParentDetails.extend.extend_rating = e.target.value;
                  this.onChange("productParentDetails", productParentDetails);
                }}
              />
            </div>
          </Col>
        </Row>

        <Divider className="marginBottom20px" />

        <Col className="marginBottom20px">
          <h1>Additions</h1>
          <div>
            Add items or categories that can be added to this item, like
            toppings to a pizza
          </div>
        </Col>

        <Row className="marginBottom20px">
          <Col className="alignSelfCenter" span={2}>
            <div>Categories</div>
          </Col>
          <Col span={22}>
            <Select
              disabled
              defaultValue="VegTopping,VegExtras"
              style={{ width: "100%" }}
              onChange={this.handleChange}
            >
              {/* <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option> */}
            </Select>
          </Col>
        </Row>
        <Row className="marginBottom20px">
          <Col className="alignSelfCenter" span={2}>
            <div>Items</div>
          </Col>
          <Col span={22}>
            <Select
              disabled
              defaultValue="SKU102103, SKU1202211"
              style={{ width: "100%" }}
              onChange={this.handleChange}
            >
              {/* <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option> */}
            </Select>
          </Col>
        </Row>
        <Divider className="marginBottom20px" />
      </div>
    );
  }
}

export default VariantDetailsForm;
