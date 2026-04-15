import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const volumeData = [
  { category: 'Q1', volume: 800, services: 400 },
  { category: 'Q2', volume: 950, services: 550 },
  { category: 'Q3', volume: 700, services: 350 },
  { category: 'Q4', volume: 1135, services: 635 },
]

const VolumeVsService = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Volume vs Service Level</h2>
      
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={volumeData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="category" 
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
            dataKey="volume" 
            fill="#3b82f6" 
            name="Volume"
            radius={[8, 8, 0, 0]}
          />
          <Bar 
            dataKey="services" 
            fill="#16a34a" 
            name="Services"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="flex justify-around mt-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-sm text-gray-600">Volume</p>
          <p className="text-xl font-bold text-gray-800">1,135</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Services</p>
          <p className="text-xl font-bold text-gray-800">635</p>
        </div>
      </div>
    </div>
  )
}

export default VolumeVsService
