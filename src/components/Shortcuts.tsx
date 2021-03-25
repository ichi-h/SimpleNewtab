import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { addItem } from '../lib/newtabSlice'

import styles from '../styles/Shortcuts.module.css'

const Shortcuts: React.FC = () => {
  const dispatch = useAppDispatch()

  const shortcuts = useAppSelector(state => state.shortcuts)

  return (
    <div className={styles.listItems} id="link-items">
      <p>Shortcuts</p>
    </div>
  )
}

export default Shortcuts
