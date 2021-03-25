import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Display = 'none' | 'initial'

interface Items {
  name: string,
  link: string
}

interface NewtabState {
  bg: string,
  bgColor: string,
  shortcuts: Items[],
  popupDisplay: Display,
  popupIndex: number
}

const initialState: NewtabState = {
  bg: 'url("../assets/img/demo1.jpg")',
  bgColor: '#ffffff',
  shortcuts: [] as Items[],
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

    setBGColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload
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

export const { setBG, setBGColor, addItem, togglePopup } = newtabSlice.actions
