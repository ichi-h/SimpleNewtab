import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { TextColor, setTextColor, toggleShortcuts } from '../../lib/newtabSlice'
import styles from '../../styles/PopupOption.module.css'

const ShortcutsOption: React.FC = () => {
  const shortcutsIsShow = useAppSelector(state => state.shortcutsIsShow)

  const dispatch = useAppDispatch()
  const toggleCheck = () => {
    dispatch(toggleShortcuts())
  }

  return (
    <div className={styles.settingsShortcutsOption}>
      <h2 className={styles.settingsH2_2}>Shortcuts</h2>
      <ul className={styles.settingsUl}>
        <li>
          <div className={styles.outer}>
            <p className={styles.left}>Show shortcuts</p>
            <div className={styles.right}>
              <input
                className="switch"
                id="sc-switch"
                type="checkbox"
                defaultChecked={shortcutsIsShow}
                onChange={toggleCheck}
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ShortcutsOption
