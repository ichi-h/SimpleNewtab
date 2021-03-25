import { useState } from 'react'
import { useAppDispatch } from '../lib/hooks'
import { Display, togglePopup } from '../lib/newtabSlice'

import BGContent from './Popup/BGContent'
import LinkContent from './Popup/LinkContent'

import styles from '../styles/Popup.module.css'

export interface ContentStyle {
  style: { display: Display }
}

interface PopupProps {
  popupDisplay: Display,
  popupIndex: number
}

const Popup: React.FC<PopupProps> = (props) => {
  const [contentDisplay, setContentDisplay] = useState(
    ['initial', 'none'] as Display[]
  )

  const bgRadioCallback = () => {
    console.log(contentDisplay)
    setContentDisplay(['initial', 'none'])
  }

  const linkRadioCallback = () => {
    console.log(contentDisplay)
    setContentDisplay(['none', 'initial'])
  }

  const dispatch = useAppDispatch()
  const closeButtonCallback = () => {
    dispatch(togglePopup())
  }

  return (
    <div
      className={styles.popup}
      style={{
        display: props.popupDisplay,
        zIndex: props.popupIndex
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
                      onClick={bgRadioCallback}
                    />
                    <label htmlFor="settings-bg-radio">Background</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className={styles.settingsLinkRadio}
                      name="menu"
                      id="settings-link-radio"
                      onClick={linkRadioCallback}
                    />
                    <label htmlFor="settings-link-radio">Links</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.settingsRight}>
              <BGContent style={{ display: contentDisplay[0] }} />
              <LinkContent style={{ display: contentDisplay[1] }} />
            </div>
          </div>

          <div className={styles.settingsBottom}>
            <div className={styles.settingsButton}>
              <input
                type="button"
                value="close"
                onClick={closeButtonCallback}
              />
              <input
                type="button"
                value="OK"
                onClick={closeButtonCallback}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
