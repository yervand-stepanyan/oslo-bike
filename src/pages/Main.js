import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LocalParkingIcon from '@material-ui/icons/LocalParking';

import API from '../fetchAPI';
import { API_ROUTES } from '../globals/constants';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Map from '../components/Map';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [stationInformation, setStationInformation] = useState();
  const [stationStatus, setStationStatus] = useState();
  const [isBikeActive, setIsBikeActive] = useState(true);

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

  const handleBikeClick = () => {
    if (!isBikeActive) {
      setIsBikeActive(!isBikeActive);
    }
  };

  const handleParkingClick = () => {
    if (isBikeActive) {
      setIsBikeActive(!isBikeActive);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <Header />
      {stationInformation && stationStatus ? (
        <div className={classes.mapAndButtonGroupWrapper}>
          <Map
            stationInformation={stationInformation}
            stationStatus={stationStatus}
          />
          <div className={classes.buttonGroupContainer}>
            <ButtonGroup
              aria-label="outlined primary button group"
              className={classes.buttonGroup}
              color="primary"
              variant="contained"
              fullWidth
            >
              <Button
                className={
                  isBikeActive ? classes.activeBtn : classes.defaultBtn
                }
                onClick={handleBikeClick}
              >
                <DirectionsBikeIcon />
              </Button>
              <Button
                className={
                  !isBikeActive ? classes.activeBtn : classes.defaultBtn
                }
                onClick={handleParkingClick}
              >
                <LocalParkingIcon />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Main;
