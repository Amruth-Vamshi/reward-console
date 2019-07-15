import React, { Component } from "react";
import { Avatar, Popover } from "antd";
import { withApollo, compose, graphql } from "react-apollo";
import { Redirect, Link } from "react-router-dom";
import { USER_DATA } from "@walkinsole/walkin-components/src/PlatformQueries";
import jwt from "jsonwebtoken";
import { withRouter } from "react-router-dom";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      user: ""
    };
  }
  logout = () => {
    console.log("Logout");
    sessionStorage.clear();
    localStorage.clear();
    this.props.history.push('/');
  };

  componentWillMount() {
    const { id, org_id } = jwt.decode(localStorage.getItem("jwt"));
    this.setState({ userId: id, org_id });
    id
      ? this.props.client
        .query({
          query: USER_DATA,
          variables: { userId: id },
          fetchPolicy: "cache-first"
        })
        .then(res => {
          console.log(res.data.user);
          this.setState({
            user: res.data.user,
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName
          });
        })
        .catch(err => {
          console.log("Failed to get User Details" + err);
        })
      : console.log("Error getting JwtData");
  }

  render() {
    let { firstName, lastName, user } = this.state;

    console.log("USER>>>", this.state.user);
    const userMenuOptions = (
      <ul className="gx-user-popover">
        {/* <li>My Account</li>
        <li>Connections</li> */}
        <li onClick={() => this.logout()}>
          <Link to="/signin"> Logout </Link>
        </li>
      </ul>
    );

    return (
      <Popover
        overlayClassName="gx-popover-horizantal"
        placement="bottomRight"
        content={userMenuOptions}
        trigger="click"
      >
        {firstName ? (
          <div className="gx-flex-row gx-align-items-center gx-pointer">
            <p style={{ color: "white" }} className="gx-mb-0 gx-d-none gx-d-sm-flex">
              {firstName + "  " + `${lastName ? lastName : " "}`}
            </p>{" "}
            &nbsp;
            {/* <img className="gx-rounded-circle gx-size-30 gx-mr-2 gx-ml-2" src='https://via.placeholder.com/150x150' alt="" /> */}
            {/*&nbsp; <Avatar src='https://via.placeholder.com/100x100'
                className="gx-avatar gx-pointer" alt="" /> */}
            <div className="gx-ml-2">
              {user.image === null || user.image === undefined ?
                <Avatar style={{ backgroundColor: "#424e88" }} size="large">
                  <span style={{ fontSize: 22, fontWeight: "" }}>
                    {firstName ? firstName.charAt(0).toUpperCase() : ""}
                  </span>
                </Avatar>
                :
                <Avatar size="large" alt={firstName} src={user.image} />
              }
            </div>
          </div>
        ) : (
            <Avatar
              src="https://via.placeholder.com/100x100"
              className="gx-avatar gx-pointer"
              alt=""
            />
          )}
      </Popover>
    );
  }
}

export default compose(withRouter, withApollo)(UserInfo);
