import React from 'react'
import { FiSearch, FiBell } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className="bg-white h-16 flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Left - Title */}
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Middle - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right - Language, Notifications, Profile */}
      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
        <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm">
          <option>Eng (us)</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>

        {/* Notifications */}
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <FiBell className="text-xl" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">Musfiq</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
            M
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
