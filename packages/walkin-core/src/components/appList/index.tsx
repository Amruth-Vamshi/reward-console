import * as React from "react";
import { Col, Row, Card, Button } from "antd";
import { Link } from "react-router-dom";

import "./style.css";

const AppList = ({ apps }: any) => {
  function random_bg_color() {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ")"
    );
  }

  return (
    <div className="gutter-example">
      <Row gutter={25}>
        {apps &&
          apps.map((app: any, index: string) => (
            <React.Fragment key={index}>
              <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={6}>
                {app.isProductAccessible == true ? (
                  <Link to={app.route}>
                    <Card
                      cover={
                        <i
                          // style={{ color: `${random_bg_color()}` }}

                          className={`${app.activeIcon} gx-fs-icon-lg appActiveIconStyle `}
                        >
                          <img src={app.activeIcon} />
                        </i>
                      }
                      className="gx-product-vertical coreAppsCard"
                    >
                      <div className="h1 gx-font-weight-semi-bold gx-text-capitalize gx-mb-10">
                        {app.title}
                      </div>
                      <p className="gx-text-grey gx-fs-lg gx-mb-2 gx-mb-lg-2">
                        {app.description}
                      </p>
                    </Card>
                  </Link>
                ) : (
                  <Card
                    style={{ backgroundColor: "#dedede" }}
                    cover={
                      <React.Fragment>
                        <Button style={{ marginBottom: 0 }} type="primary">
                          Purchase
                        </Button>
                        <i
                          style={{ color: "#b9b5b5" }}
                          className={`${app.inactiveIcon} gx-fs-icon-lg appInactiveIconStyle `}
                        >
                          <img
                            src={app.inactiveIcon}
                            style={{ clip: "rect(110px)" }}
                          />
                        </i>
                      </React.Fragment>
                    }
                    className="gx-product-vertical coreAppsCard"
                  >
                    <div
                      style={{ color: "#b9b5b5" }}
                      className="h1 gx-font-weight-semi-bold gx-text-capitalize gx-mb-10"
                    >
                      {app.title}
                    </div>
                    <p className="gx-text-grey gx-fs-lg gx-mb-2 gx-mb-lg-2">
                      {app.description}
                    </p>
                  </Card>
                )}
              </Col>
            </React.Fragment>
          ))}
      </Row>
    </div>
  );
};
export default AppList;
