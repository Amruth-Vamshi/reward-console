import * as React from "react";
import { Rate, Row, Col, Icon } from 'antd';

interface RateScaleProps {
    question?: any,
    value?: any,
    radioStyle?: any,
    onChange?: any,
    character?: any
}

const RateScale: React.FC<RateScaleProps> = ({ question, value, radioStyle, onChange, character }) => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    return (
        <Row>
            <Col span={24}>
                <span>
                    <Rate character={<Icon type={character ? character : "star"} theme="filled" />} tooltips={desc} onChange={onChange} value={value} count={question.rangeMax - 1} />

                </span>
            </Col>
        </Row>

    );
}

export default RateScale;