import "./style.css";

import {
  Checkbox,
  DatePicker,
  Form,
  Icon,
  Input,
  Radio,
  Select,
  TimePicker
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as React from "react";
import { Fragment } from "react";

import AddAndDeleteComponentsDynamically from "../../atoms/addAndDeleteComponentsDynamically";

const { TextArea } = Input;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const weekdays = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY"
];
interface IProps extends FormComponentProps {
  offerTypeData?: any;
  handleOfferTypeChange?: any;
  offerTypeStatus?: any;
  transactionTimeData?: any;
  locationData?: any;
  productData?: any;
  selectedWeekDays;
  dayOfWeekChanged;
  totalSkuList;
  handleTransactionTimeChange?: any;
  transactionTimeStatus?: any;
  cartValueConditionData?: any;
  wrappedComponentRef?: any;
  form: any;
  products?: any;
  handleLocationChange?: any;
  locationArray?: any;
  productItems?: any;
  onSelectOneValuesSelected?: any;
  onSelectTwoValuesSelected?: any;
  formValues?: any;
  locationValues?: any;
  productValues?: any;
  couponDefaultValue?: any;
  onCouponChange?: any;
  couponTypeSelected?: any;
  couponInputLabel?: any;
  onCouponLabelChange?: any;
  checked?: any;
  OnNoCouponCodeChange?: any;
  couponTypeData?: any;
  productDropDown?;
  location?;
  locationDropDown?;
  values?;
}

interface IState {
  values: Array<any>;
}

const OfferBasicInfoForm = Form.create<IProps>({ name: "offer_basic_info" })(
  class OfferBasicInfoForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
      this.state = {
        values: [{ product: "", productItem: "" }]
      };
    }

    handleProductChange(i: any, value: any) {}

    render() {
      const {
        offerTypeData,
        handleOfferTypeChange,
        offerTypeStatus,
        transactionTimeData,
        locationData,
        productData,
        handleTransactionTimeChange,
        totalSkuList,
        transactionTimeStatus,
        cartValueConditionData,
        wrappedComponentRef,
        form,
        products,
        handleLocationChange,
        locationArray,
        productItems,
        onSelectOneValuesSelected,
        onSelectTwoValuesSelected,
        formValues,
        locationValues,
        productValues,
        couponDefaultValue,
        selectedWeekDays,
        onCouponChange,
        couponTypeSelected,
        couponInputLabel,
        onCouponLabelChange,
        checked,
        OnNoCouponCodeChange,
        couponTypeData,
        dayOfWeekChanged
      } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 24 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 }
        }
      };

      const filteredOptions = weekdays
        .filter(o => !selectedWeekDays.includes(o))
        .map(item => (
          <Option key={item} value={item}>
            {" "}
            {item}{" "}
          </Option>
        ));

      return (
        <Form
          className="offerBasicForm"
          {...formItemLayout}
          style={{ padding: "20px 50px" }}
          ref={wrappedComponentRef}
          layout="vertical"
        >
          <Form.Item
            style={{ display: "inline-block", width: "calc(35% - 12px)" }}
            label="Offer Type"
          >
            {getFieldDecorator("offerType", {
              initialValue: `${
                Object.keys(formValues).length != 0 ? formValues.offerType : ""
              }`,
              rules: [{ required: true, message: "Please input offer type!" }]
            })(
              <Select
                placeholder="Select an offer type"
                onChange={handleOfferTypeChange}
                getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
              >
                {offerTypeData &&
                  offerTypeData.map((el: any, i: any) => (
                    <Option key={i} value={el.value}>
                      {" "}
                      {el.title}{" "}
                    </Option>
                  ))}
              </Select>
            )}
          </Form.Item>
          {offerTypeStatus.showList ? (
            <Form.Item
              style={{ display: "inline-block", width: "calc(65% - 12px)" }}
              label="Value"
            >
              {getFieldDecorator("offerTypeValue", {
                initialValue: `${
                  Object.keys(formValues).length != 0
                    ? formValues.offerTypeValue
                    : "All"
                }`
              })(
                <Select
                  showSearch
                  mode="multiple"
                  style={{ width: "100%" }}
                  allowClear
                  placeholder="Please select"
                  getPopupContainer={(triggerNode: any) =>
                    triggerNode.parentNode
                  }
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    option.props.children
                      .toString()
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  // onChange={this.handleChange}
                >
                  {totalSkuList &&
                    totalSkuList.map((el: any, i: any) => (
                      <Option key={i} value={el.value}>
                        {" "}
                        {el.name}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          ) : (
            <Form.Item
              style={{ display: "inline-block", width: "calc(33.5% - 12px)" }}
              label="Value"
            >
              {getFieldDecorator("offerTypeValue", {
                initialValue: `${
                  Object.keys(formValues).length != 0
                    ? formValues.offerTypeValue
                    : ""
                }`,
                rules: [{ required: true, message: "Please input offer Value" }]
              })(
                <Input
                  type="number"
                  addonBefore={offerTypeStatus.showRupee === true ? "Rs." : ""}
                  addonAfter={
                    offerTypeStatus.showPercent === true ? (
                      <Icon type="percentage" />
                    ) : (
                      ""
                    )
                  }
                  max={offerTypeStatus.showPercent ? 100 : Infinity}
                  min={0}
                />
              )}
            </Form.Item>
          )}
          <Form.Item style={{ width: "calc(100% - 22px)" }} label="Offer Name">
            {getFieldDecorator("offerName", {
              initialValue: `${
                Object.keys(formValues).length != 0 ? formValues.offerName : ""
              }`,
              rules: [
                { transform: value => value.trim() },
                { required: true, message: "Please input offer name!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Product">
            <AddAndDeleteComponentsDynamically
              onSelectOneValuesSelected={(val, state) => {
                onSelectOneValuesSelected(val, "product", state);
              }}
              onSelectTwoValuesSelected={state => {
                onSelectTwoValuesSelected(state, "productValues");
              }}
              // onSelectTwoValuesSelected={onSelectTwoValuesSelected}
              data_1={productData}
              data_2={productItems}
              form={this.props.form}
              productValues={productValues}
              defaultSelectOneValue="product_category"
              defaultSelectTwoValue={["all"]}
            />
          </Form.Item>
          <Form.Item label="Location">
            <AddAndDeleteComponentsDynamically
              onSelectOneValuesSelected={(val, state) => {
                onSelectOneValuesSelected(val, "location", state);
              }}
              onSelectTwoValuesSelected={state => {
                onSelectTwoValuesSelected(state, "locationValues");
              }}
              // onSelectTwoValuesSelected={onSelectTwoValuesSelected}
              data_1={locationData}
              data_2={locationArray}
              locationValues={locationValues}
              defaultSelectOneValue="location_store"
              defaultSelectTwoValue={["all"]}
            />
          </Form.Item>
          <Form.Item style={{ width: "calc(35% - 12px)" }} label="Coupon">
            {getFieldDecorator("couponType", {
              initialValue: `${
                Object.keys(formValues).length != 0 ? formValues.couponType : ""
              }`,
              rules: [{ required: true, message: "Please input coupon type!" }]
            })(
              <Radio.Group
                // defaultValue={couponDefaultValue}
                onChange={onCouponChange}
                // value={couponTypeSelected}
              >
                {couponTypeData &&
                  couponTypeData.map((el: any, i: any) => (
                    <Radio key={i} value={el.value}>
                      {" "}
                      {el.title}{" "}
                    </Radio>
                  ))}
              </Radio.Group>
            )}
          </Form.Item>
          {couponTypeSelected == 1 && (
            <Form.Item
              style={{ marginLeft: "15px", width: "calc(65% - 12px)" }}
              label="Enter Coupon Label"
            >
              {getFieldDecorator("couponLabel", {
                initialValue: `${
                  Object.keys(formValues).length != 0
                    ? formValues.couponLabel
                    : ""
                }`,
                rules: [
                  { required: true, message: "Please input coupon label!" }
                ]
              })(
                <Input
                  placeholder={couponInputLabel}
                  onChange={onCouponLabelChange}
                />
              )}
            </Form.Item>
          )}
          {couponTypeSelected == 2 && (
            <Form.Item
              style={{ marginLeft: "15px", width: "calc(65% - 12px)" }}
            >
              <Checkbox checked={checked} onChange={OnNoCouponCodeChange}>
                Auto apply coupon code
              </Checkbox>
            </Form.Item>
          )}{" "}
          <br />
          <h3>Conditions</h3>
          {/* <Form.Item label="Condition"
						style={{ display: 'inline-block', width: 'calc(35% - 12px)' }}
					>
						{getFieldDecorator('transactionTime', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.transactionTime : ''}`,
						})(
							<Select
								getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
								placeholder="Select a transaction time" onChange={handleTransactionTimeChange}>
								{transactionTimeData && transactionTimeData
									.map((el: any, i: any) => <Option key={i} value={el.value}> {el.title} </Option>)}
							</Select>
						)}
					</Form.Item> */}
          <div style={{ width: "100%" }}>
            {/* <div style={{ display: 'inline-block',  marginTop: '20px', width: 'calc(15% - 12px)' }}>Frequency</div> */}

            <Form.Item
              style={{
                display: "inline-block",
                marginTop: "20px",
                width: "calc(15% - 12px)"
              }}
            >
              <div style={{ marginTop: 10, fontSize: 16 }}>Frequency</div>
            </Form.Item>

            <Fragment>
              <Form.Item
                style={{ display: "inline-block", width: "calc(30% - 12px)" }}
                label="No. Of Transactions"
              >
                {getFieldDecorator("noOfTransaction", {
                  initialValue: `${
                    Object.keys(formValues).length != 0
                      ? formValues.noOfTransaction
                      : ""
                  }`
                })(<Input type="number" min={0} />)}
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  width: "calc(7% - 12px)"
                }}
              >
                <div style={{ marginTop: 12, textAlign: "center" }}>In</div>
              </Form.Item>
              <Form.Item
                style={{ display: "inline-block", width: "calc(30% - 12px)" }}
                label="No. Of Days"
              >
                {getFieldDecorator("noOfDays", {
                  initialValue: `${
                    Object.keys(formValues).length != 0
                      ? formValues.noOfDays
                      : ""
                  }`
                })(<Input type="number" min={0} />)}
              </Form.Item>
            </Fragment>
          </div>
          <div style={{ width: "100%" }}>
            <Form.Item
              style={{
                display: "inline-block",
                marginTop: "20px",
                width: "calc(15% - 12px)"
              }}
            >
              <div style={{ marginTop: 10, fontSize: 16 }}>Day Part</div>
            </Form.Item>

            <Fragment>
              <Form.Item
                style={{ display: "inline-block", width: "calc(33% - 12px)" }}
                label="Start Time"
              >
                {getFieldDecorator("startTime", {
                  //initialValue: moment(formValues.startTime),
                })(
                  <TimePicker
                    getPopupContainer={(triggerNode: any) =>
                      triggerNode.parentNode
                    }
                    style={{ width: "100%" }}
                    use12Hours
                    format="h:mm:ss a"
                  />
                )}
              </Form.Item>
              <Form.Item
                style={{ display: "inline-block", width: "calc(33% - 12px)" }}
                label="End Time"
              >
                {getFieldDecorator("endTime", {
                  //initialValue: moment(formValues.endTime),
                })(
                  <TimePicker
                    getPopupContainer={(triggerNode: any) =>
                      triggerNode.parentNode
                    }
                    style={{ width: "100%" }}
                    use12Hours
                    format="h:mm:ss a"
                  />
                )}
              </Form.Item>
            </Fragment>
          </div>
          <div style={{ width: "100%" }}>
            <Form.Item
              style={{
                display: "inline-block",
                marginTop: "20px",
                width: "calc(15% - 12px)"
              }}
            >
              <div style={{ marginTop: 10, fontSize: 16 }}>Day Of Week</div>
            </Form.Item>

            <Fragment>
              <Form.Item
                style={{ display: "inline-block", width: "calc(65% - 12px)" }}
                label="Select Days"
              >
                {getFieldDecorator("dayOfWeek", {
                  initialValue: selectedWeekDays
                })(
                  <Select
                    mode="multiple"
                    placeholder="Enter Week Days"
                    value={selectedWeekDays}
                    getPopupContainer={(triggerNode: any) =>
                      triggerNode.parentNode
                    }
                    onChange={e => dayOfWeekChanged(e)}
                    style={{ width: "100%" }}
                  >
                    {/* {filteredOptions.map(item => <Option key={item} value={item}> {item} </Option>)} */}
                    {filteredOptions}
                  </Select>
                )}
              </Form.Item>
            </Fragment>
          </div>
          <div style={{ width: "100%" }}>
            <Form.Item
              style={{
                display: "inline-block",
                marginTop: "20px",
                width: "calc(15% - 12px)"
              }}
            >
              <div style={{ marginTop: 10, fontSize: 16 }}>Cart Value</div>
            </Form.Item>

            <Fragment>
              <Form.Item
                style={{ display: "inline-block", width: "calc(33.5% - 12px)" }}
                label="Operator"
              >
                {getFieldDecorator("cartValueCondition", {
                  initialValue: `${
                    Object.keys(formValues).length != 0 &&
                    formValues.cartValueCondition
                      ? formValues.cartValueCondition
                      : ""
                  }`
                })(
                  <Select
                    getPopupContainer={(triggerNode: any) =>
                      triggerNode.parentNode
                    }
                    // onChange={this.handleSelectChange}
                  >
                    {cartValueConditionData &&
                      cartValueConditionData.map((el: any, i: any) => (
                        <Option key={i} value={el.value}>
                          {" "}
                          {el.title}{" "}
                        </Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
              <Form.Item
                style={{ display: "inline-block", width: "calc(33.5% - 12px)" }}
                label="Value"
              >
                {getFieldDecorator("cartValue", {
                  initialValue: `${
                    Object.keys(formValues).length != 0 && formValues.cartValue
                      ? formValues.cartValue
                      : ""
                  }`
                })(<Input type="number" min={0} />)}
              </Form.Item>
            </Fragment>
          </div>
          {/* {transactionTimeStatus && transactionTimeStatus.showFrequency === true && (
						<Fragment>
							<Form.Item
								style={{ display: 'inline-block', width: 'calc(40% - 12px)' }}
								label="No. Of Transaction"
							>
								{getFieldDecorator('noOfTransaction', {
									initialValue: `${
										Object.keys(formValues).length != 0 ? formValues.noOfTransaction : ''
										}`,
								})(<Input type="number" min={0} />)}
							</Form.Item>
							<Form.Item style={{ display: 'inline-block', marginTop: '20px', width: 'calc(8% - 12px)' }}>
								<div style={{ marginTop: 12, textAlign: 'center' }}>In</div>
							</Form.Item>
							<Form.Item
								style={{ display: 'inline-block', width: 'calc(40% - 12px)' }}
								label="No. Of Days"
							>
								{getFieldDecorator('noOfDays', {
									initialValue: `${Object.keys(formValues).length != 0 ? formValues.noOfDays : ''}`,
								})(<Input type="number" min={0} />)}
							</Form.Item>
						</Fragment>
					)}
					{transactionTimeStatus && transactionTimeStatus.showDayPart === true && (
						<Fragment>
							<Form.Item style={{ display: 'inline-block', width: 'calc(33% - 12px)' }} label="Start Time">
								{getFieldDecorator('startTime', {
									initialValue: moment(formValues.startTime),
								})(<TimePicker style={{ width: '100%' }} use12Hours format="h:mm:ss a" />)}
							</Form.Item>
							<Form.Item style={{ display: 'inline-block', width: 'calc(33% - 12px)' }} label="End Time">
								{getFieldDecorator('endTime', {
									initialValue: moment(formValues.endTime),
								})(<TimePicker style={{ width: '100%' }} use12Hours format="h:mm:ss a" />)}
							</Form.Item>
						</Fragment>

					)}
					{transactionTimeStatus && transactionTimeStatus.dayOfWeek === true && (
						<Fragment>
							<Form.Item style={{ display: 'inline-block', width: 'calc(66% - 12px)' }} label="Start Time">
								{getFieldDecorator('dayOfWeek', {
									initialValue: selectedWeekDays,
								})(
									<Select mode="multiple" placeholder="Enter Week Days" value={selectedWeekDays}
										getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
										onChange={(e) => dayOfWeekChanged(e)} style={{ width: '100%' }}
									>
										{filteredOptions}


									</Select>
								)}
							</Form.Item>
						</Fragment>
					)}
					{transactionTimeStatus && transactionTimeStatus.showCartValue === true && (
						<Fragment>
							<Form.Item
								style={{ display: 'inline-block', width: 'calc(33.5% - 12px)' }}
								label="Operator"
							>
								{getFieldDecorator('cartValueCondition', {
									initialValue: `${Object.keys(formValues).length != 0 && formValues.cartValueCondition ? formValues.cartValueCondition : ''}`
								})
									(
										<Select getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
										// onChange={this.handleSelectChange}
										>
											{cartValueConditionData &&
												cartValueConditionData.map((el: any, i: any) =>
													<Option key={i} value={el.value}> {el.title} </Option>)}
										</Select>
									)}
							</Form.Item>
							<Form.Item style={{ display: 'inline-block', width: 'calc(33.5% - 12px)' }} label="Value">
								{getFieldDecorator('cartValue', {
									initialValue: `${Object.keys(formValues).length != 0 && formValues.cartValue ? formValues.cartValue : ''}`,
								})(<Input type="number" min={0} />)}
							</Form.Item>
						</Fragment>
					)} */}
        </Form>
      );
    }
  }
);

export default OfferBasicInfoForm;
