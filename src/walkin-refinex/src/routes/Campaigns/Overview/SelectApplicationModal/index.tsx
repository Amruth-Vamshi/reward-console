import './SelectApplicationModal.css';
import * as React from 'react';
import { Modal, Select, Table, Button, Row, Col, TreeSelect } from 'antd';
import {
  compose,
  graphql,
  withApollo,
  ApolloProviderProps,
} from 'react-apollo';
import { Link } from 'react-router-dom';
import {
  GET_CHILD_ORGANIZATIONS,
  GET_APPLICATIONS,
} from '../../../../containers/Query';

const TreeNode = TreeSelect.TreeNode;

const ApplicationList = ({ applications, onSelect }: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
    },
  ];

  return (
    <div>
      <Table
        rowSelection={{
          type: 'radio',
          onSelect: onSelect,
        }}
        rowKey="id"
        columns={columns}
        dataSource={applications}
        size="small"
      />
    </div>
  );
};

interface SelectApplicationModalProps extends ApolloProviderProps<any> {
  onConfirm?: (a: any) => void;
  visible?: any;
  onCancel?: any;
  getApplications?: any;
  organizationHierarchy?: any;
}

interface SelectApplicationModalState {
  selectedQuestion?: any;
  selectedOrganization?: any;
  applications?: Array<any>;
}

class SelectApplicationModal extends React.Component<
  SelectApplicationModalProps,
  SelectApplicationModalState
> {
  constructor(props: SelectApplicationModalProps) {
    super(props);
    this.state = {
      selectedQuestion: null,
      selectedOrganization: null,
      applications: [],
    };
  }

  onSelect = (selectedQuestion: any) => {
    this.setState({
      selectedQuestion: selectedQuestion,
    });
  };

  onSubmit = () => {
    this.props.onConfirm(this.state.selectedQuestion);
  };

  onOrganizationChanges = async (organizationId: any) => {
    this.setState({
      selectedOrganization: organizationId,
    });

    const { client } = this.props;
    const applications = await client.query({
      query: GET_APPLICATIONS,
      variables: {
        organizationId,
      },
      fetchPolicy: 'network-only',
    });

    this.setState({
      applications: applications.data.organization.applications,
    });
  };

  addKeys = (org: any) => {
    return {
      title: org.name,
      value: org.id,
      key: org.id,
      children: org.children.map((child: any) => this.addKeys(child)),
    };
  };

  createOrganizationTree = (organization: any) => {
    const org = this.addKeys(organization);
    return [org];
  };

  render() {
    const {
      visible,
      onConfirm,
      onCancel,
      getApplications,
      organizationHierarchy,
    } = this.props;

    console.log(this.props);

    console.log(organizationHierarchy.organizationHierarchy);
    const treeData = organizationHierarchy.organizationHierarchy
      ? this.createOrganizationTree(organizationHierarchy.organizationHierarchy)
      : [];
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
          <Col span={6}>
            <TreeSelect
              showSearch={false}
              style={{ width: 300 }}
              value={this.state.selectedOrganization}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
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

export default compose(
  graphql(GET_CHILD_ORGANIZATIONS, { name: 'organizationHierarchy' }),
  withApollo
)(SelectApplicationModal);
