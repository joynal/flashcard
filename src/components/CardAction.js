import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CardForm from './CardForm';
import '../styles/styles.scss';

class CardAction extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const dialog = (
      <Dialog
        title={this.props.card ? 'Edit card' : "Add flashcard"}
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        {this.props.card ? <CardForm card={this.props.card}/> : <CardForm /> }
      </Dialog>
    );

    if (this.props.card) {
      return (
        <div className="edit-button">
          <FlatButton label="Edit" onTouchTap={this.handleOpen}/>
          {dialog}
        </div>
      );
    } else {
      return (
        <div>
          <FloatingActionButton onTouchTap={this.handleOpen} className='add-button'>
            <ContentAdd />
          </FloatingActionButton>
          {dialog}
        </div>
      );
    }
  }
}

export default CardAction;
