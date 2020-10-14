import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  popupCardContainer: {
    boxSizing: 'border-box',
    padding: '12px',
  },
  nameAddressContainer: {
    textAlign: 'center',
  },
  bikeParkingContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '16px',
  },
  bikeWrapper: {
    marginBottom: '10px',
  },
  icon: {
    height: '32px',
    weight: '32px',
  },
});
