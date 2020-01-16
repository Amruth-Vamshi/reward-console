import * as React from "react";
import "../style.css"
import { Row, Col, Button } from "antd";

const DisplayBox = ({ value, heading, subheading, btnText, path, history }: any) => {
    return (
        <div className="box">
            <p style={{ paddingTop: "15px", fontSize: "35px", fontWeight: 500, paddingBottom: "0px", color: "#e3b94f" }}>{value}</p>
            <p style={{ marginTop: "-32px", fontSize: "18px" }}>{heading}</p>
            <p style={{ color: "#a6a6a6", marginTop: "-8px", fontSize: "10px", paddingLeft: "2px", paddingRight: "2px" }}>{subheading}</p>
            <Button onClick={() => { history.push(path) }} size={"small"} style={{ backgroundColor: "#404040", color: "#f2f2f2", borderRadius: "4px" }}>{btnText}</Button>
        </div>
    )
}

export default DisplayBox