import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { toggleShortcuts } from '../../lib/newtabSlice'
import styles from '../../styles/PopupContent.module.css'

const SCContent: React.FC = () => {
  const shortcutsIsShow = useAppSelector(state => state.shortcutsIsShow)

  const dispatch = useAppDispatch()
  const toggleCheck = () => {
    dispatch(toggleShortcuts())
  }

  return (
    <div className={styles.settingsSCContent}>
      <h2 className={styles.SCh2}>Shortcuts</h2>
      <div className="show-shortcuts">
        <input
          className={styles.SCCheck}
          id="sc-check"
          type="checkbox"
          defaultChecked={shortcutsIsShow}
          onChange={toggleCheck}
        />
        <label
          className={styles.SCCheckLabel}
          htmlFor="sc-check"
        >
          Show shortcuts
        </label>
      </div>

      <h3 className={styles.SCh3}>Text color</h3>
      <select className={styles.SCSelector} defaultValue="black">
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
    </div>
  )
}

export default SCContent
