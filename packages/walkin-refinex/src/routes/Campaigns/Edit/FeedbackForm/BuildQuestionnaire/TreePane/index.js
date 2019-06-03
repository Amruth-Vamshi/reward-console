import "./TreePane.css";
import { Tree, Input, Button, Icon } from "antd";
import React, { Component } from "react";
const { TreeNode } = Tree;
const Search = Input.Search;

class SearchTree extends React.Component {
  state = {
    expandedKeys: [],
    searchValue: "",
    autoExpandParent: true
  };

  onExpand = expandedKeys => {
    this.setState({
      expandedKeys,
      autoExpandParent: false
    });
  };

  onChange = e => {
    const value = e.target.value;
    const expandedKeys = dataList
      .map(item => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, gData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true
    });
  };

  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loop = data =>
      data.map(item => {
        const index = item.title.indexOf(searchValue);
        const beforeStr = item.title.substr(0, index);
        const afterStr = item.title.substr(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span style={{ color: "#f50" }}>{searchValue}</span>
              {afterStr}
              <Icon type="plus-circle" />
            </span>
          ) : (
            <span>{item.title}</span>
          );
        if (item.children) {
          return (
            <TreeNode key={item.key} title={title}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={title} />;
      });
    return (
      <div className="TreePane">
        <Search
          style={{ marginBottom: 8 }}
          placeholder="Search"
          onChange={this.onChange}
        />
        <div className="QuestionnaireTree">
          <Tree
            onExpand={this.onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
          >
            {loop([])}
          </Tree>
        </div>
      </div>
    );
  }
}

export default SearchTree;
