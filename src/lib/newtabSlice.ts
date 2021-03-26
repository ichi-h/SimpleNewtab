import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShortcutItems {
  name: string,
  url: string
}

export type SearchEngine = 'Google' | 'Bing' | 'DuckDuckGo'
export type TextColor = 'black' | 'white'

interface NewtabState {
  bg: string,
  bgColor: string,
  shortcuts: ShortcutItems[],
  searchAction: string,
  textColor: TextColor,
  shortcutsIsShow: boolean,
  formIsShow: boolean,
  settingsPopupIsShow: boolean,
  searchBoxIsShow: boolean
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
  textColor: 'black',
  shortcutsIsShow: true,
  formIsShow: false,
  settingsPopupIsShow: false,
  searchBoxIsShow: true
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

    setTextColor: (state, action: PayloadAction<TextColor>) => {
      state.textColor = action.payload
    },

    toggleShortcuts: state => {
      state.shortcutsIsShow = !state.shortcutsIsShow
    },

    toggleForm: state => {
      state.formIsShow = !state.formIsShow
    },

    togglePopup: state => {
      state.settingsPopupIsShow = !state.settingsPopupIsShow
    },

    toggleSearchBox: state => {
      state.searchBoxIsShow = !state.searchBoxIsShow
    }
  }
})

export const {
  setBG,
  setBGColor,
  setShortcutItem,
  setSearchEngine,
  setTextColor,
  toggleShortcuts,
  toggleForm,
  togglePopup,
  toggleSearchBox
} = newtabSlice.actions
