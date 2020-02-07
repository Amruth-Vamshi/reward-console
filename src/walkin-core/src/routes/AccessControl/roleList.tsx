import * as React from "react";
import * as jwt from "jsonwebtoken";

import { Table, Button } from "antd";
import moment from "moment";
import "./style.css";

import CreateRoleModal from "./createRoleModal";
import AddOrRemoveUsersToRoleModal from "./AddOrRemoveUsersToRoleModal";
import DuplicateIcon from "./../../containers/Icons/duplicate";

import { withApollo, ApolloProviderProps } from "react-apollo";
import {
  ROLES_LIST,
  USERS,
  LINK_USERS_TO_ROLE,
  UNLINK_USERS_FROM_ROLE,
  ADD_ROLE
} from "./../../PlatformQueries";
import { History } from "history";

const columns = [
  {
    title: "Type",
    className: "access-control-column-title",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "Created by",
    className: "access-control-column-title",
    dataIndex: "createdBy",
    key: "createdBy"
  },
  {
    title: "Created on",
    className: "access-control-column-title",
    dataIndex: "createdOn",
    key: "createdOn"
  }
];

interface AccessControlProps extends ApolloProviderProps<any> {
  history: History;
}

interface AccessControlState {
  roleList: any;
  isDuplicateModalOpen: boolean;
  isNewRoleModalOpen: boolean;
  isAddUsersToRoleModalOpen: boolean;
  newRoleName: String;
  addUsersToDuplicateRoles: boolean;
  columns: any;
  allUsers: any;
  selectedRoleIndex: any;
  isFetching: boolean;
  isLoading: boolean;
  organizationId?: string;
  isRemoveUsersToRoleModalOpen: boolean;
}

class RoleList extends React.Component<AccessControlProps, AccessControlState> {
  constructor(props: AccessControlProps) {
    super(props);
    this.state = {
      roleList: [],
      allUsers: [],
      isDuplicateModalOpen: false,
      isNewRoleModalOpen: false,
      isAddUsersToRoleModalOpen: false,
      isRemoveUsersToRoleModalOpen: false,
      newRoleName: "",
      addUsersToDuplicateRoles: false,
      selectedRoleIndex: null,
      isFetching: false,
      isLoading: true,
      columns: [
        {
          title: "Role",
          className: "access-control-column-title",

          dataIndex: "role",
          key: "role",
          render: (text, record, index) => (
            <span
              onClick={() => {
                let selectedRoleId = this.state.roleList[index].key;
                return this.props.history.push({
                  pathname: `/core/access-control/${selectedRoleId}/edit`,
                  state: {
                    roleId: selectedRoleId
                  }
                });
              }}
            >
              <a>{text}</a>
            </span>
          )
        },
        ...columns,
        {
          title: "User",
          className: "access-control-column-title",

          key: "user",
          dataIndex: "user",
          render: (user, parent) => {
            return (
              <span className="access-control-table-content">
                <div style={{ display: "flex" }}>
                  <span
                    onClick={() => {
                      this.setState({
                        isRemoveUsersToRoleModalOpen: true,
                        selectedRoleIndex: parent.roleIndex
                      });
                    }}
                    style={{ minWidth: 40 }}
                  >
                    <a>{user && user.length}</a>
                  </span>
                  <span
                    onClick={() => {
                      this.setState({
                        isAddUsersToRoleModalOpen: true,
                        selectedRoleIndex: parent.roleIndex
                      });
                    }}
                    style={{ minWidth: 40 }}
                  >
                    <a className="access-control-column-title"> +Add User</a>
                  </span>
                </div>
              </span>
            );
          }
        },
        {
          title: "",
          key: "action",
          render: ({ action, key }) => {
            return (
              <span
                onClick={() => {
                  this.setState({ isDuplicateModalOpen: true });
                }}
              >
                {/* <Icon type="diff" /> */}
                <DuplicateIcon />
              </span>
            );
          }
        }
      ]
    };
  }

  UNSAFE_componentWillMount() {
    this.getRolesList();
  }

  getRolesList = () => {
    const jwtToken: any = localStorage.getItem("jwt");
    const { org_id }: any = jwt.decode(jwtToken);
    this.props.client
      .query({
        query: ROLES_LIST,
        variables: {},
        fetchPolicy: "network-only"
      })
      .then(rolesResponse => {
        this.populateAccessControlTableData(rolesResponse.data.roles);
      });

    this.props.client
      .query({
        query: USERS,
        variables: { organizationId: org_id },
        fetchPolicy: "network-only"
      })
      .then(allUsers => {
        this.setState({
          allUsers: allUsers.data.users.data,
          organizationId: org_id
        });
      });
  };

  populateAccessControlTableData = roles => {
    let roleList = [];
    roles.map((role, index) => {
      roleList.push({
        roleIndex: index,
        key: role.id,
        role: role.name,
        type: "--",
        createdBy: role.createdBy,
        createdOn: moment
          .unix(role.createdTime)
          .utc()
          .format("LLLL"),
        user: role.users
      });
    });
    this.setState({ roleList, isLoading: false });
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

  onCloseModal = () => {
    this.setState({
      isDuplicateModalOpen: false,
      isNewRoleModalOpen: false,
      isAddUsersToRoleModalOpen: false,
      isRemoveUsersToRoleModalOpen: false,
      selectedRoleIndex: null
    });
  };

  onCreateRole = data => {
    this.setState({ isFetching: true }, () => {
      this.props.client
        .mutate({
          mutation: ADD_ROLE,
          variables: {
            input: { name: data.newRoleName }
          }
        })
        .then(newRoleResponse => {
          this.setState(
            {
              isFetching: false
            },
            () => {
              this.props.history.push({
                pathname: `/core/access-control/${newRoleResponse.data.addRole.id}/edit`,
                state: {
                  roleId: newRoleResponse.data.addRole.id
                }
              });
            }
          );
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  onLinkUserToRole = (userIds, roleId) => {
    this.setState({ isLoading: true }, () => {
      this.props.client
        .mutate({
          mutation: LINK_USERS_TO_ROLE,
          variables: {
            roleId: roleId,
            userIds: userIds
          }
        })
        .then(linkUserResponse => {
          //right now the response coming from linkUserToRole api doesnt contain all roles,
          // this.populateAccessControlTableData(
          //   linkUserResponse.data.linkUserToRole.roles
          // );

          this.getRolesList();
          this.onCloseModal();
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  onUnlinkUsersToRole = (userIds, roleId) => {
    this.setState({ isLoading: true }, () => {
      this.props.client
        .mutate({
          mutation: UNLINK_USERS_FROM_ROLE,
          variables: {
            roleId: roleId,
            userIds: userIds
          }
        })
        .then(unlinkUserResponse => {
          //right now the response coming from linkUserToRole api doesnt contain all roles,
          // this.populateAccessControlTableData(
          //   linkUserResponse.data.linkUserToRole.roles
          // );

          this.setState({ isLoading: true }, () => {
            this.getRolesList();
            this.onCloseModal();
          });

          // this.getRolesList();
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  render() {
    let {
      isDuplicateModalOpen,
      isNewRoleModalOpen,
      isAddUsersToRoleModalOpen,
      isRemoveUsersToRoleModalOpen,
      roleList,
      isLoading
    } = this.state;

    let modalDetails = {
      headerTitle: "Add New Role",
      buttonLabel: "CREATE",
      type: "newRole"
    };

    if (isDuplicateModalOpen) {
      modalDetails = {
        headerTitle: "Duplicate Role",
        buttonLabel: "CREATE",
        type: "duplicateRole"
      };
    }

    return (
      <div className="access-control nohoverTableWrapper">
        <div className="display-flex justify-space-between">
          <div className="fontSize-header margin-seperator">Access Control</div>
          <Button
            disabled={false}
            type="primary"
            className="submit-button"
            size="large"
            onClick={() => {
              this.setState({
                isNewRoleModalOpen: !this.state.isNewRoleModalOpen
              });
            }}
          >
            ADD NEW ROLE
          </Button>
        </div>
        <Table
          columns={this.state.columns}
          dataSource={roleList}
          // loading={!roleList.length}
          loading={isLoading}

          // loading={false}
        />
        <CreateRoleModal
          modalDetails={modalDetails}
          visible={isDuplicateModalOpen || isNewRoleModalOpen}
          onSubmit={this.onCreateRole}
          onClose={this.onCloseModal}
          loading={this.state.isFetching}
        />
        <AddOrRemoveUsersToRoleModal
          type="addUsers"
          allUsers={this.state.allUsers}
          roleList={roleList}
          visible={isAddUsersToRoleModalOpen}
          onChange={this.onChange}
          selectedRoleIndex={this.state.selectedRoleIndex}
          onSubmit={this.onLinkUserToRole}
          onClose={this.onCloseModal}
          isLoading={isLoading}
        />
        <AddOrRemoveUsersToRoleModal
          type="removeUsers"
          roleList={roleList}
          visible={isRemoveUsersToRoleModalOpen}
          onChange={this.onChange}
          selectedRoleIndex={this.state.selectedRoleIndex}
          onSubmit={this.onUnlinkUsersToRole}
          onClose={this.onCloseModal}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

export default withApollo(RoleList);
