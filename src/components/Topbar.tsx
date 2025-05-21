"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineAccountCircle, MdMenu, MdClose } from "react-icons/md";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Employees", path: "/employees" },
  { label: "Attendance", path: "/attendance" },
  { label: "Report", path: "/report" },
];

export function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNav = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <header className="w-full h-[55px] bg-white shadow fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-6">
      <div
        className="text-[20px] md:text-[24px] font-bold text-black font-manrope cursor-pointer"
        onClick={() => router.push("/")}
      >
        Logo
      </div>

      <nav className="hidden md:flex gap-2 items-center border border-[#00000033] rounded-lg px-2 py-1 bg-white">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNav(item.path)}
            className="px-4 py-2 rounded-md text-sm font-medium text-[#444] hover:text-[#465DFE] hover:bg-[#F2F4FF] hover:cursor-pointer transition"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#F2F4FF] text-xl text-[#444]">
          <MdOutlineAccountCircle />
        </div>

        <button
          className="md:hidden text-2xl text-[#444]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[55px] left-0 w-full bg-white shadow-md z-40 md:hidden flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.path)}
              className="px-4 py-3 text-left text-sm font-medium text-[#444] hover:bg-[#F2F4FF] hover:text-black transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}


