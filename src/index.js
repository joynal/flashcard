import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './store/configureStore'
import App from './components/App'
import './styles/styles.scss'
require('./favicon.ico')
import { cards } from './data/AppData'
import { addCard } from './actions'

const store = configureStore()

cards.forEach(card => {
  store.dispatch(addCard(card))
})

injectTapEventPlugin()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
