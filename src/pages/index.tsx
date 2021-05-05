import { useState, useEffect, useRef } from 'react'
import Head from 'next/head';
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { load, save } from '../lib/newtabSlice'
import { keys } from '../lib/userSettingsInfo'

import SearchBar from '../components/SearchBar'
import Shortcuts from '../components/Shortcuts'
import SettingsButton from '../components/SettingsButton'
import SettingsPopup from '../components/SettingsPopup'

import styles from '../styles/Home.module.css'

export default function Home() {
  const dispatch = useAppDispatch()
  const bg = useAppSelector(state => state.bg)
  const bgColor = useAppSelector(state => state.bgColor)
  const coverRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [task, setTask] = useState('loadLocalStrage')

  const preloadBG = () => {
    if (bg === '') {
      coverRef.current.classList.add('fadeout')
    }
    else {
      let img = document.createElement('img')
      img.src = bg
      img.addEventListener('load', () => {
        coverRef.current.classList.add('fadeout')
      }, false)
    }
  }

  useEffect(() => {
    switch (task) {
      case 'loadLocalStrage':
        const strage: string[] = keys.map((key) => localStorage.getItem(key))
        const empty = strage.indexOf(null) !== -1

        if (!empty) {
          dispatch(load())
        }
        else {
          dispatch(save())
        }

        setTask('preloadBG')
        break

      case 'preloadBG':
        preloadBG()
        setTask('none')
        break

      case 'none':
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

        <div className={styles.cover} ref={coverRef}></div>

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
