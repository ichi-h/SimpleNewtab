import { createSlice, configureStore } from '@reduxjs/toolkit'

export type Visibility = 'hidden' | 'visible'

const newtabSlice = createSlice({
  name: 'newtab',
  initialState: {
    bg: '',
    items: '',
    isShow: 'hidden' as Visibility
  },
  reducers: {
    search: state => {},
    clickedItem: state => {},
    togglePopup: state => {
      switch (state.isShow) {
        case 'hidden':
          state.isShow = 'visible'
          break

        case 'visible':
          state.isShow = 'hidden'
          break
      }
    },
  }
})

export const { search } = newtabSlice.actions
export const store = configureStore({
  reducer: newtabSlice.reducer
})
