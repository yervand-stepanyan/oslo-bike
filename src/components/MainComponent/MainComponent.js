import React from 'react';

import Buttons from '../Buttons';
import Error from '../Error';
import Map from '../Map';

import { useStyles } from './MainComponent.style';
import { useStore } from '../../state/useStore';

function MainComponent() {
  const classes = useStyles();
  const { stationInformation, stationStatus } = useStore();

  return (
    <div>
      {stationInformation && stationStatus ? (
        <div className={classes.mainComponentContainer}>
          <Map />
          <Buttons />
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default MainComponent;
