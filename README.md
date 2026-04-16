# Sales Dashboard

A modern React.js dashboard application built with Vite, featuring a comprehensive sales analytics interface with data visualization and user management capabilities.

## Features

### Dashboard UI
- **Responsive Layout**: Grid-based design with soft shadows and rounded corners
- **Custom Column Layout**: Optimized width distribution for better visual hierarchy
  - Total Revenue & Top Products: Wider columns (5/12 grid span)
  - Customer Satisfaction & Sales Mapping: Medium columns (4/12 grid span)
  - Target vs Reality & Volume vs Service: Narrower columns (3/12 grid span)
- **Sidebar Navigation**: Complete menu system with Dabang Pro promotion card and active state management
- **Top Navbar**: Search bar, language dropdown, notifications, and user profile
- **Sales Analytics**: 
  - Today's Sales cards with trend indicators
  - Visitor Insights line chart
  - Total Revenue bar chart
  - Customer Satisfaction comparison
  - Target vs Reality analysis
  - Top Products list with progress bars
  - Sales Mapping by country
  - Volume vs Service Level metrics

### User Management System
- **Complete CRUD Interface**: Full-featured user management page
- **API Integration**: Fetches data from JSONPlaceholder API using React Query
- **Advanced Search**: Real-time search by name or email (case insensitive)
- **City Filtering**: Dynamic dropdown filter populated from API data
- **Smart Sorting**: Toggle between A-Z and Z-A sorting by name
- **React Query Integration**: 
  - Intelligent caching (5 minutes stale time, 10 minutes cache time)
  - Automatic retry logic with exponential backoff
  - Background refetching and error recovery
  - Loading and error state management
- **Performance Optimized**: Uses useMemo for filtering and sorting operations

### Routing & Navigation
- **React Router**: Complete client-side routing setup
- **Page Structure**: Separate pages for Dashboard and User Management
- **Active Navigation**: Sidebar highlights current page automatically
- **Clean Architecture**: Organized pages and components structure

## Tech Stack

- **React 18** - Functional Components with Hooks
- **Vite** - Fast development server and build tool
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework with custom theme
- **Redux Toolkit** - State management with slices
- **React Query (TanStack Query)** - Server state management and caching
- **Axios** - HTTP client for API requests
- **Recharts** - Data visualization library
- **React Icons** - Icon library

## Project Structure

```
src/
  app/
    store.js           # Redux store configuration
  features/
    uiSlice.js         # UI state management (sidebar toggle)
    userSlice.js       # User state (search, filter, sort)
  components/
    Sidebar.jsx         # Navigation sidebar with routing
    Navbar.jsx          # Top navigation bar
    TodaysSales.jsx     # Sales cards component
    VisitorInsights.jsx # Line chart for visitors
    TotalRevenue.jsx    # Bar chart for revenue
    CustomerSatisfaction.jsx # Customer satisfaction chart
    TargetVsReality.jsx # Target vs Reality comparison
    TopProducts.jsx     # Products list with progress
    SalesMapping.jsx    # Country sales map placeholder
    VolumeVsService.jsx # Volume vs Service chart
    UserManagement.jsx  # Complete user management table with React Query
  pages/
    Dashboard.jsx       # Main dashboard page with all components
    UserManagementPage.jsx # User management page wrapper
  services/
    api.js              # Axios instance and API endpoints
  hooks/
    useUsersQuery.js    # React Query hook for users
    useFilteredUsers.js # Custom hook for filtered/sorted users
  App.jsx               # Main application with routing setup
  main.jsx              # Application entry point
  index.css             # Tailwind CSS imports
```

## State Management

### Redux Slices

#### uiSlice
- `sidebarOpen`: Boolean to control sidebar visibility
- Actions: `toggleSidebar`, `setSidebarOpen`

#### userSlice
- `searchTerm`: String for search input
- `selectedCity`: String for city filter ('all' for all cities)
- `sortOrder`: String for sort order ('asc' or 'desc')
- Actions: `setSearchTerm`, `setSelectedCity`, `toggleSortOrder`

### React Query
- Caches API responses for 5 minutes (stale time)
- Keeps data in cache for 10 minutes
- Automatic refetching on window focus

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## API Integration

The application uses JSONPlaceholder API for user data with React Query for advanced state management:

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: Array of user objects with name, email, company, and address fields

### React Query Configuration

#### Query Setup
- **Query Key**: `['users']` for cache identification
- **Stale Time**: 5 minutes - Data remains fresh for 5 minutes
- **Cache Time**: 10 minutes - Data stays in memory for 10 minutes
- **Retry Logic**: 3 attempts with exponential backoff
- **Background Refetching**: Automatically refetches on window focus

#### UserManagement Component Features
- **useQuery Hook**: Fetches and manages user data state
- **Loading State**: Shows spinner during data fetch
- **Error Handling**: Displays error messages with retry functionality
- **Refetch Capability**: Manual retry button for failed requests
- **Performance Optimized**: Uses useMemo for filtering and sorting operations

#### Data Processing
- **Dynamic City Filter**: Automatically extracts unique cities from API data
- **Real-time Search**: Case-insensitive search across name and email fields
- **Smart Sorting**: Toggle between ascending and descending order
- **Results Counter**: Shows filtered vs total user count

## Assumptions Made

1. **Design Interpretation**: The UI is based on the attached image with reasonable assumptions for responsive behavior
2. **Chart Data**: Sample data is used for all charts to demonstrate functionality
3. **World Map**: A placeholder is used for the sales mapping (would require a mapping library like Leaflet for real implementation)
4. **User Data**: JSONPlaceholder API provides mock data with the required fields
5. **Authentication**: No authentication is implemented (focus is on UI and state management)
6. **Real-time Updates**: Charts use static data (would require WebSocket integration for real-time updates)

## Performance Features

- **Code Splitting**: Vite automatically splits code for optimal loading
- **React.memo**: Components are optimized to prevent unnecessary re-renders
- **useMemo**: Expensive calculations are memoized
- **React Query**: Intelligent caching and background refetching
- **Tailwind CSS**: Purge-ready CSS for minimal bundle size

## Responsive Design
- Grid layouts that adapt to screen size
- Collapsible sidebar on smaller screens (can be implemented)
- Horizontal scroll on tables for mobile devices

## Recent Implementation Updates

### Part 2: API Integration & User Management (Latest)
- **Complete User Management System**: Full-featured table with search, filter, and sort capabilities
- **React Query Integration**: Professional-grade data fetching with caching and error handling
- **Advanced Routing**: React Router setup with active navigation states
- **Optimized Layout**: Custom column width distribution for better visual hierarchy
- **Error Recovery**: Retry functionality and graceful error handling
- **Performance Optimization**: useMemo for expensive operations and intelligent caching

### Layout Improvements
- **Custom Grid System**: 12-column grid with optimized spans (5-4-3 distribution)
- **Responsive Height**: Consistent minimum heights across all columns (300px)
- **Visual Hierarchy**: Wider columns for important data (Total Revenue, Top Products)
- **Clean Architecture**: Separated pages and components for maintainability

## Future Enhancements

1. **Real-time Data**: WebSocket integration for live dashboard updates
2. **Advanced Charts**: More sophisticated chart types and interactions

3. **CRUD Operations**: Full create, update, delete functionality for users
4. **Pagination**: Server-side pagination for large datasets
5. **Advanced Search**: Multi-field search with advanced operators


