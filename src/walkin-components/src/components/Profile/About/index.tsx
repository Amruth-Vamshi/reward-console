import * as React from 'react';
import { Col, Row, Tabs } from 'antd';
import AboutItem from './AboutItem';
import { Widget } from '../../Widget';

const TabPane = Tabs.TabPane;

const aboutList = [];
class About extends React.Component {
  render() {
    return (
      <Widget
        title="About"
        styleName="gx-card-tabs gx-card-tabs-right gx-card-profile"
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Overview" key="1">
            <div className="gx-mb-2">
              <Row>
                {aboutList.map((about, index) => (
                  <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                    <AboutItem data={about} />
                  </Col>
                ))}
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Work" key="2">
            <div className="gx-mb-2">
              <Row>
                {aboutList.map((about, index) => (
                  <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                    <AboutItem data={about} />
                  </Col>
                ))}
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Education" key="3">
            <div className="gx-mb-2">
              <Row>
                {aboutList.map((about, index) => (
                  <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                    <AboutItem data={about} />
                  </Col>
                ))}
              </Row>
            </div>
          </TabPane>
        </Tabs>
      </Widget>
    );
  }
}

export default About;
