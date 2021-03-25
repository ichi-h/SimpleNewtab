import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { Display, togglePopup } from '../lib/newtabSlice'

import BGContent from './Popup/BGContent'
import LinkContent from './Popup/LinkContent'
import ColorContent from './Popup/ColorContent'

import styles from '../styles/Popup.module.css'

export interface ContentStyle {
  style: { display: Display }
}

const Popup: React.FC = () => {
  const popupDisplay = useAppSelector(state => state.popupDisplay)
  const popupIndex = useAppSelector(state => state.popupIndex)

  const [contentDisplay, setContentDisplay] = useState(
    ['initial', 'none', 'none'] as Display[]
  )

  const onBGRadioClick = () => setContentDisplay(['initial', 'none', 'none'])
  const onLinkRadioClick = () => setContentDisplay(['none', 'initial', 'none'])
  const onColorRadioClick = () => setContentDisplay(['none', 'none', 'initial'])

  const dispatch = useAppDispatch()
  const onCloseButtonClick = () => dispatch(togglePopup())

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
                      className={styles.settingsLinkRadio}
                      name="menu"
                      id="settings-link-radio"
                      onClick={onLinkRadioClick}
                    />
                    <label htmlFor="settings-link-radio">Links</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className={styles.settingsColorRadio}
                      name="menu"
                      id="settings-color-radio"
                      onClick={onColorRadioClick}
                    />
                    <label htmlFor="settings-color-radio">Color</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.settingsRight}>
              <BGContent style={{ display: contentDisplay[0] }} />
              <LinkContent style={{ display: contentDisplay[1] }} />
              <ColorContent style={{ display: contentDisplay[2] }} />
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
