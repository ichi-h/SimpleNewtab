import { createSlice } from '@reduxjs/toolkit'

export type Display = 'none' | 'initial'

interface Items {
  name: string,
  link: string
}

interface NewtabState {
  bg: string,
  items: Items[],
  isShow: Display,
  zIndex: number
}

const initialState: NewtabState = {
  bg: '',
  items: [] as Items[],
  isShow: 'none',
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
        case 'none':
          state.isShow = 'initial'
          state.zIndex = 100
          break

        case 'initial':
          state.isShow = 'none'
          state.zIndex = -1
          break
      }
    },
  }
})

export const { search, addItem, togglePopup } = newtabSlice.actions
