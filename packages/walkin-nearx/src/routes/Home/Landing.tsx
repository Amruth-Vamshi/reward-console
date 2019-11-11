import * as React from "react";
import { Col, Row, Card, Input, Button } from "antd";
import { Link } from "react-router-dom";
import HomeMap from "../../components/HomeMap"
import Auxiliary from "../../util/Auxiliary";
import '../../styles/home.css'
import Cylinder3DChart from './Cylinder3DChart';
import { getNewPlaces } from '../Places/data'

interface iProps {

}

interface iState {
  places?: Array<any>,
  center?: any,
  noOfPlaces?: number,
  errors?: any,
  markerPlace?: number,
  getLoc?: boolean
}
const demoData = getNewPlaces

const Search = Input.Search;
export default class Landing extends React.Component<iProps, iState> {
  constructor(props) {
    super(props)
    this.state = {
      places: [{
        radius1: 0,
        placeName: 'Place',
        radius2: 0,
        storeId: '',
        radius3: 0,
        noOfRadius: 1,
        radius: [0],
        center: {
          lat: null,
          lng: null,
        },
        errors: {}
      }],

      center: {
        lat: null,
        lng: null,
      },

      noOfPlaces: 1,
      errors: {},
      markerPlace: 1,
      getLoc: false
    }
  }
  render() {
    // console.log("Inside NearX Dashboard ["+JSON.stringify(this.props.match)+"]")
    var data = { hotspots: 144 }
    return (
      <Auxiliary>
        <Row className='headerRow1' >
          <div style={{ width: "100%" }}>
            <div className='divCenterVertical'><span style={{ fontSize: 18 }}>DASHBOARD</span></div>
            <div style={{ float: "right", flexFlow: "right" }}>
              <Link to="/nearx/places/createplace"><Button style={{ margin: 0 }} className='buttonPrimary'>Create Place</Button></Link>

            </div>
          </div>
        </Row>

        <div>
          <div className='homeMap'><HomeMap mapData={this.state} /> </div>
          <div className='homeSearch'>
            {/* <Row><Col span={6}> */}
            <Search required placeholder="Search Places From Google"
              // value={formData.search} name="search" 
              size="large"
            // onSearch={this.props.handleSubmit}
            // onPressEnter={this.props.handleSubmit}
            // onChange={c => this.props.handleOnChange(c)} 
            />
            {/* <span style={{ color: 'Red' }}>{formData.errors.search}</span> */}
            {/* </Col>
              </Row> */}
          </div>
        </div>
        <Row className='homeAnalytics'>
          <Col span={15}>
            <div className="gx-card">
              <div className="gx-card-body">
                <Row style={{ minHeight: 100 }} className='homeAnalytics1'>
                  <Col span={6}>
                    <div className='rightVr' />
                    <div className='cenTitle' >Total Places</div>
                    <div className="bigNum">{data.hotspots < 10 ? `0${data.hotspots}` : data.hotspots}</div>

                  </Col>
                  <Col span={6}>
                    <div className='rightVr' />
                    <div className='cenTitle' >Total Hotspots</div>
                    <div className="bigNum">{data.hotspots < 10 ? `0${data.hotspots}` : 435}</div>

                  </Col>
                  <Col span={6}>
                    <div className='rightVr' />
                    <div className='cenTitle' >Total Entries</div>
                    <div className="bigNum">{data.hotspots < 10 ? `0${data.hotspots}` : 5800}</div>
                  </Col>
                  <Col span={6}>
                    <div className='cenTitle' >Total Exit</div>
                    <div className="bigNum">{data.hotspots < 10 ? `0${data.hotspots}` : 2040}</div>
                  </Col>
                </Row>
                <br />
                <div className='homeNewPlaces'>
                  New Places
                <Row>
                    <Col span={6}>{demoData[0].name}</Col>
                    <Col span={4}>Hotspot:{demoData[0].hotspots}</Col>
                    <Col span={4}>Entry: {demoData[0].entry}</Col>
                    <Col span={3}>Exit: {demoData[0].exit}</Col>
                    <Col span={5}>Avg Dwell time: {demoData[0].avgTime}min</Col>
                  </Row>
                  <Row>
                    <Col span={6}>{demoData[0].name}</Col>
                    <Col span={4}>Hotspot:{demoData[0].hotspots}</Col>
                    <Col span={4}>Entry: {demoData[0].entry}</Col>
                    <Col span={3}>Exit: {demoData[0].exit}</Col>
                    <Col span={5}>Avg Dwell time: {demoData[0].avgTime}min</Col>
                  </Row>
                  <Row>
                    <Col span={6}>{demoData[0].name}</Col>
                    <Col span={4}>Hotspot:{demoData[0].hotspots}</Col>
                    <Col span={4}>Entry: {demoData[0].entry}</Col>
                    <Col span={3}>Exit: {demoData[0].exit}</Col>
                    <Col span={5}>Avg Dwell time: {demoData[0].avgTime}min</Col>
                  </Row>
                  {/* <Row> */}
                  <div style={{ margin: '20px 20px 30px 0px', width: '100%' }}>
                    <p style={{ float: "right", color: "#34bfe2" }}> <a to='#'> View All </a></p>
                  </div>
                  {/* </Row> */}
                </div>
              </div>
            </div>
          </Col>
          <Col span={9}>
            <Card className="gx-card" title="Popular  Places">
              <Cylinder3DChart />
            </Card>
          </Col>
        </Row>




      </Auxiliary>
    )
  }
}