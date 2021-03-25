import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Display = 'none' | 'initial'

interface ShortcutItems {
  name: string,
  link: string
}

interface NewtabState {
  bg: string,
  bgColor: string,
  shortcuts: ShortcutItems[],
  popupDisplay: Display,
  popupIndex: number
}

const shortcuts: ShortcutItems[] = [
  {
    name: 'YouTue',
    link: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    link: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    link: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    link: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    link: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    link: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    link: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    link: 'https://www.youtube.com/'
  },
]

const initialState: NewtabState = {
  bg: 'url("../assets/img/demo1.jpg")',
  bgColor: '#ffffff',
  shortcuts: shortcuts,
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

    addShortcutItem: state => {},

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

export const { setBG, setBGColor, addShortcutItem, togglePopup } = newtabSlice.actions
