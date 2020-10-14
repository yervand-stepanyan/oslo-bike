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
  iconTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  bikeIconWrapper: {
    height: '24px',
    weight: '32px',
  },
  bikeIcon: {
    height: '24px',
    weight: '32px',
  },
  parkingIconWrapper: {
    height: '32px',
    weight: '32px',
  },
  parkingIcon: {
    height: '32px',
    weight: '32px',
  },
  textWrapper: {
    marginLeft: '10px',
  },
});
