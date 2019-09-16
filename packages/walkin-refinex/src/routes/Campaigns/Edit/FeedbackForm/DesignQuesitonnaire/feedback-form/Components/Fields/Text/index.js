import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const SingleAnswer = ({ question, value, radioStyle, onChange }) => {
    return (<TextArea
        value={value}
        onChange={onChange}
        autosize={{ minRows: 3, maxRows: 5 }}
    />);
}

export default SingleAnswer;