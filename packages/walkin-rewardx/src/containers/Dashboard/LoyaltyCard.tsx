import * as React from "react";
import {
  IconWithTextCard,
  Widget,
  ChartCard,
  Auxiliary
} from "@walkinsole/walkin-components";
import {
  Breadcrumb,
  Input,
  Row,
  Col,
  Button,
  Radio,
  Card,
  Icon,
  List,
  Modal,
  Select
} from "antd";
import { withRouter, RouteChildrenProps } from "react-router";
import { Link } from "react-router-dom";

interface LoyaltyCardProps extends RouteChildrenProps {}

interface LoyaltyCardState {
  modalCurrencyName: string;
  modalCurrencyType: string;
  modalCurrencyValue: string;
  modalCurrencyRupees: string;
  record: any;
  rgValue: any; //todo change this
  rgSelectedItem: any; // todo change this
  isCurrencyModalVisible: boolean;
  currencyTypeList: Array<{ id: string; title: string; value: string }>;
  currencyList: Array<{
    id: string;
    title: string;
    type: string;
    value: string;
    rupees: string;
    active: Boolean;
  }>;
}

class LoyaltyCard extends React.Component<LoyaltyCardProps, LoyaltyCardState> {
  constructor(props: LoyaltyCardProps) {
    super(props);
    this.state = {
      modalCurrencyName: null,
      modalCurrencyType: null,
      modalCurrencyValue: null,
      modalCurrencyRupees: null,
      record: null,
      rgValue: null,
      rgSelectedItem: null,
      isCurrencyModalVisible: false,
      currencyTypeList: [
        { id: "1", title: "type1", value: "value1" },
        { id: "2", title: "type2", value: "value2" },
        { id: "3", title: "type3", value: "value3" }
      ],
      currencyList: [
        {
          id: "1",
          title: "Beans",
          type: "type1",
          value: "20",
          rupees: "1",
          active: true
        },
        {
          id: "2",
          title: "CCD Cash",
          type: "type2",
          value: "10",
          rupees: "2",
          active: false
        },
        {
          id: "3",
          title: "CCD Points",
          type: "type3",
          value: "1",
          rupees: "10",
          active: false
        }
      ]
    };
  }

  componentDidMount() {
    this.setState({ record: this.props.location.state.record });
  }

  onChangeRadioGroup = e => {
    this.setState({ rgValue: e.target.value });
  };

  onChangeInputCurrencyName = ({ target: { value } }) => {
    this.setState({ modalCurrencyName: value });
  };

  onChangeSelectOptionCurrencyType = value => {
    this.setState({ modalCurrencyType: value });
  };

  onChangeInputCurrencyValue = ({ target: { value } }) => {
    this.setState({ modalCurrencyValue: value });
  };

  onChangeInputCurrencyRupees = ({ target: { value } }) => {
    this.setState({ modalCurrencyRupees: value });
  };

  onChangeInputCardName = ({ target: { value } }) => {
    const tempRecord = this.props.location.state.record;
    tempRecord.cardName = value;
    this.setState({ record: tempRecord });
  };

  onOkayCurrencyModal = item => {
    let tempArray = this.state.currencyList;
    let newObj = {
      id: this.state.currencyList[this.state.currencyList.length - 1].id + 1,
      title: this.state.modalCurrencyName,
      type: this.state.modalCurrencyType,
      value: this.state.modalCurrencyValue,
      rupees: this.state.modalCurrencyRupees,
      active: false
    };

    tempArray.push(newObj);

    this.setState(
      {
        isCurrencyModalVisible: false,
        rgSelectedItem: null,
        currencyList: tempArray,
        modalCurrencyName: null,
        modalCurrencyType: null,
        modalCurrencyValue: null,
        modalCurrencyRupees: null
      },
      () =>
        console.log("currencyList onOkayCurrencyModal", this.state.currencyList)
    );
    // todo push the data to existing state
  };

  onCancelCurrencyModal = () => {
    this.setState({
      isCurrencyModalVisible: false,
      rgSelectedItem: null,
      modalCurrencyName: null,
      modalCurrencyType: null,
      modalCurrencyValue: null,
      modalCurrencyRupees: null
    });
    // set null to all modal... values
  };

  renderCurrencyModal() {
    return (
      <Modal
        title={this.state.rgSelectedItem ? "Edit Currency" : "Add Currency"}
        visible={this.state.isCurrencyModalVisible}
        onOk={this.onOkayCurrencyModal}
        onCancel={this.onCancelCurrencyModal}
        okText={"Okay"}
        cancelText={"Cancel"}
      >
        <Row>Currency Name</Row>
        <Row>
          <Input
            placeholder="Currency Name"
            value={this.state.modalCurrencyName}
            onChange={this.onChangeInputCurrencyName}
          />
        </Row>

        <Row style={{ margin: 10 }}>
          <Col style={{ width: "30%" }}>
            Type
            <Row>
              <Select
                value={
                  this.state.modalCurrencyType
                    ? this.state.modalCurrencyType
                    : this.state.currencyList[0].type
                }
                onChange={this.onChangeSelectOptionCurrencyType}
              >
                {this.state.currencyTypeList.map((type, index) => {
                  return (
                    <Select.Option value={type.value} key={index}>
                      {type.title}
                    </Select.Option>
                  );
                })}
              </Select>
            </Row>
          </Col>

          <Col style={{ width: "30%" }}>
            Value
            <Input
              placeholder="value"
              value={this.state.modalCurrencyValue}
              onChange={this.onChangeInputCurrencyValue}
            />
          </Col>

          <Col style={{ width: "10%" }}>
            {" "}
            <div>=</div>
          </Col>

          <Col style={{ width: "30%" }}>
            Rupees
            <Input
              placeholder="rupees"
              value={this.state.modalCurrencyRupees}
              onChange={this.onChangeInputCurrencyRupees}
            />
          </Col>
        </Row>
      </Modal>
    );
  }

  renderCurrencyList() {
    if (this.state.currencyList) {
      return (
        <List
          dataSource={this.state.currencyList}
          loading={false}
          itemLayout="horizontal"
          renderItem={item => (
            // todo handle
            <Radio
              style={{ display: "flex", width: "100%" }}
              value={item.value}
            >
              <Card>
                {item.title} {"   "}Value:
                {item.value} = Rupee :{item.rupees} {"   "}
                {item.active ? (
                  <span>Active</span>
                ) : (
                  <Icon
                    type="edit"
                    onClick={() => {
                      this.setState({
                        isCurrencyModalVisible: true,
                        rgSelectedItem: item,
                        modalCurrencyName: item.title,
                        modalCurrencyType: item.type,
                        modalCurrencyValue: item.value,
                        modalCurrencyRupees: item.rupees
                      });
                    }}
                    style={{ border: 1 }}
                  />
                )}
              </Card>
            </Radio>
          )}
        />
      );
    }

    return (
      <Radio style={{ display: "flex" }} value={0}>
        <Card>No currency</Card>
      </Radio>
    );
  }

  render() {
    let cardName = null;
    if (this.state.record) {
      cardName = this.state.record.cardName;
    }
    return (
      <Auxiliary>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/rewardx/Dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {this.props.location.state.record
              ? "Edit Loylaty Card"
              : "Add Loyalty Card"}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            width: "50wv",
            margin: "auto"
            // maxWidth: "50vw" //html css
          }}
        >
          <Row style={{ width: "50%", margin: "auto" }}>
            Create a new Loyalty Card
          </Row>
          <Row style={{ width: "50%", margin: "auto" }}>Name of the card</Row>
          <Row style={{ width: "50%", margin: "auto" }}>
            <Input
              placeholder="Enter your loyalty card name"
              value={cardName}
              onChange={this.onChangeInputCardName}
            />
          </Row>
          <Row style={{ marginTop: 20, width: "50%", margin: "auto" }}>
            Chooose one currency from the list{" "}
            <span
              style={{ float: "right", width: "50%" }}
              onClick={() =>
                this.setState({
                  isCurrencyModalVisible: true,
                  rgSelectedItem: null
                })
              }
            >
              <a>Add currency</a>
            </span>
          </Row>

          <Row style={{ width: "50%", margin: "auto" }}>
            <Radio.Group
              style={{ width: "100%", margin: "auto" }}
              onChange={this.onChangeRadioGroup}
              value={this.state.rgValue}
            >
              {this.renderCurrencyList()}
            </Radio.Group>
          </Row>

          <Row>
            <Col style={{ margin: "auto" }}>
              <Button type="primary" size={"large"}>
                Submit
              </Button>
            </Col>
          </Row>
        </div>
        {this.renderCurrencyModal()}
      </Auxiliary>
    );
  }
}

export default withRouter(LoyaltyCard);
