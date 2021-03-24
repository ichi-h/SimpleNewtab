import { createSlice } from '@reduxjs/toolkit'

export type Visibility = 'hidden' | 'visible'

interface Items {
  name: string,
  link: string
}

interface NewtabState {
  bg: string,
  items: Items[],
  isShow: Visibility,
  zIndex: number
}

const initialState: NewtabState = {
  bg: '',
  items: [] as Items[],
  isShow: 'hidden',
  zIndex: -1
}

export const newtabSlice = createSlice({
  name: 'newtab',

  initialState,

  reducers: {
    search: state => {},
    addItem: state => {},

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

export const { search, addItem, togglePopup } = newtabSlice.actions
