import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './Loader.style';

function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.loaderContainer}>
      <CircularProgress size={60} thickness={4} />
    </div>
  );
}

export default Loader;
