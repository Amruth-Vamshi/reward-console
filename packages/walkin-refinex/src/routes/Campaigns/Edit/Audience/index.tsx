import * as React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Col, Row, Typography, Upload, Divider, Button } from "antd";
import { withApollo, graphql, compose } from "react-apollo";
import { allSegments, attributes } from "../../../../containers/Query";
import { AddAndDeleteSelectDynamically } from "@walkinsole/shared";
import { WalkinQueryBuilder } from "@walkinsole/shared";
const { Title } = Typography;

interface AudienceProps {
  allAttributes?: any
  segmentList?: any
  logQuery?: any
  onValuesSelected?: any
}


interface AudienceState {
  formValues: any,
  current: any,
  rows: any,
  values: any
}

class Audience extends React.Component<AudienceProps, AudienceState> {
  constructor(props) {
    super(props);
    this.state = {
      formValues: "",
      current: "",
      rows: "",
      values: ""
    };
  }
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { formValues, current, rows, values } = this.state;

    let attributeData = this.props.allAttributes.ruleAttributes.map(el => ({
      name: el.name,
      label: el.id
    }));
    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text"
      }
    };
    return (
      <Row
        style={{
          margin: "1rem"
        }}
      >
        <div className="marginStyle">
          <div className="marginStyle">
            {" "}
            <h3 className="gx-text-grey">Audience</h3>
            <div>
              <p
                style={{ paddingTop: "20px" }}
                className="gx-text-grey gx-mb-1"
              >
                Segments
              </p>
              <AddAndDeleteSelectDynamically
                onValuesSelected={this.props.onValuesSelected}
                segmentSelectionData={this.props.segmentList.segments}
              />
              <span>
                or
                <Upload {...props}>
                  <Button style={{ marginBottom: "0px" }} type="link">
                    Upload CSV
                  </Button>
                </Upload>
              </span>
            </div>
            <div>
              <Divider orientation="left">
                <p className="gx-text-grey gx-mb-1">Filter</p>
              </Divider>
              <p className="gx-text-grey gx-mb-1">Campaign applies to :</p>
              <WalkinQueryBuilder
                fields={attributeData}
                onQueryChange={this.props.logQuery}
              />
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default withApollo(
  compose(
    graphql(allSegments, {
      name: "segmentList"
    }),
    graphql(attributes, {
      name: "allAttributes"
    })
  )(Audience)
);
