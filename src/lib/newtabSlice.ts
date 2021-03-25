import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Display = 'none' | 'initial'
export type Visibility = 'collapse' | 'visible'

interface ShortcutItems {
  name: string,
  link: string
}

interface NewtabState {
  bg: string,
  bgColor: string,
  shortcuts: ShortcutItems[],
  shortcutsVisible: Visibility,
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
  shortcutsVisible: 'visible',
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

    setShortcutItem: (state, action: PayloadAction<ShortcutItems[]>) => {
      state.shortcuts = action.payload
    },

    toggleSCDisplay: state => {
      switch (state.shortcutsVisible) {
        case 'visible':
          state.shortcutsVisible = 'collapse'
          break
        case 'collapse':
          state.shortcutsVisible = 'visible'
          break
      }
    },

    togglePopupDisplay: state => {
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

export const {
  setBG,
  setBGColor,
  setShortcutItem,
  toggleSCDisplay,
  togglePopupDisplay
} = newtabSlice.actions
