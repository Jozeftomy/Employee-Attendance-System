'use client'

import { useState } from 'react'
import { BaseUrl } from '../services/api'

export default function AddEmployee() {
  const [formData, setFormData] = useState({
    empId: '',
    firstName: '',
    lastName: '',
    department: '',
    email: '',
    mobile: '',
    country: '',
    state: '',
    city: '',
    dob: '',
    joiningDate: '',
    photo: null as File | null,
    address: '',
    password: '',
    confirmPassword: ''
  })

  const [showModal, setShowModal] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target
    if (name === 'photo' && files) {
      setFormData({ ...formData, photo: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

    try {
      const formPayload = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formPayload.append(key, value as string | Blob)
        }
      })

      const response = await fetch(`${BaseUrl}/employee/add-employee`, {
        method: 'POST',
        body: formPayload
      })

      const text = await response.text()

      if (!response.ok) {
        console.error('API Error:', text)
        alert('Failed to add employee. Please try again.')
        return
      }

      try {
        const data = JSON.parse(text)
        console.log('Employee added:', data)
      } catch {
        console.warn('Response is not JSON:', text)
      }

      setShowModal(true)
    } catch (error) {
      console.error('Network error:', error)
      alert('Network error. Please try again later.')
    }
  }

  const closeModal = () => setShowModal(false)

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-8">Add Employee</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1">Emp ID</label>
          <input name="empId" type="text" placeholder="Enter your EmpId" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">Last Name</label>
          <input name="lastName" type="text" placeholder="Enter your Last Name" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">First Name</label>
          <input name="firstName" type="text" placeholder="Enter your First Name" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">Email ID</label>
          <input name="email" type="email" placeholder="Enter your Email ID" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">Department</label>
          <select name="department" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded">
            <option value="">--select--</option>
            <option value="HR">HR</option>
            <option value="Tech">IT</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Mobile No</label>
          <input name="mobile" type="text" placeholder="Enter your Mobile No" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">Country</label>
          <input name="country" type="text" placeholder="Enter your Country" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">State</label>
          <input name="state" type="text" placeholder="Enter your State" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">City</label>
          <input name="city" type="text" placeholder="Enter your City" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">DOB</label>
          <input name="dob" type="date" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">Date of Joining</label>
          <input name="joiningDate" type="date" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">Address</label>
          <textarea name="address" placeholder="Enter your Address" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input name="password" type="password" placeholder="Enter Password" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" />
        </div>
        <div>
          <label className="block mb-1">Upload Photo</label>
          <input name="photo" type="file" accept="image/*" onChange={handleChange} className="w-full p-2 border border-gray-400 rounded bg-white" />
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Submit</button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
          <div className="modal-box relative bg-white p-6 rounded border border-gray-300 shadow-md w-96 max-w-full">
            <button onClick={closeModal} className="absolute right-2 top-2 text-gray-600 hover:text-black">✕</button>
            <h3 className="font-bold text-lg">Employee Added!</h3>
            <p className="py-4">The employee details have been submitted successfully.</p>
          </div>
        </div>
      )}
    </div>
  )
}
