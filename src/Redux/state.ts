import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/authSlice'
import news from './slices/newsSlice'

export const store = configureStore({
  reducer: {
    auth,
    news
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch