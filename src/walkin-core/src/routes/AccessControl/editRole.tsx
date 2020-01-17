import * as React from "react";

import {
  Table,
  Spin,
  Divider,
  Tag,
  Icon,
  Modal,
  Input,
  Button,
  Checkbox,
  Switch
} from "antd";
import "./style.css";
import { withApollo, ApolloProviderProps } from "react-apollo";
import { ROLE, EDIT_POLICY } from "./../../PlatformQueries";
import { History, Location } from "history";

// const data = [
//   {
//     key: 1,
//     entities: "John Brown sr.",
//     children: [
//       {
//         key: 11,
//         entities: "John Brown"
//       },
//       {
//         key: 12,
//         entities: "John Brown jr.",
//         children: [
//           {
//             key: 121,
//             entities: "Jimmy Brown"
//           }
//         ]
//       },
//       {
//         key: 13,
//         entities: "Jim Green sr.",
//         children: [
//           {
//             key: 131,
//             entities: "Jim Green",
//             children: [
//               {
//                 key: 1311,
//                 entities: "Jim Green jr."
//               },
//               {
//                 key: 1312,
//                 entities: "Jimmy Green sr."
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     key: 2,
//     entities: "Joe Black"
//   }
// ];

interface AccessControlProps extends ApolloProviderProps<any> {
  history: History<{ roleId: any }>;
}

interface AccessControlState {
  roleResponse?: any;
  tableData?: any;
  isFetching: boolean;
}

class EditRole extends React.Component<AccessControlProps, AccessControlState> {
  constructor(props: AccessControlProps) {
    super(props);
    this.state = {
      roleResponse: {},
      tableData: [],
      isFetching: true
    };
  }

  UNSAFE_componentWillMount() {
    this.props.client
      .query({
        query: ROLE,
        variables: { id: this.props.history.location.state.roleId },
        fetchPolicy: "network-only"
      })
      .then(roleResponse => {
        console.log(roleResponse);
        this.populateTableData(roleResponse.data.role, tableData => {
          this.setState({
            roleResponse: roleResponse.data.role,
            tableData,
            isFetching: false
          });
        });
      });
  }

  populateTableData = (roleResponse, cb) => {
    let roleDictionary = {};
    let tableData = [];
    let dictionaryIndexCounter = 0;
    roleResponse.policies.map(item => {
      if (roleDictionary[item.resource] === undefined) {
        roleDictionary[item.resource] = dictionaryIndexCounter;
        dictionaryIndexCounter += 1;
        tableData.push({
          key: item.id,
          resource: item.resource,
          type: item.type,
          accessLevel: item.accessLevel,
          [item.permission]: { value: item.effect === "ALLOW", id: item.id }
        });
      } else {
        tableData[roleDictionary[item.resource]][item.permission] = {
          value: item.effect === "ALLOW",
          id: item.id
        };
      }
    });
    cb(tableData);
  };

  onChange = (type: string, value: any) => {
    this.setState(
      (
        prevState: Readonly<AccessControlState>,
        props: Readonly<AccessControlProps>
      ) => {
        return {
          ...prevState,
          [type]: value
        };
      }
    );
  };

  onEditPolicy = (record, type) => {
    // this.props.client
    // .mutate({
    //   mutation: EDIT_POLICY,
    //   variables: {
    //   }
    // })
    // .then(PolicyResponse => {
    //   console.log(linkUserResponse.data.linkUserToRole.id);
    //   if (linkUserResponse.data.linkUserToRole.id) {
    //     this.populateAccessControlTableData(
    //       linkUserResponse.data.linkUserToRole.roles
    //     );
    //     this.onCloseModal();
    //   }
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  };

  onChangePolicy = (value, record, index, type) => {
    let { tableData } = this.state;
    tableData[index][type].value = value;
    this.onEditPolicy(tableData[index], type);
    this.onChange("tableData", tableData);
  };

  render() {
    let { tableData, roleResponse } = this.state;

    const columns = [
      {
        title: "Entities",
        className: "access-control-column-title",
        dataIndex: "resource",
        key: "entities",
        width: "40%"
      },
      {
        title: "Create",
        className: "access-control-column-title",
        dataIndex: "CREATE.value",
        key: "create",
        width: "10%",
        render: (text: any, record: any, index: any) => {
          return (
            <Checkbox
              onChange={e =>
                this.onChangePolicy(e.target.checked, record, index, "CREATE")
              }
              checked={text}
            />
          );
        }
      },

      {
        title: "Update",
        className: "access-control-column-title",
        dataIndex: "UPDATE.value",
        key: "update",
        width: "10%",
        render: (text: any, record: any, index: any) => {
          return (
            <Checkbox
              onChange={e =>
                this.onChangePolicy(e.target.checked, record, index, "UPDATE")
              }
              checked={text}
            />
          );
        }
      },
      {
        title: "Delete",
        className: "access-control-column-title",
        dataIndex: "DELETE.value",
        key: "delete",
        width: "10%",
        render: (text: any, record: any, index: any) => {
          return (
            <Checkbox
              onChange={e =>
                this.onChangePolicy(e.target.checked, record, index, "DELETE")
              }
              checked={text}
            />
          );
        }
      },
      {
        title: "Read",
        className: "access-control-column-title",
        dataIndex: "READ.value",
        width: "10%",
        key: "read",
        render: (text: any, record: any, index: any) => {
          return (
            <Checkbox
              onChange={e =>
                this.onChangePolicy(e.target.checked, record, index, "READ")
              }
              checked={text}
            />
          );
        }
      },
      {
        title: "View",
        className: "access-control-column-title",
        dataIndex: "VIEW.value",
        key: "view",
        width: "10%",
        render: (text: any, record: any, index: any) => {
          return (
            <Checkbox
              onChange={e =>
                this.onChangePolicy(e.target.checked, record, index, "VIEW")
              }
              checked={text}
              disabled={record.type === "ENTITY"}
            />
          );
        }
      },
      {
        title: "Modify",
        className: "access-control-column-title",
        dataIndex: "MODIFY.value",
        width: "10%",
        key: "modify",
        render: (text: any, record: any, index: any) => {
          return (
            <Checkbox
              onChange={e =>
                this.onChangePolicy(e.target.checked, record, index, "MODIFY")
              }
              checked={text}
              disabled={record.type === "ENTITY"}
            />
          );
        }
      }
    ];

    return (
      <div className="access-control">
        <div className="display-flex justify-space-between">
          <div className="fontSize-header margin-seperator">Role Editor</div>
          <Button
            disabled={false}
            type="primary"
            className="submit-button"
            size="large"
            onClick={() => {
              this.props.history.push("/core/access-control");
            }}
          >
            SAVE
          </Button>
        </div>
        <div className="duplicate-role-name-form margin-children-seperator">
          <div className="InputLabel">
            Role Name<span className="requiredFieldRedColor">*</span>
          </div>
          <Input
            size="large"
            placeholder="Enter new role name here"
            disabled={!roleResponse.id}
            value={roleResponse.name}
            onChange={e => {
              this.onChange("roleResponse", {
                ...roleResponse,
                name: e.target.value
              });
            }}
          />
        </div>
        <Table
          columns={columns}
          loading={this.state.isFetching}
          //   rowSelection={rowSelection}
          dataSource={tableData}
          scroll={{ y: 500 }}
          pagination={false}
        />
      </div>
    );
  }
}

export default withApollo(EditRole);
