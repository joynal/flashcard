import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'

import App from './components/App'

import cards from './data/cards'
import { fetchCard } from './actions'

import './styles/styles.css'

const store = configureStore()
store.dispatch(fetchCard(cards))

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
