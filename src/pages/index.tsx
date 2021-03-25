import SearchBox from '../components/SearchBox'
import LinkItems from '../components/LinkItems'
import SettingsButton from '../components/SettingsButton'
import Popup from '../components/Popup'
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

      <Popup />

      <div className={styles.content}>
        <SearchBox />
        <LinkItems />
      </div>

      <SettingsButton />

    </div>
  )
}
