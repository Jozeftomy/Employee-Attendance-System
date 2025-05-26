"use client";
import { EditEmployeeDialog } from "@/components/EditEmployeeDialog ";
import { useState, useEffect } from "react";
import { Eye, Pencil, Trash2, Search, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AddEmployeeButton } from "./AddEmployeeButton";
import { BaseUrl } from "@/app/services/api";

type Employee = {
  id: string;
  name: string;
  dept: string;
  email: string;
  mobile: string;
};

export function EmployeeManagementTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewEmployee, setViewEmployee] = useState<Employee | null>(null);
  const [editEmployee, setEditEmployee] = useState<Employee | null>(null);

  const rowsPerPage = 5;
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = employees.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(employees.length / rowsPerPage);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch(`${BaseUrl}/employee/all`);
        const data = await res.json();
        setEmployees(data); 
      } catch (error) {
        console.error("Failed to fetch employees", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${BaseUrl}/employee/delete-employee`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error("Failed to delete employee");
      }

      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-4">
        <p className="text-xl md:text-2xl font-semibold text-[#1E1E1E]">
          Employee Attendance Table
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-[260px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <Input
              className="w-full pl-10 bg-transparent border border-gray-300 rounded-md h-[40px]"
              placeholder="Search"
            />
          </div>

          <AddEmployeeButton />
        </div>
      </div>

      <div className="w-full overflow-x-auto bg-white rounded-xl p-2 sm:p-4">
        <table className="min-w-[800px] w-full text-left">
          <thead className="bg-[#f0f4ff] text-[#333] text-sm font-semibold">
            <tr>
              <th className="px-4 sm:px-6 py-3 border border-[#007bff]">Emp ID</th>
              <th className="px-4 sm:px-6 py-3 border border-[#007bff]">Name</th>
              <th className="px-4 sm:px-6 py-3 border border-[#007bff]">Department</th>
              <th className="px-4 sm:px-6 py-3 border border-[#007bff]">Email ID</th>
              <th className="px-4 sm:px-6 py-3 border border-[#007bff]">Mobile</th>
              <th className="px-4 sm:px-6 py-3 border border-[#007bff] text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-[#333]">
            {currentRows.map((emp) => (
              <tr key={emp.id} className="border border-[#007bff]">
                <td className="px-4 sm:px-6 py-3 border border-[#007bff]">{emp.id}</td>
                <td className="px-4 sm:px-6 py-3 border border-[#007bff]">{emp.name}</td>
                <td className="px-4 sm:px-6 py-3 border border-[#007bff]">{emp.dept}</td>
                <td className="px-4 sm:px-6 py-3 border border-[#007bff]">{emp.email}</td>
                <td className="px-4 sm:px-6 py-3 border border-[#007bff]">{emp.mobile}</td>
                <td className="px-4 sm:px-6 py-3 border border-[#007bff]">
                  <div className="flex justify-center gap-4">
                    <Eye size={18} className="text-[#465DFE] cursor-pointer" onClick={() => setViewEmployee(emp)} />
                    <Pencil size={18} className="text-[#FFA500] cursor-pointer" onClick={() => setEditEmployee(emp)} />
                    <Trash2
                      size={18}
                      className="text-[#FF4D4F] cursor-pointer"
                      onClick={() => handleDelete(emp.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4 gap-1 sm:gap-2 flex-wrap items-center text-sm">
        <button
          className="px-2 py-1 text-[#465DFE] disabled:text-gray-400"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt; Previous
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 rounded ${
              currentPage === idx + 1 ? "bg-[#465DFE] text-white" : "text-[#465DFE] hover:bg-gray-100"
            }`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}

        <button
          className="px-2 py-1 text-[#465DFE] disabled:text-gray-400"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>

      <Dialog open={!!viewEmployee} onOpenChange={() => setViewEmployee(null)}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Employee Details</DialogTitle>
          </DialogHeader>
          {viewEmployee && (
            <div className="space-y-2 text-sm">
              <p><strong>ID:</strong> {viewEmployee.id}</p>
              <p><strong>Name:</strong> {viewEmployee.name}</p>
              <p><strong>Department:</strong> {viewEmployee.dept}</p>
              <p><strong>Email:</strong> {viewEmployee.email}</p>
              <p><strong>Mobile:</strong> {viewEmployee.mobile}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <EditEmployeeDialog editEmployee={editEmployee} setEditEmployee={setEditEmployee} />
    </div>
  );
}
