import * as React from "react";
import PropTypes from "prop-types";
import { ErrorBoundary } from "walkin-components";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import {
  Form,
  TreeSelect,
  Row,
  Col,
  Popconfirm
} from "antd";
import { QUESTION_TYPES } from "../../../../../../../containers/Query";
import { FormComponentProps, FormItemProps } from "antd/lib/form";
declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];

interface FormHeaderProps extends FormComponentProps {
  onQuestionTypeEdit?: any
  onQuestionEdited?: any
  questionToEdit?: any
  questionType?: any
  questionTypesQuery?: any
}

interface FormHeaderState {
  showSubCategory: boolean,
  subCategory: any,
  popUpVisible: boolean,
  newTypeValue: any,
  validationStatus?: (typeof ValidateStatuses)[number]
}

class FormHeader extends React.Component<FormHeaderProps, FormHeaderState> {
  constructor(props: FormHeaderProps) {
    super(props);
    this.state = {
      showSubCategory: false,
      subCategory: {},
      popUpVisible: false,
      newTypeValue: null,
      validationStatus: "success"
    };
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
      type: this.props.questionType,
      range: [rangeMin, rangeMax]
    });
  };
  componentDidMount() {
    this.setCurrentQuestion();
  }

  componentDidUpdate(preValue) {
    if (this.props.questionToEdit.id !== preValue.questionToEdit.id) {
      this.setCurrentQuestion();
    }
  }

  getTreeNodes = questionTypes => {
    const { TreeNode } = TreeSelect;
    const treeNodes = [];
    const subtreeNodes = [];
    for (const questionType in questionTypes) {
      let node = null;
      let subNode = null;
      if (questionTypes.hasOwnProperty(questionType)) {
        if (typeof questionTypes[questionType] === "object") {
          node = (
            <TreeNode
              title={questionType}
              value={questionType}
              key={questionType}
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
      }
      treeNodes.push(node);
    }
    return treeNodes;
  };

  triggerPopup = (_, __, { preValue, triggerValue }) => {
    this.props.form.setFieldsValue({
      type: triggerValue
    });
    if (preValue && preValue.value !== triggerValue) {
      this.setState({
        popUpVisible: true,
        newTypeValue: triggerValue ? triggerValue : this.state.newTypeValue
        // validationStatus: "validating"
      });
    }
  };

  confirmTypeChange = () => {
    const { newTypeValue } = this.state;
    this.props.form.setFieldsValue({
      type: newTypeValue,
    });
    this.setState({
      popUpVisible: false,
      validationStatus: "success"
    });
    this.props.onQuestionTypeEdit(newTypeValue);
    //this.closeTypeChange();
  };

  closeTypeChange = () => {
    this.props.form.setFieldsValue({
      type: this.props.questionToEdit.type,
    });
    this.setState({
      popUpVisible: false,
      validationStatus: "success"
    });
  };

  showSubCategory = subCategory => {
    this.setState({ showSubCategory: true, subCategory: subCategory });
  };
  // menu = () => {
  //   const {
  //     questionTypesQuery: { questionTypes }
  //   } = this.props;
  //   const { Item } = Form;
  //   return (
  //       {/* {Object.keys(questionTypes).map((type, key) => (
  //         <Menu.Item
  //           key={key}
  //           onClick={() => this.showSubCategory(questionTypes[type])}
  //         >
  //           {type}
  //         </Menu.Item>
  //       ))} */}
  //       <TreeSelect> {this.getTreeNodes(questionTypes)} </TreeSelect>
  //   );
  // };

  subCatMenu = () => {
    const { subCategory } = this.state;
    const { Item } = Form;
    return this.getTreeNodes(subCategory);
  };

  getQuestionTypes = () => {
    const { questionTypesQuery } = this.props;
    const { questionTypes } = questionTypesQuery;

    return this.getTreeNodes(questionTypes);
  };

  onChangeMandatory = checked => {
    console.log(checked);
  };

  onChangeBranchLogic = checked => {
    console.log(checked);
  };
  render() {
    const {
      questionToEdit,
      questionType,
      form,
      questionTypesQuery: { questionTypes }
    } = this.props;
    const { getFieldDecorator } = form;
    const { Item } = Form;
    return (
      <ErrorBoundary>
        <Row
          style={{
            height: "6rem"
          }}
        >
          <Col span={24}>
            <Form layout="inline">
              <Item>
                <Item>
                  <Popconfirm
                    title="Changing question type will delete the existing choices, continue?"
                    visible={this.state.popUpVisible}
                    onConfirm={this.confirmTypeChange}
                    onCancel={this.closeTypeChange}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Item validateStatus={this.state.validationStatus}>
                      <p>Question Type</p>
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
                  </Popconfirm>
                </Item>
                <Item>
                  <Item validateStatus={this.state.validationStatus}>
                    <p>Related to</p>
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
                </Item>

              </Item>
              {/**
                TODO: UNCOMMENT THE FOLLOWING LINES WHEN WE HAVE SUPPORT CONTROLLING FOR MANDATORY AND BRANCH LOGIC IN BACKEND
              
              */}

              {/* <Item style={{ marginTop: "3rem" }}>
                <Item label="Mandatory">
                  <Switch
                    defaultChecked={true}
                    onChange={this.onChangeMandatory}
                  />
                </Item>
                <Item label="Branch Logic">
                  <Switch
                    defaultChecked={true}
                    onChange={this.onChangeBranchLogic}
                  />
                </Item> 
              </Item> */}


              {/* <Col span={12}>
              <Row>
                <Col span={12}>
                  <p>Question Type</p>
                  <TreeSelect placeholder="Please select" value={questionType}>
                    {this.getTreeNodes(questionTypes)}
                  </TreeSelect>
                </Col>
                <Col span={12}>
                  <p>Related to</p>
                  <TreeSelect placeholder="Please select" value={questionType}>
                    {this.getTreeNodes(questionTypes)}
                  </TreeSelect>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <br />
                  <br />
                  Mandatory{" "}
                  <Switch
                    defaultChecked={true}
                    onChange={this.onChangeMandatory}
                  />
                </Col>
                <Col span={12}>
                  <br />
                  <br />
                  Branch Logic{" "}
                  <Switch
                    defaultChecked={true}
                    onChange={this.onChangeBranchLogic}
                  />
                </Col>
              </Row>
            </Col> */}
            </Form>
          </Col>
        </Row>
      </ErrorBoundary>
    );
  }
}



// const onValuesChange = ({ onQuestionEdited }, __, formValue) => {
//   onQuestionEdited(formValue);
// };

const FormPane = Form.create<FormHeaderProps>({ name: "FormHeader" })(
  FormHeader
);

export default compose(
  graphql(QUESTION_TYPES, {
    name: "questionTypesQuery",
    options: {
      fetchPolicy: "cache-first"
    }
  }))(FormPane);
