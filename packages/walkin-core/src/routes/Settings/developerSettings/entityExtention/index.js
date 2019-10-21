import React, { Component } from "react";
import jwt from "jsonwebtoken";
import { withApollo } from "react-apollo";
import EntityVariablesForm from "./entityVariablesForm";
import { GET_ENTITIES } from "./../../../../PlatformQueries";
import "./style.css";
import {
  Button,
  Switch,
  Row,
  Col,
  Spin,
  Icon,
  Select,
  Input,
  Table
} from "antd";

const columns = [
  {
    title: "LABEL",
    dataIndex: "label"
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description"
  },
  {
    title: "SLUG",
    dataIndex: "slug"
  },
  {
    title: "TYPE",
    dataIndex: "type"
  },
  {
    title: "DEFAULT VALUE",
    dataIndex: "default value"
  },
  {
    title: "REQUIRED",
    dataIndex: "required"
  },
  {
    title: "SEARCHABLE",
    dataIndex: "searchable"
  }
];
const data = [
  {
    key: "1",
    label: "John Brown",
    description: 32,
    slug: "New York No. 1 Lake Park",
    type: "New York No. 1 Lake Park",
    "default value": "New York No. 1 Lake Park",
    required: "New York No. 1 Lake Park",
    searchable: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    label: "John Brown",
    description: 32,
    slug: "New York No. 1 Lake Park",
    type: "New York No. 1 Lake Park",
    "default value": "New York No. 1 Lake Park",
    required: "New York No. 1 Lake Park",
    searchable: "New York No. 1 Lake Park"
  },
  {
    key: "3",
    label: "John Brown",
    description: 32,
    slug: "New York No. 1 Lake Park",
    type: "New York No. 1 Lake Park",
    "default value": "New York No. 1 Lake Park",
    required: "New York No. 1 Lake Park",
    searchable: "New York No. 1 Lake Park"
  }
];

class EntityExtention extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isEntityVariablesFormOpen: false
    };
  }

  componentWillMount() {
    const { org_id } = jwt.decode(localStorage.getItem("jwt"));
    console.log(org_id);

    this.props.client
      .query({
        query: GET_ENTITIES,
        fetchPolicy: "network-only"
      })
      .then(entitiessResponse => {
        console.log(entitiessResponse);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onAddOrEditVariables = () => {
    this.setState({
      isEntityVariablesFormOpen: !this.state.isEntityVariablesFormOpen
    });
  };
  renderEntityExtentionList = () => {
    if (!this.state.isEntityVariablesFormOpen)
      return (
        <div className="entityVariablesListWrapper">
          <div className="entityVariableInputWrapper">
            <div className="InputLabel">Label</div>
            <Select
              size="large"
              defaultValue="lucy"
              style={{ width: "50%" }}
              // onChange={thishandleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="entityVariableInputWrapper ">
            <Table
              bordered
              title={() => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 50
                  }}
                >
                  <label style={{ fontSize: 18 }}>Basic Details</label>
                  <Icon type="caret-down" />
                </div>
              )}
              columns={columns}
              dataSource={data}
              size="middle"
              pagination={false}
            />
          </div>
          <div className="entityVariableInputWrapper ">
            <Table
              className="table-disable-hover"
              bordered
              title={() => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 50
                  }}
                >
                  <label style={{ fontSize: 18 }}>Extended Details</label>
                  {/* <Button type="link">X</Button> */}
                </div>
              )}
              columns={columns}
              dataSource={data}
              size="middle"
              pagination={false}
            />
          </div>

          <Button
            className="webhookButtonMargin0"
            type="primary"
            // size="large"
            onClick={() => this.onAddOrEditVariables()}
          >
            ADD VARIABLE
          </Button>
        </div>
      );

    return <EntityVariablesForm onSave={this.onAddOrEditVariables} />;
  };

  render() {
    let { isEntityVariablesFormOpen } = this.state;
    return (
      <div className="gx-main-content-wrapper">
        <div className="headerWrapper">
          <label className="headerTitle">Entity Extension Management</label>
        </div>
        {!isEntityVariablesFormOpen ? (
          <div className="headerDescWrapper">
            <div className="headerDesc">
              Outgoing webhooks allow you to send Wcore activity to external
              services and custom integrations. Check out our Webhook API
              documentation for details.
            </div>
          </div>
        ) : (
          <div className="headerDescWrapper">
            <div
              onClick={() => this.onAddOrEditVariables()}
              className="cursorPointer"
            >
              <Icon type="arrow-left" />
              Back
            </div>
          </div>
        )}

        {this.renderEntityExtentionList()}
      </div>
    );
  }
}

export default withApollo(EntityExtention);
