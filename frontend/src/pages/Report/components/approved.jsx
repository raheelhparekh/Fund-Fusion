import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const ChartWithDropdown = () => {
  // Chart data options for faculty and students
  const chartDataOptions = {
    faculty: {
      approved: {
        labels: [2020, 2021, 2022, 2023, 2024],
        datasets: [
          {
            label: "Approved Applications (Faculty)",
            data: [100, 150, 200, 250, 300],
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 1,
          },
        ],
      },
      rejected: {
        labels: [2020, 2021, 2022, 2023, 2024],
        datasets: [
          {
            label: "Rejected Applications (Faculty)",
            data: [50, 60, 70, 80, 20],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
          },
        ],
      },
    },
    students: {
      approved: {
        labels: [2020, 2021, 2022, 2023, 2024],
        datasets: [
          {
            label: "Approved Applications (Students)",
            data: [1200, 1500, 1800, 2200, 2500],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
          },
        ],
      },
      rejected: {
        labels: [2020, 2021, 2022, 2023, 2024],
        datasets: [
          {
            label: "Rejected Applications (Students)",
            data: [200, 300, 400, 500, 450],
            backgroundColor: "rgba(255, 159, 64, 0.5)",
            borderColor: "rgb(255, 159, 64)",
            borderWidth: 1,
          },
        ],
      },
    },
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Applications Over the Years" },
    },
    scales: {
      x: { title: { display: true, text: "Year" } },
      y: { title: { display: true, text: "Number of Applications" }, beginAtZero: true },
    },
  };

  const [category, setCategory] = useState("faculty"); // Faculty or Students
  const [applicationType, setApplicationType] = useState("approved"); // Approved or Rejected

  // Fetch the data based on the selected category and application type
  const data =
    chartDataOptions[category]?.[applicationType] ||
    chartDataOptions["faculty"]["approved"];

  return (
    <div style={{ width: "100%", margin: "auto", padding: "20px", flexGrow:1 }}>
      {/* Dropdown for selecting category */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="category-select" style={{ marginRight: "10px" }}>
          Select Category:
        </label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "5px", fontSize: "16px", marginRight: "20px", borderRadius:"15px",textAlign:"center",border:"2px solid black"}}
        >
          <option value="faculty">Faculty</option>
          <option value="students">Students</option>
        </select>

        {/* Dropdown for selecting application type */}
        <label htmlFor="type-select" style={{ marginRight: "10px" }}>
          Select Application Type:
        </label>
        <select
          id="type-select"
          value={applicationType}
          onChange={(e) => setApplicationType(e.target.value)}
          style={{ padding: "5px", fontSize: "16px", borderRadius:"15px",textAlign:"center",border:"2px solid black" }}
        >
          <option value="approved">Approved Applications</option>
          <option value="rejected">Rejected Applications</option>
        </select>
      </div>

      {/* Chart */}
      {data && <Bar data={data} options={chartOptions} />}
    </div>
  );
};

export default ChartWithDropdown;
