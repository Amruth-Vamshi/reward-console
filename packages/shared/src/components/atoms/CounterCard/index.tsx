import React from "react";
import { Row, Col, Icon } from 'antd'

const CounterCard = ({ title, subTitle, titleColor, subtitleColor }) => {
    return (
        <div style={{ backgroundColor: "#FFFFFF ", height: "90px", borderRadius: "4px" }}>
            <div style={{ paddingTop: "15px" }}>
                <div style={{ color: titleColor, fontSize: "28px", paddingLeft: "10px", fontWeight: 500 }}>{title}</div>
                <div style={{ color: subtitleColor, marginTop: "12px", paddingRight: "1px", paddingBottom: "2px", width: "100%", paddingLeft: "10px" }}><p style={{ fontWeight: 100, fontSize: '12px' }}>{subTitle}</p></div>
            </div>
        </div>
    );
};

export default CounterCard; 