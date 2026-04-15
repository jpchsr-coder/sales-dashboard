import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts'

const satisfactionData = [
  { month: 'Jan', lastMonth: 2800, thisMonth: 3200 },
  { month: 'Feb', lastMonth: 2900, thisMonth: 3400 },
  { month: 'Mar', lastMonth: 3000, thisMonth: 3600 },
  { month: 'Apr', lastMonth: 3100, thisMonth: 3800 },
  { month: 'May', lastMonth: 3200, thisMonth: 4000 },
  { month: 'Jun', lastMonth: 3004, thisMonth: 4200 },
  { month: 'Jul', lastMonth: 3004, thisMonth: 4504 },
]

const CustomerSatisfaction = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Customer Satisfaction</h2>
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Last Month: </span>
            <span className="font-semibold text-gray-800 ml-1">$3,004</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600">This Month: </span>
            <span className="font-semibold text-gray-800 ml-1">$4,504</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={satisfactionData}>
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
          <Legend 
            wrapperStyle={{ fontSize: '14px' }}
          />
          <Area 
            type="monotone" 
            dataKey="lastMonth" 
            stroke="#3b82f6" 
            strokeWidth={2}
            fill="#3b82f6"
            fillOpacity={0.3}
            name="Last Month"
          />
          <Area 
            type="monotone" 
            dataKey="thisMonth" 
            stroke="#16a34a" 
            strokeWidth={2}
            fill="#16a34a"
            fillOpacity={0.3}
            name="This Month"
          />
        </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CustomerSatisfaction
