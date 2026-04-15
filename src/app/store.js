import { configureStore } from '@reduxjs/toolkit'
import uiSlice from '../features/uiSlice.js'
import userSlice from '../features/userSlice.js'

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    user: userSlice,
  },
})
