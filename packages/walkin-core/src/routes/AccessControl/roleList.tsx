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
  Switch
} from "antd";
import "./style.css";
import CreateRoleModal from "./createRoleModal";
import AddUsersToRoleModal from "./addUsersToRoleModal";
import DuplicateIcon from "./../../containers/Icons/duplicate";

import { withApollo, ApolloProviderProps } from "react-apollo";
import {
  ROLES_LIST,
  USERS,
  LINK_USER_TO_ROLE,
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
      newRoleName: "",
      addUsersToDuplicateRoles: false,
      selectedRoleIndex: null,
      isFetching: false,
      columns: [
        {
          title: "Role",
          className: "access-control-column-title",

          dataIndex: "role",
          key: "role",
          render: (text, record, index) => (
            <span
              onClick={() => {
                console.log(text, record, index);
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
              <span
                className="access-control-table-content"
                onClick={() => {
                  console.log(user, parent);

                  this.setState({
                    isAddUsersToRoleModalOpen: true,
                    selectedRoleIndex: parent.roleIndex
                  });
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ minWidth: 40 }}>
                    {user ? user.length : "--"}
                  </span>
                  <a className="access-control-column-title"> +Add User</a>
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
    this.props.client
      .query({
        query: ROLES_LIST,
        variables: {},
        fetchPolicy: "network-only"
      })
      .then(rolesResponse => {
        console.log(rolesResponse);
        this.populateAccessControlTableData(rolesResponse.data.roles);
      });

    this.props.client
      .query({
        query: USERS,
        variables: {},
        fetchPolicy: "network-only"
      })
      .then(allUsers => {
        console.log(allUsers);

        this.setState({ allUsers: allUsers.data.users });
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
        createdBy: "--",
        createdOn: "--",
        user: role.users
      });
    });
    this.setState({ roleList });
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
      selectedRoleIndex: null
    });
  };

  onCreateRole = data => {
    console.log(data);
    this.setState({ isFetching: true }, () => {
      this.props.client
        .mutate({
          mutation: ADD_ROLE,
          variables: {
            input: { name: data.newRoleName }
          }
        })
        .then(newRoleResponse => {
          console.log(newRoleResponse);
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

  onLinkUserToRole = (userId, roleId) => {
    this.props.client
      .mutate({
        mutation: LINK_USER_TO_ROLE,
        variables: {
          roleId: roleId,
          userId: userId
        }
      })
      .then(linkUserResponse => {
        console.log(linkUserResponse);
        if (linkUserResponse.data.linkUserToRole.id) {
          //right now the response coming from linkUserToRole api doesnt contain all roles,
          // this.populateAccessControlTableData(
          //   linkUserResponse.data.linkUserToRole.roles
          // );
          this.getRolesList();
          this.onCloseModal();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let {
      isDuplicateModalOpen,
      isNewRoleModalOpen,
      isAddUsersToRoleModalOpen,
      roleList
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
          loading={!roleList.length}
          // loading={false}
        />
        <CreateRoleModal
          modalDetails={modalDetails}
          visible={isDuplicateModalOpen || isNewRoleModalOpen}
          onSubmit={this.onCreateRole}
          onClose={this.onCloseModal}
          loading={this.state.isFetching}
        />
        <AddUsersToRoleModal
          allUsers={this.state.allUsers}
          roleList={roleList}
          modalDetails={modalDetails}
          visible={isAddUsersToRoleModalOpen}
          onChange={this.onChange}
          selectedRoleIndex={this.state.selectedRoleIndex}
          onSubmit={this.onLinkUserToRole}
          onClose={this.onCloseModal}
        />
      </div>
    );
  }
}

export default withApollo(RoleList);
