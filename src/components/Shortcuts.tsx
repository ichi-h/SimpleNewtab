import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { addShortcutItem } from '../lib/newtabSlice'

import styles from '../styles/Shortcuts.module.css'

const Shortcuts: React.FC = () => {
  const dispatch = useAppDispatch()

  const shortcuts = useAppSelector(state => state.shortcuts)

  return (
    <div className={styles.shortcuts} id="link-items">
      {
        shortcuts.map((item, i) => { return (
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
              htmlFor="remove-shortcut"
            >
              <input
                className={styles.removeShortcutButton}
                id="remove-shortcut"
                type="button"
              />
              <div className={styles.removeIcon}>
                <i className="icon-cancel" />
              </div>
            </label>
          </div>
        )})
      }
    </div>
  )
}

export default Shortcuts
