import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShortcutItems {
  name: string,
  url: string
}

type SearchEngine = 'Google' | 'Bing' | 'DuckDuckGo'

interface NewtabState {
  bg: string,
  bgColor: string,
  shortcuts: ShortcutItems[],
  searchAction: string
  shortcutsIsShow: boolean,
  formIsShow: boolean,
  settingsPopupIsShow: boolean
}

const shortcuts: ShortcutItems[] = [
  {
    name: 'YouTue',
    url: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    url: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    url: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    url: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    url: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    url: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    url: 'https://www.youtube.com/'
  },
  {
    name: 'YouTue',
    url: 'https://www.youtube.com/'
  },
]

const initialState: NewtabState = {
  bg: 'url("./assets/img/demo1.jpg")',
  bgColor: '#ffffff',
  shortcuts: shortcuts,
  searchAction: 'https://www.google.com/search',
  shortcutsIsShow: true,
  formIsShow: false,
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

    setSearchEngine: (state, action: PayloadAction<SearchEngine>) => {
      const searchAction = {
        Google: 'https://www.google.com/search',
        Bing: 'https://www.bing.com/search',
        DuckDuckGo: 'https://duckduckgo.com'
      }

      switch (action.payload) {
        case 'Google':
          state.searchAction = searchAction['Google']
        case 'Bing':
          state.searchAction = searchAction['Bing']
        case 'DuckDuckGo':
          state.searchAction = searchAction['DuckDuckGo']
      }
    },

    toggleShortcuts: state => {
      state.shortcutsIsShow = !state.shortcutsIsShow
    },

    toggleForm: state => {
      state.formIsShow = !state.formIsShow
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
  setSearchEngine,
  toggleShortcuts,
  toggleForm,
  togglePopup
} = newtabSlice.actions
