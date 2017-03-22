import * as types from '../constants/actionTypes';

export const addCard = (card) => {
  return {
    type: types.ADD_CARD,
    card
  };
}

export const toggleKnownUnknown = (id) => {
  return {
    type: types.TOGGLE_KNOWN_UNKNOWN,
    id
  }
}

export const editCard = (id, data) => {
  return {
    type: types.EDIT_CARD,
    id,
    data
  }
}

export const deleteCard = (id) => {
  return {
    type: types.DELETE_CARD,
    id
  }
}

// amount=0, will recive all cards
export const receiveCards = (amount=20) => {
  return {
    type: types.RECEIVE_CARDS,
    amount
  }
}
