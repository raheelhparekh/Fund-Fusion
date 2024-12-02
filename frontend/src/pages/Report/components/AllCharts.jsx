import React from 'react';
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components for all three types (Line, Bar, Pie)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function AllChartsPage() {
  // Line Chart Data and Options
  const lineOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Number of Applications Over the Years (Line Chart)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Applications",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  const lineData = {
    labels: [2020, 2021, 2022, 2023, 2024],
    datasets: [
      {
        label: "Applications",
        data: [1200, 1500, 1800, 2200, 2500], // Updated data for number of applications
        borderColor: "rgb(75, 192, 192)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  // Bar Chart Data and Options
  const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Number of Applications Over the Years (Bar Chart)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Applications",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  const barData = {
    labels: [2020, 2021, 2022, 2023, 2024],
    datasets: [
      {
        label: "Applications",
        data: [1200, 1500, 1800, 2200, 2500], // Updated data for number of applications
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data and Options
  const pieOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Applications Distribution by Year (Pie Chart)",
      },
    },
  };

  const pieData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        data: [1200, 1500, 1800, 2200, 2500], // Updated data for number of applications
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='p-10'>
      <h1 className='text-3xl mb-6'>Travel Policy Report</h1>

      {/* Container for all three charts */}
      <div className='grid grid-cols-3 gap-6'>
        {/* Line Chart */}
        <div style={{ width: "100%", height: "400px" }}>
          <Line options={lineOptions} data={lineData} />
        </div>

        {/* Bar Chart */}
        <div style={{ width: "100%", height: "400px" }}>
          <Bar options={barOptions} data={barData} />
        </div>

        {/* Pie Chart */}
        <div style={{ width: "100%", height: "400px" }}>
          <Pie options={pieOptions} data={pieData} />
        </div>
      </div>
    </div>
  );
}

export default AllChartsPage;
