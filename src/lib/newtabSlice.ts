import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Display = 'none' | 'initial'

interface Items {
  name: string,
  link: string
}

interface NewtabState {
  bg: string,
  items: Items[],
  popupDisplay: Display,
  popupIndex: number
}

const initialState: NewtabState = {
  bg: 'url("../assets/img/demo1.jpg")',
  items: [] as Items[],
  popupDisplay: 'none',
  popupIndex: -1
}

export const newtabSlice = createSlice({
  name: 'newtab',

  initialState,

  reducers: {
    setBG: (state, action: PayloadAction<string>) => {
      const url = `url("${action.payload}")`
      state.bg = url
    },

    addItem: state => {},

    togglePopup: state => {
      switch (state.popupDisplay) {
        case 'none':
          state.popupDisplay = 'initial'
          state.popupIndex = 100
          break

        case 'initial':
          state.popupDisplay = 'none'
          state.popupIndex = -1
          break
      }
    },
  }
})

export const { setBG, addItem, togglePopup } = newtabSlice.actions
