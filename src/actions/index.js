import * as types from '../constants/card'

export const fetchCard = cards => ({
  type: types.FETCH_CARDS,
  cards
})

export const addCard = card => ({
  type: types.ADD_CARD,
  card
})

export const toggleKnownUnknown = id => ({
  type: types.TOGGLE_KNOWN_UNKNOWN,
  id
})

export const editCard = (id, data) => ({
  type: types.EDIT_CARD,
  id,
  data
})

export const deleteCard = id => ({
  type: types.DELETE_CARD,
  id
})
