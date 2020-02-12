import React from 'react';
import { Modal, Upload, Button, Icon, Row, Col } from 'antd';
import './index.css';

export interface IAppProps {
  visible?: any;
  handleOk?: any;
  handleCancel?: any;
  fileList?: any;
  handleUploadChangeProps?: any;
  title?: string;
}

export interface IAppState {}

export default class FileUpload extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {};
  }

  public render() {
    let {
      visible,
      handleOk,
      handleCancel,
      fileList,
      handleUploadChangeProps,
      title,
    } = this.props;
    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: handleUploadChangeProps,
      multiple: false,
    };
    return (
      <div>
        <Modal
          width="500px"
          key="model"
          visible={visible}
          title={title}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Submit"
        >
          <Upload {...props} fileList={fileList}>
            <Button>
              <Icon type="upload" /> Upload
            </Button>
          </Upload>
        </Modal>
      </div>
    );
  }
}
