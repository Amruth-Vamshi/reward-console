import React, { Component } from "react";
import { Avatar, Popover } from "antd";
import { withApollo, compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import { Redirect, Link } from 'react-router-dom';

class UserInfo extends Component {
  logout = () => {
    console.log("Logout");
    sessionStorage.clear();
    // this.props.history.push('/')
  };
  render() {
    console.log("USER>>>", this.props.localdata);
    let { auth } = this.props.localdata
    const userMenuOptions = (
      <ul className="gx-user-popover">
        <li>My Account</li>
        <li>Connections</li>
        <li onClick={() => this.logout()}>
          <a href="/">Logout</a>
        </li>
      </ul>
    );

    return (

      <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
        trigger="click">

        {auth ?
          <div className="gx-flex-row gx-align-items-center">
            <p style={{ color: "white" }} className="gx-mb-0">{auth.firstName ? auth.firstName : '' + " " + `${auth.lastName ? auth.lastName : ' '}`}</p> &nbsp;
              {/* <img className="gx-rounded-circle gx-size-30 gx-mr-2 gx-ml-2" src='https://via.placeholder.com/150x150' alt="" /> */}

            {/*&nbsp; <Avatar src='https://via.placeholder.com/100x100'
                className="gx-avatar gx-pointer" alt="" /> */}

            <div className="gx-ml-2 gx-d-none gx-d-sm-flex">
              {(auth.image === null || auth.image === undefined) ?
                <Avatar style={{ backgroundColor: '#424e88' }} size="large"><span style={{ fontSize: 22, fontWeight: '' }}> {auth.firstName ? auth.firstName.charAt(0).toUpperCase() : ''} </span> </Avatar> :
                <Avatar size="large" alt={auth.firstName} src={auth.image} />
              }
            </div>
          </div>
          : <Avatar src='https://via.placeholder.com/100x100'
            className="gx-avatar gx-pointer" alt="" />}
      </Popover>
    );
  }
}


const LOCAL_DATA = gql`
  query localData {
    auth {
      firstName
      lastName
      email
    }
  }
`;

export default compose(
  withApollo,
  graphql(LOCAL_DATA, {
    name: "localdata"
  })
)(UserInfo);