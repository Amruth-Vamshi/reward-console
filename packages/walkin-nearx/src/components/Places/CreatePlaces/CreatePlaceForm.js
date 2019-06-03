import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Card,
  Row,
  Form,
  Input,
  Button,
  Slider,
  InputNumber,
  Icon
} from "antd";
import { Auxiliary } from "@walkinsole/walkin-components";
import HotspotCard from "./HotspotCard";

const marks = {
  // 0: '0',
  // 200: '200',
  // 400: '400',
  // 600: '600',
  // 800: '800',
  // 1000: {  style: { color: '#f50', },
  //   label: <strong>1000</strong>,
  // },
};
const formItemLayout = {
  labelCol: {
    sm: { span: 24 },
    md: { span: 7 }
  },
  wrapperCol: {
    sm: { span: 24 },
    md: { span: 17 }
  }
};

const formItemLocation = {
  labelCol: {
    sm: { span: 24 },
    md: { span: 10 },
    xl: { span: 5 }
  },
  wrapperCol: {
    md: { span: 24 },
    xl: { span: 19 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    sm: { span: 24 },
    md: { span: 23 }
  }
};

const tailFormItemLayout1 = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    xl: {
      span: 22,
      offset: 2
    }
  }
};

export default class CreatePlaceForm extends Component {
  constructor(props) {
    super(props);
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
    //    console.log(marks)
    return marks;
  };

  createRadius = (i, n, formData) => (
    <Form.Item key={n} {...formItemLayout} label={`Radius ${n + 1}`}>
      <Row>
        <Col span={18}>
          <Slider
            min={n ? formData.places[i].radius[n - 1] : 0}
            max={n ? (n != 1 ? 500 : 300) : 100}
            marks={this.slideMarks(
              n ? formData.places[i].radius[n - 1] : 0,
              n ? (n != 1 ? 500 : 300) : 100
            )}
            onChange={e => this.props.onChangeRadius(e, i, n)}
            value={
              typeof formData.places[i].radius[n] === "number"
                ? formData.places[i].radius[n]
                : 0
            }
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={n ? formData.places[i].radius[n - 1] : 0}
            max={n ? (n != 1 ? 500 : 300) : 100}
            style={{ marginLeft: 0 }}
            value={
              typeof formData.places[i].radius[n] === "number"
                ? formData.places[i].radius[n]
                : 0
            }
            onChange={e => this.props.onChangeRadius(e, i, n)}
          />
        </Col>
      </Row>
    </Form.Item>
  );

  radiusArr = (i, n, formD) => {
    var radi = [];
    for (let j = 0; j < n; j++) radi.push(this.createRadius(i, j, formD));

    return radi;
  };

  render() {
    var { formData } = this.props;

    var form = [];

    for (let i = 0; i < formData.places1.length; i++)
      form.push(
        <div key={i}>
          {i ? (
            <HotspotCard
              key={i}
              index={i}
              onPlaceSelect={this.props.onPlaceSelect}
              hp={formData.places1[i]}
              deleteHotspot={this.props.deleteHotspot}
            />
          ) : (
            ""
          )}
        </div>
      );

    return (
      <Auxiliary>
        <div className="gx-card">
          <div className="gx-card-body" style={{ overflow: "hidden" }}>
            <div>
              <Col>
                <Form onSubmit={this.props.handleSubmit}>
                  <Row>
                    <div style={{ width: "100%", marginBottom: 25 }}>
                      <Icon
                        type="environment"
                        style={{ color: "#e20464", fontSize: 18 }}
                        color="#ff0000"
                        theme="filled"
                      />
                      <span style={{ fontSize: 20 }}> Place</span>
                      {/* <span style={{float:'right', marginTop:'-10', marginBottom:15}}>
                                           <Link to='/nearx/places/createplace'> <Button className="gx-pointer gx-text-primary"><Icon type='search' />create place with map</Button></Link>
                                    </span> */}
                    </div>
                  </Row>

                  <div>
                    <Form.Item {...formItemLayout} label="Place Name">
                      <Input
                        required
                        placeholder="Place Name"
                        value={formData.places[0].placeName}
                        name="placeName"
                        onChange={c => this.props.handleOnChange(c, 0)}
                      />
                      <span style={{ color: "Red" }}>
                        {formData.places[0].errors.placeName}
                      </span>
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Address">
                      <Input
                        required
                        placeholder="Address"
                        value={formData.places[0].address}
                        name="address"
                        onChange={c => this.props.handleOnChange(c, 0)}
                      />
                      <span style={{ color: "Red" }}>
                        {formData.places[0].errors.address}
                      </span>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout1}>
                      <Card className="createPlaceCard">
                        <p onClick={() => this.props.getloc(0)}>
                          <i className="gx-pointer gx-text-primary">
                            <Icon type="plus" /> {"  "}Pick Location from map
                          </i>
                        </p>

                        <Form.Item {...formItemLocation} label="Longitude">
                          <Row gutter={1}>
                            <Col md={24} xl={12}>
                              <Input
                                placeholder="Latitude"
                                value={formData.places[0].center.lat}
                                type="number"
                                step="0.0001"
                                name="latitude"
                                onChange={c =>
                                  this.props.handleCenterChange(c, 0, "lat")
                                }
                              />
                              <span style={{ color: "Red" }}>
                                {formData.places[0].errors.latitude}
                              </span>
                            </Col>

                            <Col md={24} xl={12}>
                              <Input
                                placeholder="Longitude"
                                value={formData.places[0].center.lng}
                                name="longitude"
                                type="number"
                                step="0.0001"
                                onChange={c =>
                                  this.props.handleCenterChange(c, 0, "lng")
                                }
                              />
                              <span style={{ color: "Red" }}>
                                {formData.places[0].errors.longitude}
                              </span>
                            </Col>
                          </Row>
                        </Form.Item>
                      </Card>
                    </Form.Item>
                    {this.radiusArr(
                      0,
                      formData.places[0].radius.length,
                      formData
                    )}

                    {formData.places[0].radius.length >= 3 ? (
                      ""
                    ) : (
                      <Form.Item {...tailFormItemLayout}>
                        <div style={{ float: "right" }}>
                          <p
                            onClick={() => this.props.addRadius(0)}
                            style={{ float: "right", color: "#34bfe2" }}
                          >
                            {" "}
                            <a to="#"> + Add Fence </a>
                          </p>
                        </div>
                      </Form.Item>
                    )}
                    <br />
                    <br />
                  </div>

                  {formData.places1.length > 1 ? (
                    <p>
                      {" "}
                      <span>
                        {" "}
                        <Icon
                          type="environment"
                          style={{ color: "#e20464" }}
                          theme="filled"
                        />{" "}
                        Hotspot
                      </span>{" "}
                    </p>
                  ) : (
                    ""
                  )}

                  {form}

                  {/* <p> <span> <Icon type="environment" style={{ color: "#e20464" }} theme="filled" /> Hotspot</span> </p> */}

                  {/* <p><Button  onClick={this.props.addHotspot}>Add Hotspot</Button></p> */}
                  <p>
                    <Button onClick={this.props.showModal}>Add Hotspot</Button>
                  </p>
                  <div style={{ overflow: "hidden" }}>
                    {/* <Button htmlType='submit' type="primary" style={{float:"right",marginRight:20}}>CREATE</Button> */}
                    <Button
                      onClick={this.props.handleSubmit}
                      loading={formData.loading1}
                      className="buttonPrimary"
                      style={{ float: "right", marginRight: 20 }}
                    >
                      {formData.places[0].id ? "UPDATE" : "CREATE"}
                    </Button>
                  </div>
                </Form>
              </Col>
            </div>
          </div>
        </div>
      </Auxiliary>
    );
  }
}
