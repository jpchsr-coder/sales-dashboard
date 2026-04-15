import { useQuery } from '@tanstack/react-query'
import { usersApi } from '../services/api.js'

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await usersApi.getUsers()
      return response.data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  })
}
