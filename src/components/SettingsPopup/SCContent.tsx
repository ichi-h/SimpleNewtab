import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { toggleShortcuts } from '../../lib/newtabSlice'
import { ContentProps } from '../SettingsPopup'

import styles from '../../styles/PopupContent.module.css'

const SCContent: React.FC<ContentProps> = (props) => {
  if (!props.bool) return <></>

  const shortcutsIsShow = useAppSelector(state => state.shortcutsIsShow)

  const dispatch = useAppDispatch()
  const toggleCheck = () => {
    dispatch(toggleShortcuts())
  }

  return (
    <div className={styles.settingsSCContent}>
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
            defaultChecked={shortcutsIsShow}
            onChange={toggleCheck}
          />
        </div>
      </div>
    </div>
  )
}

export default SCContent
