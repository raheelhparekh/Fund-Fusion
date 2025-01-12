import React, { useRef, useState } from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import html2canvas from "html2canvas";  // Import html2canvas
import { Line } from "react-chartjs-2"; // Example chart, replace as needed
import { Chart as ChartJS } from "chart.js/auto";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: "75vw", // Full width
    height: "100vh", // Full height
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  card: {
    width: "45%",
    padding: 10,
    backgroundColor: "#f8e7d1",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  chartContainer: {
    marginVertical: 20,
    textAlign: "center",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    backgroundColor: "#f2f2f2",
    padding: 5,
    textAlign: "center",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    padding: 5,
    textAlign: "center",
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
});

// Chart Component
const ChartComponent = ({ chartRef }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sample Data",
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div ref={chartRef}>
      <Line data={data} />
    </div>
  );
};

// Create Document Component
const ReportPDF = ({ tableData }) => {
  const [chartImage, setChartImage] = useState(null);
  const chartRef = useRef();

  const captureChartAsImage = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const imageUrl = canvas.toDataURL("image/png");
        setChartImage(imageUrl);
      });
    }
  };

  // Capture chart when component mounts or chart data changes
  React.useEffect(() => {
    captureChartAsImage();
  }, []);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title */}
        <Text style={styles.sectionTitle}>Travel Policy Report</Text>

        {/* Summary Cards */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text>Total Funds Deployed</Text>
            <Text>12,23,234</Text>
          </View>
          <View style={styles.card}>
            <Text>Enrollment Rate</Text>
            <Text>90%</Text>
          </View>
        </View>

        {/* Chart */}
        <View style={styles.chartContainer}>
          <Text>Number of Applications Over the Years (Bar Chart)</Text>
          {chartImage && <Image src={chartImage} />}
        </View>

        {/* Table Data */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>ID</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Stream</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Scholarship</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Purpose of Travel</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Funds</Text>
            </View>
          </View>
          {tableData?.map((row) => (
            <View key={row.id} style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.id}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.Stream}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.Scholarship}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.Purpose_of_Travel}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.Funds}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ReportPDF;
