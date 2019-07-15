import React, { Fragment } from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import './style.css';

const OrgCardDetails = ({ orgDetails }) => {
	return (
		<Card className="gx-product-item " style={{ marginTop: '10px' }}>
			<Row>
				<Col span={2}>
					<Avatar size={64} shape="square" icon="user" />
				</Col>
				<Col span={22}>
					<div>
						<Row className="orgCardTitleStyle">
							<Col span={4}>Org ID: </Col>
							<Col span={12}>{orgDetails.org.id}</Col>
						</Row>
						<Row className="orgCardTitleStyle">
							<Col span={4}>Name: </Col>
							<Col span={12}>{orgDetails.org.name}</Col>
						</Row>
						<Row className="orgCardTitleStyle">
							<Col span={4}>Address: </Col>
							<Col span={12}>
								{orgDetails.org.addressLine1
									? orgDetails.org.addressLine1
									: '' + ', ' + orgDetails.org.addressLine2
									? orgDetails.org.addressLine2
									: '' + ', ' + orgDetails.org.city
									? orgDetails.org.city
									: '' + ', ' + orgDetails.org.state
									? orgDetails.org.state
									: '' + ', ' + orgDetails.org.country
									? orgDetails.org.country
									: '' + ', ' + orgDetails.org.pinCode
									? orgDetails.org.pinCode
									: ''}
							</Col>
						</Row>
						<Row className="orgCardTitleStyle">
							<Col span={4}>Phone Number: </Col>
							<Col span={12}>{orgDetails.org.phoneNumber}</Col>
						</Row>
						<Row className="orgCardTitleStyle">
							<Col span={4}>Org code: </Col>
							<Col span={12}>{orgDetails.org.code}</Col>
						</Row>
						<Row className="orgCardTitleStyle">
							<Col span={4}>User Name: </Col>
							<Col span={12}>{orgDetails.userName}</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</Card>
	);
};
export default OrgCardDetails;
