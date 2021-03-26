import SearchBox from '../components/SearchBox'
import Shortcuts from '../components/Shortcuts'
import SettingsButton from '../components/SettingsButton'
import SettingsPopup from '../components/SettingsPopup'
import { useAppSelector } from '../lib/hooks'

import styles from '../styles/Home.module.css'

export default function Home() {
  const bg = useAppSelector(state => state.bg)
  const bgColor = useAppSelector(state => state.bgColor)

  return (
    <div
      className={styles.newtab}
      style={{
        backgroundImage: bg,
        backgroundColor: bgColor
      }}
    >

      <SettingsPopup />

      <div className={styles.content}>
        <SearchBox />
        <Shortcuts />
      </div>

      <SettingsButton />

    </div>
  )
}
