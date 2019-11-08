import * as  React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import data from "./data";
import { data03 } from "./data";
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class PieChartWithPaddingAngle extends React.Component {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart >
          <Pie dataKey="value"
            data={data03}
            cx="70%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#003366"
            paddingAngle={0}
          >
            {
              data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default PieChartWithPaddingAngle;
