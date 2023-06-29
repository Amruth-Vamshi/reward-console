import React from 'react';
import './style.css';
import { Row, Col, Modal, message } from 'antd';
import RuleCard from './RuleCard/index';
import Button from '../../components/shared/Button/index';
import { withApollo, ApolloProviderProps } from 'react-apollo';
import * as jwt from 'jsonwebtoken';
import moment from 'moment-timezone';

import {
  GET_LOYALTY_PROGRAM,
  GET_LOYALTY_CARD,
  CREATE_LOYALTY_PROGRAM,
  GET_ORGANIZATION,
  CREATE_RULE_ATTRIBUTE,
  CREATE_RULE_ENTITY,
  PAUSE_CAMPAIGN,
  UNPAUSE_CAMPAIGN,
  GET_RULE_ENTITIES,
  LAUNCH_CAMPAIGN,
  UPDATE_LOYALTY_PROGRAM,
  UPDATE_RULE,
} from '../../query/index';
import LaunchButton from 'walkin-engage/src/components/Loyalty/LaunchButton';
import {
  convertTime,
  extractDataFromRuleExpression,
  generateRuleExpression,
} from 'walkin-engage/src/utils';
import CommunicationNotification from './CommunicationNotification';

interface LoyaltyProps extends ApolloProviderProps<any> {}

interface LoyaltyState {
  buttonState: string;
  showPauseConformation: boolean;
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
  endDate: any;
  isLoyaltyActive: boolean;
  loyaltyCode: any;
  loyaltyId: any;
  campaignId: any;
  earnRuleId: any;
  burnRuleId: any;
  orgCode: any;
}

class Loyalty extends React.Component<LoyaltyProps, LoyaltyState> {
  constructor(props: LoyaltyProps) {
    super(props);
    this.state = {
      buttonState: 'launch',
      showPauseConformation: false,
      currentRuleFormName: '',
      earnPercentage: '10%',
      maxEarnablePointsPerTransaction: '300',
      pointsValidity: '90',
      maxEarnablePointsPerDay: '1000',
      burnPercentage: '100%',
      maxRedeemablePointsPerTransaction: '300',
      maxRedeemablePointsPerDay: '1000',
      loyaltyCardCode: '',
      startDate: '',
      isLoyaltyActive: false,
      loyaltyCode: '',
      loyaltyId: '',
      campaignId: '',
      endDate: '',
      earnRuleId: '',
      burnRuleId: '',
      orgCode: '',
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

  createRuleEntity = async (entityName, org_id) => {
    try {
      let ruleEntity = await this.props.client.query({
        query: GET_RULE_ENTITIES,
        variables: {
          input: {
            organizationId: org_id,
            entityName: entityName,
          },
        },
        fetchPolicy: 'network-only',
      });
      if (!ruleEntity.data.ruleEntities.length) {
        let ruleEntity = await this.props.client.mutate({
          mutation: CREATE_RULE_ENTITY,
          variables: {
            input: {
              entityName: entityName,
              entityCode: entityName,
              status: 'ACTIVE',
              organizationId: org_id,
            },
          },
        });
        ruleEntity = ruleEntity.data.createRuleEntity;
        return ruleEntity;
      } else {
        ruleEntity = ruleEntity.data.ruleEntities[0];
        return ruleEntity;
      }
    } catch (e) {
      console.log(e);
    }
  };

  createRuleAttribute = async (ruleEntity, attributeName, org_id) => {
    let attributeFound = false,
      ruleAttribute;

    if (ruleEntity.ruleAttributes != null) {
      ruleEntity.ruleAttributes.every(attribute => {
        if (attribute.attributeName == attributeName) {
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
            attributeName: attributeName,
            status: 'ACTIVE',
            attributeValueType: 'NUMBER',
            ruleEntityId: ruleEntity.id,
            organizationId: org_id,
          },
        },
      });
      ruleAttribute = ruleAttribute.data.createRuleAttribute;
      return ruleAttribute;
    } else {
      return ruleAttribute;
    }
  };

  createLoyaltyProgram = async () => {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);
    const {
      earnPercentage,
      burnPercentage,
      maxEarnablePointsPerTransaction,
      maxRedeemablePointsPerTransaction,
      pointsValidity,
      maxEarnablePointsPerDay,
      maxRedeemablePointsPerDay,
      loyaltyCardCode,
      orgCode,
    } = this.state;
    let currentDateTime = Date.now();
    let startTime = new Date(currentDateTime);
    let endTime = new Date(currentDateTime);
    endTime.setDate(endTime.getDate() + parseInt(this.state.pointsValidity));

    let loyaltyRuleEntity, ruleAttribute;

    try {
      loyaltyRuleEntity = await this.createRuleEntity('Loyalty', org_id);
      ruleAttribute = await this.createRuleAttribute(
        loyaltyRuleEntity,
        'totalAmount',
        org_id
      );

      let loyaltyProgramInput = {
        name: `Percent Cashback Program ${orgCode}`,
        loyaltyCode: `percent_cashback_program_${orgCode}`,
        loyaltyCardCode: loyaltyCardCode,
        organizationId: org_id,
        expiryUnit: 'DAY',
        expiryValue: parseInt(pointsValidity),
        campaign: {
          name: `Percent Cashback Campaign ${orgCode} ${moment(
            startTime.toISOString()
          )
            .utc()
            .format('YYYY-MM-DD HH:mm:ss')}`,
          description: 'Customer will get 10% cashback on every transaction',
          campaignType: 'LOYALTY',
          startTime: moment(startTime.toISOString())
            .utc()
            .format('YYYY-MM-DD HH:mm:ss'),
          endTime: moment(endTime.toISOString())
            .utc()
            .format('YYYY-MM-DD HH:mm:ss'),
          organization_id: org_id,
          campaignTriggerType: 'EVENT',
          campaignStatus: 'ACTIVE',
          applicationMethod: 'ALWAYS',
          eventTypeId: 'd55b6a79-6fd8-4771-9fdb-d1154e80ecbe',
        },
        earnRuleData: {
          name: `ER_pct${earnPercentage}_max${maxEarnablePointsPerTransaction}_exp${pointsValidity}_dl${maxEarnablePointsPerDay}_${moment(
            startTime.toISOString()
          )
            .utc()
            .format('YYYY-MM-DD HH:mm:ss')}`,
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
          name: `BR_pct${burnPercentage}_max${maxRedeemablePointsPerTransaction}_exp${pointsValidity}_dl${maxRedeemablePointsPerDay}_${moment(
            startTime.toISOString()
          )
            .utc()
            .format('YYYY-MM-DD HH:mm:ss')}`,
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
        // expiryRuleConfiguration: {
        //   name: 'EXPIRY_RULE',
        //   type: 'SIMPLE',
        //   organizationId: org_id,
        //   ruleConfiguration: {
        //     rules: [
        //       {
        //         attributeName: 'total',
        //         ruleAttributeId: ruleAttribute.id,
        //         attributeValue: '1000',
        //         expressionType: 'EQUALS',
        //         attributeEntityName: 'Loyalty',
        //         attributeEntityId: loyaltyRuleEntity.id,
        //       },
        //     ],
        //     combinator: 'and',
        //   },
        // },
      };

      let loyaltyProgramResponse = await this.props.client.mutate({
        mutation: CREATE_LOYALTY_PROGRAM,
        variables: { input: loyaltyProgramInput },
      });
      let loyaltyProgram = Object.assign(
        loyaltyProgramResponse.data.createLoyaltyProgram
      );

      let updatedEarnRule = await this.props.client.mutate({
        mutation: UPDATE_RULE,
        variables: {
          id: loyaltyProgram.loyaltyEarnRule.id,
          input: {
            type: 'CUSTOM',
            ruleConfiguration: null,
            ruleExpression: generateRuleExpression(
              'earn',
              this.state.earnPercentage,
              this.state.maxEarnablePointsPerTransaction,
              this.state.maxEarnablePointsPerDay
            ),
          },
        },
      });

      let updatedBurnRule = await this.props.client.mutate({
        mutation: UPDATE_RULE,
        variables: {
          id: loyaltyProgram.loyaltyBurnRule.id,
          input: {
            type: 'CUSTOM',
            ruleConfiguration: null,
            ruleExpression: generateRuleExpression(
              'burn',
              this.state.burnPercentage,
              this.state.maxRedeemablePointsPerTransaction,
              this.state.maxRedeemablePointsPerDay
            ),
          },
        },
      });

      let updateLoyaltyResponse = await this.props.client.mutate({
        mutation: UPDATE_LOYALTY_PROGRAM,
        variables: {
          input: {
            id: loyaltyProgram.id,
            loyaltyCode: `percent_cashback_program_${orgCode}`,
            loyaltyCardCode: this.state.loyaltyCardCode,
            earnRuleValidation: null,
            earnRuleData: null,
            burnRuleValidation: null,
            burnRuleData: null,
          },
        },
      });
      let updatedLoyalty = updateLoyaltyResponse.data.updateLoyaltyProgram;

      await this.launchLoyalty(loyaltyProgram.campaign.id);

      this.setState({
        buttonState: 'pause',
        showPauseConformation: false,
        pointsValidity: loyaltyProgram.expiryValue,
        startDate: convertTime(loyaltyProgram.campaign.startTime),
        endDate: loyaltyProgram.campaign.endTime,
        isLoyaltyActive: loyaltyProgram.campaign.campaignStatus == 'LIVE',
        loyaltyCardCode: loyaltyProgram.loyaltyCardCode,
        loyaltyCode: loyaltyProgram.loyaltyCode || loyaltyProgram.code,
        loyaltyId: loyaltyProgram.id,
        campaignId: loyaltyProgram.campaign.id,
        earnRuleId: loyaltyProgram.loyaltyEarnRule.id,
        burnRuleId: loyaltyProgram.loyaltyBurnRule.id,
      });
    } catch (e) {
      console.log(e);
    }
  };

  changeButtonState = async e => {
    e.stopPropagation();
    if (this.state.buttonState === 'launch') {
      const hide = message.loading('Action in progress..', 0);
      if (this.state.loyaltyId == '') await this.createLoyaltyProgram();
      else this.launchLoyalty(this.state.loyaltyId);
      setTimeout(hide, 100);
    } else if (this.state.buttonState === 'pause') {
      this.setState({
        showPauseConformation: true,
      });
    } else if (this.state.buttonState === 'resume') {
      const hide = message.loading('Action in progress..', 0);
      this.resumeLoyalty();
      setTimeout(hide, 100);
    }
  };

  pauseLoyalty = async () => {
    try {
      const hide = message.loading('Action in progress..', 0);
      let pauseResponse = await this.props.client.mutate({
        mutation: PAUSE_CAMPAIGN,
        variables: {
          id: this.state.campaignId,
        },
      });
      this.setState({ showPauseConformation: false, buttonState: 'resume' });
      setTimeout(hide, 100);
    } catch (e) {
      console.log(e);
    }
  };

  launchLoyalty = async id => {
    try {
      let launchResponse = await this.props.client.mutate({
        mutation: LAUNCH_CAMPAIGN,
        variables: {
          id: id,
        },
      });
      if (this.state.loyaltyId !== '') {
        const jwtToken: any = localStorage.getItem('jwt');
        const { org_id }: any = jwt.decode(jwtToken);
        let currentDateTime = Date.now();
        let startTime = new Date(currentDateTime);
        let updateLoyaltyResponse = await this.props.client.mutate({
          mutation: UPDATE_LOYALTY_PROGRAM,
          variables: {
            input: {
              id: this.state.loyaltyId,
              loyaltyCode: this.state.loyaltyCode,
              loyaltyCardCode: this.state.loyaltyCardCode,
              campaign: {
                name: `Percent Cashback Campaign ${this.state.orgCode}`,
                campaignType: 'LOYALTY',
                startTime: moment(startTime.toISOString())
                  .utc()
                  .format('YYYY-MM-DD HH:mm:ss'),
                endTime: moment(startTime.toISOString())
                  .add(this.state.pointsValidity, 'days')
                  .utc()
                  .format('YYYY-MM-DD HH:mm:ss'),
                organization_id: org_id,
              },
            },
          },
        });
        let updatedLoyalty = updateLoyaltyResponse.data.updateLoyaltyProgram;
        this.setState({
          buttonState: 'pause',
          startDate: convertTime(updatedLoyalty.campaign.startTime),
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  resumeLoyalty = async () => {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);
    let currentDateTime = Date.now();
    let startTime = new Date(currentDateTime);
    try {
      let unpauseResponse = await this.props.client.mutate({
        mutation: UNPAUSE_CAMPAIGN,
        variables: {
          id: this.state.campaignId,
        },
      });
      let updateLoyaltyResponse = await this.props.client.mutate({
        mutation: UPDATE_LOYALTY_PROGRAM,
        variables: {
          input: {
            id: this.state.loyaltyId,
            loyaltyCode: this.state.loyaltyCode,
            loyaltyCardCode: this.state.loyaltyCardCode,
            campaign: {
              name: `Percent Cashback Campaign ${this.state.orgCode}`,
              campaignType: 'LOYALTY',
              startTime: moment(startTime.toISOString())
                .utc()
                .format('YYYY-MM-DD HH:mm:ss'),
              endTime: this.state.endDate,
              organization_id: org_id,
            },
          },
        },
      });
      let updatedLoyalty = updateLoyaltyResponse.data.updateLoyaltyProgram;
      this.setState({
        buttonState: 'pause',
        startDate: convertTime(updatedLoyalty.campaign.startTime),
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
      let organizationResponse = await this.props.client.query({
        query: GET_ORGANIZATION,
        variables: {
          id: org_id,
        },
      });
      let orgCode = organizationResponse.data.organization.code;
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
      this.setState({ loyaltyCardCode: loyaltyCards[0].code, orgCode });
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
      //console.log(loyaltyPrograms);
      if (loyaltyPrograms.length) {
        //if loyalty program - filling points validity.
        let earnRuleData = extractDataFromRuleExpression(
          loyaltyPrograms[0].loyaltyEarnRule.ruleExpression.expressions[0]
        );
        let burnRuleData = extractDataFromRuleExpression(
          loyaltyPrograms[0].loyaltyBurnRule.ruleExpression.expressions[0]
        );

        this.setState({
          pointsValidity: loyaltyPrograms[0].expiryValue,
          startDate: convertTime(loyaltyPrograms[0].campaign.startTime),
          isLoyaltyActive: loyaltyPrograms[0].campaign.campaignStatus == 'LIVE',
          loyaltyCode:
            loyaltyPrograms[0].loyaltyCode || loyaltyPrograms[0].code,
          loyaltyId: loyaltyPrograms[0].id,
          campaignId: loyaltyPrograms[0].campaign.id,
          earnPercentage: earnRuleData.percentage,
          burnPercentage: burnRuleData.percentage,
          maxEarnablePointsPerDay: earnRuleData.maxPointsPerDay,
          maxRedeemablePointsPerDay: burnRuleData.maxPointsPerDay,
          maxEarnablePointsPerTransaction: earnRuleData.maxPointsPerTransaction,
          maxRedeemablePointsPerTransaction:
            burnRuleData.maxPointsPerTransaction,
          earnRuleId: loyaltyPrograms[0].loyaltyEarnRule.id,
          burnRuleId: loyaltyPrograms[0].loyaltyBurnRule.id,
          orgCode: orgCode,
        });
        if (loyaltyPrograms[0].campaign.campaignStatus == 'DRAFT') {
          this.setState({ buttonState: 'launch' });
        } else {
          if (this.state.isLoyaltyActive) {
            this.setState({ buttonState: 'pause' });
          } else {
            this.setState({ buttonState: 'resume' });
          }
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
      earnRuleId,
      burnRuleId,
    } = this.state;

    return (
      <React.Fragment>
        <div className="lp-container">
          <div className="lp-header">
            <Row className="lp-welcome">Loyalty Program</Row>
            <Row className="lp-subHeader">Configure Program Rules</Row>
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
                  earnRuleId={earnRuleId}
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
                  isLoyaltyActive={isLoyaltyActive}
                  loyaltyId={loyaltyId}
                  loyaltyCardCode={loyaltyCardCode}
                  loyaltyCode={loyaltyCode}
                  burnRuleId={burnRuleId}
                />
              </Col>
            </Row>

            <CommunicationNotification
              client={this.props.client}
              loyaltyCardCode={loyaltyCardCode}
            />

            <Row>
              <Col span={12}>
                <LaunchButton
                  buttonState={this.state.buttonState}
                  changeButtonState={e => this.changeButtonState(e)}
                />
              </Col>

              {this.state.buttonState == 'pause' ? (
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
                      {`${this.state.startDate.substr(0, 5)} `}
                      <span
                        style={{ fontSize: '12px' }}
                      >{`${this.state.startDate.substr(6, 2)} `}</span>
                      {this.state.startDate.substr(8)}
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
              onClick={this.pauseLoyalty}
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
