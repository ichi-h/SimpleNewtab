import { configureStore } from '@reduxjs/toolkit'

import { newtabSlice } from './newtabSlice'

export const store = configureStore({
  reducer: newtabSlice.reducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType <typeof store.getState>
