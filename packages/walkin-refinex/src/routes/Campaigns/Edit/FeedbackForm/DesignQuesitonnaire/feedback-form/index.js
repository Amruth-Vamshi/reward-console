import React, { Component } from 'react'
import { Layout, PageHeader, Button, Icon, Radio, Input, Row } from "antd"
const { Header, Content, Footer } = Layout;
import "./index.css"
import Question from '../../../../../../../../feedback-form-web/src/Components/FeedbackForm/Question/Question';
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
    return (
      <Layout className="layout" style={{ marginLeft: "30%" }}>
        <Header style={{ backgroundColor: backgroundColor }}>
          <Button onClick={this.goBack} style={{ backgroundColor: backgroundColor, border: "0px" }}>
            <Icon type="left" />
          </Button>
          <div className="logo" />
        </Header>
        <Content style={{ minHeight: "43vh", padding: '0 40px', marginTop: "10px" }}>
          <Row>
            <h3 style={{ textAlign: "center" }}>{question ? question.questionText : ""}</h3>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              {
                question.choices.map(choice => {
                  return (
                    <Radio key={choice.id} value={choice.id}>
                      {choice.choiceText}
                    </Radio>
                  )
                })
              }
            </Radio.Group>
          </Row>

        </Content>
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
