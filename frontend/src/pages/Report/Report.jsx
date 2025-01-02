import React, { useState } from "react";

import Charts from "../Report/components/charts";
import FilterDataForm from "./components/FilterDataForm";

function Report() {
  const [reportData, setReportData] = useState({
    data: [],
    query: {},
  });
  
  return (
    <main className="flex flex-col p-6">
      <div className="min-w-min bg-white shadow rounded-lg p-6">
        <FilterDataForm setReportData={setReportData} />
        <Charts reportData={reportData} />
      </div>
    </main>
  );
}

export default Report;
