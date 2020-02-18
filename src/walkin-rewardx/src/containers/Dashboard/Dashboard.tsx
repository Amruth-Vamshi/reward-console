import * as React from 'react';
import {
  Col,
  Row,
  DatePicker,
  Button,
  Icon,
  Empty,
  Spin,
  Table,
  Card,
  Input,
  Menu,
  Dropdown,
  Select,
  Switch,
  List,
  Avatar,
  Skeleton,
} from 'antd';
import {
  IconWithTextCard,
  Widget,
  ChartCard,
  Auxiliary,
} from 'walkin-components';

interface loyaltyProps {}

interface loyaltyState {
  bordered: boolean;
  loading: boolean;
  pagination: any;
  // size: TableSize;
  title: any;
  showHeader: boolean;
  scroll: any;
  hasData: boolean;
  data: Array<any>;
  count: number;
}

const data = {
  results: [
    {
      id: '1',
      currencyName: 'Beans',
      value: '1',
      rupee: '1',
      disabled: true,
    },
    {
      id: '2',
      currencyName: 'Rupee',
      value: '1',
      rupee: '1',
      disabled: true,
    },
    {
      id: '3',
      currencyName: 'CCD Points',
      value: '1',
      rupee: '1',
      disabled: true,
    },
  ],
};

function findItemInItems(items, itemToBeFound) {
  let item;
  for (let i = 0; i < items.length; i++) {
    item = items[i];
    if (item.id === itemToBeFound.id) {
      return item;
    }
  }
}

export default class Dashboard extends React.Component<
  loyaltyProps,
  loyaltyState
> {
  constructor(props: loyaltyProps) {
    super(props);
    this.state = {
      bordered: false,
      loading: false,
      pagination: '',
      // size: "default",
      title: undefined,
      showHeader: true,
      scroll: undefined,
      hasData: true,
      data: data.results,
      count: 1,
    };
  }

  componentDidMount() {
    // const data = [
    //   {
    //     id: "1",
    //     enabled: false,
    //     recipients: "sachin@getwalk.in",
    //     // date: moment("12/12/2013"),
    //     frequency: "month"
    //   }
    // ];
    // const count = data.length;
    // this.setState({ data: data, count });
  }

  handleAdd = () => {
    const { data } = this.state;
    const newData = {
      id: new Date(),
      currencyName: 'V Points',
      value: '1',
      rupee: '100',
      disabled: true,
    };
    this.setState({
      data: [...data, newData],
    });
  };

  handleDelete = Item => {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.id !== Item.id) });
  };

  handleEdit = item => {
    const old = item.disabled;
    console.log('old', old);
    console.log('data', data);

    let itemFound = findItemInItems(this.state.data, item);
    console.log('itemFound', itemFound);

    itemFound.disabled = !old;
    const new_array: any = this.state.data.filter(obj => {
      if (obj.id === item.id) {
        return {
          id: item.id,
          currencyName: '',
          value: '1',
          rupee: '100',
          disabled: true,
        };
      } else {
        return obj;
      }
    });
    this.setState({ data: new_array });

    // const newData = [...this.state.data];
    // const index = newData.findIndex(item => itemF.id === item.id);
    // console.log("index", index);

    // if (index > -1) {
    //   const item = newData[index];
    //   newData.splice(index, 1, {
    //     ...item
    //     // ...id
    //   });
    //   console.log("newData", newData);

    //   this.setState({ data: newData });
    // } else {
    //   //newData.push(row);
    //   this.setState({ data: newData });
    // }
  };

  render() {
    // const { state } = this;
    // const { data } = state;
    // const columns = [
    //   {
    //     // title: "Recipients",
    //     dataIndex: "recipients",
    //     key: "1",
    //     width: "30%",
    //     render: (text: any, record: any) => (
    //       <div style={{ marginBottom: 10 }}>
    //         <Input
    //           // onChange={this.onInputChange.bind(this, record)}
    //           addonBefore="To"
    //           value={text}
    //         />
    //       </div>
    //     )
    //   },
    //   {
    //     // title: "Date & Time",
    //     dataIndex: "date",
    //     key: "2",
    //     width: "30%",
    //     render: (text: any, record: any) => (
    //       <div style={{ marginBottom: 10 }}>
    //         <DatePicker
    //           value={text}
    //           showTime
    //           placeholder="Select Time"
    //           // onChange={this.onChangeDate.bind(this, record)}
    //           // onOk={this.onOk}
    //         />
    //       </div>
    //     )
    //   },
    //   {
    //     // title: "Frequency",
    //     dataIndex: "frequency",
    //     key: "3",
    //     width: "30%",
    //     render: (text: any, record: any) => (
    //       <div style={{ marginBottom: 10 }}>
    //         <Select
    //           value={text}
    //           showSearch
    //           style={{ width: 200 }}
    //           placeholder="Select Frequency"
    //           optionFilterProp="children"
    //           // onChange={this.onChange.bind(this, record)}
    //           // onFocus={this.onFocus}
    //           // onBlur={this.onBlur}
    //           // onSearch={this.onSearch}
    //           filterOption={(input: any, option: any) =>
    //             option.props.children
    //               .toLowerCase()
    //               .indexOf(input.toLowerCase()) >= 0
    //           }
    //         >
    //           <Select.Option value="month">Every Month</Select.Option>
    //           <Select.Option value="week">Every Week</Select.Option>
    //         </Select>
    //       </div>
    //     )
    //   }
    // ];

    return (
      <Auxiliary>
        <div
          style={{
            minHeight: '100vh',
            // maxWidth: "50vw" //html css
          }}
          className="gx-main-content-wrapper" // wieldy class
        >
          <Row>
            {/*antd*/}
            <Col sm={0} md={6} xl={8}>
              <span
                className="gx-d-none gx-d-sm-flex"
                style={{
                  width: '100%',
                  fontSize: 20,
                  color: 'black',
                }}
              >
                Loyalty Cards
              </span>
            </Col>
          </Row>
          <Card style={{ width: '60%', margin: 'auto', maxWidth: '800px' }}>
            <Row>
              <Col style={{ width: '50%' }}>Card Name</Col>
              <Col style={{ width: '50%' }}>Currency</Col>
            </Row>
            <Row>
              <Col style={{ width: '50%' }}>
                <Input placeholder="Basic usage"></Input>
              </Col>
              <Col style={{ width: '50%' }}>
                <div style={{ marginBottom: 10 }}>
                  <Select
                    value={'text'}
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select Frequency"
                    optionFilterProp="children"
                    // onChange={this.onChange.bind(this, record)}
                    // onFocus={this.onFocus}
                    // onBlur={this.onBlur}
                    // onSearch={this.onSearch}
                    filterOption={(input: any, option: any) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Select.Option value="month">Beans</Select.Option>
                    <Select.Option value="week">Rupee</Select.Option>
                  </Select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{ width: '50%' }}>
                <Input placeholder="Basic usage"></Input>
              </Col>
              <Col style={{ width: '50%' }}>
                <div style={{ marginBottom: 10 }}>
                  <Select
                    value={'text'}
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select Frequency"
                    optionFilterProp="children"
                    // onChange={this.onChange.bind(this, record)}
                    // onFocus={this.onFocus}
                    // onBlur={this.onBlur}
                    // onSearch={this.onSearch}
                    filterOption={(input: any, option: any) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Select.Option value="month">Beans</Select.Option>
                    <Select.Option value="week">Rupee</Select.Option>
                  </Select>
                </div>
              </Col>
            </Row>
          </Card>
          <div style={{ margin: 'auto' }}>
            <Button type="primary" size={'large'}>
              Download
            </Button>
          </div>
          <Card style={{ width: '70%', margin: 'auto', maxWidth: '800px' }}>
            <Row>
              <Col style={{ width: '50%' }}>
                Setup Currency For Loyalty Card
              </Col>
              <Col style={{ width: '50%' }}>
                <span
                  className="gx-link "
                  style={{ float: 'right' }}
                  onClick={() => this.handleAdd()}
                >
                  + Add new currency
                </span>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col style={{ width: '40%' }}>Currency Name</Col>
              <Col style={{ width: '40%' }}>Value</Col>
              <Col style={{ width: '20%' }}>Rupee</Col>
            </Row>
            {/* <Table
              style={{
                width: "70%"
              }}
              {...this.state}
              columns={columns}
              dataSource={state.hasData ? data : null}
            /> */}

            <List
              className="demo-loadmore-list"
              loading={false}
              itemLayout="horizontal"
              // loadMore={loadMore}
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item
                  actions={[<a key="list-loadmore-edit">edit</a>]}
                  onClick={() => this.handleEdit(item)}
                >
                  <Skeleton avatar title={false} loading={false} active>
                    {/* <List.Item.Meta
                      // avatar={
                      //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      // }
                      title={<a href="https://ant.design">{item.name.last}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    /> */}
                    <div style={{ width: '40%', height: '10vh' }}>
                      <Input
                        value={item.currencyName}
                        disabled={item.disabled}
                      />
                    </div>
                    {/* <div>content</div> */}
                    <div style={{ width: '40%', height: '10vh' }}>
                      <Input value={item.value} disabled={item.disabled} />
                    </div>
                    <div style={{ width: '20%', height: '10vh' }}>
                      <Input value={item.rupee} disabled={item.disabled} />
                    </div>
                  </Skeleton>
                </List.Item>
              )}
            />
          </Card>
        </div>
      </Auxiliary>
    );
  }
}
