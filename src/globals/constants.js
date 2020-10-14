import bike from '../assets/icons/bicycle_32x32.png';
import parking from '../assets/icons/parking_32x32.png';
import logo from '../assets/images/logo_200x140.png';

export const API_ROUTES = [
  {
    name: 'station information',
    url: 'station_information.json',
  },
  {
    name: 'station status',
    url: 'station_status.json',
  },
];
export const ICON = {
  bike: {
    src: bike,
    title: 'bike',
  },
  parking: {
    src: parking,
    title: 'parking',
  },
};
export const LOGO_IMAGE = {
  src: logo,
  title: 'Oslo bike logo',
};
export const MAP_CENTER = {
  latitude: 59.91333,
  longitude: 10.73897,
  zoom: 11,
};
export const MAP_STYLE = 'mapbox://styles/mapbox/streets-v11';
export const TITLE = 'Oslo bike';
