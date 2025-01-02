    import React, { useState } from "react";
    import { motion } from "framer-motion";
    import "./cards.css";
    import { Bar } from "react-chartjs-2";
    import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    } from "chart.js";

    // Register chart.js components
    ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    );

    const Card = (props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="card">
        <motion.div
            layout
            onClick={() => setExpanded(!expanded)} // Toggle the state
            className="motion_card"
        >
            {!expanded && ( // Render CompactCard when NOT expanded
            <motion.div>
                <CompactCard param={props} />
            </motion.div>
            )}

            {expanded && ( // Render ExpandedCard when expanded
            <motion.div>
                <ExpandedCard param={props} />
            </motion.div>
            )}
        </motion.div>
        </div>
    );
    };

    // Compact Card Component
    function CompactCard({ param }) {
    return (
        <div className="CompactCard">
        <div className="data">
            <h1>{param.title}</h1>
        </div>
        <span>{param.value}</span>
        </div>
    );
    }

    // Expanded Card Component
    function ExpandedCard({ param }) {
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

    const chartData = {
        labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sep","Nov","Dec"], // Example years
        datasets: [
        {
            label: param.series[0].name, // e.g., "Applications"
            data: param.series[0].data, // e.g., [100, 150, 200, 250, 300]
            backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
        },
        ],
    };

    return (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="ExpandedCard"
          style={{
            position: "fixed", // Make it fixed to cover the whole screen
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            zIndex: 999, // Ensure it's on top of other elements
          }}
        >
          <div
            className="expandedCardContent"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "70%",
              height: "70%"
            }}
          >
            <div className="data">
              <h1>{param.title}</h1>
            </div>
            <Bar options={barOptions} data={chartData} />
            <span>{param.value}</span>
          </div>
        </motion.div>
    )
    }

    export default Card;
