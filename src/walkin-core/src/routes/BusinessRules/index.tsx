import * as React from "react";
import "./style.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { withApollo, ApolloProviderProps } from "react-apollo";
import * as jwt from "jsonwebtoken";

import { EditableFormTable } from "./../../../../shared/src/index";
import { Tabs, Spin } from "antd";
import { RULES, UPDATE_RULE } from "./../../PlatformQueries";

const { TabPane } = Tabs;
const TABLE_HEADERS = [
  {
    title: "NO",
    dataIndex: "no",
    width: "10%",
    editable: false,
    ellipsis: true
  },
  {
    title: "RULE NAME",
    dataIndex: "rule_name",
    width: "35%",
    editable: false,
    ellipsis: true
  },
  {
    title: "RULE VALUE",
    dataIndex: "rule_value",
    width: "20%",
    editable: true,
    ellipsis: true
  }
];

interface BusinessRulesProps extends ApolloProviderProps<any> {}
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
      loading: true
    };
  }

  componentWillMount() {
    const jwtToken: any = localStorage.getItem("jwt");
    const { org_id }: any = jwt.decode(jwtToken);

    this.props.client
      .query({
        query: RULES,
        variables: { input: { organizationId: org_id, status: "ACTIVE" } },
        fetchPolicy: "network-only"
      })
      .then(rulesResponse => {
        let tableData = rulesResponse.data.rules.map((item, index) => {
          let ruleAttribute = item.ruleConfiguration;
          return {
            key: item.id,
            no: index + 1,
            rule_name: item.name,
            rule_value: ruleAttribute
              ? ruleAttribute.rules && ruleAttribute.rules.length
                ? ruleAttribute.rules[0].attributeValue
                : `null`
              : `null`
          };
        });
        this.setState({
          rules: rulesResponse.data.rules,
          tableData,
          loading: false
        });
      });
  }

  onChangeData = (row: any, index: number) => {
    console.log(row, "row");
    let { tableData, rules } = this.state;
    tableData[index] = row;
    let input = { ...rules[index] };
    delete input["id"];
    delete input["status"];
    delete input["__typename"];
    if (!input.ruleConfiguration.rules) {
      input.ruleConfiguration.rules = [{}];
    }
    input.ruleConfiguration.rules[0].attributeValue = row.rule_value;
    input.ruleConfiguration = JSON.stringify(input.ruleConfiguration);
    input.ruleExpression = JSON.stringify(input.ruleExpression);

    // // // {
    // // //   name:rules.name,
    // // //   description:"",
    // // //   type:type,
    // // //   ruleConfiguration:,
    // // //   ruleEXpression:,
    // // // }

    console.log(input);

    this.props.client
      .mutate({
        mutation: UPDATE_RULE,
        variables: { id: rules[index].id, input: input }
      })
      .then(updateRulesResponse => {
        console.log(updateRulesResponse, "updateResponse");
      });
    this.setState({ tableData });
  };

  render() {
    const jwtToken: any = localStorage.getItem("jwt");
    const { org_id }: any = jwt.decode(jwtToken);
    console.log("org_id", org_id);
    let { tableData, loading } = this.state;
    return (
      <div>
        <div className="fontSize-header">Business Rules</div>
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
              <TabPane tab="HyperX" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="NearX" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="RefineX" key="4">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        )}
      </div>
    );
  }
}

export default withApollo(BusinessRules);
