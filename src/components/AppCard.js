import React from 'react'
import { connect } from 'react-redux'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'

import EditCard from './CardAction'
import { deleteCard, toggleKnownUnknown } from '../actions'

import '../styles/styles.css'

const actionsToState = dispatch => ({
  deleteCard: id => dispatch(deleteCard(id)),
  toggle: id => dispatch(toggleKnownUnknown(id)),
})

const AppCard = props => (
  <Card>
    <Checkbox
      checked={props.card.known}
      onCheck={() => props.toggle(props.card.id)}
    />
    <CardHeader
      title={props.card.title}
      actAsExpander={true}
      showExpandableButton={true}
    />
    {props.card.description ? <CardText>{props.card.description}</CardText> : ''}
    <CardActions>
      <EditCard card={props.card}/>
      <FlatButton
        label="Delete"
        onTouchTap={() => props.deleteCard(props.card.id)}
      />
    </CardActions>
    <CardText expandable={true}>
      {props.card.answer}
    </CardText>
  </Card>
)

export default connect(null, actionsToState)(AppCard)
