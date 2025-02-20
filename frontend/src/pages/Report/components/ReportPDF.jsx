import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

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
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "#f2f2f2",
    padding: 5,
    textAlign: "center",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 1,
    borderBottomWidth: 1,
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
  image: {
    width: 400,
    height: 300,
  },
});

// Create Document Component
const ReportPDF = ({ tableData, chartImages }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title */}
        <Text style={styles.sectionTitle}>Travel Policy Report</Text>

        {/* Summary Cards */}
        {/* <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text>Total Funds Deployed</Text>
            <Text>12,23,234</Text>
          </View>
          <View style={styles.card}>
            <Text>Enrollment Rate</Text>
            <Text>90%</Text>
          </View>
        </View> */}

        {/* Table */}
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
                <Text style={styles.tableCell}>{row.Funds}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Charts */}
        {chartImages?.barChart && (
          <Image src={chartImages.barChart} style={styles.image} />
        )}
        {chartImages?.pieChart1 && (
          <Image src={chartImages.pieChart1} style={styles.image} />
        )}

        {chartImages?.pieChart2 && (
          <Image src={chartImages.pieChart2} style={styles.image} />
        )}
      </Page>
    </Document>
  );
};

export default ReportPDF;
