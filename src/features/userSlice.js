import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchTerm: '',
  selectedCity: 'all',
  sortOrder: 'asc',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload
    },
    toggleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc'
    },
  },
})

export const { setSearchTerm, setSelectedCity, toggleSortOrder } = userSlice.actions
export default userSlice.reducer
