import React from 'react';
import PropTypes from 'prop-types';

import Error from '../Error';
import Map from '../Map';

import Loader from '../Loader';
import { useStyles } from './MainComponent.style';
import { useStore } from '../../state/useStore';

function MainComponent({ isLoading }) {
  const classes = useStyles();
  const { stationInformation, stationStatus } = useStore();

  return (
    <div className={classes.mainComponentContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>{stationInformation && stationStatus ? <Map /> : <Error />}</div>
      )}
    </div>
  );
}

MainComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default MainComponent;
