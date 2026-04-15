import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const revenueData = [
  { day: 'Monday', online: 4000, offline: 2400 },
  { day: 'Tuesday', online: 3000, offline: 1398 },
  { day: 'Wednesday', online: 2000, offline: 9800 },
  { day: 'Thursday', online: 2780, offline: 3908 },
  { day: 'Friday', online: 1890, offline: 4800 },
  { day: 'Saturday', online: 2390, offline: 3800 },
  { day: 'Sunday', online: 3490, offline: 4300 },
]

const TotalRevenue = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Total Revenue</h2>
      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="day" 
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
          <Bar 
            dataKey="online" 
            fill="#3b82f6" 
            name="Online Sales"
            radius={[8, 8, 0, 0]}
          />
          <Bar 
            dataKey="offline" 
            fill="#16a34a" 
            name="Offline Sales"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TotalRevenue
