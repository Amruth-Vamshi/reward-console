import React from 'react';
import { Col, Row, Avatar, Table, Icon, Spin } from 'antd';
import { Image, CustomList, CustomButton, InfoText } from 'shared';
import './index.css';
import { withApollo, ApolloProviderProps, Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import { orgDetails, userDetails } from '../../query/organization';
import jwt from 'jsonwebtoken';

interface OrganisationHomeRouterProps {
  id: string;
}

interface OrganisationHomeCacheProps {
  data: object;
}

interface OrganisationHomeProps
  extends ApolloProviderProps<OrganisationHomeCacheProps>,
    RouteComponentProps<OrganisationHomeRouterProps> {}

interface OrganisationHomeState {
  orgId: string;
}

class OrganisationHome extends React.Component<
  OrganisationHomeProps,
  OrganisationHomeState
> {
  constructor(props: OrganisationHomeProps) {
    super(props);
    this.state = {
      orgId:
        this.props.client &&
        this.props.client.cache['data']['data']['$ROOT_QUERY.auth']
          .organizationId,
    };
  }

  renderInfoHeader(data) {
    const { firstName, lastName } = data.user;
    let name = 'Name NA';
    if (firstName) {
      if (lastName) {
        name = `${firstName} ${lastName}`;
      } else {
        name = firstName;
      }
    } else {
      if (lastName) {
        name = lastName;
      }
    }

    return (
      <Row className="rowInfoHeader">
        <Col className="colAvatar">
          <Avatar
            src="https://via.placeholder.com/150x150"
            style={{ border: '1px solid lightgrey' }}
            size={40}
          />
        </Col>
        <Col className="colName">{name}</Col>
        <Col className="colDesignation">Designation</Col>
      </Row>
    );
  }

  renderInfo(data) {
    console.log('OrganisationHome renderInfo data', data);
    const {
      id,
      name,
      addressLine1,
      addressLine2,
      phoneNumber,
    } = data.user.organization;
    const { email } = data.user;
    let finalAddress = addressLine1 + addressLine2;
    if (!finalAddress) {
      finalAddress = 'Address NA';
    }
    const dataSource = [
      {
        key: '1',
        name: 'OrgId',
        value: id,
      },
      {
        key: '2',
        name: 'Name',
        value: name,
      },
      {
        key: '3',
        name: 'Address',
        value: finalAddress,
      },
      {
        key: '4',
        name: 'Email',
        value: email,
      },
      {
        key: '5',
        name: 'Phone',
        value: phoneNumber,
      },
    ];

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        width: '70%',
      },
    ];
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        showHeader={false}
        pagination={false}
        tableLayout={'fixed'}
        bordered={false}
      />
    );
  }

  renderUserDetails() {
    const token = localStorage.getItem('jwt');
    const decodedToken: any = jwt.decode(token);
    const userId = decodedToken.id;
    return (
      <div>
        <Query query={userDetails} variables={{ id: userId }}>
          {({ data, loading, error, refetch }: any) => {
            if (loading) {
              return (
                <div className="oh-loader-view">
                  <Spin size="large" />
                </div>
              );
            }
            if (error) {
              return (
                <div className="errorContainer">
                  <Icon type="warning" />
                  <div style={{ marginLeft: '10px' }}>No data found</div>
                </div>
              );
            }
            if (data && data.user) {
              console.log(
                'OrganisationHome render Query userDetails data',
                data
              );
              return (
                <div>
                  <Row className="rowImage">
                    <Image
                      source={require('../../../../shared/src/assets/fbb.png')}
                      width={'100%'}
                      height={'100%'}
                      style={{}}
                      alternate_text="org_logo"
                      scaleType="contain"
                    />
                  </Row>
                  {this.renderInfoHeader(data)}
                  {this.renderInfo(data)}
                </div>
              );
            }
          }}
        </Query>
      </div>
    );
  }

  renderSubOrgList(imageStyle, contentStyle, actionStyle) {
    return (
      <Row style={{ width: '100%', height: '100%' }}>
        <Query
          query={orgDetails}
          variables={{ id: this.props.match.params.id }}
        >
          {({ data, loading, error, refetch }: any) => {
            if (loading) {
              return (
                <div className="oh-loader-view">
                  <Spin size="large" />
                </div>
              );
            }
            if (error) {
              return (
                <div className="errorContainer">
                  <Icon type="warning" />
                  <div style={{ marginLeft: '10px' }}>No data found</div>
                </div>
              );
            }
            if (data && data.organization && data.organization.children) {
              console.log(
                'OrganisationHome render Query orgDetails data',
                data
              );
              const subOrgArray = [];
              for (var i = 0; i < data.organization.children.length; i++) {
                let subTitle = '';
                if (data.organization.children[i].addressLine1) {
                  if (data.organization.children[i].addressLine2) {
                    subTitle =
                      data.organization.children[i].addressLine1 +
                      data.organization.children[i].addressLine2;
                  } else {
                    subTitle = data.organization.children[i].addressLine1;
                  }
                }
                subOrgArray.push({
                  image: null,
                  title: data.organization.children[i].name,
                  subTitle: subTitle,
                  actionableTitle: 'Status',
                  actionableSubTitle: data.organization.children[i].status,
                  actionable: false,
                });
              }
              return (
                <div className="oh-list">
                  <CustomList
                    data={subOrgArray}
                    actionableButtonText={'Assign'}
                    actionableButtonType={'default'}
                    actionStyle={actionStyle}
                    actionSpan={4}
                    imageStyle={imageStyle}
                    imageSpan={4}
                    imageHeight={'80px'}
                    imageWidth={'100px'}
                    imageScaleType={'contain'}
                    contentStyle={contentStyle}
                    contentSpan={16}
                  />
                </div>
              );
            } else {
              return (
                <div className="errorContainer">
                  <Icon type="warning" />
                  <div style={{ marginLeft: '10px' }}>No data found</div>
                </div>
              );
            }
          }}
        </Query>
      </Row>
    );
  }

  render() {
    const imageStyle = {
      backgroundColor: 'transparent',
      padding: '10px',
    };
    const contentStyle = {
      backgroundColor: 'transparent',
      // height: "80px",
      // width: "100px",
      padding: '10px',
    };
    const actionStyle = {
      backgroundColor: 'transparent',
      // height: "80px",
      // width: "100px",
      padding: '10px',
    };
    return (
      <React.Fragment>
        <Row className="header">Organisation</Row>
        <Row style={{ display: 'flex', height: '80vh' }}>
          <Col className="col1 nohoverTableWrapper">
            {this.renderUserDetails()}
          </Col>
          <Col className="col2">
            <Row className="rowStores">
              <Col className="colStores">Stores</Col>
              <Col className="colCustomButtonAddNewSub">
                <CustomButton
                  type="primary"
                  disabled={false}
                  style={{}}
                  onClick={() => {}}
                >
                  Add NEW SUB
                </CustomButton>
              </Col>
            </Row>
            {this.renderSubOrgList(imageStyle, contentStyle, actionStyle)}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default withApollo(OrganisationHome);
