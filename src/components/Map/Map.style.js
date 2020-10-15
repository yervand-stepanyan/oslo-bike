import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  mapContainer: {
    height: '85vh',
    width: '100%',
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
    height: '22px',
    outline: 'none',
    width: '22px',
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
