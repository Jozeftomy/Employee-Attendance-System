"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const employees = [
  { id: "Emp 01", name: "Kiran", dept: "IT", status: "Absent", checkIn: "-", checkOut: "-", action: "Absent" },
  { id: "Emp 02", name: "Karthi", dept: "HR", status: "Present", checkIn: "09:12", checkOut: "05:27", action: "Present" },
  { id: "Emp 03", name: "Surya", dept: "Marketing", status: "On Leave", checkIn: "09:12", checkOut: "05:27", action: "Present" },
  { id: "Emp 04", name: "Kajal", dept: "IT", status: "Present", checkIn: "09:12", checkOut: "05:27", action: "Present" },
  { id: "Emp 05", name: "Navya", dept: "HR", status: "Present", checkIn: "09:12", checkOut: "05:27", action: "Present" },
  { id: "Emp 06", name: "Arjun", dept: "IT", status: "Present", checkIn: "09:12", checkOut: "05:27", action: "Present" },
  { id: "Emp 07", name: "Arjun", dept: "IT", status: "Present", checkIn: "09:12", checkOut: "05:27", action: "Present" },
];

const rowsPerPage = 5;

export function EmployeeTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(employees.length / rowsPerPage);
  const startIdx = (currentPage - 1) * rowsPerPage;
  const currentEmployees = employees.slice(startIdx, startIdx + rowsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="relative w-full p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-xl md:text-2xl font-semibold text-[#1E1E1E]">Employee Attendance Table</p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-[260px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input className="w-full pl-10 bg-transparent border border-gray-300 rounded-md" placeholder="Search" />
          </div>

          <Button className="flex items-center justify-center gap-2 rounded-md bg-[#465DFE] text-white px-4 py-3 text-sm font-bold">
            <UserPlus size={18} />
            Add Employee
          </Button>
        </div>
      </div>
      <div className="mt-6 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Emp ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Check-In</TableHead>
              <TableHead>Check-Out</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentEmployees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.dept}</TableCell>
                <TableCell>
                  <span
                    className={
                      emp.status === "Present"
                        ? "text-green-600"
                        : emp.status === "Absent"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }
                  >
                    {emp.status}
                  </span>
                </TableCell>
                <TableCell>{emp.checkIn}</TableCell>
                <TableCell>{emp.checkOut}</TableCell>
                <TableCell>{emp.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="outline"
          className="px-4 py-2 text-sm"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </div>
        <Button
          variant="outline"
          className="px-4 py-2 text-sm"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
