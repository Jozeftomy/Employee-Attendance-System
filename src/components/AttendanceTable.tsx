import React from 'react';
import { Employee } from '@/components/types';

interface Props {
  employees: Employee[];
}

const AttendanceTable: React.FC<Props> = ({ employees }) => {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2">Emp ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Department</th>
          <th className="p-2">Status</th>
          <th className="p-2">Check-In</th>
          <th className="p-2">Check-Out</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id} className="border-t">
            <td className="p-2">{emp.id}</td>
            <td className="p-2">{emp.name}</td>
            <td className="p-2">{emp.department}</td>
            <td className="p-2">
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${
                  emp.status === 'Present'
                    ? 'bg-green-100 text-green-700'
                    : emp.status === 'Absent'
                    ? 'bg-red-100 text-red-700'
                    : emp.status === 'Half Day'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {emp.status}
              </span>
            </td>
            <td className="p-2">{emp.checkIn ?? '-'}</td>
            <td className="p-2">{emp.checkOut ?? '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
