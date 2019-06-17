import React, { Component } from 'react'
import { Col, Row, Card } from "antd";
import Auxiliary from "../../util/Auxiliary";
// import marked from "marked";
// import axios from 'axios'
import readmePath from './docs_api.md'

const uri = 'https://gitlab.com/WalkIn/walkin_product_site_nearx/raw/eddcb1734e6347ab45edff83787197d2899670c6/docs/api.md'

export default class Developer extends Component {
  // state={
  //   markdown:''
  // }

  // componentDidMount() {
  //   // const readmePath = require("./docs_api.md");

  //   axios(readmePath)
  //     .then(response => {
  //       return response.text()
  //     })
  //     .then(text => {
  //       this.setState({
  //         markdown: marked(text)
  //       })
  //     })
  // }

  render() {
    return (
      <Auxiliary>
        <Row>
          <Col span={24}>
            <div className="gx-card">
              <div className="gx-card-body">
                <Card title="Documentation">
                  {/* <div>Development SDK documentation here</div> */}
                  {/* <article dangerouslySetInnerHTML={{__html: this.state.markdown}}></article> */}
                  {/* <p dangerouslySetInnerHTML={{ __html: readmePath }} /> */}
                  <a target="_blank" href="https://distracted-easley-4dc5d1.netlify.com/docs/overview"  >
                    Click Here for Documentation</a>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Auxiliary>
    )
  }
}
