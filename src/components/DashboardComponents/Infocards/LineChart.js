import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);
const LineChart = () => {
  const [data, setData] = useState({
    labels: ["red", "blue", "pink", "yellow", "indigo", "milo", "coco"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "white",
        borderColor: "purple",
        tension: 0.1,
      },
      {
        label: "My Second Dataset",
        data: [62, 44, 25, 0, 23, 28, 60],
        fill: false,
        backgroundColor: "white",
        borderColor: "darkblue",
        tension: 0.1,
      }
      
    ],
  });
  return (
    <div style={{ height:"90%" , width:"90%" ,margin:"20px auto" }}>
      <Line data={data} options={{maintainAspectRatio:false}} />
    </div>
  );
};

export default LineChart;
