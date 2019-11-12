import * as React from "react";
import * as jwt from "jsonwebtoken";
import { withApollo, ApolloProviderProps } from "react-apollo";
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
  Spin,
  Icon,
  Select,
  Table
} from "antd";


interface EntityExtentionState {
  isLoading: boolean,
  isBasicEntityTableLoading: boolean,
  isEntityExtendTableLoading: boolean,

  isEntityVariablesFormOpen: boolean,
  entities: any,
  selectedEntity: any,
  basicEntityFields: any,
  entityExtendFields: {
    id?: string,
    fields: any
  },
  selectedRowIndex: any,
  hideBasicDetailsTable: boolean,
  org_id: string
}

interface EntityExtentionProps extends ApolloProviderProps<any> {

}


const columns = [
  {
    title: <div className="entityExtendcolumnTitle">LABEL</div>,
    dataIndex: "label",
    className: "entityExtendcolumn"
  },
  {
    title: <div className="entityExtendcolumnTitle">DESCRIPTION</div>,
    dataIndex: "description",
    className: "entityExtendcolumn"
  },
  {
    title: <div className="entityExtendcolumnTitle">SLUG</div>,
    dataIndex: "slug",
    className: "entityExtendcolumn"
  },
  {
    title: <div className="entityExtendcolumnTitle">TYPE</div>,
    dataIndex: "type",
    className: "entityExtendcolumn"
  },
  {
    title: <div className="entityExtendcolumnTitle">DEFAULT VALUE</div>,
    dataIndex: "defaultValue",
    className: "entityExtendcolumn"
  },
  {
    title: <div className="entityExtendcolumnTitle">REQUIRED</div>,
    dataIndex: "required",
    render: (text: any, record: any) => {
      if (record.__typename === "BasicField") {
        return text ? "Yes" : "No";
      }
      return text ? (
        <div style={{ color: "#46CB92" }}>Yes</div>
      ) : (
          <div style={{ color: "#E96B81" }}>No</div>
        );
    },
    className: "entityExtendcolumn"
  },
  {
    title: <div className="entityExtendcolumnTitle">SEARCHABLE</div>,
    dataIndex: "searchable",
    render: (text: any, record: any) => {
      if (record.__typename === "BasicField") {
        return text ? "Yes" : "No";
      }
      return text ? (
        <div style={{ color: "#46CB92" }}>Yes</div>
      ) : (
          <div style={{ color: "#E96B81" }}>No</div>
        );
    },
    className: "entityExtendcolumn"
  }
];


class EntityExtention extends React.Component<EntityExtentionProps, EntityExtentionState> {
  constructor(props: EntityExtentionProps) {
    super(props);
    this.state = {
      org_id: '',
      isLoading: true,
      isBasicEntityTableLoading: true,
      isEntityExtendTableLoading: true,

      isEntityVariablesFormOpen: false,
      entities: [],
      selectedEntity: null,
      basicEntityFields: [],
      entityExtendFields: {
        id: '',
        fields: []
      },
      selectedRowIndex: null,
      hideBasicDetailsTable: false
    };
  }

  UNSAFE_componentWillMount() {
    this.getEntities();
  }

  getEntities = () => {
    const jwtToken: any = localStorage.getItem("jwt")
    const { org_id }: any = jwt.decode(jwtToken);
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

  addEntityExtendField = (input: any) => {
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
          selectedRowIndex: null,
          isEntityExtendTableLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isEntityExtendTableLoading: false
        });
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
        this.setState({
          isEntityExtendTableLoading: false
        });
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

  onSave = (entityExtendField: any) => {
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
      selectedRowIndex,
      hideBasicDetailsTable
    } = this.state;
    if (isLoading && !entities.length) {
      return (
        <div className="entityVariablesListWrapper alignCenter">
          <Spin size="large" />
        </div>
      );
    }

    if (!this.state.isEntityVariablesFormOpen) {
      if (basicEntityFields.length) {
        basicEntityFields.map((basicEntity: any, index: any) => {
          basicEntity.key = index;
        });
      }

      if (entityExtendFields.fields.length) {
        entityExtendFields.fields.map((entityExtendField: any, index: any) => {
          entityExtendField.key = index;
        });
      }
      const { Option } = Select;
      return (
        <div className="entityVariablesListWrapper">
          <div className="entityVariableInputWrapper">
            <div className="InputLabel">Label</div>
            <Select
              size="large"
              defaultValue={selectedEntity}
              style={{ width: "50%" }}
              onChange={(selectedEntity: any) => {
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
                    selectedRowIndex: null,
                    hideBasicDetailsTable: false
                  },
                  () => {
                    this.getBasicEntityFields();
                    this.getExtendedEntityFields();
                  }
                );
              }}
            >
              {entities.map((entity: string, index: any) => {
                return (
                  <Option key={index} value={entity}>
                    {entity}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div
            className={
              hideBasicDetailsTable
                ? "entityVariableInputWrapper nohoverTableWrapper noHeightTable"
                : "entityVariableInputWrapper nohoverTableWrapper"
            }
          >
            <Table
              loading={this.state.isBasicEntityTableLoading}
              bordered
              title={() => (
                <div className={"entityFieldTableHeader"}>
                  <label style={{ fontSize: 18 }}>Basic Details</label>
                  {hideBasicDetailsTable ? (
                    <Icon
                      type="caret-down"
                      onClick={() => {
                        this.setState({ hideBasicDetailsTable: false });
                      }}
                    />
                  ) : (
                      <Icon
                        type="caret-up"
                        onClick={() => {
                          this.setState({ hideBasicDetailsTable: true });
                        }}
                      />
                    )}
                </div>
              )}
              columns={columns}
              dataSource={basicEntityFields}
              size="middle"
              pagination={hideBasicDetailsTable ? false : undefined}
            />
          </div>
          <div className="entityVariableInputWrapper ">
            <Table
              loading={this.state.isEntityExtendTableLoading}
              onRow={(record: any, rowIndex: number) => {
                return {
                  onClick: (event: any) => {
                    this.setState({
                      selectedRowIndex: rowIndex,
                      isEntityVariablesFormOpen: true
                    });
                  }
                };
              }}
              bordered
              title={() => (
                <div className={"entityFieldTableHeader"}>
                  <label style={{ fontSize: 18 }}>Extended Details</label>
                </div>
              )}
              columns={columns}
              dataSource={entityExtendFields.fields}
              size="middle"
            // pagination={false}
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
                className="cursorPointer entityExtendBackButton"
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
