import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FiHome, FiTrendingUp, FiShoppingBag, FiPackage, FiFileText, FiMessageSquare, FiSettings, FiLogOut, FiAward, FiUsers } from 'react-icons/fi'

const menuItems = [
  { icon: FiHome, text: 'Dashboard', path: '/' },
  { icon: FiUsers, text: 'User Management', path: '/user-management' },
  { icon: FiTrendingUp, text: 'Leaderboard', path: '/leaderboard' },
  { icon: FiShoppingBag, text: 'Orders', path: '/orders' },
  { icon: FiPackage, text: 'Products', path: '/products' },
  { icon: FiFileText, text: 'Sales Report', path: '/sales-report' },
  
  { icon: FiMessageSquare, text: 'Messages', path: '/messages' },
  { icon: FiSettings, text: 'Settings', path: '/settings' },
  { icon: FiLogOut, text: 'Sign Out', path: '/logout' },
]

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (path) => {
    if (path === '/logout') {
      // Handle logout logic here
      console.log('Logout clicked')
      return
    }
    navigate(path)
  }

  return (
    <div className="w-64 bg-white h-full  flex flex-col rounded-r-2xl">
      {/* Logo */}
      <div className="p-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
          <FiAward className="text-white text-xl" />
        </div>
        <span className="text-xl font-bold text-gray-800">Dabang</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              location.pathname === item.path
                ? 'bg-primary-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon className="text-xl" />
            <span className="font-medium">{item.text}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Card */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-4 text-white">
          <h3 className="font-bold text-lg mb-2">Dabang Pro</h3>
          <p className="text-sm opacity-90 mb-4">
            Get access to all features on telumbas
          </p>
          <button className="w-full bg-white text-primary-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Get Pro
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
