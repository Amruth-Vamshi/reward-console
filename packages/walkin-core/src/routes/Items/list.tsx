import * as React from "react";
import { Row, Col } from "antd"
import "./style.css"

interface iProps {
}

interface iState {

}

class ListHome extends React.Component<iProps, iState> {
    constructor(props: iProps) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (<div>List Management</div>)
    }

}

export default ListHome;
