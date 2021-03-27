import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { TextColor, setBGColor, setTextColor } from '../../lib/newtabSlice'
import styles from '../../styles/PopupOption.module.css'

const ColorOption: React.FC = () => {
  const bgColor = useAppSelector(state => state.bgColor)
  const textColor = useAppSelector(state => state.textColor)
  const dispatch = useAppDispatch()

  const changeBGColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBGColor(e.target.value))
  }

  const changeTextColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTextColor(e.target.value as TextColor))
  }

  return (
    <div className={styles.settingsColorOption}>
      <h2 className={styles.settingsH2_2}>Color</h2>
      <ul className={styles.settingsUl}>
        <li>
          <div className={styles.outer}>
            <p className={styles.left}>Background color:</p>
            <input
              className={styles.right}
              id="bg-color"
              type="color"
              name="bg-color"
              defaultValue={bgColor}
              onChange={changeBGColor}
            />
          </div>
        </li>

        <li>
          <div className={styles.outer}>
            <p className={styles.left}>Text color:</p>
            <select
              className={styles.right}
              defaultValue={textColor}
              onChange={changeTextColor}
            >
              <option value="black">Black</option>
              <option value="gray">Gray</option>
              <option value="white">White</option>
            </select>
          </div>
        </li>

      </ul>
    </div>
  )
}
export default ColorOption
