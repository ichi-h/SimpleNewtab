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
  bg: '',
  bgColor: '#ffffff',
  shortcuts: [],
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
    load: state => {
      const strage: string[] = []
      for (let key of keys) {
        strage.push(localStorage.getItem(key))
      }

      if (strage.indexOf(null) === -1) {
        state.bg = strage[0]
        state.bgColor = strage[1]
        state.shortcuts = toRedux(strage[2])
        state.searchEngine = strage[3] as SearchEngine
        state.textColor = strage[4] as TextColor

        const toBoolean = (str: string) => str.toLowerCase() === 'true'
        state.shortcutsIsShow = toBoolean(strage[5])
        state.searchBarIsShow = toBoolean(strage[6])
      }
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
