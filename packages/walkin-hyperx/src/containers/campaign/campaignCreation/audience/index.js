import React, { Component, Fragment } from 'react';
import WalkinQueryBuilder from '../../../../components/atoms/queryBuilder';
import { Divider, Button, Upload } from 'antd';
import './style.css';
import AddAndDeleteSelectDynamically from '../../../../components/atoms/addAndDeleteSelect';

const Audience = ({
	audienceTitle,
	segmentSubTitle,
	onValuesSelected,
	segmentSelectionData,
	uploadCsvText,
	uploadProps,
	segmentFilterText,
	segmentFilterSubText,
	attributeData,
	logQuery,
}) => {
	return (
		<div className="marginStyle">
			<div className="marginStyle">
				{' '}
				<h3 className="gx-text-grey">{audienceTitle}</h3>
				<div>
					<p style={{ paddingTop: '20px' }} className="gx-text-grey gx-mb-1">
						{segmentSubTitle}
					</p>
					<AddAndDeleteSelectDynamically
						onValuesSelected={onValuesSelected}
						segmentSelectionData={segmentSelectionData}
					/>
					<span>
						or
						<Upload uploadProps={uploadProps}>
							<Button style={{ marginBottom: '0px' }} type="link">
								{uploadCsvText}
							</Button>
						</Upload>
					</span>
				</div>
				<div style={{ marginTop: '50px' }}>
					<Divider orientation="left">
						<p className="gx-text-grey gx-mb-1">{segmentFilterText}</p>
					</Divider>
					<p className="gx-text-grey gx-mb-1">{segmentFilterSubText}</p>
					<WalkinQueryBuilder fields={attributeData} onQueryChange={logQuery} />
				</div>
			</div>
		</div>
	);
};

export default Audience;
