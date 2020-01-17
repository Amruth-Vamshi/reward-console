import * as React from "react";
import { CardBox, ErrorBoundary } from "walkin-components";
import throttle from "lodash.throttle"
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
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
  Tooltip,
  Icon
} from "antd";
import { QUESTION_TYPES } from "../../../../../../../containers/Query";
import { FormComponentProps } from "antd/lib/form";

const QUESTION_WITH_SLIDER = {
  RATING_SCALE: "RATING_SCALE",
  OPINION_SCALE: "OPINION_SCALE"
};
declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];
interface QuestionFormProps extends FormComponentProps {
  showButton?: any
  onQuestionEdited?: any
  onQuestionSubmitted?: any
  questionToEdit?: any
  style?: any
  questionTypesQuery?: any
}


interface QuestionFormState {
  popUpVisible: boolean,
  newTypeValue: any,
  validationStatus?: (typeof ValidateStatuses)[number],
  showButton: boolean
}

class QuestionForm extends React.Component<QuestionFormProps, QuestionFormState> {
  private handleClickThrottled
  constructor(props: QuestionFormProps) {
    super(props);
    this.state = {
      popUpVisible: false,
      newTypeValue: null,
      validationStatus: "success",
      showButton: false
    };
    this.handleClickThrottled = throttle(this.submitQuestion, 1000)
  }

  setCurrentQuestion = () => {
    const {
      questionText,
      type,
      rangeMax,
      rangeMin
    } = this.props.questionToEdit;

    this.props.form.setFieldsValue({
      questionText,
      type,
      range: [rangeMin, rangeMax]
    });
  };
  componentDidMount() {
    this.setCurrentQuestion();
  }
  componentWillUnmount() {
    this.handleClickThrottled.cancel()
  }

  componentDidUpdate(preValue) {
    if (this.props.questionToEdit.id !== preValue.questionToEdit.id) {
      this.setCurrentQuestion();
    }
  }

  getTreeNodes = questionTypes => {
    const { TreeNode } = TreeSelect;
    const treeNodes = [];
    for (const questionType in questionTypes) {
      let node = null;
      if (questionTypes.hasOwnProperty(questionType)) {
        if (typeof questionTypes[questionType] === "object") {
          node = (
            <TreeNode
              title={questionType}
              value={questionType}
              key={questionType}
              selectable={false}
            >
              {this.getTreeNodes(questionTypes[questionType])}
            </TreeNode>
          );
        } else {
          node = (
            <TreeNode
              value={questionType}
              title={questionType}
              key={questionType}
            />
          );
        }
        treeNodes.push(node);
      }
    }
    return treeNodes;
  };

  getQuestionTypes = () => {
    const { questionTypesQuery } = this.props;
    const { questionTypes } = questionTypesQuery;

    return this.getTreeNodes(questionTypes);
  };

  submitQuestion = e => {
    e.preventDefault();
    console.log(this.props.onQuestionSubmitted);
    this.props.onQuestionSubmitted();
  };

  triggerPopup = (_, __, { preValue, triggerValue }) => {
    this.props.form.setFieldsValue({
      type: triggerValue
    });
    if (preValue && preValue.value !== triggerValue) {
      this.setState({
        popUpVisible: true,
        newTypeValue: triggerValue
        // validationStatus: "validating"
      });
    }
  };

  confirmTypeChange = () => {
    const { newTypeValue } = this.state;
    this.props.form.setFieldsValue({
      type: newTypeValue
    });
    this.closeTypeChange();
  };

  closeTypeChange = () => {
    this.setState({
      popUpVisible: false,
      newTypeValue: null,
      validationStatus: "success"
    });
  };

  render() {
    const { questionToEdit, form, style } = this.props;
    const { getFieldDecorator, isFieldsTouched } = form;
    const { Item } = Form;
    const { TextArea } = Input;
    let props = {
      suffix: <span />
    }
    if (isFieldsTouched(["questionText"]) || isFieldsTouched(["range"])) {
      props = {
        suffix: (<Tooltip title="Update Question">
          <Button
            onClick={this.submitQuestion}
            type="primary"
            style={{ margin: "auto" }}
            size={"small"}>Update</Button>
        </Tooltip>)

      }
    }

    return (
      <ErrorBoundary>
        <Row style={style}>
          <Col span={24}>
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              onSubmit={this.submitQuestion}
            >
              <Item label="Question Text">
                {getFieldDecorator("questionText", {
                  rules: [
                    {
                      required: true
                    }
                  ]
                })(<Input {...props} />)}
              </Item>
              {/* <Popconfirm
                title="Changin question type will delete the existing choices, continue?"
                visible={this.state.popUpVisible}
                onConfirm={this.confirmTypeChange}
                onCancel={this.closeTypeChange}
                okText="Yes"
                cancelText="No"
              >
                <Item label="Type" validateStatus={this.state.validationStatus}>
                  {getFieldDecorator("type", {
                    rules: [
                      {
                        required: true
                      }
                    ],
                    getValueFromEvent: this.triggerPopup
                  })(
                    <TreeSelect placeholder="Please select">
                      {this.getQuestionTypes()}
                    </TreeSelect>
                  )}
                </Item>
              </Popconfirm> */}

              <Item
                label="Range"
                style={
                  QUESTION_WITH_SLIDER[this.props.questionToEdit.type]
                    ? {}
                    : {
                      display: "none"
                    }
                }
              >
                {getFieldDecorator("range", {
                  initialValue: [this.props.questionToEdit.rangeMin, this.props.questionToEdit.rangeMax]
                })(<Slider range />)}
              </Item>
              <Item wrapperCol={{ offset: 18 }}>
                <Button
                  type="primary"
                  style={{ position: "absolute", left: "-99999px" }}
                />
              </Item>
            </Form>
          </Col>
        </Row>
      </ErrorBoundary >
    );
  }
}

// const onValuesChange = ({ onQuestionEdited }, __, formValue) => {
//   onQuestionEdited(formValue);
// };

const FormPane = Form.create({
  name: "QuestionForm",
  onValuesChange(props: QuestionFormProps, values) {
    props.onQuestionEdited(values);
  }
})(QuestionForm);

export default compose(
  graphql(QUESTION_TYPES, {
    name: "questionTypesQuery",
    options: {
      fetchPolicy: "cache-first"
    }
  }))(FormPane);
