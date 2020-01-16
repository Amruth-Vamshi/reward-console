import React from "react"
import { Modal, Button } from "antd"
import "../style.css"

interface iState {
    visible: boolean
}

interface iProps {
    onAddPromo: any
}

class AddPromoItem extends React.Component<iProps, iState>
{
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    handleModalOk = e => {
        this.props.onAddPromo({ "data": "value" })
        this.setState({
            visible: false,
        });
    };

    handleModalCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button className="addImage" onClick={() => { this.setState({ visible: true }) }} >Add Images</Button>
                <Modal
                    title="Add Promo"
                    className="modalContainer"
                    visible={this.state.visible}
                    onOk={this.handleModalOk}
                    onCancel={this.handleModalCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}

export default AddPromoItem