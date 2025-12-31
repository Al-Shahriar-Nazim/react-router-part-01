import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
const resultData = [
  { id: 1, name: "Araf", class: "10", physics: 30, chemistry: 78, math: 88 },
  { id: 2, name: "Samia", class: "10", physics: 0, chemistry: 85, math: 92 },
  { id: 3, name: "Rahim", class: "10", physics: 50, chemistry: 80, math: 70 },
  { id: 4, name: "Nafis", class: "10", physics: 88, chemistry: 91, math: 16 },
  { id: 5, name: "Riya", class: "10", physics: 92, chemistry: 40, math: 95 },
  { id: 6, name: "Hasan", class: "10", physics: 65, chemistry: 70, math: 68 },
  { id: 7, name: "Jaber", class: "10", physics: 78, chemistry: 75, math: 80 },
  { id: 8, name: "Maliha", class: "10", physics: 85, chemistry: 88, math: 82 },
  { id: 9, name: "Rifat", class: "10", physics: 72, chemistry: 69, math: 74 },
  { id: 10, name: "Siam", class: "10", physics: 95, chemistry: 92, math: 97 },
];

const ResultChart = () => {
  return (
    <div>
        <h3 className="text-3xl m-10">Exam result chart</h3>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry" stroke="red"></Line>
        <Line dataKey="physics" stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
