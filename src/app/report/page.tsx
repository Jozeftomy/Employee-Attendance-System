'use client';
import React, { useState } from 'react';
import AttendanceTable from '@/components/AttendanceTable';
import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';
import { Employee } from '@/components/types';
import { Topbar } from '@/components/Topbar';

const mockEmployees: Employee[] = [
  { id: 'Emp 01', name: 'Kiran', department: 'IT', status: 'Absent', checkIn: null, checkOut: null },
  { id: 'Emp 02', name: 'Karthi', department: 'HR', status: 'Present', checkIn: '09:12', checkOut: '05:27' },
  { id: 'Emp 03', name: 'Surya', department: 'Marketing', status: 'Half Day', checkIn: '09:12', checkOut: '12:30' },
  { id: 'Emp 04', name: 'Kajal', department: 'IT', status: 'Online', checkIn: '09:00', checkOut: '05:10' },
  { id: 'Emp 05', name: 'Navya', department: 'HR', status: 'Present', checkIn: '09:20', checkOut: '05:02' },
  { id: 'Emp 06', name: 'Arjun', department: 'IT', status: 'Present', checkIn: '09:00', checkOut: '04:57' },
  { id: 'Emp 07', name: 'Arjun', department: 'IT', status: 'Present', checkIn: '09:02', checkOut: '05:27' },
];

const AttendancePage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');

  const filteredEmployees = mockEmployees.filter((emp) => {
    return (
      emp.name.toLowerCase().includes(search.toLowerCase()) &&
      (department === '' || emp.department === department) &&
      (status === '' || emp.status === status)
    );
  });

  return (
    <div className="min-h-screen bg-white px-4 py-6 md:px-8 space-y-6">
      <Topbar />

      <div className="mt-20 text-sm md:text-base flex flex-wrap items-center gap-2 font-semibold font-manrope text-[#00000080]">
        <span>Dashboard</span>
        <span>/</span>
        <span>Employees</span>
        <span>/</span>
        <span className="text-[#465DFE]">Dashboard</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xl sm:text-2xl font-semibold text-[#1E1E1E]">
          Employee Attendance Report
        </p>
        <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded text-sm sm:text-base">
          Download Report
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <Filters
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
      />
      <div className="overflow-x-auto">
        <AttendanceTable employees={filteredEmployees} />
      </div>
    </div>
  );
};

export default AttendancePage;
