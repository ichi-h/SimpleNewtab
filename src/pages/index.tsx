import { Provider } from 'react-redux'

import SearchBox from '../components/SearchBox'
import LinkItems from '../components/LinkItems'
import SettingsButton from '../components/SettingsButton'
import Popup from '../components/Popup'
import { useAppSelector } from '../lib/hooks'
import { store } from '../lib/store'

import styles from '../styles/Home.module.css'

export default function Home() {
  const isShow = useAppSelector(state => state.isShow)
  const zIndex = useAppSelector(state => state.zIndex)

  return (
    <div className={styles.newtab}>

    <Popup isShow={isShow} zIndex={zIndex} />

    <div className={styles.content}>
      <SearchBox />
      <LinkItems />
    </div>

    <SettingsButton />

    </div>
  )
}
