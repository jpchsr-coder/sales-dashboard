import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchTerm, setSelectedCity, toggleSortOrder } from '../features/userSlice.js'
import { useFilteredUsers } from '../hooks/useFilteredUsers.js'
import { FiSearch, FiArrowUp, FiArrowDown } from 'react-icons/fi'

const UsersTable = () => {
  const dispatch = useDispatch()
  const { searchTerm, selectedCity, sortOrder } = useSelector((state) => state.user)
  const { users, cities, isLoading, error, hasData } = useFilteredUsers()

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  const handleCityChange = (e) => {
    dispatch(setSelectedCity(e.target.value))
  }

  const handleSortToggle = () => {
    dispatch(toggleSortOrder())
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500">Loading users...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500">Error loading users: {error.message}</div>
        </div>
      </div>
    )
  }

  if (!hasData) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500">No users data available</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Users Management</h2>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* City Filter */}
        <div className="md:w-48">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Cities</option>
            {cities.slice(1).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Toggle */}
        <button
          onClick={handleSortToggle}
          className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
        >
          <span className="text-sm font-medium">Sort by Name</span>
          {sortOrder === 'asc' ? (
            <FiArrowUp className="text-gray-600" />
          ) : (
            <FiArrowDown className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Company Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">City</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500">
                  No users found matching your criteria
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 text-gray-800 font-medium">{user.name}</td>
                  <td className="py-3 px-4 text-gray-600">{user.email}</td>
                  <td className="py-3 px-4 text-gray-600">{user.company.name}</td>
                  <td className="py-3 px-4 text-gray-600">{user.address.city}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Results Count */}
      <div className="mt-4 text-sm text-gray-500">
        Showing {users.length} of {cities.length > 1 ? '10' : '0'} users
      </div>
    </div>
  )
}

export default UsersTable
