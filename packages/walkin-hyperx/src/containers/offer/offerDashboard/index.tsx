import './offerDashboard.css';

import { WHeader } from '@walkinsole/shared';
import { Button, Checkbox, Col, Divider, Input, Row, Spin } from 'antd';
import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import { ApolloProviderProps, compose, graphql, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import HyperXContainer from '../../../components/atoms/HyperXContainer';
import { VIEW_OFFER } from '../../../query/offer';
import { offerTypeData, cartValueConditionData, transactionTimeData } from '../../../constants/offerData';
import { fieldConvert } from '../../../utils';

export interface IAppProps extends RouteChildrenProps<any>, ApolloProviderProps<any> {
}

export interface IAppState {
    spin: boolean
    offer: {}
    products: Array<{}>
    location
    frequency
    transactionTime: string
    cartValue
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
            transactionTime: '',
            frequency: {},
            cartValue: {},
            dayPart: {}
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
        let products: Array<{}> = [], location: Array<{}> = [], frequency: any = {}, cartValue: any = {}, transactionTime = '', dayPart: any = {}
        offerEligibilityRule && offerEligibilityRule.ruleConfiguration.rules.map((rule: any) => {
            if (rule.attributeName.includes('product_')) products.push({ type: rule.attributeName.replace('product_', ''), values: rule.attributeValue })
            else if (rule.attributeName.includes('location_')) location.push({ type: rule.attributeName.replace('location_', ''), values: rule.attributeValue })
            else if (rule.attributeName.includes('frequency_')) {
                transactionTime = "Frequency"
                frequency[rule.attributeName.replace('frequency_', '')] = rule.attributeValue
            } else if (rule.attributeName == "cartValue") {
                transactionTime = "Cart Value"
                cartValue = { name: rule.attributeName, value: rule.attributeValue, type: rule.expressionType }
            } else if (rule.attributeName.includes('dayPart_')) {
                transactionTime = "DayPart"
                dayPart[rule.attributeName.replace('dayPart_', '')] = rule.attributeValue
            }
        })
        this.setState({ products, location, transactionTime, frequency, cartValue, dayPart })

    }

    public render() {
        let { offerType, reward, name, offerEligibilityRule, rewardRedemptionRule }: any = this.state.offer
        let { products, location, transactionTime, frequency, cartValue, dayPart } = this.state
        let transactionTimeStr = `6 transaction in 30 days`

        if (transactionTime == 'Frequency') transactionTimeStr = `${transactionTime} - ${frequency.transaction} transaction in ${frequency.days} days`
        else if (transactionTime == 'Cart Value') transactionTimeStr = `${transactionTime} - 
        ${fieldConvert(transactionTimeData, cartValue.name, 'value', 'title')} ${fieldConvert(cartValueConditionData, cartValue.type, 'value', 'title')}  ${cartValue.value} Rs`
        else if (transactionTime == 'DayPart') transactionTimeStr = `${transactionTime} - From ${dayPart.startTime} To ${dayPart.endTime}`

        return (
            <div>
                <WHeader title='Offers' />
                {this.state.spin ?
                    <div>
                        <br /> <br /> <br /> <br />
                        <div className="divCenter">
                            <Spin size="large" />
                        </div> <br /> <br /> <br />
                    </div> :
                    <HyperXContainer className='viewOffer' margin='40px' headerHeightInPX={152}>
                        <Row type='flex' justify='center'>
                            <Col sm={24} md={21} lg={18} xl={15} xxl={12}>
                                <Row type="flex" justify="space-between" align="bottom">
                                    <Col style={{ fontSize: 22 }} span={18}>
                                        {name}
                                    </Col>
                                    <Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={6} >
                                        <Button style={{ marginBottom: 0 }}>Edit</Button>
                                    </Col>
                                </Row>
                                <Divider />
                                <h4>Basic Information</h4>
                                <Row>
                                    <Col {...labelCol}>  Offer Type  </Col>
                                    <Col {...wrapperCol}> {fieldConvert(offerTypeData, offerType, 'value', 'title')} - {reward[offerType]}{fieldConvert(offerTypeData, offerType, 'value', 'extra')} </Col>
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
                                {transactionTime != '' && <Row>
                                    <Col {...labelCol}>  User Transaction Time  </Col>
                                    <Col {...wrapperCol}> {transactionTimeStr} </Col>
                                </Row>}

                                <Divider />
                                <h4>Redemption Rules</h4>

                                <Row>
                                    <Col {...labelCol}>  User Limit </Col>
                                    <Col {...wrapperCol}> 5000 times </Col>
                                </Row>
                                <Row>
                                    <Col {...labelCol}>  User Limit At Customer Level  </Col>
                                    <Col {...wrapperCol}> 2 times </Col>
                                </Row>
                                <Row>
                                    <Col {...labelCol}>  Time Limit  </Col>
                                    <Col {...wrapperCol}> 1/Day </Col>
                                </Row>

                                <Divider />
                                <h4>Capping</h4>

                                <Row>
                                    <Col {...labelCol}>  Maximum Discount </Col>
                                    <Col {...wrapperCol}> 40% </Col>
                                </Row>
                                <Row>
                                    <Col {...labelCol}>  Limit on Sku's  </Col>
                                    <Col {...wrapperCol}> 20,000 </Col>
                                </Row>

                                <Divider />
                                <h4>Coupon Based Offer</h4>

                                <Row>
                                    <Col style={{ paddingLeft: 30 }} span={24}>
                                        <Checkbox checked> This Offer Is Auto Applied (On Coupon Code) </Checkbox>
                                    </Col>
                                </Row>




                            </Col>
                        </Row>
                    </HyperXContainer>
                }
            </div>
        );
    }
}

export default withRouter((withApollo(OfferDashboard)));
