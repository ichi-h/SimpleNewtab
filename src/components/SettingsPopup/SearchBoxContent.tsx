import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { SearchEngine, toggleSearchBox } from '../../lib/newtabSlice'
import styles from '../../styles/PopupContent.module.css'

const SearchBoxContent: React.FC = () => {
  const searchBoxIsShow = useAppSelector(state => state.searchBoxIsShow)
  const dispatch = useAppDispatch()

  const toggleCheck = () => {
    dispatch(toggleSearchBox())
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
    </div>
  )
}

export default SearchBoxContent