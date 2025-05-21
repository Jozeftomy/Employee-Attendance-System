"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function AddEmployeeButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/add-employee")}
      className="bg-[#465DFE] text-white hover:bg-[#3a4ed8] hover:cursor-pointer"
    >
      Add Employee
    </Button>
  );
}
