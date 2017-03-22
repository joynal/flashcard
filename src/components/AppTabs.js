import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import Card from './AppCard';

class AppTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'all',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  }

  dataFilteredView = (cards, flag) => {
    return cards.map((card) => {
      if (card.known === flag) {
        return (
          <div key={card.id}>
            <Card card={card}/>
          </div>
        );
      }
    });
  }

	render(){
		return (
			<Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="All" value="all">
          <div>
            {
              this.props.cards.map(function (card) {
                return (
                  <div key={card.id}>
                    <Card card={card}/>
                  </div>
                );
              })
            }
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
		);
	}
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(AppTabs);
