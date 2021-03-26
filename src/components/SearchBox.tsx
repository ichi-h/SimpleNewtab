import { useState } from 'react'

import styles from '../styles/Home.module.css'

const SearchBox: React.FC = () => {
  return (
    <div className={styles.searchBox}>
      <form action="https://duckduckgo.com/" method="get">
          <input type="hidden" name="hl" />
          <input type="textbox" name="q" />
          <input type="submit" name="btnG" value="Search" />
      </form>
    </div>
  )
}

export default SearchBox
