import React, { Component, Fragment } from 'react';
import { Row, Col, Typography } from 'antd';
import { BasicInfoForm, Popup, BasicSlider } from '@walkinsole/walkin-components';
import { CampaignPriority } from '@walkinsole/shared';
const { Text } = Typography;

const BasicInfo = ({
	errors,
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
	priorityChosen
}) => {
	return (
		<Fragment>
			<div> {' '}
				<h3 className="gx-text-grey">{subTitle}</h3>
			</div>
			<Row style={{ marginTop: 34 }}>
				<Col sd={24} md={14} style={{ marginBottom: 15 }}>
					<BasicInfoForm errors={errors} onFormNext={onFormNext} wrappedComponentRef={saveFormRef} formValues={formValues} />
				</Col>
				<Col sd={24} md={10}>
					<CampaignPriority
						text={textAndControlText}
						promptText={promptText}
						priorityChosen={priorityChosen}
						tootTipText={toolTipText}
						prioritySelectionTitle={prioritySelectionTitle}
						priorityButtonText={priorityButtonText}
						testControlTitle={testControlTitle}
						testControlPercentage={testControlPercentage}
						handleChange={handleButtonGroupChange}
						testControlPercentageEditText={testControlPercentageEditText}
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
