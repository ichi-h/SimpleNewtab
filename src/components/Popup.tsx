import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { Display, togglePopupDisplay } from '../lib/newtabSlice'

import BGContent from './Popup/BGContent'
import SCContent from './Popup/SCContent'

import styles from '../styles/Popup.module.css'

export interface ContentStyle {
  style: { display: Display }
}

const Popup: React.FC = () => {
  const popupDisplay = useAppSelector(state => state.popupDisplay)
  const popupIndex = useAppSelector(state => state.popupIndex)

  const [contentDisplay, setContentDisplay] = useState(
    ['initial', 'none'] as Display[]
  )

  const onBGRadioClick = () => setContentDisplay(['initial', 'none'])
  const onSCRadioClick = () => setContentDisplay(['none', 'initial'])

  const dispatch = useAppDispatch()
  const onCloseButtonClick = () => dispatch(togglePopupDisplay())

  return (
    <div
      className={styles.popup}
      style={{
        display: popupDisplay,
        zIndex: popupIndex
      }}
    >
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
              <BGContent style={{ display: contentDisplay[0] }} />
              <SCContent style={{ display: contentDisplay[1] }} />
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

export default Popup
