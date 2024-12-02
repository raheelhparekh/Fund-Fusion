import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

function OverTheYearsPie() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Steps Distribution Over Years",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw} steps`;
          },
        },
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"], // Labels for the pie slices
    datasets: [
      {
        data: [3000, 5000, 4500, 9000, 12000], // Data for the pie chart
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)", // Color for the 2020 slice
          "rgba(255, 99, 132, 0.5)", // Color for the 2021 slice
          "rgba(54, 162, 235, 0.5)", // Color for the 2022 slice
          "rgba(153, 102, 255, 0.5)", // Color for the 2023 slice
          "rgba(255, 159, 64, 0.5)",  // Color for the 2024 slice
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

  return <Pie options={options} data={data} />;
}

export default OverTheYearsPie;
