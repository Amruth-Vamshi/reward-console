import * as React from "react";

import { Query, graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import {
  Form,
  Slider,
  Button,
  Input,
  TreeSelect,
  Row,
  Col,
  Popconfirm,
  message,
  List,
  Card,
  Icon,
  Spin
} from "antd";
import { QUESTION_TYPES } from "../../../../../../containers/Query";

interface QuestionTypeSelectionProps {
  onQuestionTypeSelector?: any
  questionTypesQuery?: any
}

interface QuestionTypeSelectionState {
  data: any
}

class QuestionTypeSelection extends React.Component<QuestionTypeSelectionProps, QuestionTypeSelectionState> {


  constructor(props: QuestionTypeSelectionProps) {
    super(props);
    this.state = {
      data: []
    };
  }

  getTreeNodes = (questionTypes): any => {
    const { TreeNode } = TreeSelect;
    const data = [];
    for (const questionType in questionTypes) {
      let node = null;
      if (questionTypes.hasOwnProperty(questionType)) {
        if (typeof questionTypes[questionType] === "object") {
          node = this.getTreeNodes(questionTypes[questionType]);
        } else {
          node = questionType;
        }
        data.push(node);
      }
    }
    return data;
  };

  componentDidMount() {
    const {
      questionTypesQuery: { questionTypes }
    } = this.props;
    const data = this.getTreeNodes(questionTypes).flat(5);
    this.setState({ data: data });
  }

  componentDidUpdate(preValue) {
    if (this.props.questionTypesQuery.loading !== preValue.questionTypesQuery.loading) {
      const {
        questionTypesQuery: { questionTypes }
      } = this.props;
      const data = this.getTreeNodes(questionTypes).flat(5);
      this.setState({ data: data });
    }
  }

  render() {
    const { data } = this.state;
    console.log(this.props)
    const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;
    return (
      <Row
        style={{
          height: "100%",
          overflowX: "scroll"
        }}
      >
        {this.props.questionTypesQuery.loading ? <div className="divCenter"><Spin size="large" indicator={antIcon} /> </div> :
          <React.Fragment>
            <Col style={{ margin: "1rem" }} span={22}>
              Question Type
        </Col>
            <Col span={22}>
              <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={data}
                renderItem={(item: any) => (
                  <List.Item>
                    <Card
                      style={{
                        cursor: "pointer"
                      }}
                      onClick={e => this.props.onQuestionTypeSelector(item)}
                    >
                      {item.replace("_", " ")}
                    </Card>
                  </List.Item>
                )}
              />
            </Col>
          </React.Fragment>
        }
      </Row>
    );
  }
}



export default compose(
  graphql(QUESTION_TYPES, {
    name: "questionTypesQuery",
    options: {
      fetchPolicy: "cache-first"
    }
  }))(QuestionTypeSelection);
