import React, { Fragment } from 'react';
import { Modal, Button } from 'antd';
import './style.css';

const Popup = ({ title, visible, handleCancel, loading, handleOk, popupContent, buttonText, handleOnClick }) => {
	return (
		<Modal
			visible={visible}
			title={title}
			onOk={handleOk}
			onCancel={handleCancel}
			footer={[
				<div className="popupFooterStyle">
					<Button key="submit" type="primary" size="large" onClick={handleOnClick}>
						{buttonText}
					</Button>
				</div>,
			]}
		>
			{popupContent}
		</Modal>
	);
};

export default Popup;
