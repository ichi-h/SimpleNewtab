import { useAppDispatch } from '../../lib/hooks'
import { setBG } from '../../lib/newtabSlice'
import { ContentStyle } from '../Popup'

import styles from '../../styles/PopupContent.module.css'

const BGContent: React.FC<ContentStyle> = (props) => {
  const dispatch = useAppDispatch()

  const sampleImages = new Array(5).fill('').map((_, i) => `./assets/img/demo${i+1}.jpg`)

  return (
    <div 
      className={styles.settingsBGContent}
      style={props.style}
    >
      <div className={styles.imageGrid}>
        {
          sampleImages.map((url, i) => { return (
            <img
              className={styles.bgThumbnail}
              onContextMenu={(e)=> e.preventDefault()}
              src={url}
              alt={`image${i+1}`}
              onClick={(url) => dispatch(setBG(url.currentTarget.src))}
            />
          )})
        }
      </div>
    </div>
  )
}

export default BGContent
