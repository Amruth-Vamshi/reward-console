import React, { Component } from "react";
import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Slider,
  message,
  InputNumber,
  Icon
} from "antd";
import Auxiliary from "../../util/Auxiliary";
import { GET_CONFIGURATION, SET_CONFIGURATION } from "../../queries";
import { nearXClient as client } from "../../nearXApollo";
import {
  GOOGLE_API_KEY,
  FACEBOOK_API_KEY,
  RADIUS_1,
  RADIUS_2,
  RADIUS_3,
  TYPE
} from "../../Constants/index";

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
      radius: [0],
      loading: false,
      loading1: false
    };
  }

  componentWillMount() {
    let googleAPIkey,
      facebookAPIkey = "";
    let radius = [];
    client
      .query({
        query: GET_CONFIGURATION,
        variables: {}
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

  createRadius = n => (
    <Form.Item key={n} {...formItemLayout} label={`Radius ${n + 1}`}>
      <Row>
        <Col span={18}>
          <Slider
            min={n ? this.state.radius[n - 1] : 0}
            max={n ? (n != 1 ? 500 : 300) : 100}
            marks={this.slideMarks(
              n ? this.state.radius[n - 1] : 0,
              n ? (n != 1 ? 500 : 300) : 100
            )}
            onChange={e => this.onChangeRadius(e, n)}
            value={
              typeof this.state.radius[n] === "number"
                ? this.state.radius[n]
                : 0
            }
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={n ? this.state.radius[n - 1] : 0}
            max={n ? (n != 1 ? 500 : 300) : 100}
            style={{ marginLeft: 0 }}
            value={
              typeof this.state.radius[n] === "number"
                ? this.state.radius[n]
                : 0
            }
            onChange={e => this.onChangeRadius(e, n)}
          />
        </Col>
      </Row>
    </Form.Item>
  );

  keysUpdate = () => {
    this.setState({ loading: true });
    let keys = [
      { name: GOOGLE_API_KEY, key: this.state.googleAPIkey, type: TYPE },
      { name: FACEBOOK_API_KEY, key: this.state.facebookAPIkey, type: TYPE }
    ];

    console.log(keys);
    client
      .mutate({
        mutation: SET_CONFIGURATION,
        variables: { input: keys }
      })
      .then(res => {
        message.success("success");
        console.log("Results", res);
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log("Fail " + err);
        message.warning("ERROR");
      });
  };

  radiusUpdate = () => {
    this.setState({ loading1: true });
    let { radius } = this.state;
    let radii = [];
    if (radius[0] && radius[0] > 0)
      radii.push({ name: RADIUS_1, key: radius[0].toString(), type: TYPE });
    if (radius[1] && radius[1] > 0)
      radii.push({ name: RADIUS_2, key: radius[1].toString(), type: TYPE });
    if (radius[2] && radius[2] > 0)
      radii.push({ name: RADIUS_3, key: radius[2].toString(), type: TYPE });
    client
      .mutate({
        mutation: SET_CONFIGURATION,
        variables: { input: radii }
      })
      .then(res => {
        message.success("success");
        console.log("Results", res);
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
    radius.push(radius[radius.length - 1]);
    this.setState({ radius });
  };

  radiusArr = n => {
    var radi = [];
    for (let j = 0; j < n; j++) radi.push(this.createRadius(j));
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

          <div className="gx-card ant-col ant-col-xs-24 ant-col-sm-20 ant-col-md-18 ant-col-xl-16">
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
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Facebook API key">
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
                    </Form.Item>
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

                    {this.radiusArr(this.state.radius.length)}

                    {this.state.radius.length >= 3 ? (
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
