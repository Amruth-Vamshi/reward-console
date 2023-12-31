// import QueryBuilder from '@walkin-frontend/walkin-react-querybuilder';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import './style.css';
import { Select } from 'antd';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

interface iProps {
  onQueryChange?: any;
  operators?: any;
  fields?: any;
  query?: any;
}

class WalkinQueryBuilder extends React.Component<iProps, {}> {
  static propTypes: any;
  static defaultProps: any;

  removeProp = (obj: any, propToDelete: string) => {
    for (var property in obj) {
      if (typeof obj[property] == 'object') {
        let objectToCheck = obj[property];
        delete obj.property;
        let newJsonData = this.removeProp(obj[property], propToDelete);
        obj[property] = newJsonData;
      } else {
        if (property === propToDelete) {
          delete obj[property];
        }
      }
    }
    return obj;
  };
  renameQueryProperties = (query: any) => {
    let str = JSON.stringify(query);
    var mapObj: any = {
      // field: 'ruleAttributeId',
      field: 'attributeName',
      value: 'attributeValue',
      operator: 'expressionType',
    };
    str = str.replace(/field|value|operator/gi, function(matched) {
      return mapObj[matched];
    });
    let renamedQuery = JSON.parse(str);
    // let refinedQuery = this.removeProp(renamedQuery, 'id');
    this.props.onQueryChange(renamedQuery, query);
  };

  handleMultiSelect = (value: any) => {
    // console.log("val,", value);
  };

  render() {
    const { operators, fields, query } = this.props;
    return (
      <div className="flex-box-outer">
        <hr />
        <div className="flex-box">
          <div className="scroll">
            {/* <QueryBuilder
              fields={fields}
              controlClassnames={{ fields: 'form-control' }}
              onQueryChange={this.renameQueryProperties}
              operators={operators}
              query={query}
              // required to allow multiple values
              // controlElements={{
              // 	valueEditor: () => {
              // 		return (
              // 			<Select
              // 				mode="multiple"
              // 				size="default"
              // 				placeholder="Please select"
              // 				defaultValue={['a10', 'c12']}
              // 				onChange={this.handleMultiSelect}
              // 				style={{ width: '500px' }}
              // 			>
              // 				{children}
              // 			</Select>
              // 		);
              // 	},
              // }}
    // />*/}
          </div>
        </div>
      </div>
    );
  }
}

WalkinQueryBuilder.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
    }).isRequired
  ),
  controlElements: PropTypes.shape({
    valueEditor: PropTypes.func,
  }),
  onQueryChange: PropTypes.func,
  operators: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ),
};

WalkinQueryBuilder.defaultProps = {
  fields: [{ name: '', label: '' }],
  onQueryChange: () => {},
  valueEditor: () => {},
  operators: [
    { name: 'EQUALS', label: 'Equal to' },
    { name: 'NOT_EQUALS', label: 'Not equal to' },
    { name: 'GREATER_THAN', label: 'Greater than' },
    { name: 'LESS_THAN', label: 'Less than' },
    { name: 'LESS_THAN_OR_EQUAL', label: 'Less than or equal to' },
    { name: 'GREATER_THAN_OR_EQUAL', label: 'Greater than or equal to' },
  ],
};

export default WalkinQueryBuilder;
