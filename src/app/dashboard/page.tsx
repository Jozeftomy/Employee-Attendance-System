import { Topbar } from "@/components/Topbar";
import { AttendanceSummary } from "@/components/AttendanceSummary";
import { EmployeeTable } from "@/components/EmployeeTable";

export default function page() {
  return (
    <div className="min-h-screen bg-white p-4 space-y-6">
    <Topbar/>
    <div className="space-y-4">
    <AttendanceSummary/>
    </div>
    <EmployeeTable />
    </div>
  )
}
