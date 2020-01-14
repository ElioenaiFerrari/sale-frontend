import React from 'react'
import { Provider } from 'react-redux'

import GlobalStyle from './styles/global'

import { Header } from './components'

import Routes from './routes'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Header />
    <GlobalStyle />
    <Routes />
  </Provider>
)

export default App
