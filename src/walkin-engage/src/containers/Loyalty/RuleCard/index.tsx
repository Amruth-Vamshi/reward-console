import React from 'react';
import { Row, Col, Modal, message } from 'antd';
import './index.css';
import Button from '../../../components/shared/Button/index';
import Input from '../../../components/shared/Input/index';
import * as jwt from 'jsonwebtoken';
import {
  GET_BUSINESS_RULE,
  UPDATE_BUSINESS_RULE,
  CREATE_BUSINESS_RULE,
  UPDATE_LOYALTY_PROGRAM,
  GET_LOYALTY_PROGRAM,
  UPDATE_RULE,
} from '../../../query/index';
import {
  convertTime,
  extractDataFromRuleExpression,
  generateRuleExpression,
} from 'walkin-engage/src/utils';

interface RuleCardProps {
  title: string;
  displayMessage: string;
  formName: string;
  client?: any;
  changeFormStatus: any;
  earnPercentage?: string;
  maxEarnablePointsPerTransaction?: string;
  pointsValidity?: string;
  maxEarnablePointsPerDay?: string;
  burnPercentage?: string;
  maxRedeemablePointsPerTransaction?: string;
  maxRedeemablePointsPerDay?: string;
  handleOnInputChange?: any;
  isLoyaltyActive?: any;
  loyaltyId?: any;
  loyaltyCode?: any;
  loyaltyCardCode?: any;
  earnRuleId?: any;
  burnRuleId?: any;
}

interface RuleCardState {
  showForm: boolean;
  isButtonDisabled: boolean;
}
class RuleCard extends React.Component<RuleCardProps, RuleCardState> {
  constructor(props: RuleCardProps) {
    super(props);
    this.state = {
      showForm: false,
      isButtonDisabled: false,
    };
  }

  formValidation = (nextProps = null) => {
    const {
      burnPercentage,
      maxRedeemablePointsPerDay,
      maxRedeemablePointsPerTransaction,
      earnPercentage,
      maxEarnablePointsPerDay,
      maxEarnablePointsPerTransaction,
      pointsValidity,
    } = nextProps ? nextProps : this.props;

    if (this.props.formName == 'Redemption rule') {
      if (
        !burnPercentage ||
        !maxRedeemablePointsPerDay ||
        !maxRedeemablePointsPerTransaction
      ) {
        this.setState({
          isButtonDisabled: true,
        });
        return false;
      } else {
        let val = burnPercentage;
        val =
          val[val.length - 1] == '%'
            ? parseInt(val.substr(0, val.length - 1))
            : parseInt(val);
        if (val > 100) {
          this.setState({
            isButtonDisabled: true,
          });
          return false;
        }
        this.setState({
          isButtonDisabled: false,
        });
        return true;
      }
    } else {
      if (
        !earnPercentage ||
        !maxEarnablePointsPerDay ||
        !maxEarnablePointsPerTransaction ||
        !pointsValidity
      ) {
        this.setState({
          isButtonDisabled: true,
        });
        return false;
      } else {
        let val = earnPercentage;
        val =
          val[val.length - 1] == '%'
            ? parseInt(val.substr(0, val.length - 1))
            : parseInt(val);
        if (val > 100) {
          this.setState({
            isButtonDisabled: true,
          });
          return false;
        }
        this.setState({
          isButtonDisabled: false,
        });
        return true;
      }
    }
  };

  UNSAFE_componentWillMount() {
    this.formValidation();
  }

  componentWillReceiveProps(nextProps) {
    this.formValidation(nextProps);
  }

  applyRule = async () => {
    if (this.state.isButtonDisabled) {
      return;
    }
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);

    if (!this.formValidation()) {
      message.warn('Please Enter all the rule details');
      return;
    }

    if (this.props.formName == 'Redemption rule' && this.props.burnRuleId) {
      try {
        let updatedBurnRule = await this.props.client.mutate({
          mutation: UPDATE_RULE,
          variables: {
            id: this.props.burnRuleId,
            input: {
              type: 'CUSTOM',
              ruleConfiguration: null,
              ruleExpression: generateRuleExpression(
                'burn',
                this.props.burnPercentage,
                this.props.maxRedeemablePointsPerTransaction,
                this.props.maxRedeemablePointsPerDay
              ),
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    } else if (this.props.earnRuleId) {
      try {
        let updatedEarnRule = await this.props.client.mutate({
          mutation: UPDATE_RULE,
          variables: {
            id: this.props.earnRuleId,
            input: {
              type: 'CUSTOM',
              ruleConfiguration: null,
              ruleExpression: generateRuleExpression(
                'earn',
                this.props.earnPercentage,
                this.props.maxEarnablePointsPerTransaction,
                this.props.maxEarnablePointsPerDay
              ),
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    }

    //updating loyalty program - pointsValidity
    if (this.props.isLoyaltyActive) {
      try {
        await this.props.client.mutate({
          mutation: UPDATE_LOYALTY_PROGRAM,
          variables: {
            input: {
              id: this.props.loyaltyId,
              loyaltyCode: this.props.loyaltyCode,
              loyaltyCardCode: this.props.loyaltyCardCode,
              expiryUnit: 'DAY',
              expiryValue: this.props.pointsValidity,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
    this.setState({
      showForm: false,
    });
    message.info('Rule configuration applied!');
  };

  render() {
    const { showForm, isButtonDisabled } = this.state;

    const {
      displayMessage,
      formName,
      title,
      earnPercentage,
      maxEarnablePointsPerDay,
      maxEarnablePointsPerTransaction,
      pointsValidity,
      burnPercentage,
      maxRedeemablePointsPerDay,
      maxRedeemablePointsPerTransaction,
      handleOnInputChange,
    } = this.props;

    return (
      <React.Fragment>
        <div
          className="rule-card"
          onClick={() => {
            this.props.changeFormStatus();
            this.setState({ showForm: true });
          }}
        >
          <Row>
            <Col span={18} className="rule-title">
              {formName === 'Redemption rule'
                ? `${burnPercentage} ${title.substr(3)}`
                : title}
            </Col>
            <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                size="btnn-small"
                style="btnn-inline-text"
                onClick={() => {}}
              >
                Edit
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="rule-message">
              {formName === 'Redemption rule'
                ? displayMessage
                : `${displayMessage.substr(
                    0,
                    4
                  )} ${earnPercentage} ${displayMessage.substr(
                    7,
                    displayMessage.length - 13
                  )}${maxEarnablePointsPerTransaction}`}
            </Col>
          </Row>
        </div>

        <Modal
          centered
          visible={showForm}
          onCancel={() => this.setState({ showForm: false })}
          footer={null}
        >
          <p className="form-header">{formName}</p>

          {formName === 'Redemption rule' ? (
            <p style={{ fontSize: '15px' }}>1 Point = 1 Rupee off</p>
          ) : null}

          <div className="form-input-row">
            <Row gutter={16}>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <Input
                  value={
                    formName === 'Redemption rule'
                      ? burnPercentage
                      : earnPercentage
                  }
                  onChange={handleOnInputChange}
                  title="Percent of pre-tax bill"
                  target1="burnPercentage"
                  target2="earnPercentage"
                  placeholder="Enter earn percentage"
                  validations={['required', 'percentage']}
                />
              </Col>

              <Col xs={{ span: 24 }} sm={{ span: 12 }} className="input-box">
                <Input
                  value={
                    formName === 'Redemption rule'
                      ? maxRedeemablePointsPerTransaction
                      : maxEarnablePointsPerTransaction
                  }
                  onChange={handleOnInputChange}
                  target1="maxRedeemablePointsPerTransaction"
                  target2="maxEarnablePointsPerTransaction"
                  placeholder="Enter transaction points"
                  title={
                    formName === 'Redemption rule'
                      ? 'Max Redeemable Points Per Transaction'
                      : 'Max Earnable Points Per Transaction'
                  }
                  validations={['numeric', 'required']}
                />
              </Col>
            </Row>
          </div>

          {formName === 'Redemption rule' ? null : (
            <div className="form-input-row">
              <Row gutter={16}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <div className="form-subHeader">
                    <span>Point's Validity</span>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} className="input-box">
                  <div className="form-subHeader">
                    <Input
                      value={pointsValidity}
                      width="147px"
                      onChange={handleOnInputChange}
                      target2="pointsValidity"
                      placeholder="Enter points validity"
                      validations={['numeric', 'required']}
                    />
                    <span style={{ marginLeft: '10px' }}>Days</span>
                  </div>
                </Col>
              </Row>
            </div>
          )}

          <div className="form-input-row">
            <Row gutter={16}>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <div className="form-subHeader">
                  <span>
                    {formName === 'Redemption rule'
                      ? 'Max Redeemable Points Per Day'
                      : 'Max Earnable Points Per Day'}
                  </span>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} className="input-box">
                <div className="form-subHeader">
                  <Input
                    value={
                      formName === 'Redemption rule'
                        ? maxRedeemablePointsPerDay
                        : maxEarnablePointsPerDay
                    }
                    onChange={handleOnInputChange}
                    target1="maxRedeemablePointsPerDay"
                    target2="maxEarnablePointsPerDay"
                    placeholder="Enter points"
                    validations={['numeric', 'required']}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <Button
            style={`btnn-primary${isButtonDisabled ? '-disabled' : ''}`}
            size="btnn-medium"
            onClick={this.applyRule}
          >
            Apply
          </Button>
        </Modal>
      </React.Fragment>
    );
  }
}

export default RuleCard;
