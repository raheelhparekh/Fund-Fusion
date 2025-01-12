import React, { useState } from "react";
import ChartWithDropdown from "./approved";
import Cards from "./cards";
import "./cards.css";
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
import ReportPDF from "./ReportPDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ApprovalVsRejectionTrends from "./map";

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

function Charts({ reportData }) {
  const { data, query } = reportData;

  if (data.length === 0) {
    return (
      <div className="text-center text-xl text-red-700 py-10">
        No Data Found
      </div>
    );
  }

  const tableData = [];
  const groupedData = {};
  if (data) {
    for (const item of data) {
      const { institute, department, formData } = item;
      const { totalExpense, purposeOfTravel } = formData;

      if (!groupedData[institute]) {
        groupedData[institute] = {};
      }

      if (query.institute) {
        if (!groupedData[institute][department]) {
          groupedData[institute][department] = {
            totalExpense: 0,
            purposeOfTravel: purposeOfTravel || "Not Provided",
            applications: 0,
          };
        }

        // Aggregate the data
        groupedData[institute][department].totalExpense +=
          parseFloat(totalExpense); // Summing the expenses
        groupedData[institute][department].applications += 1;
      } else {
        if (!groupedData[institute].applications) {
          groupedData[institute] = {
            totalExpense: 0,
            purposeOfTravel: purposeOfTravel || "Not Provided",
            applications: 0,
          };
        }

        // Aggregate the data
        groupedData[institute].totalExpense += parseFloat(totalExpense); // Summing the expenses
        groupedData[institute].applications += 1;
      }
    }
  }

  // Step 2: Transform grouped data into desired table format
  if (query.institute) {
    for (const institute in groupedData) {
      for (const department in groupedData[institute]) {
        const departmentData = groupedData[institute][department];

        tableData.push({
          id: tableData.length + 1,
          Stream: department,
          Scholarship: departmentData.applications, // Assuming each application is one scholarship
          Purpose_of_Travel: departmentData.purposeOfTravel,
          Funds: departmentData.totalExpense.toFixed(2), // Formatting funds to 2 decimal places
        });
      }
    }
  } else {
    for (const institute in groupedData) {
      const instituteData = groupedData[institute];

      tableData.push({
        id: tableData.length + 1,
        Stream: institute,
        Scholarship: instituteData.applications, // Assuming each application is one scholarship
        Purpose_of_Travel: instituteData.purposeOfTravel,
        Funds: instituteData.totalExpense.toFixed(2), // Formatting funds to 2 decimal places
      });
    }
  }

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
          text: "Month",
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
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Applications",
        data: [
          1200, 1500, 1800, 2200, 200, 800, 1235, 604, 2345, 2523, 3453, 6453,
        ], // Updated data for number of applications
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

  const pie_Options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Travel",
      },
    },
  };

  const pie_Data = {
    labels: ["Domestic", "International", "Local"],
    datasets: [
      {
        data: [1200, 1500, 1800], // Updated data for number of applications
        backgroundColor: [
          "rgba(79, 246, 96, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
        ],
        borderColor: [
          "rgb(79, 246, 96)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
        ],
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
        <Cards />

        <div className="generalInfo">
          <div className="card2">
            <ChartWithDropdown />
          </div>
        </div>
      </div>
      <div className="h">
          <div className="Travel">
            <Pie options={pie_Options} data={pie_Data} />
          </div>

            {/* <div className="hh">
              <ApprovalVsRejectionTrends />
            </div> */}

        <div className="Table">
          <Table tableData={tableData} />
        </div>
        {/* Line Chart */}
        {/* <div className="w-full">
        <Line options={lineOptions} data={lineData} />*/}
      </div> 
      <div className="pdfreport">
        <PDFDownloadLink
          document={<ReportPDF tableData={tableData} />}
          fileName={`report_${query.institute || "allInstitutes"}_${
            query.department || "allDepartments"
          }_${query.year || "allYears"}_${
            query.applicationType || "allApplications"
          }.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Getting Your PDF Report Ready..."
            ) : (
              <button
                disabled={loading}
                className="w-full flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out disabled:bg-gray-400"
                type="button"
              >
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink>

        <PDFViewer style={{ width: "70vw", height: "100vh" }}>
          <ReportPDF tableData={tableData} />
        </PDFViewer>
      </div>
    </div>
  );
}

export default Charts;
