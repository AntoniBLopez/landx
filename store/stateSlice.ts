'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from '@/types'

interface InitialState {
  theme: Theme
}

const initialState: InitialState = {
  theme: 'dark',
}

const stateSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = stateSlice.actions
export default stateSlice.reducer
