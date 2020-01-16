import * as React from "react";
import "../style.css"
import { Row, Col, Button } from "antd";

const DraftBox = ({ heading, list, btnText, path }: any) => {
    return (
        <div className="draftBox">
            <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 500, color: "#e3b94f" }}>{heading}</p>
            {list.map((element, index) => {
                return (<p key={index} style={{ color: "#a6a6a6", marginTop: "-8px", fontSize: "10px", padding: "2px" }}>{element}</p>)
            })}
            <div style={{ width: "100%", textAlign: "center", paddingTop: "14px" }}>
                <Button size={"small"} style={{ backgroundColor: "#404040", color: "#f2f2f2", borderRadius: "4px" }}>{btnText}</Button>
            </div>
        </div>
    )
}

export default DraftBox