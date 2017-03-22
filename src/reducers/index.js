import objectAssign from 'object-assign';
import initialState from './initialState';
import { ADD_CARD, EDIT_CARD, DELETE_CARD, TOGGLE_KNOWN_UNKNOWN } from '../constants/actionTypes';

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_CARD:
      return objectAssign({}, state, {
        cards: [
          ...state.cards,
          action.card
        ]
      });

    case EDIT_CARD:
      return objectAssign({}, state, {
        cards: state.cards.map(card => {
          if (card.id === action.id) {
            return objectAssign({}, card, {
              id: card.id,
              title: action.data.title,
              description: action.data.description,
              answer: action.data.answer,
              known: card.known,
            });
          }
          return card;
        })
      });

    case DELETE_CARD:
      return objectAssign({}, state, {
        cards: state.cards.filter(card => card.id !== action.id)
      });

    case TOGGLE_KNOWN_UNKNOWN:
      return objectAssign({}, state, {
        cards: state.cards.map(card => {
          if (card.id === action.id) {
            return objectAssign({}, card, {
              known: !card.known
            });
          }
          return card;
        })
      });

    default:
      return state;
  }
}

export default rootReducer;
