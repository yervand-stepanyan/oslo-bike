import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import PropTypes from 'prop-types';

import { MAP_CENTER, MAP_STYLE } from '../../globals/constants';
import PopupCard from '../PopupCard';
import { useStyles } from './Map.style';

function Map({ handleStationSelect, stationInformation }) {
  const classes = useStyles();
  const [viewport, setViewport] = useState({
    height: '100%',
    latitude: MAP_CENTER.latitude,
    longitude: MAP_CENTER.longitude,
    width: '100%',
    zoom: MAP_CENTER.zoom,
  });
  const [selectedStation, setSelectedStation] = useState(null);

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

  const handleStationClick = (event, station) => {
    event.preventDefault();

    setSelectedStation(station);

    handleStationSelect(station);
  };

  return (
    <div className={classes.mapContainer}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={MAP_STYLE}
        onViewportChange={newViewport => setViewport(newViewport)}
      >
        <div className={classes.navigationControlContainer}>
          <NavigationControl showCompass={false} />
        </div>
        {stationInformation &&
          stationInformation.map(station => (
            <Marker
              key={station.station_id}
              latitude={station.lat}
              longitude={station.lon}
            >
              <button
                className={classes.markerWrapper}
                onClick={e => handleStationClick(e, station)}
                type="button"
              >
                O
              </button>
            </Marker>
          ))}
        {selectedStation ? (
          <Popup
            closeOnClick={false}
            latitude={selectedStation.lat}
            longitude={selectedStation.lon}
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

Map.propTypes = {
  handleStationSelect: PropTypes.func.isRequired,
  stationInformation: PropTypes.array.isRequired,
};

export default Map;
