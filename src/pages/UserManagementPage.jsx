import React from 'react'
import UserManagement from '../components/UserManagement.jsx'

const UserManagementPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 ml-4 overflow-auto">
      <UserManagement />
    </div>
  )
}

export default UserManagementPage
