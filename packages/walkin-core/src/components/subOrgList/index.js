import React, { Fragment } from 'react';
import { Button, List, Row, Avatar, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

const SubOrgDetails = ({ subOrgDetails, onNewSubOrg, onSubOrgCardClick }) => {
	return (
		<Fragment>
			<div className="subOrgButtonContainer">
				<Button onClick={onNewSubOrg} type="primary">
					New Sub organization
				</Button>
			</div>
			<List
				grid={{ gutter: 16, column: 2 }}
				dataSource={subOrgDetails}
				renderItem={val => (
					<List.Item
						onClick={e => {
							e.preventDefault();
							e.stopPropagation();
							onSubOrgCardClick(val.id);
						}}
					>
						<Card className="gx-product-item ">
							<Row gutter={8}>
								<Col span={4}>
									<Avatar size={64} shape="square" icon="user" />
								</Col>
								<Col span={20}>
									<p className="gx-mb-0 gx-text-grey">{val.name}</p>
									<p className="gx-text-grey gx-fs-sm gx-mb-0">{val.addressLine1}</p>
								</Col>
							</Row>
						</Card>
					</List.Item>
				)}
			/>
		</Fragment>
	);
};
export default SubOrgDetails;
