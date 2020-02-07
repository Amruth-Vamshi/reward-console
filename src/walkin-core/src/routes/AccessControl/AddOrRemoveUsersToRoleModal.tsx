import React from "react";
import "./style.css";

import { Modal, Input, Button, Select, Table, Icon } from "antd";
const { Option } = Select;

interface addOrRemoveUsersToRoleModalProps {
  visible: boolean;
  onClose: any;
  onSubmit: any;
  roleList: any;
  allUsers?: any;
  selectedRoleIndex: any;
  onChange: any;
  type: string;
  isLoading: boolean;
}

interface addOrRemoveUsersToRoleModalState {
  selectedRowKeys: any;
  loading: boolean;
  searchText: String;
  searchedColumn: String;
}

export default class extends React.Component<
  addOrRemoveUsersToRoleModalProps,
  addOrRemoveUsersToRoleModalState
> {
  private searchInput: React.RefObject<Input>;
  constructor(props: addOrRemoveUsersToRoleModalProps) {
    super(props);
    this.searchInput = React.createRef();
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      searchText: "",
      searchedColumn: ""
    };
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={this.searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.current.select());
      }
    },
    render: text => text
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  onChange = (type: string, value: any) => {
    this.setState(
      (
        prevState: Readonly<addOrRemoveUsersToRoleModalState>,
        props: Readonly<addOrRemoveUsersToRoleModalProps>
      ) => {
        return {
          ...prevState,
          [type]: value
        };
      }
    );
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  populateRolesAssignedToRoles = user => {
    let userRoles = "";
    user.roles &&
      user.roles.map((role, rolesIndex) => {
        if (rolesIndex === user.roles.length - 1) userRoles += `${role.name}`;
        else {
          userRoles += `${role.name}, `;
        }
      });
    return userRoles;
  };

  render() {
    let {
      visible,
      onClose,
      roleList,
      selectedRoleIndex,
      type,
      isLoading
    } = this.props;
    let { selectedRowKeys } = this.state;

    if (selectedRoleIndex === null && visible === false) {
      return null;
    }

    let rolesFilter = [];
    roleList.map((roleItem, roleIndex) => {
      rolesFilter.push({
        text: roleItem.role,
        value: roleItem.role
      });
    });

    const columns = [
      {
        title: "Name",
        className: "access-control-column-title",
        dataIndex: "name",
        key: "name",
        width: "20%",
        ...this.getColumnSearchProps("name")
      },
      {
        title: "Email",
        className: "access-control-column-title",
        dataIndex: "email",
        key: "email",
        width: "30%"
      },
      {
        title: "Role",
        className: "access-control-column-title",
        dataIndex: "role",
        key: "role",
        filters: rolesFilter,
        onFilter: (value, record) => {
          return record.role.includes(value);
        }
      }
    ];

    let usersLinkedToCurrentRole = [];
    const data = [];

    let modalDetails = {
      headerTitle: "Users",
      buttonLabel: "Remove",
      type: "removeUsers"
    };

    if (type === "removeUsers") {
      if (roleList.length && roleList[selectedRoleIndex].user)
        roleList[selectedRoleIndex].user.map((linkedUser, index) => {
          let currentRolesOfUser = this.populateRolesAssignedToRoles(
            linkedUser
          );
          data.push({
            key: linkedUser.id,
            name: linkedUser.firstName,
            email: linkedUser.email,
            role: currentRolesOfUser
          });
        });
    }

    if (type === "addUsers") {
      modalDetails = {
        headerTitle: "Users",
        buttonLabel: "Remove",
        type: "removeUsers"
      };
      modalDetails = {
        headerTitle: "Add users to roles",
        buttonLabel: "Assign",
        type: "addUsers"
      };

      if (roleList.length && roleList[selectedRoleIndex].user)
        roleList[selectedRoleIndex].user.map((linkedUser, index) => {
          usersLinkedToCurrentRole.push(linkedUser.id);
        });

      this.props.allUsers
        .filter((allUser, alluserIndex) => {
          return !usersLinkedToCurrentRole.includes(allUser.id);
        })
        .map((user, userIndex) => {
          let currentRolesOfUser = this.populateRolesAssignedToRoles(user);
          data.push({
            key: user.id,
            name: user.firstName,
            email: user.email,
            role: currentRolesOfUser
          });
        });
    }

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <Modal
        width={700}
        className="access-control-modal-styles"
        visible={visible}
        destroyOnClose={true}
        maskClosable={true}
        onCancel={() => {
          onClose();
        }}
        footer={null}
        closable={false}
        title={
          <div className="display-flex justify-space-between">
            {modalDetails.headerTitle}
            <Button
              disabled={!selectedRowKeys.length}
              type="primary"
              loading={isLoading}
              className="submit-button"
              size="large"
              onClick={() => {
                this.props.onSubmit(
                  selectedRowKeys,
                  roleList[selectedRoleIndex].key
                );
              }}
            >
              {modalDetails.buttonLabel}
            </Button>
          </div>
        }
      >
        <div className="modal-children-wrapper">
          <div className="duplicate-role-name-form margin-children-seperator">
            <div className="InputLabel">
              Select a role<span className="requiredFieldRedColor">*</span>
            </div>
            <Select
              style={{ width: "100%" }}
              value={roleList.length ? roleList[selectedRoleIndex].role : null}
              onChange={(value: any) => {
                this.props.onChange("selectedRoleIndex", value);
              }}
              placeholder={"select a role"}
            >
              {roleList.map((role, index) => {
                return (
                  <Option key={index} value={role.roleIndex}>
                    {role.role}
                  </Option>
                );
              })}
            </Select>
          </div>
          <Table
            loading={isLoading}
            size="small"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 300 }}
          />
        </div>
      </Modal>
    );
  }
}
