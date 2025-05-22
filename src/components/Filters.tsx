import React from 'react';

interface Props {
  department: string;
  setDepartment: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
}

const Filters: React.FC<Props> = ({ department, setDepartment, status, setStatus }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select
        className="border rounded p-1"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Department: All</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Marketing">Marketing</option>
      </select>

      <select
        className="border rounded p-1"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Status: All</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Half Day">Half Day</option>
        <option value="Online">Online</option>
      </select>
    </div>
  );
};

export default Filters;
