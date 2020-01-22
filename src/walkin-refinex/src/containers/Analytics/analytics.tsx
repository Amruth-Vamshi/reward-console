import * as React from "react";
import {
  Col,
  Row,
  DatePicker,
  Button,
  Icon,
  Empty,
  Spin,
  Table,
  Card,
  Select,
  Radio
} from "antd";
import {
  IconWithTextCard,
  Widget,
  ChartCard,
  Auxiliary,
  WidgetHeader
} from "walkin-components";
import {
  graphql,
  compose,
  withApollo,
  ApolloProviderProps
} from "react-apollo";
import { GET_ANALYTICS } from "walkin-core/src/PlatformQueries";
import moment from "moment";
import * as jwt from "jsonwebtoken";
import Cylinder3DChart from "walkin-nearx/src/routes/Dashboard/Cylinder3DChart";
import PieChartWithAngle from "./Charts/PieChartWithPaddingAngle";
import PieChartActiveShape from "./Charts/CustomActiveShapePieChart";
import OverallReportWidget from "./Widgets/OverallReport";
import IndividualReport from "./Widgets/IndividualReport";
import ScheduleCommunication from "./Widgets/ScheduleComs";
const dateFormat = "YYYY/MM/DD";
const data = [
  {
    name: "How would you rate your experience at CCD today?",
    uv: 47,
    pv: 2400,
    fill: "#8884d8"
  },
  {
    name:
      "How likely are you to recommend CCD to your friends on a scale of 0-10",
    uv: 40,
    pv: 4567,
    fill: "#83a6ed"
  },
  {
    name:
      "Please help us identify the improvement areas with payment/billing/offers?",
    uv: 15,
    pv: 1398,
    fill: "#8dd1e1"
  },
  {
    name: "What did you like most about our service",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d"
  },
  {
    name: "What problem did you face with our service?",
    uv: 12,
    pv: 3908,
    fill: "#a4de6c"
  }
  // {
  //     name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
  // },
  // {
  //     name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658',
  // },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

interface analyticsProps extends ApolloProviderProps<any> {}

interface analyticsState {
  HOUR_OF_DAY_VS_EVENT_COUNT: number;
  DAY_OF_WEEK_VS_EVENT_COUNT: number;
  TOP_QUESTION: number;
  startDate: any;
  endDate: any;
  org_id: string;
  errors: any;
  spin: boolean;
}

class analytics extends React.Component<
  analyticsProps,
  Partial<analyticsState>
> {
  constructor(props: analyticsProps) {
    super(props);
    this.state = {
      HOUR_OF_DAY_VS_EVENT_COUNT: 0,
      DAY_OF_WEEK_VS_EVENT_COUNT: 0,
      TOP_QUESTION: 0,
      startDate: moment().subtract(30, "day"),
      endDate: moment(),
      org_id: "",
      errors: {},
      spin: false
    };
  }

  UNSAFE_componentWillMount() {
    console.log("This.state...", this.state);
    const { id, org_id }: any = jwt.decode(localStorage.getItem("jwt"));
    this.getMetrics(org_id, this.state.endDate);

    // if (org_id && id) {
    //     this.setState({ org_id })
    //     this.getMetrics(org_id, this.state.endDate)
    // } else console.log("Error getting JwtData");
  }

  disabledDate = (current: any) => {
    if (!current) return false;
    const date = moment();
    date.hour(0);
    date.minute(0);
    date.second(0);
    return current.valueOf() > date.valueOf();
  };

  disableEndDate = (current: any) => {
    if (!current) return false;
    const date = moment(this.state.startDate).add(1, "day");
    date.hour(0);
    date.minute(0);
    date.second(0);
    return current.valueOf() <= date.valueOf() || moment() < current;
  };

  handleChange2 = (value: any) => {
    let time = "5:30:00";
    let value1 = moment(value).format("YYYY-MM-DD");
    let d = value1 + " " + time;
    let newdate1 = new Date(d).toISOString();
    console.log("newd", newdate1);
    this.setState({ startDate: newdate1, endDate: "" });
    if (newdate1 !== "") this.state.errors.startDate = "";
  };
  handleChange3 = (value: any) => {
    let time = "5:30:00";
    let value1 = moment(value).format("YYYY-MM-DD");
    let d = value1 + " " + time;
    let newdate2 = new Date(d).toISOString();
    //console.log("newd",newdate2)
    this.setState({ endDate: newdate2 });
    this.getMetrics(this.state.org_id, newdate2);
    if (newdate2 !== "") this.state.errors.endDate = "";
  };

  getMetrics = (org_id: any, endDate: any) => {
    this.setState({ spin: true });
    this.props.client
      .query({
        query: GET_ANALYTICS,
        variables: {
          org_id: org_id,
          product: "REFINEX",
          dates: { from: this.state.startDate, to: endDate }
        },
        fetchPolicy: "no-cache"
      })
      .then(res => {
        console.log(">>>...", res);
        this.formatData(res);
        this.setState({ spin: false });
      })
      .catch(err => {
        this.setState({ spin: false });
        console.log("Failed to get User Details" + err);
      });
  };

  formatData = (data: any) => {
    let {
      HOUR_OF_DAY_VS_EVENT_COUNT,
      DAY_OF_WEEK_VS_EVENT_COUNT,
      TOP_QUESTION
    } = this.state;
    // if (!data) {
    //   data = AnyNear
    // }
    console.log("Service analytics data..", this.state);
    data.data.analytics.map((i: any) => {
      if (i.name === "HOUR_OF_DAY_VS_EVENT_COUNT")
        HOUR_OF_DAY_VS_EVENT_COUNT = i.response;
      else if (i.name === "DAY_OF_WEEK_VS_EVENT_COUNT")
        DAY_OF_WEEK_VS_EVENT_COUNT = i.response;
      else if (i.name === "TOP_QUESTION") TOP_QUESTION = i.response;
    });
    this.setState({
      HOUR_OF_DAY_VS_EVENT_COUNT,
      DAY_OF_WEEK_VS_EVENT_COUNT,
      TOP_QUESTION,
      spin: false
    });
  };

  handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  render() {
    console.log("Analytics..", this.state);
    const { Option } = Select;
    let hoursOfTheWeek: any = this.state.HOUR_OF_DAY_VS_EVENT_COUNT;
    let dayOfTheWeek: any = this.state.DAY_OF_WEEK_VS_EVENT_COUNT;
    let topQuestions: any = this.state.TOP_QUESTION;
    return (
      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh"
        }}
      >
        <Auxiliary>
          <div className="gx-main-content">
            <div
              style={{
                margin: "20px"
              }}
              className="ant-row-flex gx-justify-content-between gx-mb-1 gx-mb-sm-4 gx-dash-search"
            >
              <h2 className="h2 gx-mb-3 gx-mb-sm-1 gx-mr-2">Analytics</h2>

              <Button type="primary" size={"large"}>
                Download
                <Icon type="down" />
              </Button>
            </div>
            <div>
              <OverallReportWidget />
            </div>
            <div
              style={{
                marginTop: "20px"
              }}
            >
              <IndividualReport />
            </div>
            <div
              style={{
                marginTop: "20px"
              }}
            >
              <ScheduleCommunication />
            </div>
          </div>
        </Auxiliary>
      </div>
    );
  }
}

export default withApollo(analytics);

{
  /* <BarChart width={730} height={250} data={topQuestions}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#8884d8" />
                                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */
}
// </BarChart> */}
