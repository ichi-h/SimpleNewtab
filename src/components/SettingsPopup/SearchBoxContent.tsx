import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { SearchEngine, setSearchEngine, toggleSearchBox } from '../../lib/newtabSlice'
import styles from '../../styles/PopupContent.module.css'

const SearchBoxContent: React.FC = () => {
  const searchBoxIsShow = useAppSelector(state => state.searchBoxIsShow)
  const searchEngine = useAppSelector(state => state.searchEngine)
  const dispatch = useAppDispatch()

  const toggleCheck = () => {
    dispatch(toggleSearchBox())
  }

  const changeSearchEngine = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    dispatch(setSearchEngine(e.target.value as SearchEngine))
  }

  return (
    <div className={styles.settingsSBContent}>
      <h2 className={styles.SBh2}>Search box</h2>
      <div className="show-search-box">
        <input
          className={styles.SBCheck}
          id="sb-check"
          type="checkbox"
          defaultChecked={searchBoxIsShow}
          onChange={toggleCheck}
        />
        <label
          className={styles.SBCheckLabel}
          htmlFor="sb-check"
        >
          Show search box
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

export default SearchBoxContent