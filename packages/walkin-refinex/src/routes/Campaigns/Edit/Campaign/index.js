import React, { Component, Fragment } from "react";
import { Row, Col, Typography } from "antd";
import {
    CampaignPriority,
    BasicInfoForm,
    Popup,
    BasicSlider
} from "@walkinsole/walkin-components";
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

                <div>
                    {" "}
                    <h3 className="gx-text-grey">{subTitle}</h3>
                </div>

                <Row style={{ marginTop: 32 }}>
                    <Col sd={24} md={14} style={{ marginBottom: 15 }}>
                        <BasicInfoForm
                            onFormNext={onFormNext}
                            wrappedComponentRef={saveFormRef}
                            formValues={formValues}
                            edit={edit}
                        />
                    </Col>
                    <Col sd={24} md={10}>
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
                            priorityNumberInvalidErrorMessage={priorityNumberInvalidErrorMessage}
                            onTestAndControlEdit={onTestAndControlEdit}
                        />
                    </Col>
                </Row>
                <div style={{ width: "100vw", background: '#ECECEC', padding: '20px' }}>
                    <Row gutter={16}>
                        <h3 className="gx-text-grey" style={{ marginBottom: "30px", margin: "32px" }}>Choose template</h3>
                        <Col span={24}>
                            <CreateCampaignRow auth={auth} formName={formName} setFeedbackForm={setFeedbackForm} />
                        </Col>
                    </Row>
                </div>


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
