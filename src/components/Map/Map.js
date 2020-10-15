import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';

import { MAP_CENTER, MAP_STYLE } from '../../globals/constants';
import PopupCard from '../PopupCard';
import { useStyles } from './Map.style';
import { useStore } from '../../state/useStore';

function Map() {
  const classes = useStyles();
  const [viewport, setViewport] = useState({
    height: '100%',
    latitude: MAP_CENTER.latitude,
    longitude: MAP_CENTER.longitude,
    width: '100%',
    zoom: MAP_CENTER.zoom,
  });
  const [selectedStation, setSelectedStation] = useState(null);
  const {
    handleStationSelect,
    isBikeActive,
    stationInformation,
    stationStatus,
  } = useStore();
  const availableNumbers = isBikeActive
    ? stationStatus.map(station => station.num_bikes_available)
    : stationStatus.map(station => station.num_docks_available);

  useEffect(() => {
    const listener = event => {
      if (event.key === 'Escape') {
        setSelectedStation(null);
      }
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  const handlePopupClose = () => {
    setSelectedStation(null);
  };

  const handleMapClick = () => {
    if (selectedStation) {
      handlePopupClose();
    }
  };

  const handleStationClick = (event, station) => {
    event.preventDefault();

    setSelectedStation(station);

    handleStationSelect(station);

    if (selectedStation && selectedStation.station_id === station.station_id) {
      handlePopupClose();
    }
  };

  return (
    <div className={classes.mapContainer}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={MAP_STYLE}
        onViewportChange={newViewport => setViewport(newViewport)}
        onClick={handleMapClick}
      >
        <div className={classes.navigationControlContainer}>
          <NavigationControl showCompass={false} />
        </div>
        {stationInformation &&
          stationInformation.map((station, index) => (
            <Marker
              key={station.station_id}
              latitude={station.lat}
              longitude={station.lon}
            >
              <button
                className={`${classes.markerWrapper} ${
                  availableNumbers[index]
                    ? classes.markerAvailable
                    : classes.markerNotAvailable
                }`}
                onClick={e => handleStationClick(e, station)}
                type="button"
              >
                <span className={classes.numberSpan}>
                  {availableNumbers[index]}
                </span>
              </button>
            </Marker>
          ))}
        {selectedStation ? (
          <Popup
            anchor="top"
            className={classes.popup}
            closeOnClick={false}
            dynamicPosition={false}
            latitude={selectedStation.lat}
            longitude={selectedStation.lon}
            offsetLeft={11}
            offsetTop={22}
            onClose={() => handlePopupClose()}
          >
            <PopupCard
              address={selectedStation.address}
              name={selectedStation.name}
            >
              Station
            </PopupCard>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Map;
