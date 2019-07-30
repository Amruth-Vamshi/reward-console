import React, { Component } from 'react'
import { CREATE_USER, GET_ALL_APPS_OF_ORGANIZATION, ROLES_LIST } from "@walkinsole/walkin-components/src/PlatformQueries";
import { Form, Input, Button, Select } from "antd";
import { withApollo, compose, graphql } from "react-apollo";

const Option = Select.Option;

const formItemLayout = {
    wrapperCol: {
        sm: { span: 24 },
        md: { span: 24 },
        lg: { span: 24 },
        xl: { span: 24 }
    }
};

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            errors: {},
            organizations: [],
            rolesList: []
        };
    }


    componentWillMount() {
        let { org_id } = this.props
        org_id
            ? this.props.client
                .query({
                    query: GET_ALL_APPS_OF_ORGANIZATION,
                    variables: { id: org_id }
                })
                .then(res => {
                    console.log(res.data);
                    var orgs = [];
                    let org = res.data.organization;

                    function recOrg(org, orgs) {
                        orgs.push({ name: org.name, id: org.id });
                        if (org && org.children) org.children.map(ch => recOrg(ch, orgs));
                    }
                    recOrg(org, orgs);
                    this.setState({ organizations: orgs });
                })
                .catch(err => {
                    console.log("Failed to get Organization Details" + err);
                }) : console.log("Error getting JwtData");

        this.props.client
            .query({ query: ROLES_LIST })
            .then(res => {
                console.log(res.data);

                this.setState({ rolesList: res.data.roles });
            })
            .catch(err => {
                console.log("Failed to get Organization Details" + err);
            })
    }

    render() {
        var options = this.state.organizations.map((item, index) => (
            <Option key={index} value={item.id}>
                {item.name}
            </Option>
        ));
        var roleOptions = this.state.rolesList.map((item, index) => (
            <Option key={index} value={item.id}>
                {item.name}
            </Option>
        ));
        return (
            <div>
                <Form className="appForm">

                    <div style={{ overflow: "hidden", textAlign: "center" }}>
                        <p style={{ fontSize: 25 }}>Create User</p>
                    </div>

                    <Form.Item {...formItemLayout}>
                        <Input
                            required
                            placeholder="First Name"
                            value={this.state.firstName}
                            size="large"
                            name="firstName"
                            onChange={c => this.handleOnChange(c)}
                        />
                        <span style={{ color: "Red" }}>{this.state.errors.firstName}</span>
                    </Form.Item>

                    <Form.Item {...formItemLayout}>
                        <Input
                            required
                            placeholder="Last Name"
                            value={this.state.lastName}
                            size="large"
                            name="lastName"
                            onChange={c => this.handleOnChange(c)}
                        />
                        <span style={{ color: "Red" }}>{this.state.errors.lastName}</span>
                    </Form.Item>

                    <Form.Item {...formItemLayout}>
                        <Input
                            required
                            placeholder="Email"
                            value={this.state.email}
                            size="large"
                            name="email"
                            onChange={c => this.handleOnChange(c)}
                        />
                        <span style={{ color: "Red" }}>{this.state.errors.email}</span>
                    </Form.Item>


                    <Form.Item {...formItemLayout}>
                        <Select
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Select Role"
                            optionFilterProp="children"
                            // value={this.state.method}
                            onChange={this.onChangeRole}
                        // onSearch={onSearch}
                        >
                            {roleOptions}
                        </Select>
                        <span style={{ color: "Red" }}>{this.state.errors.role}</span>
                    </Form.Item>

                    <Form.Item {...formItemLayout}>
                        <Select
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Assign Organisation or Store"
                            optionFilterProp="children"
                            // value={this.state.method}
                            onChange={this.onChangeOrg}
                        >
                            {options}
                        </Select>
                        <span style={{ color: "Red" }}>{this.state.errors.org}</span>
                    </Form.Item>

                    {/* <Form.Item {...formItemLayout}>
                        <Select
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Product"
                            optionFilterProp="children"
                            // value={this.state.method}
                            onChange={this.onChangeProduct}
                        >
                            <Option value="POST">Admin</Option>
                        </Select>
                        <span style={{ color: "Red" }}>{this.state.errors.product}</span>
                    </Form.Item> */}



                    {/* <p><Button  onClick={this.props.showModal}>Add Hotspot</Button></p> */}
                    <div style={{ overflow: "hidden", textAlign: "center" }}>
                        <Button
                            loading={this.state.loading}
                            type='primary'
                            onClick={() => this.createHook()}
                            className="buttonPrimary"
                            style={{
                                textAlign: "center",
                                width: "110px",
                                float: "center",
                                margin: "10px 30px 20px 0"
                            }}
                        >
                            Done
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}
export default compose(withApollo)(CreateUser);

