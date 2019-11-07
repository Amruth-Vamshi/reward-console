import * as React from "react";
import { Input } from "antd";

const Search = Input.Search;

interface IProps {
  onFilteredList: any;
  placeHolder: string;
  data: any;
}

interface IState {}

class InstantSearch extends React.Component<IProps, IState> {
  onChange(data: any, e: any) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = data;
      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter((item: any) => {
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
  render() {
    const { placeHolder, data } = this.props;
    return (
      <div className="gx-search-bar gx-lt-icon-search-bar">
        <div className="gx-form-group">
          <Search
            style={{ width: 200 }}
            placeholder={placeHolder}
            allowClear
            onChange={this.onChange.bind(this, data)}
          />
        </div>
      </div>
    );
  }
}

export default InstantSearch;
