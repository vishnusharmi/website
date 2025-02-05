import React, { useState } from "react";
import ProjectFilter from "./Filters";
const softwareProjects = [
  {
    id: 1,
    task: "E-commerce Platform",
    status: "In Progress",
    ClientName: "Alice Johnson",
    Date: "00/00/0000",
    Description: "Frontend redesign",
  },
  {
    id: 2,
    task: "AI Chatbot",
    status: "Open",
    ClientName: "Bob Smith",
    Date: "00/00/0000",
    Description: "Integrate NLP model",
  },
  {
    id: 3,
    task: "Mobile Banking App",
    status: "Completed",
    ClientName: "Charlie Brown",
    Date: "00/00/0000",
    Description: "Security audit done",
  },
  {
    id: 4,
    task: "Cloud Storage System",
    status: "In Progress",
    ClientName: "David Lee",
    Date: "00/00/0000",
    Description: "Database optimization",
  },
  {
    id: 5,
    task: "Healthcare Management System",
    status: "On Hold",
    ClientName: "Emma Davis",
    Date: "00/00/0000",
    Description: "Waiting for compliance approval",
  },
  {
    id: 6,
    task: "Online Learning Portal",
    status: "Open",
    ClientName: "Frank Wilson",
    Date: "00/00/0000",
    Description: "LMS features update",
  },
  {
    id: 7,
    task: "Project Management Tool",
    status: "In Progress",
    ClientName: "Grace Martinez",
    Date: "00/00/0000",
    Description: "Task automation",
  },
  {
    id: 8,
    task: "Cybersecurity Dashboard",
    status: "Open",
    ClientName: "Henry White",
    Date: "00/00/0000",
    Description: "Threat detection module",
  },
  {
    id: 9,
    task: "Social Media Analytics",
    status: "On Hold",
    ClientName: "Isabella Green",
    Date: "00/00/0000",
    Description: "API rate limit issue",
  },
  {
    id: 10,
    task: "HR Management System",
    status: "Completed",
    ClientName: "Jack Taylor",
    Date: "00/00/0000",
    Description: "Final deployment",
  },
  {
    id: 11,
    task: "Social Media Analytics",
    status: "On Hold",
    ClientName: "Isabella Green",
    Date: "00/00/0000",
    Description: "API rate limit issue",
  },

];

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = softwareProjects.filter((project) =>
    project.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 mt-12 bg-gray-900 vh-100">
      <>
        <ProjectFilter />
      </>
      {/* Project Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 bg-gray-900 text-[#d8dedd] rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-left text-white">
              <th className="p-3 border border-gray-700">Project Name</th>
              <th className="p-3 border border-gray-700">Status</th>
              <th className="p-3 border border-gray-700">Client Name</th>
              <th className="p-3 border border-gray-700">Date</th>
              <th className="p-3 border border-gray-700">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-800">
                <td className="p-3 border border-gray-700">{project.task}</td>
                <td className="p-3 border border-gray-700">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-semibold ${
                      project.status === "Open"
                        ? "bg-blue-200 text-blue-800"
                        : project.status === "In Progress"
                        ? "bg-yellow-200 text-yellow-800"
                        : project.status === "On Hold"
                        ? "bg-orange-200 text-orange-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="p-3 border border-gray-700">
                  <span className="px-2 py-1 rounded-md  font-semibold text-#d8dedd">
                    {project.ClientName}
                  </span>
                </td>
                <td className="p-3 border border-gray-700">{project.Date}</td>
                <td className="p-3 border border-gray-700">
                  {project.Description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
