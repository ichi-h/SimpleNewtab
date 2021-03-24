import { Visibility } from '../lib/newtabSlice'

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
      <p>popup</p>
    </div>
  )
}

export default Popup
