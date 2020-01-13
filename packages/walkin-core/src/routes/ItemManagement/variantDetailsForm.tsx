import * as React from "react";
import {
  Row,
  Col,
  Cascader,
  Button,
  Input,
  Icon,
  Table,
  Switch,
  Radio,
  Divider,
  Select
} from "antd";
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

  handleChange = () => {};

  render() {
    let { productDetails } = this.state;
    return (
      <div className="variantDetailsFormContainer">
        <div className="flexWrapper marginBottom20px">
          <Col>
            <h1>
              Item: Cheesy Crunch Margherita
              {productDetails.variants.length ? "" : " (parent)"}
            </h1>
            <div className="flexWrapper width100px alignSelfCenter">
              <Switch checked={true} onChange={(value: any) => {}} />
              <div>Active</div>
            </div>
          </Col>
          <Col className="alignCenter">
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
        </div>
        <Row>
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
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>
            <div className="marginBottom20px">
              <div className="marginBottom10px">Description</div>
              <Input.TextArea
                rows={4}
                placeholder="Description"
                value={productDetails.description}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>
            <div className="marginBottom20px">
              <div className="marginBottom10px">Nutrition value</div>
              <Input
                size="large"
                placeholder="Nutrition value"
                value={productDetails.nutritionValue}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>
            <div className="marginBottom20px">
              <div className="marginBottom10px">
                Items prepararion time (minutes)
              </div>
              <Input
                size="large"
                placeholder="Items prepararion time"
                value={productDetails.ItemsPrepararionTime}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>
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
              <div className="marginBottom10px">
                Image link<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Image Link"
                value={productDetails.imageUrl}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>

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

            <div className="marginBottom20px">
              <div className="marginBottom10px">
                Tag2: Hot/Cold<span className="requiredFieldRedColor">*</span>
              </div>
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Hot</Radio.Button>
                <Radio.Button value="b">Cold</Radio.Button>
              </Radio.Group>
            </div>

            <div className="marginBottom20px">
              <div className="marginBottom10px">Rating</div>
              <Input
                size="large"
                placeholder="Rating"
                value={productDetails.rating}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>
          </Col>
        </Row>
        <Divider className="marginBottom20px" />

        {/* <Col className="marginBottom20px">
          <h1>Variants</h1>
          <div>Manage Variant attributes like size and crust for pizzas</div>
        </Col>

        <Row className="marginBottom20px">
          <Col span={12}>
            <div className="flexWrapper alignItemsCenter width400px">
              <div>V1: Size</div>
              <Select
                defaultValue="lucy"
                style={{ width: 250 }}
                onChange={this.handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </Col>
          <Col span={12}>
            <div className="flexWrapper alignItemsCenter width400px">
              <div>V2: Crust</div>
              <Select
                defaultValue="lucy"
                style={{ width: 250 }}
                onChange={this.handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </Col>
        </Row>
        <Divider className="marginBottom20px" /> */}
      </div>
    );
  }
}

export default VariantDetailsForm;
