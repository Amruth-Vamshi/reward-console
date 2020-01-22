import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const data = [
  { day: "27/11", promoters: 4000, neutrals: 2400, detractors: 2400 },
  { day: "28/11", promoters: 3000, neutrals: 1398, detractors: 2210 },
  { day: "29/11", promoters: 2000, neutrals: 9800, detractors: 2290 },
  { day: "30/11", promoters: 2780, neutrals: 3908, detractors: 2000 },
  { day: "01/12", promoters: 1890, neutrals: 4800, detractors: 2181 },
  { day: "02/12", promoters: 2390, neutrals: 3800, detractors: 2500 },
  { day: "03/12", promoters: 3490, neutrals: 4300, detractors: 2100 }
];

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};
const renderTooltipContent = o => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};
const PercentAreaChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <AreaChart
      data={data}
      stackOffset="expand"
      margin={{ top: 10, right: 0, left: -15, bottom: 0 }}
    >
      <XAxis dataKey="day" />
      <YAxis tickFormatter={toPercent} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip content={renderTooltipContent} />
      <Area
        dataKey="detractors"
        stackId="1"
        fillOpacity={1}
        stroke="#E96B81"
        fill="#E96B8133"
      />
      <Area
        dataKey="neutrals"
        stackId="1"
        fillOpacity={1}
        stroke="#46CB92"
        fill="#FCAD7833"
      />
      <Area
        dataKey="promoters"
        stackId="1"
        fillOpacity={1}
        stroke="#b3b3b3"
        fill="#46CB9226"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default PercentAreaChart;
