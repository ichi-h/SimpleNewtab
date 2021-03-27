import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { SearchEngine, setSearchEngine, toggleSearchBar } from '../../lib/newtabSlice'
import styles from '../../styles/PopupOption.module.css'

const SearchBarOption: React.FC = () => {
  const searchBarIsShow = useAppSelector(state => state.searchBarIsShow)
  const searchEngine = useAppSelector(state => state.searchEngine)
  const dispatch = useAppDispatch()

  const toggleCheck = () => {
    dispatch(toggleSearchBar())
  }

  const changeSearchEngine = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    dispatch(setSearchEngine(e.target.value as SearchEngine))
  }

  return (
    <div className={styles.settingsSBOption}>
      <h2 className={styles.settingsH2_2}>
        <i className="icon-search" /> Search bar
      </h2>
      <ul className={styles.settingsUl}>
        <li>
          <div className={styles.outer}>
            <p className={styles.left}>Show search bar</p>
            <div className={styles.right}>
              <input
                className="sb switch"
                id="sb-switch"
                type="checkbox"
                defaultChecked={searchBarIsShow}
                onChange={toggleCheck}
              />
            </div>
          </div>
        </li>

        <li>
          <div className={styles.outer}>
            <p className={styles.left}>Search Engine</p>
            <select
              className={styles.right}
              defaultValue={searchEngine}
              onChange={changeSearchEngine}
            >
              <option value="Google">Google</option>
              <option value="Bing">Bing</option>
              <option value="DuckDuckGo">DuckDuckGo</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SearchBarOption