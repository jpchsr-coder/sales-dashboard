import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const satisfactionData = [
  { month: 'Jan', lastMonth: 3000, thisMonth: 4000 },
  { month: 'Feb', lastMonth: 3200, thisMonth: 4200 },
  { month: 'Mar', lastMonth: 3100, thisMonth: 4500 },
  { month: 'Apr', lastMonth: 3300, thisMonth: 4300 },
  { month: 'May', lastMonth: 3500, thisMonth: 4600 },
  { month: 'Jun', lastMonth: 3400, thisMonth: 4400 },
  { month: 'Jul', lastMonth: 3004, thisMonth: 4504 },
]

const CustomerSatisfaction = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
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
      
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={satisfactionData}>
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
          <Line 
            type="monotone" 
            dataKey="lastMonth" 
            stroke="#3b82f6" 
            strokeWidth={2}
            name="Last Month"
            dot={{ fill: '#3b82f6', r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="thisMonth" 
            stroke="#16a34a" 
            strokeWidth={2}
            name="This Month"
            dot={{ fill: '#16a34a', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomerSatisfaction
