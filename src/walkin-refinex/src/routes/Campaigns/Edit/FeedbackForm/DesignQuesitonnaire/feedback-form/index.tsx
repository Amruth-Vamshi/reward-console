import * as React from "react";
import {
  Layout,
  PageHeader,
  Button,
  Icon,
  Radio,
  Input,
  Row,
  Col,
  Switch
} from "antd";
import "./index.css";
import { CustomScrollbars } from "walkin-components";
import SingleAnswer from "./Components/Fields/SigleChoice";
import MultipleAnswer from "./Components/Fields/MultipleChoice";
import Text from "./Components/Fields/Text";
import RateScale from "./Components/Fields/RatingScale";
const { Header, Content, Footer } = Layout;

interface HomeProps {
  color?: any;
  question?: any;
  nextQuestion?: any;
  goTopreviousQuestion?: any;
}

interface HomeState {
  backgroundColor?: any;
  transitions?: any;
  logo?: any;
  templateStructure?: any;
  title?: any;
  subtitle?: any;
  value?: any;
  buttonColor?: any;
  textValue?: any;
  rateValue?: any;
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      backgroundColor: "#891732",
      transitions: "vertical",
      logo: "",
      templateStructure: 1,
      title: "This will be title",
      subtitle: "This will be subtitle",
      value: 1,
      buttonColor: "red",
      textValue: "",
      rateValue: 0
    };
  }

  goBack = () => {
    this.props.goTopreviousQuestion();
  };

  onHandleNext = e => {
    this.props.nextQuestion();
  };
  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  onChangeMultiple = checkedValues => {
    console.log("checked = ", checkedValues);
  };

  onChangeText = ({ target: { value } }) => {
    this.setState({ textValue: value });
  };

  handleChangeRate = value => {
    this.setState({ rateValue: value });
  };

  getChoices = question => {
    const radioStyle = {
      display: "block",
      height: "40px",
      lineHeight: "40px",
      width: "50px"
    };
    switch (question.type) {
      case "SINGLE_ANSWER":
        return (
          <SingleAnswer
            question={question}
            onChange={this.onChange}
            radioStyle={radioStyle}
            value={this.state.value}
          />
        );
      case "TEXT":
        return (
          <Text value={this.state.textValue} onChange={this.onChangeText} />
        );
      case "MULTIPLE_ANSWER":
        return (
          <MultipleAnswer
            question={question}
            onChange={this.onChangeMultiple}
            radioStyle={radioStyle}
          />
        );
      case "RATING_SCALE":
        return (
          <RateScale
            character="star"
            question={question}
            onChange={this.handleChangeRate}
            value={this.state.rateValue}
          />
        );
      case "OPINION_SCALE":
        return (
          <RateScale
            character="smile"
            question={question}
            onChange={this.handleChangeRate}
            value={this.state.rateValue}
          />
        );
    }
  };
  render() {
    const {
      backgroundColor,
      templateStructure,
      transitions,
      logo,
      subtitle,
      title,
      buttonColor
    } = this.state;
    const { question, color } = this.props;
    return (
      <Layout
        className="layout"
        style={{ height: "100%", backgroundColor: "white" }}
      >
        <Header style={{ backgroundColor: color }}>
          <Button
            style={{ backgroundColor: color, border: "0px" }}
            onClick={this.goBack}
          >
            <Icon type="left" />
          </Button>
          <div className="logo" />
        </Header>
        <div
          style={{ minHeight: "31rem", padding: "0 40px", marginTop: "10px" }}
        >
          <Row>
            <Col style={{ marginTop: "10px" }}>
              <h3 style={{ textAlign: "center" }}>
                {question ? question.questionText : ""}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "10px" }}>{this.getChoices(question)}</Col>
          </Row>
        </div>
        <footer>
          <div className="error-text">error message</div>
          <div style={{ width: "60%", float: "right" }}>
            <Button
              style={{ width: "100%", backgroundColor: color }}
              onClick={this.onHandleNext}
            >
              Next
            </Button>
          </div>
        </footer>
      </Layout>
    );
  }
}

export default Home;
