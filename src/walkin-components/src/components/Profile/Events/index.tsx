import * as React from 'react';

import EventItem from './EventItem';
import { Widget } from '../../Widget';

const eventList = [];
const Events = () => {
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Events</span>
        <p className="gx-text-grey gx-fs-sm gx-mb-0">What Kiley is up-to</p>
      </div>
      <div className="gx-pt-md-3">
        {eventList.map((data, index) => (
          <EventItem key={index} data={data} />
        ))}
      </div>
    </Widget>
  );
};

export default Events;
