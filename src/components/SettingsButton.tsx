import { useAppDispatch } from '../lib/hooks'
import { togglePopup } from '../lib/newtabSlice'

import styles from '../styles/Home.module.css'

const SettingsButton: React.FC = () => {
  const dispatch = useAppDispatch()
  const buttonCallback = () => dispatch(togglePopup())

  return (
    <div className={styles.settingsButton}>
      <input
        type="button"
        value="settings"
        onClick={buttonCallback}
      />
    </div>
  )
}

export default SettingsButton
