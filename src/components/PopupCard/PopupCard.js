import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { ICON } from '../../globals/constants';
import { useStyles } from './PopupCard.style';

function PopupCard({ address, name }) {
  const classes = useStyles();

  return (
    <div className={classes.popupCardContainer}>
      <div className={classes.nameAddressContainer}>
        <div>
          <Typography variant="h6">{name}</Typography>
        </div>
        <div>
          <Typography color="textSecondary" variant="subtitle1">
            {address}
          </Typography>
        </div>
      </div>
      <div className={classes.bikeParkingContainer}>
        <div className={classes.bikeWrapper}>
          <div>
            <img
              alt={ICON.bike.title}
              className={classes.icon}
              src={ICON.bike.src}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              alt={ICON.parking.title}
              className={classes.icon}
              src={ICON.parking.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

PopupCard.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PopupCard;
