import React, { useState } from "react";
import Loading from "../../components/Loading";
import Charts from "../Report/components/charts";
import FilterDataForm from "./components/FilterDataForm";

function Report() {
  const [reportData, setReportData] = useState({
    data: [],
    query: {},
  });
  const [loading, setLoading] = useState(false);
  return (
    <main className="flex flex-col p-6">
      <div className="bg-white shadow rounded-lg p-6 w-full">
        <FilterDataForm setReportData={setReportData} setLoading={setLoading} />
        {loading ? <Loading /> : <Charts reportData={reportData} />}
      </div>
    </main>
  );
}

export default Report;
