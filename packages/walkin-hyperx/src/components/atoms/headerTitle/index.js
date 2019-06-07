import React, { Fragment } from 'react';
import { Typography } from 'antd';
import './style.css';

const { Text } = Typography;

const HeaderTitle = ({ text }) => {
	return <Text className="headerTitleFont">{text}</Text>;
};

export default HeaderTitle;
