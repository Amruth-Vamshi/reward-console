import React from 'react';
import './style.css';
import { Row, Col, Modal, message } from 'antd';
import RuleCard from './RuleCard/index';
import Button from '../../components/shared/Button/index';
import { withApollo, ApolloProviderProps } from 'react-apollo';
import * as jwt from 'jsonwebtoken';
import {
  GET_LOYALTY_PROGRAM,
  GET_LOYALTY_CARD,
  CREATE_LOYALTY_PROGRAM,
  GET_BUSINESS_RULE,
  CREATE_RULE_ATTRIBUTE,
  CREATE_RULE_ENTITY,
  PAUSE_CAMPAIGN,
  UNPAUSE_CAMPAIGN,
  GET_RULE_ENTITIES,
} from '../../query/index';
import LaunchButton from 'walkin-engage/src/components/Loyalty/LaunchButton';
import { convertTime } from 'walkin-engage/src/utils';
import CommunicationNotification from './CommunicationNotification';

interface LoyaltyProps extends ApolloProviderProps<any> {}

interface LoyaltyState {
  buttonState: string;
  showPauseConformation: boolean;
  screenType: string;
  currentRuleFormName: string;
  earnPercentage: string;
  maxEarnablePointsPerTransaction?: string;
  pointsValidity: string;
  maxEarnablePointsPerDay: string;
  burnPercentage: string;
  maxRedeemablePointsPerTransaction: string;
  maxRedeemablePointsPerDay: string;
  loyaltyCardCode: string;
  startDate: string;
  isLoyaltyActive: boolean;
  loyaltyCode: any;
  loyaltyId: any;
  campaignId: any;
}

class Loyalty extends React.Component<LoyaltyProps, LoyaltyState> {
  constructor(props: LoyaltyProps) {
    super(props);
    this.state = {
      buttonState: '',
      showPauseConformation: false,
      screenType:
        window.screen.width <= 495
          ? 'MOBILE'
          : window.screen.width <= 685
          ? 'TAB'
          : 'DESKTOP',
      currentRuleFormName: '',
      earnPercentage: '10%',
      maxEarnablePointsPerTransaction: '150',
      pointsValidity: '80',
      maxEarnablePointsPerDay: '1000',
      burnPercentage: '10%',
      maxRedeemablePointsPerTransaction: '150',
      maxRedeemablePointsPerDay: '1000',
      loyaltyCardCode: '',
      startDate: '',
      isLoyaltyActive: false,
      loyaltyCode: '',
      loyaltyId: '',
      campaignId: '',
    };
  }

  handleOnInputChange = (e, burnValue, earnValue) => {
    let state = {};
    if (this.state.currentRuleFormName == 'Redemption rule') {
      state[burnValue] = e.target.value;
    } else {
      state[earnValue] = e.target.value;
    }
    this.setState(state);
    return e.target.value;
  };

  createLoyaltyProgram = async () => {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);

    let currentDateTime = Date.now();
    let startTime = new Date(currentDateTime);
    let endTime = new Date(currentDateTime);
    endTime.setDate(endTime.getDate() + parseInt(this.state.pointsValidity));

    console.log('creating rule entities....');

    let loyaltyRuleEntity, ruleAttribute;

    try {
      loyaltyRuleEntity = await this.props.client.query({
        query: GET_RULE_ENTITIES,
        variables: {
          input: {
            organizationId: org_id,
            entityName: 'Loyalty',
          },
        },
        fetchPolicy: 'network-only',
      });
      if (!loyaltyRuleEntity.data.ruleEntities.length) {
        loyaltyRuleEntity = await this.props.client.mutate({
          mutation: CREATE_RULE_ENTITY,
          variables: {
            input: {
              entityName: 'Loyalty',
              entityCode: 'Loyalty',
              status: 'ACTIVE',
              organizationId: org_id,
            },
          },
        });
        loyaltyRuleEntity = loyaltyRuleEntity.data.createRuleEntity;
        console.log(loyaltyRuleEntity);
      } else {
        loyaltyRuleEntity = loyaltyRuleEntity.data.ruleEntities[0];
        console.log(loyaltyRuleEntity);
      }

      console.log('creating rule attribute.....');

      let attributeFound = false;
      if (loyaltyRuleEntity.ruleAttributes != null) {
        loyaltyRuleEntity.ruleAttributes.every(attribute => {
          if (attribute.attributeName == 'totalAmount') {
            attributeFound = true;
            ruleAttribute = attribute;
            return false;
          }
          return true;
        });
      }

      if (!attributeFound) {
        ruleAttribute = await this.props.client.mutate({
          mutation: CREATE_RULE_ATTRIBUTE,
          variables: {
            input: {
              attributeName: 'totalAmount',
              status: 'ACTIVE',
              attributeValueType: 'STRING',
              ruleEntityId: loyaltyRuleEntity.id,
              organizationId: org_id,
            },
          },
        });
        ruleAttribute = ruleAttribute.data.createRuleAttribute;
        console.log(ruleAttribute);
      } else {
        console.log(ruleAttribute);
      }

      console.log('creating a loyalty program ....');

      let loyaltyProgramInput = {
        loyaltyCode: `LOYALTY_PROGRAM`,
        loyaltyCardCode: this.state.loyaltyCardCode,
        organizationId: org_id,
        expiryUnit: 'DAY',
        expiryValue: parseInt(this.state.pointsValidity),
        campaign: {
          name: 'Campaign',
          campaignType: 'LOYALTY',
          startTime: startTime.toISOString(),
          endTime: endTime.toISOString(),
          organization_id: org_id,
        },
        earnRuleData: {
          name: 'EARN_RULE',
          type: 'SIMPLE',
          organizationId: org_id,
          ruleConfiguration: {
            rules: [
              {
                attributeName: 'total',
                ruleAttributeId: ruleAttribute.id,
                attributeValue: '100',
                expressionType: 'EQUALS',
                attributeEntityName: 'Loyalty',
                attributeEntityId: loyaltyRuleEntity.id,
              },
            ],
            combinator: 'and',
          },
        },
        earnRuleValidation: {
          type: 'PERCENTAGE_OF_TOTAL_AMOUNT',
          value: this.state.earnPercentage.substr(
            0,
            this.state.earnPercentage.length - 1
          ),
        },
        burnRuleData: {
          name: 'BURN_RULE',
          type: 'SIMPLE',
          organizationId: org_id,
          ruleConfiguration: {
            rules: [
              {
                attributeName: 'total',
                ruleAttributeId: ruleAttribute.id,
                attributeValue: '100',
                expressionType: 'EQUALS',
                attributeEntityName: 'Loyalty',
                attributeEntityId: loyaltyRuleEntity.id,
              },
            ],
            combinator: 'and',
          },
        },
        burnRuleValidation: {
          type: 'PERCENTAGE_OF_TOTAL_AMOUNT',
          value: this.state.burnPercentage.substr(
            0,
            this.state.burnPercentage.length - 1
          ),
        },
        expiryRuleConfiguration: {
          name: 'EXPIRY_RULE',
          type: 'SIMPLE',
          organizationId: org_id,
          ruleConfiguration: {
            rules: [
              {
                attributeName: 'total',
                ruleAttributeId: ruleAttribute.id,
                attributeValue: '1000',
                expressionType: 'EQUALS',
                attributeEntityName: 'Loyalty',
                attributeEntityId: loyaltyRuleEntity.id,
              },
            ],
            combinator: 'and',
          },
        },
      };

      let loyaltyProgramResponse = await this.props.client.mutate({
        mutation: CREATE_LOYALTY_PROGRAM,
        variables: { input: loyaltyProgramInput },
      });
      let loyaltyProgram = Object.assign(
        loyaltyProgramResponse.data.createLoyaltyProgram
      );
      console.log(loyaltyProgram);
      this.setState({
        buttonState: 'pause',
        pointsValidity: loyaltyProgram.expiryValue,
        startDate: convertTime(loyaltyProgram.campaign.startTime),
        isLoyaltyActive: loyaltyProgram.campaign.status == 'ACTIVE',
        loyaltyCardCode: loyaltyProgram.loyaltyCardCode,
        loyaltyCode: loyaltyProgram.loyaltyCode,
        loyaltyId: loyaltyProgram.id,
        campaignId: loyaltyProgram.campaign.id,
      });
    } catch (e) {
      console.log(e);
    }
  };

  changeButtonState = () => {
    if (this.state.buttonState === 'launch') {
      this.createLoyaltyProgram();
    }
    if (this.state.buttonState === 'pause') {
      this.setState({
        showPauseConformation: true,
      });
    }
    if (this.state.buttonState === 'resume') {
      this.onResumeLoyalty();
    }
  };

  onPauseLoyalty = async () => {
    console.log(this.state.campaignId);
    try {
      let pauseResponse = await this.props.client.mutate({
        mutation: PAUSE_CAMPAIGN,
        variables: {
          id: this.state.campaignId,
        },
      });
      console.log(pauseResponse);
      this.setState({ showPauseConformation: false, buttonState: 'resume' });
    } catch (e) {
      console.log(e);
    }
  };

  onResumeLoyalty = async () => {
    try {
      let unpauseResponse = await this.props.client.mutate({
        mutation: UNPAUSE_CAMPAIGN,
        variables: {
          id: this.state.campaignId,
        },
      });
      console.log(unpauseResponse);
      this.setState({
        buttonState: 'pause',
      });
    } catch (e) {
      console.log(e);
    }
  };

  async UNSAFE_componentWillMount() {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);
    //getting max earnable points per transaction
    try {
      let maxEarnTransaction = await this.props.client.query({
        query: GET_BUSINESS_RULE,
        variables: {
          input: { ruleLevel: 'LOYALTY', ruleType: 'TRANSACTION_EARN_LIMIT' },
        },
        fetchPolicy: 'network-only',
      });
      if (maxEarnTransaction.data.businessRules.length) {
        let copy = Object.assign(maxEarnTransaction.data.businessRules[0]);

        this.setState({
          maxEarnablePointsPerTransaction: copy.ruleDefaultValue,
        });
        console.log(this.state.maxEarnablePointsPerTransaction);
      }
      //getting max redeemable points per transaction
      let maxBurnTransaction = await this.props.client.query({
        query: GET_BUSINESS_RULE,
        variables: {
          input: { ruleLevel: 'LOYALTY', ruleType: 'TRANSACTION_BURN_LIMIT' },
        },
        fetchPolicy: 'network-only',
      });
      if (maxBurnTransaction.data.businessRules.length) {
        let copy = Object.assign(maxBurnTransaction.data.businessRules[0]);

        this.setState({
          maxRedeemablePointsPerTransaction: copy.ruleDefaultValue,
        });
        console.log(this.state.maxRedeemablePointsPerTransaction);
      }
      //getting loyalty card
      let loyaltyCardResponse = await this.props.client.query({
        query: GET_LOYALTY_CARD,
        variables: { organizationId: org_id },
      });

      let loyaltyCards = loyaltyCardResponse.data.loyaltyCards.data;
      if (!loyaltyCards.length) {
        message.warn('Create a loyalty card to avail this feature!');
        return;
      }
      this.setState({ loyaltyCardCode: loyaltyCards[0].code });
      //getting the loyalty program if exists.
      let loyaltyProgramResponse = await this.props.client.query({
        query: GET_LOYALTY_PROGRAM,
        variables: {
          loyaltyCardCode: loyaltyCards[0].code,
          organizationId: org_id,
        },
        fetchPolicy: 'network-only',
      });
      let loyaltyPrograms = loyaltyProgramResponse.data.loyaltyPrograms.data;
      //setting initial button state
      console.log(loyaltyProgramResponse);
      if (loyaltyPrograms.length) {
        //if loyalty program - filling points validity.
        this.setState({
          pointsValidity: loyaltyPrograms[0].expiryValue,
          startDate: convertTime(loyaltyPrograms[0].campaign.startTime),
          isLoyaltyActive: loyaltyPrograms[0].campaign.status == 'ACTIVE',
          loyaltyCardCode: loyaltyPrograms[0].loyaltyCardCode,
          loyaltyCode: loyaltyPrograms[0].loyaltyCode,
          loyaltyId: loyaltyPrograms[0].id,
          campaignId: loyaltyPrograms[0].campaign.id,
        });
        if (this.state.isLoyaltyActive) {
          this.setState({ buttonState: 'pause' });
        } else {
          this.setState({ buttonState: 'resume' });
        }
      } else {
        this.setState({ buttonState: 'launch' });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {
      earnPercentage,
      maxEarnablePointsPerDay,
      maxEarnablePointsPerTransaction,
      pointsValidity,
      burnPercentage,
      maxRedeemablePointsPerDay,
      maxRedeemablePointsPerTransaction,
      isLoyaltyActive,
      loyaltyId,
      loyaltyCode,
      loyaltyCardCode,
    } = this.state;

    return (
      <React.Fragment>
        <div className="lp-container">
          <div className="lp-header">
            <Row className="lp-welcome">Hi! Welcome</Row>
            <Row className="lp-subHeader">Configure Your Loyalty Program</Row>
          </div>

          <div className="lp-configure-card">
            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <p className="rule-header">Earning rule</p>
                <RuleCard
                  title="Percentage Cashback"
                  displayMessage="Get 10% on pre-tax bill amount up to ₹100.00"
                  formName="Earning rule"
                  client={this.props.client}
                  changeFormStatus={() => {
                    this.setState({ currentRuleFormName: 'Earning rule' });
                  }}
                  earnPercentage={earnPercentage}
                  maxEarnablePointsPerDay={maxEarnablePointsPerDay}
                  maxEarnablePointsPerTransaction={
                    maxEarnablePointsPerTransaction
                  }
                  pointsValidity={pointsValidity}
                  handleOnInputChange={this.handleOnInputChange}
                  isLoyaltyActive={isLoyaltyActive}
                  loyaltyId={loyaltyId}
                  loyaltyCardCode={loyaltyCardCode}
                  loyaltyCode={loyaltyCode}
                />
              </Col>

              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <p className="rule-header">Redemption rule</p>
                <RuleCard
                  title="10% on total bill value"
                  displayMessage="1 points = 1 rupees"
                  formName="Redemption rule"
                  client={this.props.client}
                  changeFormStatus={() => {
                    this.setState({ currentRuleFormName: 'Redemption rule' });
                  }}
                  burnPercentage={burnPercentage}
                  maxRedeemablePointsPerDay={maxRedeemablePointsPerDay}
                  maxRedeemablePointsPerTransaction={
                    maxRedeemablePointsPerTransaction
                  }
                  handleOnInputChange={this.handleOnInputChange}
                />
              </Col>
            </Row>

            <CommunicationNotification />

            <Row>
              <Col span={12}>
                <LaunchButton
                  buttonState={this.state.buttonState}
                  changeButtonState={this.changeButtonState}
                />
              </Col>

              {this.state.buttonState !== 'launch' ? (
                <Col span={12}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      flexDirection: 'column',
                      textAlign: 'right',
                      padding: '0 15px',
                    }}
                  >
                    <p
                      style={{
                        margin: '0px',
                        fontSize: '13px',
                        color: '#00000099',
                      }}
                    >
                      Started Date and Time
                    </p>

                    <p
                      style={{
                        margin: '0px',
                        fontSize: '15px',
                        color: '#000000CC',
                      }}
                    >
                      {this.state.startDate}
                    </p>
                  </div>
                </Col>
              ) : null}
            </Row>
          </div>
        </div>

        <Modal
          centered
          visible={this.state.showPauseConformation}
          onCancel={() => this.setState({ showPauseConformation: false })}
          footer={null}
        >
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#000000CC',
            }}
          >
            Are you sure?
          </p>

          <p
            style={{
              fontSize: '15px',
              color: '#333333',
            }}
          >
            Earning points would stop, Customers can redeem their existing
            points until it expires
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              onClick={this.onPauseLoyalty}
              size="btnn-small"
              style="btnn-primary"
            >
              Ok, Continue
            </Button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withApollo(Loyalty);
