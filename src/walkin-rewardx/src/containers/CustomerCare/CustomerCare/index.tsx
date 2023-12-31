import * as React from 'react';
import {
  Row,
  Col,
  Input,
  Tabs,
  Table,
  Modal,
  List,
  Breadcrumb,
  Card,
  Avatar,
} from 'antd';
import { CustomButton, SortableDataTable } from 'shared';
import './index.css';
import { RouteChildrenProps } from 'react-router';
import { Link } from 'react-router-dom';
import { TableProps } from 'antd/lib/table';
import { GET_CUSTOMER_LEDGER, GET_LOYALTY_TRANSACTIONS } from '../../../query';
import { withApollo, ApolloProviderProps, Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import moment from 'moment';
import { Location } from 'history';

const { TabPane } = Tabs;

interface CustomerCareRouterProps {
  id: string;
}

interface CustomerCareCacheProps {
  data: object;
}

interface CustomerCareProps
  extends ApolloProviderProps<CustomerCareCacheProps>,
    RouteComponentProps<CustomerCareRouterProps> {
  location: Location<{
    record: any;
    loyaltyTransactionsData: any;
    customerLoyaltyData: any;
  }>;
}

interface CustomerCareState {
  loadingTransactionsTab: boolean;
  loadingLoyaltyTab: boolean;
  showTransactionModal: boolean;
  selectedTransaction: any;
  currentPageLoyaltyTable: number;
  currentPageTransactionTable: number;
  billData: any;
  loyaltyTransactionsData: any;
  customerLoyaltyData: any;
  customerLoyaltyLedgerData: any;
}

class CustomerCare extends React.Component<
  CustomerCareProps,
  CustomerCareState
> {
  constructor(props: CustomerCareProps) {
    super(props);

    this.state = {
      loadingTransactionsTab: false,
      loadingLoyaltyTab: false,
      showTransactionModal: false,
      selectedTransaction: null,
      currentPageTransactionTable: 1,
      currentPageLoyaltyTable: 1,
      loyaltyTransactionsData: null,
      customerLoyaltyData: null,
      customerLoyaltyLedgerData: null,
      billData: [
        {
          itemName: 'Café Aztec',
          itemUnitPrice: '₹175',
          itemQuantity: '2',
          itemTotalPrice: '₹350',
        },
        {
          itemName: 'Café Ethiopian',
          itemUnitPrice: '₹175',
          itemQuantity: '1',
          itemTotalPrice: '₹350',
        },
      ],
    };
  }

  // hide everything from customer search except phone number
  componentDidMount() {
    if (
      this.props.location.state.record.phoneNumber &&
      this.props.location.state.loyaltyTransactionsData &&
      this.props.location.state.customerLoyaltyData
    ) {
      this.setState({
        loyaltyTransactionsData: this.props.location.state
          .loyaltyTransactionsData,
        customerLoyaltyData: this.props.location.state.customerLoyaltyData,
      });
      // this.getLoyaltyTransactions();
      this.getCustomerLoyaltyLedger();
    } else {
      this.props.history.push({
        pathname: '/rewardx/customer_search',
      });
    }
  }

  getLoyaltyTransactions() {
    this.setState({ loadingTransactionsTab: true });
    this.props.client
      .query({
        query: GET_LOYALTY_TRANSACTIONS,
        variables: {
          externalCustomerId: this.props.location.state.record.phoneNumber,
          pageOptions: {
            page: this.state.currentPageTransactionTable,
            pageSize: 10,
          },
          sortOptions: {
            sortBy: 'id',
            sortOrder: 'DESC',
          },
        },
      })
      .then((data: any) => {
        console.log('CustomerCare getLoyaltyTransactions data', data);
        this.setState({
          loyaltyTransactionsData: data.data.loyaltyTransaction,
          loadingTransactionsTab: false,
        });
      })
      .catch(error => {
        this.setState({ loadingTransactionsTab: false });
        console.log('CustomerCare getLoyaltyTransactions error', error);
      });
  }

  getCustomerLoyaltyLedger() {
    this.setState({ loadingLoyaltyTab: true });
    this.props.client
      .query({
        query: GET_CUSTOMER_LEDGER,
        variables: {
          externalCustomerId: this.props.location.state.record.phoneNumber,
          page: this.state.currentPageLoyaltyTable,
          itemsPerPage: 10,
        },
      })
      .then((data: any) => {
        console.log('getCustomerLoyaltyLedger data', data);
        this.setState({
          customerLoyaltyLedgerData: data.data.getCustomerLedger,
          loadingLoyaltyTab: false,
        });
      })
      .catch(error => {
        console.log('getCustomerLoyaltyLedger error', error);
        this.setState({ loadingLoyaltyTab: false });
      });
  }

  handleOnOkayBillDetailsModal = () => {
    this.setState({ showTransactionModal: false, selectedTransaction: null });
  };

  handleOnCancelBillDetailsModal = () => {
    this.setState({ showTransactionModal: false, selectedTransaction: null });
  };

  onRowClickTransactionTabPane = (event, record, rowIndex) => {
    console.log('event', event);
    console.log('record', record);
    console.log('rowIndex', rowIndex);
    // this.setState({ showTransactionModal: true, selectedTransaction: record });
  };

  onRowClickLoyaltyTabPane = (event, record, rowIndex) => {
    console.log('event', event);
    console.log('record', record);
    console.log('rowIndex', rowIndex);
    // this.setState({ showTransactionModal: true, selectedTransaction: record });
  };

  renderBillDetailsModal() {
    return (
      <Modal
        title="Bill Details"
        visible={this.state.showTransactionModal}
        onOk={() => this.handleOnOkayBillDetailsModal()}
        onCancel={() => this.handleOnCancelBillDetailsModal()}
      >
        {/* TODO list component needed */}
        <List
          itemLayout="horizontal"
          dataSource={this.state.billData}
          renderItem={(item: any) => {
            console.log('item', item);
            return (
              <List.Item>
                <Col style={{ width: '60%', marginLeft: '10px' }}>
                  <Row>{item.itemName}</Row>
                  <Row>{item.itemUnitPrice}</Row>
                </Col>
                <Col
                  style={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  x{item.itemQuantity}
                </Col>
                <Col
                  style={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {item.itemTotalPrice}
                </Col>
              </List.Item>
            );
          }}
        />
      </Modal>
    );
  }

  renderTransactionTabPane() {
    const loyaltyTransactionsData = this.state.loyaltyTransactionsData.data;
    console.log(
      'CustomerCare renderTransactionTabPane loyaltyTransactionsData',
      loyaltyTransactionsData
    );

    let dataSource = [];

    for (const transaction of loyaltyTransactionsData) {
      // const transactionData = transaction.loyaltyLedgers;
      const transactionData =
        typeof transaction.data === 'string'
          ? JSON.parse(transaction.data)
          : transaction.data;

      console.log(
        'CustomerCare renderTransactionTabPane transaction',
        transaction
      );

      dataSource.push({
        key: transaction.id,
        orderId: transactionData.orderData.order.externalOrderId,
        storeId: transactionData.orderData.order.externalStoreId,
        orderChannel: transactionData.orderData.order.orderChannel,
        fulfillmentDate: moment(
          transactionData.orderData.order.fulfillmentDate
        ).format('YYYY-MM-DD'),
        fulfillmentTime: moment(
          transactionData.orderData.order.fulfillmentDate
        ).format('h:mm:ss a'),
        totalAmount: transactionData.orderData.order.totalAmount,
        status: transaction.statusCode.statusCode,
        pointsIssued: transaction.pointsIssued,
        pointsRedeemed: transaction.pointsRedeemed,
      });
    }

    const columns = [
      {
        title: 'OLO ID',
        dataIndex: 'orderId',
        key: 'orderId',
        sorter: (a: any, b: any) =>
          a.orderId !== b.orderId ? (a.orderId < b.orderId ? -1 : 1) : 0,
      },
      {
        title: 'Store code',
        dataIndex: 'storeId',
        key: 'storeId',
        sorter: (a: any, b: any) =>
          a.storeId !== b.storeId ? (a.storeId < b.storeId ? -1 : 1) : 0,
      },
      {
        title: 'Order channel',
        dataIndex: 'orderChannel',
        key: 'orderChannel',
        sorter: (a: any, b: any) =>
          a.orderChannel !== b.orderChannel
            ? a.orderChannel < b.orderChannel
              ? -1
              : 1
            : 0,
      },
      {
        title: 'Order date',
        dataIndex: 'fulfillmentDate',
        key: 'fulfillmentDate',
        sorter: (a: any, b: any) =>
          a.fulfillmentDate !== b.fulfillmentDate
            ? a.fulfillmentDate < b.fulfillmentDate
              ? -1
              : 1
            : 0,
      },
      {
        title: 'Order time',
        dataIndex: 'fulfillmentTime',
        key: 'fulfillmentTime',
        sorter: (a: any, b: any) =>
          a.fulfillmentTime !== b.fulfillmentTime
            ? a.fulfillmentTime < b.fulfillmentTime
              ? -1
              : 1
            : 0,
      },
      {
        title: 'Bill amount',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
        sorter: (a: any, b: any) =>
          a.totalAmount !== b.totalAmount
            ? a.totalAmount < b.totalAmount
              ? -1
              : 1
            : 0,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: 'Earn Status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a: any, b: any) =>
          a.status !== b.status ? (a.status < b.status ? -1 : 1) : 0,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: 'Points Issued',
        dataIndex: 'pointsIssued',
        key: 'pointsIssued',
        sorter: (a: any, b: any) =>
          a.pointsIssued !== b.pointsIssued
            ? a.pointsIssued < b.pointsIssued
              ? -1
              : 1
            : 0,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: 'Points Redeemed',
        dataIndex: 'pointsRedeemed',
        key: 'pointsRedeemed',
        sorter: (a: any, b: any) =>
          a.pointsRedeemed !== b.pointsRedeemed
            ? a.pointsRedeemed < b.pointsRedeemed
              ? -1
              : 1
            : 0,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
    ];

    return (
      <TabPane tab={'Transaction'} key={'1'}>
        {dataSource && (
          <Table
            // ref={this.tableRef}
            dataSource={dataSource}
            onChange={() => {}}
            columns={columns}
            // pagination={paginationData}
            loading={this.state.loadingTransactionsTab}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  this.onRowClickTransactionTabPane(event, record, rowIndex);
                },
              };
            }}
            pagination={{
              total: this.state.loyaltyTransactionsData.transactionCount
                ? this.state.loyaltyTransactionsData.transactionCount
                : 0,
              defaultPageSize: 10,
              onChange: (currentPage, pageSize) => {
                console.log(
                  'TransactionTabPane currentPage pageSize',
                  currentPage,
                  pageSize
                );
                this.setState(
                  { currentPageTransactionTable: currentPage },
                  () => {
                    this.getLoyaltyTransactions();
                  }
                );
              },
            }}
          />
        )}
      </TabPane>
    );
  }

  renderLoyaltyTabPane() {
    const customerLoyaltyLedgerData = this.state.customerLoyaltyLedgerData.data;
    console.log(
      'CustomerCare renderLoyaltyTabPane customerLoyaltyLedgerData',
      customerLoyaltyLedgerData
    );

    let dataSource = [];

    for (const ledger of customerLoyaltyLedgerData) {
      console.log('CustomerCare renderTransactionTabPane ledger', ledger);

      let expiryDate = null;
      let createdDate = null;
      if (
        moment(ledger.loyaltyLedger.expiryDate).format(
          'YYYY-MM-DD h:mm:ss a'
        ) === 'Invalid date'
      ) {
        expiryDate = '';
      } else {
        expiryDate = moment(ledger.loyaltyLedger.expiryDate).format(
          'YYYY-MM-DD h:mm:ss a'
        );
      }

      if (
        moment(ledger.createdTime).format('YYYY-MM-DD h:mm:ss a') ===
        'Invalid date'
      ) {
        createdDate = '';
      } else {
        createdDate = moment(ledger.createdTime).format('YYYY-MM-DD h:mm:ss a');
      }

      dataSource.push({
        key: ledger.id,
        date: createdDate,
        orderId: ledger.loyaltyTransaction.data.orderData.order.externalOrderId,
        referenceId: ledger.loyaltyLedger.id,
        points: ledger.loyaltyLedger.points,
        balance: ledger.loyaltyLedger.balanceSnapshot,
        type: ledger.loyaltyLedger.type,
        expiryDate: expiryDate,
        remarks: ledger.loyaltyLedger.remarks,
      });
    }

    const columns = [
      {
        title: 'Reference ID',
        dataIndex: 'referenceId',
        key: 'referenceId',
        sorter: (a: any, b: any) =>
          a.referenceId !== b.referenceId
            ? a.referenceId < b.referenceId
              ? -1
              : 1
            : 0,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a: any, b: any) =>
          a.date !== b.date ? (a.date < b.date ? -1 : 1) : 0,
      },
      {
        title: 'OLO ID',
        dataIndex: 'orderId',
        key: 'orderId',
        sorter: (a: any, b: any) =>
          a.orderId !== b.orderId ? (a.orderId < b.orderId ? -1 : 1) : 0,
      },
      {
        title: 'Balance',
        dataIndex: 'balance',
        key: 'balance',
        sorter: (a: any, b: any) =>
          a.balance !== b.balance ? (a.balance < b.balance ? -1 : 1) : 0,
      },
      {
        title: 'Points',
        dataIndex: 'points',
        key: 'points',
        sorter: (a: any, b: any) =>
          a.points !== b.points ? (a.points < b.points ? -1 : 1) : 0,
      },
      {
        title: 'Ledger Type',
        dataIndex: 'type',
        key: 'type',
        sorter: (a: any, b: any) =>
          a.type !== b.type ? (a.type < b.type ? -1 : 1) : 0,
      },
      {
        title: 'Expiry date',
        dataIndex: 'expiryDate',
        key: 'expiryDate',
        sorter: (a: any, b: any) =>
          a.expiryDate !== b.expiryDate
            ? a.expiryDate < b.expiryDate
              ? -1
              : 1
            : 0,
      },
      {
        title: 'Remarks',
        dataIndex: 'remarks',
        key: 'remarks',
        sorter: (a: any, b: any) =>
          a.remarks !== b.remarks ? (a.remarks < b.remarks ? -1 : 1) : 0,
      },
    ];

    return (
      <TabPane tab={'Loyalty'} key={'2'}>
        {dataSource && (
          <Table
            // ref={this.tableRef}
            dataSource={dataSource}
            onChange={() => {}}
            columns={columns}
            //  pagination={paginationData}
            loading={this.state.loadingLoyaltyTab}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  this.onRowClickLoyaltyTabPane(event, record, rowIndex);
                },
              };
            }}
            pagination={{
              total: this.state.customerLoyaltyLedgerData.ledgerCount
                ? this.state.customerLoyaltyLedgerData.ledgerCount
                : 0,
              defaultPageSize: 10,
              onChange: (currentPage, pageSize) => {
                console.log(
                  'LoyaltyTabPane currentPage pageSize',
                  currentPage,
                  pageSize
                );
                this.setState(
                  {
                    currentPageLoyaltyTable: currentPage,
                  },
                  () => {
                    this.getCustomerLoyaltyLedger();
                  }
                );
              },
            }}
          />
        )}
      </TabPane>
    );
  }

  renderRefundTabPane() {
    return (
      <TabPane tab={'Refund'} key={'3'}>
        <div className="cc-tab-header">
          <Row className="cc-row-header">Phone Number</Row>
          <Row className="cc-row-input">
            <Input placeholder="Enter number here" />
          </Row>
          <Row className="cc-row-header">Points to add</Row>
          <Row className="cc-row-input">
            <Input placeholder="0" type="number" />
          </Row>
        </div>

        <CustomButton
          style={{ margin: '10px' }}
          type={'primary'}
          disabled={false}
          onClick={() => {}}
        >
          Give Refund
        </CustomButton>
      </TabPane>
    );
  }

  // TODO add input types
  render() {
    const customer = this.props.location.state.record;
    const loyaltyTransactionsData = this.props.location.state
      .loyaltyTransactionsData;
    const customerLoyaltyData = this.props.location.state.customerLoyaltyData;
    let loyaltyBalance = '';
    let loyaltyBalanceUpdatedOn = '';
    if (
      loyaltyTransactionsData &&
      customerLoyaltyData &&
      loyaltyTransactionsData.data &&
      loyaltyTransactionsData.data.length &&
      loyaltyTransactionsData.data[0].data
    ) {
      loyaltyBalance = customerLoyaltyData.burnablePoints;
      // loyaltyTransactionsData.data[0].data.orderData.order.totalAmount;
      // loyaltyBalance = loyaltyTransactionsData.data[0].data.totalAmount;
      if (
        moment(loyaltyTransactionsData.data[0].data.transactionDate).format(
          'YYYY-MM-DD'
        ) === 'Invalid date'
      ) {
        loyaltyBalanceUpdatedOn = '';
      } else {
        loyaltyBalanceUpdatedOn = moment(
          loyaltyTransactionsData.data[0].data.transactionDate
        ).format('YYYY-MM-DD');
      }
    }

    return (
      <React.Fragment>
        <div className="cc-container">
          <Breadcrumb style={{ marginBottom: '10px' }}>
            <Breadcrumb.Item>
              <Link to="/rewardx/customer_search">Customer Search</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Customer Care</Breadcrumb.Item>
          </Breadcrumb>

          <Row className="cc-header">Customer Care</Row>

          <Card style={{ width: '80%' }}>
            {/* <div className="cc-customer-header"> */}
            <Row style={{ alignItems: 'center' }}>
              <Avatar icon="user" size="large" style={{ marginRight: 10 }} />
              {customer.name}
            </Row>
            <Row>
              <Col style={{ width: '30%', paddingTop: 15, paddingLeft: 20 }}>
                <Row>
                  <Col style={{ color: 'grey', marginRight: 2 }}>ID : </Col>
                  <Col style={{ color: 'black' }}>{customer.phoneNumber}</Col>
                </Row>
                <Row>
                  <Col style={{ color: 'grey', marginRight: 2 }}>Gender : </Col>
                  <Col style={{ color: 'black', marginRight: 2 }}>
                    {customer.gender}
                  </Col>
                </Row>
                <Row>
                  <Col style={{ color: 'grey' }}>Date Of Birth : </Col>
                  <Col style={{ color: 'black' }}>{customer.dob}</Col>
                </Row>
              </Col>
              <Col style={{ width: '30%', paddingTop: 15 }}>
                <Row style={{ color: 'grey' }}>Contact Info</Row>
                <Row style={{ color: 'black' }}>M : {customer.phoneNumber}</Row>
                <Row style={{ color: 'black' }}>E : {customer.email}</Row>
              </Col>
              {/*  get loyalty balance from loyaltyTransaction->custLoyalty->overAllAmount */}
              <Col style={{ width: '35%', paddingTop: 15 }}>
                <Row style={{ color: 'grey' }}>Loyalty Program Info</Row>
                <Row style={{ color: 'black' }}>
                  Loyalty Balance : {loyaltyBalance}
                </Row>
                <Row style={{ color: 'black' }}>
                  Last Loyalty Balance Updated On : {loyaltyBalanceUpdatedOn}
                </Row>
              </Col>
            </Row>
            {/* </div> */}
          </Card>

          <div>
            <Tabs defaultActiveKey="1" onChange={() => {}}>
              {this.state.loyaltyTransactionsData &&
                this.renderTransactionTabPane()}

              {this.state.customerLoyaltyLedgerData &&
                this.renderLoyaltyTabPane()}

              {/* {this.renderRefundTabPane()} */}
            </Tabs>
          </div>
          {this.renderBillDetailsModal()}
        </div>
      </React.Fragment>
    );
  }
}

export default withApollo(CustomerCare);
