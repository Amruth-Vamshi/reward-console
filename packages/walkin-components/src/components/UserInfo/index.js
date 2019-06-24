import React, { Component } from "react";
import { Avatar, Popover } from "antd";
import { Redirect, Link } from 'react-router-dom';

class UserInfo extends Component {

  logout = () => {
    console.log('Logout')
    localStorage.clear()
    // this.props.history.push('/')
  }
  render() {
    const userMenuOptions = (
      <ul className="gx-user-popover">
        <li>My Account</li>
        <li>Connections</li>
        <li onClick={() => this.logout()}><a href='/'>Logout</a></li>
      </ul>
    );




    return (
      <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
        trigger="click">
        <Avatar src='https://via.placeholder.com/150x150'
          className="gx-avatar gx-pointer" alt="" />
      </Popover>
    )

  }
}

export default UserInfo;
