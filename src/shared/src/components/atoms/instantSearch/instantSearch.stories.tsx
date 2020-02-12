import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { InstantSearch } from 'shared';

const stories = storiesOf('Instant Search', module);

stories.add('instant search', () => {
  const style = {
    backgroundColor: '#FFF',
    border: '1px solid #DDD',
    borderRadius: 2,
    outline: 0,
    fontSize: 15,
    cursor: 'pointer',
  };
  return (
    <InstantSearch onFilteredList={''} placeHolder={'placeHolder'} data={{}} />
  );
});
