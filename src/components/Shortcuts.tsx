import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { setShortcutItem , toggleForm } from '../lib/newtabSlice'

import ShortcutForm from './Shortcuts/ShortcutsForm'

import styles from '../styles/Shortcuts.module.css'

const Shortcuts: React.FC = () => {
  const shortcuts = useAppSelector(state => state.shortcuts)
  const shortcutsIsShow = useAppSelector(state => state.shortcutsIsShow)
  const textColor = useAppSelector(state => state.textColor)

  const dispatch = useAppDispatch()

  const removeShortcut = (index: number ) => {
    let shortcuts_ = shortcuts.filter((_, i) => i !== index)
    dispatch(setShortcutItem(shortcuts_))
  }

  const onAddClick = () => dispatch(toggleForm())

  if (!shortcutsIsShow) return <></>

  return (
    <div
      className={styles.shortcuts}
      id="url-items"
    >
      {
        shortcuts.map((item, i) => {
          return (
            <div className={styles.shortcutItem} key={i}>
              <a
                className={styles.shortcutURL}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.shortcutCircle}>
                  <img
                    className={styles.shortcutIcon}
                    src={`https://www.google.com/s2/favicons?domain=${item.url}`}
                  />
                </div>
                <p
                  className={styles.shortcutText}
                  style={{ color: textColor }}
                >
                  { item.name }
                </p>
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
          className={styles.shortcutURL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onAddClick}
        >
          <div className={styles.shortcutCircle}>
            <i className="icon-plus"></i>
          </div>
          <p
            className={styles.shortcutText}
            style={{ color: textColor }}
          >
            Add
          </p>
        </a>
      </div>

      <ShortcutForm />
    </div>
  )
}

export default Shortcuts
