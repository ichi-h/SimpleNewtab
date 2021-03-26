import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShortcutItems {
  name: string,
  link: string
}

interface NewtabState {
  bg: string,
  bgColor: string,
  shortcuts: ShortcutItems[],
  shortcutsIsShow: boolean,
  settingsPopupIsShow: boolean
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
  bg: 'url("./assets/img/demo1.jpg")',
  bgColor: '#ffffff',
  shortcuts: shortcuts,
  shortcutsIsShow: true,
  settingsPopupIsShow: false
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

    toggleShortcuts: state => {
      state.shortcutsIsShow = !state.shortcutsIsShow
    },

    togglePopup: state => {
      state.settingsPopupIsShow = !state.settingsPopupIsShow
    }
  }
})

export const {
  setBG,
  setBGColor,
  setShortcutItem,
  toggleShortcuts,
  togglePopup
} = newtabSlice.actions
