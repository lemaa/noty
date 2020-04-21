import { FETCH_NOTES, CREATE_NOTE, DELETE_NOTE } from '../actions/types';

export default function noteReducer(state = [], action) {
   switch (action.type) {
    case CREATE_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter(note => note._id !== action.payload.id);
    case FETCH_NOTES:
        return [...state, action.notes];
    default:
      return state;
  }
}