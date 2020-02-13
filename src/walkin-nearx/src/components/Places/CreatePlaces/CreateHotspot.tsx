import * as React from 'react';
import { Col, Card, Row, Form, Input, Button, Icon } from 'antd';
import { Auxiliary } from 'walkin-components';
import CustomScrollbars from '../../../util/CustomScrollbars';

const formItemLayout = {
  labelCol: {
    sm: { span: 24 },
    md: { span: 7 },
  },
  wrapperCol: {
    sm: { span: 24 },
    md: { span: 17 },
  },
};

const formItemLocation = {
  labelCol: {
    sm: { span: 24 },
    md: { span: 10 },
    xl: { span: 5 },
  },
  wrapperCol: {
    md: { span: 24 },
    xl: { span: 19 },
  },
};

const tailFormItemLayout1 = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    xl: {
      span: 22,
      offset: 2,
    },
  },
};

interface iProps {
  formData?: any;
  deleteHotspot?: (val) => any;
  handleOnChange?: (val1, val2) => any;
  getloc?: (val) => any;
  handleCenterChange?: (va1l, val2, string) => any;
  handleSubmit?: any;
  addHotspot?: any;
}

interface iState {}

export default class CreateHotspot extends React.Component<iProps, iState> {
  constructor(props) {
    super(props);
  }

  render() {
    var { formData } = this.props;

    var form = [];

    for (let i = 0; i < formData.places2.length; i++)
      form.push(
        <div key={i}>
          <p>
            <span>
              <Icon
                type="environment"
                style={{ color: '#e20464' }}
                theme="filled"
              />{' '}
              Hotspot {' ' + (i + 1)}
            </span>
            <Icon
              type="close"
              onClick={() => this.props.deleteHotspot(i)}
              style={{ float: 'right', marginRight: 1 }}
            />
          </p>

          <Form.Item {...formItemLayout} label="Name">
            <Input
              required
              placeholder="Place Name"
              value={formData.places2[i].placeName}
              name="placeName"
              onChange={c => this.props.handleOnChange(c, i)}
            />
            <span style={{ color: 'Red' }}>
              {' '}
              {formData.places2[i].errors.placeName}{' '}
            </span>
          </Form.Item>

          <Form.Item {...formItemLayout} label="Address">
            <Input
              required
              placeholder="Address"
              value={formData.places2[i].address}
              name="address"
              onChange={c => this.props.handleOnChange(c, i)}
            />
            <span style={{ color: 'Red' }}>
              {' '}
              {formData.places2[i].errors.address}{' '}
            </span>
          </Form.Item>

          <Form.Item {...tailFormItemLayout1}>
            <Card className="createPlaceCard">
              <p onClick={() => this.props.getloc(i)}>
                <i className="gx-pointer gx-text-primary">
                  <Icon type="plus" /> {'  '}Pick Location from map
                </i>
              </p>

              <Form.Item {...formItemLocation} label="Location">
                <Row gutter={1}>
                  <Col md={24} xl={12}>
                    <Input
                      placeholder="Latitude"
                      value={formData.places2[i].center.lat}
                      type="number"
                      step="0.0001"
                      name="latitude"
                      onChange={c => this.props.handleCenterChange(c, i, 'lat')}
                    />
                    <span style={{ color: 'Red' }}>
                      {' '}
                      {formData.places2[i].errors.latitude}{' '}
                    </span>
                  </Col>

                  <Col md={24} xl={12}>
                    <Input
                      placeholder="Longitude"
                      value={formData.places2[i].center.lng}
                      name="longitude"
                      type="number"
                      step="0.0001"
                      onChange={c => this.props.handleCenterChange(c, i, 'lng')}
                    />
                    <span style={{ color: 'Red' }}>
                      {' '}
                      {formData.places2[i].errors.longitude}{' '}
                    </span>
                  </Col>
                </Row>
              </Form.Item>
            </Card>
          </Form.Item>
        </div>
      );

    return (
      <Auxiliary>
        <div className="gx-card">
          <div
            className="gx-card-body addHpForm"
            style={{ overflow: 'hidden' }}
          >
            {/* <CustomScrollbars className="gx-layout-sider-scrollbar addHpForm"> */}
            <div>
              <Col>
                <Form onSubmit={this.props.handleSubmit}>{form}</Form>
                <p>
                  <Button onClick={this.props.addHotspot}>Add Hotspot</Button>
                </p>
                <div style={{ overflow: 'hidden' }}>
                  {/* <Button htmlType='submit' type="primary" style={{float:"right",marginRight:20}}>CREATE</Button> */}
                  <Button
                    disabled={!this.props.formData.places2.length}
                    onClick={this.props.handleSubmit}
                    className="buttonPrimary"
                    style={{ float: 'right', marginRight: 20 }}
                  >
                    CREATE
                  </Button>
                </div>
              </Col>
            </div>

            {/* </CustomScrollbars> */}
          </div>
        </div>
      </Auxiliary>
    );
  }
}
