import * as React from "react";
import "../style.css"
import { Row, Col, Icon } from "antd";

const ExploreBox = ({ title, path }: any) => {
    return (
        <div className="optionItem">
            <Row>
                <Col style={{ textAlign: "center", color: "#FFF", fontSize: "18px", paddingTop: "16px" }} span={18}>{title}</Col>
                <Col style={{ textAlign: "center", color: "#FFF", fontSize: "18px", paddingTop: "18px" }} span={6}><Icon type="right" /></Col>
            </Row>
        </div>
    )
}

export default ExploreBox