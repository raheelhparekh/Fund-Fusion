import React from "react";

const Table = ({ tableData }) => {

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Stream</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Scholarship</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Purpose of Travel</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Funds</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row) => (
            <tr key={row.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.Stream}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.Scholarship}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.Purpose_of_Travel}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.Funds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
