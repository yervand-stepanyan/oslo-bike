import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  popupCardContainer: {
    boxSizing: 'border-box',
    padding: '12px',
  },
  nameAddressContainer: {
    textAlign: 'center',
  },
  nameWrapper: {
    color: '#0B163F',
    fontSize: '19px',
    margin: '0 0 10px',
  },
  addressWrapper: {
    color: '#72718E',
    fontSize: '16px',
  },
  span: {
    cursor: 'text',
    userSelect: 'text',
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
  bikeIcon: {
    height: '24px',
    weight: '32px',
  },
  parkingIcon: {
    height: '32px',
    weight: '32px',
  },
  textWrapper: {
    color: '#0B163F',
    cursor: 'text',
    marginLeft: '10px',
    userSelect: 'text',
  },
});
