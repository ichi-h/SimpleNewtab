import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { togglePopup } from '../lib/newtabSlice'

import BGOption from './SettingsPopup/BGOption'
import SearchBoxOption from './SettingsPopup/SearchBoxOption'
import ShortcutsOption from './SettingsPopup/ShortcutsOption'

import styles from '../styles/SettingsPopup.module.css'

const SettingsPopup: React.FC = () => {
  const setSettingsPopupIsShow = useAppSelector(state => state.settingsPopupIsShow)

  const dispatch = useAppDispatch()
  const onCloseButtonClick = () => dispatch(togglePopup())

  if (!setSettingsPopupIsShow) return <></>

  return (
    <div className={styles.settingsPopup}>
      <h1 className={styles.popupH1}>Settings</h1>

      <div className={styles.settingsTop}>
        <div className={styles.settingsScrollbar}>
          <BGOption />
          <SearchBoxOption />
          <ShortcutsOption />
        </div>
      </div>

      <div className={styles.settingsBottom}>
        <div className={styles.settingsButton}>
          <input
            type="button"
            value="close"
            onClick={onCloseButtonClick}
          />
          <input
            type="button"
            value="OK"
            onClick={onCloseButtonClick}
          />
        </div>
      </div>
    </div>
  )
}

export default SettingsPopup
