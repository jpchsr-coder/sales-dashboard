import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const visitorData = [
  { month: 'Jan', loyal: 200, new: 150, unique: 180 },
  { month: 'Feb', loyal: 220, new: 180, unique: 200 },
  { month: 'Mar', loyal: 250, new: 200, unique: 220 },
  { month: 'Apr', loyal: 280, new: 220, unique: 240 },
  { month: 'May', loyal: 300, new: 250, unique: 260 },
  { month: 'Jun', loyal: 320, new: 280, unique: 280 },
  { month: 'Jul', loyal: 350, new: 320, unique: 300 },
  { month: 'Aug', loyal: 340, new: 300, unique: 290 },
  { month: 'Sep', loyal: 330, new: 290, unique: 280 },
  { month: 'Oct', loyal: 320, new: 280, unique: 270 },
  { month: 'Nov', loyal: 310, new: 270, unique: 260 },
  { month: 'Dec', loyal: 300, new: 260, unique: 250 },
]

const VisitorInsights = () => {
  // Custom dot for July on New Customers line
  const CustomDot = (props) => {
    const { cx, cy, payload } = props
    if (payload.month === 'Jul' && payload.dataKey === 'new') {
      return (
        <g>
          <circle cx={cx} cy={cy} r={6} fill="#dc2626" stroke="#fff" strokeWidth={2} />
        </g>
      )
    }
    return <circle cx={cx} cy={cy} r={4} fill="#dc2626" />
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Visitor Insights</h2>
      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={visitorData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12 }}
            stroke="#888"
          />
          <YAxis 
            domain={[0, 400]}
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
            type="linear" 
            dataKey="loyal" 
            stroke="#9333ea" 
            strokeWidth={2}
            name="Loyal Customers"
            dot={{ fill: '#9333ea', r: 4 }}
          />
          <Line 
            type="linear" 
            dataKey="new" 
            stroke="#dc2626" 
            strokeWidth={2}
            name="New Customers"
            dot={<CustomDot />}
          />
          <Line 
            type="linear" 
            dataKey="unique" 
            stroke="#16a34a" 
            strokeWidth={2}
            name="Unique Customers"
            dot={{ fill: '#16a34a', r: 4 }}
          />
        </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VisitorInsights
