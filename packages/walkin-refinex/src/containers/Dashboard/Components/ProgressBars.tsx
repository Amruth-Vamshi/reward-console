import * as React from "react";
import { Col, Row, Progress } from 'antd'


const data = [
    {
        title: 'Promoters',
        color: "#46CB92",
        percent: 55,
        iconComponent: require("@walkinsole/walkin-refinex/src/Icons/happy.svg")
    },
    {
        title: 'Neutrals',
        color: "#FCAD78",
        percent: 20,
        iconComponent: require("@walkinsole/walkin-refinex/src/Icons/neutral.svg")
    },
    {
        title: 'Detractors',
        color: "#E96B81",
        percent: 35,
        iconComponent: require("@walkinsole/walkin-refinex/src/Icons/unhappy.svg")
    }
];

const ProgressBars = () => {
    return (
        <div style={{ width: "100%" }}>
            <Col span={24}>
                {data.map((element) => {
                    return (<Row style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                        <Col span={4}>
                            <img src={element.iconComponent} style={{ height: "42px", width: "42px", marginTop: "-10px" }} />
                        </Col>
                        <Col span={20}>
                            <Progress
                                type={"line"}
                                showInfo={true}
                                strokeColor={element.color}
                                percent={element.percent}
                            />
                        </Col>
                    </Row>)
                })}
            </Col>
        </div>
    )
};

export default ProgressBars;