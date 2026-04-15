# Sales Dashboard

A modern React.js dashboard application built with Vite, featuring a comprehensive sales analytics interface with data visualization and user management capabilities.

## Features

### Dashboard UI
- **Responsive Layout**: Grid-based design with soft shadows and rounded corners
- **Sidebar Navigation**: Complete menu system with Dabang Pro promotion card
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

### Users Management
- **API Integration**: Fetches data from JSONPlaceholder API
- **Search Functionality**: Real-time search by name or email (case insensitive)
- **City Filtering**: Dropdown filter to filter users by city
- **Sorting**: Toggle between A-Z and Z-A sorting by name
- **Optimized Performance**: Uses React Query for caching and useMemo for filtering

## Tech Stack

- **React 18** - Functional Components with Hooks
- **Vite** - Fast development server and build tool
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
    Sidebar.jsx         # Navigation sidebar
    Navbar.jsx          # Top navigation bar
    TodaysSales.jsx     # Sales cards component
    VisitorInsights.jsx # Line chart for visitors
    TotalRevenue.jsx    # Bar chart for revenue
    CustomerSatisfaction.jsx # Customer satisfaction chart
    TargetVsReality.jsx # Target vs Reality comparison
    TopProducts.jsx     # Products list with progress
    SalesMapping.jsx    # Country sales map placeholder
    VolumeVsService.jsx # Volume vs Service chart
    UsersTable.jsx      # Users management table
  services/
    api.js              # Axios instance and API endpoints
  hooks/
    useUsersQuery.js    # React Query hook for users
    useFilteredUsers.js # Custom hook for filtered/sorted users
  App.jsx               # Main application component
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

The application uses the JSONPlaceholder API for user data:

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: Array of user objects with name, email, company, and address fields

### Custom Hooks

#### useUsersQuery
- Uses React Query to fetch and cache user data
- Handles loading and error states
- Provides automatic refetching

#### useFilteredUsers
- Combines API data with Redux state
- Implements search, filtering, and sorting logic
- Uses useMemo for performance optimization
- Returns filtered users and available cities

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

- Mobile-first approach with Tailwind CSS breakpoints
- Grid layouts that adapt to screen size
- Collapsible sidebar on smaller screens (can be implemented)
- Horizontal scroll on tables for mobile devices

## Future Enhancements

1. **Real-time Data**: WebSocket integration for live dashboard updates
2. **Advanced Charts**: More sophisticated chart types and interactions
3. **Data Export**: CSV/PDF export functionality for reports
4. **Authentication**: User login and role-based access
5. **Dark Mode**: Theme switching capability
6. **Advanced Filtering**: Date ranges, multi-select filters
7. **Data Persistence**: Local storage for user preferences

## License

This project is for educational purposes and demonstration of modern React development practices.
