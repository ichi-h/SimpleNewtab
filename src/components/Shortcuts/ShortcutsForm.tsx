import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { Display, togglePopupDisplay } from '../../lib/newtabSlice'

import styles from '../../styles/ShortcutsForm.module.css'

const ShortcutsPopup: React.FC = () => {
  return (
    <div className={styles.shortcutsPopup}>
      <form onSubmit={(e) => {e.preventDefault(); console.log(e)}}>
        <div className={styles.formName}>
          <label htmlFor="form-name">Name:</label>
          <br />
          <input id="form-name" type="text" name="name" defaultValue="" required={true} />
        </div>
        <div className={styles.formURL}>
          <label htmlFor="form-url">URL:</label>
          <br />
          <input id="form-url" type="text" name="url" defaultValue="" required={true} />
        </div>
        <div className={styles.formButtons}>
          <input
            type="submit"
            value="Add"
          />
          <input type="button" value="cancel" />
        </div>
      </form>
    </div>
  )
}

export default ShortcutsPopup
