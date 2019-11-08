import *  as React from 'react';
import { Row, Col, Typography } from 'antd';
import { CampaignPriority, BasicInfoForm, Popup, BasicSlider } from '@walkinsole/shared';
const { Text } = Typography;

interface iProps {
	errors?: any,
	subTitle?: string,
	onFormNext?: any,
	saveFormRef?: any,
	formValues?: any,
	textAndControlText?: string,
	promptText?: string,
	toolTipText?: string,
	prioritySelectionTitle?: string,
	priorityButtonText?: string,
	testControlTitle?: string,
	testControlPercentage?: any,
	handleButtonGroupChange?: any,
	testControlPercentageEditText?: string,
	onPriorityButtonClick?: any,
	priorityNumberInvalidErrorMessage?: any,
	onTestAndControlEdit?: any,
	showTestAndControl?: any,
	handleOk?: any,
	popupTitle?: string,
	handleCancel?: any,
	applyTestControlChange?: any,
	popupbodyText?: string,
	controlValue?: any,
	maxValueAllowed?: any,
	onTestValueChange?: any,
	onControlValueChange?: any,
	popupButtonText?: string,
	testValue?: any,
	edit?: any,
	priorityChosen?: any
}

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
	testValue, edit,
	priorityChosen
}: iProps) => {
	return (
		<React.Fragment>
			<div> {' '}
				<h3 className="gx-text-grey">{subTitle}</h3>
			</div>
			<Row style={{ marginTop: 34 }}>
				<Col sd={24} md={14} style={{ marginBottom: 15 }}>
					<BasicInfoForm errors={errors} onFormNext={onFormNext} edit={edit} wrappedComponentRef={saveFormRef} formValues={formValues} />
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
					<React.Fragment>
						<Text>{popupbodyText}</Text>
						<BasicSlider
							controlValue={controlValue}
							testValue={testValue}
							maxValueAllowed={maxValueAllowed}
							onTestValueChange={onTestValueChange}
							onControlValueChange={onControlValueChange}
						/>
					</React.Fragment>
				}
				buttonText={popupButtonText}
			/>
		</React.Fragment>
	);
};

export default BasicInfo;
