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
import CreateRoleModal from "./createRoleModal";
import { withApollo, ApolloProviderProps } from "react-apollo";
import { ROLES_LIST } from "./../../PlatformQueries";
import { History } from "history";

const columns = [
  {
    title: "Entities",
    className: "access-control-column-title",
    dataIndex: "entities",
    key: "entities",
    width: "50%"
  },
  {
    title: "Create",
    className: "access-control-column-title",
    dataIndex: "create",
    key: "create",
    width: "10%",
    render: (text: any, record: any) => {
      return <Checkbox />;
    }
  },
  {
    title: "View",
    className: "access-control-column-title",
    dataIndex: "view",
    key: "view",
    width: "10%",
    render: (text: any, record: any) => {
      return <Checkbox />;
    }
  },
  {
    title: "Update",
    className: "access-control-column-title",
    dataIndex: "update",
    key: "update",
    width: "10%",
    render: (text: any, record: any) => {
      return <Checkbox />;
    }
  },
  {
    title: "Delete",
    className: "access-control-column-title",
    dataIndex: "delete",
    key: "delete",
    width: "10%",
    render: (text: any, record: any) => {
      return <Checkbox />;
    }
  },
  {
    title: "List",
    className: "access-control-column-title",
    dataIndex: "list",
    width: "10%",
    key: "list",
    render: (text: any, record: any) => {
      return <Checkbox />;
    }
  }
];

const data = [
  {
    key: 1,
    entities: "John Brown sr.",
    children: [
      {
        key: 11,
        entities: "John Brown"
      },
      {
        key: 12,
        entities: "John Brown jr.",
        children: [
          {
            key: 121,
            entities: "Jimmy Brown"
          }
        ]
      },
      {
        key: 13,
        entities: "Jim Green sr.",
        children: [
          {
            key: 131,
            entities: "Jim Green",
            children: [
              {
                key: 1311,
                entities: "Jim Green jr."
              },
              {
                key: 1312,
                entities: "Jimmy Green sr."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 2,
    entities: "Joe Black"
  }
];

interface AccessControlProps extends ApolloProviderProps<any> {
  //   history: History;
}

interface AccessControlState {
  //   isDuplicateModalOpen: boolean;
  //   isNewRoleModalOpen: boolean;
  //   newRoleName: String;
  //   addUsersToDuplicateRoles: boolean;
}

class EditRole extends React.Component<AccessControlProps, AccessControlState> {
  constructor(props: AccessControlProps) {
    super(props);
    this.state = {
      //   isDuplicateModalOpen: false,
      //   isNewRoleModalOpen: false,
      //   newRoleName: "",
      //   addUsersToDuplicateRoles: false
    };
  }

  //   UNSAFE_componentWillMount() {
  //     this.props.client
  //       .query({
  //         query: ROLES_LIST,
  //         variables: {},
  //         fetchPolicy: "network-only"
  //       })
  //       .then(rulesResponse => {
  //         console.log(rulesResponse);
  //       });
  //   }

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

  render() {
    // let {
    //   isDuplicateModalOpen,
    //   isNewRoleModalOpen,
    //   addUsersToDuplicateRoles
    // } = this.state;

    return (
      <div className="access-control">
        <div className="display-flex justify-space-between">
          <div className="fontSize-header margin-seperator">Role Editor</div>
          <Button
            disabled={false}
            type="primary"
            className="submit-button"
            size="large"
            onClick={() => {}}
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
            defaultValue={""}
            onChange={e => {
              this.onChange("newRoleName", e.target.value);
            }}
          />
        </div>
        <Table
          columns={columns}
          //   rowSelection={rowSelection}
          dataSource={data}
        />
        ,
      </div>
    );
  }
}

export default withApollo(EditRole);
