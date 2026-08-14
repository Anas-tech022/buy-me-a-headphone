"use client"
import React, { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard Page"
  }, [])
  const { data: session, status, update } = useSession()
  const router = useRouter()

  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    profilePicture: '',
    coverPicture: '',
    razorpayId: '',
    razorpaySecret: ''
  })


  // Fetch user data when session exists
  const getData = async () => {
    if (session?.user?.name) {
      let a = await fetchuser(session.user.name)
      if (a) {
        setForm(a)
      }
    }
  }

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    } else if (status === "authenticated" && session?.user?.name) {
      getData()
    }
  }, [status, session?.user?.name])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (formData) => {
    if (!session?.user?.name) return

    // Pass `form` state (or `formData`) and `session.user.name` safely
    let a = await updateProfile(form, session.user.name)
    await update() // Refresh NextAuth session
    alert("Profile Updated!")
  }

  // Prevent rendering while NextAuth is checking session status
  if (status === "loading") {
    return <div className="text-center py-10">Loading...</div>
  }

  return (
    <div>
      <form className="max-w-2xl mx-auto" action={handleSubmit}>

        {/* Name */}
        <div className="my-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Enter your name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Email */}
        <div className="my-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            disabled={form.email||""}
            value={form.email || ""}
            onChange={handleChange}
            placeholder="Enter your email"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Username */}
        <div className="my-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={form.username || ""}
            onChange={handleChange}
            placeholder="Enter username"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Profile Picture */}
        <div className="my-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Profile Picture URL
          </label>
          <input
            type="text"
            name="profilePicture"
            value={form.profilePicture || ""}
            onChange={handleChange}
            placeholder="Profile image URL"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Cover Picture */}
        <div className="my-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Cover Picture URL
          </label>
          <input
            type="text"
            name="coverPicture"
            value={form.coverPicture || ""}
            onChange={handleChange}
            placeholder="Cover image URL"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Razorpay ID */}
        <div className="my-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Razorpay ID
          </label>
          <input
            type="text"
            name="razorpayId"
            value={form.razorpayId || ""}
            onChange={handleChange}
            placeholder="Enter Razorpay ID"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Razorpay Secret */}
        <div className="my-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Secret
          </label>
          <input
            type="text"
            name="razorpaySecret"
            value={form.razorpaySecret || ""}
            onChange={handleChange}
            placeholder="Enter your Razorpay Secret"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div className="my-4 mt-6">
          <button
            type="submit"
            className="px-4 py-2 w-full font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Dashboard