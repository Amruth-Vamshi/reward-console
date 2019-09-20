import React, { Component } from 'react'
import { CREATE_USER, GET_ALL_APPS_OF_ORGANIZATION, ROLES_LIST } from "../../PlatformQueries";
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
            loading: false,
            visible: false,
            errors: {},
            organizations: [],
            rolesList: [],
            user: {},
            roleId: '',
            orgId: ''
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

    createUser = () => {

        this.setState({ loading: true });
        let errors = {};
        if (!this.state.user.firstName || this.state.user.firstName.trim() == "") errors.firstName = "* this field is mandatory";
        if (!this.state.user.lastName || this.state.user.lastName.trim() == "") errors.lastName = "* this field is mandatory";
        if (!this.state.user.password || this.state.user.password.trim() == "") errors.password = "* this field is mandatory";
        if (!this.state.user.email || this.state.user.email.trim() == "") errors.email = "* this field is mandatory";
        if (this.state.roleId == "") errors.roleId = "* this field is mandatory";
        if (this.state.orgId == "") errors.orgId = "* this field is mandatory";

        if (Object.keys(errors).length !== 0) {
            this.setState({ errors, loading: false });
            console.log("Errors in submition" + Object.keys(errors).length);
        } else {


            this.props.client
                .mutate({
                    mutation: CREATE_USER,
                    variables: { Orgid: this.state.orgId, rollId: this.state.roleId, user: this.state.user }
                }).then(res => {
                    console.log(res.data);
                    this.setState({ loading: false })
                    this.props.userCreated()
                }).catch(err => {
                    this.setState({ loading: false })
                    console.log("Failed to create User" + err);
                })
        }
    }

    onChangeRole = e => {
        let { errors } = this.state;
        errors.roleId = "";
        this.setState({ roleId: e, errors });
    }

    onChangeOrg = e => {
        let { errors } = this.state;
        errors.orgId = "";
        this.setState({ orgId: e, errors });
    }

    handleOnChange = e => {
        let { user, errors } = this.state
        user[e.target.name] = e.target.value
        if (e.target.value != "") errors[e.target.name] = ''
        this.setState({ user, errors })
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
                            value={this.state.user.firstName}
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
                            value={this.state.user.lastName}
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
                            value={this.state.user.email}
                            size="large"
                            name="email"
                            onChange={c => this.handleOnChange(c)}
                        />
                        <span style={{ color: "Red" }}>{this.state.errors.email}</span>
                    </Form.Item>

                    <Form.Item {...formItemLayout}>
                        <Input
                            required type='password'
                            placeholder="Password"
                            value={this.state.user.password}
                            size="large"
                            name="password"
                            onChange={c => this.handleOnChange(c)}
                        />
                        <span style={{ color: "Red" }}>{this.state.errors.password}</span>
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
                        <span style={{ color: "Red" }}>{this.state.errors.roleId}</span>
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
                        <span style={{ color: "Red" }}>{this.state.errors.orgId}</span>
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
                            onClick={() => this.createUser()}
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

