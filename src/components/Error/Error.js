import React from 'react';

import Typography from '@material-ui/core/Typography';

import { ERROR_MESSAGE } from '../../globals/constants';
import { useStyles } from './Error.style';

function Error() {
  const classes = useStyles();
  return (
    <div className={classes.errorContainer}>
      <div className={classes.textWrapper}>
        <div>
          <Typography variant="h4" color="error">
            {ERROR_MESSAGE.title}
          </Typography>
        </div>
        <div>
          <Typography variant="h6">{ERROR_MESSAGE.subtitle}</Typography>
        </div>
      </div>
    </div>
  );
}

export default Error;
