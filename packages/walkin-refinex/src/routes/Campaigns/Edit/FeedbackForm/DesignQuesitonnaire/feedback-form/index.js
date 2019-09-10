import React, { Component } from 'react'
import { Layout, PageHeader, Button, Icon } from "antd"
const { Header, Content, Footer } = Layout;

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: "#891732",
      transitions: "vertical",
      logo: "",
      templateStructure: 1,
      title: "This will be title",
      subtitle: "This will be subtitle",
      buttonColor: "red"
    }
  }
  render() {
    const { backgroundColor, templateStructure, transitions, logo, subtitle, title, buttonColor } = this.state;
    return (
      <Layout className="layout" style={{ marginLeft: "20%" }}>
        <Header style={{ backgroundColor: backgroundColor }}>
          <div className="logo" />
        </Header>
        <Content style={{ minHeight: "43vh" }}>
          content
        </Content>
        <Footer>
          <Button size="large" style={{ backgroundColor: backgroundColor, color: "white", width: "60%", height: "100%", float: "right" }}>
            Submit
          </Button>
        </Footer>
      </Layout>
    )
  }
}

export default Home;
