"use client"
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const History = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const usersPerPage = 2;

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const totalResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
      setTotalUsers(totalResponse.data.length);

      const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
          _page: currentPage,
          _limit: usersPerPage
        }
      });
      
      setUsers(res.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }
  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }
  const renderTableHeader = () => (
    <tr>
      <th scope="col" className="text-gray-600 w-[10%] px-3 py-3">Source</th>
      <th scope="col" className="text-gray-600 px-3 py-3">Result</th>
      <th scope="col" className="text-gray-600 px-3 py-3">Name</th>
      <th scope="col" className="text-gray-600 px-3 py-3">User</th>
      <th scope="col" className="text-gray-600 px-3 py-3">Credits</th>
      <th scope="col" className="text-gray-600 px-3 py-3">Type</th>
      <th scope="col" className="text-gray-600 px-3 py-3">City</th>
      <th scope="col" className="text-gray-600 px-3 py-3"></th>
    </tr>
  );


  return (
    <div className="w-full ">
      <div className="relative overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="text-left capitalize font-semibold bg-gray-100">
            {renderTableHeader()}
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-3">
              <div>
      {loading && <p className="text-green-500 mb-4">Loading...</p>}
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      </div>
              </td>
            </tr>
            {users.map((user:any) => (
              <tr key={user.id} className="border-b text-black font-semibold">
                <td className=" px-3 py-4 whitespace-nowrap">{user.website}</td>
                <td className="px-3 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-3 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-3 py-4 whitespace-nowrap">{user.company.name}</td>
                <td className="px-3 py-4 whitespace-nowrap">{user.address.street}</td>
                <td className="px-3 py-4 whitespace-nowrap">{user.address.suite}</td>
                <td className="px-3 py-4 whitespace-nowrap">{user.address.city}</td>
                <td className="py-2 px-2 flex justify-center items-center">
                  <button className={`py-2 px-2 md:px-1 w-full text-xs whitespace-nowrap rounded-lg border border-red-500 text-red-500`}>
                    Validate email
                  </button>
                </td>
              </tr>
            ))}
     <tr>
     <td className="py-5 px-3">
       <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious  onClick={handlePrev}
              className={ currentPage <= 1 ? 'pointer-events-none bg-gray-100 text-gray-500' : 'cursor-pointer'}
             />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive className="bg-red-200 border border-red-500 text-red-500 hover:border-0"> {currentPage}</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext  onClick={handleNext}
              className={currentPage >= totalPages ? ' opacity-100 cursor-pointer bg-red-200 border border-red-500 text-red-500 hover:border-0' : 'pointer-events-none'} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
            </td>
     </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;