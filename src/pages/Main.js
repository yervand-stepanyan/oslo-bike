import React, { useEffect, useReducer, useState } from 'react';

import { addSelectedStation } from '../state/actions';
import API from '../fetchAPI';
import { API_ROUTES } from '../globals/constants';
import Header from '../components/Header';
import { initialState, stationReducer } from '../state/reducer';
import Loader from '../components/Loader';
import { loadState, saveState } from '../helpers/localStorage';
import MainComponent from '../components/MainComponent';
import StoreContext from '../state/context';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [isBikeActive, setIsBikeActive] = useState(
    loadState('isBikeActive') !== undefined ? loadState('isBikeActive') : true
  );
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBikeSelect = () => {
    if (!isBikeActive) {
      setIsBikeActive(!isBikeActive);

      saveState('isBikeActive', !isBikeActive);
    }
  };

  const handleParkingSelect = () => {
    if (isBikeActive) {
      setIsBikeActive(!isBikeActive);

      saveState('isBikeActive', !isBikeActive);
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
      <StoreContext.Provider
        value={{
          handleBikeSelect,
          handleParkingSelect,
          handleStationSelect,
          isBikeActive,
          stateSelectedStation,
          stationInformation,
          stationStatus,
        }}
      >
        <Header />
        {isLoading ? <Loader /> : <MainComponent />}
      </StoreContext.Provider>
    </div>
  );
}

export default Main;
