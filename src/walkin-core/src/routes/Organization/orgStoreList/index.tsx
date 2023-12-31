import * as React from 'react';
import { InstantSearch, SortableDataTable } from 'shared';
import { Dropdown, Menu } from 'antd';
import { ApolloProviderProps } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import { PaginationConfig, SorterResult } from 'antd/lib/table';
import { History, Location } from 'history';

interface OrgStoreListState {
  sortedInfo: any;
  filtered: any;
}

interface OrgStoreListProps
  extends ApolloProviderProps<any>,
    RouteComponentProps {
  data: any;
  pagination: PaginationConfig;
  showStoreFilter: string;
  placeholder: string;
  filterData: object;
  location: Location<{
    storeDetails: any;
  }>;
}
class OrgStoreList extends React.Component<
  OrgStoreListProps,
  OrgStoreListState
> {
  constructor(props: OrgStoreListProps) {
    super(props);
    this.state = {
      sortedInfo: {},
      filtered: {},
    };
  }
  handleChange = (
    pagination: PaginationConfig,
    filters: Record<string | number | symbol, string[]>,
    sorter: SorterResult<any>
  ) => {
    this.setState({
      sortedInfo: sorter,
    });
  };
  onOrgFilteredList = (newList: Array<any>) => {
    this.setState({
      filtered: newList,
    });
  };
  menus = (record: object) => (
    <Menu
      onClick={e => {
        if (e.key === 'duplicate') {
          //this.onDuplicateContact(record);
        } else {
          this.onDeleteContact(record);
        }
      }}
    >
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );
  onDeleteContact = (contact: any) => {
    // let { client } = this.props;
    // client
    // 	.mutate({
    // 		mutation: disableSegment,
    // 		variables: {
    // 			id: contact.id,
    // 		},
    // 	})
    // 	.then(({ data }) => {
    // 		const { refetchSegments } = this.props;
    // 		refetchSegments();
    // 	})
    // 	.catch(error => {
    // 		console.log('err', error);
    // 	});
  };
  render() {
    const { location } = this.props;
    let storeData;
    let orgStoreData = [];
    const { data, pagination, showStoreFilter } = this.props;
    const { sortedInfo, filtered } = this.state;
    // TODO get it from context
    if (location && location.state) {
      if (location.state.storeDetails) {
        storeData = location.state.storeDetails;
        if (filtered != null) {
          orgStoreData = filtered;
        } else {
          orgStoreData = storeData;
        }
      }
    }
    let newSortedInfo = sortedInfo || {};

    const orgColumns = [
      {
        title: 'Store code',
        dataIndex: 'code',
        key: 'code',
        sorter: (a: any, b: any) =>
          a.code !== b.code ? (a.code < b.code ? -1 : 1) : 0,
        sortOrder: newSortedInfo.columnKey === 'code' && newSortedInfo.order,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: any, b: any) =>
          a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0,
        sortOrder: newSortedInfo.columnKey === 'name' && newSortedInfo.order,
      },
      {
        title: 'Address',
        dataIndex: 'addressLine1',
        key: 'addressLine1',
        sorter: (a: any, b: any) => a.addressLine1 - b.addressLine1,
        sortOrder:
          newSortedInfo.columnKey === 'addressLine1' && newSortedInfo.order,
        render: (text: any, row: any) => (
          <div>
            {text != null
              ? text
              : '' + ', ' + row.addressLine1 != null
              ? row.addressLine1
              : '' + ', ' + row.addressLine2 != null
              ? row.addressLine2
              : '' + ', ' + row.city != null
              ? row.city
              : '' + ', ' + row.state != null
              ? row.state
              : '' + ', ' + row.pinCode != null
              ? row.pinCode
              : '' + ', ' + row.country != null
              ? row.country
              : ''}
          </div>
        ),
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a: any, b: any) =>
          a.status !== b.status ? (a.status < b.status ? -1 : 1) : 0,
        sortOrder: newSortedInfo.columnKey === 'status' && newSortedInfo.order,
      },
      {
        title: '',
        key: 'action',
        render: (text: any, record: any) => (
          <div className="gx-module-contact-right">
            <Dropdown
              overlay={this.menus(record)}
              placement="bottomRight"
              trigger={['click']}
            >
              <i className="gx-icon-btn icon icon-ellipse-v" />
            </Dropdown>
          </div>
        ),
      },
    ];

    return (
      <React.Fragment>
        {showStoreFilter && (
          <div style={{ paddingBottom: '20px' }} className="searchInputStyle">
            <InstantSearch
              placeHolder="Search"
              data={location && location.state && location.state.storeDetails}
              onFilteredList={this.onOrgFilteredList}
            />
          </div>
        )}
        <SortableDataTable
          data={data || orgStoreData}
          onChange={this.handleChange}
          columns={orgColumns}
          pagination={pagination}
        />
      </React.Fragment>
    );
  }
}

export default OrgStoreList as any; // TODO: Fix this
