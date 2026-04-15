import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const visitorData = [
  { month: 'Jan', loyal: 4000, new: 2400, unique: 2400 },
  { month: 'Feb', loyal: 3000, new: 1398, unique: 2210 },
  { month: 'Mar', loyal: 2000, new: 9800, unique: 2290 },
  { month: 'Apr', loyal: 2780, new: 3908, unique: 2000 },
  { month: 'May', loyal: 1890, new: 4800, unique: 2181 },
  { month: 'Jun', loyal: 2390, new: 3800, unique: 2500 },
  { month: 'Jul', loyal: 3490, new: 4300, unique: 2100 },
  { month: 'Aug', loyal: 4000, new: 2400, unique: 2400 },
  { month: 'Sep', loyal: 3000, new: 1398, unique: 2210 },
  { month: 'Oct', loyal: 2000, new: 9800, unique: 2290 },
  { month: 'Nov', loyal: 2780, new: 3908, unique: 2000 },
  { month: 'Dec', loyal: 1890, new: 4800, unique: 2181 },
]

const VisitorInsights = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Visitor Insights</h2>
      
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={visitorData}>
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
            dataKey="loyal" 
            stroke="#9333ea" 
            strokeWidth={2}
            name="Loyal Customers"
            dot={{ fill: '#9333ea', r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="new" 
            stroke="#dc2626" 
            strokeWidth={2}
            name="New Customers"
            dot={{ fill: '#dc2626', r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="unique" 
            stroke="#16a34a" 
            strokeWidth={2}
            name="Unique Customers"
            dot={{ fill: '#16a34a', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VisitorInsights
