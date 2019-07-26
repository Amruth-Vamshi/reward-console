import React, { Component } from 'react'
import { Col, Row, Dropdown, Menu, Card, Icon, Tooltip, Button, Input } from "antd";

const options = [
  // 'Activate',
  'Edit',
  //'Delete',
];

export default class HooksListCard extends Component {

  menus = () => (<Menu onClick={(e) => {
    if (e.key === 'Activate') {
      this.props.activateApp(this.props.data.id)
    } else if (e.key === 'Edit') {
      this.props.updateHook(this.props.data)
      // this.onEditContact()
    } else {
      // this.onDeleteContact(this.props.contact)
    }
  }}> {options.map(option =>
    <Menu.Item key={option}>  {option}  </Menu.Item>)}
  </Menu>);



  copy = () => {
    var copyText = document.getElementById(this.props.data.appKey);
    copyText.select();
    document.execCommand("copy");
    console.log("Copied Key: " + copyText.value)
  }


  render() {

    const { data } = this.props
    return (

      <Card className='placesListCard'>
        <Row>
          <Col span={4}>
            <div className="divCenterVertical"><div>
              <Row><span style={{ color: 'black', marginBottom: 5 }}>{data.event}</span></Row>
            </div></div>
          </Col>
          <Col span={2}> <div className="divCenterVertical"><span>{data.method}</span></div></Col>

          <Col span={2}> <div className="divCenterVertical"><span>{data.status}</span></div></Col>

          <Col span={7}> <div className="divCenterVertical"><span>{JSON.stringify(data.headers)}</span></div></Col>

          <Col span={8}> <div className="divCenterVertical"><span>{data.url}</span></div></Col>

          <Col style={{ paddingLeft: 0 }} span={1}>
            <div className="gx-module-contact-right divCenter">
              <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['click']}>
                <i className="gx-icon-btn icon icon-ellipse-v" />
              </Dropdown>
            </div>
          </Col>
        </Row>

      </Card>
    )
  }
}
