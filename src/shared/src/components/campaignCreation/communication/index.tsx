import * as React from "react";
import { Radio, Row, Col } from "antd";
import {
  SMSForm,
  PushNotificationForm,
  Email,
  Schedule
} from "../../molecules/communicationForm";

interface iProps {
  subTitle?: string;
  onChange?: any;
  communicationData?: any;
  defaultValue?: any;
  value?: any;
  getScheduleData?: any;
  OnCommunicationFormNext?: any;
  commWrappedComponentRef?: any;
  communicationFormValues?: any;
  pushFormData?: any;
  pushFormRef?: any;
  emailFormRef?: any;
  emailFormData?: any;
  onFormNext?: any;
  scheduleData?: any;
  schedule?: any;
  campaign?: any;
  scheduleSaveMark?: any;
  saveSchedule?: any;
  form?: any;
  linkTypeSelect?: any;
  attributeData?;
}

const Communication = ({
  subTitle,
  onChange,
  communicationData,
  defaultValue,
  value,
  getScheduleData,
  OnCommunicationFormNext,
  commWrappedComponentRef,
  communicationFormValues,
  pushFormData,
  pushFormRef,
  emailFormRef,
  emailFormData,
  onFormNext,
  scheduleData,
  schedule,
  campaign,
  scheduleSaveMark,
  saveSchedule,
  attributeData,
  linkTypeSelect,
  form
}: iProps) => {
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
              communicationData.map((el: any, index: number) => (
                <Radio.Button key={index} value={el.value}>
                  {el.title}
                </Radio.Button>
              ))}
          </Radio.Group>
          {value == "SMS" && (
            <SMSForm
              wrappedComponentRef={commWrappedComponentRef}
              formValues={communicationFormValues}
              linkTypeSelect={linkTypeSelect}
              attributeData={attributeData}
              onFormNext={onFormNext}
            />
          )}
          {value == "PUSH" && (
            <PushNotificationForm
              wrappedComponentRef={pushFormRef}
              formValues={pushFormData}
              onFormNext={onFormNext}
            />
          )}
          {value == "EMAIL" && (
            <Email
              wrappedComponentRef={emailFormRef}
              formValues={emailFormData}
              onFormNext={onFormNext}
            />
          )}
        </Col>

        {schedule && (
          <Col sm={24} md={11} lg={11} xl={11} xxl={10}>
            <div style={{ padding: 10 }}>
              <Schedule
                saved={scheduleSaveMark}
                scheduleData={scheduleData}
                saveSchedule={saveSchedule}
                campaign={campaign}
                getScheduleData={getScheduleData}
              />
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Communication;
