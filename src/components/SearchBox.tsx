import { useAppSelector } from '../lib/hooks'

import styles from '../styles/Home.module.css'

const SearchBox: React.FC = () => {
  const searchAction = useAppSelector(state => state.searchAction)
  const searchBoxIsShow = useAppSelector(state => state.searchBoxIsShow)

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
