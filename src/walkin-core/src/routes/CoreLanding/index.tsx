import * as React from 'react';
import AppList from '../../components/appList';
import * as _ from 'lodash';
import { Spin } from 'antd';
import { withApollo, ApolloProviderProps } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import * as jwt from 'jsonwebtoken';
import { Location } from 'history';
import { GET_PRODUCTS, USER_DATA } from 'walkin-core/src/PlatformQueries';

interface CoreLandingRouterProps {
  id: string;
}

interface CoreLandingPageProps
  extends ApolloProviderProps<any>,
    RouteComponentProps<CoreLandingRouterProps> {}

interface CoreLandingPageState {
  apps: any;
  spin: boolean;
}

const apps = [
  {
    id: 1,
    title: 'NearX',
    icon: 'icon icon-geo-location',
    activeIcon: require('shared/src/Product Icons/nearX.png'),
    inactiveIcon: require('shared/src/Product Icons/nearX_grey.png'),
    description: 'Proximity direction with beacons and geofencing',
    route: '/nearx',
    isProductAccessible: false,
  },
  {
    id: 2,
    title: 'HyperX',
    icon: 'icon icon-alert',
    activeIcon: require('shared/src/Product Icons/hyperx.png'),
    inactiveIcon: require('shared/src/Product Icons/hyperx_grey.png'),
    description: 'Personalization and 1:1 campaigns',
    route: '/hyperx',
    isProductAccessible: false,
  },
  {
    id: 3,
    title: 'RefineX',
    icon: 'icon icon-feedback',
    activeIcon: require('shared/src/Product Icons/refinex.png'),
    inactiveIcon: require('shared/src/Product Icons/refinex_grey.png'),
    description: 'Feedback engine for custoner experience management',
    route: '/refinex',
    isProductAccessible: false,
  },
  {
    id: 4,
    title: 'Uptyme',
    icon: 'icon icon-timepicker',
    activeIcon: require('shared/src/Product Icons/uptyme.png'),
    inactiveIcon: require('shared/src/Product Icons/uptyme_grey.png'),
    description: 'Field face management and work order automation',
    isProductAccessible: false,
  },
  {
    id: 5,
    title: 'OrderX',
    icon: 'icon icon-orders',
    activeIcon: require('shared/src/Product Icons/orderx.png'),
    inactiveIcon: require('shared/src/Product Icons/orderx_grey.png'),
    description: 'Ordering and payments. Omni channel order management',
    isProductAccessible: false,
  },
  {
    id: 6,
    title: 'RewardX',
    icon: 'icon icon-inbuilt-apps',
    activeIcon: require('shared/src/Product Icons/rewardx.png'),
    inactiveIcon: require('shared/src/Product Icons/rewardx_grey.png'),
    description: 'Loyalty relationship management',
    isProductAccessible: false,
  },
  {
    id: 7,
    title: 'You Id',
    icon: 'icon icon-profile',
    activeIcon: require('shared/src/Product Icons/youid.png'),
    inactiveIcon: require('shared/src/Product Icons/youid_grey.png'),
    description: 'Field face management and work order automation',
    isProductAccessible: false,
  },
  {
    id: 8,
    title: 'FrontX',
    icon: 'icon icon-data-display',
    activeIcon: require('shared/src/Product Icons/frontx.png'),
    inactiveIcon: require('shared/src/Product Icons/frontx_grey.png'),
    description: 'Channel management - modular app development platform',
    isProductAccessible: false,
  },
  {
    id: 9,
    title: 'ReportX',
    icon: 'icon icon-select',
    activeIcon: require('shared/src/Product Icons/footprint.png'),
    inactiveIcon: require('shared/src/Product Icons/footprint_grey.png'),
    description: 'Actionable insights, dashboards and reporting',
    isProductAccessible: false,
  },
];

class CoreLandingPage extends React.Component<
  CoreLandingPageProps,
  CoreLandingPageState
> {
  constructor(props: CoreLandingPageProps) {
    super(props);
    this.state = {
      apps: [],
      spin: false,
    };
  }

  UNSAFE_componentWillMount() {
    const jwtToken: any = localStorage.getItem('jwt');
    const { id, org_id }: any = jwt.decode(jwtToken);
    let formattedApps = apps;

    if (org_id) {
      this.setState({ spin: true });
      this.props.client
        .query({
          query: GET_PRODUCTS,
          variables: { id: org_id },
          //   fetchPolicy: "network-only"
        })
        .then(res => {
          console.log('>>>', res.data.organization.walkinProducts);
          _.forEach(res.data.organization.walkinProducts, service => {
            const appIndex = _.findIndex(formattedApps, app => {
              return app.title.toLowerCase() === service.name.toLowerCase();
            });

            formattedApps = [
              { ...formattedApps[appIndex], isProductAccessible: true },
              ...formattedApps.slice(0, appIndex),
              ...formattedApps.slice(appIndex + 1),
            ];
          });

          this.setState({ apps: formattedApps }, () =>
            this.getUserData(id, org_id)
          );
        })
        .catch(err => {
          this.setState({ spin: false });
          console.log('Failed to get Apps  ' + err);
        });
    } else {
      this.setState({ spin: false });
      console.log('Error getting JwtData');
    }
  }

  getUserData(id: any, org_id: any) {
    id
      ? this.props.client
          .query({
            query: USER_DATA,
            variables: { id, organizationId: org_id },
            // fetchPolicy: "cache-first"
          })
          .then(async res => {
            console.log('CoreLandingPage userData API', res.data.user);
            await localStorage.setItem('role', res.data.user.roles[0].name);
            this.setState({ spin: false });
            let activeRoute = '/rewardx/customer_search';
            switch (res.data.user.roles[0].name) {
              case 'Finance':
                activeRoute = '/rewardx/reports';
                break;
              case 'Customer_Care':
                activeRoute = '/rewardx/customer_search';
                break;
            }
            setTimeout(() => {
              this.props.history.push({
                pathname: activeRoute,
              });
              // push url
            }, 2000);
          })
          .catch(err => {
            console.log('Failed to get User Details' + err);
          })
      : console.log('Error getting JwtData');
  }

  render() {
    const { apps } = this.state;
    return (
      <div>
        {this.state.spin ? (
          <div>
            <br /> <br /> <br /> <br />
            <div className="divCenter">
              <Spin size="large" />
            </div>
            <br /> <br /> <br />
          </div>
        ) : (
          <AppList apps={apps} />
        )}
      </div>
    );
  }
}

export default withApollo(CoreLandingPage);
