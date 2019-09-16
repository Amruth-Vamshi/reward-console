import React from 'react';
import { Rate, Row, Col } from 'antd';

const RateScale = ({ question, value, radioStyle, onChange }) => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    return (
        <Row>
            <Col span={24}>
                <span>
                    <Rate tooltips={desc} onChange={onChange} value={value} count={question.rangeMax - 1} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </span>
            </Col>
        </Row>

    );
}

export default RateScale;