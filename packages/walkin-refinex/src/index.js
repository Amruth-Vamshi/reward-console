import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export default class extends Component {
  render() {
    const IS_LOGGED_IN = gql`
      query isLoggedin {
        isLoggedIn @client
      }
    `;
    return <h2>Welcome to RefineX</h2>;
  }
}
