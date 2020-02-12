import * as React from 'react';
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Label,
} from 'recharts';
import { data04 } from './data';
import style from './style';

const SimpleRadialBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <RadialBarChart
      startAngle={180}
      endAngle={0}
      innerRadius={120}
      barSize={10}
      data={data04}
    >
      <RadialBar background dataKey="uv" />
      <Legend
        width={200}
        height={240}
        align="center"
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  </ResponsiveContainer>
);

export default SimpleRadialBarChart;
