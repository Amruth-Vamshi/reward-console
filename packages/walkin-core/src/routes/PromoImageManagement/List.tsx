import * as React from "react";
import { Row, Col } from "antd"
import "./style.css"
import { History } from 'history'

interface iProps {
    history: History
}

interface iState {

}

class PromoHome extends React.Component<iProps, iState> {
    constructor(props: iProps) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (<div>
            <div className="promo-header">Promo Images</div>
            <div className="promo-subheader">This images show in the app carousel for the defined period of days.</div>

        </div>)
    }

}

export default PromoHome;
