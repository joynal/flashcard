import React, { Component } from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import { v4 } from 'uuid';
import { FormsyText } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import { addCard, editCard } from '../actions';

const actionsToState = dispatch => ({
  addNewCard: card =>  dispatch(addCard(card)),
  editACard: (id, data) => dispatch(editCard(id, data)),
});


export class CardForm extends Component {
  state = {
    canSubmit: false,
  }

  enableButton = () => {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton = () => {
    this.setState({
      canSubmit: false,
    });
  }

  submitForm = (data) => {
    if (this.props.card) {
      this.props.editACard(this.props.card.id, data);
    } else {
      this.props.addNewCard({
        id: v4(),
        known: false,
        ...data
      });
    }
    this.props.handleClose();
  }

  notifyFormError = (data) => {
    console.error('Form error:', data);
  }

  render() {
    let { card } = this.props;

    return (
      <Formsy.Form
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        onValidSubmit={this.submitForm}
        onInvalidSubmit={this.notifyFormError}
      >
        <FormsyText
          name="title"
          hintText="Write card title"
          floatingLabelText="Card title"
          required
          defaultValue={card ? card.title : ''}
        />
        <FormsyText
          name="description"
          hintText="description"
          floatingLabelText="Card description"
          multiLine={true}
          rows={2}
          defaultValue={card && card.description ? card.description : ''}
        />
        <FormsyText
          name="answer"
          required
          hintText="Write answer"
          floatingLabelText="Card answer"
          multiLine={true}
          rows={2}
          defaultValue={card ? card.answer : ''}
        />
        <RaisedButton
          type="submit"
          label="Submit"
          disabled={!this.state.canSubmit}
        />
      </Formsy.Form>
    );
  }
}

export default connect(null, actionsToState)(CardForm);
