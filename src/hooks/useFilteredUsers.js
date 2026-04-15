import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useUsersQuery } from './useUsersQuery.js'

export const useFilteredUsers = () => {
  const { data: users = [], isLoading, error } = useUsersQuery()
  const { searchTerm, selectedCity, sortOrder } = useSelector((state) => state.user)

  const filteredAndSortedUsers = useMemo(() => {
    let filtered = [...users]

    // Filter by search term (name or email, case insensitive)
    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by city
    if (selectedCity !== 'all') {
      filtered = filtered.filter(
        (user) => user.address.city.toLowerCase() === selectedCity.toLowerCase()
      )
    }

    // Sort by name
    filtered.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name)
      return sortOrder === 'asc' ? comparison : -comparison
    })

    return filtered
  }, [users, searchTerm, selectedCity, sortOrder])

  // Get unique cities for filter dropdown
  const cities = useMemo(() => {
    const uniqueCities = [...new Set(users.map((user) => user.address.city))]
    return ['all', ...uniqueCities]
  }, [users])

  return {
    users: filteredAndSortedUsers,
    cities,
    isLoading,
    error,
    hasData: users.length > 0,
  }
}
