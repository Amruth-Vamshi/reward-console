import React, { Component } from 'react';
import Nprogress from 'nprogress';
import ReactPlaceholder from 'react-placeholder';
import 'nprogress/nprogress.css';

import 'react-placeholder/lib/reactPlaceholder.css';
import { CircularProgress } from '../components/CircularProgress';

interface IProps {}
interface IState {
  mounted?: boolean;
  component?: any;
}

export function asyncComponent(importComponent) {
  class AsyncFunc extends Component<IProps, IState> {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    UNSAFE_componentWillMount() {
      Nprogress.start();
    }

    componentWillUnmount() {
      this.setState({
        mounted: false,
      });
    }

    async componentDidMount() {
      this.setState({
        mounted: true,
      });
      const { default: Component } = await importComponent();
      Nprogress.done();
      if (this.state.mounted) {
        this.setState({
          component: <Component {...this.props} />,
        });
      }
    }

    render() {
      const Component = this.state.component || (
        <CircularProgress className="gx-loader-400" />
      );
      return (
        <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
          {Component}
        </ReactPlaceholder>
      );
    }
  }

  return AsyncFunc;
}
