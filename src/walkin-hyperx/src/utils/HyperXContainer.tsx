import * as React from "react";
import { Spin } from "antd";

export interface IAppProps {
  children?: any;
  margin?: string;
  spin?;
  headerHeightInPX?: number;
  heightInVH?: number;
  className?: string;
}

export default class HyperXContainer extends React.Component<IAppProps> {
  public render() {
    let {
      children,
      margin,
      headerHeightInPX,
      heightInVH,
      className,
      spin
    } = this.props;
    return (
      <div
        style={{
          height: `calc(100vh - ${headerHeightInPX}px)`,
          overflowY: "scroll",
          overflowX: "hidden"
        }}
        className={`HyperXContainer ${className}`}
      >
        <div
          style={{ margin: `${margin}`, height: `${heightInVH}vh` }}
          className="HyperXContainerBody"
        >
          {spin ? (
            <div>
              {" "}
              <br /> <br /> <br /> <br />
              <div className="divCenter">
                <Spin size="large" />
              </div>{" "}
              <br /> <br /> <br />
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    );
  }
}
