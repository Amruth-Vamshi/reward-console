import * as React from "react";
import { Widget } from "walkin-components";
import { Tabs, Modal, Form, Input, Button, message } from "antd";
import { data, data1 } from "./data";
import UserInfo from "./UserInfo";
import * as jwt from "jsonwebtoken";
import { withApollo, ApolloProviderProps } from "react-apollo";
import "./users.css";
import { GET_ALL_USERS_OF_ORGANIZATION } from "../../PlatformQueries";
import CreateUser from "./CreateUser";

const TabPane = Tabs.TabPane;

interface UsersProps extends ApolloProviderProps<any> {
  spin?: any;
  userList?: any;
}

interface UsersState {
  visible?: boolean;
  spin?: boolean;
  loading?: boolean;
  errors?: any;
  userList?: Array<any>;
  userId: any;
  org_id: any;
}

class Users extends React.Component<UsersProps, UsersState> {
  constructor(props: UsersProps) {
    super(props);
    this.state = {
      visible: false,
      spin: false,
      loading: false,
      errors: {},
      userList: [],
      userId: "",
      org_id: ""
    };
  }

  UNSAFE_componentWillMount() {
    this.getUsers();
  }

  getUsers = () => {
    const jwtToken = localStorage.getItem("jwt");
    const { id, org_id }: any = jwt.decode(jwtToken);
    this.setState({ spin: true, userId: id, org_id });

    if (org_id) {
      this.props.client
        .query({
          query: GET_ALL_USERS_OF_ORGANIZATION,
          variables: { id: org_id },
          fetchPolicy: "network-only"
        })
        .then(res => {
          let users: Array<any> = [];
          let org = res.data.organization;

          function recOrg(org: any, users: Array<any>) {
            if (org && org.users)
              org.users.map((user: any) => {
                const userObject: any = {
                  id: user.id,
                  org_id: org.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  orgLevel: org.name,
                  role: user.roles
                    ? user.roles.name
                      ? user.roles.name
                      : ""
                    : "",
                  status: user.status,
                  email: user.email,
                  Assign: false,
                  creator: "ADMIN"
                };
                users.push(userObject);
              });
            if (org && org.children)
              org.children.map((ch: any) => recOrg(ch, users));
          }

          recOrg(org, users);
          this.setState({ userList: users, spin: false });
        })
        .catch(err => {
          this.setState({ spin: false });
          message.error("ERROR");

          console.log("Failed to get User Details" + err);
        });
    } else {
      this.setState({ spin: false });
      console.log("Error getting JwtData");
    }
  };

  showModal = () => this.setState({ visible: true });
  handleCancel = () => this.setState({ visible: false });

  userCreated = () => {
    this.setState({ visible: false });
    this.getUsers();
  };

  render() {
    return (
      <div>
        <Widget
          title={<p style={{ fontSize: 23 }}>User Info</p>}
          styleName="gx-card-tabs UsersTabs"
          extra={
            <Button onClick={() => this.showModal()} type="primary">
              {" "}
              Create User{" "}
            </Button>
          }
        >
          <hr style={{ marginTop: 0 }} />
          {/* <Tabs
            defaultActiveKey="1"
            // activeKey={this.state.tab}            
            onChange={c => this.onTabChange(c)}
          >
            <TabPane tab="NearX" key="1">
              <UserInfo data={data} />
            </TabPane>
            <TabPane tab="HyperX" key="2">
              <UserInfo data={data1} />
            </TabPane>
          </Tabs> */}

          <UserInfo spin={this.state.spin} data={this.state.userList} />
        </Widget>

        <Modal
          width="450px"
          key="model"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          title={null}
          footer={null}
        >
          <CreateUser
            userCreated={this.userCreated}
            org_id={this.state.org_id}
            handleCancel={this.handleCancel}
          />
        </Modal>
      </div>
    );
  }
}

export default withApollo(Users);
