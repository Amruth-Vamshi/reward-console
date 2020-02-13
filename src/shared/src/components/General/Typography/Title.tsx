import React from 'react';
import Title from 'antd/lib/typography/Title';

export default class CustomTitle extends React.Component {
  render() {
    return (
      <div>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
      </div>
    );
  }
}
