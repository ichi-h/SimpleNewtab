import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { togglePopup } from '../lib/newtabSlice'

import styles from '../styles/SettingsButton.module.css'

const SettingsButton: React.FC = () => {
  const textColor = useAppSelector(state => state.textColor)
  const dispatch = useAppDispatch()
  const showPopup = () => dispatch(togglePopup())

  return (
    <label className={styles.settingsButton} htmlFor="settings-button">
      <input
        id="settings-button"
        type="button"
        value="settings"
        onClick={showPopup}
      />
      <i className="icon-cog" style={{ color: textColor }} />
    </label>
  )
}

export default SettingsButton
