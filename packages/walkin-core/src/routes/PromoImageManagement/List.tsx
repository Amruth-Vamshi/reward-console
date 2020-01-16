import * as React from "react";
import { Row, Col, Button, Switch, Icon, Input, DatePicker } from "antd"
import "./style.css"
import { History } from 'history'
import FileUpload from "../Categories/Components/FileUpload"
import localData from "./data"
import { element } from "prop-types";
import moment from "moment"

interface iProps {
    history: History
}

interface iState {
    editPromo: any
    totalPromo: any
    originalData: any
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
                status: true,
            },
            originalData: localData,
            totalPromo: localData
        }

    }

    UNSAFE_componentWillMount() {
        this.processData()
    }

    processData() {
        // localData.forEach((element) => {
        //     console.log("E : ", element)
        // })
    }

    onLinkChange({ target: { value } }, index) {
        console.log(value, index)
    }

    onDeepLinkChange({ target: { value } }, index) {
        console.log(value, index)
    }

    onStatusChange(val, index) {
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

    deletePromo(element, index) {
        console.log("Delete Promo")
    }

    onStartDateChange(date, dateString, index) {
        console.log(date, dateString);
    }

    onEndDateChange(date, dateString, index) {
        console.log(date, dateString);
    }


    renderPromoItem() {
        const { totalPromo } = this.state

        return (
            totalPromo.map((promo, index) => {
                return (<div key={index} className="promoItemContainer">
                    <div className="promoLine"></div>
                    <Row>
                        <Col span={18}>{promo.name}</Col>
                        <Col span={6}>
                            <Row>
                                <Col span={12}>
                                    <Row>
                                        <Switch size="small" checked={promo.status} onChange={(val) => { this.onStatusChange(val, index) }} />
                                        <p className={(promo.status == true ? "activeState" : "inActiveState")}>{(promo.status == true ? "Active" : "Inactive")}</p>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <div style={{ textAlign: "center" }} onClick={() => { this.deletePromo(element, index) }}><Icon type="delete" theme="filled" /></div>
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
                                            <Input
                                                placeholder="url.."
                                                value={promo.imageUrl}
                                                onChange={(val) => { this.onLinkChange(val, index) }}
                                            />
                                        </Col>
                                        <Col span={8} style={{ marginTop: "5px" }}>
                                            <FileUpload uiType={"categoryManagement"} availableImage={0} onImageUpload={this.handleUploadedImage} title="Upload Promo Image" />
                                        </Col>
                                    </Row>
                                    <Row className="imageHeading">Deep Link (Image Click Action)</Row>
                                    <Row style={{ marginTop: "10px" }}>
                                        <Col span={16} style={{ padding: "0px" }}>
                                            <Input
                                                placeholder="Define Here"
                                                value={promo.deepLink}
                                                onChange={(val) => { this.onDeepLinkChange(val, index) }}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row className="imageHeading">Start Date:</Row>
                            <Row style={{ marginTop: "10px", paddingBottom: "10px" }}>
                                <DatePicker
                                    style={{ width: "200px" }}
                                    value={moment(promo.startDate)}
                                    onChange={(val, stringVal) => { this.onStartDateChange(val, stringVal, index) }}
                                />
                            </Row>
                            <Row className="imageHeading">End Date:</Row>
                            <Row style={{ marginTop: "10px" }}>
                                <DatePicker
                                    style={{ width: "200px" }}
                                    value={moment(promo.endDate)}
                                    onChange={(val, stringVal) => { this.onEndDateChange(val, stringVal, index) }}
                                />
                            </Row>
                        </Col>
                    </Row>
                </div>)
            })
        )
    }

    render() {

        const { totalPromo } = this.state
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
                {(totalPromo.length > 0) && this.renderPromoItem()}
                {(totalPromo.length == 0) && <div style={{ textAlign: "center", height: "200px" }}><p style={{ marginTop: "140px", fontSize: "14px", color: "#808080" }}>No Promo available!</p></div>}
            </div>

        </div>)
    }

}

export default PromoHome;
