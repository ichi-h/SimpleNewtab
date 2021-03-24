// import Head from 'next/head'

import SearchBox from '../components/SearchBox'
import LinkItems from '../components/LinkItems'
import SettingsButton from '../components/SettingsButton'
import Popup from '../components/Popup'
import store from '../lib/redux'

import styles from '../styles/Home.module.css'

export default function Home() {
  const isShow = store.getState().isShow
  const zIndex = store.getState().zIndex

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
