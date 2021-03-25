import { useAppDispatch } from '../../lib/hooks'
import { ContentStyle } from '../Popup'

import styles from '../../styles/Popup.module.css'

const LinkContent: React.FC<ContentStyle> = (props) => {
  return (
    <div
      className={styles.settingsLinkContent}
      style={props.style}
    >
      <p>link</p>
    </div>
  )
}

export default LinkContent
