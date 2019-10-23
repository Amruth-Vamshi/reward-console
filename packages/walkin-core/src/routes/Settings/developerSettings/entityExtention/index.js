import React, { Component } from "react";
import jwt from "jsonwebtoken";
import { withApollo } from "react-apollo";
import EntityVariablesForm from "./entityVariablesForm";
import {
  GET_ENTITIES,
  GET_BASIC_ENTITY_FIELDS,
  GET_ENTITY_EXTEND_FIELDS_BY_NAME,
  ADD_ENTITY_EXTEND,
  ADD_ENTITY_EXTEND_FIELD
} from "./../../../../PlatformQueries";
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
    dataIndex: "defaultValue"
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

class EntityExtention extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isBasicEntityTableLoading: true,
      isEntityExtendTableLoading: true,

      isEntityVariablesFormOpen: false,
      entities: [],
      selectedEntity: null,
      basicEntityFields: [],
      entityExtendFields: {
        fields: []
      },
      selectedRowIndex: null
    };
  }

  componentWillMount() {
    this.getEntities();
  }

  getEntities = () => {
    const { org_id } = jwt.decode(localStorage.getItem("jwt"));
    this.props.client
      .query({
        query: GET_ENTITIES,
        fetchPolicy: "network-only"
      })
      .then(entitiesResponse => {
        this.setState(
          {
            org_id,
            entities: entitiesResponse.data.entities,
            selectedEntity: entitiesResponse.data.entities[0],
            isLoading: false
          },
          () => {
            this.getBasicEntityFields();
            this.getExtendedEntityFields();
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  addEntityExtendField = input => {
    this.props.client
      .mutate({
        mutation: ADD_ENTITY_EXTEND_FIELD,
        variables: {
          input
        }
      })
      .then(entityFieldResponse => {
        let fields = [
          ...this.state.entityExtendFields.fields,
          entityFieldResponse.data.addEntityExtendField
        ];
        this.setState({
          entityExtendFields: { ...this.state.entityExtendFields, fields },
          isEntityVariablesFormOpen: !this.state.isEntityVariablesFormOpen,
          selectedRowIndex: null
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getBasicEntityFields = () => {
    this.props.client
      .query({
        query: GET_BASIC_ENTITY_FIELDS,
        variables: { entityName: this.state.selectedEntity },
        fetchPolicy: "network-only"
      })
      .then(basicEntityResponse => {
        this.setState({
          basicEntityFields: basicEntityResponse.data.basicFields,
          isBasicEntityTableLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isBasicEntityTableLoading: false
        });
      });
  };
  getExtendedEntityFields = () => {
    this.props.client
      .query({
        query: GET_ENTITY_EXTEND_FIELDS_BY_NAME,
        variables: { entityName: this.state.selectedEntity },
        fetchPolicy: "network-only"
      })
      .then(entityExtendResponse => {
        if (
          !entityExtendResponse.data.entityExtendByName ||
          !entityExtendResponse.data.entityExtendByName.id
        ) {
          return this.addEntityExtend();
        }

        this.setState({
          entityExtendFields: entityExtendResponse.data.entityExtendByName,
          isEntityExtendTableLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  addEntityExtend = () => {
    this.props.client
      .mutate({
        mutation: ADD_ENTITY_EXTEND,
        variables: {
          input: {
            organization_id: this.state.org_id,
            entity_name: this.state.selectedEntity,
            description: this.state.selectedEntity
          }
        }
      })
      .then(addEntityExtendResponse => {
        this.setState({
          entityExtendFields: addEntityExtendResponse.data.addEntityExtend,
          isEntityExtendTableLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onAddOrEditVariables = () => {
    this.setState({
      isEntityVariablesFormOpen: !this.state.isEntityVariablesFormOpen,
      selectedRowIndex: null
    });
  };

  onSave = entityExtendField => {
    let input = entityExtendField;
    input.entityExtendId = this.state.entityExtendFields.id;
    this.addEntityExtendField(input);
  };

  renderEntityExtentionList = () => {
    let {
      entities,
      isLoading,
      selectedEntity,
      basicEntityFields,
      entityExtendFields,
      selectedRowIndex
    } = this.state;

    if (isLoading && !entities.length) {
      return (
        <div className="entityVariablesListWrapper">
          <Spin size="large" />
        </div>
      );
    }

    if (!this.state.isEntityVariablesFormOpen) {
      if (basicEntityFields.length) {
        basicEntityFields.map((basicEntity, index) => {
          if (basicEntity.required) {
            modifiedBasicEntityFields[index].required = "Yes";
          } else {
            modifiedBasicEntityFields[index].required = "No";
          }
          if (basicEntity.searchable) {
            basicEntityFields[index].searchable = "Yes";
          } else {
            basicEntityFields[index].searchable = "No";
          }
          basicEntityFields[index].key = index;
        });
      }

      // console.log(basicEntityFields, this.state.basicEntityFields);

      if (entityExtendFields.fields.length) {
        entityExtendFields.fields.map((entityExtendField, index) => {
          console.log(entityExtendField, index, "map");

          if (entityExtendField.required) {
            entityExtendFields.fields[index].required = (
              <div style={{ color: "green" }}>Yes</div>
            );
          } else {
            entityExtendFields.fields[index].required = (
              <div style={{ color: "red" }}>No</div>
            );
          }
          if (entityExtendField.searchable) {
            entityExtendFields.fields[index].searchable = (
              <div style={{ color: "green" }}>Yes</div>
            );
          } else {
            entityExtendFields.fields[index].searchable = (
              <div style={{ color: "red" }}>No</div>
            );
          }
          entityExtendFields.fields[index].key = index;
        });
      }
      return (
        <div className="entityVariablesListWrapper">
          <div className="entityVariableInputWrapper">
            <div className="InputLabel">Label</div>
            <Select
              size="large"
              defaultValue={selectedEntity}
              style={{ width: "50%" }}
              onChange={selectedEntity => {
                this.setState(
                  {
                    isBasicEntityTableLoading: true,
                    isEntityExtendTableLoading: true,

                    isEntityVariablesFormOpen: false,
                    selectedEntity,
                    basicEntityFields: [],
                    entityExtendFields: {
                      fields: []
                    },
                    selectedRowIndex: null
                  },
                  () => {
                    this.getBasicEntityFields();
                    this.getExtendedEntityFields();
                  }
                );
              }}
            >
              {entities.map((entity, index) => {
                return (
                  <Option key={index} value={entity}>
                    {entity}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="entityVariableInputWrapper ">
            <Table
              className="entityVariableBasicInputWrapper"
              loading={this.state.isBasicEntityTableLoading}
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
              dataSource={basicEntityFields}
              size="middle"
              pagination={false}
            />
          </div>
          <div className="entityVariableInputWrapper ">
            <Table
              loading={this.state.isEntityExtendTableLoading}
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    this.setState({
                      selectedRowIndex: rowIndex,
                      isEntityVariablesFormOpen: true
                    });
                  }
                };
              }}
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
              dataSource={entityExtendFields.fields}
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
    }

    return (
      <EntityVariablesForm
        entityExtendField={entityExtendFields.fields[selectedRowIndex]}
        onSave={this.onSave}
      />
    );
  };

  render() {
    console.log(this.state, "this.state");

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
