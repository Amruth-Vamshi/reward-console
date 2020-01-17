import * as React from "react";
import PropTypes from "prop-types";
import {
  Col,
  Row,
  Typography,
  Tabs,
  Radio,
  Form,
  Input,
  Upload,
  Button,
  Icon
} from "antd";
import SMSForm from "./SMS";
import EmailForm from "./Email";
import PushNotification from "./Push";
const { TabPane } = Tabs;
const { Title } = Typography;
import TestComponent from "./TestCampaign/index";

interface CommunicationProps {
  subTitle?: any;
  onChange?: any;
  communicationData?: any;
  defaultValue?: any;
  value?: any;
  OnCommunicationFormNext?: any;
  commWrappedComponentRef?: any;
  communicationFormValues?: any;
  pushFormData?: any;
  pushFormRef?: any;
  emailFormRef?: any;
  emailFormData?: any;
  onFormNext?: any;
  schedule?: any;
  campaign?: any;
  scheduleSaveMark?: any;
  saveSchedule?: any;
  form?: any;
  testCommunication?: any;
}
const Communication: React.FC<CommunicationProps> = ({
  subTitle,
  onChange,
  communicationData,
  defaultValue,
  value,
  OnCommunicationFormNext,
  commWrappedComponentRef,
  communicationFormValues,
  pushFormData,
  pushFormRef,
  emailFormRef,
  emailFormData,
  onFormNext,
  schedule,
  campaign,
  scheduleSaveMark,
  saveSchedule,
  form,
  testCommunication
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
          <div style={{ marginTop: "20px" }}>
            {value == "SMS" && (
              <SMSForm
                wrappedComponentRef={commWrappedComponentRef}
                formValues={communicationFormValues}
                onFormNext={onFormNext}
              />
            )}
            {value == "PUSH" && (
              <PushNotification
                wrappedComponentRef={pushFormRef}
                formValues={communicationFormValues}
                onFormNext={onFormNext}
              />
            )}
            {value == "EMAIL" && (
              <EmailForm
                wrappedComponentRef={emailFormRef}
                formValues={communicationFormValues}
                onFormNext={onFormNext}
              />
            )}
          </div>
        </Col>
        <Col sm={24} md={9} lg={9} xl={9} xxl={8}>
          <div style={{ padding: 30 }}>
            <TestComponent
              testCommunication={testCommunication}
              text={`Test ${value.toLowerCase()} notification`}
              label={`Enter your ${
                value == "SMS"
                  ? "phone number"
                  : value == "EMAIL"
                  ? "email address"
                  : "fcm token"
              }`}
              name={value}
              placeholder={
                value == "SMS"
                  ? "phone number"
                  : value == "EMAIL"
                  ? "email"
                  : "FCM token"
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Communication;
