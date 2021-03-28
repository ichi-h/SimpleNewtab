export interface ShortcutItems {
  name: string,
  url: string
}

export type SearchEngine = 'Google' | 'Bing' | 'DuckDuckGo'
export type TextColor = 'black' | 'gray' | 'white'

export interface UserSettingsInfo {
  bg: string,
  bgColor: string,
  shortcuts: ShortcutItems[],
  searchEngine: SearchEngine,
  textColor: TextColor,
  shortcutsIsShow: boolean,
  searchBarIsShow: boolean
}

export const keys = [
  'bg',
  'bgColor',
  'shortcuts',
  'searchEngine',
  'textColor',
  'shortcutsIsShow',
  'searchBarIsShow'
]

export function toLocalStrage(shortcuts: ShortcutItems[]): string {
  let strlist = []
  for (let item of shortcuts) {
    strlist.push(JSON.stringify(item))
  }

  let str = strlist.join(',,')

  return str
}

export function toRedux(str: string): ShortcutItems[] {
  let newStrList = str.split(',,')

  let shortcuts = []
  for (let item of newStrList) {
    shortcuts.push(JSON.parse(item))
  }

  return shortcuts
}
