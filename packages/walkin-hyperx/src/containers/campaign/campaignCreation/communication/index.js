import React, { Component, Fragment } from "react";
import { Radio, Form, Row, Col } from "antd";
import SMSForm from "../../../../components/atoms/communicationForm/sms";
import PushNotificationForm from "../../../../components/atoms/communicationForm/pushNotification";
import Email from "../../../../components/atoms/communicationForm/Email";
import Schedule from "../../../../components/atoms/communicationForm/schedule";

const Communication = ({
  subTitle, onChange,
  communicationData,
  defaultValue,
  value, getScheduleData,
  OnCommunicationFormNext,
  commWrappedComponentRef,
  communicationFormValues,
  pushFormData,
  pushFormRef,
  emailFormRef,
  emailFormData,
  onFormNext,
  schedule, campaign,
  scheduleSaveMark,
  saveSchedule,
  form
}) => {
  return (
    <div>
      <h3 className="gx-text-grey gx-mb-1">{subTitle}</h3>

      <Row>
        <Col sm={24} md={13} lg={13} xl={13} xxl={14}>
          {console.log(value)}
          <Radio.Group
            buttonStyle="solid"
            defaultValue={defaultValue}
            onChange={onChange}
            style={{ paddingTop: "20px" }}
            value={value}
          >
            {communicationData &&
              communicationData.map((el, index) => (
                <Radio.Button key={index} value={el.value}>
                  {el.title}
                </Radio.Button>
              ))}
          </Radio.Group>
          {value == "SMS" && <SMSForm
            wrappedComponentRef={commWrappedComponentRef}
            formValues={communicationFormValues}
            onFormNext={onFormNext} />}
          {value == "PUSH" && <PushNotificationForm
            wrappedComponentRef={pushFormData}
            formValues={pushFormRef}
            onFormNext={onFormNext} />}
          {value == "EMAIL" && (<Email
            wrappedComponentRef={emailFormRef}
            formValues={emailFormData}
            onFormNext={onFormNext} />)}
        </Col>

        {schedule && (
          <Col sm={24} md={11} lg={11} xl={11} xxl={10}>
            <div style={{ padding: 10 }}>
              <Schedule saved={scheduleSaveMark} saveSchedule={saveSchedule} campaign={campaign} getScheduleData={getScheduleData} />
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Communication;
