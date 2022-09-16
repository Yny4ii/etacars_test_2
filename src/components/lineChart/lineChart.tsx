import React from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { History } from "../../interfaces/History";

interface LineChartProps {
  history: History[];
}

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const LineChart = ({ history }: LineChartProps) => {
  const month = history.map((e) => {
    const date = new Date(e.time);

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const data = {
    labels: month,
    datasets: [
      {
        label: "Price usd",
        data: history.map((e) => e.priceUsd),
        fill: true,
        pointBorderColor: "#8884d8",
        pointBorderWidth: 1,
        pointRadius: 0.75,
        tension: 1,
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "300px" }} data-cy={"canvas"}>
      <Line data={data} options={options} />
    </div>
  );
};
