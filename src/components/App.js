import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Tabs from './AppTabs'
import AddCard from './CardAction'

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title='Flashcard' />
      <Tabs />
      <AddCard />
    </div>
  </MuiThemeProvider>
)

export default App
