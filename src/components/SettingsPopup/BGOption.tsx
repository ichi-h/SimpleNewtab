import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { setBG, setBGColor } from '../../lib/newtabSlice'

import styles from '../../styles/PopupOption.module.css'

const BGOption: React.FC = () => {
  const dispatch = useAppDispatch()

  const onSampleImgClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    dispatch(setBG(e.currentTarget.src))
  }

  const onNoImgClick = () => dispatch(setBG(''))

  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedBG = e.target.files[0]

    if (uploadedBG === undefined) return
    // When the input value changed something to "undefined",
    // the type error occurs on readAsDataURL.

    if (uploadedBG.type.indexOf('image/')) {
      alert(`Error: Could not read "${uploadedBG.name}"`)
      return
    }

    let BGReader = new FileReader()

    BGReader.onload = (e) => {
      dispatch(setBG(e.target.result as string))
    }

    try {
      BGReader.readAsDataURL(uploadedBG)
    }
    catch (error) {
      alert(error)
    }
  }

  const sampleImages = new Array(4).fill('').map((_, i) => `./assets/img/demo${i+1}.jpg`)

  return (
    <div className={styles.settingsBGOption}>
      <h2 className={styles.settingsH2}>Background</h2>
      <div className={styles.imageGrid}>

        <label htmlFor="bg-upload-button" className={styles.bgUpload}>
          <input
            className={styles.bgUploadButton}
            id="bg-upload-button"
            type="file"
            accept="image/*"
            onChange={onFileUpload}
          />
          <p>Upload</p>
        </label>

        <div
          className={styles.noImageButton}
          onClick={onNoImgClick}
        >
          <p>No Image</p>
        </div>

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

      </div>
    </div>
  )
}

export default BGOption
