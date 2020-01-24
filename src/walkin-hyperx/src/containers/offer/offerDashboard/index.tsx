import './offerDashboard.css';

import { WHeader } from 'shared';
import { Button, Checkbox, Col, Divider, Input, Row, Spin, Card } from 'antd';
import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import { ApolloProviderProps, compose, graphql, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import HyperXContainer from '../../../utils/HyperXContainer';
import { VIEW_OFFER } from '../../../query/offer';
import { offerTypeData, cartValueConditionData, transactionTimeData, cappingData } from '../../../constants/offerData';
import { fieldConvert } from '../../../utils';
import { pickBy, includes } from "lodash";
export interface IAppProps extends RouteChildrenProps<any>, ApolloProviderProps<any> {
}

export interface IAppState {
  spin: boolean
  offer: {}
  products: Array<{}>
  location
  frequency
  transactionTimeTypes
  cartValue
  daysOfWeek
  redemption
  cappingType
  dayPart
}

const labelCol = {
  span: 10,
  className: 'labelCol'
};

const wrapperCol = {
  span: 14,
  className: 'wrapperCol'
}
class OfferDashboard extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      spin: false,
      offer: {},
      products: [],
      location: [],
      transactionTimeTypes: [],
      frequency: {},
      daysOfWeek: [],
      cartValue: {},
      dayPart: {},
      redemption: {},
      cappingType: ''
    }
  }

  componentWillMount() {
    this.setState({ spin: true })
    this.props.client.query({
      query: VIEW_OFFER,
      variables: { id: this.props.match.params.id },
      // fetchPolicy: 'network-only'
    }).then(res => {
      console.log('res', res.data);
      this.setState({ spin: false, offer: res.data.getOffer })
      this.dataFormatter(res.data.getOffer)
      // let { campaign, audiences, offers, communications } = res.data.viewCampaignForHyperX
      // this.setState({ spin: false, campaign, audiences, offers, communications });
    }).catch(err => {
      this.setState({ spin: false });
      console.log("Failed to get Offer Details" + err);
    });
  }

  dataFormatter = data => {
    let { offerEligibilityRule, rewardRedemptionRule }: any = data
    let { products, location, transactionTimeTypes, frequency, cartValue, dayPart, redemption, cappingType, daysOfWeek } = this.state
    offerEligibilityRule && offerEligibilityRule.ruleConfiguration.rules.map((rule: any) => {
      if (rule.attributeName.includes('product_')) products.push({ type: rule.attributeName.replace('product_', ''), values: rule.attributeValue })
      else if (rule.attributeName.includes('location_')) location.push({ type: rule.attributeName.replace('location_', ''), values: rule.attributeValue })
      else if (rule.attributeName.includes('frequency_')) {
        transactionTimeTypes.push("Frequency")
        frequency[rule.attributeName.replace('frequency_', '')] = rule.attributeValue
      } else if (rule.attributeName == "cartValue") {
        transactionTimeTypes.push("Cart Value")
        cartValue = { name: rule.attributeName, value: rule.attributeValue, type: rule.expressionType }
      } else if (rule.attributeName.includes('dayPart_')) {
        transactionTimeTypes.push("DayPart")
        dayPart[rule.attributeName.replace('dayPart_', '')] = rule.attributeValue
      } else if (rule.attributeName.includes("dayOfWeek")) {
        transactionTimeTypes.push("Days Of Week")
        daysOfWeek = rule.attributeValue
      }
    })

    rewardRedemptionRule && rewardRedemptionRule.ruleConfiguration.rules.map((rule: any) => {
      if (rule.attributeName.includes('redemption_cap')) cappingType = rule.attributeName
      redemption[rule.attributeName.replace('redemption_', '')] = rule.attributeValue
    })

    this.setState({ products, location, transactionTimeTypes, frequency, cartValue, dayPart, redemption, cappingType, daysOfWeek })

  }

  public render() {
    let { offerType, reward, name, coupon, offerEligibilityRule, rewardRedemptionRule }: any = this.state.offer
    let { products, location, transactionTimeTypes, frequency, cartValue, dayPart, redemption, cappingType, spin, daysOfWeek } = this.state
    let transactionTimeStr = `6 transaction in 30 days`

    let transactionTimeArr = []

    console.log(transactionTimeTypes);

    console.log('tt', transactionTimeTypes.includes("DayPart"));

    if (transactionTimeTypes.includes("Frequency"))
      transactionTimeArr.push({ type: 'Frequency', value: `${frequency.transaction} transaction(s) in ${frequency.days} day(s)` })
    if (transactionTimeTypes.includes("Cart Value"))
      transactionTimeArr.push({ type: 'Cart Value', value: ` ${fieldConvert(transactionTimeData, cartValue.name, 'value', 'title')} ${fieldConvert(cartValueConditionData, cartValue.type, 'value', 'title')}  ${cartValue.value} Rs` })
    if (transactionTimeTypes.includes("DayPart"))
      transactionTimeArr.push({ type: 'DayPart', value: ` From ${dayPart.startTime} To ${dayPart.endTime}` })
    if (transactionTimeTypes.includes("Days Of Week"))
      transactionTimeArr.push({ type: 'Days Of Week', value: daysOfWeek })

    console.log(transactionTimeArr);

    // if (transactionTime == 'Frequency') transactionTimeStr = `${transactionTime} - ${frequency.transaction} transaction(s) in ${frequency.days} day(s)`
    // else if (transactionTime == 'Cart Value') transactionTimeStr = `${transactionTime} - 
    // ${fieldConvert(transactionTimeData, cartValue.name, 'value', 'title')} ${fieldConvert(cartValueConditionData, cartValue.type, 'value', 'title')}  ${cartValue.value} Rs`
    // else if (transactionTime == 'DayPart') transactionTimeStr = `${transactionTime} - From ${dayPart.startTime} To ${dayPart.endTime}`

    return (
      <div>
        <WHeader title='Offer Dashboard' />
        <HyperXContainer spin={spin} className='viewOffer' margin='32px' headerHeightInPX={152}>
          {this.state.spin ? '' :
            <Row type='flex' justify='center'>
              <Col sm={24} md={21} lg={18} xl={15} xxl={12}>
                <div className="gx-card">

                  <div style={{ padding: 35 }} className="gx-card-body">
                    <Row type="flex" justify="space-between" align="bottom">
                      <Col style={{ fontSize: 22, color: 'black' }} span={18}> {name} </Col>
                      <Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={6} >
                        <Button disabled style={{ marginBottom: 0 }}>Edit</Button>
                      </Col>
                    </Row>

                    <Divider />
                    <h4>Basic Information</h4>

                    <Row>
                      <Col {...labelCol}>  Offer Type  </Col>
                      <Col {...wrapperCol}> {fieldConvert(offerTypeData, offerType, 'value', 'title')} - {reward[offerType] ? reward[offerType].toString() : ''}
                        {fieldConvert(offerTypeData, offerType, 'value', 'extra')} </Col>
                    </Row>
                    {products.map((p: any) => <div>
                      <Row>
                        <Col {...labelCol}>  Product  </Col>
                        <Col {...wrapperCol}> {p.type} </Col>
                      </Row>
                      <Row style={{ padding: '0 25px' }}>
                        <Input className='inputRow' value={p.values} disabled addonAfter={<span className='gx-text-primary gx-pointer'>View All</span>} />
                      </Row>

                    </div>)}

                    {location.map((l: any) => (l.values != "") && <div>
                      <Row>
                        <Col {...labelCol}>  Location  </Col>
                        <Col {...wrapperCol}> {l.type} </Col>
                      </Row>
                      <Row style={{ padding: '0 25px' }}>
                        <Input className='inputRow' value={l.values} disabled addonAfter={<span className='gx-text-primary gx-pointer'>View All</span>} />
                      </Row>

                    </div>)}

                    {/* <Row>
                                    <Col {...labelCol}>  Location  </Col>
                                    <Col {...wrapperCol}> Zone </Col>
                                </Row>
                                <Row style={{ padding: '0 25px' }}>
                                    <Input className='inputRow' value='south_india_zone.csv' disabled addonAfter={<span className='gx-text-primary gx-pointer'>View CSV</span>} />
                                </Row>
                                <Row style={{ padding: '0 25px' }}>
                                    <Input className='inputRow' value='North_india_zone.csv ' disabled addonAfter={<span className='gx-text-primary gx-pointer'>View CSV</span>} />
                                </Row> */}





                    {/* {transactionTime != '' && <Row>
                                            <Col {...labelCol}>  User Transaction Time  </Col>
                                            <Col {...wrapperCol}> {transactionTimeStr} </Col>
                                        </Row>} */}
                    {console.log('Test22', transactionTimeArr)}
                    {transactionTimeArr.map(t => <div>
                      <Row key={t.type}>
                        <Col {...labelCol}>  {t.type}  </Col>
                        <Col {...wrapperCol}> {t.value} </Col>
                      </Row>
                    </div>)}


                    <Divider />
                    <h4>Redemption Rules</h4>

                    <Row>
                      <Col {...labelCol}>  User Limit </Col>
                      <Col {...wrapperCol}> {redemption.usage_limit ? `${redemption.usage_limit}  ${redemption.usage_limit == 1 ? 'time' : 'times'}` : '  --'}</Col>
                    </Row>
                    <Row>
                      <Col {...labelCol}>  User Limit At Customer Level  </Col>
                      <Col {...wrapperCol}> {redemption.usage_limit_at_customer ? `${redemption.usage_limit_at_customer} ${redemption.usage_limit_at_customer == 1 ? 'time' : 'times'}` : '  --'}</Col>
                    </Row>
                    <Row>
                      <Col {...labelCol}>  Time Limit  </Col>
                      <Col {...wrapperCol}> {redemption.time_limit ? `${redemption.time_limit}` : '  --'}</Col>
                    </Row>

                    <Divider />
                    <h4>Capping</h4>

                    {cappingType != '' ? <Row>
                      <Col {...labelCol}>{fieldConvert(cappingData, cappingType, 'value', 'title')} </Col>
                      <Col {...wrapperCol}> {redemption[cappingType.replace('redemption_', '')] ? `${redemption[cappingType.replace('redemption_', '')]}` : '  --'}</Col>
                    </Row> : ''}

                    <Row>
                      <Col {...labelCol}>  Limit on Sku's  </Col>
                      <Col {...wrapperCol}> {redemption.limit_sku_number ? `${redemption.limit_sku_number}` : '  --'} </Col>
                    </Row>

                    <Divider />
                    <h4>Coupon Based Offer</h4>

                    {coupon ? <Row>
                      <Col {...labelCol}> Coupon </Col>
                      <Col {...wrapperCol}> {coupon} </Col>
                    </Row> :
                      <Row>
                        <Col style={{ paddingLeft: 30 }} span={24}>
                          <Checkbox checked> This Offer Is Auto Applied (On Coupon Code) </Checkbox>
                        </Col>
                      </Row>}

                  </div></div>
              </Col>
            </Row>
          }
        </HyperXContainer>
      </div>
    );
  }
}

export default withRouter((withApollo(OfferDashboard)));
