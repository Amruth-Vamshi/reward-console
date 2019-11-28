import * as React from 'react';
import { Modal, Upload, Button, Icon } from 'antd';

export interface IAppProps {
    visible, handleOk?, handleCancel?, fileList?, handleUploadChangeProps?
}

export interface IAppState {
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        let { visible, handleOk, handleCancel, fileList, handleUploadChangeProps } = this.props
        const props = {
            action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
            onChange: handleUploadChangeProps,
            multiple: false
        };
        return (
            <div>
                <Modal width="500px" key="model"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Upload {...props} fileList={fileList}>
                        <Button
                            style={{ width: "400px" }}
                            className="buttonPrimary"
                            type="default"
                        >
                            <Icon type="upload" /> Upload </Button>
                    </Upload>
                </Modal>

            </div>
        );
    }
}
