import { useAppDispatch } from '../../lib/hooks'
import { ContentStyle } from '../Popup'

import styles from '../../styles/Popup.module.css'

const BGContent: React.FC<ContentStyle> = (props) => {
  return (
    <div 
      className={styles.settingsBGContent}
      style={props.style}
    >
      <p>bg</p>
    </div>
  )
}

export default BGContent
