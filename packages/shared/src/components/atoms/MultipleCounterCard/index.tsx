import React from "react";
import { Row, Col } from 'antd';

const MultipleCounterCard = ({ title, textColor, valueColor, counterArray, }) => {
    return (
        <div style={{ backgroundColor: "#FFFFFF ", height: "90px", borderRadius: "4px" }}>
            <div style={{ paddingTop: "5px" }}>
                <div style={{ color: textColor, fontSize: "12px", paddingLeft: "10px", marginTop: "5px" }}>{title}</div>
                <div style={{ marginTop: "24px" }}>
                    {counterArray.map((element, index) => {
                        return <Row key={index} style={{ fontSize: "12px", color: textColor, marginTop: "2px", paddingRight: "1px", paddingBottom: "2px", width: "100%", paddingLeft: "10px" }}>
                            <Col span={20}>{element.title}</Col>
                            <Col span={4} style={{ color: valueColor, textAlign: 'end', fontSize: "13px", fontWeight: 500 }}>{element.value}</Col>
                        </Row>
                    })}
                </div>
            </div>
        </div>
    );
};

export default MultipleCounterCard; 