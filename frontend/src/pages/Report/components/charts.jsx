import React, { useState } from "react";
import ChartWithDropdown from "./approved";
import Cards from "./cards"
import ApprovalVsRejectionTrends from "./map"
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
    labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Nov","Dec"],
    datasets: [
      {
        label: "Applications",
        data: [1200, 1500, 1800, 2200, 200,800,1235,604,2345,2523,3453,6453], // Updated data for number of applications
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
        <div className="h">
          <div className="hhh">
          <Pie options={pie_Options} data={pie_Data} />
          </div>
          
          <div className="hh">
        <ApprovalVsRejectionTrends/>
        </div>
        
        </div>
        
    </div>
  );
}

export default Charts;
