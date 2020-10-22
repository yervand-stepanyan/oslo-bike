import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  mainComponentContainer: {
    minHeight: '80vh',
    '@media only screen and (orientation: landscape)': {
      minHeight: '70vh',
    },
  },
});
