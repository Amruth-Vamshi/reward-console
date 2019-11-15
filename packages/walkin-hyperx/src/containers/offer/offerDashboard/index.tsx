import * as React from 'react';
import { WHeader } from '@walkinsole/shared';
import HyperXContainer from '../../../components/atoms/HyperXContainer';
import { Row, Col, Button, Divider } from 'antd';
import './offerDashboard.css'

export interface IAppProps {
}

export interface IAppState {
}

const labelCol = {
    span: 10,
    className: 'labelCol'
};

const wrapperCol = {
    span: 14,
    className: 'wrapperCol'
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
                <WHeader title='Offers' />
                <HyperXContainer className='viewOffer' margin='50px' headerHeightInPX={225}>
                    <Row type='flex' justify='center'>
                        <Col span={14}>
                            <Row type="flex" justify="space-between" align="bottom">
                                <Col style={{ fontSize: 20 }} span={18}>
                                    Anniverssary Sale
                                </Col>
                                <Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={6} >
                                    <Button style={{ marginBottom: 0 }}>Edit</Button>
                                </Col>
                            </Row>
                            <Divider />
                            <h4>Basic Information</h4>
                            <Row>
                                <Col {...labelCol}>  Offer Type  </Col>
                                <Col {...wrapperCol} > Discount on the bill - 40% </Col>
                            </Row>
                            <Row>
                                <Col {...labelCol}>  Product  </Col>
                                <Col {...wrapperCol} >SKU </Col>
                            </Row>
                            <Row>
                                <Col {...labelCol}>  Location  </Col>
                                <Col {...wrapperCol}> Zone </Col>
                            </Row>
                            <Row>
                                <Col {...labelCol}>  User Transaction Time  </Col>
                                <Col {...wrapperCol}> Frequency - 6 transaction in 30 days </Col>
                            </Row>

                            <Divider />
                            <h4>Redemption Rules</h4>

                            <Row>
                                <Col {...labelCol}>  User Limit </Col>
                                <Col {...wrapperCol}> 5000 times </Col>
                            </Row>
                            <Row>
                                <Col {...labelCol}>  User Limit At Customer Lever  </Col>
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
                                <Col span={24}>  This Offer Is Auto Applied (On Coupon Code) </Col>
                            </Row>




                        </Col>
                    </Row>
                </HyperXContainer>
            </div>
        );
    }
}
