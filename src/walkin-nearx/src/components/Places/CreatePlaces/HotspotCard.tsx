import * as React from 'react';
import { Col, Row, Checkbox } from 'antd';

interface iProps {
  hp?: any;
  onPlaceSelect?: (val1, val2) => any;
  index?: any;
}

interface iState {}

export default class HotspotCard extends React.Component<iProps, iState> {
  render() {
    let data = this.props.hp;
    return (
      <Row gutter={0} className="hotspotCard">
        <Col span={14}>
          <div className="divCenterVertical">
            <div>
              <Checkbox
                className="gx-icon-btn"
                checked={data.selected}
                value="checked"
                onChange={e => {
                  this.props.onPlaceSelect(this.props.index, e);
                }}
              />
            </div>
            <span style={{ marginLeft: 5 }}> {data.placeName} </span>
          </div>
        </Col>

        <Col
          style={{ float: 'right', marginRight: -15 }}
          className="placeCardLocation"
          span={10}
        >
          <Row>
            Latitude:-{' '}
            <span style={{ marginBottom: 5 }}>
              {data.center.lat
                .toString()
                .slice(0, data.center.lat.toString().indexOf('.') + 8)}
            </span>
          </Row>
          <Row>
            Longitude:-{' '}
            <span>
              {data.center.lng
                .toString()
                .slice(0, data.center.lng.toString().indexOf('.') + 8)}
            </span>
          </Row>
        </Col>
        {/* <Icon type="close" onClick={() => this.props.deleteHotspot(this.props.index)} style={{ float: "right", margin: '-8px 1px 0px 0px'}} />  */}
      </Row>
    );
  }
}
