import * as React from "react";
import { Col, Row, Icon } from "antd";
import { Auxiliary } from "walkin-components";
import { withApollo, ApolloProviderProps } from "react-apollo";
import TagTree from "../TagTree/index"

interface LandingProps extends ApolloProviderProps<any> {

}

interface TColumnProps {
}

interface LandingState {

}

class IssueTagHome extends React.Component<LandingProps, Partial<LandingState>> {
    constructor(props: LandingProps) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <Auxiliary>
                <div
                    style={{ minHeight: "100vh", backgroundColor: "#F2F2F2" }}
                    className="gx-main-content-wrapper">
                    <Row>
                        <Col sm={24} md={18} xl={20}>
                            <span className='gx-d-none gx-d-sm-flex'
                                style={{ width: '100%', fontSize: 24, color: '#5B5B5B' }}>
                                Issue Tags
                            </span>
                        </Col>
                        {/* <Col sm={0} md={6} xl={4} style={{ textAlign: "end" }}>
                        </Col> */}
                    </Row>
                    <Row style={{ marginLeft: "1px", height: "500px", marginRight: "1px", paddingBottom: "20px" }}>
                        <TagTree />
                    </Row>
                </div>
            </Auxiliary>
        );
    }
}

export default withApollo(IssueTagHome)