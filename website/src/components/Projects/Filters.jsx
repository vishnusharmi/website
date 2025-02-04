import React, { useState } from "react";

export default function ProjectFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-start  m-[1%_2%] gap-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow p-4 border rounded-lg bg-gray-700 text-[#d8dedd] 
                   focus:ring-2 focus:ring-[#FFFFFF.] focus:outline-none"
      />

      {/* Filter Bar */}
      <div className="w-72 p-4 border rounded-lg bg-gray-700   text-[#d8dedd]   shadow-md ">
        {/* Header Section */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between w-full items-center text-m font-semibold text-[#d8dedd]"
        >
          Filter Projects
          {isOpen ? (
            <svg
              className="w-5 h-5 text-[#d8dedd]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-[#d8dedd]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          )}
        </button>

        {/* Expandable Section */}
        {isOpen && (
          <div className="mt-4 space-y-4 absolute top-37 right-7 z-50 bg-gray-900 pr-13 pl-13">
            {/* Select by Year */}
            <div>
              <h3 className="font-bold text-[#d8dedd]">Select by Year</h3>
              <select className="w-full mt-2 p-2 border rounded-md bg-gray-800 text-[#d8dedd]">
                <option value="">All Years</option>
                {Array.from(
                  { length: 2024 - 2000 + 1 },
                  (_, i) => 2024 - i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Select by Project Type */}
            <div>
              <h3 className="font-bold text-[#d8dedd]">
                Select by Project Type
              </h3>
              <div className="mt-2 space-y-2">
                {[
                  "Data Processing",
                  "Automation",
                  "Reporting",
                  "Analytics",
                  "Security",
                ].map((feature) => (
                  <label key={feature} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-gray-500 bg-gray-800 rounded focus:ring-[#d8dedd] text-[#d8dedd]"
                    />
                    <span className="text-[#d8dedd]">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Search by Client Name */}
            <div>
              <h3 className="font-bold text-[#d8dedd]">
                Search by Client Name
              </h3>
              <input
                type="text"
                placeholder="Enter client name"
                className="w-full mt-2 p-2 border rounded-md bg-gray-800 text-[#d8dedd] focus:ring-2 focus:ring-[#d8dedd] focus:outline-none"
              />
            </div>

            {/* Apply Filters Button */}
            <button
              className="w-full py-2 mb-5 px-4 bg-[#2d9719] text-[#d8dedd] font-bold rounded-md 
                   hover:bg-[hsl(109,71%,44%)] hover:text-[#d8dedd] 
                   active:bg-[hsl(109,71%,28%)] "
            >
              Apply Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
