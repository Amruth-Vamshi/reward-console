import React, { Component, Fragment } from 'react';
import { Radio, Form, Row, Col } from 'antd';
import SMSForm from '../../../../components/atoms/communicationForm/sms';
import PushNotificationForm from '../../../../components/atoms/communicationForm/pushNotification';
import Email from '../../../../components/atoms/communicationForm/Email';
import Schedule from '../../../../components/atoms/communicationForm/schedule';

const Communication = ({
	subTitle,
	onChange,
	communicationData,
	defaultValue,
	value,
	OnCommunicationFormNext,
	communicationWrappedComponentRef,
	communicationFormValues,
	pushFormData,
	onFormNext,
	smsFormData,
	form,
}) => {
	return (
		<div>
			<h3 className="gx-text-grey gx-mb-1">{subTitle}</h3>
			<Radio.Group
				buttonStyle="solid"
				defaultValue={defaultValue}
				onChange={onChange}
				style={{ paddingTop: '20px' }}
				value={value}
			>
				{communicationData &&
					communicationData.map((el, index) => (
						<Radio.Button key={index} value={el.value}>
							{el.title}
						</Radio.Button>
					))}
			</Radio.Group>
			<Row>
				<Col sm={24} md={13} lg={13} xl={14} xxl={14}>
					{value == '1' && <SMSForm />} {value == '2' && <PushNotificationForm />}
					{value == '3' && <div><Email /></div>}
				</Col>

				<Col sm={24} md={11} lg={11} xl={10} xxl={9} >

					<div style={{ padding: 20 }}>
						<Schedule />
					</div>

				</Col>

			</Row>

		</div>
	);
};

export default Communication;
