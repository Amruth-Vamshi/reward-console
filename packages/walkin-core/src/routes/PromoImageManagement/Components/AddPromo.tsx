import React from "react"
import { Modal, Button, Col, Row, Input, Switch, DatePicker, message } from "antd"
import "../style.css"
import FileUpload from "../../Categories/Components/FileUpload"
import moment from "moment"


interface iProps {
    onAddPromo: any
}

interface iState {
    visible: boolean
    promoName: any
    promoDeepLink: any
    promoImage: any
    promoStatus: any
    promoStartDate: any
    promoEndDate: any
}

class AddPromoItem extends React.Component<iProps, iState>
{
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            promoName: "",
            promoDeepLink: "",
            promoImage: "",
            promoStatus: true,
            promoStartDate: moment(new Date()).format("YYYY-MM-DD"),
            promoEndDate: moment(new Date()).format("YYYY-MM-DD")
        }
    }

    handleModalOk = e => {
        const { promoName, promoStatus, promoStartDate, promoEndDate, promoImage, promoDeepLink } = this.state

        if ((promoName.trim() == "")) {
            message.warn("Please provide a title!")
            return
        }

        if ((promoStartDate.trim() == "")) {
            message.warn("Please provide a start date!")
            return
        }

        if ((promoEndDate.trim() == "")) {
            message.warn("Please provide an end date!")
            return
        }

        if ((promoImage.trim() == "")) {
            message.warn("Please provide the promo image !")
            return
        }

        var finalData = {
            id: "",
            name: promoName,
            imageUrl: promoImage,
            description: "",
            deepLink: promoDeepLink,
            status: promoStatus,
            startDate: promoStartDate,
            endDate: promoEndDate,
            edited: false
        }

        this.props.onAddPromo(finalData)
        this.setState({
            visible: false,
            promoName: "",
            promoDeepLink: "",
            promoImage: null,
            promoStatus: true,
            promoStartDate: moment(new Date()).format("YYYY-MM-DD"),
            promoEndDate: moment(new Date()).format("YYYY-MM-DD")
        });
    };

    handleModalCancel = e => {
        this.setState({
            visible: false,
            promoName: "",
            promoDeepLink: "",
            promoImage: "",
            promoStatus: true,
            promoStartDate: moment(new Date()).format("YYYY-MM-DD"),
            promoEndDate: moment(new Date()).format("YYYY-MM-DD")
        });
    };

    onNameChange({ target: { value } }) {
        this.setState({ promoName: value })
    }

    onLinkChange({ target: { value } }) {
        this.setState({ promoImage: value })
    }

    onDeepLinkChange({ target: { value } }) {
        this.setState({ promoDeepLink: value })
    }

    onStatusChange(val) {
        this.setState({ promoStatus: val })
    }

    handleUploadedImage = (val) => {
        this.setState({ promoImage: val[0].url })
    }

    onStartDateChange(date, dateString) {
        this.setState({ promoStartDate: dateString })
    }

    onEndDateChange(date, dateString) {
        this.setState({ promoEndDate: dateString })
    }

    render() {

        const { promoName, promoImage, promoDeepLink, promoStatus, promoStartDate, promoEndDate } = this.state

        return (
            <div>
                <Button className="addImage" onClick={() => { this.setState({ visible: true }) }} >Add Images</Button>
                <Modal
                    title="Add Promo"
                    width='700px'
                    visible={this.state.visible}
                    onOk={this.handleModalOk}
                    onCancel={this.handleModalCancel}
                    okText="Create"
                    cancelText="Cancel"
                >

                    <div style={{ marginLeft: "15px", marginRight: "15px" }}>
                        <Row>
                            <Col span={18}>
                                <Row className="imageHeading">Title :</Row>
                                <Row style={{ marginTop: "10px" }}>
                                    <Input
                                        placeholder=""
                                        value={promoName}
                                        onChange={(val) => { this.onNameChange(val) }}
                                    />
                                </Row>
                            </Col>
                            <Col span={6}>
                                <Row className="addPromoStatus">
                                    <Switch size="small" checked={promoStatus} onChange={(val) => { this.onStatusChange(val) }} />
                                    <p className={(promoStatus == true ? "activeState" : "inActiveState")}>{(promoStatus == true ? "Active" : "Inactive")}</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="rowCover">
                            <Col span={12}>
                                <Row className="imageHeading">Start Date:</Row>
                                <Row style={{ marginTop: "10px", paddingBottom: "10px" }}>
                                    <DatePicker
                                        style={{ width: "300px" }}
                                        value={(promoStartDate == "" ? null : moment(promoStartDate))}
                                        onChange={(val, stringVal) => { this.onStartDateChange(val, stringVal) }}
                                    />
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className="imageHeading">End Date:</Row>
                                <Row style={{ marginTop: "10px", paddingBottom: "10px" }}>
                                    <DatePicker
                                        style={{ width: "300px" }}
                                        value={(promoEndDate == "" ? null : moment(promoEndDate))}
                                        onChange={(val, stringVal) => { this.onEndDateChange(val, stringVal) }}
                                    />
                                </Row>
                            </Col>
                        </Row>
                        <Row className="rowCover">
                            <Col span={8} style={{ padding: "0px" }}>
                                {(promoImage != "") && <img className="addPromoImage" src={promoImage} />}
                                {(promoImage == "") && <img className="addPromoImage" src={require('../../Categories/Assets/add_image.png')} />}
                            </Col>
                            <Col span={12}>
                                <Row className="imageHeading">Image Source :</Row>
                                <Row style={{ marginTop: "10px" }}>
                                    <Col span={16} style={{ padding: "0px" }}>
                                        <Input
                                            placeholder="url.."
                                            value={promoImage}
                                            onChange={(val) => { this.onLinkChange(val) }}
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
                                            value={promoDeepLink}
                                            onChange={(val) => { this.onDeepLinkChange(val) }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </Modal>
            </div>
        )
    }
}

export default AddPromoItem