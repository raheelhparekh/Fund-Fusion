// import React from 'react'
// import AllChartsPage from './components/AllCharts'

// function Report() {
//   return (
//     <AllChartsPage />
//   )
// }

// export default Report
import React from "react";

import Charts from "../Report/components/charts";
import FilterDataForm from "./components/FilterDataForm";

function Report() {
  return (
    <main className="flex flex-col p-6">
      <div className="min-w-min bg-white shadow rounded-lg p-6">
        <FilterDataForm />
        <Charts />
      </div>
    </main>
  );
}

export default Report;
