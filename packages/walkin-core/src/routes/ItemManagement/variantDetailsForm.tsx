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
interface iProps {}

interface iState {}

class VariantDetailsForm extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {};
  }

  handleChange = () => {};

  render() {
    return (
      <div className="variantDetailsFormContainer">
        <div className="flexWrapper marginBottom20px">
          <Col>
            <h1>Item: Cheesy Crunch Margherita</h1>
            <div className="flexWrapper width100px alignSelfCenter">
              <Switch checked={true} onChange={(value: any) => {}} />
              <div>Active</div>
            </div>
          </Col>
          <Col className="alignCenter">
            <Button
              disabled={false}
              className="button "
              type="primary"
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
              <div className="InputLabel">
                Latitude<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Latitude"
                value={"need to add"}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>
            <div className="marginBottom20px">
              <div className="InputLabel">
                Latitude<span className="requiredFieldRedColor">*</span>
              </div>
              <Input.TextArea
                rows={4}
                placeholder="Latitude"
                value={"need to add"}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>
            <div className="marginBottom20px">
              <div className="InputLabel">
                Latitude<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Latitude"
                value={"need to add"}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>
            <div className="marginBottom20px">
              <div className="InputLabel">
                Latitude<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Latitude"
                value={"need to add"}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>
            <div className="marginBottom20px">
              <div className="InputLabel">
                Latitude<span className="requiredFieldRedColor">*</span>
              </div>

              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
            </div>
          </Col>
          <Col span={12}>
            <div className="marginBottom20px">
              <div className="InputLabel">
                Latitude<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Latitude"
                value={"need to add"}
                onChange={(e: any) => {
                  //   this.handleCenterChange(e, 0, "lat");
                  // mapData.places[0].center.lat = e.target.value;
                  // this.onChange("mapData", mapData);
                }}
              />
            </div>

            <div className="marginBottom20px">
              <div className="InputLabel">
                Latitude<span className="requiredFieldRedColor">*</span>
              </div>
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
              </Radio.Group>
            </div>

            <div className="marginBottom20px">
              <div className="InputLabel">
                Latitude<span className="requiredFieldRedColor">*</span>
              </div>
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
              </Radio.Group>
            </div>

            <div className="marginBottom20px">
              <div className="InputLabel">
                Latitude<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Latitude"
                value={"need to add"}
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

        <Col className="marginBottom20px">
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
        <Divider className="marginBottom20px" />
      </div>
    );
  }
}

export default VariantDetailsForm;
