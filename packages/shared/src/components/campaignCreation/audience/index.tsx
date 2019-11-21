import *  as React from 'react';
import { Divider, Button, Upload } from 'antd';
import './style.css';
import { AddAndDeleteSelectDynamically, WalkinQueryBuilder } from '@walkinsole/shared';
import { UploadProps } from 'antd/lib/upload';

interface iProps {
	audienceTitle?: string,
	segmentSubTitle?: string,
	onValuesSelected?: any,
	segmentSelectionData?: any,
	uploadCsvText?: string,
	uploadProps?: UploadProps,
	segmentFilterText?: string,
	segmentFilterSubText?: string,
	attributeData?: any,
	logQuery?: any,
	selectedSegments?: any,
	ruleQuery?: any,
	audienceCount?: any,
	errors?: any
}

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
	selectedSegments,
	ruleQuery,
	audienceCount,
	errors
}: iProps) => {
	return (
		<div>
			<div>
				<h3 className="gx-text-grey">{audienceTitle}</h3>
				<div>
					<p style={{ paddingTop: '20px', width: '50%' }} className="gx-text-grey gx-mb-1">
						{segmentSubTitle}
						<span style={{ float: 'right' }}>  Potential Reach : <b>{audienceCount}</b> </span>
					</p>
					<AddAndDeleteSelectDynamically
						onValuesSelected={onValuesSelected}
						segmentSelectionData={segmentSelectionData}
						values={selectedSegments}
						errors={errors}
					/>
					{uploadCsvText && <span>
						or
						<Upload {...uploadProps}>
							<Button style={{ marginBottom: '0px' }} type="link">
								{uploadCsvText}
							</Button>
						</Upload>
					</span>}
				</div>
				<div style={{ marginTop: '50px' }}>
					<Divider className='audienceDivider' style={{ color: '#000000' }} orientation="left">
						<p className="gx-text-grey gx-mb-2">{segmentFilterText}</p>
					</Divider>
					<p className="gx-text-grey gx-mb-1">{segmentFilterSubText}</p>
					<WalkinQueryBuilder fields={attributeData} onQueryChange={logQuery} query={ruleQuery} />
				</div>
			</div>
		</div>
	);
};

export default Audience;