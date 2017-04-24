import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './store/configureStore'
import App from './components/App'
import './styles/styles.scss'
require('./favicon.ico')
import cards from './data/cards'
import { fetchCard } from './actions'

const store = configureStore()
store.dispatch(fetchCard(cards))

injectTapEventPlugin()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
