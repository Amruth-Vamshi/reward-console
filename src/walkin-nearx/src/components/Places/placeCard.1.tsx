import * as React from 'react'
import { Col, Row, Card, Button, Divider } from "antd";

interface iProps {
  data?: any
}

export default class placeCard extends React.Component<iProps, {}> {
  render() {
    const { data } = this.props
    return (
      <div className="gx-card ">
        <div className="gx-card-body">
          <Row gutter={25} style={{ marginLeft: 0 }}>
            <Col xs={24} sm={12} md={8} style={{ marginLeft: 5 }} span={8} >
              <Row><p style={{ fontWeight: "bold" }}>{data.name}</p></Row>
              <Row><p>{data.code}</p></Row>
              <Row>
                <Col><p>Latitude:- {data.latitude}&nbsp;&nbsp;&nbsp;&nbsp;</p></Col>
                <Col><p>Longitude:- {data.longitude}</p></Col><br />
              </Row>
            </Col>
            <Col xs={24} sm={10} md={5} span={5}>
              <div style={{ maxWidth: 200, marginBottom: 20 }}>
                <div style={{ fontWeight: 400 }}>Campaign</div>
                <hr style={{ margin: "8px 0" }} color='#8e8e8e' />
                <Row>
                  <Col sm={15} xs={12} md={12} xl={15}>
                    <div><span className="geoFont">{data.campaign.active < 10 ? `0${data.campaign.active}` : data.campaign.active}</span></div>
                    <span>Active</span>
                  </Col>

                  <Col >
                    <div><span className="geoFont">{data.campaign.upComing < 10 ? `0${data.campaign.active}` : data.campaign.active}</span></div>
                    <span>Up-Coming</span>
                  </Col>

                </Row>
              </div>
            </Col>
            <Col xs={24} sm={14} md={6} xl={7}>
              <div>
                <p style={{ fontWeight: 400 }}>Region</p>
                <p>{data.region}</p>

              </div>
            </Col>
            <Col xs={24} sm={8} md={4} xl={3} >
              <div className="divCenter">
                <Col>
                  {/* <Button type="primary" shape="round">Create Campain</Button> */}
                  <Button >View Details</Button>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
