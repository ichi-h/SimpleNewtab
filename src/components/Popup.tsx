import { useAppDispatch } from '../lib/hooks'
import { Visibility, togglePopup } from '../lib/newtabSlice'

import styles from '../styles/Popup.module.css'

interface PopupProps {
  isShow: Visibility,
  zIndex: number
}

const Popup: React.FC<PopupProps> = (props) => {
  const dispatch = useAppDispatch()
  const closeButtonCallback = () => dispatch(togglePopup())

  return (
    <div
      className={styles.popup}
      style={{
        visibility: props.isShow,
        zIndex: props.zIndex
      }}
    >
      <div className={styles.outerSettings}>
        <div className={styles.settings}>
          <p>popup</p>
          <input
            type="button"
            value="close"
            onClick={closeButtonCallback}
          />
        </div>
      </div>
    </div>
  )
}

export default Popup
