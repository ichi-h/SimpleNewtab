import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { addShortcutItem } from '../lib/newtabSlice'

import styles from '../styles/Shortcuts.module.css'

const Shortcuts: React.FC = () => {
  const dispatch = useAppDispatch()

  const shortcuts = useAppSelector(state => state.shortcuts)

  return (
    <div className={styles.shortcuts} id="link-items">
      {
        shortcuts.map((item) => { return (
          <a
            className={styles.shortcutItem}
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
        )})
      }
    </div>
  )
}

export default Shortcuts
