import React, { Component, createRef, useEffect } from "react";
import "./style.css";

import { Modal, Input, Button, Switch, Select, Table, Icon } from "antd";
const { Option } = Select;

interface addUsersToRoleModalProps {
  visible: boolean;
  modalDetails: any;
  onClose: any;
  onSubmit: any;
  roleList: any;
  allUsers: any;
  selectedRoleIndex: any;
}

interface addUsersToRoleModalState {
  addUsersToDuplicateRoles: boolean;
  selectedRowKeys: any;
  loading: boolean;
  searchText: String;
  searchedColumn: String;
  selectedRoleIndex: number;
}

export default class extends React.Component<
  addUsersToRoleModalProps,
  addUsersToRoleModalState
> {
  private searchInput: React.RefObject<Input>;
  constructor(props: addUsersToRoleModalProps) {
    super(props);
    this.searchInput = React.createRef();
    this.state = {
      addUsersToDuplicateRoles: false,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      searchText: "",
      searchedColumn: "",
      selectedRoleIndex: this.props.selectedRoleIndex
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

  //   this.state.searchedColumn === dataIndex ? (
  //     <Highlighter
  //       highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
  //       searchWords={[this.state.searchText]}
  //       autoEscape
  //       textToHighlight={text.toString()}
  //     />
  //   ) : (
  //     text
  //   )

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
        prevState: Readonly<addUsersToRoleModalState>,
        props: Readonly<addUsersToRoleModalProps>
      ) => {
        return {
          ...prevState,
          [type]: value
        };
      }
    );
  };

  //   start = () => {
  //     this.setState({ loading: true });
  //     // ajax request after empty completing
  //     setTimeout(() => {
  //       this.setState({
  //         selectedRowKeys: [],
  //         loading: false
  //       });
  //     }, 1000);
  //   };

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    let { modalDetails, visible, onClose, roleList } = this.props;
    let {
      addUsersToDuplicateRoles,
      loading,
      selectedRowKeys,
      selectedRoleIndex
    } = this.state;

    //tableData

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
        filters: [
          {
            text: "Test",
            value: "test"
          },
          {
            text: "CCD",
            value: "CCD"
          }
        ],
        onFilter: (value, record) => {
          return record.name === value;
        }
      }
    ];

    let usersLinkedToCurrentRole = [];
    const data = [];

    if (roleList.length && roleList[selectedRoleIndex].user)
      roleList[selectedRoleIndex].user.map((linkedUser, index) => {
        usersLinkedToCurrentRole.push(linkedUser.id);
      });

    this.props.allUsers
      .filter((allUser, alluserIndex) => {
        return !usersLinkedToCurrentRole.includes(allUser.id);
      })
      .map((user, userIndex) => {
        let currentRolesOfUser = "";
        user.roles.map((role, rolesIndex) => {
          if (rolesIndex === user.roles.length - 1)
            currentRolesOfUser += `${role.name}`;
          else {
            currentRolesOfUser += `${role.name}, `;
          }
        });

        data.push({
          key: user.id,
          name: user.firstName,
          email: user.email,
          role: currentRolesOfUser
        });
      });

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
        maskClosable={true}
        onCancel={() => {
          onClose();
        }}
        footer={null}
        closable={false}
        title={
          <div className="display-flex justify-space-between">
            Add users to roles
            <Button
              disabled={!selectedRowKeys.length}
              type="primary"
              className="submit-button"
              size="large"
              onClick={() => {
                this.props.onSubmit(
                  selectedRowKeys[0],
                  roleList[selectedRoleIndex].key
                );
              }}
            >
              Assign
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
              defaultValue={
                roleList.length ? roleList[selectedRoleIndex].role : null
              }
              style={{ width: "100%" }}
              onChange={(value: any) => {
                this.setState({ selectedRoleIndex: value });
              }}
              placeholder={"select a role"}
            >
              {roleList.map((role, index) => {
                console.log(role);

                return <Option value={role.roleIndex}>{role.role}</Option>;
              })}
            </Select>
          </div>
          <Table
            loading={!data.length}
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
