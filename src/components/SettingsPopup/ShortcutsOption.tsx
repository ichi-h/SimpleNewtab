import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { TextColor, setTextColor, toggleShortcuts } from '../../lib/newtabSlice'
import styles from '../../styles/PopupOption.module.css'

const ShortcutsOption: React.FC = () => {
  const shortcutsIsShow = useAppSelector(state => state.shortcutsIsShow)
  const textColor = useAppSelector(state => state.textColor)

  const dispatch = useAppDispatch()
  const toggleCheck = () => {
    dispatch(toggleShortcuts())
  }
  const changeTextColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTextColor(e.target.value as TextColor))
  }

  return (
    <div className={styles.settingsShortcutsOption}>
      <h2 className={styles.SCh2}>Shortcuts</h2>
      <div className="show-shortcuts">
        <input
          className="switch"
          id="sc-switch"
          type="checkbox"
          defaultChecked={shortcutsIsShow}
          onChange={toggleCheck}
        />
        <label
          className={styles.SCCheckLabel}
          htmlFor="sc-switch"
        >
          Show shortcuts
        </label>
      </div>

      <h3 className={styles.SCh3}>Text color</h3>
      <select
        className={styles.SCSelector}
        defaultValue={textColor}
        onChange={changeTextColor}
      >
        <option value="black">Black</option>
        <option value="gray">Gray</option>
        <option value="white">White</option>
      </select>
    </div>
  )
}

export default ShortcutsOption
