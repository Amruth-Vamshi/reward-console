import * as React from "react";
import {
  Col,
  Row,
  Dropdown,
  Menu,
  Card,
  Icon,
  Tooltip,
  Button,
  Input
} from "antd";
import "./app.css";
import { RouteChildrenProps } from "react-router";
const options = [
  // 'Activate',
  "Edit",
  "Delete"
];

interface AppListCardProps extends Partial<RouteChildrenProps> {
  data?: any;
  deleteApp?: (a: any) => void;
  genereteToken?: (i: any, appId: any) => void;
  test?: any;
  key?: any;
  index?: any;
}

export default class AppListCard extends React.Component<AppListCardProps, {}> {
  constructor(props: AppListCardProps) {
    super(props);
  }

  menus = () => (
    <Menu
      onClick={e => {
        if (e.key === "Delete") {
          this.props.deleteApp(this.props.data.id);
        } else if (e.key === "Edit") {
          sessionStorage.setItem("AppData", JSON.stringify(this.props.data));
          this.props.history.push("/refinex/apps/create");
          // this.onEditContact()
        } else {
          // this.onDeleteContact(this.props.contact)
        }
      }}
    >
      {" "}
      {options.map(option => (
        <Menu.Item key={option}> {option} </Menu.Item>
      ))}
    </Menu>
  );

  copy = () => {
    let copyText: any = document.getElementById(this.props.data.appKey);
    copyText.select();
    document.execCommand("copy");
    console.log("Copied Key: " + copyText.value);
  };

  render() {
    const { data } = this.props;
    return (
      <Card className="placesListCard">
        <Row>
          <Col span={6}>
            <div className="divCenterVertical">
              <div>
                <Row>
                  <span style={{ color: "black", marginBottom: 5 }}>
                    {data.appName}
                  </span>
                </Row>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ width: "100%" }} className="divCenterVertical">
              <span className="gx-text-truncate gx-contact-name">
                {data.discription}
              </span>
            </div>
          </Col>
          <Col span={6}>
            {data.appKey ? (
              <Input
                size="large"
                value={data.appKey}
                id={data.appKey}
                suffix={
                  <Tooltip title="Copy">
                    <Icon
                      type="copy"
                      onClick={() => this.copy()}
                      theme="twoTone"
                    />
                  </Tooltip>
                }
              />
            ) : (
              <div className="divCenterVertical">
                <Button
                  style={{ margin: 0 }}
                  onClick={() =>
                    this.props.genereteToken(
                      this.props.index,
                      this.props.data.id
                    )
                  }
                >
                  {" "}
                  Generate Key
                </Button>{" "}
              </div>
            )}
          </Col>
          <Col style={{ paddingLeft: 0 }} span={1}>
            <div className="gx-module-contact-right divCenter">
              <Dropdown
                overlay={this.menus()}
                placement="bottomRight"
                trigger={["click"]}
              >
                <i className="gx-icon-btn icon icon-ellipse-v" />
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}
