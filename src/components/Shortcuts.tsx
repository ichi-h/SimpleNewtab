import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { setShortcutItem } from '../lib/newtabSlice'

import styles from '../styles/Shortcuts.module.css'

const Shortcuts: React.FC = () => {
  const shortcuts = useAppSelector(state => state.shortcuts)
  const shortcutsVisible = useAppSelector(state => state.shortcutsVisible)

  const dispatch = useAppDispatch()

  const removeShortcut = (index: number ) => {
    let shortcuts_ = shortcuts.filter((_, i) => i !== index)
    dispatch(setShortcutItem(shortcuts_))
  }

  if (shortcutsVisible === 'hidden') return <div></div>

  return (
    <div
      className={styles.shortcuts}
      id="link-items"
      style={{ visibility: shortcutsVisible }}
    >
      {
        shortcuts.map((item, i) => {
          return (
            <div className={styles.shortcutItem} key={i}>
              <a
                className={styles.shortcutLink}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.shortcutCircle}>
                  <img
                    className={styles.shortcutIcon}
                    src={`https://www.google.com/s2/favicons?domain=${item.link}`}
                  />
                </div>
                <p className={styles.shortcutText}>{ item.name }</p>
              </a>
              <label
                className={styles.removeShortcut}
                htmlFor={'remove-shortcut-' + i}
              >
                <input
                  className={styles.removeShortcutButton}
                  id={'remove-shortcut-' + i}
                  type="button"
                  onClick={() => removeShortcut(i)}
                />
                <div className={styles.removeIcon}>
                  <i className="icon-cancel" />
                </div>
              </label>
            </div>
        )})
      }
      <div className={styles.shortcutItem}>
        <a
          className={styles.shortcutLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => console.log('clicked')}
        >
          <div className={styles.shortcutCircle}>
            <i className="icon-plus"></i>
          </div>
          <p className={styles.shortcutText}>Add</p>
        </a>
      </div>
    </div>
  )
}

export default Shortcuts
