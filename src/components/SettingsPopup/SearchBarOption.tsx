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
      <h2 className={styles.SBh2}>Search bar</h2>
      <div className="show-search-box">
        <input
          className={styles.SBCheck}
          id="sb-check"
          type="checkbox"
          defaultChecked={searchBarIsShow}
          onChange={toggleCheck}
        />
        <label
          className={styles.SBCheckLabel}
          htmlFor="sb-check"
        >
          Show search bar
        </label>
      </div>

      <h3 className={styles.SBh3}>Search engine</h3>
      <select
        className={styles.SBSelector}
        defaultValue={searchEngine}
        onChange={changeSearchEngine}
      >
        <option value="Google">Google</option>
        <option value="Bing">Bing</option>
        <option value="DuckDuckGo">DuckDuckGo</option>
      </select>
    </div>
  )
}

export default SearchBarOption