import * as React from 'react';
import {
  Col,
  Row,
  message,
  Timeline,
  Empty,
  Modal,
  Spin,
  Tooltip,
  Input,
  Icon,
  Button,
} from 'antd';
import AppListCard from './AppListCard';
import {
  GET_ALL_APPS_OF_ORGANIZATION,
  GENERATE_API_KEY,
  DELETE_APP,
} from 'walkin-core/src/PlatformQueries';
import * as jwt from 'jsonwebtoken';
import './app.css';
import { withApollo, ApolloProviderProps } from 'react-apollo';
import { RouteChildrenProps } from 'react-router';
// import { nearXClient as client } from "../../nearXApollo";
const { TextArea } = Input;

// const text = <code></code>

interface ApplistProps extends RouteChildrenProps, ApolloProviderProps<any> {}

interface ApplistState {
  visible?: boolean;
  appsList?: Array<any>;
  spin?: boolean;
}

class AppsList extends React.Component<ApplistProps, ApplistState> {
  constructor(props: ApplistProps) {
    super(props);
    this.state = {
      visible: false,
      appsList: [],
      spin: false,
    };
  }

  addApp = () => {
    this.props.history.push('/refinex/apps/create');
  };

  test = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  // activateApp = (appId) => {
  //   client.mutate({
  //     mutation: GENERATE_API_KEY,
  //     variables: {id:appId }
  //   }).then( res => {
  //     console.log(res.data)

  //    sessionStorage.setItem('token', JSON.stringify(res.data.generateAPIKey.api_key))

  //     // this.setState({appsList:apps})

  //   }).catch(err=>{console.log("Failed"+err)})
  // }

  UNSAFE_componentWillMount() {
    this.setState({ spin: true });
    const jwtData = jwt.decode(localStorage.getItem('jwt'));

    if (jwtData) {
      this.getAppsList(jwtData);
    } else {
      this.setState({ spin: false });
      console.log('Error getting JwtData');
    }
  }

  getAppsList = (jwtData: any) => {
    this.props.client
      .query({
        query: GET_ALL_APPS_OF_ORGANIZATION,
        variables: { id: jwtData.org_id },
        fetchPolicy: 'no-cache',
      })
      .then(res => {
        let apps: any = [];
        let org = res.data.organization;

        function recOrg(org: any, apps: any) {
          if (org && org.applications)
            org.applications.map((app: any) =>
              apps.push({
                id: app.id,
                org_id: org.id,
                appName: app.name,
                industry: org.name,
                platform: app.platform,
                discription: app.description,
              })
            );
          if (org && org.children)
            org.children.map((ch: any) => recOrg(ch, apps));
        }

        recOrg(org, apps);
        this.setState({ appsList: apps, spin: false });
      })
      .catch(err => {
        this.setState({ spin: false });
        console.log('Failed to get User Details' + err);
      });
  };

  deleteApp = (id: any) => {
    this.props.client
      .mutate({
        mutation: DELETE_APP,
        variables: { id: id },
      })
      .then(res => {
        // this.getAppsList(jwt.decode(localStorage.getItem("jwt")))
      })
      .catch(err => {
        this.setState({ spin: false });
        console.log('Failed to Delete App' + err);
      });
  };

  genereteToken = (i: any, appId: any) => {
    this.props.client
      .mutate({
        mutation: GENERATE_API_KEY,
        variables: { id: appId, env: 'PROD' },
      })
      .then(res => {
        let { appsList } = this.state;
        appsList[i].appKey = res.data.generateAPIKey.api_key;
        this.setState({ appsList });
      })
      .catch(err => {
        console.log('Failed' + err);
      });
  };

  render() {
    const data = this.state.appsList ? this.state.appsList : [];
    return (
      <div
        style={{
          minHeight: '100vh',
        }}
      >
        <Row className="headerRow1">
          <div style={{ width: '100%' }}>
            <span style={{ fontSize: 25 }}>Apps</span>
            <div style={{ float: 'right', flexFlow: 'right' }}>
              <Button
                style={{ margin: 0 }}
                onClick={() => this.addApp()}
                className="buttonPrimary"
              >
                Create Application
              </Button>
            </div>
          </div>
        </Row>
        <br />

        {this.state.spin ? (
          <div>
            <br /> <br /> <br /> <br />
            <div className="divCenter">
              <Spin size="large" />
            </div>
            <br /> <br /> <br />
          </div>
        ) : this.state.appsList.length ? (
          <div
            style={{
              marginTop: '10px',
            }}
          >
            <Row className="placeTableHeaders">
              <Col span={6}>Name</Col>
              <Col span={6}>Description</Col>
              <Col span={6}>Key</Col>
              <Col span={1} />
            </Row>
            {this.state.appsList.map((item, i) => (
              <AppListCard
                genereteToken={this.genereteToken}
                history={this.props.history}
                deleteApp={this.deleteApp}
                test={this.test}
                key={i}
                index={i}
                data={item}
              />
            ))}
          </div>
        ) : (
          <div>
            {/* <Empty style={{ margin: 50 }} /> */}

            <div style={{ margin: 80, fontSize: 25 }}>
              <div className="divCenter">
                <div>No Apps Found</div>
              </div>
              <div className="divCenter">
                <Button
                  onClick={() => this.addApp()}
                  style={{ margin: 22, fontSize: 18 }}
                  className="buttonPrimary"
                >
                  Create New App
                </Button>
                {/* <div style={{margin:10, fontSize:20}}>Create A new Place</div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withApollo(AppsList);
