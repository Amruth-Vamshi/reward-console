import React, { Component } from "react";
import { Col, Row, Dropdown, Menu, Card, Button, Divider } from "antd";
// import CreatePlaces from '../../routes/Places/CreatePlaces/CreatePlaces';

const options = [
  "Edit"
  // 'Delete',
];
export default class placeCard extends Component {
  menus = () => (
    <Menu
      onClick={e => {
        if (e.key === "Edit") {
          sessionStorage.setItem("placeId", JSON.stringify(this.props.data.id));
          this.props.history.push("/nearx/places/createplace/manually");
        } else {
          // this.onDeleteContact(this.props.contact)
        }
      }}
    >
      {options.map(option => (
        <Menu.Item key={option}> {option} </Menu.Item>
      ))}
    </Menu>
  );

  render() {
    const { data } = this.props;
    return (
      <Card className="placesListCard">
        <Row>
          <Col className="rightBorder" span={5}>
            <div className="divCenterVertical">
              <div>
                <Row>
                  <span style={{ color: "black", marginBottom: 5 }}>
                    {data.name}
                  </span>
                </Row>
                <Row>
                  <span style={{ color: "#999999" }}>{data.code}</span>
                </Row>
              </div>
            </div>
          </Col>
          <Col className="rightBorder" span={6}>
            {" "}
            <div className="divCenterVertical">
              <span>{data.address}</span>
            </div>
          </Col>
          <Col span={5}>
            <div style={{}} className="divCenterVertical">
              {" "}
              <span>
                Radius: &nbsp;
                {data.radius ? (
                  <span style={{ wordBreak: "break-word" }}>
                    {data.radius[0] ? <span>{data.radius[0]}m</span> : ""}
                    {data.radius[1] ? (
                      <span>&nbsp;|&nbsp;{data.radius[1]}m</span>
                    ) : (
                      ""
                    )}
                    {data.radius[2] ? (
                      <span>&nbsp;|&nbsp;{data.radius[2]}m</span>
                    ) : (
                      ""
                    )}{" "}
                  </span>
                ) : (
                  ""
                )}
              </span>
            </div>
          </Col>
          <Col className="rightBorder" span={2}>
            <div className="divCenterVertical">
              <span className="hotspot">
                {data.hotspots < 10 ? `0${data.hotspots}` : data.hotspots}
              </span>
            </div>
          </Col>
          <Col className="placeCardLocation" span={4}>
            <Row>
              Latitude:-{" "}
              <span style={{ marginBottom: 5 }}>
                {data.center.lat
                  .toString()
                  .slice(0, data.center.lat.toString().indexOf(".") + 8)}
              </span>
            </Row>
            <Row>
              Longitude:-{" "}
              <span>
                {data.center.lng
                  .toString()
                  .slice(0, data.center.lng.toString().indexOf(".") + 8)}
              </span>
            </Row>
          </Col>
          <Col className="rightBorder" span={2}>
            <div className="gx-module-contact-right divCenter">
              <Dropdown
                overlay={this.menus()}
                placement="bottomRight"
                trigger={["click"]}
              >
                <i className="gx-icon-btn icon icon-ellipse-v" />
              </Dropdown>
            </div>
          </Col>
        </Row>

        {/* <Row gutter={25} style={{marginLeft:0}}>
            <Col xs={24} sm={12} md={8} style={{marginLeft:5}} span={8} >
              <Row><p style={{fontWeight:"bold"}}>{data.name}</p></Row>
              <Row><p>{data.code}</p></Row>
              <Row>
                <Col><p>Latitude:- {data.latitude}&nbsp;&nbsp;&nbsp;&nbsp;</p></Col>
                <Col><p>Longitude:- {data.longitude}</p></Col><br/>
              </Row>
            </Col>
            <Col xs={24} sm={10} md={5} span={5}>
              <div style={{maxWidth:200, marginBottom:20}}>
                <div style={{fontWeight:400}}>Campaign</div>
                  <hr style={{margin: "8px 0"}} color='#8e8e8e'/>
                  <Row>
                  <Col sm={15} xs={12} md={12} xl={15}>
                    <div><span className="geoFont">{data.campaign.active<10?`0${data.campaign.active}`:data.campaign.active}</span></div>
                    <span>Active</span>
                  </Col>

                  <Col >
                    <div><span className="geoFont">{data.campaign.upComing<10?`0${data.campaign.active}`:data.campaign.active}</span></div>
                    <span>Up-Coming</span>
                  </Col>

                </Row>
              </div>
            </Col>
            <Col xs={24} sm={14} md={6} xl={7}>
              <div>
                <p style={{fontWeight:400}}>Region</p>
                <p>{data.region}</p>

              </div>
            </Col>
            <Col xs={24} sm={8} md={4} xl={3} >
              <div className="divCenter">
                <Col>
                    <div className="gx-module-contact-right">

                      <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['click']}>
                        <i className="gx-icon-btn icon icon-ellipse-v"/>
                      </Dropdown>

                  </div>
                </Col>
              </div>
            </Col>
          </Row> */}
      </Card>
    );
  }
}
