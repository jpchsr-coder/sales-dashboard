import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import TodaysSales from './components/TodaysSales.jsx'
import VisitorInsights from './components/VisitorInsights.jsx'
import TotalRevenue from './components/TotalRevenue.jsx'
import CustomerSatisfaction from './components/CustomerSatisfaction.jsx'
import TargetVsReality from './components/TargetVsReality.jsx'
import TopProducts from './components/TopProducts.jsx'
import SalesMapping from './components/SalesMapping.jsx'
import VolumeVsService from './components/VolumeVsService.jsx'
import UsersTable from './components/UsersTable.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-full gap-4">
        {/* Sidebar */}
        <div className="w-72 flex-shrink-0 fixed  h-[calc(100vh-2rem)]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4 ml-64">
          {/* Navbar */}
          <Navbar />

          {/* Dashboard Content */}
          <div className="flex-1 overflow-auto">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              <div className="h-full">
                <TotalRevenue />
              </div>
              <div className="h-full min-h-[300px]">
                <CustomerSatisfaction />
              </div>
              <div className="h-full">
                <TargetVsReality />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <TopProducts />
              </div>
              <div>
                <SalesMapping />
              </div>
              <div>
                <VolumeVsService />
              </div>
            </div>

            {/* Users Table */}
            <UsersTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
