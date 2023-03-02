import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.scss';
import { divIcon, Icon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import FindMe from './FindMe';

const LeafletMap = () => {
  // Steps ⤵

  // 1. npm install react-leaflet
  // 2. Mapcontainer and center(your location) --zoom(level)
  // 3. attribution - map provider url (from website https://react-leaflet.js.org/docs/start-setup/ )
  // 4. url - url from site
  // 5. reason of its to be piece of piece is beacuse we import it
  // 6. solve it we need upload css on line 3 and after that map will downloaded but not seenm because unknowingly reason it sets its height to 0 and we need change "className we defined" height to make map appear
  // 7. For custom icon need 'npm install leaflet' and its properties on customPopUpIcon "new Icon from leaflet" (https://www.flaticon.com/free-icon/placeholder_684908?term=location&page=1&position=7&origin=search&related_id=684908 is great website for icons)
  // 8. "npm i react-leaflet-cluster" properties got in customClusterIcon // to make different points get together as combionation
  // 9. import MarkerClusterGroup from 'react-leaflet-cluster'; to change its style we need change "className leaflet-div-icon"
  // 10. if we want we can change the TileLayer of map skin from website https://leaflet-extras.github.io/leaflet-providers/preview/ and change any map we want TileLayer url

  const locationsOfDifferentAreas = [
    { geocode: [40.3893897, 49.8035473], popUp: 'Hi I live here' },
    { geocode: [40.3595, 49.8266], popUp: "It's flame Towers" },
    { geocode: [40.3959, 49.8678], popUp: "It's Heydar Aliyev museum" },
  ];

  const customPopUpIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5836/5836608.png',
    iconSize: [45, 45],
  });

  const customClusterIcon = cluster => {
    return new divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      // for getting numbers inside of this we must write ⤴

      className: 'cluster-icon',
      iconSize: point(33, 33, true),
    });
  };

  return (
    // center is where your map will focus, zoom (level), scrollwheelzom true
    <MapContainer
      center={[51.505, -0.09]}
      // center={[40.3893897, 49.8035473]}
      zoom={18}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading //for performance downloading them one by one
        iconCreateFunction={customClusterIcon} // cluster icon
      >
        {locationsOfDifferentAreas.map(({ geocode, popUp }, key) => (
          // Marker gets position, icon attrbitutes
          <Marker
            position={geocode}
            key={key}
            icon={customPopUpIcon}
            eventHandlers={{
              mouseover: event => event.target.openPopup(),
              mouseout: event => event.target.closePopup(),
            }} // for hover showing up
          >
            {/* It's for when we click && hover to show some message */}
            <Popup>
              <h4>{popUp}</h4>
            </Popup>
          </Marker>
        ))}

        <FindMe icon={customPopUpIcon} />
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default LeafletMap;
