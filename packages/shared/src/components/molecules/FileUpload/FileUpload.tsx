import * as React from 'react';
import { Modal, Upload, Button, Icon } from 'antd';

export interface IAppProps {
    visible, handleOk?, handleCancel?, fileList?, uploadProps?
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
        let { visible, handleOk, handleCancel, fileList, uploadProps } = this.props
        
        return (
            <div>
                <Modal width="500px" key="model"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Upload {...uploadProps} fileList={fileList}>
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
