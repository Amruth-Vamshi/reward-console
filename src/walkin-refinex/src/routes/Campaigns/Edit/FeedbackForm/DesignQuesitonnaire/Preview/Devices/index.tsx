import './index.css';
import * as React from 'react';
import { Card, Col, Row, message } from 'antd';
import Home from '../../feedback-form/index';
import {
  Iphone5c,
  Iphone8,
  Iphone8plus,
  IphoneX,
  Nexus5,
  HtcOne,
  MacBookPro,
  Lumia920,
  Galaxys5,
} from './Device/index';

interface DeviceProps {
  color?: any;
  isFirstQuestion?: any;
  question?: any;
  nextQuestion?: any;
  goTopreviousQuestion?: any;
  isLastQuestion?: any;
}

export default class Device extends React.Component<DeviceProps, {}> {
  constructor(props: DeviceProps) {
    super(props);
  }
  warning = () => {
    // message.warning('This is last question');
  };

  newWarning = () => {
    message.warning('This is first question');
  };

  render() {
    const {
      question,
      nextQuestion,
      isLastQuestion,
      goTopreviousQuestion,
      isFirstQuestion,
      color,
    } = this.props;

    return (
      <Nexus5>
        <Row>
          <Col style={{ width: '100%', height: '100%' }}>
            {isLastQuestion ? this.warning() : null}
            {isFirstQuestion ? this.newWarning() : null}
            <Home
              color={color}
              question={question}
              nextQuestion={nextQuestion}
              goTopreviousQuestion={goTopreviousQuestion}
            />
          </Col>
        </Row>
      </Nexus5>
    );
  }
}
