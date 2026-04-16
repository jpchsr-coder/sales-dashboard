import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const volumeData = [
  { month: 'Jan', volume: 800, services: 400 },
  { month: 'Feb', volume: 950, services: 550 },
  { month: 'Mar', volume: 700, services: 350 },
  { month: 'Apr', volume: 1136, services: 635 },
  { month: 'May', volume: 900, services: 500 },
  { month: 'Jun', volume: 850, services: 450 },
]

const VolumeVsService = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Volume vs Service Level</h2>
      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={volumeData} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              stroke="#888"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#888"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Bar 
              dataKey="services" 
              fill="#16a34a" 
              name="Services"
              stackId="stack"
            />
            <Bar 
              dataKey="volume" 
              fill="#3b82f6" 
              name="Volume"
              stackId="stack"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-around mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div>
            <p className="text-sm text-gray-600">Volume</p>
            <p className="text-xl font-bold text-gray-800">1,136</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div>
            <p className="text-sm text-gray-600">Services</p>
            <p className="text-xl font-bold text-gray-800">635</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolumeVsService
