import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'shared';
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  array,
  select,
} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms|Other/Image', module);

stories.addDecorator(withKnobs);

stories.add(
  'Image default',
  () => {
    const source = require('../../../assets/nilgiris.png');
    const styles = {
      backgroundColor: 'transparent',
      padding: '10px',
      'object-fit': 'contain',
    };
    const scaleTypeLabel = 'Image Fit';
    const scaleTypeOptions = {
      fill: 'fill',
      contain: 'contain',
      cover: 'cover',
      scaleDown: 'scale-down',
      none: 'none',
    };
    const scaleTypeDefaultValue = 'contain';
    return (
      <Image
        height={text('height', '80px')}
        width={text('width', '100px')}
        source={text('source', source)}
        alternate_text={text('alternate text', 'image-placeholder')}
        style={object('style', styles)}
        scaleType={select(
          scaleTypeLabel,
          scaleTypeOptions,
          scaleTypeDefaultValue
        )}
      />
    );
  },
  { notes: 'you can use dynamic URLs as well' }
);
