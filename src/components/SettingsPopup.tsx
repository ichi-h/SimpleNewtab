import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { togglePopup } from '../lib/newtabSlice'

import BGContent from './SettingsPopup/BGContent'
import SCContent from './SettingsPopup/SCContent'

import styles from '../styles/SettingsPopup.module.css'

export interface ContentProps {
  bool: boolean
}

const SettingsPopup: React.FC = () => {
  const setSettingsPopupIsShow = useAppSelector(state => state.settingsPopupIsShow)

  const [contentDisplay, setContentDisplay] = useState([true, false])

  const onBGRadioClick = () => setContentDisplay([true, false])
  const onSCRadioClick = () => setContentDisplay([false, true])

  const dispatch = useAppDispatch()
  const onCloseButtonClick = () => dispatch(togglePopup())

  if (!setSettingsPopupIsShow) return <></>

  return (
    <div className={styles.settingsPopup}>
      <div className={styles.outerSettings}>
        <div className={styles.settings}>

          <div className={styles.settingsTop}>
            <div className={styles.settingsLeft}>
              <div className={styles.settingsRadio}>
                <ul>
                  <li>
                    <input
                      type="radio"
                      className={styles.settingsBGRadio}
                      name="menu"
                      id="settings-bg-radio"
                      defaultChecked={true}
                      onClick={onBGRadioClick}
                    />
                    <label htmlFor="settings-bg-radio">Background</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className={styles.settingsSCRadio}
                      name="menu"
                      id="settings-sc-radio"
                      onClick={onSCRadioClick}
                    />
                    <label htmlFor="settings-sc-radio">SCs</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.settingsRight}>
              <BGContent bool={contentDisplay[0]} />
              <SCContent bool={contentDisplay[1]} />
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
      </div>
    </div>
  )
}

export default SettingsPopup
