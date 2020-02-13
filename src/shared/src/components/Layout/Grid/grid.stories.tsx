import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  BasicGrid,
  GutterGrid,
  ColumnOffsetGrid,
  SortGrid,
  FlexLayoutGrid,
  FlexAlignmentGrid,
  FlexOrderGrid,
  ResponsiveGrid,
  MoreResponsiveGrid,
  PlaygroundGrid,
} from 'shared';

const stories = storiesOf('Atoms|Antd/Layout/Grid', module);

stories.add('grid basic', () => {
  return <BasicGrid />;
});

stories.add('grid gutter', () => {
  return <GutterGrid />;
});

stories.add('grid column offset', () => {
  return <ColumnOffsetGrid />;
});

stories.add('grid sort', () => {
  return <SortGrid />;
});

stories.add('grid flex layout', () => {
  return <FlexLayoutGrid />;
});

stories.add('grid flex aligment', () => {
  return <FlexAlignmentGrid />;
});

stories.add('grid flex order', () => {
  return <FlexOrderGrid />;
});

stories.add('grid responsive', () => {
  return <ResponsiveGrid />;
});

stories.add('grid more responsive', () => {
  return <MoreResponsiveGrid />;
});

stories.add('gird playground', () => {
  return <PlaygroundGrid />;
});
