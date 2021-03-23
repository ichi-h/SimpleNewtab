// import Head from 'next/head'

import { SearchBox } from './components/SearchBox'
import { LinkItems } from './components/LinkItems'
import { SettingsButton } from './components/SettingsButton'
import { Popup } from './components/Popup'
import { store } from './redux/redux'

import  '../styles/Home.module.css'

export default function Home() {
  const isShow = store.getState().isShow

  return (
    <div className="newtab">

      <Popup isShow={isShow} />

      <div className="content">
        <SearchBox />
        <LinkItems />
      </div>

      <SettingsButton />

    </div>
  )
}
