import React, { Component, Fragment } from 'react';
import { Radio, Form } from 'antd';
import SMSForm from '../../../../components/atoms/communicationForm/sms';
import PushNotificationForm from '../../../../components/atoms/communicationForm/pushNotification';

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
			{value == '1' && <SMSForm />} {value == '2' && <PushNotificationForm />}
			{value == '3' && <div>form3</div>}
		</div>
	);
};

export default Communication;
