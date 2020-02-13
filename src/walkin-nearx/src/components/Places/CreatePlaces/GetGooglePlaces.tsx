import * as React from 'react';
import { Col, Row, Input } from 'antd';
import PlacesItemCard from './PlacesItemCard';

interface iProps {
  formData?: any;
  handleSubmit?: any;
  handleOnChange?: (val) => any;
  moreOpt?: any;
  onPlaceSelect?: any;
  selAll?: any;
}

const Search = Input.Search;

export default class GetGooglePlaces extends React.Component<iProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    var { formData } = this.props;

    // console.log(formData)
    return (
      <div className="gx-card" style={{ marginBottom: 70 }}>
        <div className="gx-card-body">
          {/* <p style={{fontSize:18, color:"#969696"}}>Authentication Keys</p> */}
          {/* <Form.Item className="GoogleSearchBar" {...searchbar} style={{marginBottom:5}} > */}

          <Row>
            <Col span={20}>
              <Search
                required
                placeholder="Search Places From Google"
                value={formData.search}
                size="large"
                // enterButton
                // suffix={<Button style={{lineHeight:0, margin: 'auto', padding: 0, height: 'auto', border: '0px'}}>
                //  <i className="icon icon-search-new gx-pointer gx-text-primary gx-fs-xxl"/>
                //                 {/* <Icon onClick={this.props.handleSubmit} type="search" style={{ color: 'blue' }} /> */}
                //         </Button>}
                onSearch={this.props.handleSubmit}
                onPressEnter={this.props.handleSubmit}
                name="search"
                onChange={c => this.props.handleOnChange(c)}
              />
              <span style={{ color: 'Red' }}>{formData.errors.search}</span>
            </Col>
            <Col span={4}>
              <div className="divCenter">
                {' '}
                <p
                  onClick={this.props.moreOpt}
                  className="gx-text-primary gx-pointer"
                >
                  {formData.moreOptions ? 'Less Options' : 'More Options'}
                </p>
              </div>
            </Col>
          </Row>

          {formData.places1.length ? (
            <div>
              {/* <div className="gx-contact-item">


              <div style={{ maxWidth: 'calc(100% - 70px)' }} className="gx-module-list-info gx-contact-list-info">


                <div className="gx-module-contact-right">

                  <Checkbox className="gx-icon-btn"
                    // checked={selected}
                    value="checkedF"
                    size='large'
                    onClick={() => { this.props.onPlaceSelect(sroreId) }}
                  />

                </div>
              </div>
            </div> */}

              <Row>
                {/* <Col span={18}></Col>
              <Col> Select ALL:{" "}</Col>
              <Col >


                <div className="gx-module-contact-right">
                  <Checkbox size='large'
                    value="checkedF" style={{ margin: "10px 20px" }}
                    onClick={() => { this.props.onPlaceSelect(sroreId) }}
                  />

                </div>

              </Col> */}
                <div style={{ width: '100%', margin: '10px 40px -15px' }}>
                  <p
                    onClick={this.props.selAll}
                    className="gx-text-primary gx-pointer"
                    style={{ float: 'right', fontSize: 16 }}
                  >
                    {' '}
                    {formData.selectAll ? 'Remove All' : 'Select All'}{' '}
                  </p>
                </div>
              </Row>
              {formData.places1.map((place, index) => (
                <PlacesItemCard
                  key={index}
                  onPlaceSelect={this.props.onPlaceSelect}
                  place={place}
                />
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
