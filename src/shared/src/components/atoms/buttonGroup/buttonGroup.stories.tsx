import React from 'react';
import { Button, Alert } from 'antd';
import ButtonGroups from './index';
import { storiesOf } from '@storybook/react';
// export default { title: "ButtonGroup" };

// export const withText = () => <Button>Hello Lol</Button>;

// export const withEmoji = () => (
//   <Button>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

storiesOf('ButtonGroup', module)
  .add('unchecked', () => (
    <ButtonGroups
      selectedPriorityButton={3}
      handleChange={() => {}}
      maxPriority={99}
    />
  ))
  .add('checked', ({ state, setState }) => (
    <ButtonGroups
      selectedPriorityButton={3}
      handleChange={e => setState({ value: e.target.value })}
      maxPriority={99}
    />
  ));

// export const withGroup = () => (
//   <ButtonGroups
//     selectedPriorityButton={3}
//     handleChange={() => {}}
//     maxPriority={99}
//   />
// );
