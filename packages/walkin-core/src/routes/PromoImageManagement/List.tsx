import * as React from "react";
import { Row, Col, Button, Switch, Icon, Input, DatePicker } from "antd"
import "./style.css"
import { History } from 'history'
import FileUpload from "../Categories/Components/FileUpload"

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

    handleUploadedImage = (val) => {
        const { editPromo } = this.state
        var data = editPromo
        data.image = val[0].url

        this.setState({ editPromo: data })
    }

    deletePromo() {
        console.log("Delete Promo")
    }

    onStartDateChange(date, dateString) {
        console.log(date, dateString);
    }

    onEndDateChange(date, dateString) {
        console.log(date, dateString);
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
                    <Row>
                        <Col span={18}>
                            <Row>
                                <Col span={8} style={{ padding: "0px" }}>
                                    <img className="promoImage" src="https://res.cloudinary.com/servicex-dev/image/upload/v1579080315/servicex/attachments/attachment_1579080313491_pizza_promo.png.png" />
                                </Col>
                                <Col span={12}>
                                    <Row className="imageHeading">Image Source :</Row>
                                    <Row style={{ marginTop: "10px" }}>
                                        <Col span={16} style={{ padding: "0px" }}>
                                            <Input placeholder="http://www.closecececece.com" />
                                        </Col>
                                        <Col span={8} style={{ marginTop: "5px" }}>
                                            <FileUpload uiType={"categoryManagement"} availableImage={0} onImageUpload={this.handleUploadedImage} title="Upload Promo Image" />
                                        </Col>
                                    </Row>
                                    <Row className="imageHeading">Deep Link (Image Click Action)</Row>
                                    <Row style={{ marginTop: "10px" }}>
                                        <Col span={16} style={{ padding: "0px" }}>
                                            <Input placeholder="Define Here" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row className="imageHeading">Start Date:</Row>
                            <Row style={{ marginTop: "10px", paddingBottom: "10px" }}>
                                <DatePicker style={{ width: "200px" }} onChange={(val, stringVal) => { this.onStartDateChange(val, stringVal) }} />
                            </Row>
                            <Row className="imageHeading">End Date:</Row>
                            <Row style={{ marginTop: "10px" }}>
                                <DatePicker style={{ width: "200px" }} onChange={(val, stringVal) => { this.onEndDateChange(val, stringVal) }} />
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>)
    }

}

export default PromoHome;
