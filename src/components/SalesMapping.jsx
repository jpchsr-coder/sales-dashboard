import React from 'react'

const SalesMapping = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Sales Mapping by Country</h2>
      
      <div className="flex-1">
        {/* Map Container */}
        <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center">
          {/* World Map Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4 opacity-30">{'\ud83c\udf0d'}</div>
            </div>
          </div>
          
          {/* Country Sales Data Points - Exact positioning from image */}
          <div className="absolute top-20 left-24">
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">USA</div>
          </div>
          <div className="absolute top-40 left-32">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Brazil</div>
          </div>
          <div className="absolute top-36 left-40">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">DRC</div>
          </div>
          <div className="absolute top-32 right-32">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Saudi Arabia</div>
          </div>
          <div className="absolute top-24 right-24">
            <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">China</div>
          </div>
          <div className="absolute bottom-32 right-28">
            <div className="bg-lime-400 text-white px-3 py-1 rounded-full text-xs font-semibold">Indonesia</div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center mt-4 space-x-4 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full mr-1"></div>
          <span className="text-gray-600">USA</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
          <span className="text-gray-600">Brazil</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
          <span className="text-gray-600">DRC</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
          <span className="text-gray-600">Saudi Arabia</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
          <span className="text-gray-600">China</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-lime-400 rounded-full mr-1"></div>
          <span className="text-gray-600">Indonesia</span>
        </div>
      </div>
    </div>
  )
}

export default SalesMapping
