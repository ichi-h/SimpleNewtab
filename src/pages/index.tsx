import { useState, useEffect } from 'react'
import Head from 'next/head';
import SearchBar from '../components/SearchBar'
import Shortcuts from '../components/Shortcuts'
import SettingsButton from '../components/SettingsButton'
import SettingsPopup from '../components/SettingsPopup'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { load } from '../lib/newtabSlice'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const dispatch = useAppDispatch()
  const bg = useAppSelector(state => state.bg)
  const bgColor = useAppSelector(state => state.bgColor)

  useEffect(() => {
    if (!loaded) {
      dispatch(load())
      setLoaded(true)
    }
  })

  return (
    <>
      <Head>
        <title>New tab</title>
      </Head>

      <div
        className={styles.newtab}
        style={{
          backgroundImage: bg,
          backgroundColor: bgColor
        }}
      >

        <SettingsPopup />

        <div className={styles.content}>
          <SearchBar />
          <Shortcuts />
        </div>

        <SettingsButton />

      </div>
    </>
  )
}
