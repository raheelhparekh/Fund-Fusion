import React, { useEffect, useState } from "react";
import ReactSearchBox from "react-search-box";
import axios from "axios";

let applicantNamesCache = null;

const Search = ({ value, setValue }) => {
  const [applicantNames, setApplicantNames] = useState([
    { key: "", value: "" },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getApplicants() {
      setIsLoading(true);
      if (!applicantNamesCache) {
        try {
          const res = await axios.get(
            `${import.meta.env.VITE_APP_API_URL}/validator/getApplicantNames`,
            { withCredentials: true }
          );
          if (res.status === 200) {
            applicantNamesCache = res.data;
          }
        } catch (error) {
          console.error("Error fetching applicant names:", error);
        }
      }
      setApplicantNames(applicantNamesCache);
      setIsLoading(false);
    }
    getApplicants();
  }, []);

  if (isLoading) return <p>Loading search suggestions...</p>;

  return (
    <div className="mb-7 p-2 rounded bg-gray-200">
      <div className="flex flex-row items-start justify-start">
        <div className="w-[90%]">
          <ReactSearchBox
            placeholder={`Applicant Name`}
            data={applicantNames}
            onSelect={(record) => setValue(record.item.value)}
            clearOnSelect={false}
            inputFontSize="large"
            fuseConfigs={{ ignoreLocation: true, threshold: 0.3 }}
          />
        </div>
        <button type='button' className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded ml-3" onClick={()=> setValue("")}>
          Clear
        </button>
      </div>
      {value !== "" && <p className="text-gray-600 mt-3 ml-2 text-left">{`Showing Results for ${value}`}</p>}
    </div>
  );
};

export default Search;
