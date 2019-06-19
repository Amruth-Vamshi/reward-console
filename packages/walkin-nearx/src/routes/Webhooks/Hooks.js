import React, { Component } from "react";
import { Col, Row, Pagination, Card, Timeline, Modal, Spin, Tooltip, Input, Icon, Button } from "antd";
// import AppListCard from "./AppListCard";
import { GET_WEBHOOKS, GENERATE_API_KEY } from "../../queries/platformQuries";
import jwt from "jsonwebtoken";
import { withApollo } from "react-apollo";
// import { nearXClient as client } from "../../nearXApollo";
const { TextArea } = Input;
import HooksListCard from './HooksListCard'

// const text = <code></code>

class Hooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      hooksList: [],
      spin: false
    };
  }

  addHook = () => {
    // this.props.history.push("/nearx/apps/create");
  };


  componentWillMount() {
    this.setState({ spin: true });

    const jwtData = jwt.decode(localStorage.getItem("jwt"));

    jwtData
      ? this.props.client
        .query({
          query: GET_WEBHOOKS,
          variables: { org_id: jwtData.org_id, "status": "ACTIVE" },
          fetchPolicy: "network-only"
        })
        .then(res => {
          console.log(res.data);
          var apps = [];
          // let org = res.data.organization;

          // function recOrg(org, apps) {
          //   if (org && org.applications)
          //     org.applications.map(app =>
          //       apps.push({
          //         id: app.id,
          //         appName: app.name,
          //         industry: org.name,
          //         platform: app.platform,
          //         discription: app.description
          //       })
          //     );
          //   if (org && org.children) org.children.map(ch => recOrg(ch, apps));
          // }

          // recOrg(org, apps);

          console.log(res.data.webhooks);

          this.setState({ hooksList: res.data.webhooks, spin: false });
        })
        .catch(err => {
          console.log("Failed to get User Details" + err);
        })
      : console.log("Error getting JwtData");
  }

  render() {
    // const data = this.state.appsList?this.state.appsList:[]
    // console.log(data)
    return (
      <div>
        <Row className="headerRow1">
          <div style={{ width: "100%" }}>
            <span style={{ fontSize: 25 }}>Web Hooks</span>
            {/* <div style={{ float: "right", flexFlow: "right" }}>
              <Button
                style={{ margin: 0 }}
                onClick={() => this.addHook()}
                className="buttonPrimary"
              >
                Add Hook
                </Button>
            </div> */}
          </div>
        </Row>
        <br />

        {this.state.spin ? (
          <div> <br />  <br /> <br />  <br />{" "}
            <div className="divCenter">  <Spin size="large" /> </div> <br /> <br /> <br />  </div>) :
          this.state.hooksList.length ? (
            <div >
              <Row className="placeTableHeaders">
                <Col span={4}>Event</Col>
                <Col span={2}>Method</Col>
                <Col span={2}>Status</Col>
                <Col span={7}>headers</Col>
                <Col span={7}>url</Col>
              </Row>
              {this.state.hooksList.map((item, i) => (
                <HooksListCard key={i} index={i} data={item}
                />
              ))}
            </div>
          ) : (
              <div style={{ margin: 100, fontSize: 25 }}>
                <div className="divCenter">No Hooks Present</div>
                <div className="divCenter">
                  <Button
                    style={{ margin: 30, fontSize: 18 }}
                    onClick={() => this.addHook()}
                    className="buttonPrimary"
                  >
                    Create New Hook
                </Button>
                  {/* <div style={{margin:10, fontSize:20}}>Create A new Place</div> */}
                </div>
              </div>
            )}
      </div>
    );
  }
}

export default withApollo(Hooks);
