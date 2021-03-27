import { Provider } from 'react-redux'

import { store } from '../lib/store'

import '../styles/globals.css'
import '../styles/2020Toggle.css'
import '../../public/assets/fontello/css/fontello.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
