'use client'

import { configureStore } from '@reduxjs/toolkit'
import stateReducer from '@/store/stateSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      store: stateReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']