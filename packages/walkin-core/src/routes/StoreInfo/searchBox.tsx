import React from "react";
import { Input, Select } from "antd";
import { timeout } from "q";

const { Search } = Input;

interface SearchBoxProps {
  placeHolder: any;
  data: any;
  onFilteredList: any;
  filterOptions: any;
}

interface SearchBoxState {
  selectValue: any;
  options: any;
}

export default class SearchBox extends React.Component<
  SearchBoxProps,
  SearchBoxState
> {
  constructor(props: SearchBoxProps) {
    super(props);
    this.state = {
      selectValue: "All",
      options: []
    };
  }

  componentDidMount() {
    let new_option = {
      title: "All",
      dataIndex: "all",
      key: "all",
      width: "30%"
    };

    const newFilterOptions = [new_option, ...this.props.filterOptions];
    this.setState({ options: newFilterOptions });
  }

  onChange1(data?: any, e?: any) {
    let currentList = [];
    let newList = [];
    const selectValue = this.state.selectValue;

    if (e.target.value !== "") {
      currentList = data;
      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter((item: any) => {
        // let lc = null;
        // if(selectValue === "All"){
        //   lc = item.allcolumns.toLowerCase();
        // }

        // change current item to lowercase
        const lc = item.name.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = data;
    }
    // Set the filtered state based on what our rules added to newList
    this.props.onFilteredList(newList);
  }

  onChange(data?: any, e?: any) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = data;
      newList = currentList.filter((item: any) => {
        let lc = null;
        if (this.state.selectValue === "all") {
          // TODO fix this
          lc = item.all.toLowerCase();
        } else if (this.state.selectValue === "name") {
          lc = item.name.towLowerCase();
        } else if (this.state.selectValue === "storeCode") {
          lc = item.storeCode.toLowerCase();
        } else if (this.state.selectValue === "address") {
          lc = item.address.toLowerCase();
        } else if (this.state.selectValue === "admin") {
          lc = item.admin.toLowerCase();
        }

        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      console.log("storeInfo onChange e.target.value");
      newList = data;
    }
    this.props.onFilteredList(newList);
  }

  onChangeSelect(value) {
    console.log("onChangeSelect value", value);

    this.setState({ selectValue: value });
  }

  // minimum ram required to run node and typescript is 16GB
  renderFilterOptions() {
    console.log("renderFilterOptions", this.state.options);
    if (this.state.options) {
      return (
        <Select
          onChange={this.onChangeSelect.bind(this)}
          // defaultValue={this.state.options[0].value}
          style={{ width: 150 }}
        >
          {this.state.options.map((item: any, index: any) => {
            return (
              <Select.Option key={index.toString()} value={item.key}>
                {item.title}
              </Select.Option>
            );
          })}
        </Select>
      );
    }
  }

  render() {
    const { placeHolder, data } = this.props;
    return (
      <div className="gx-search-bar gx-lt-icon-search-bar">
        <div className="gx-form-group">
          <Search
            style={{ width: 200 }}
            placeholder={placeHolder}
            allowClear={true}
            onChange={this.onChange.bind(this, data)}
          />
          {this.renderFilterOptions()}
        </div>
      </div>
    );
  }
}
