import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  UserSettingsInfo,
  ShortcutItems,
  SearchEngine,
  TextColor,
  keys,
  toLocalStrage,
  toRedux
} from './userSettingsInfo'

export interface NewtabState extends UserSettingsInfo {
  formIsShow: boolean,
  settingsPopupIsShow: boolean,
}

const initialState: NewtabState = {
  bg: './assets/img/demo1.jpg',
  bgColor: '#ffffff',
  shortcuts: [],
  searchEngine: 'Google',
  textColor: 'white',
  shortcutsIsShow: true,
  formIsShow: false,
  settingsPopupIsShow: false,
  searchBarIsShow: true
}

export const newtabSlice = createSlice({
  name: 'newtab',

  initialState,

  reducers: {
    load: state => {
      state.bg = localStorage.getItem('bg')
      state.bgColor = localStorage.getItem('bgColor')
      state.shortcuts = toRedux(localStorage.getItem('shortcuts'))
      state.searchEngine = localStorage.getItem('searchEngine') as SearchEngine
      state.textColor = localStorage.getItem('textColor') as TextColor

      const toBoolean = (str: string) => str.toLowerCase() === 'true'
      state.shortcutsIsShow = toBoolean(localStorage.getItem('shortcutsIsShow'))
      state.searchBarIsShow = toBoolean(localStorage.getItem('searchBarIsShow'))
    },

    save: state => {
      const newSettings = {
        bg: state.bg,
        bgColor: state.bgColor,
        shortcuts: toLocalStrage(state.shortcuts),
        searchEngine: state.searchEngine,
        textColor: state.textColor,
        shortcutsIsShow: state.shortcutsIsShow,
        searchBarIsShow: state.searchBarIsShow
      }

      for (let key of keys) {
        localStorage.setItem(key, newSettings[key])
      }
    },

    setBG: (state, action: PayloadAction<string>) => {
      state.bg = action.payload
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
  load,
  save,
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
