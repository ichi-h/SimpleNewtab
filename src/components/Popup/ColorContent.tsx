import { useAppDispatch } from '../../lib/hooks'
import { ContentStyle } from '../Popup'

import styles from '../../styles/Popup.module.css'

const ColorContent: React.FC<ContentStyle> = (props) => {
  return (
    <div
      className={styles.settingsColorContent}
      style={props.style}
    >
      <p>color</p>
    </div>
  )
}

export default ColorContent
