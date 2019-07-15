import React, { Component } from "react";
import { Col, Row, Form, Input, Button, Slider, message, InputNumber, Icon } from "antd";
import Auxiliary from "../../util/Auxiliary";
import { GET_CONFIGURATION, SET_CONFIGURATION } from "../../queries";
import { nearXClient as client } from "../../nearXApollo";
import {
  GOOGLE_API_KEY, FACEBOOK_API_KEY, RADIUS_1, RADIUS_2, RADIUS_3, TYPE,
  RADIUS_1_MIN, RADIUS_1_MAX, RADIUS_2_MAX, RADIUS_3_MAX
} from "../../Constants/index";
import axios from "axios";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

const radiusLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 5 }, xl: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 19 }, xl: { span: 16 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12, offset: 14 }
  }
};
const tailFormItemLayout1 = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 12,
      offset: 6
    }
  }
};

export default class SettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      googleAPIkey: "",
      facebookAPIkey: "",
      radius: [RADIUS_1_MIN],
      loading: false,
      loading1: false
    };
  }

  componentWillMount() {
    let googleAPIkey,
      facebookAPIkey = "";
    let radius = [RADIUS_1_MIN];
    client
      .query({
        query: GET_CONFIGURATION,
        variables: {},
        fetchPolicy: "network-only"
      })
      .then(res => {
        console.log("Results", res.data.getConfiguration);

        res.data.getConfiguration.map(k => {
          if (k.name === GOOGLE_API_KEY) googleAPIkey = k.key;
          if (k.name === FACEBOOK_API_KEY) facebookAPIkey = k.key;
          if (k.name === RADIUS_1) radius[0] = parseInt(k.key);
          if (k.name === RADIUS_2) radius[1] = parseInt(k.key);
          if (k.name === RADIUS_3) radius[2] = parseInt(k.key);
        });

        this.setState({ googleAPIkey, facebookAPIkey, radius });
        // this.setState({places, totalPlaces:res.data.Places.pageInfo.total})
      })
      .catch(err => console.log("Failed to get Places Details" + err));
  }

  slideMarks = (min, max) => {
    var marks = {};
    marks[max] = {
      style: { color: "#f50" },
      label: <strong>{`${max}`}</strong>
    };
    marks[min] = `${min}`;
    //    for(let i=max-200;i>min;i-=200){
    //         marks[i] = `${i}`
    //    }
    return marks;
  };

  deleteRedi = n => {
    let { radius } = this.state
    radius.pop()
    this.setState({ radius })
  }

  createRadius = (n, x) => (
    <Form.Item key={n} {...radiusLayout} label={`Radius ${n + 1}`}>
      <Row>
        <Col span={15}>
          <Slider
            min={n ? this.state.radius[n - 1] : RADIUS_1_MIN}
            // max={n ? (n != 1 ? RADIUS_1_MAX : RADIUS_2_MAX) : RADIUS_1_MAX}
            max={RADIUS_3_MAX}

            marks={this.slideMarks(
              n ? this.state.radius[n - 1] : RADIUS_1_MIN,
              // n ? (n != 1 ? RADIUS_3_MAX : RADIUS_2_MAX) : RADIUS_1_MAX
              RADIUS_3_MAX
            )}
            onChange={e => this.onChangeRadius(e, n)}
            value={
              typeof this.state.radius[n] === "number"
                ? this.state.radius[n]
                : n ? this.state.radius[n - 1] : RADIUS_1_MIN
            }
          />
        </Col>
        <Col span={9}>
          <div style={{ display: "inline-block" }}>
            <InputNumber
              min={n ? this.state.radius[n - 1] : 0}
              // max={n ? (n != 1 ? RADIUS_3_MAX : RADIUS_2_MAX) : RADIUS_1_MAX}
              max={RADIUS_3_MAX}
              style={{ marginLeft: 0, marginRight: -30 }}
              value={
                typeof this.state.radius[n] === "number"
                  ? this.state.radius[n]
                  : n ? this.state.radius[n - 1] : RADIUS_1_MIN
              }
              onChange={e => this.onChangeRadius(e, n)}
            /></div> {n && (n == x - 1) ? <div style={{ display: "inline-block" }}> &nbsp; &nbsp; &nbsp; &nbsp; <Icon onClick={() => this.deleteRedi(n)} type='close' /> </div> : ''}
        </Col>
      </Row>

    </Form.Item>
  );

  keysUpdate = () => {
    let errors = {};
    let keys = []

    // if (this.state.googleAPIkey && this.state.googleAPIkey != ' ') {
    this.setState({ loading: true });
    var req = axios.create({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
    let url =
      "https://cors-anywhere.herokuapp.com/" +
      "https://maps.googleapis.com/maps/api/geocode/json?address=bengaluru&key=" +
      this.state.googleAPIkey;
    req
      .get(url)
      .then(response => {
        if (
          response.data.error_message === "The provided API key is invalid."
        ) {
          errors.googleAPIkey = "Invalid API key";
          this.setState({ loading: false, errors });
          message.warning("Invalid API key");
        } else {
          keys = [{ name: GOOGLE_API_KEY, key: this.state.googleAPIkey, type: TYPE }];

          if (this.state.facebookAPIkey.trim() != '')
            keys.push({ name: FACEBOOK_API_KEY, key: this.state.facebookAPIkey, type: TYPE })

          client
            .mutate({
              mutation: SET_CONFIGURATION,
              variables: { input: keys }
            })
            .then(res => {
              message.success("success");
              this.setState({ loading: false });
            })
            .catch(err => {
              this.setState({ loading: false });
              console.log("Fail " + err);
              message.warning("ERROR");
            });

        }
      })
    // }


    // let keys = [
    //   { name: GOOGLE_API_KEY, key: this.state.googleAPIkey, type: TYPE },
    //   { name: FACEBOOK_API_KEY, key: this.state.facebookAPIkey, type: TYPE }
    // ];

    // if (Object.entries(errors).length === 0) 

  };

  radiusUpdate = () => {
    this.setState({ loading1: true });
    let { radius } = this.state;
    let radii = [];
    if (radius[0] && radius[0] >= RADIUS_1_MIN)
      radii.push({ name: RADIUS_1, key: radius[0].toString(), type: TYPE });
    if (radius[1] && radius[1] > radius[0])
      radii.push({ name: RADIUS_2, key: radius[1].toString(), type: TYPE });
    if (radius[2] && radius[2] > radius[1])
      radii.push({ name: RADIUS_3, key: radius[2].toString(), type: TYPE });
    client
      .mutate({
        mutation: SET_CONFIGURATION,
        variables: { input: radii }
      })
      .then(res => {
        message.success("success");
        this.setState({ loading1: false });
      })
      .catch(err => {
        this.setState({ loading1: false });
        console.log("Fail " + err);
        message.warning("ERROR");
      });
  };

  addRadius = () => {
    let radius = this.state.radius;
    radius.push(radius[radius.length - 1] + 1);
    this.setState({ radius });
  };

  radiusArr = n => {
    var radi = [];
    for (let j = 0; j < n; j++)
      // if (j) {
      //   if (this.state.radius[j - 1] < this.state.radius[j]) radi.push(this.createRadius(j))
      //   else break
      // } else 

      radi.push(this.createRadius(j, n))
    return radi;
  };

  handleOnChange = e => {
    if (e.target.value.trim() != "") this.state.errors[e.target.name] = "";
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeRadius = (e, n) => {
    let radius = this.state.radius;
    radius[n] = e;
    this.setState({ radius });
  };

  render() {
    var { formData } = this.props;

    let { radius } = this.state

    return (
      <div className="gx-main-content-wrapper">
        <Auxiliary>
          <p style={{ fontSize: 22 }}>
            {" "}
            <Icon
              type="setting"
              style={{ color: "#e20464" }}
              color="#ff0000"
              theme="filled"
            />{" "}
            Settings
          </p>

          <div className="gx-card ant-col ant-col-xs-24 ant-col-sm-22 ant-col-md-20 ant-col-xl-18 ant-col-xxl-16">
            <div className="gx-card-body">
              <div>
                <Col>
                  <Form onSubmit={this.props.handleSubmit}>
                    <p style={{ fontSize: 18, color: "#969696" }}>
                      Authentication Keys
                    </p>
                    <Form.Item {...formItemLayout} label="Google API key">
                      <Input
                        required
                        placeholder="Google API key"
                        value={this.state.googleAPIkey}
                        name="googleAPIkey"
                        onChange={c => this.handleOnChange(c)}
                      />
                      <span style={{ color: "Red" }}>
                        {this.state.errors.googleAPIkey}
                      </span>
                      <div style={{ color: "#34bfe2", margin: 10, float: "right" }} >
                        <a target="_blank" href="https://developers.google.com/maps/documentation/javascript/get-api-key" > Get Google API key </a>
                      </div>
                    </Form.Item>

                    {/* <Form.Item {...tailFormItemLayout}> */}

                    {/* </Form.Item> */}

                    {/* <Form.Item {...formItemLayout} label="Facebook API key">
                      <Input
                        required
                        placeholder="Facebook API key"
                        value={this.state.facebookAPIkey}
                        name="facebookAPIkey"
                        onChange={c => this.handleOnChange(c)}
                      />
                      <span style={{ color: "Red" }}>
                        {this.state.errors.facebookAPIkey}
                      </span>
                    </Form.Item> */}
                    <Form.Item {...tailFormItemLayout1}>
                      <Button
                        type="primary"
                        loading={this.state.loading}
                        onClick={() => this.keysUpdate()}
                      >
                        Update
                      </Button>
                    </Form.Item>
                    <br />

                    {/* <Form.Item  {...formItemLayout} label="Latitude" >
                                        <Input required placeholder="Latitude" value={this.state.center.lat} type="number" step="0.0001" name="latitude" onChange={(c) => this.props.handleCenterChange(c, i ,"lat")} />
                                        <span style={{ color: 'Red' }}>{this.state.errors.latitude}</span>
                                    </Form.Item>
                                    <Form.Item  {...formItemLayout} label="Longitude" >
                                        <Input required placeholder="Longitude" value={this.state.center.lng} name="longitude" type="number" step="0.0001" onChange={(c) => this.props.handleCenterChange(c, i,"lng")} />
                                        <span style={{ color: 'Red' }}>{this.state.errors.longitude}</span>
                                    </Form.Item>  */}
                    {/* <Form.Item  {...tailFormItemLayout} >
                                        <div style={{ float: "right" }}>
                                            <Button onClick={() => this.props.getloc(i)}>Get Location From Map   </Button>
                                        </div>
                                    </Form.Item> */}

                    <p style={{ fontSize: 18, color: "#969696" }}>
                      Default Radius
                    </p>

                    {this.radiusArr(radius.length)}

                    {/* {console.log(radius.length >= 3 && radius[radius.length-1]==500)} */}

                    {radius.length >= 3 || radius[radius.length - 1] == 500 ? (
                      ""
                    ) : (
                        <Form.Item {...tailFormItemLayout}>
                          <span
                            onClick={() => this.addRadius()}
                            style={{ color: "#34bfe2" }}
                          >
                            {" "}
                            <a to="#"> +Add Radius </a>
                          </span>
                        </Form.Item>
                      )}
                    <Form.Item {...tailFormItemLayout1}>
                      <Button
                        type="primary"
                        onClick={() => this.radiusUpdate()}
                        loading={this.state.loading1}
                      >
                        Update
                      </Button>
                    </Form.Item>
                    <br />
                  </Form>
                </Col>
              </div>
            </div>
          </div>
        </Auxiliary>
      </div>
    );
  }
}
