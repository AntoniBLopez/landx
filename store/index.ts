'use client'

import { configureStore } from '@reduxjs/toolkit'
import stateReducer from '@/store/stateSlice'

export const store = () => {
  return configureStore({
    reducer: {
      store: stateReducer
    },
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']