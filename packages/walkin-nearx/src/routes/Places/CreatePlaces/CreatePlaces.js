import React, { Component } from "react";
import {
  Row,
  Col,
  Upload,
  Card,
  Modal,
  Tabs,
  Icon,
  Input,
  Form,
  message,
  Button
} from "antd";
import { Widget } from "@walkinsole/walkin-components";
import GooglePlaces from "../../../components/Places/CreatePlaces/GooglePlaces";
import MalnualCreate from "../../../components/Places/CreatePlaces/CreatePlaceManually";

const TabPane = Tabs.TabPane;

export default class CreatePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "1",
      visible: false,
      visible1: false,
      fileList: [],
      googleAPIkey: "",
      loading: false,
      errors: {}
    };
  }

  componentWillMount() {
    this.setState({ tab: this.props.tab });
  }

  // componentWillMount(){
  //   let googleAPIkey = ''
  //   client.query({
  //       query: GET_CONFIGURATION,
  //       variables: { }
  //     }).then( res => {
  //       console.log("Results",res.data.getConfiguration)
  //       res.data.getConfiguration.map(k=>{
  //           if(k.name === GOOGLE_API_KEY)  googleAPIkey = k.key
  //       })
  //       if(googleAPIkey !== '') this.setState({visible1:true})
  //       else this.setState({ googleAPIkey })
  //     }).catch(err=>console.log("Failed to get Places Details"+err))
  // }

  onTabChange = e => {
    this.setState({ tab: e });
  };

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-1);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
  };

  showModal = () => this.setState({ visible: true });

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  // googleKeyChange=(e)=>{
  //     this.setState({googleAPIkey:e.ta})
  // }

  // googleKeySubmit=()=>{

  // }

  render() {
    const props = {
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange: this.handleChange,
      multiple: false
    };
    console.log(this.props);
    return (
      <div className="createPlace">
        <Widget
          title={<p style={{ fontSize: 23 }}>Create Places</p>}
          styleName="gx-card-tabs headerCard"
        // extra={<i className="icon icon-search-new gx-pointer gx-fs-xxl gx-text-primary"/>}>
        // extra={
        //   <Button onClick={this.showModal} type="primary">
        //     Upload CSV
        //   </Button>
        // }
        >
          <Tabs
            defaultActiveKey={this.props.tab}
            activeKey={this.state.tab}
            onChange={c => this.onTabChange(c)}
          >
            <TabPane tab="Search & Create" key="1">
              <GooglePlaces history={this.props.history} />
            </TabPane>
            <TabPane tab="Create Custom" key="2">
              <MalnualCreate history={this.props.history} />
            </TabPane>
          </Tabs>
        </Widget>

        <Modal
          width="500px"
          key="model"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Upload {...props} fileList={this.state.fileList}>
            <Button
              style={{ width: "400px" }}
              className="buttonPrimary"
              type="default"
            >
              <Icon type="upload" /> Upload
            </Button>
          </Upload>
        </Modal>

        {/* <Modal
              width='500px'
              key='model'
              visible={this.state.visible1}
              onOk={this.googleKeySubmit}
              onCancel={this.handleCancel}
              title='Requires Google API key'
              footer={[
                <Button key="submit" type="primary" loading={this.state.loading} onClick={this.googleKeyChange}>
                  Submit
                </Button>
              ]}
                >
                <p>Submit your Google API key to search places</p>
              <div>
                    <Input placeholder="Google API key" value={this.state.googleAPIkey} size='large' name="googleAPIkey" onChange={c => this.handleOnChange(c)} />
                    <span style={{ color: 'Red' }}>{this.state.errors.googleAPIkey}</span>
              </div>
              <div style={{marginRight:20,marginTop:15}}>
                <div style={{float:'right'}}>
                    <div style={{ marginBottom:3, fontSize:15}} className='gx-text-primary gx-pointer'>
                        <a target='_blank' href='https://developers.google.com/maps/documentation/javascript/get-api-key' >Get Google API key</a>
                    </div>
                </div>
              </div>  
                <br/>

        </Modal> */}
      </div>
    );
  }
}
