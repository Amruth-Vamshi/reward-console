import * as React from "react";
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { name: '27/11', csat: 0, nps: -100, amt: 2400 },
    { name: '28/11', csat: 3.5, nps: -45, amt: 2210 },
    { name: '29/11', csat: 9, nps: 56, amt: 2290 },
    { name: '30/11', csat: 7, nps: 69, amt: 2000 },
    { name: '01/12', csat: 4, nps: 47, amt: 2181 },
    { name: '02/12', csat: 5.2, nps: 86, amt: 2500 },
    { name: '03/12', csat: 6, nps: 95, amt: 2100 },
]

const LineValueChart = (chartType: any, strokeColor: any) => {
    console.log("Chart Type : ", chartType)
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}
                margin={{ top: 10, right: 0, left: -15, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line dataKey={chartType.chartType} stroke={chartType.strokeColor} fill={chartType.strokeColor} />
            </LineChart>
        </ResponsiveContainer>
    )
};

export default LineValueChart;