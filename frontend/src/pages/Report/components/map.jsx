import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ApprovalVsRejectionTrends = () => {
  // Sample data for Approved and Rejected Applications
  const applicationData = {
    faculty: {
      approved: [100, 150, 200, 250, 300, 400, 500, 450, 600, 550, 700, 650],
      rejected: [50, 60, 70, 80, 100, 90, 120, 110, 130, 100, 140, 120],
    },
    HOI: {
      approved: [500, 600, 700, 800, 750, 700, 900, 850, 1000, 950, 1100, 1050],
      rejected: [100, 120, 140, 150, 130, 110, 180, 150, 200, 170, 220, 190],
    },
    HOD: {
      approved: [300, 400, 350, 450, 500, 480, 550, 520, 600, 580, 650, 620],
      rejected: [80, 90, 100, 110, 120, 100, 140, 130, 150, 140, 160, 150],
    },
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // State for selected category
  const [category, setCategory] = useState("faculty");

  // Data for the Line Chart
  const lineChartData = {
    labels: months,
    datasets: [
      {
        label: "Approved Applications",
        data: applicationData[category].approved,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // For a smooth curve
        fill: true,
      },
      {
        label: "Rejected Applications",
        data: applicationData[category].rejected,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Approval vs. Rejection Trends" },
    },
    scales: {
      x: { title: { display: true, text: "Months" } },
      y: { title: { display: true, text: "Number of Applications" }, beginAtZero: true },
    },
  };

  return (
    <div style={{ width: "90%", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Approval vs. Rejection Trends</h2>

      {/* Dropdown to select category */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="category-select" style={{ marginRight: "10px" }}>
          Select Category:
        </label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "5px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc" }}
        >
          <option value="faculty">Faculty</option>
          <option value="HOI">HOI</option>
          <option value="HOD">HOD</option>
        </select>
      </div>

      {/* Line Chart */}
      <Line data={lineChartData} options={lineChartOptions} />
    </div>
  );
};

export default ApprovalVsRejectionTrends;
