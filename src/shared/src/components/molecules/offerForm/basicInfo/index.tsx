import * as React from "react";
import { Fragment } from "react";
import {
  Form,
  Icon,
  Input,
  Select,
  Button,
  Col,
  DatePicker,
  Radio,
  Checkbox,
  TimePicker
} from "antd";
const { TextArea } = Input;
import "./style.css";
import moment from "moment";
const Option = Select.Option;
const { RangePicker } = DatePicker;
import AddAndDeleteComponentsDynamically from "../../../atoms/addAndDeleteComponentsDynamically";
import { FormComponentProps } from "antd/lib/form";

interface IProps extends FormComponentProps {
  offerTypeData?: any;
  handleOfferTypeChange?: any;
  offerTypeStatus?: any;
  transactionTimeData?: any;
  locationData?: any;
  productData?: any;
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
  productDropDown: any;
}

const OfferBasicInfoForm = Form.create<IProps>({ name: "offer_basic_info" })(
  class OfferBasicInfoForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
      this.state = {
        values: [{ product: "", productItem: "" }],
        productDropDown: {
          showProductList: true,
          showCategoryList: false,
          showBrandList: false
        }
      };
    }
    addClick() {
      let array = this.state.values;
      array.push({ id: array.length + 1, product: "", productItem: "" });
      this.setState({ values: array });
      // const row = {
      // 	product: '',
      // 	productItem: [],
      // };
      // this.setState({
      // 	values: [...this.state.values, row],
      // });
    }

    handleProductChange(i: any, value: any) {
      let nextValues = this.state.values.slice();
      nextValues[i].product = value;
      this.setState({ values: nextValues });
      if (value === "sku") {
        this.setState(
          Object.assign(this.state.productDropDown, {
            showProductList: true,
            showCategoryList: false,
            showBrandList: false //not available atm
          })
        );
      }
      if (value === "category") {
        this.setState(
          Object.assign(this.state.productDropDown, {
            showProductList: false,
            showCategoryList: true,
            showBrandList: false //not available atm
          })
        );
      }
      if (value === "brand") {
        this.setState(
          Object.assign(this.state.productDropDown, {
            showProductList: false,
            showCategoryList: false,
            showBrandList: true //not available atm
          })
        );
      }
    }

    // handleChangeLocation = (value) => {
    // 	if (value == "SelectAll") {
    // 		if (this.state.selectedLocations !== '') this.state.errors.selectedLocations = ''
    // 		this.setState({
    // 			selectedLocations: this.state.locationsList.slice(1, this.state.locationsList.length)
    // 		})

    // 	} else if (value.length == 22) {
    // 		if (this.state.selectedLocations !== '') this.state.errors.selectedLocations = ''
    // 		this.setState({ selectedLocations: [] })
    // 	} else {
    // 		if (this.state.selectedLocations !== '') this.state.errors.selectedLocations = ''
    // 		this.setState({ selectedLocations: value })
    // 	}
    // }

    handleProductItemChange(i: any, value: any) {
      let nextValues = this.state.values.slice();
      nextValues[i].productItem = value;
      this.setState({ values: nextValues });
    }

    removeClick(i: any, e: any) {
      const values = [...this.state.values];
      values.splice(i, 1);
      this.setState({ values });
      // let someArray = this.state.values;
      // someArray.splice(i, 1);
      // this.setState({ values: someArray });
    }
    render() {
      const {
        offerTypeData,
        handleOfferTypeChange,
        offerTypeStatus,
        transactionTimeData,
        locationData,
        productData,
        handleTransactionTimeChange,
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
        onCouponChange,
        couponTypeSelected,
        couponInputLabel,
        onCouponLabelChange,
        checked,
        OnNoCouponCodeChange,
        couponTypeData
      } = this.props;
      const { productDropDown } = this.state;
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
      // console.log('offerTypeStatus', offerTypeStatus);
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
                  {products &&
                    products.map((el: any, i: any) => (
                      <Option key={i} value={el.code}>
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
          <Form.Item
            style={{ display: "inline-block", width: "calc(35% - 12px)" }}
            label="Condition"
          >
            {getFieldDecorator("transactionTime", {
              initialValue: `${
                Object.keys(formValues).length != 0
                  ? formValues.transactionTime
                  : ""
              }`
            })(
              <Select
                getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                placeholder="Select a transaction time"
                onChange={handleTransactionTimeChange}
              >
                {transactionTimeData &&
                  transactionTimeData.map((el: any, i: any) => (
                    <Option key={i} value={el.value}>
                      {" "}
                      {el.title}{" "}
                    </Option>
                  ))}
              </Select>
            )}
          </Form.Item>
          {transactionTimeStatus &&
            transactionTimeStatus.showFrequency === true && (
              <Fragment>
                <Form.Item
                  style={{ display: "inline-block", width: "calc(31% - 12px)" }}
                  label="No. Of Transaction"
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
                    width: "calc(5% - 12px)"
                  }}
                >
                  <div style={{ marginTop: 12 }}>In</div>
                </Form.Item>
                <Form.Item
                  style={{ display: "inline-block", width: "calc(31% - 12px)" }}
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
            )}
          {transactionTimeStatus && transactionTimeStatus.showDayPart === true && (
            // <Fragment>
            // 	<Form.Item style={{ display: 'inline-block', width: 'calc(65% - 12px)' }} label="Choose Date">
            // 		{getFieldDecorator('dateRange', {
            // 			initialValue: Object.keys(formValues).length != 0 ? formValues.dateRange : '',
            // 		})(<RangePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
            // 	</Form.Item>
            // </Fragment>
            <Fragment>
              <Form.Item
                style={{ display: "inline-block", width: "calc(33% - 12px)" }}
                label="Start Time"
              >
                {getFieldDecorator("startTime", {
                  initialValue: moment(formValues.startTime)
                })(
                  <TimePicker
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
                  initialValue: moment(formValues.endTime)
                })(
                  <TimePicker
                    style={{ width: "100%" }}
                    use12Hours
                    format="h:mm:ss a"
                  />
                )}
              </Form.Item>
            </Fragment>
          )}
          {transactionTimeStatus &&
            transactionTimeStatus.showCartValue === true && (
              <Fragment>
                <Form.Item
                  style={{
                    display: "inline-block",
                    width: "calc(33.5% - 12px)"
                  }}
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
                  style={{
                    display: "inline-block",
                    width: "calc(33.5% - 12px)"
                  }}
                  label="Value"
                >
                  {getFieldDecorator("cartValue", {
                    initialValue: `${
                      Object.keys(formValues).length != 0 &&
                      formValues.cartValue
                        ? formValues.cartValue
                        : ""
                    }`
                  })(<Input type="number" min={0} />)}
                </Form.Item>
              </Fragment>
            )}
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
          )}
        </Form>
      );
    }
  }
);

export default OfferBasicInfoForm;
