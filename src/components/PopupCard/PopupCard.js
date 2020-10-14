import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { AVAILABLE_INFO, ICON } from '../../globals/constants';
import { useStore } from '../../state/useStore';
import { useStyles } from './PopupCard.style';

function PopupCard({ address, name }) {
  const classes = useStyles();
  const {
    num_bikes_available: numOfBikes,
    num_docks_available: numOfParkings,
  } = useStore();

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
        <div className={classes.iconTextWrapper}>
          <div className={classes.bikeIconWrapper}>
            <img
              alt={ICON.bike.title}
              className={classes.bikeIcon}
              src={ICON.bike.src}
            />
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="subtitle1">
              {`${numOfBikes} ${
                numOfBikes === 1
                  ? AVAILABLE_INFO.bike.single
                  : AVAILABLE_INFO.bike.multi
              }`}
            </Typography>
          </div>
        </div>
        <div className={classes.iconTextWrapper}>
          <div className={classes.parkingIconWrapper}>
            <img
              alt={ICON.parking.title}
              className={classes.parkingIcon}
              src={ICON.parking.src}
            />
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="subtitle1">
              {`${numOfParkings} ${
                numOfParkings === 1
                  ? AVAILABLE_INFO.parking.single
                  : AVAILABLE_INFO.parking.multi
              }`}
            </Typography>
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