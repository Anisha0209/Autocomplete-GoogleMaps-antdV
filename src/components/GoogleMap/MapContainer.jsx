import React from 'react';

import withInitMap from 'components/HOC/GoogleMap/withInitMap';

const MapContainer = ({ mapRef, isMapReady }) => {
  if (!isMapReady) {
    return <></>;
  }
  return <div ref={mapRef} style={{ width: '100%', height: '600px' }}></div>;
};

export default withInitMap(MapContainer);
