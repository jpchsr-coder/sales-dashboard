import React from 'react'
import { FiHome, FiTrendingUp, FiShoppingBag, FiPackage, FiFileText, FiMessageSquare, FiSettings, FiLogOut, FiAward } from 'react-icons/fi'

const menuItems = [
  { icon: FiHome, text: 'Dashboard', active: true },
  { icon: FiTrendingUp, text: 'Leaderboard', active: false },
  { icon: FiShoppingBag, text: 'Orders', active: false },
  { icon: FiPackage, text: 'Products', active: false },
  { icon: FiFileText, text: 'Sales Report', active: false },
  { icon: FiMessageSquare, text: 'Messages', active: false },
  { icon: FiSettings, text: 'Settings', active: false },
  { icon: FiLogOut, text: 'Sign Out', active: false },
]

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-full  flex flex-col rounded-r-2xl">
      {/* Logo */}
      <div className="p-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
          <FiAward className="text-white text-xl" />
        </div>
        <span className="text-xl font-bold text-gray-800">Dabang</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              item.active
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
