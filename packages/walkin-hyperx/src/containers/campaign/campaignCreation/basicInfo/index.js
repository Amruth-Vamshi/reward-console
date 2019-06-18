import React, { Component, Fragment } from 'react';
import { Row, Col, Typography } from 'antd';
import CampaignPriority from '../../../../components/organisms/campaignPriority';
import BasicInfoForm from '../../../../components/molecules/basicInfoForm';
import BasicSlider from '../../../../components/atoms/testAndControlSlider';
import Popup from '../../../../components/atoms/popup';

const { Text } = Typography;

const BasicInfo = ({
	subTitle,
	onFormNext,
	saveFormRef,
	formValues,
	textAndControlText,
	promptText,
	toolTipText,
	prioritySelectionTitle,
	priorityButtonText,
	testControlTitle,
	testControlPercentage,
	handleButtonGroupChange,
	testControlPercentageEditText,
	onPriorityButtonClick,
	priorityNumberInvalidErrorMessage,
	onTestAndControlEdit,
	showTestAndControl,
	handleOk,
	popupTitle,
	handleCancel,
	applyTestControlChange,
	popupbodyText,
	controlValue,
	maxValueAllowed,
	onTestValueChange,
	onControlValueChange,
	popupButtonText,
	testValue,
}) => {
	return (
		<Fragment>
			<div style={{ margin: '32px' }}>
				{' '}
				<h3 className="gx-text-grey">{subTitle}</h3>
			</div>
			<Row style={{ margin: '32px' }}>
				<Col span={14}>
					<BasicInfoForm onFormNext={onFormNext} wrappedComponentRef={saveFormRef} formValues={formValues} />
				</Col>
				<Col span={10}>
					<CampaignPriority
						text={textAndControlText}
						promptText={promptText}
						tootTipText={toolTipText}
						prioritySelectionTitle={prioritySelectionTitle}
						priorityButtonText={priorityButtonText}
						testControlTitle={testControlTitle}
						testControlPercentage={testControlPercentage}
						handleChange={handleButtonGroupChange}
						testControlPercentageEditText={testControlPercentageEditText}
						onClick={onPriorityButtonClick}
						priorityNumberInvalidErrorMessage={priorityNumberInvalidErrorMessage}
						onTestAndControlEdit={onTestAndControlEdit}
					/>
				</Col>
			</Row>
			<Popup
				visible={showTestAndControl}
				title={popupTitle}
				handleOk={handleOk}
				handleCancel={handleCancel}
				handleOnClick={applyTestControlChange}
				popupContent={
					<Fragment>
						<Text>{popupbodyText}</Text>
						<BasicSlider
							controlValue={controlValue}
							testValue={testValue}
							maxValueAllowed={maxValueAllowed}
							onTestValueChange={onTestValueChange}
							onControlValueChange={onControlValueChange}
						/>
					</Fragment>
				}
				buttonText={popupButtonText}
			/>
		</Fragment>
	);
};

export default BasicInfo;
