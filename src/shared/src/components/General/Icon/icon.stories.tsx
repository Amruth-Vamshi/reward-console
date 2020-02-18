import { CustomIcon } from 'shared';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  array,
  select,
} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms|Antd/General/Icon', module);

stories.addDecorator(withKnobs);

stories.add(
  'icon default',
  () => {
    const label = 'Theme';
    const options = {
      Filled: 'filled',
      Outlined: 'outlined',
      TwoTone: 'twoTone',
    };
    const defaultValue = 'outlined';
    const style = {
      // backgroundColor: "#00F"
      // width: "40px",
      // height: "40px",
      // cursor: "pointer"
    };
    return (
      <CustomIcon
        type={text('Type', 'woman')}
        spin={boolean('Spin', false)}
        style={object('Style', style)}
        rotate={number('Rotate', 0)}
        twoToneColor={text('Two tone color', '#000')}
        theme={select(label, options, defaultValue)}
      />
    );
  },
  { notes: 'Notes will appear here' }
);
