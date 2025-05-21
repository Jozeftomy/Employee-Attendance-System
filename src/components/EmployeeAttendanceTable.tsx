"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Employee {
  id: string;
  name: string;
  department: string;
  status: "Absent" | "Present" | "Half Day" | "Online";
  checkIn: string;
  checkOut: string;
  action: string;
}

const employees: Employee[] = [
  { id: "Emp 01", name: "Kiran", department: "IT", status: "Absent", checkIn: "-", checkOut: "-", action: "Absent" },
  { id: "Emp 02", name: "Karthi", department: "HR", status: "Present", checkIn: "09:12", checkOut: "05:27", action: "Present" },
  { id: "Emp 03", name: "Surya", department: "Marketing", status: "Half Day", checkIn: "09:12", checkOut: "05:27", action: "Half Day" },
  { id: "Emp 04", name: "Kajal", department: "IT", status: "Online", checkIn: "09:12", checkOut: "05:27", action: "Online" },
  { id: "Emp 05", name: "Navya", department: "HR", status: "Present", checkIn: "09:12", checkOut: "05:27", action: "Present" },
  { id: "Emp 06", name: "Arjun", department: "IT", status: "Present", checkIn: "09:12", checkOut: "05:27", action: "Present" },
  { id: "Emp 07", name: "Arjun", department: "IT", status: "Present", checkIn: "09:12", checkOut: "05:27", action: "Present" },
];

export default function EmployeeAttendanceTable() {
  return (
    <div className="w-[1243px] h-[488px] p-6 bg-white rounded-xl ">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Employee Attendance</h2>
      <Table className="w-full border border-gray-200 rounded-lg">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="px-4 py-3">Emp ID</TableHead>
            <TableHead className="px-4 py-3">Name</TableHead>
            <TableHead className="px-4 py-3">Department</TableHead>
            <TableHead className="px-4 py-3">Status</TableHead>
            <TableHead className="px-4 py-3">Check-In</TableHead>
            <TableHead className="px-4 py-3">Check-Out</TableHead>
            <TableHead className="px-4 py-3">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="px-4 py-3">{employee.id}</TableCell>
              <TableCell className="px-4 py-3">{employee.name}</TableCell>
              <TableCell className="px-4 py-3">{employee.department}</TableCell>
              <TableCell className={`px-4 py-3 font-medium ${
                employee.status === "Present" ? "text-green-600" :
                employee.status === "Absent" ? "text-red-600" :
                employee.status === "Half Day" ? "text-yellow-600" : "text-blue-600"
              }`}>
                {employee.status}
              </TableCell>
              <TableCell className="px-4 py-3">{employee.checkIn}</TableCell>
              <TableCell className="px-4 py-3">{employee.checkOut}</TableCell>
              <TableCell className="px-4 py-3">{employee.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-3">
        <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">Previous</button>
        <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">1</button>
        <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">2</button>
        <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">3</button>
        <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">Next</button>
      </div>
    </div>
  );
}
