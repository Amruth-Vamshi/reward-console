import React from 'react';
import { storiesOf } from '@storybook/react';
import { CustomTitle, CustomParagraph, CustomText } from 'shared';

const stories = storiesOf('Atoms|Antd/General/Typography', module);

stories.add(
  'Text',
  () => {
    return <CustomText />;
  },
  { notes: 'Notes will appear here' }
);

stories.add(
  'Title',
  () => {
    return <CustomTitle />;
  },
  { notes: 'Notes will appear here' }
);

stories.add(
  'Paragraph',
  () => {
    return <CustomParagraph />;
  },
  { notes: 'Notes will appear here' }
);
