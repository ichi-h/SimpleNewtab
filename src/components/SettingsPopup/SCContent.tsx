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
      <h2>Shortcuts</h2>
      <ul className={styles.SCOptions}>
        <li>
          <input
            className={styles.SCCheck}
            id="sc-check"
            type="checkbox"
            name=""
            defaultChecked={shortcutsIsShow}
            onChange={toggleCheck}
            />
          <label htmlFor="sc-check">Show shortcuts</label>
        </li>
      </ul>
    </div>
  )
}

export default SCContent
