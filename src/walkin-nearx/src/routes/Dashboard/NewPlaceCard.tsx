import * as React from 'react';
import { Row, Col } from 'antd';

interface iProps {
  place?: any;
}

export default class NewPlaceCard extends React.Component<iProps, {}> {
  render() {
    let {
      geofence_name,
      hotspots,
      entry_count,
      exit_count,
      dwell_count,
    } = this.props.place;
    return (
      <Row>
        <Col
          xs={24}
          sm={12}
          style={{ color: 'black', wordBreak: 'break-word', marginBottom: 8 }}
        >
          {geofence_name}
        </Col>
        {/* <Col xs={6} sm={4} >Hotspots: <b>{hotspots ? hotspots : 0}</b></Col> */}
        <Col xs={8} sm={4}>
          Entry: <b>{entry_count}</b>
        </Col>
        <Col xs={8} sm={4}>
          Exit: <b>{exit_count}</b>
        </Col>
        <Col xs={8} sm={4}>
          Dwell: <b>{dwell_count}</b>
        </Col>
      </Row>
    );
  }
}
