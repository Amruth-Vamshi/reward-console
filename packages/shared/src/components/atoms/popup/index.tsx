import * as React from 'react';
import { Modal, Button } from 'antd';
import './style.css';

interface iProps {
	title?: string,
	visible?: boolean,
	handleCancel?: any,
	handleOk?: any,
	popupContent?: any,
	buttonText?: string,
	handleOnClick?: any
}

const Popup = ({ title, visible, handleCancel, handleOk, popupContent, buttonText, handleOnClick }: iProps) => {
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
