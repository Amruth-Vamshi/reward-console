import * as React from 'react';
import './style.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withApollo, ApolloProviderProps } from 'react-apollo';
import * as jwt from 'jsonwebtoken';

import { EditableFormTable } from './../../../../shared';
import { Tabs, Spin, message } from 'antd';
import {
  GET_BUSINESS_RULES,
  UPDATE_BUSINESS_RULE,
} from 'walkin-rewardx/src/query';
import { RouteComponentProps } from 'react-router';
// import { RULES, UPDATE_RULE } from "./../../PlatformQueries";

const { TabPane } = Tabs;
const TABLE_HEADERS = [
  {
    title: 'NO',
    dataIndex: 'no',
    width: '10%',
    editable: false,
    ellipsis: true,
  },
  {
    title: 'RULE NAME',
    dataIndex: 'rule_name',
    width: '30%',
    editable: false,
    ellipsis: true,
  },
  {
    title: 'RULE VALUE',
    dataIndex: 'rule_value',
    width: '35%',
    editable: true,
    ellipsis: true,
  },
];

interface BusinessRulesRouterProps {
  id: string;
}

interface BusinessRulesProps
  extends ApolloProviderProps<any>,
    RouteComponentProps<BusinessRulesRouterProps> {}
interface BusinessRulesState {
  rules: any;
  tableData?: any;
  loading?: boolean;
}

class BusinessRules extends React.Component<
  BusinessRulesProps,
  BusinessRulesState
> {
  constructor(props: BusinessRulesProps) {
    super(props);
    this.state = {
      rules: [],
      tableData: [],
      loading: true,
    };
  }

  componentWillMount() {
    const roles: any = localStorage.getItem('role');
    console.log('CustomerSearch roles', roles);
    if (roles && roles !== 'ADMIN') {
      message.warn('You do not have access to this page');
      this.props.history.push({
        pathname: '/rewardx/customer_search',
      });
    } else {
      const jwtToken: any = localStorage.getItem('jwt');
      const { org_id }: any = jwt.decode(jwtToken);

      this.props.client
        .query({
          query: GET_BUSINESS_RULES,
          variables: { input: { ruleLevel: 'LOYALTY' } },
          fetchPolicy: 'network-only',
        })
        .then((businessRulesResponse: any) => {
          console.log(
            'BusinessRules businessRulesResponse',
            businessRulesResponse
          );
          let tableData = businessRulesResponse.data.businessRules.map(
            (item: any, index: any) => {
              return {
                key: item.id,
                no: index + 1,
                rule_name: item.ruleType,
                rule_value: item.ruleDefaultValue,
              };
            }
          );
          this.setState({
            rules: businessRulesResponse.data.businessRules,
            tableData,
            loading: false,
          });
        });
      //   .then(rulesResponse => {
      //     let tableData = rulesResponse.data.rules.map((item, index) => {
      //       let ruleAttribute = item.ruleConfiguration;
      //       return {
      //         key: item.id,
      //         no: index + 1,
      //         rule_name: item.name,
      //         rule_value: ruleAttribute
      //           ? ruleAttribute.rules && ruleAttribute.rules.length
      //             ? ruleAttribute.rules[0].attributeValue
      //             : `null`
      //           : `null`
      //       };
      //     });
      //     this.setState({
      //       rules: businessRulesResponse.data.businessRules,
      //       tableData,
      //       loading: false
      //     });
      //   });
    }
  }

  onChangeData = (row: any, index: number) => {
    console.log(row, 'row');
    let { tableData, rules } = this.state;
    tableData[index] = row;
    let input = { ...rules[index] };
    console.log('onChangeData input before', input);
    console.log('onChangeData row', row);
    delete input['id'];
    //deleted by V1k
    // delete input["status"];
    // delted by V1k
    delete input['__typename'];
    input.ruleType = row.rule_name;
    input.ruleDefaultValue = row.rule_value;
    // if (!input.ruleConfiguration.rules) {
    //   input.ruleConfiguration.rules = [{}];
    // }
    // input.ruleConfiguration.rules[0].attributeValue = row.rule_value;
    // input.ruleConfiguration = JSON.stringify(input.ruleConfiguration);
    // input.ruleExpression = JSON.stringify(input.ruleExpression);

    // // // {
    // // //   name:rules.name,
    // // //   description:"",
    // // //   type:type,
    // // //   ruleConfiguration:,
    // // //   ruleEXpression:,
    // // // }

    console.log('onChangeData input after', input);
    console.log('onChangeData id ', rules[index].id);
    this.props.client
      .mutate({
        mutation: UPDATE_BUSINESS_RULE,
        variables: { id: rules[index].id, input: input },
      })
      .then(updateRulesResponse => {
        console.log(updateRulesResponse, 'updateResponse');
      });
    this.setState({ tableData });
  };

  render() {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);
    console.log('org_id', org_id);
    let { tableData, loading } = this.state;
    return (
      <div>
        <div className="br-fontSize-header">Business Rules</div>
        {loading ? (
          <div className="justifyContent-center">
            <Spin size="large" />
          </div>
        ) : (
          <div className="gx-main-content-wrapper">
            <Tabs defaultActiveKey="1" onChange={() => {}}>
              <TabPane tab="Organisation" key="1">
                <EditableFormTable
                  loading={loading}
                  tableHeaders={TABLE_HEADERS}
                  tableData={tableData}
                  onChangeData={this.onChangeData}
                />
              </TabPane>
            </Tabs>
          </div>
        )}
      </div>
    );
  }
}

export default withApollo(BusinessRules);
