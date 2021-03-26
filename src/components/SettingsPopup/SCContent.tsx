import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { ContentStyle } from '../SettingsPopup'
import { toggleSCDisplay } from '../../lib/newtabSlice'

import styles from '../../styles/PopupContent.module.css'

const SCContent: React.FC<ContentStyle> = (props) => {
  const shortcutsVisible = useAppSelector(state => state.shortcutsVisible)
  let checked: boolean

  if (shortcutsVisible === 'visible') {
    checked = true
  }
  else {
    checked = false
  }

  const dispatch = useAppDispatch()
  const toggleCheck = () => {
    dispatch(toggleSCDisplay())
  }

  return (
    <div
      className={styles.settingsSCContent}
      style={props.style}
    >
      <div className={styles.SCOption}>
        <div className={styles.SCOptionLeft}>
          <p>Show shortcuts</p>
        </div>
        <div className={styles.SCOptionRight}>
          <input
            className={styles.SCCheck}
            id=""
            type="checkbox"
            name=""
            defaultChecked={checked}
            onChange={toggleCheck}
          />
        </div>
      </div>
    </div>
  )
}

export default SCContent
