import React, { Component } from 'react'
import { Layout, PageHeader, Button, Icon, Radio, Input, Row, Col } from "antd"
const { Header, Content, Footer } = Layout;
import "./index.css"
import { CustomScrollbars } from "@walkinsole/walkin-components";
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
      value: 1,
      buttonColor: "red"
    }
  }

  goBack = () => {
    this.props.goTopreviousQuestion()
  }

  onHandleNext = e => {
    this.props.nextQuestion()
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {

    const { backgroundColor, templateStructure, transitions, logo, subtitle, title, buttonColor } = this.state;
    const { question } = this.props;
    const radioStyle = {
      display: 'block',
      height: '40px',
      lineHeight: '40px',
      width: "30px"
    };
    return (
      <Layout className="layout" style={{ marginLeft: "30%", backgroundColor: "white" }}>
        <Header style={{ backgroundColor: backgroundColor }}>
          <Button onClick={this.goBack} style={{ backgroundColor: backgroundColor, border: "0px" }}>
            <Icon type="left" />
          </Button>
          <div className="logo" />
        </Header>
        <div style={{ minHeight: "43vh", padding: '0 40px', marginTop: "10px" }}>
          <Row>
            <Col>
              <h3 style={{ textAlign: "center" }}>{question ? question.questionText : ""}</h3>
            </Col>


            <Col>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                {
                  question.choices.map(choice => {
                    return (
                      <Radio style={radioStyle} key={choice.id} value={choice.id}>
                        {choice.choiceText}
                      </Radio>
                    )
                  })
                }
              </Radio.Group>
            </Col>



          </Row>

        </div>
        <footer>
          <div className="error-text">
            error message
            </div>
          <div style={{ width: "60%", float: "right" }}>
            <Button
              style={{ width: "100%", backgroundColor: backgroundColor }}
              onClick={this.onHandleNext}>Next</Button>


          </div>
        </footer>
      </Layout>
    )
  }
}

export default Home;
