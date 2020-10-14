export const ADD_SELECTED_STATION = 'ADD_SELECTED_STATION';

export function addSelectedStation(station) {
  return { type: ADD_SELECTED_STATION, payload: station };
}
