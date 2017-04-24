import * as types from '../constants/card'

const card = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CARDS:
      return [
        ...state,
        ...action.cards
      ];

    case types.ADD_CARD:
      return [
        ...state,
        action.card
      ]

    case types.EDIT_CARD:
      return state.map(card => {
        if (card.id === action.id) {
          return {
            ...card,
            id: card.id,
            title: action.data.title,
            description: action.data.description,
            answer: action.data.answer,
            known: card.known
          }
        }
        return card;
      })

    case types.DELETE_CARD:
      return state.filter(card => card.id !== action.id)

    case types.TOGGLE_KNOWN_UNKNOWN:
      return state.map(card => {
        if (card.id === action.id) {
          return {
            ...card,
            known: !card.known
          }
        }
        return card
      })

    default:
      return state
  }
}

export default card
