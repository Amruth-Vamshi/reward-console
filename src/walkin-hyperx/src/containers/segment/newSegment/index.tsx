import React, { Component, Fragment } from "react";
import { Input, Button, Alert, Col } from "antd";
import { withRouter } from "react-router-dom";
import {
  withApollo,
  graphql,
  compose,
  ApolloProviderProps
} from "react-apollo";
import {
  RULE_ATTRIBUTES,
  CREATE_RULE,
  createRule,
  createSegment,
  UPDATE_RULE,
  UPDATE_SEGMENT
} from "../../../query/audience";
import "./style.css";
import { SEGMENT_LIST } from "../../../constants/RouterConstants";
import { WalkinQueryBuilder, CampaignHeader, WHeader } from "shared";
import * as jwt from "jsonwebtoken";
import { GET_ALL_APPS_OF_ORGANIZATION } from "walkin-core/src/PlatformQueries";
import { RouteChildrenProps } from "react-router";
import { strToRule } from "../../../utils";
import HyperXContainer from "../../../utils/HyperXContainer";

interface IProps extends RouteChildrenProps, ApolloProviderProps<any> {
  allApplications: any;
  ruleAttributes: any;
  loading: any;
  error: any;
}

interface IState {
  value: any;
  query: any;
  newSegmentError: any;
  isDuplicateSegment: boolean;
  errors: any;
  loading: boolean;
  loading1: boolean;
  update: boolean;
}
class NewSegment extends Component<IProps, Partial<IState>> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: "",
      query: { id: "1", combinator: "and", rules: [] },
      newSegmentError: false,
      isDuplicateSegment: false,
      errors: {},
      loading: false
    };
  }
  logQuery = (query: any) => {
    this.state.errors.rule = "";
    this.setState({
      query: query,
      newSegmentError: false
    });
    console.log(query);
  };
  onChange = (e: any) => {
    this.state.errors.name = "";
    this.setState({ value: e.target.value });
  };

  displayError = (state: any) => {
    this.setState({ [state]: true }, () => {
      setTimeout(() => {
        this.setState({ [state]: false });
      }, 4000);
    });
  };

  onNewSegment = () => {
    let errors: any = {};
    const { value, query } = this.state;
    let { client } = this.props;
    let { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
    if (!this.state.value || this.state.value.trim() == "")
      errors.name = "* this field is mandatory";
    if (!this.state.query.rules || this.state.query.rules.length < 1)
      errors.rule = "* this field is mandatory";
    else if (
      !this.state.query.rules[0] ||
      this.state.query.rules[0].attributeValue == ""
    )
      errors.rule = "* enter rule value";

    if (Object.keys(errors).length !== 0) {
      this.setState({ errors });
      return;
    }
    console.log(this.props.allApplications.organization.applications[0]);
    this.setState({ loading1: true });
    if (this.state.update) {
      console.log("update segment/rule...");
      let id = this.props.location.state.segmentSelected.rule.id;
      let input = {
        ruleConfiguration: query
      };
      console.log("input..", input);
      console.log("input id..", id);

      client
        .mutate({
          mutation: UPDATE_RULE,
          variables: {
            id: id,
            input: input
          }
        })
        .then(data => {
          console.log("Updating rule..", data);
          console.log("name..", this.state.value);
          let input = {
            id: this.props.location.state.segmentSelected.id,
            name: this.state.value
          };
          client
            .mutate({
              mutation: UPDATE_SEGMENT,
              variables: {
                input: input
              }
            })
            .then(data => {
              console.log("Updating segment..", data);
              const { history } = this.props;
              this.setState({ loading1: false });
              history.push({ pathname: SEGMENT_LIST });
            })
            .catch(err => {
              this.setState({ loading1: false });
              console.log("Error while segment updating..", err);
            });
        })
        .catch(err => {
          this.setState({ loading1: false });
          console.log("Error whilw updating..", err);
        });
    } else {
      console.log(">>>", this.state.query);
      client
        .mutate({
          mutation: createRule,
          variables: {
            name: Math.random()
              .toString(36)
              .substring(7),
            description: "",
            type: "SIMPLE",
            organizationId: org_id,
            status: "ACTIVE",
            ruleConfiguration: query
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
              this.setState({ loading1: false });

              history.push({
                pathname: SEGMENT_LIST
              });
            })
            .catch(error => {
              this.displayError("newSegmentError");
              this.setState({ loading1: false });
            });
        })
        .catch(error => {
          console.log("error", error);
          this.displayError("newSegmentError");
          this.setState({ loading1: false });
        });
    }
  };

  UNSAFE_componentWillMount = () => {
    const { location, match } = this.props;
    if (location && location.state) {
      console.log("this...", location.state);
      if (location.state.update) this.setState({ update: true });
      if (location.state.segmentSelected) {
        let str = location.state.segmentSelected.rule.ruleConfiguration;
        this.setState({ query: strToRule(str) });
        if (!location.state.update) {
          this.setState({
            value: location.state.segmentSelected.name + " " + "copy",
            isDuplicateSegment: true
          });
        } else {
          this.setState({
            value: location.state.segmentSelected.name,
            isDuplicateSegment: true
          });
        }
      }
    }
  };

  render() {
    const {
      loading1,
      value,
      newSegmentError,
      query,
      isDuplicateSegment,
      update
    } = this.state;
    const { loading, error, ruleAttributes } = this.props;
    if (loading) {
      return <p>Please wait...</p>;
    }
    // if (error) {
    // 	return <p>{error}</p>;
    // }
    let attributeData = [];
    if (ruleAttributes)
      attributeData =
        ruleAttributes &&
        ruleAttributes.length > 0 &&
        ruleAttributes.map((el: any) => ({
          name: el.attributeName,
          key: el.id,
          label: el.attributeName
        }));
    else this.state.errors.rule = "you dont have any rule attributes";

    return (
      <Fragment>
        <WHeader
          title={
            update
              ? "Update segment"
              : isDuplicateSegment
              ? "Duplicate segment"
              : "Create Segment"
          }
        />

        <HyperXContainer spin={loading} margin="32px" headerHeightInPX={200}>
          <div style={{ width: "50%", marginBottom: "40px" }}>
            <div style={{ marginBottom: "10px" }}>
              <p className="gx-mb-1">Segment Name</p>
              <Input
                defaultValue={isDuplicateSegment ? value : "Enter segment name"}
                value={value}
                placeholder="Enter Segment Name"
                onChange={this.onChange}
              />
            </div>
            <span style={{ color: "Red" }}> {this.state.errors.name} </span>
          </div>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            Segment selection criteria
          </div>
          <WalkinQueryBuilder
            fields={attributeData}
            onQueryChange={this.logQuery}
            query={query}
          />
          <p style={{ color: "Red", marginTop: 10 }}>
            {" "}
            {this.state.errors.rule}{" "}
          </p>

          {newSegmentError && (
            <Alert
              style={{ margin: "0px 35px" }}
              message="Not a valid Segment"
              type="error"
            />
          )}
        </HyperXContainer>

        <div className="segmentFooterButton">
          <Button
            type="primary"
            loading={loading1}
            className="campaignFooterStyle"
            onClick={this.onNewSegment}
          >
            {update ? "Update Segment" : "Create Segment"}
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(
  compose(
    graphql(RULE_ATTRIBUTES, {
      options: props => {
        let { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
        return {
          variables: {
            input: {
              entityName: "Customer",
              status: "ACTIVE",
              organizationId: org_id
            }
          }
        };
      },
      props: ({ data: { loading, error, ruleAttributes } }: any) => ({
        loading,
        ruleAttributes,
        error
      })
    }),
    graphql(GET_ALL_APPS_OF_ORGANIZATION, {
      name: "allApplications",
      options: props => {
        let { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
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
