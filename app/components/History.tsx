import React from "react";

const History = () => {
  const data = [
    {
      source: "Embermail.ai",
      result: "Shanna@melissa.tv",
      name: "Cooper Press",
      user: "Joeburg",
      credits: "1 unit",
      type: "Single email",
      date: "Jun 24, 2024",
      status: "pending",
      buttonText: "Validate email"
    },
    {
      source: "Embermail.ai",
      result: "Shanna@melissa.tv",
      name: "Cooper Press",
      user: "Joeburg",
      credits: "1 unit",
      type: "Single email",
      date: "Jun 24, 2024",
      status: "valid",
      buttonText: "VALID"
    },
    {
      source: "Embermail.ai",
      result: "Shanna@melissa.tv",
      name: "Cooper Press",
      user: "Joeburg",
      credits: "1 unit",
      type: "Single email",
      date: "Jun 24, 2024",
      status: "pending",
      buttonText: "View results"
    },
    {
      source: "Embermail.ai",
      result: "Shanna@melissa.tv",
      name: "Cooper Press",
      user: "Joeburg",
      credits: "1 unit",
      type: "Single email",
      date: "Jun 24, 2024",
      status: "invalid",
      buttonText: "INVALID"
    },
    {
      source: "Embermail.ai",
      result: "Shanna@melissa.tv",
      name: "Cooper Press",
      user: "Joeburg",
      credits: "1 unit",
      type: "Single email",
      date: "Jun 24, 2024",
      status: "pending",
      buttonText: "Validate email"
    },
    {
      source: "Embermail.ai",
      result: "Shanna@melissa.tv",
      name: "Cooper Press",
      user: "Joeburg",
      credits: "1 unit",
      type: "Single email",
      date: "Jun 24, 2024",
      status: "valid",
      buttonText: "VALID"
    },
    {
      source: "Embermail.ai",
      result: "Shanna@melissa.tv",
      name: "Cooper Press",
      user: "Joeburg",
      credits: "1 unit",
      type: "Single email",
      date: "Jun 24, 2024",
      status: "pending",
      buttonText: "Validate email"
    },
    {
      source: "Embermail.ai",
      result: "Shanna@melissa.tv",
      name: "Cooper Press",
      user: "Joeburg",
      credits: "1 unit",
      type: "Single email",
      date: "Jun 24, 2024",
      status: "pending",
      buttonText: "View results"
    },
    {
      source: "Embermail.ai",
      result: "Shanna@melissa.tv",
      name: "Cooper Press",
      user: "Joeburg",
      credits: "1 unit",
      type: "Single email",
      date: "Jun 24, 2024",
      status: "invalid",
      buttonText: "INVALID"
    },
  ];

  const renderTableHeader = () => (
    <tr>
      <th scope="col" className="text-gray-600 px-3 py-3">Source</th>
      <th scope="col" className="text-gray-600 px-3 py-3">Result</th>
      <th scope="col" className="text-gray-600 px-3 py-3">Name</th>
      <th scope="col" className="text-gray-600 px-3 py-3">User</th>
      <th scope="col" className="text-gray-600 px-3 py-3">Credits</th>
      <th scope="col" className="text-gray-600 px-3 py-3">Type</th>
      <th scope="col" className="text-gray-600 px-3 py-3">Date</th>
      <th scope="col" className="text-gray-600 px-3 py-3"></th>
    </tr>
  );

  const getStatusStyles = (status:any) => {
    switch (status) {
      case 'valid':
        return 'bg-green-100 border-green-500 text-green-500';
      case 'invalid':
        return 'bg-red-100 border-red-500 text-red-500';
      default:
        return 'border-red-500 text-red-500';
    }
  };

  return (
    <div className="w-full">
      <div className="relative overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="text-left capitalize font-semibold bg-gray-100">
            {renderTableHeader()}
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b text-black font-semibold">
                <td className="px-3 py-4">{item.source}</td>
                <td className="px-3 py-4">{item.result}</td>
                <td className="px-3 py-4">{item.name}</td>
                <td className="px-3 py-4">{item.user}</td>
                <td className="px-3 py-4">{item.credits}</td>
                <td className="px-3 py-4">{item.type}</td>
                <td className="px-3 py-4">{item.date}</td>
                <td className="py-2 px-2 flex justify-center items-center">
                  <button className={`py-2 px-2 md:px-1 w-full text-xs rounded-lg border ${getStatusStyles(item.status)}`}>
                    {item.buttonText}
                  </button>
                </td>
              </tr>
            ))}
     <tr>
     <td>
      <div className="flex justify-center gap-2 pt-6 py-2">
        <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">Prev</button>
        <button className="px-4 py-2 text-sm border rounded-lg bg-gray-50">1</button>
        <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">Next</button>
      </div>
            </td>
     </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;