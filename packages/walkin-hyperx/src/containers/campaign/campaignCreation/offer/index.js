import React, { Component, Fragment } from 'react';

const Offer = ({ subTitle }) => {
	return (
		<div style={{ margin: '32px' }}>
			<h3 className="gx-text-grey gx-mb-1">{subTitle}</h3>
		</div>
	);
};

export default Offer;
