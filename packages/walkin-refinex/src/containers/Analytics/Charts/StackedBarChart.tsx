import * as React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { data05 } from "./data";

const StackedBarChart = () => (

  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data05}
      margin={{ top: 10, right: 0, left: -15, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="negative" stackId="a" fill="#003366" />
      <Bar dataKey="positive" stackId="a" fill="#FE9E15" />
      <Bar dataKey="neutral" stackId="a" fill="#b056dd" />
    </BarChart>
  </ResponsiveContainer>
);

export default StackedBarChart;
