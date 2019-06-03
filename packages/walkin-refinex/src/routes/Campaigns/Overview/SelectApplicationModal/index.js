import "./SelectApplicationModal.css";
import React, { Component } from "react";
import { Modal, Select, Table, Button, Row, Col, TreeSelect } from "antd";
import { compose, graphql, withApollo } from "react-apollo";
import { Link } from "react-router-dom";
import gql from "graphql-tag";

const TreeNode = TreeSelect.TreeNode;

const ApplicationList = ({ applications, onSelect }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id"
    },
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Description",
      dataIndex: "description"
    },
    {
      title: "Platform",
      dataIndex: "platform"
    }
  ];

  return (
    <div>
      <Table
        rowSelection={{
          type: "radio",
          onSelect: onSelect
        }}
        rowKey="id"
        columns={columns}
        dataSource={applications}
        size="small"
      />
    </div>
  );
};

class SelectApplicationModal extends Component {
  state = {
    selectedQuestion: null,
    selectedOrganization: null,
    applications: []
  };

  onSelect = selectedQuestion => {
    this.setState({
      selectedQuestion: selectedQuestion
    });
  };

  onSubmit = () => {
    this.props.onConfirm(this.state.selectedQuestion);
  };

  onOrganizationChanges = async organizationId => {
    this.setState({
      selectedOrganization: organizationId
    });

    const { client } = this.props;
    const GET_APPLICATIONS = gql`
      query getApplications($organizationId: ID!) {
        organization(id: $organizationId) {
          applications {
            id
            name
            description
            platform
          }
        }
      }
    `;
    const applications = await client.query({
      query: GET_APPLICATIONS,
      variables: {
        organizationId
      }
    });

    this.setState({
      applications: applications.data.organization.applications
    });
  };

  addKeys = org => {
    return {
      title: org.name,
      value: org.id,
      key: org.id,
      children: org.children.map(child => this.addKeys(child))
    };
  };

  createOrganizationTree = organization => {
    const org = this.addKeys(organization);
    return [org];
  };

  render() {
    const {
      visible,
      onConfirm,
      onCancel,
      getApplications,
      organizationHierarchy
    } = this.props;

    console.log(this.props);

    console.log(organizationHierarchy.organizationHierarchyJSON);
    const treeData = this.createOrganizationTree(
      organizationHierarchy.organizationHierarchyJSON
    );
    return (
      <Modal
        title="Select an Application"
        visible={visible}
        width="60vw"
        footer={null}
        onCancel={onCancel}
      >
        <Row>
          <Col span={6}>Organization</Col>
          <Col>
            <TreeSelect
              showSearch={false}
              style={{ width: 300 }}
              value={this.state.selectedOrganization}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              placeholder="Please select"
              allowClear
              treeDefaultExpandAll
              onChange={this.onOrganizationChanges}
              treeData={treeData}
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <ApplicationList
              onSelect={this.onSelect}
              applications={this.state.applications}
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Link to="/core/applications">
              <Button type="primary">Create New Application</Button>
            </Link>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={8}>
                <Button key="back" onClick={onCancel}>
                  Return
                </Button>
              </Col>
              <Col span={8}>
                <Button key="submit" type="primary" onClick={this.onSubmit}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    );
  }
}

const GET_CHILD_ORGANIZATIONS = gql`
  query organizationHierarchy($organizationId: ID!) {
    organizationHierarchyJSON(id: $organizationId)
  }
`;

export default compose(
  graphql(GET_CHILD_ORGANIZATIONS, { name: "organizationHierarchy" }),
  withApollo
)(SelectApplicationModal);
