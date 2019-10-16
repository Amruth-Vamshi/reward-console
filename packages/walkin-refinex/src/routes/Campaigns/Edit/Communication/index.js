import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row, Typography, Tabs, Radio, Form, Input, Upload, Button, Icon } from "antd";
import SMSForm from "./SMS";
import EmailForm from "./Email";
import PushNotification from "./Push";
const { TabPane } = Tabs;
const { Title } = Typography;

const Communication = ({
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
          <div style={{ marginTop: '20px' }} >
            {value == "SMS" && <SMSForm
              wrappedComponentRef={commWrappedComponentRef}
              formValues={communicationFormValues}
              onFormNext={onFormNext} />}
            {value == "PUSH" && <PushNotification
              wrappedComponentRef={pushFormRef}
              formValues={pushFormData}
              onFormNext={onFormNext} />}
            {value == "EMAIL" && (<EmailForm
              wrappedComponentRef={emailFormRef}
              formValues={emailFormData}
              onFormNext={onFormNext} />)}

          </div>

        </Col>
      </Row>
    </div>
  );
};

export default Communication;
