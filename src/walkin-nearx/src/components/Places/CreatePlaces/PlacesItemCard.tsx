import * as React from 'react'
import { Avatar, Checkbox } from "antd";

interface iProps {
  place?: any,
  onPlaceSelect?: (val) => any
}

export default class PlacesItemCard extends React.Component<iProps, {}> {
  render() {
    const { place } = this.props;
    const { placeName, sroreId, address, image, selected } = place
    return (
      <div>
        <div className="gx-contact-item">
          <div className="gx-module-list-icon">

            <div className="gx-ml-2 gx-d-none gx-d-sm-flex">
              {(image === null || image === '') ?
                <Avatar size="large"> {placeName.charAt(0).toUpperCase()}  </Avatar> :
                <Avatar size="large" alt={placeName} src={image} />
              }
            </div>
          </div>

          <div style={{ maxWidth: 'calc(100% - 70px)' }} className="gx-module-list-info gx-contact-list-info">
            <div className="gx-module-contact-content">

              <p className="gx-mb-1">  <span className="gx-contact-name"> {placeName}</span>  </p>
              <div className="gx-text-muted">
                <span className="gx-email gx-d-inline-block gx-mr-2">  {address} </span>
              </div>
            </div>

            <div className="gx-module-contact-right">

              <Checkbox className="gx-icon-btn"
                checked={selected}
                value="checkedF"
                onClick={() => { this.props.onPlaceSelect(sroreId) }}
              />

            </div>
          </div>
        </div>
      </div>
    )
  }
}
