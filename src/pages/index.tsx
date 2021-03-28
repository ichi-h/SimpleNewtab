import { useState, useEffect, useRef } from 'react'
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
  const newtabRef = useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    if (!loaded) {
      const loadLocalStrage = async () => dispatch(load())
      
      const preloadBG = async () => {
        if (bg !== '') {
          let img = document.createElement('img')
          img.src = bg
          img.addEventListener('load', () => {
            newtabRef.current.classList.add('fadein')
          }, false)
        }
        else {
          newtabRef.current.classList.add('fadein')
        }
      }

      const end = async () => setLoaded(true)

      const allProcess = async () => {
        await loadLocalStrage()
        await preloadBG()
        await end()
      }

      allProcess()
    }
  })

  return (
    <>
      <Head>
        <title>New tab</title>
      </Head>

      <div
        className={styles.newtab}
        ref={newtabRef}
        style={{
          backgroundImage: `url("${bg}")`,
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
