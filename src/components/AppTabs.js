import React from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs'

import Card from './AppCard'

const stateToProps = state => ({
  cards: state.cards
})

class AppTabs extends React.Component {
  state = {
    value: 'all',
  }

  handleChange = value => this.setState({ value })

  dataFilteredView = (cards, flag) => (
    cards.map(card => {
      if (card.known === flag) return <Card card={card} key={card.id}/>

      return null
    }
  ))

	render() {
		return (
			<Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="All" value="all">
          <div>
            {this.props.cards.map(card => (
              <Card card={card} key={card.id}/>
            ))}
          </div>
        </Tab>
        <Tab label="Known" value="known">
          <div>
            {this.dataFilteredView(this.props.cards, true)}
          </div>
        </Tab>
        <Tab label="Unknown" value="unknown">
          <div>
            {this.dataFilteredView(this.props.cards, false)}
          </div>
        </Tab>
		  </Tabs>
		)
	}
}

export default connect(stateToProps)(AppTabs)
