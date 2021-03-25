import { useAppDispatch } from '../../lib/hooks'
import { setBG } from '../../lib/newtabSlice'
import { ContentStyle } from '../Popup'

import styles from '../../styles/PopupContent.module.css'

const BGContent: React.FC<ContentStyle> = (props) => {
  const dispatch = useAppDispatch()

  const sampleImages = new Array(4).fill('').map((_, i) => `./assets/img/demo${i+1}.jpg`)

  const onSampleImgClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    dispatch(setBG(e.currentTarget.src))
  }

  const onNoImgClick = () => dispatch(setBG(''))

  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedBG = e.target.files[0]

    let BGReader = new FileReader()

    BGReader.onload = (e) => {
      dispatch(setBG(e.target.result as string))
    }

    BGReader.readAsDataURL(uploadedBG)
  }

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
              key={`image${i+1}`}
              onClick={onSampleImgClick}
            />
          )})
        }
        <div
          className={styles.noImageButton}
          onClick={onNoImgClick}
        >
          <p>No Image</p>
        </div>
        <label htmlFor="bg-upload-button" className={styles.bgUpload}>
          <input
            className={styles.bgUploadButton}
            id="bg-upload-button"
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={onFileUpload}
          />
          <p>Upload</p>
        </label>
      </div>
    </div>
  )
}

export default BGContent
