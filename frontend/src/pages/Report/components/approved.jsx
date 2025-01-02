import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const ChartWithDropdown = () => {
  // Chart data options for faculty, students, HOI, and HOD
  const chartDataOptions = {
    faculty: {
      approved: {
        labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Nov","Dec"],
        datasets: [
          {
            label: "Approved Applications (Faculty)",
            data: [100, 150, 200, 250, 300,400,900,132,920,1000,890 ,100],
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 1,
          },
        ],
      },
      rejected: {
        labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Nov","Dec"],
        datasets: [
          {
            label: "Rejected Applications (Faculty)",
            data: [50, 60, 70, 80, 20,40,90,78,23,29,98,33],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
          },
        ],
      },
    },
    HOI: {
      approved: {
        labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Nov","Dec"],
        datasets: [
          {
            label: "Approved Applications (HOI)",
            data: [1200, 1500, 1800, 2200, 2500,2000,1999,3453,2345,5633,2345,5647],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
          },
        ],
      },
      rejected: {
        labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Nov","Dec"],
        datasets: [
          {
            label: "Rejected Applications (HOI)",
            data: [200, 300, 400, 500, 450, 350, 320, 410, 360, 430, 300, 250],
            backgroundColor: "rgba(255, 159, 64, 0.5)",
            borderColor: "rgb(255, 159, 64)",
            borderWidth: 1,
          },
        ],
      },
    },
    HOD: {
      approved: {
        labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Nov","Dec"],
        datasets: [
          {
            label: "Approved Applications (HOD)",
            data: [300, 400, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50],
            backgroundColor: "rgba(153, 102, 255, 0.5)",
            borderColor: "rgb(153, 102, 255)",
            borderWidth: 1,
          },
        ],
      },
      rejected: {
        labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Nov","Dec"],
        datasets: [
          {
            label: "Rejected Applications (HOD)",
            data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
            backgroundColor: "rgba(255, 206, 86, 0.5)",
            borderColor: "rgb(255, 206, 86)",
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

  const [category, setCategory] = useState("faculty"); // Faculty, HOI, or HOD
  const [applicationType, setApplicationType] = useState("approved"); // Approved or Rejected

  // Fetch the data based on the selected category and application type
  const data =
    chartDataOptions[category]?.[applicationType] ||
    chartDataOptions["faculty"]["approved"];

  return (
    <div style={{ width: "100%", margin: "auto", padding: "20px", flexGrow: 1 }}>
      {/* Dropdown for selecting category */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="category-select" style={{ marginRight: "10px" }}>
          Select Category:
        </label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "5px", fontSize: "16px", marginRight: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid black" }}
        >
          <option value="faculty">Faculty</option>
          <option value="HOI">HOI</option>
          <option value="HOD">HOD</option>
        </select>

        {/* Dropdown for selecting application type */}
        <label htmlFor="type-select" style={{ marginRight: "10px" }}>
          Select Application Type:
        </label>
        <select
          id="type-select"
          value={applicationType}
          onChange={(e) => setApplicationType(e.target.value)}
          style={{ padding: "5px", fontSize: "16px", borderRadius: "15px", textAlign: "center", border: "2px solid black" }}
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