import * as React from "react";
import { Input, Button, Alert, Col, Icon, Spin } from "antd";
import { withRouter } from "react-router-dom";
import {
  withApollo,
  graphql,
  compose,
  ApolloProviderProps
} from "react-apollo";
import { attributes, createRule, createSegment } from "../../Query";
import "./style.css";
import { SEGMENT_LIST, DEFAULT_ACTIVE_STATUS } from "../../../Utils";
import * as _ from "lodash";
import { WalkinQueryBuilder, CampaignHeader } from "shared";
import { ErrorBoundary } from "walkin-components";
import * as jwt from "jsonwebtoken";
import { GET_ALL_APPS_OF_ORGANIZATION } from "walkin-core/src/PlatformQueries";
import { toNumber } from "walkin-components/src/util/common";
import { RouteChildrenProps } from "react-router";

interface NewSegmentProps extends RouteChildrenProps, ApolloProviderProps<any> {
  allApplications?: any;
  attributes?: any;
}

interface NewSegmentState {
  value?: string;
  query?: any;
  newSegmentError?: boolean;
  isDuplicateSegment?: boolean;
  segmentErrorMessage?: string;
}
class NewSegment extends React.Component<NewSegmentProps, NewSegmentState> {
  constructor(props: NewSegmentProps) {
    super(props);
    this.state = {
      value: "",
      query: { id: "1", combinator: "and", rules: [] },
      newSegmentError: false,
      isDuplicateSegment: false,
      segmentErrorMessage: ""
    };
  }
  logQuery = (query: any) => {
    this.setState({
      query: query,
      newSegmentError: false
    });
  };
  onChange = (e: any) => {
    this.setState({ value: e.target.value });
  };

  displayError = (state: any, msg: string) => {
    this.setState({ [state]: true, segmentErrorMessage: msg }, () => {
      setTimeout(() => {
        this.setState({ [state]: false, segmentErrorMessage: "" });
      }, 4000);
    });
  };

  onNewSegment = () => {
    const { value, query } = this.state;
    if (value === "") {
      this.displayError("newSegmentError", "Please provide a segment name");
      return;
    }
    let { client } = this.props;
    console.log(this.props.allApplications.organization.applications[0]);
    console.log(jwt.decode(localStorage.getItem("jwt")));
    let { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
    client
      .mutate({
        mutation: createRule,
        variables: {
          input: {
            name: Math.random()
              .toString(36)
              .substring(7),
            description: "",
            type: "SIMPLE",
            organizationId: org_id,
            status: "ACTIVE",
            ruleConfiguration: JSON.stringify(query)
          }
        }
      })
      .then(({ data }) => {
        console.log("rule", data);
        client
          .mutate({
            mutation: createSegment,
            variables: {
              name: this.state.value,
              segmentType: "CUSTOM",
              organization_id: org_id,
              application_id: this.props.allApplications.organization
                .applications[0].id, // remove Hardcoding get it from context
              rule_id: data.createRule.id,
              status: "ACTIVE"
            }
          })
          .then(({ data }) => {
            const { history } = this.props;
            history.push({
              pathname: SEGMENT_LIST
            });
          })
          .catch(error => {
            this.displayError(
              "newSegmentError",
              "Segment name already present"
            );
          });
      })
      .catch(error => {
        console.log("error1 : ", error);
        this.displayError("newSegmentError", "Not a valid segment");
      });
  };

  UNSAFE_componentWillMount = () => {
    const { location, match } = this.props;
    if (location && location.state) {
      if (location.state.segmentSelected) {
        let str = JSON.stringify(
          location.state.segmentSelected.rule.ruleConfiguration
        );
        let mapObj: any = {
          attributeName: "field",
          attributeValue: "value",
          expressionType: "operator"
        };
        str = str.replace(
          /attributeName|attributeValue|expressionType/gi,
          function(matched: any) {
            return mapObj[matched];
          }
        );
        this.setState({ query: JSON.parse(str) });
        if (location.state.segmentSelected.name !== "") {
          if (location.state.segmentSelected.name.includes("copy")) {
            const segmentNew = location.state.segmentSelected.name.split(
              "-",
              2
            );
            console.log(Number(segmentNew[1]) + 1);
            const segmentNameCopy =
              segmentNew[0] + " " + (Number(segmentNew[1]) + 1);
            this.setState({ value: segmentNameCopy, isDuplicateSegment: true });
          } else {
            this.setState({
              value: location.state.segmentSelected.name + " " + "copy-1",
              isDuplicateSegment: true
            });
          }
        }
      }
    }
  };

  render() {
    console.log(this.props);
    const {
      value,
      newSegmentError,
      query,
      isDuplicateSegment,
      segmentErrorMessage
    } = this.state;
    const { loading, error, ruleAttributes } = this.props.attributes;
    const antIcon = <Icon type="loading" style={{ fontSize: 100 }} spin />;
    if (loading) {
      return (
        <div style={{ minHeight: "100vh" }}>
          {" "}
          <br /> <br /> <br /> <br />
          <div className="divCenter">
            <Spin size="large" indicator={antIcon} />
          </div>{" "}
          <br /> <br /> <br />
        </div>
      );
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    let attributeData =
      ruleAttributes.length > 0 &&
      ruleAttributes.map((el: any) => ({
        name: el.attributeName,
        key: el.id,
        label: el.attributeName
      }));
    return (
      <ErrorBoundary>
        <div style={{ minHeight: "100vh" }}>
          <div style={{ margin: "1 32px" }}>
            <CampaignHeader
              children={
                <Col span={12}>
                  <h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">
                    {isDuplicateSegment ? "Duplicate segment" : "New Segment"}
                  </h3>
                </Col>
              }
            />
          </div>
          <div style={{ margin: "32px" }}>
            <p className="gx-text-grey gx-mb-1">Segment Name</p>
            <Input
              defaultValue={isDuplicateSegment ? value : "Enter segment name"}
              style={{ width: "50%", marginBottom: "40px" }}
              value={value}
              onChange={this.onChange}
            />
            <WalkinQueryBuilder
              fields={attributeData}
              onQueryChange={this.logQuery}
              query={query}
            />
          </div>
          {newSegmentError && (
            <Alert message={segmentErrorMessage} type="error" />
          )}
          <div className="segmentFooterButton">
            <Button
              type="primary"
              className="campaignFooterStyle"
              onClick={this.onNewSegment}
            >
              Create segment
            </Button>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withRouter(
  compose(
    graphql(attributes, {
      name: "attributes",
      options: props => {
        const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
        return {
          variables: {
            input: {
              organizationId: org_id,
              status: DEFAULT_ACTIVE_STATUS
            }
          },
          fetchPolicy: "cache-and-network"
        };
      }
    }),
    graphql(GET_ALL_APPS_OF_ORGANIZATION, {
      name: "allApplications",
      options: props => {
        const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
        return {
          variables: {
            id: org_id
          },
          fetchPolicy: "cache-and-network"
        };
      }
    })
  )(withApollo(NewSegment))
);
