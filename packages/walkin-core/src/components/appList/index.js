import React, { Fragment } from 'react';
import { Col, Row, Card } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';


const AppList = ({ apps }) => {

	function random_bg_color() {
		return "rgb(" + Math.floor(Math.random() * 256) +
			", " + Math.floor(Math.random() * 256) +
			", " + Math.floor(Math.random() * 256) + ")";
	}

	return (
		<div className="gutter-example">
			<Row gutter={16}>
				{apps &&
					apps.map((app, index) => (
						<Fragment key={index}>
							<Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={6}>
								{app.isProductAccessible == true ? (
									<Link to={app.route}>
										<Card
											cover={<i style={{ color: `${random_bg_color()}` }} className={`${app.icon} gx-fs-icon-lg appIconStyle `} />}
											className="gx-product-item gx-product-vertical"
										>
											<div className="h4 gx-text-capitalize gx-mb-0">{app.title}</div>
											<p className="gx-text-grey gx-fs-sm gx-mb-3 gx-mb-lg-4">
												{app.description}
											</p>
										</Card>
									</Link>
								) : (
										<Card style={{ backgroundColor: '#dedede' }}
											cover={<i style={{ color: '#b9b5b5' }} className={`${app.icon} gx-fs-icon-lg appIconStyle `} />}
											className="gx-product-item gx-product-vertical"
										>
											<div style={{ color: '#b9b5b5' }} className="h4 gx-text-capitalize gx-mb-0">
												{app.title}
											</div>
											<p className="gx-text-grey gx-fs-sm gx-mb-3 gx-mb-lg-4">{app.description}</p>
										</Card>
									)}
							</Col>
						</Fragment>
					))}
			</Row>
		</div>
	);
};
export default AppList;
