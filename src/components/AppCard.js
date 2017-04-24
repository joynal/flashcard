import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import EditCard from './CardAction';
import { deleteCard, toggleKnownUnknown } from '../actions';
import '../styles/styles.scss'

const actionsToState = dispatch => ({
  deleteCard: id => dispatch(deleteCard(id)),
  toggle: id => dispatch(toggleKnownUnknown(id)),
});

export class AppCard extends Component {

  handleDelete = () => {
    this.props.deleteCard(this.props.card.id);
  }

  handleToggle = () => {
    this.props.toggle(this.props.card.id);
  }

  render() {
    let { card } = this.props;

    return (
      <Card>
        <Checkbox
          checked={card.known}
          onCheck={this.handleToggle}
        />
        <CardHeader
          title={card.title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        {card.description ? <CardText>{card.description}</CardText> : ''}
        <CardActions>
          <EditCard card={card}/>
          <FlatButton
            label="Delete"
            onTouchTap={this.handleDelete}
          />
        </CardActions>
        <CardText expandable={true}>
          {card.answer}
        </CardText>
      </Card>
    );
  }
}

export default connect(null, actionsToState)(AppCard);
