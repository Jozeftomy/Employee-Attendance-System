import { EmployeeManagementTable} from "@/components/EmployeeManagementTable";
import { Topbar } from "@/components/Topbar";

const page = () => {
  return (
    <div className="min-h-screen bg-white p-4 space-y-6">
    <Topbar/>
    <div className="mt-20 flex items-center space-x-2 text-md font-semibold font-manrope">
  <span className="text-[#00000080]">Dashboard</span>
  <span className="text-[#00000080]">/</span>
  <span className="text-[#465DFE]">Employee</span>
</div>


    <div className="space-y-4 mt-15">
    <EmployeeManagementTable />
    </div>
    </div>
  )
}

export default page

