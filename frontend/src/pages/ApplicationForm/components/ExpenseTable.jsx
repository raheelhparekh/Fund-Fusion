import React, { useState } from "react";
import { useTable } from "react-table";
import axios from "axios";
import {
  MdDangerous,
  MdDeleteOutline,
  MdEdit,
  MdVerified
} from "react-icons/md";
import PdfActions from "../../ApplicationView/PdfActions";
import { useParams, useRouteLoaderData } from "react-router-dom";

const ExpenseTable = ({
  expenses,
  setPdfIsVisible,
  setFileUrl,
  deleteExpense,
  editExpense,
  editStatus,
  disabled,
}) => {
  const applicationId = useParams().applicationId;
  const applicationStatus = useParams().status;
  const { role } =
    useRouteLoaderData("Applicant-Root")?.data ||
    useRouteLoaderData("Validator-Root")?.data;

  // const handleExpenseAction = async (expense, action) => {
  //   try {
  //     await axios.put(
  //       `${import.meta.env.VITE_APP_API_URL}/validator/expenseAction`,
  //       { expense, action, applicationId },
  //       { withCredentials: true }
  //     );
  //     alert(`Proof ${action}`);
  //     window.location.reload();
  //   } catch (error) {
  //     console.error("Error performing expense action:", error);
  //   }
  // };

  const columns = React.useMemo(() => {
    // Common columns
    const baseColumns = [
      {
        Header: "Expense Name",
        accessor: "expenseName",
      },
      {
        Header: "Expense Details",
        accessor: "expenseDetails",
      },
      {
        Header: "Amount",
        accessor: "expenseAmount",
        Cell: ({ value }) => `₹${value}`,
      },
      {
        Header: "Expense Proof",
        accessor: "expenseProof",
        Cell: ({ value, row }) => {
          if (applicationId) {
            return (
              <div className="max-w-72 m-auto">
                <PdfActions
                  fileName={"expenseProof" + row.id}
                  applicationId={applicationId}
                />
              </div>
            );
          } else if (value && value.name) {
            return (
              <button
                type="button"
                onClick={() => {
                  setPdfIsVisible(true);
                  setFileUrl(URL.createObjectURL(value));
                }}
                className="text-blue-600 hover:text-blue-700 focus:outline-none"
              >
                View Document
              </button>
            );
          }
          return "No Document";
        },
      },
    ];

    // Add the "Delete" column only if 'disabled' is false
    if (role === "Applicant" && !disabled) {
      baseColumns.push({
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          row?.original?.proofStatus != "verified" ?(
          <div className="flex justify-center space-x-7">
            <div className="text-center">
              <button
                type="button"
                onClick={() => deleteExpense(row.original)}
                className="bg-red-600 text-white py-2 px-3 rounded-lg hover:bg-red-700 transition-colors focus:outline-none"
              >
                <MdDeleteOutline />
              </button>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => editExpense(row.original)}
                className="bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none"
              >
                <MdEdit />
              </button>
            </div>
          </div>) : <h1 className="text-green-600">Approved</h1>
        ),
      });
    }

    if (role === "Validator") {
      baseColumns.push({
        Header: "Approval",
        accessor: "approval",
        Cell: ({ row }) => {
          const isVerified = row?.original?.proofStatus === "verified";
          const isRejected = row?.original?.proofStatus === "rejected";
          const status = isVerified ? "verified" : isRejected ? "rejected" : "pending";
          const [hoverSide, setHoverSide] = useState(null);
          
          return (
            <div className="flex flex-col items-center justify-center py-2">
              <div className="relative flex items-center w-36 sm:w-48 cursor-pointer my-5 group">
                {/* Status indicator text */}
                <div className="absolute -top-5 left-0 w-full flex justify-between text-xs font-medium">
                  <span className={`${status === "verified" ? "text-green-600 font-bold" : "text-gray-500"}`}>Approved</span>
                  <span className={`${status === "pending" ? "text-gray-600 font-bold" : "text-gray-500"}`}>Pending</span>
                  <span className={`${status === "rejected" ? "text-red-600 font-bold" : "text-gray-500"}`}>Rejected</span>
                </div>
                
                {/* Track background with hover effect */}
                <div className={`w-full h-8 sm:h-10 rounded-full bg-gradient-to-r from-green-600 via-gray-300 to-red-600 p-1 group-hover:shadow-md transition-all duration-300 relative overflow-hidden`}>
                  {/* Hover indicators */}
                  {hoverSide === 'left' && (
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-green-300 bg-opacity-30 rounded-l-full pointer-events-none z-0"></div>
                  )}
                  {hoverSide === 'right' && (
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-red-300 bg-opacity-30 rounded-r-full pointer-events-none z-0"></div>
                  )}
                  
                  {/* Sliding knob */}
                  <div 
                    className={`absolute h-6 sm:h-8 w-10 sm:w-12 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center transform ${
                      status === "verified" ? "left-1" : 
                      status === "rejected" ? "right-1" : 
                      "left-1/2 -translate-x-1/2"
                    } group-hover:shadow-xl z-10`}
                  >
                    {status === "verified" && <MdVerified className="text-green-600" size={18} />}
                    {status === "rejected" && <MdDangerous className="text-red-600" size={18} />}
                    {status === "pending" && <span className="text-sm text-gray-600 font-medium">?</span>}
                  </div>
                </div>
                
                {/* Clickable buttons overlaid on top */}
                <button
                  type="button"
                  onClick={() => editStatus(row.original, "verified")}
                  onMouseEnter={() => setHoverSide('left')}
                  onMouseLeave={() => setHoverSide(null)}
                  className="absolute left-0 w-1/2 h-full opacity-0 z-20"
                  aria-label="Approve"
                  disabled={applicationStatus != "pending"}
                />
                <button
                  type="button"
                  onClick={() => editStatus(row.original, "rejected")}
                  onMouseEnter={() => setHoverSide('right')}
                  onMouseLeave={() => setHoverSide(null)}
                  className="absolute right-0 w-1/2 h-full opacity-0 z-20"
                  aria-label="Reject"
                  disabled={applicationStatus != "pending"}
                />
              </div>
              
              {/* Status text */}
              <p className={`text-xs ${
                status === "verified" ? "text-green-600 font-medium" : 
                status === "rejected" ? "text-red-600 font-medium" : 
                "text-gray-500"
              }`}>
                {status === "verified" ? "Expense Approved" : 
                 status === "rejected" ? "Expense Rejected" : 
                 "Click to change status"}
              </p>
            </div>
          );
        },
      });
    }

    return baseColumns;
  }, [deleteExpense, setPdfIsVisible, setFileUrl, disabled]);

  // Using the useTable hook to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: expenses || [], // Data passed to the table
    });

  return (
    <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Expense Breakdown
      </h2>

      {/* Wrapping the table inside a scrollable div for responsiveness */}
      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full bg-white border border-gray-300 table-auto"
        >
          {/* Table header */}
          <thead className="bg-gray-100 sticky top-0 z-10">
            {headerGroups.map((headerGroup) => {
              const { key, ...restHeaderProps } =
                headerGroup.getHeaderGroupProps(); // Destructure `key` here
              return (
                <tr key={key} {...restHeaderProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...restColumnProps } = column.getHeaderProps(); // Destructure `key` here
                    return (
                      <th
                        key={column.id} // Explicitly add key for th
                        {...restColumnProps}
                        className="px-3 py-2 text-center text-sm font-bold text-gray-600 border-b border-gray-300"
                      >
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>

          {/* Table body */}
          <tbody {...getTableBodyProps()} className="text-sm text-gray-700">
            {rows.map((row) => {
              prepareRow(row);
              const { key, ...restRowProps } = row.getRowProps(); // Destructure `key` here
              return (
                <tr key={key} {...restRowProps} className="hover:bg-gray-50">
                  {row.cells.map((cell) => {
                    const { key, ...restCellProps } = cell.getCellProps(); // Destructure `key` here
                    return (
                      <td
                        key={cell.column.id} // Explicitly add key for td
                        {...restCellProps}
                        className="px-3 py-2 border-t border-b border-gray-300"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
