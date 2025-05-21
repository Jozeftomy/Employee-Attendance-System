"use client";
import { useState } from "react";
import { Topbar } from "@/components/Topbar";
import { Search } from "lucide-react";
import { AddEmployeeButton } from "@/components/AddEmployeeButton";
import { Input } from "@/components/ui/input";

const Page = () => {

  return (
    <div className="min-h-screen bg-white p-4 space-y-6">
      <Topbar />

      <div className="mt-20 flex items-center space-x-2 text-md font-semibold font-manrope">
        <span className="text-[#00000080]">Dashboard</span>
        <span className="text-[#00000080]">/</span>
        <span className="text-[#465DFE]">Attendance</span>
      </div>

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

          <AddEmployeeButton  />
        </div>
      </div>
    </div>
  );
};

export default Page;
