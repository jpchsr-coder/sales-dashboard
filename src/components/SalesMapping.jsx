import React from 'react'

const SalesMapping = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Sales Mapping by Country</h2>
      
      <div className="relative">
        {/* World Map Placeholder */}
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">{'\ud83c\udf0d'}</div>
            <p className="text-gray-600 font-medium">World Map Placeholder</p>
            <p className="text-sm text-gray-500 mt-2">Sales data visualization by country</p>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center mt-4 space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-400 rounded mr-2"></div>
            <span className="text-gray-600">High</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-400 rounded mr-2"></div>
            <span className="text-gray-600">Medium</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-400 rounded mr-2"></div>
            <span className="text-gray-600">Low</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
            <span className="text-gray-600">Emerging</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesMapping
