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
  searchEngine: SearchEngine,
  textColor: TextColor,
  shortcutsIsShow: boolean,
  formIsShow: boolean,
  settingsPopupIsShow: boolean,
  searchBarIsShow: boolean
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
  searchEngine: 'Google',
  textColor: 'black',
  shortcutsIsShow: true,
  formIsShow: false,
  settingsPopupIsShow: false,
  searchBarIsShow: true
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
      state.searchEngine = action.payload
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

    toggleSearchBar: state => {
      state.searchBarIsShow = !state.searchBarIsShow
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
  toggleSearchBar
} = newtabSlice.actions
