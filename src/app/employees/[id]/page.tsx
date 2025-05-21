"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Employee = {
  id: string;
  name: string;
  dept: string;
  email: string;
  mobile: string;
};

const mockEmployees: Employee[] = [
  { id: "Emp 01", name: "Kiran", dept: "IT", email: "kiran@gmail.com", mobile: "9876543210" },
  { id: "Emp 02", name: "Surya", dept: "HR", email: "surya123@gmail.com", mobile: "9876543210" },
  { id: "Emp 03", name: "Karthi", dept: "Marketing", email: "karthi@gmail.com", mobile: "9876543210" },
  { id: "Emp 04", name: "Kajal", dept: "HR", email: "kajal@gmail.com", mobile: "9876543210" },
];

export default function EmployeeDetailsPage() {
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    if (id) {
      const found = mockEmployees.find((emp) => emp.id === id);
      setEmployee(found || null);
    }
  }, [id]);

  if (!employee) return <p className="p-4">Employee not found.</p>;

  return (
    <div className="max-w-lg mx-auto p-6 space-y-4 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-semibold text-[#1E1E1E]">Employee Details</h2>
      <div className="text-sm space-y-2">
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Department:</strong> {employee.dept}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Mobile:</strong> {employee.mobile}</p>
      </div>
    </div>
  );
}
