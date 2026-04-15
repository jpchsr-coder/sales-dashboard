import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const targetData = [
  { month: 'Jan', reality: 4000, target: 5000 },
  { month: 'Feb', reality: 3000, target: 4500 },
  { month: 'Mar', reality: 5000, target: 5500 },
  { month: 'Apr', reality: 2780, target: 4000 },
  { month: 'May', reality: 3890, target: 4200 },
  { month: 'Jun', reality: 4390, target: 4800 },
  { month: 'Jul', reality: 4823, target: 5122 },
]

const TargetVsReality = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Target vs Reality</h2>
      
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={targetData}>
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
          <Bar 
            dataKey="reality" 
            fill="#16a34a" 
            name="Reality Sales"
            radius={[8, 8, 0, 0]}
          />
          <Bar 
            dataKey="target" 
            fill="#eab308" 
            name="Target Sales"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="flex justify-around mt-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-sm text-gray-600">Reality Sales Global</p>
          <p className="text-xl font-bold text-gray-800">8,823</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Target Sales Commercial</p>
          <p className="text-xl font-bold text-gray-800">12,122</p>
        </div>
      </div>
    </div>
  )
}

export default TargetVsReality
