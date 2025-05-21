"use client";

import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

type Props = {
  onClick: () => void;
};

export function AddEmployeeButton({ onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-md bg-[#465DFE] text-white px-4 py-3 text-sm font-bold"
    >
      <UserPlus size={18} />
      Add Employee
    </Button>
  );
}
