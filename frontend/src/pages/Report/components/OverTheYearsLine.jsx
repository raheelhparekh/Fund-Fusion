import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function OverTheYearsLine() {
  const options = {
    responsive: true, // Make the chart responsive to window resizing
    maintainAspectRatio: false, // Allow chart size to change dynamically (optional)

    // Title configuration
    plugins: {
      title: {
        display: true,
        text: "Applications Over the Years", // Set a title for the chart
        font: {
          size: 16,
        },
      },
      tooltip: {
        // Customize tooltips
        callbacks: {
          label: function (context) {
            // Format tooltip labels
            return `${context.dataset.label}: ${context.raw} steps`;
          },
        },
      },
      legend: {
        display: true,
        position: "top", // Legend position: 'top', 'left', 'bottom', 'right'
      },
    },

    // Scales configuration (e.g., setting up x and y axes)
    scales: {
      x: {
        // X-axis configuration (labels are auto-set)
        title: {
          display: true,
          text: "Year", // Label for the X-axis
        },
      },
      y: {
        // Y-axis configuration
        title: {
          display: true,
          text: "Number of Applications", // Label for the Y-axis
        },
        // ticks: {
        //   // Custom tick marks
        //   beginAtZero: true, // Start Y-axis from 0
        //   stepSize: 9000, // Tick step size for Y-axis
        // },
      },
    },
  };

  const data = {
    labels: [2020, 2021, 2022, 2023, 2024],
    datasets: [
      {
        label: "Steps",
        data: [30, 50, 45, 90, 35],
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default OverTheYearsLine;
