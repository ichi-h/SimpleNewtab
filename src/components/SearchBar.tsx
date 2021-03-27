import React from 'react'
import { useState } from 'react'
import { useAppSelector } from '../lib/hooks'

import styles from '../styles/SearchBar.module.css'

const SearchBar: React.FC = () => {
  const searchEngine = useAppSelector(state => state.searchEngine)
  const searchBarIsShow = useAppSelector(state => state.searchBarIsShow)
  const [searchBarVal, setSearchBarVal] = useState('')

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

  const updateSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarVal(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (searchBarVal === "") e.preventDefault()
  }

  if (!searchBarIsShow) return <></>

  return (
    <form
      className={styles.searchBar}
      autoComplete="off"
      action={searchAction}
      method="get"
      onSubmit={onSubmit}
    >
        <input type="hidden" name="hl" />
        <div className={styles.searchBarItem}>
          <label htmlFor="search-button">
            <input
              className={styles.searchButton}
              id="search-button"
              type="submit"
              name="btnG"
              value="Search"
            />
            <i className="searchbar icon-search" />
          </label>
          <input
            className={styles.searchBarTextBox}
            type="textbox"
            name="q"
            placeholder="Search..."
            defaultValue={searchBarVal}
            onChange={updateSearchBar}
          />
        </div>
    </form>
  )
}

export default SearchBar
