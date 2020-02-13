import * as React from 'react';
import { Radio } from 'antd';
import { toNumber } from 'walkin-components/src/util/common';
import './style.css';

const ButtonGroups = ({
  selectedPriorityButton = 3,
  handleChange,
  maxPriority = 99,
}: any) => {
  var selectedOption = toNumber(selectedPriorityButton);
  const noop = (e: any) => {
    console.log(e);
  };
  if (!selectedOption) selectedOption = 1;
  return (
    <Radio.Group
      defaultValue={selectedOption !== 0 ? selectedOption : 3}
      value={selectedOption !== 0 ? selectedOption : 3}
      buttonStyle="solid"
      onChange={handleChange || noop}
    >
      {selectedOption > 2 && (
        <Radio.Button className="allButtonStyle" value={selectedOption - 2}>
          {selectedOption ? selectedOption - 2 : 1}
        </Radio.Button>
      )}
      {selectedOption > 1 && (
        <Radio.Button className="allButtonStyle" value={selectedOption - 1}>
          {selectedOption ? selectedOption - 1 : 2}
        </Radio.Button>
      )}
      <Radio.Button
        className="allButtonStyle"
        value={selectedOption ? selectedOption : 3}
      >
        {selectedOption ? selectedOption : 3}
      </Radio.Button>
      {selectedOption + 1 <= maxPriority ? (
        <Radio.Button className="allButtonStyle" value={selectedOption + 1}>
          {selectedOption ? selectedOption + 1 : 4}
        </Radio.Button>
      ) : (
        ''
      )}
      {selectedOption + 2 <= maxPriority && (
        <Radio.Button className="allButtonStyle" value={selectedOption + 2}>
          {selectedOption ? selectedOption + 2 : 5}
        </Radio.Button>
      )}
    </Radio.Group>
  );
};

export default ButtonGroups;
