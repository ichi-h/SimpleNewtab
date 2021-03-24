import { Visibility } from '../lib/redux'

import styles from '../styles/Home.module.css'

interface PopupProps {
  isShow: Visibility,
  zIndex: number
}

const Popup: React.FC<PopupProps> = (props) => {
  return (
    <div
      className={styles.popup}
      style={{
        visibility: props.isShow,
        zIndex: props.zIndex
      }}
    >
    </div>
  )
}

export default Popup
