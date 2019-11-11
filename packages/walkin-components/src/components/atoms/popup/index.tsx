import * as React from "react";
import { Modal, Button } from "antd";
import "./style.css";

export const Popup = ({
  title,
  visible,
  handleCancel,
  loading,
  handleOk,
  popupContent,
  buttonText,
  handleOnClick
}: {
  title?: string;
  visible?: boolean;
  handleCancel?: any;
  loading?: boolean;
  handleOk?: any;
  popupContent?: any;
  buttonText?: string;
  handleOnClick?: any;
}) => {
  return (
    <Modal
      visible={visible}
      title={title}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <div className="popupFooterStyle">
          <Button
            key="submit"
            type="primary"
            size="large"
            onClick={handleOnClick}
          >
            {buttonText}
          </Button>
        </div>
      ]}
    >
      {popupContent}
    </Modal>
  );
};
