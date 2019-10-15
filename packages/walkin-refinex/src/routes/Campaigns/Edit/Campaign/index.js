import React, { Component, Fragment } from "react";
import { Row, Col, Typography } from "antd";
import {
  CampaignPriority,
  BasicInfoForm,
  Popup,
  BasicSlider
} from "@walkinsole/shared";
const { Text } = Typography;
import CreateCampaignRow from "../../Overview/CreateCampaignRow"
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import { CustomScrollbars } from "@walkinsole/walkin-components";
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
  auth,
  setFeedbackForm,
  formName,
  edit
}) => {
  return (
    <CustomScrollbars>
      <Fragment >
        <Row>
          <div style={{
            margin: "32px"
          }}>
            {" "}
            <h3 className="gx-text-grey">{subTitle}</h3>
          </div>

          <Row style={{
            margin: "22px"
          }}>
            <Col span={15}>
              <BasicInfoForm
                onFormNext={onFormNext}
                wrappedComponentRef={saveFormRef}
                formValues={formValues}
                edit={edit}
              />
            </Col>
            <Col span={9}>
              <CampaignPriority
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
          <div style={{ width: "100vw", background: '#ECECEC', padding: '20px' }}>
            <Row gutter={16}>
              <h3 className="gx-text-grey" style={{ marginBottom: "30px", margin: "32px" }}>Choose template</h3>
              <Col span={24}>
                <CreateCampaignRow auth={auth} formName={formName} setFeedbackForm={setFeedbackForm} />
              </Col>
            </Row>
          </div>
        </Row>

      </Fragment>
    </CustomScrollbars>
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
    name: "auth"
  })
)(BasicInfo);
