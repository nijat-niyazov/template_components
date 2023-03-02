import React, { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const FindMe = ({ icon, log }) => {
  const [position, setPosition] = useState(null);

  console.log('rendered', log);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <div>
      <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>
    </div>
  );
};

export default FindMe;
