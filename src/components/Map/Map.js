import React, { useState } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import PropTypes from 'prop-types';

import { MAP_CENTER, MAP_STYLE } from '../../globals/constants';
import { useStyles } from './Map.style';

function Map({ stationInformation }) {
  const classes = useStyles();
  const [viewport, setViewport] = useState({
    height: '100%',
    latitude: MAP_CENTER.latitude,
    longitude: MAP_CENTER.longitude,
    width: '100%',
    zoom: MAP_CENTER.zoom,
  });

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
              <div>M</div>
            </Marker>
          ))}
      </ReactMapGL>
    </div>
  );
}

Map.propTypes = {
  stationInformation: PropTypes.array.isRequired,
};

export default Map;
