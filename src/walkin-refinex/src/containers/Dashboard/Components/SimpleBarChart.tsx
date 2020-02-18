import * as React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: '27/11', promoters: 4000, neutrals: 2400, detractors: 2400 },
  { name: '28/11', promoters: 3000, neutrals: 1398, detractors: 2210 },
  { name: '29/11', promoters: 2000, neutrals: 9800, detractors: 2290 },
  { name: '30/11', promoters: 2780, neutrals: 3908, detractors: 2000 },
  { name: '01/12', promoters: 1890, neutrals: 4800, detractors: 2181 },
  { name: '02/12', promoters: 2390, neutrals: 3800, detractors: 2500 },
  { name: '03/12', promoters: 3490, neutrals: 4300, detractors: 2100 },
];

const TinyBarChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data} margin={{ top: 10, right: 0, left: -15, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="promoters" fill="#003366" />
    </BarChart>
  </ResponsiveContainer>
);

export default TinyBarChart;
