import { createSlice, configureStore } from '@reduxjs/toolkit'

export type Visibility = 'hidden' | 'visible'

const newtabSlice = createSlice({
  name: 'newtab',
  initialState: {
    bg: '',
    items: '',
    isShow: 'visible' as Visibility,
    zIndex: -1
  },
  reducers: {
    search: state => {},
    clickedItem: state => {},
    togglePopup: state => {
      switch (state.isShow) {
        case 'hidden':
          state.isShow = 'visible'
          state.zIndex = 100
          break

        case 'visible':
          state.isShow = 'hidden'
          state.zIndex = -1
          break
      }
    },
  }
})

export const { search } = newtabSlice.actions
export const store = configureStore({
  reducer: newtabSlice.reducer
})
