import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { AVAILABLE_INFO, ICON } from '../../globals/constants';
import { useStore } from '../../state/useStore';
import { useStyles } from './PopupCard.style';

function PopupCard({ address, name }) {
  const classes = useStyles();
  const { stateSelectedStation } = useStore();
  const {
    num_bikes_available: numOfBikes,
    num_docks_available: numOfDocks,
  } = stateSelectedStation;
  const bikesText = `${numOfBikes} ${
    numOfBikes === 1 ? AVAILABLE_INFO.bike.single : AVAILABLE_INFO.bike.multi
  }`;
  const docksText = `${numOfDocks} ${
    numOfDocks === 1
      ? AVAILABLE_INFO.parking.single
      : AVAILABLE_INFO.parking.multi
  }`;

  return (
    <div className={classes.popupCardContainer}>
      <div className={classes.nameAddressContainer}>
        <div className={classes.nameWrapper}>
          <span className={classes.span}>{name}</span>
        </div>
        <div className={classes.addressWrapper}>
          <span className={classes.span}>{address}</span>
        </div>
      </div>
      <div className={classes.bikeParkingContainer}>
        <div className={classes.iconTextWrapper}>
          <div className={classes.bikeIcon}>
            <img
              alt={ICON.bike.title}
              className={classes.bikeIcon}
              src={ICON.bike.src}
            />
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="subtitle1">{bikesText}</Typography>
          </div>
        </div>
        <div className={classes.iconTextWrapper}>
          <div className={classes.parkingIcon}>
            <img
              alt={ICON.parking.title}
              className={classes.parkingIcon}
              src={ICON.parking.src}
            />
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="subtitle1">{docksText}</Typography>
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
