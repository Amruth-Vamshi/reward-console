import React, { Component } from "react";
import { Col, Row, Pagination, Card, Timeline, Modal, Spin, Tooltip, Input, Icon, Button } from "antd";
import AppListCard from "./AppListCard";
import { GET_ALL_APPS_OF_ORGANIZATION, GENERATE_API_KEY } from "@walkinsole/walkin-components/src/PlatformQueries";
import jwt from "jsonwebtoken";
import { withApollo } from "react-apollo";
// import { nearXClient as client } from "../../nearXApollo";
const { TextArea } = Input;

// const text = <code></code>

class AppsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      appsList: [],
      spin: false
    };
  }

  addApp = () => {
    this.props.history.push(`${this.props.match.url}/create`);
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

  //    localStorage.setItem('token', JSON.stringify(res.data.generateAPIKey.api_key))

  //     // this.setState({appsList:apps})

  //   }).catch(err=>{console.log("Failed"+err)})
  // }

  componentWillMount() {

    this.setState({ spin: true });
    const jwtData = jwt.decode(localStorage.getItem("jwt"));

    if (jwtData) {
      this.props.client
        .query({
          query: GET_ALL_APPS_OF_ORGANIZATION,
          variables: { id: jwtData.org_id },
          fetchPolicy: "network-only"
        })
        .then(res => {
          console.log(res.data);
          var apps = [];
          let org = res.data.organization;

          function recOrg(org, apps) {
            if (org && org.applications)
              org.applications.map(app =>
                apps.push({
                  id: app.id,
                  org_id: org.id,
                  appName: app.name,
                  industry: org.name,
                  platform: app.platform,
                  discription: app.description
                })
              );
            if (org && org.children) org.children.map(ch => recOrg(ch, apps));
          }

          recOrg(org, apps);
          console.log(apps);

          this.setState({ appsList: apps, spin: false });
        })
        .catch(err => {
          this.setState({ spin: false });
          console.log("Failed to get User Details" + err);
        })
    } else {
      this.setState({ spin: false });
      console.log("Error getting JwtData");
    }
  }

  genereteToken = (i, appId) => {
    this.props.client
      .mutate({
        mutation: GENERATE_API_KEY,
        variables: { id: appId }
      })
      .then(res => {
        console.log(res.data);
        let { appsList } = this.state;
        appsList[i].appKey = res.data.generateAPIKey.api_key;
        this.setState({ appsList });
      })
      .catch(err => {
        console.log("Failed" + err);
      });
  };

  render() {
    // const data = this.state.appsList?this.state.appsList:[]
    // console.log(data)
    return (
      <div>
        <Row className="headerRow1">
          <div style={{ width: "100%" }}>
            <span style={{ fontSize: 25 }}>Apps</span>
            <div style={{ float: "right", flexFlow: "right" }}>
              <Button
                style={{ margin: 0 }}
                onClick={() => this.addApp()}
                className="buttonPrimary"
              >
                Add App
                </Button>
            </div>
          </div>
        </Row>
        <br />

        {this.state.spin ? (
          <div> <br />  <br /> <br />  <br />{" "}
            <div className="divCenter">  <Spin size="large" /> </div> <br /> <br /> <br />  </div>) :
          this.state.appsList.length ? (
            <div>
              <Row className="placeTableHeaders">
                <Col span={4}>App Name</Col>
                <Col sm={4} md={4} lg={4} xl={4} xxl={5}>
                  Industry
                </Col>
                <Col span={2}>Platform</Col>
                <Col span={5}>Description</Col>
                <Col span={5}>Authentication Token</Col>
                <Col sm={3} md={3} lg={3} xl={3} xxl={2}>
                  Test
                </Col>
                <Col span={1} />
              </Row>
              {this.state.appsList.map((item, i) => (
                <AppListCard
                  genereteToken={this.genereteToken}
                  history={this.props.history}
                  test={this.test}
                  key={i}
                  index={i}
                  data={item}
                />
              ))}
            </div>
          ) : (
              <div style={{ margin: 100, fontSize: 25 }}>
                <div className="divCenter">No Apps Present</div>
                <div className="divCenter">
                  <Button
                    style={{ margin: 30, fontSize: 18 }}
                    onClick={() => this.addApp()}
                    className="buttonPrimary"
                  >
                    Create New App
                </Button>
                  {/* <div style={{margin:10, fontSize:20}}>Create A new Place</div> */}
                </div>
              </div>
            )}
        <Modal
          width="750px"
          key="model"
          title="Test Your App"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div>
            <Row>
              <Col span={16}>
                <div>
                  <div
                    style={{ marginBottom: 3, fontSize: 15 }}
                    className="gx-text-primary gx-pointer"
                  >
                    <i>How to integrate NearX with your App?</i>
                  </div>
                  <div>
                    Download the Android SDK and and paste the API key in place
                    of "APP_AUTH_KEY" in SDK. Testing geofence is inactive now.
                    </div>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ overflow: "hidden", textAlign: "right" }}>
                  <div style={{ textAlign: "center" }}>
                    <a
                      target="_blank"
                      href="https://drive.google.com/open?id=1Xa2jX0GUqjpKGw-nAUHw2_fKpsReeAPx"
                    >
                      <Button
                        onClick={this.handleSubmit}
                        loading={this.state.loading}
                        className="buttonPrimary"
                        style={{ margin: "0px 30px 10px 20px" }}
                      >
                        Download SDK
                        </Button>{" "}
                    </a>
                    <div style={{}}>NearX sdk file (213kb)</div>
                  </div>
                </div>
              </Col>
            </Row>
            <br />
            <i>Testing feature will be coming Soon....</i>

            <div style={{ opacity: 0.5 }}>
              <Row style={{ marginTop: 30 }}>
                <Col span={14}>
                  <TextArea
                    suffix={
                      <Tooltip title="Copy">
                        <Icon type="copy" onClick={() => this.copy()} theme="twoTone" />
                      </Tooltip>
                    }
                    placeholder="Autosize height with minimum and maximum number of lines"
                    autosize={{ minRows: 20, maxRows: 20 }}
                  />
                </Col>
                <Col style={{ display: "flex" }} span={10}>
                  <div
                    style={{
                      alignContent: "baseline",
                      display: "inline-block",
                      alignSelf: "flex-end"
                    }}
                  >
                    <Timeline pending={"...Checking"}>
                      <Timeline.Item
                        dot={<Icon type="check-circle" theme="filled" />}
                        color="green"
                      >
                        Successfully registered Geofences
                        </Timeline.Item>
                      <Timeline.Item
                        dot={<Icon type="check-circle" theme="filled" />}
                        color="green"
                      >
                        {" "}
                        Detected Geofence for hardcoded location
                        </Timeline.Item>
                      <Timeline.Item
                        dot={<Icon type="close-circle" theme="filled" />}
                        color="red"
                      >
                        Webhook invoked
                        </Timeline.Item>
                    </Timeline>
                  </div>
                </Col>
              </Row>{" "}
              <br />
              <Row>
                <Col>
                  <i
                    style={{ margin: "20px 10px 20px 40px", fontSize: 20 }} //className='gx-text-primary gx-pointer'
                  >
                    Check Now{" "}
                  </i>
                </Col>
              </Row>
            </div>
          </div>
          {/* <AddHotspot submitHotspots={this.submitHotspots}/> */}
        </Modal>
      </div>

      // <div>Auth consumer was here!!!!!</div>
    );
  }
}

export default withApollo(AppsList);
