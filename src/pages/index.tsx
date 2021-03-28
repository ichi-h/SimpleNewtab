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
  const dispatch = useAppDispatch()
  const bg = useAppSelector(state => state.bg)
  const bgColor = useAppSelector(state => state.bgColor)
  const coverRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const [progress, setProgress] = useState('none')

  useEffect(() => {
    switch (progress) {
      case 'none':
        dispatch(load())
        setProgress('loadedState')
        break

      case 'loadedState':
        let img = document.createElement('img')
        img.src = bg
        img.addEventListener('load', () => {
          coverRef.current.classList.add('fadeout')
        }, false)
        setProgress('complated')
        break

      case 'complated':
        break
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
          backgroundImage: `url("${bg}")`,
          backgroundColor: bgColor
        }}
      >

        <div className={styles.cover} ref={coverRef}>aaa</div>

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
