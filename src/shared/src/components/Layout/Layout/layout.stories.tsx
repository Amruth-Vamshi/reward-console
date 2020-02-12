import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  BasicLayout,
  HeaderContentFooterLayout,
  HeaderSiderLayout,
  HeaderSider2Layout,
  SiderLayout,
  CustomTriggerLayout,
  ResponsiveLayout,
  FixedHeaderLayout,
  FixedSiderLayout,
} from 'shared';

const stories = storiesOf('Atoms|Antd/Layout/Layout', module);

stories.add('layout basic', () => {
  return <BasicLayout />;
});

stories.add('layout header content footer', () => {
  return <HeaderContentFooterLayout />;
});

stories.add('layout header sider ', () => {
  return <HeaderSiderLayout />;
});

stories.add('layout header sider 2', () => {
  return <HeaderSider2Layout />;
});

stories.add('layout sider', () => {
  return <SiderLayout />;
});

stories.add('layout custom trigger', () => {
  return <CustomTriggerLayout />;
});

stories.add('layout responsive', () => {
  return <ResponsiveLayout />;
});

stories.add('layout fixed header', () => {
  return <FixedHeaderLayout />;
});

stories.add('layout fixed sider', () => {
  return <FixedSiderLayout />;
});
