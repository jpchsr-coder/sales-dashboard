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
      <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Satisfaction</h2>
      
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
      
      <div className="flex justify-around mt-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-sm text-gray-600">Last Month</p>
          <p className="text-xl font-bold text-gray-800">$3,004</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">This Month</p>
          <p className="text-xl font-bold text-gray-800">$4,504</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerSatisfaction
