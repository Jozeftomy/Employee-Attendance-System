import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CalendarIcon, CameraIcon } from "lucide-react"
import { useEffect, useState } from "react"

export function EditEmployeeDialog({ editEmployee, setEditEmployee }: any) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    id: "",
    email: "",
    dept: "",
    mobile: "",
    joinedDate: "12 March 2024",
    dob: "18-08-2000",
    address: "123 Main st ny",
    state: "Kerala",
    city: "Ernakulam",
    county: "India",
  })

  // Populate form data when employee is selected
  useEffect(() => {
    if (editEmployee) {
      setFormData({
        firstName: editEmployee.firstName || "",
        lastName: editEmployee.lastName || "",
        id: editEmployee.id || "",
        email: editEmployee.email || "",
        dept: editEmployee.dept || "",
        mobile: editEmployee.mobile || "",
        joinedDate: "12 March 2024", // Can make dynamic if needed
        dob: "18-08-2000", // Can make dynamic if needed
        address: "123 Main st ny",
        state: "Kerala",
        city: "Ernakulam",
        county: "India",
      })
    }
  }, [editEmployee])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    console.log("Saving changes:", formData)
    setEditEmployee(null)
  }

  return (
    <Dialog open={!!editEmployee} onOpenChange={() => setEditEmployee(null)}>
      <DialogContent className="w-[964px] h-auto p-10 rounded-3xl border border-gray-200 bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold mb-4">Edit Employee</DialogTitle>
        </DialogHeader>

        {editEmployee && (
          <div className="grid grid-cols-3 gap-6 text-sm">
           
            <div className="flex justify-center items-start">
              <div className="w-32 h-32 border border-gray-300 rounded-md flex items-center justify-center bg-gray-100">
                <CameraIcon className="w-8 h-8 text-gray-400" />
              </div>
            </div>

            {/* Middle - Left column inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-500 mb-1">First name</label>
                <Input name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">Last name</label>
                <Input name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">Emp ID</label>
                <Input name="id" value={formData.id} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">Email</label>
                <Input name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">Department</label>
                <Input name="dept" value={formData.dept} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">Joined Date</label>
                <div className="relative">
                  <Input name="joinedDate" value={formData.joinedDate} onChange={handleChange} />
                  <CalendarIcon className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Right - Right column inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-500 mb-1">DOB</label>
                <div className="relative">
                  <Input name="dob" value={formData.dob} onChange={handleChange} />
                  <CalendarIcon className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-gray-500 mb-1">Phone no.</label>
                <Input name="mobile" value={formData.mobile} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">Address</label>
                <Input name="address" value={formData.address} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">State</label>
                <Input name="state" value={formData.state} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">City</label>
                <Input name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-500 mb-1">County</label>
                <Input name="county" value={formData.county} onChange={handleChange} />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="ghost"
            className="bg-[#f5f7ff] text-[#465DFE] hover:bg-[#e8edff]"
            onClick={() => setEditEmployee(null)}
          >
            Cancel
          </Button>
          <Button
            className="bg-[#465DFE] hover:bg-[#2d47f7] text-white"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
