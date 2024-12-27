import React, { useState } from "react";
import ChartWithDropdown from "./approved";
import Cards from "./cards"
import './cards.css'
import BasicTable from "./Table";
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
import Table from "./Table";

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

function Charts() {
  // Line Chart Data and Options
  const lineOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Number of Applications Over the Years ",
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
        text: "Number of Applications Over the Years ",
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
        data: [1200, 1500, 1800, 2200, 200], // Updated data for number of applications
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
        text: "Purpose of Travel",
      },
    },
  };

  const pieData = {
    labels: ["Academic", "Research", "Personal", "Other"],
    datasets: [
      {
        data: [1200, 1500, 1800, 2200], // Updated data for number of applications
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Approved and Rejected Applications Over the Years",
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
  const [selectedOption, setSelectedOption] = useState("approved");
  const chartDataOptions = {
    labels: [2020, 2021, 2022, 2023, 2024], // Years
    datasets: [
      {
        label: "Approved Applications",
        data: [800, 1100, 1300, 1600, 180], // Data for approved applications
        backgroundColor: "rgba(54, 162, 235, 0.5)", // Blue color
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
      {
        label: "Rejected Applications",
        data: [400, 400, 500, 600, 20], // Data for rejected applications
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Red color
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
    ],
  };
  
  

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Travel Policy Report</h1>

      {/* Container for all three charts */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
        {/* Bar Chart */}
        <div className="w-full">
          <Bar options={barOptions} data={barData} />
        </div>

        {/* Pie Chart */}
        <div className="w-full">
          <Pie options={pieOptions} data={pieData} />
        </div>
      </div>
        <div className="cards">
            <Cards/>
            
            <div className="generalInfo">
                <div className="card2">
                    <ChartWithDropdown/>
                   
                   
                </div>
                        
            </div>
        </div>
        <div className="Table">
            <Table/>
        </div>
      {/* Line Chart */}
      {/* <div className="w-full">
        <Line options={lineOptions} data={lineData} />
      </div> */}
    </div>
  );
}

export default Charts;
