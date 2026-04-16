import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const targetData = [
  { month: 'Q1', reality: 4000, target: 5000 },
  { month: 'Q2', reality: 3000, target: 4500 },
  { month: 'Q3', reality: 5000, target: 5500 },
  { month: 'Q4', reality: 2780, target: 4000 },
]

const TargetVsReality = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Target vs Reality</h2>
      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={targetData} barCategoryGap="20%">
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
              dataKey="reality" 
              fill="#16a34a" 
              name="Reality Sales"
            />
            <Bar 
              dataKey="target" 
              fill="#eab308" 
              name="Target Sales"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-around mt-2 pt-2 border-t border-gray-100">
        <div className="text-center">
          <p className="text-xs text-gray-600">Reality Sales Global</p>
          <p className="text-sm font-bold text-gray-800">8,823</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600">Target Sales Commercial</p>
          <p className="text-sm font-bold text-gray-800">12,122</p>
        </div>
      </div>
    </div>
  )
}

export default TargetVsReality
