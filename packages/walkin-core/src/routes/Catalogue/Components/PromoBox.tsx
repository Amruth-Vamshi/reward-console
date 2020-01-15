import * as React from "react";
import "../style.css"
import { Row, Col, Button } from "antd"

const PromoBox = ({ title, desc, btnText, imageSource }) => {
    return (
        <div className="promoBox">
            <Row style={{ marginLeft: "0px", marginRight: "0px", height: "170px" }}>
                <Col span={13}>
                    <img style={{ height: "170px", borderRadius: "5px 0px 0px 5px", marginLeft: "-15px" }} src={imageSource} />
                </Col>
                <Col style={{ textAlign: "center", backgroundColor: "#FFF" }} span={10}>
                    <div style={{ marginTop: "14px" }}>
                        <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 500, color: "#e3b94f" }}>{title}</p>
                        <p style={{ color: "#a6a6a6", fontSize: "10px" }}>{desc}</p>
                        <Button size={"small"} style={{ backgroundColor: "#404040", color: "#f2f2f2", borderRadius: "4px", width: "70px", marginTop: "10px" }}>{btnText}</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default PromoBox