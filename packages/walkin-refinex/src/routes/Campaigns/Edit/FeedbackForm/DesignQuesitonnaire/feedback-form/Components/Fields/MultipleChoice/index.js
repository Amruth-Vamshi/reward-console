import React from 'react';
import { Checkbox } from "antd"

const SingleAnswer = ({ question, value, radioStyle, onChange }) => {
    return (<Checkbox.Group onChange={onChange} value={value}>
        {
            question.choices.map(choice => {
                return (
                    <Checkbox style={radioStyle} key={choice.id} value={choice.id}>
                        {choice.choiceText}
                    </Checkbox>
                )
            })
        }
    </Checkbox.Group>);
}

export default SingleAnswer;