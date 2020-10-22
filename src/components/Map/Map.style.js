import { makeStyles } from '@material-ui/core/styles';

export const MARKER_SIZE = 22;

export const useStyles = makeStyles({
  mapContainer: {
    height: '80vh',
    width: '100%',
    '@media only screen and (orientation: landscape)': {
      height: '70vh',
    },
  },
  navigationControlContainer: {
    bottom: '40px',
    left: '10px',
    position: 'absolute',
  },
  markerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    height: `${MARKER_SIZE}px`,
    outline: 'none',
    width: `${MARKER_SIZE}px`,
  },
  markerAvailable: {
    backgroundColor: '#005FC9',
  },
  markerNotAvailable: {
    backgroundColor: '#808080',
  },
  numberSpan: {
    fontSize: '10px',
  },
  popup: {
    cursor: 'default',
  },
});
