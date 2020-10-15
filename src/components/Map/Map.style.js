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
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
});
