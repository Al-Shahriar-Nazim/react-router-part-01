import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromised }) => {
  const marskDataResult = use(marksPromised);
  // console.log(marskDataResult)
  const marksData = marskDataResult.data;
  console.log(marksData);

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.physics,
      chemistry: studentData.chemistry,
      math: studentData.math,
    };
    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;
    return student;
  });
  console.log(marksChartData);

  return (
    <div>
      <h3 className="text-3xl p-5">Simple bar charts</h3>
      <BarChart width={600} height={400} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="chemistry" fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
