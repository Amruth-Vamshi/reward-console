import * as React from 'react';
import ChoiceInput from './ChoiceInput';
import { ErrorBoundary, CardBox } from 'walkin-components';
import { Row, Col, Button, Icon, Spin, Modal, Slider, InputNumber } from 'antd';
import Includes from 'lodash/includes';
import './index.css';
const ChoiceMap = {
  SINGLE_ANSWER: true,
  MULTIPLE_ANSWER: true,
  RATING_SCALE: true,
  OPINION_SCALE: true,
  RANKING: true,
  DICHOTOMOUS: true,
  TEXT: true,
};

interface ChoiceFormProps {
  onLinkChoiceToQuestion?: any;
  questionnaire?: any;
  questionToEdit?: any;
  addChoice?: any;
  removeChoice?: any;
  addNewQuestion?: any;
  choiceData?: any;
  submitChoice?: any;
  isChoiceLoading?: any;
  onChoiceEdited?: any;
}

interface ChoiceFormState {
  visible: boolean;
  inputValue: string;
}

export default class ChoiceForm extends React.Component<
  ChoiceFormProps,
  ChoiceFormState
> {
  constructor(props: ChoiceFormProps) {
    super(props);
    this.state = {
      visible: false,
      inputValue: '',
    };
  }

  handleClick = e => {
    e.preventDefault();
    if (
      Includes(
        ['RATING_SCALE', 'OPINION_SCALE', 'RANKING'],
        this.props.questionToEdit.type
      )
    ) {
      this.setState({ visible: true });
    } else {
      this.props.addChoice();
    }
  };

  onChange = value => {
    console.log(value);
    this.setState({
      inputValue: value,
    });
  };

  CancelModal = () => {
    this.setState({
      visible: false,
    });
  };

  hideModal = () => {
    const range = {
      rangeStart: this.state.inputValue[0],
      rangeEnd: this.state.inputValue[1],
    };
    this.setState({
      visible: false,
    });
    this.props.addChoice(null, range);
  };
  getChoiceRows = () => {
    this.props.questionToEdit.choices
      ? (this.props.questionToEdit.choices = this.props.questionToEdit.choices)
      : (this.props.questionToEdit.choices = []);
    return this.props.questionToEdit.choices.map(choice => {
      return (
        <Row
          gutter={12}
          style={{
            marginTop: '1%',
          }}
          key={choice.id}
        >
          <Col span={24}>
            <CardBox>
              <ChoiceInput
                choice={choice}
                questionnaire={this.props.questionnaire}
                questionType={this.props.questionToEdit.type}
                removeChoice={this.props.removeChoice}
                addNewQuestion={this.props.addNewQuestion}
                onChoiceEdited={this.props.onChoiceEdited}
                submitChoice={this.props.submitChoice}
                onLinkChoiceToQuestion={this.props.onLinkChoiceToQuestion}
              />
            </CardBox>
          </Col>
        </Row>
      );
    });
  };

  render() {
    const { isChoiceLoading } = this.props;
    const { inputValue } = this.state;
    const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;
    if (ChoiceMap[this.props.questionToEdit.type]) {
      return (
        <ErrorBoundary>
          <Row>
            <Modal
              title="Please select the range for this choice"
              visible={this.state.visible}
              onOk={this.hideModal}
              onCancel={this.CancelModal}
              okText="Save"
            >
              <Row>
                <Col span={16}>
                  <Slider
                    range
                    min={this.props.questionToEdit.rangeMin}
                    max={this.props.questionToEdit.rangeMax}
                    onChange={this.onChange}
                    defaultValue={[0, 5]}
                  />
                </Col>
              </Row>
            </Modal>
            <Col span={24}>
              <h2>Configure choices</h2>
            </Col>
          </Row>
          {isChoiceLoading ? (
            <div className="divCenter">
              <Spin size="large" indicator={antIcon} />{' '}
            </div>
          ) : (
            this.getChoiceRows()
          )}
          <Row>
            <Col span={24}>
              <Row type="flex" justify="center">
                <Col>
                  <Button type="dashed" onClick={this.handleClick}>
                    <Icon type="plus" /> Add Choice
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </ErrorBoundary>
      );
    }
    return null;
  }
}
