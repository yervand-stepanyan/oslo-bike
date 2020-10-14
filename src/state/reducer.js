import { ADD_SELECTED_STATION } from './actions';

export const initialState = {};

export function stationReducer(state, action) {
  switch (action.type) {
    case ADD_SELECTED_STATION:
      return action.payload;
    default:
      return state;
  }
}
