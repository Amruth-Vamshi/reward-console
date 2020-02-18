import * as React from 'react';
import { Row, Col, Typography } from 'antd';
import { CampaignPriority, BasicInfoForm, Popup, BasicSlider } from 'shared';
import CreateCampaignRow from '../../Overview/CreateCampaignRow';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import { CustomScrollbars } from 'walkin-components';
const { Text } = Typography;

interface BasicInfoProps {
  subTitle?: any;
  onFormNext?: any;
  saveFormRef?: any;
  formValues?: any;
  textAndControlText?: any;
  promptText?: any;
  toolTipText?: any;
  prioritySelectionTitle?: any;
  priorityButtonText?: any;
  testControlTitle?: any;
  testControlPercentage?: any;
  handleButtonGroupChange?: any;
  testControlPercentageEditText?: any;
  onPriorityButtonClick?: any;
  priorityNumberInvalidErrorMessage?: any;
  onTestAndControlEdit?: any;
  showTestAndControl?: any;
  handleOk?: any;
  popupTitle?: any;
  handleCancel?: any;
  applyTestControlChange?: any;
  popupbodyText?: any;
  controlValue?: any;
  maxValueAllowed?: any;
  onTestValueChange?: any;
  onControlValueChange?: any;
  popupButtonText?: any;
  testValue?: any;
  auth?: any;
  setFeedbackForm?: any;
  formName?: any;
  edit?: any;
  showFeedbackFormType?: any;
}

const BasicInfo: React.FC<BasicInfoProps> = ({
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
  auth,
  setFeedbackForm,
  formName,
  edit,
  showFeedbackFormType,
}) => {
  return (
    <div style={{ minHeight: '100%' }}>
      <div style={{ minHeight: '10%' }}>
        <h3 className="gx-text-grey">{subTitle}</h3>
      </div>

      <Row style={{ marginTop: 32 }}>
        <Col sm={24} md={14} style={{ marginBottom: 15 }}>
          <BasicInfoForm
            onFormNext={onFormNext}
            wrappedComponentRef={saveFormRef}
            formValues={formValues}
            edit={edit}
          />
        </Col>
        <Col sm={24} md={10}>
          <CampaignPriority
            HideTestConstrol={true}
            text={textAndControlText}
            promptText={popupbodyText}
            tootTipText={toolTipText}
            prioritySelectionTitle={prioritySelectionTitle}
            priorityButtonText={priorityButtonText}
            testControlTitle={testControlTitle}
            testControlPercentage={testControlPercentage}
            handleChange={handleButtonGroupChange}
            testControlPercentageEditText={testControlPercentageEditText}
            onClick={onPriorityButtonClick}
            priorityNumberInvalidErrorMessage={
              priorityNumberInvalidErrorMessage
            }
            onTestAndControlEdit={onTestAndControlEdit}
          />
        </Col>
      </Row>
      {showFeedbackFormType ? (
        <div
          style={{
            marginBottom: 0,
            width: '100vw',
            background: '#ECECEC',
            padding: '20px',
          }}
        >
          <Row gutter={16}>
            <h3
              className="gx-text-grey"
              style={{ marginBottom: '30px', margin: '32px' }}
            >
              Choose template
            </h3>
            <Col span={24}>
              <CreateCampaignRow
                auth={auth}
                formName={formName}
                setFeedbackForm={setFeedbackForm}
              />
            </Col>
          </Row>
        </div>
      ) : null}
    </div>
  );
};

const GET_USER_IDENTITY = gql`
  query auth @client {
    auth {
      userId
      organizationId
    }
  }
`;

export default compose(
  graphql(GET_USER_IDENTITY, {
    name: 'auth',
  })
)(BasicInfo);
