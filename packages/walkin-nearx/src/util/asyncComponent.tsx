import * as React from "react";
import Nprogress from "nprogress";
import ReactPlaceholder from "react-placeholder";
import "nprogress/nprogress.css";
import { } from 'antd'
import "react-placeholder/lib/reactPlaceholder.css";
import { CircularProgress } from "@walkinsole/walkin-components";

interface iProps {

}
interface iState {
  component?: any
}
export default function asyncComponent(importComponent) {
  class AsyncFunc extends React.Component<iProps, iState> {
    mounted: boolean;
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    UNSAFE_componentWillMount() {
      Nprogress.start();
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    async componentDidMount() {
      this.mounted = true;
      const { default: Component } = await importComponent();
      Nprogress.done();
      if (this.mounted) {
        this.setState({
          component: <Component {...this.props} />
        });
      }
    }

    render() {
      const Component = this.state.component || <CircularProgress />;
      return (
        <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
          {Component}
        </ReactPlaceholder>
      );
    }
  }

  return AsyncFunc;
}