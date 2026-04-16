import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import UserManagementPage from './pages/UserManagementPage.jsx'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
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

              {/* Page Content */}
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/user-management" element={<UserManagementPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
