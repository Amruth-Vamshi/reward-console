import * as React from "react";
import { Row, Col, Button, Switch, Icon } from "antd"
import "./style.css"
import { History } from 'history'

interface iProps {
    history: History
}

interface iState {
    editPromo: any
}

class PromoHome extends React.Component<iProps, iState> {
    constructor(props: iProps) {
        super(props);
        this.state = {
            editPromo: {
                id: "",
                name: "",
                desc: "",
                image: "",
                code: "",
                status: true
            }
        }

    }

    onStatusChange(val) {
        const { editPromo } = this.state
        var data = editPromo
        data.status = val
        this.setState({ editPromo: data })
    }

    deletePromo() {
        console.log("Delete Promo")
    }

    render() {

        const { editPromo } = this.state
        return (<div>
            <Row>
                <Col span={18}>
                    <div className="promo-header">Promo Images</div>
                    <div className="promo-subheader">This images show in the app carousel for the defined period of days.</div>
                </Col>
                <Col span={6}>
                    <Button className="addImage">Add Images</Button>
                </Col>
            </Row>
            <div className="promoContainer">
                <div>
                    <Row>
                        <Col span={18}>Image 1</Col>
                        <Col span={6}>
                            <Row>
                                <Col span={12}>
                                    <Row>
                                        <Switch size="small" onChange={(val) => { this.onStatusChange(val) }} />
                                        <p className={(editPromo.status == true ? "activeState" : "inActiveState")}>{(editPromo.status == true ? "Active" : "Inactive")}</p>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <div style={{ textAlign: "center" }} onClick={() => { this.deletePromo() }}><Icon type="delete" theme="filled" /></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>)
    }

}

export default PromoHome;
