import { useAppDispatch } from '../../lib/hooks'
import { setBG } from '../../lib/newtabSlice'
import { ContentStyle } from '../Popup'

import styles from '../../styles/Popup.module.css'

const BGContent: React.FC<ContentStyle> = (props) => {
  const dispatch = useAppDispatch()
  const updateBG = () => {
    dispatch(setBG('../assets/img/demo2.jpg'))
  }

  return (
    <div 
      className={styles.settingsBGContent}
      style={props.style}
    >
      <p>bg</p>
      <input type="button" value="update" onClick={updateBG} />
    </div>
  )
}

export default BGContent
