import * as React from 'react';

function NewsItem({ data }: { data: any; key: any; index: any }) {
  const { image, description } = data;
  return (
    <div className="gx-mb-4">
      <div className="gx-mr-3" style={{ height: 150, width: 200 }}>
        <img className="gx-img-fluid" src={image} alt="..." />
      </div>
      <p className="gx-mt-0 gx-text-sm">{description}</p>
    </div>
  );
}

export default NewsItem;
