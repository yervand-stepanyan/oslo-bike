import React, { useEffect, useReducer, useState } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LocalParkingIcon from '@material-ui/icons/LocalParking';

import { addSelectedStation } from '../state/actions';
import API from '../fetchAPI';
import { API_ROUTES } from '../globals/constants';
import Header from '../components/Header';
import { initialState, stationReducer } from '../state/reducer';
import Loader from '../components/Loader';
import Map from '../components/Map';
import StoreContext from '../state/context';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [isBikeActive, setIsBikeActive] = useState(true);
  const [stationInformation, setStationInformation] = useState();
  const [stationStatus, setStationStatus] = useState();
  const [stateSelectedStation, dispatchSelectedStation] = useReducer(
    stationReducer,
    initialState
  );

  const getData = async () => {
    try {
      const responseDataArray = await Promise.all(
        API_ROUTES.map(({ url }) => API.get(url))
      );

      await setStationInformation(responseDataArray[0].data.stations);
      await setStationStatus(responseDataArray[1].data.stations);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBikeSelect = () => {
    if (!isBikeActive) {
      setIsBikeActive(!isBikeActive);
    }
  };

  const handleParkingSelect = () => {
    if (isBikeActive) {
      setIsBikeActive(!isBikeActive);
    }
  };

  const handleStationSelect = station => {
    const filteredStation = stationStatus.find(
      stn => stn.station_id === station.station_id
    );

    dispatchSelectedStation(addSelectedStation(filteredStation));
  };

  return (
    <div className={classes.mainContainer}>
      <StoreContext.Provider value={stateSelectedStation}>
        <Header />
        {stationInformation && stationStatus ? (
          <div className={classes.mapAndButtonGroupWrapper}>
            <Map
              handleStationSelect={handleStationSelect}
              isBikeActive={isBikeActive}
              stationInformation={stationInformation}
              stationStatus={stationStatus}
            />
            <div className={classes.buttonGroupContainer}>
              <ButtonGroup
                aria-label="outlined primary button group"
                className={classes.buttonGroup}
                color="primary"
                fullWidth
                variant="contained"
              >
                <Button
                  className={
                    isBikeActive ? classes.activeBtn : classes.defaultBtn
                  }
                  onClick={handleBikeSelect}
                >
                  <DirectionsBikeIcon />
                </Button>
                <Button
                  className={
                    !isBikeActive ? classes.activeBtn : classes.defaultBtn
                  }
                  onClick={handleParkingSelect}
                >
                  <LocalParkingIcon />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </StoreContext.Provider>
    </div>
  );
}

export default Main;
