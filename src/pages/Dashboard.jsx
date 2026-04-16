import React from 'react'
import TodaysSales from '../components/TodaysSales.jsx'
import VisitorInsights from '../components/VisitorInsights.jsx'
import TotalRevenue from '../components/TotalRevenue.jsx'
import CustomerSatisfaction from '../components/CustomerSatisfaction.jsx'
import TargetVsReality from '../components/TargetVsReality.jsx'
import TopProducts from '../components/TopProducts.jsx'
import SalesMapping from '../components/SalesMapping.jsx'
import VolumeVsService from '../components/VolumeVsService.jsx'

const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 ml-4 overflow-auto">
      {/* Top Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
        <div className="xl:col-span-2 h-full">
          <TodaysSales />
        </div>
        <div className="h-full">
          <VisitorInsights />
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        <div className="lg:col-span-5 h-full">
          <TotalRevenue />
        </div>
        <div className="lg:col-span-4 h-full min-h-[300px]">
          <CustomerSatisfaction />
        </div>
        <div className="lg:col-span-3 h-full">
          <TargetVsReality />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-4">
        <div className="lg:col-span-5 h-full min-h-[300px]">
          <TopProducts />
        </div>
        <div className="lg:col-span-4 h-full min-h-[300px]">
          <SalesMapping />
        </div>
        <div className="lg:col-span-3 h-full min-h-[300px]">
          <VolumeVsService />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
