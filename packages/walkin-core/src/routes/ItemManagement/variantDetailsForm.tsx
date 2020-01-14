import * as React from "react";
import { Row, Col, Button, Input, Switch, Radio, Divider, Select } from "antd";
import "./style.css";
const { Option } = Select;
interface iProps {
  productDetails: any;
  onSave: any;
}

interface iState {
  productDetails: any;
}

class VariantDetailsForm extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      productDetails: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.productDetails);
    return { productDetails: nextProps.productDetails.product };
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

  render() {
    let { productDetails } = this.state;
    return (
      <div className="variantDetailsFormContainer">
        <Row className=" marginBottom20px">
          <Col span={20}>
            <h1>
              Item: {productDetails.name}
              {productDetails.variants ? " (parent)" : ""}
            </h1>
            <div className="flexWrapper width100px alignSelfCenter">
              <Switch
                checked={productDetails.status === "ACTIVE"}
                onChange={(value: any) => {
                  productDetails.status = value ? "ACTIVE" : "INACTIVE";
                  this.onChange("productDetails", productDetails);
                }}
              />
              <div className="alignSelfCenter">{productDetails.status}</div>
            </div>
          </Col>
          <Col span={2} className="alignCenter">
            <Button
              disabled={false}
              className="button blackButton"
              size="large"
              onClick={() => {
                // this.props.history.push("/core/stores/create");
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
                value={productDetails.name}
                onChange={(e: any) => {
                  productDetails.name = e.target.value;
                  this.onChange("productDetails", productDetails);
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
                value={productDetails.imageUrl}
                onChange={(e: any) => {
                  productDetails.imageUrl = e.target.value;
                  this.onChange("productDetails", productDetails);
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
                value={productDetails.description}
                onChange={(e: any) => {
                  productDetails.description = e.target.value;
                  this.onChange("productDetails", productDetails);
                }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="marginBottom20px displayFlex ">
              <div
                style={{
                  border: "1px solid red",
                  width: 100,
                  height: 100,
                  marginRight: 20
                }}
              ></div>
              <Button size="small" className="margin0 alignSelfCenter ">
                Upload Image
              </Button>
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
                value={productDetails.nutritionValue}
                onChange={(e: any) => {
                  productDetails.nutritionValue = e.target.value;
                  this.onChange("productDetails", productDetails);
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
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Veg</Radio.Button>
                <Radio.Button value="b">Non-veg</Radio.Button>
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
                value={productDetails.itemsPrepararionTime}
                onChange={(e: any) => {
                  productDetails.itemsPrepararionTime = e.target.value;
                  this.onChange("productDetails", productDetails);
                }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">
                Tag2: Hot/Cold<span className="requiredFieldRedColor">*</span>
              </div>
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Hot</Radio.Button>
                <Radio.Button value="b">Cold</Radio.Button>
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
              <Button>TakeAway</Button>
              <Button>Have in store</Button>
              <Button>Delivery</Button>
            </div>
          </Col>
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="marginBottom10px">Rating</div>
              <Input
                size="large"
                placeholder="Rating"
                value={productDetails.rating}
                onChange={(e: any) => {
                  productDetails.rating = e.target.value;
                  this.onChange("productDetails", productDetails);
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
