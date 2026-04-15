import React from 'react'
import { FiTrendingUp, FiTrendingDown, FiShoppingCart, FiPackage, FiUsers, FiDollarSign } from 'react-icons/fi'

const salesData = [
  {
    icon: FiDollarSign,
    title: '$1k',
    subtitle: 'Total Sales',
    change: '+15%',
    changeType: 'up',
    color: 'bg-pink-500',
    bgColor: 'bg-pink-50',
  },
  {
    icon: FiShoppingCart,
    title: '300',
    subtitle: 'Total Order',
    change: '+5%',
    changeType: 'up',
    color: 'bg-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: FiPackage,
    title: '5',
    subtitle: 'Product Sold',
    change: '+10%',
    changeType: 'up',
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: FiUsers,
    title: '8',
    subtitle: 'New Customer',
    change: '-2%',
    changeType: 'down',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
  },
]

const TodaysSales = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Today's Sales</h2>
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
          Export
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {salesData.map((item, index) => (
          <div key={index} className={`${item.bgColor} rounded-xl p-4`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`${item.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <item.icon className="text-white text-xl" />
              </div>
              <div className={`flex items-center text-sm font-medium ${
                item.changeType === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.changeType === 'up' ? (
                  <FiTrendingUp className="mr-1" />
                ) : (
                  <FiTrendingDown className="mr-1" />
                )}
                {item.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{item.title}</div>
            <div className="text-sm text-gray-600">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodaysSales
