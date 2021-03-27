import { useAppSelector } from '../lib/hooks'

import styles from '../styles/Home.module.css'

const SearchBar: React.FC = () => {
  const searchEngine = useAppSelector(state => state.searchEngine)
  const searchBarIsShow = useAppSelector(state => state.searchBarIsShow)

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

  if (!searchBarIsShow) return <></>

  return (
    <div className={styles.searchBar}>
      <form action={searchAction} method="get">
          <input type="hidden" name="hl" />
          <input type="textbox" name="q" />
          <input type="submit" name="btnG" value="Search" />
      </form>
    </div>
  )
}

export default SearchBar
