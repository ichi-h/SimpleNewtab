import { useAppSelector } from '../lib/hooks'

import styles from '../styles/Home.module.css'

const SearchBox: React.FC = () => {
  const searchEngine = useAppSelector(state => state.searchEngine)
  const searchBoxIsShow = useAppSelector(state => state.searchBoxIsShow)

  let searchAction: string
  switch (searchEngine) {
    case 'Google':
      searchAction = 'https://www.google.com/search'
      break
    case 'Bing':
      searchAction = 'https://www.bing.com/search'
      break
    case 'DuckDuckGo':
      searchAction = 'https://duckduckgo.com'
      break
  }

  if (!searchBoxIsShow) return <></>

  return (
    <div className={styles.searchBox}>
      <form action={searchAction} method="get">
          <input type="hidden" name="hl" />
          <input type="textbox" name="q" />
          <input type="submit" name="btnG" value="Search" />
      </form>
    </div>
  )
}

export default SearchBox
